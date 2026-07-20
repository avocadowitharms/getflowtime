const fs = require("fs");
const path = require("path");
const { facts, articleSchema } = require("./entity-schema");

const root = path.resolve(__dirname, "..");
const siteUrl = facts.siteUrl;
const socialImage = facts.socialImageUrl;
const categories = ["guides", "comparison", "adhd"];

function securityMeta() {
  return [
    '<meta http-equiv="Content-Security-Policy" content="default-src \'self\'; base-uri \'self\'; object-src \'none\'; img-src \'self\' data: https://flowtime-app.com; script-src \'self\' https://plausible.io \'unsafe-inline\'; style-src \'self\' \'unsafe-inline\'; connect-src \'self\' https://plausible.io; form-action \'self\'; upgrade-insecure-requests" />',
    '<meta name="referrer" content="strict-origin-when-cross-origin" />',
    '<meta http-equiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), payment=()" />'
  ].join("\n  ");
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    return { data: {}, body: markdown };
  }

  const data = {};
  match[1].split(/\r?\n/).forEach((line) => {
    const separator = line.indexOf(":");
    if (separator < 0) {
      return;
    }
    const key = line.slice(0, separator).trim();
    let value = line.slice(separator + 1).trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((item) => item.trim().replace(/^"|"$/g, ""))
        .filter(Boolean);
    } else {
      value = value.replace(/^"|"$/g, "");
    }
    data[key] = value;
  });

  return { data, body: markdown.slice(match[0].length) };
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/'/g, "&#39;");
}

function isSafeHref(value) {
  const normalized = String(value).trim().replace(/[\u0000-\u001f\u007f\s]+/g, "");
  if (!normalized) {
    return false;
  }
  if (/^(#|\/(?!\/)|\.{1,2}\/)/.test(normalized)) {
    return true;
  }
  return /^(https?:|mailto:)/i.test(normalized);
}

function inlineText(value) {
  return escapeHtml(value).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
}

function inlineMarkdown(value) {
  const source = String(value);
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let output = "";
  let lastIndex = 0;
  let match;

  while ((match = linkPattern.exec(source)) !== null) {
    output += inlineText(source.slice(lastIndex, match.index));
    output += isSafeHref(match[2])
      ? `<a href="${escapeAttribute(match[2])}">${inlineText(match[1])}</a>`
      : inlineText(match[1]);
    lastIndex = linkPattern.lastIndex;
  }

  return output + inlineText(source.slice(lastIndex));
}

function safeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function markdownToHtml(markdown) {
  const lines = markdown.trim().split(/\r?\n/);
  const html = [];
  let paragraph = [];
  let list = [];
  let table = [];

  function flushParagraph() {
    if (!paragraph.length) {
      return;
    }
    html.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  }

  function flushList() {
    if (!list.length) {
      return;
    }
    html.push(`<ul>${list.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ul>`);
    list = [];
  }

  function flushTable() {
    if (!table.length) {
      return;
    }
    const rows = table
      .filter((row) => !/^\|\s*-+/.test(row))
      .map((row) => row.split("|").slice(1, -1).map((cell) => cell.trim()));
    const head = rows.shift() || [];
    html.push([
      "<table>",
      `<thead><tr>${head.map((cell) => `<th>${inlineMarkdown(cell)}</th>`).join("")}</tr></thead>`,
      `<tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${inlineMarkdown(cell)}</td>`).join("")}</tr>`).join("")}</tbody>`,
      "</table>"
    ].join(""));
    table = [];
  }

  function flushAll() {
    flushParagraph();
    flushList();
    flushTable();
  }

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushAll();
      return;
    }

    if (trimmed.startsWith("|")) {
      flushParagraph();
      flushList();
      table.push(trimmed);
      return;
    }

    flushTable();

    const heading = trimmed.match(/^(#{2,3})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1].length;
      const text = heading[2].trim();
      const id = slugify(text.replace(/\?$/g, ""));
      html.push(`<h${level} id="${id}">${inlineMarkdown(text)}</h${level}>`);
      return;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      flushParagraph();
      list.push(trimmed.replace(/^[-*]\s+/, ""));
      return;
    }

    paragraph.push(trimmed);
  });

  flushAll();
  return html.join("\n");
}

function headings(markdown) {
  return markdown
    .split(/\r?\n/)
    .map((line) => line.match(/^##\s+(.+)$/))
    .filter(Boolean)
    .slice(0, 7)
    .map((match) => match[1].trim())
    .map((text) => ({ text, id: slugify(text.replace(/\?$/g, "")) }));
}

function wordCount(markdown) {
  return (markdown.replace(/^---[\s\S]*?---/, "").match(/\b[\w']+\b/g) || []).length;
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" })
    .format(new Date(`${value}T00:00:00`));
}

function readingTime(markdown) {
  const minutes = Math.max(4, Math.ceil(wordCount(markdown) / 220));
  return `${minutes} min read`;
}

function categoryName(category) {
  if (category === "comparison") {
    return "Comparison";
  }
  if (category === "adhd") {
    return "ADHD";
  }
  return "Guide";
}

function relatedArticles(current, posts) {
  const currentTags = new Set(current.data.tags || []);
  return posts
    .filter((post) => post.slug !== current.slug)
    .map((post) => ({
      ...post,
    score: (post.data.tags || []).filter((tag) => currentTags.has(tag)).length
    }))
    .sort((a, b) => b.score - a.score || new Date(b.data.date) - new Date(a.data.date))
    .slice(0, 3);
}

function getHreflangTags(post) {
  if (post.slug === "interrupting-autopilot-conscious-app-blocking") {
    return [
      `<link rel="alternate" hreflang="en" href="${siteUrl}/guides/interrupting-autopilot-conscious-app-blocking/" />`,
      `<link rel="alternate" hreflang="de" href="${siteUrl}/de/blog/autopilot-unterbrechen-apps-bewusst-blockieren/" />`,
      `<link rel="alternate" hreflang="fr" href="${siteUrl}/fr/blog/interrompre-pilote-automatique-blocage-applications/" />`,
      `<link rel="alternate" hreflang="x-default" href="${siteUrl}/guides/interrupting-autopilot-conscious-app-blocking/" />`
    ].join("\n  ");
  }
  return "";
}

function renderLocalizedPage(post, lang, slug, canonicalUrl, relDepth = "../../") {
  const isDe = lang === "de";
  const title = isDe
    ? "Den Autopiloten unterbrechen: Bewusste Entscheidungen beim Blockieren von Apps - Flowtime"
    : "Interrompre le pilote automatique : décider consciemment face au blocage des applications - Flowtime";
  const pageTitle = isDe
    ? "Den Autopiloten unterbrechen: Bewusste Entscheidungen beim Blockieren von Apps"
    : "Interrompre le pilote automatique : décider consciemment face au blocage des applications";
  const description = isDe
    ? "App-Blocker helfen am besten, wenn sie automatische Gewohnheiten unterbrechen. Erfahre, wie bewusste App-Blockierung in Flowtime Fokus, ADHS und Pausen unterstützt."
    : "Les bloqueurs d'applications fonctionnent mieux en interrompant les habitudes automatiques. Découvrez le blocage conscient avec Flowtime pour le TDAH et les pauses.";
  const authorLabel = isDe ? "Von Ava Thalheim" : "Par Ava Thalheim";
  const categoryLabel = isDe ? "Ratgeber" : "Guide";
  const readTimeLabel = isDe ? "5 Min. Lesezeit" : "5 min de lecture";

  const hreflangs = [
    `<link rel="alternate" hreflang="en" href="${siteUrl}/guides/interrupting-autopilot-conscious-app-blocking/" />`,
    `<link rel="alternate" hreflang="de" href="${siteUrl}/de/blog/autopilot-unterbrechen-apps-bewusst-blockieren/" />`,
    `<link rel="alternate" hreflang="fr" href="${siteUrl}/fr/blog/interrompre-pilote-automatique-blocage-applications/" />`,
    `<link rel="alternate" hreflang="x-default" href="${siteUrl}/guides/interrupting-autopilot-conscious-app-blocking/" />`
  ].join("\n  ");

  const deBodyHtml = `
            <h2 id="einfuehrung">Einleitung</h2>
            <p>Flowtime ist ein ADHS-freundlicher Fokus-Timer und eine App für mehr Zeitwahrnehmung, die flexible Fokus-Sessions, Pomodoro, Fokus-Erinnerungen, persönliche Zeiterfassung und optionales Apps-Blockieren kombiniert.</p>
            <p>Die meisten Menschen glauben, dass App-Blocker dazu da sind, sie an der Nutzung ablenkender Apps zu hindern. Aber das ist nicht das, was sie am besten können.</p>
            <p>Der eigentliche Wert liegt nicht darin, dich am Öffnen von Instagram, YouTube, Reddit oder TikTok zu hindern. Er liegt darin, das automatische Verhalten zu unterbrechen, das dich überhaupt erst dorthin geführt hat. Wenn du Apps während einer Fokus-Session blockierst, wird App-Blockierung zu einem Werkzeug, um automatische Smartphone-Nutzung zu unterbrechen, statt zu einer starren Einschränkung.</p>

            <h2 id="wir-verbringen-mehr-zeit-auf-autopilot-als-wir-denken">Wir verbringen mehr Zeit auf Autopilot als wir denken</h2>
            <p>Stell dir vor, du arbeitest an etwas Wichtigem. Ein paar Minuten später entsperrst du dein Smartphone. Du hast nicht darüber nachgedacht. Dein Daumen tippt auf dieselbe App wie immer.</p>
            <p>Erst nach einigen Minuten Scrollen merkst du, dass du eigentlich gar nach nichts Bestimmtem gesucht hast. Du bist einfach einer Gewohnheit gefolgt. Der unbewusste Griff zum Smartphone passiert schneller, als man denkt.</p>
            <p>Das passiert ständig. Nicht weil wir faul sind oder es an Motivation fehlt, sondern weil sich wiederholende Handlungen zu automatischem Verhalten werden. Wenn du dich fragst, <a href="/guides/why-do-i-forget-why-i-unlocked-my-phone/">warum du vergisst, warum du dein Handy entsperrt hast</a>, steckt genau diese Schleife dahinter.</p>
            <p>Für Menschen mit ADHS kann das besonders spürbar sein. Ein kleiner Impuls kann die Aufmerksamkeit umleiten, bevor du dich bewusst für einen Aufgabenwechsel entschieden hast. Apps bewusst blockieren hilft dabei, genau diese Impulse sichtbar zu machen – auch wenn das Phänomen keineswegs nur bei ADHS auftritt.</p>

            <h2 id="die-kraft-einer-kleinen-unterbrechung">Die Kraft einer kleinen Unterbrechung</h2>
            <p>Wenn eine blockierte App während einer Fokus-Session geöffnet wird, sperrt Flowtime dich nicht dauerhaft aus. Stattdessen entsteht eine kleine Pause.</p>
            <p>Anstatt direkt in die App weiterzuleiten, wirst du gebeten, eine bewusste Entscheidung zu treffen.</p>
            <p>Brauchst du diese App gerade wirklich? Oder hat dein Finger sie automatisch geöffnet?</p>
            <p>Diese kurze Unterbrechung kann ausreichen, um zu bemerken, was gerade passiert. So kannst du die automatische Handynutzung unterbrechen und Ablenkungen auf dem Smartphone reduzieren. Statt rein aus Gewohnheit fortzufahren, wählst du bewusst, was als Nächstes passiert.</p>

            <h2 id="du-bist-niemals-gefangen">Du bist niemals gefangen</h2>
            <p>Manche App-Blocker machen es schwer oder unmöglich, auf blockierte Apps zuzugreifen, bis ein Timer abläuft. Flowtime nutzt einen anderen Ansatz als App-Blocker mit Abbruchmöglichkeit.</p>
            <p>Wenn du die App wirklich brauchst, kannst du die Blockierung aufheben und mit dem fortfahren, was du tun musst.</p>
            <p>Pläne ändern sich. Prioritäten ändern sich.</p>
            <p>Manchmal ist das Prüfen einer Nachricht, das Öffnen von E-Mails oder das Nutzen einer anderen App genau die richtige Entscheidung. Flowtime ist ein App-Blocker ohne starren Lockout: Es entscheidet das nicht für dich, sondern stellt sicher, dass die Entscheidung wirklich bei dir liegt.</p>

            <h2 id="bewusstsein-ist-nuetzlicher-als-einschraenkung">Bewusstsein ist nützlicher als Einschränkung</h2>
            <p>Denke darüber nach, wie oft du dein Smartphone ohne klaren Grund entsperrst. Oder Social Media öffnest, während du auf etwas wartest. Oder Apps wechselst, einfach weil die Handlung automatisch geworden ist.</p>
            <p>Die meisten dieser Momente geschehen, bevor du bewusst entscheidest, was du tun möchtest. Wenn du wissen willst, <a href="/guides/what-is-an-app-blocker-and-when-is-it-actually-useful/">was ein App-Blocker ist und wann er wirklich hilft</a>, liegt der Schlüssel genau in diesem Unterschied zwischen Zwang und Bewusstsein.</p>
            <p>Manchmal wirst du trotzdem fortfahren. Manchmal wirst du feststellen, dass du die App gar nicht öffnen wolltest. Beide Ergebnisse sind völlig valide.</p>
            <p>Das Wichtige ist, dass du dich für bewusste Smartphone-Nutzung statt für eine automatische Reaktion entschieden hast.</p>

            <h2 id="es-hilft-bei-mehr-als-nur-prokrastination">Es hilft bei mehr als nur Prokrastination</h2>
            <p>App-Blocker werden meist als Tools präsentiert, um mehr Arbeit zu erledigen. Aber das Blockieren von Apps kann dir auch außerhalb der Arbeit helfen, präsent zu bleiben. Du kannst Fokus-Sessions genauso für bewusste Pausen nutzen wie für tiefes Arbeiten.</p>
            <p>Du könntest eine Fokus-Session starten während du:</p>
            <ul>
              <li>ein Buch liest</li>
              <li>mit deinem Hund spazieren gehst</li>
              <li>Zeit mit jemandem verbringst</li>
              <li>einem Hobby nachgehst</li>
              <li>eine Pause machst</li>
              <li>versuchst, die Arbeit gedanklich hinter dir zu lassen</li>
            </ul>
            <p>In diesen Situationen ist das Ziel nicht mehr Produktivität. Es geht darum zu verhindern, dass ein automatischer Griff zum Smartphone deine Aufmerksamkeit zurück in Arbeit, Nachrichten oder Gedankenschleifen zieht. Wer nach <a href="/comparison/forest-alternatives-if-gamification-isnt-what-youre-looking-for/">Forest-Alternativen ohne Gamification</a> sucht, findet oft, dass solche flexiblen Session-Grenzen den Alltag viel besser unterstützen. Du kannst sogar einen <a href="/guides/i-use-a-focus-timer-to-stop-focusing/">Fokus-Timer nutzen, um mit dem Fokussieren aufzuhören</a> und deine Erholung zu schützen.</p>
            <p>Das ist auch beim Thema Hyperfokus unterbrechen besonders relevant. In Phasen des Hyperfokus ist das Schwerste oft nicht der Anfang, sondern das Aussteigen oder das Verhindern von Neben-Ablenkungen. Wenn <a href="/guides/sometimes-the-problem-isnt-getting-into-flow-its-getting-out-of-it/">das Verlassen des Flows schwerfällt</a>, kann eine Fokus-Session einen klaren Rahmen schaffen, in dem ablenkende Apps blockiert sind – während du die Blockierung jederzeit bewusst aufheben kannst.</p>

            <h2 id="eine-andere-perspektive-auf-app-blockierung">Eine andere Perspektive auf App-Blockierung</h2>
            <p>Flowtime versucht nicht, Disziplin durch Zwang aufzubauen. Es bestraft keine Ablenkungen. Und es nimmt dir nicht die Möglichkeit, deine Meinung zu ändern.</p>
            <p>Es basiert auf einer einfachen Idee:</p>
            <p>Automatische Gewohnheiten sind schwer zu bemerken. Eine kleine Unterbrechung kann sie wieder in bewusste Entscheidungen verwandeln.</p>
            <p>Jedes Mal, wenn ein App-Blocker für ADHS oder den Arbeitsalltag ein automatisches Handeln unterbricht, bekommst du die Chance zu fragen:</p>
            <p>„Ist es das, was ich jetzt gerade wirklich tun möchte?“</p>
            <p>Manchmal wird die Antwort Ja sein. Manchmal Nein.</p>
            <p>So oder so liegt die Entscheidung wieder bei dir statt beim Autopiloten.</p>

            <h2 id="weiterlesen">Weiterlesen</h2>
            <ul>
              <li><a href="/guides/what-is-an-app-blocker-and-when-is-it-actually-useful/">Was ist ein App-Blocker und wann hilft er wirklich?</a></li>
              <li><a href="/guides/why-do-i-forget-why-i-unlocked-my-phone/">Warum vergesse ich, warum ich mein Handy entsperrt habe?</a></li>
              <li><a href="/guides/how-i-reduce-phone-distractions-when-my-adhd-brain-wants-to-check-everything/">Ablenkungen reduzieren, wenn das Gehirn alles prüfen will</a></li>
              <li><a href="/guides/sometimes-the-problem-isnt-getting-into-flow-its-getting-out-of-it/">Manchmal ist das Problem nicht der Flow, sondern das Herauskommen</a></li>
              <li><a href="/comparison/forest-alternatives-if-gamification-isnt-what-youre-looking-for/">Forest-Alternativen ohne Gamification</a></li>
              <li><a href="/guides/i-use-a-focus-timer-to-stop-focusing/">Ich nutze einen Fokus-Timer, um mit dem Fokussieren aufzuhören</a></li>
            </ul>
            <p>Flowtime ist ein flexibler Fokus-Timer, der Zeit sichtbarer macht, automatische Gewohnheiten unterbricht und dir stets die Kontrolle überlässt.</p>
  `;

  const frBodyHtml = `
            <h2 id="introduction">Introduction</h2>
            <p>Flowtime est un minuteur de concentration adapté au TDAH et une application de prise de conscience du temps qui combine des sessions de concentration flexibles (Flow Sessions), Pomodoro, des rappels de concentration, un suivi personnel du temps et un blocage d'applications optionnel.</p>
            <p>La plupart des gens pensent que les bloqueurs d'applications existent pour les empêcher d'utiliser des applications distrayantes. Mais ce n'est pas vraiment ce dans quoi ils créent le plus de valeur.</p>
            <p>La vraie valeur n'est pas de vous empêcher d'ouvrir Instagram, YouTube, Reddit ou TikTok. Elle consiste à interrompre le comportement automatique qui vous y a conduit. Lorsque vous bloquez des applications pendant une session, le blocage d'applications devient un moyen d'interrompre l'utilisation automatique du téléphone plutôt qu'un verrouillage strict.</p>

            <h2 id="nous-passons-plus-de-temps-en-pilote-automatique-que-nous-le-pensons">Nous passons plus de temps en pilote automatique que nous le pensons</h2>
            <p>Imaginez que vous travaillez sur quelque chose d'important. Quelques minutes plus tard, vous déverrouillez votre téléphone. Vous n'y avez pas pensé. Votre pouce touche la même application que d'habitude.</p>
            <p>Ce n'est qu'après quelques minutes de défilement que vous réalisez que vous ne cherchiez rien en particulier. Vous avez simplement suivi une habitude d'agir par habitude.</p>
            <p>Cela arrive constamment. Non pas par paresse ou manque de motivation, mais parce que les actions répétées deviennent automatiques. Si vous vous demandez <a href="/guides/why-do-i-forget-why-i-unlocked-my-phone/">pourquoi vous oubliez pourquoi vous avez déverrouillé votre téléphone</a>, cette boucle automatique en est généralement la cause.</p>
            <p>Pour les personnes atteintes de TDAH, cela peut être particulièrement visible. Une petite impulsion peut réorienter l'attention avant même que vous n'ayez pris une décision consciente. Le blocage d'applications pour le TDAH aide à mettre ces moments en lumière, même si cette habitude concerne tout le monde.</p>

            <h2 id="le-pouvoir-d-une-petite-interruption">Le pouvoir d'une petite interruption</h2>
            <p>Lorsqu'une application bloquée est ouverte pendant une session de concentration, Flowtime ne vous verrouille pas l'accès de façon permanente. À la place, il crée une courte pause.</p>
            <p>Plutôt que d'entrer immédiatement dans l'application, vous êtes invité à prendre une décision consciente.</p>
            <p>Avez-vous réellement besoin de cette application en ce moment ? Ou votre doigt l'a-t-il ouverte automatiquement ?</p>
            <p>Cette brève interruption suffit souvent à remarquer ce qui se passe. En intégrant cette pause, vous pouvez interrompre l'utilisation automatique du téléphone et réduire les distractions sur smartphone. Au lieu de continuer par simple habitude, vous choisissez quoi faire ensuite.</p>

            <h2 id="vous-n-etes-jamais-piege">Vous n'êtes jamais piégé</h2>
            <p>Certains bloqueurs d'applications rendent difficile ou impossible l'accès aux applications bloquées jusqu'à la fin d'un minuteur. Flowtime adopte une approche différente en tant que bloqueur d'applications désactivable.</p>
            <p>Si vous avez réellement besoin de l'application, vous pouvez volontairement désactiver le blocage et poursuivre ce que vous devez faire.</p>
            <p>Les plans changent. Les priorités changent.</p>
            <p>Parfois, vérifier un message, ouvrir vos courriels ou utiliser une autre application est la bonne décision. Flowtime est un bloqueur sans verrouillage strict : il n'est pas là pour décider à votre place, mais pour s'assurer que la décision vient bien de vous.</p>

            <h2 id="la-prise-de-conscience-est-plus-utile-que-la-restriction">La prise de conscience est plus utile que la restriction</h2>
            <p>Pensez à la fréquence à laquelle vous déverrouillez votre téléphone sans raison précise. Ou ouvrez les réseaux sociaux en attendant quelque chose. Ou changez d'application simplement parce que le geste est devenu automatique.</p>
            <p>La plupart de ces moments surviennent avant que vous ne décidiez consciemment de ce que vous voulez faire. Pour comprendre <a href="/guides/what-is-an-app-blocker-and-when-is-it-actually-useful/">ce qu'est un bloqueur d'applications et quand il est utile</a>, c'est précisément ce basculement de la restriction vers la conscience qui fait la différence.</p>
            <p>Parfois, vous continuerez quand même. Parfois, vous réaliserez que vous ne vouliez pas vraiment ouvrir l'application. Les deux résultats sont valables.</p>
            <p>L'important est que vous ayez opté pour une utilisation consciente du téléphone plutôt que de subir le pilote automatique.</p>

            <h2 id="cela-aide-pour-bien-plus-que-la-procrastination">Cela aide pour bien plus que la procrastination</h2>
            <p>Les bloqueurs d'applications sont généralement présentés comme des outils pour accomplir plus de travail. Mais bloquer des applications peut aussi vous aider à rester présent en dehors du travail. Vous pouvez bloquer des applications pendant une session dédiée au repos ou aux loisirs tout aussi efficacement que pour étudier.</p>
            <p>Vous pourriez démarrer une session de concentration tout en :</p>
            <ul>
              <li>lisant un livre</li>
              <li>promenant votre chien</li>
              <li>passant du temps avec un proche</li>
              <li>pratiquant un hobby</li>
              <li>prenant une vraie pause</li>
              <li>cherchant à vous détacher du travail</li>
            </ul>
            <p>Dans ces situations, l'objectif n'est pas une productivité accrue. Il s'agit d'éviter qu'une vérification automatique du téléphone ne ramène votre attention vers le travail, les réseaux sociaux ou les messages. Ceux qui cherchent des <a href="/comparison/forest-alternatives-if-gamification-isnt-what-youre-looking-for/">alternatives à Forest sans gamification</a> constatent souvent que des limites de session simples s'adaptent mieux à ces moments hors travail. Vous pouvez même utiliser un <a href="/guides/i-use-a-focus-timer-to-stop-focusing/">minuteur de concentration pour arrêter de me concentrer</a> et protéger votre repos.</p>
            <p>Cela est particulièrement pertinent pour sortir de l'hyperfocus. Pendant l'hyperfocus, le plus difficile n'est pas toujours de commencer, mais de se détacher d'une tâche. Quand <a href="/guides/sometimes-the-problem-isnt-getting-into-flow-its-getting-out-of-it/">sortir du flow devient difficile</a>, une session peut créer une période définie pendant laquelle les applications distrayantes sont bloquées, tout en vous permettant de désactiver le blocage si vous décidez consciemment qu'un accès est nécessaire.</p>

            <h2 id="une-autre-facon-de-penser-le-blocage-d-applications">Une autre façon de penser le blocage d'applications</h2>
            <p>Flowtime ne cherche pas à imposer une discipline par la contrainte. Il n'est pas là pour punir les distractions. Et il ne retire pas votre capacité à changer d'avis.</p>
            <p>Il repose sur une idée plus simple :</p>
            <p>Les habitudes automatiques sont difficiles à remarquer. Une petite interruption peut les transformer en décisions conscientes.</p>
            <p>Chaque fois qu'une application bloquée interrompt une action automatique, vous avez l'occasion de vous demander :</p>
            <p>« Est-ce vraiment ce que je veux faire en ce moment ? »</p>
            <p>Parfois la réponse sera oui. Parfois non.</p>
            <p>Dans tous les cas, la décision vous appartient plutôt qu'au pilote automatique.</p>

            <h2 id="continuer-la-lecture">Continuer la lecture</h2>
            <ul>
              <li><a href="/guides/what-is-an-app-blocker-and-when-is-it-really-useful/">Qu'est-ce qu'un bloqueur d'applications et quand est-il vraiment utile ?</a></li>
              <li><a href="/guides/why-do-i-forget-why-i-unlocked-my-phone/">Pourquoi est-ce que j'oublie pourquoi j'ai déverrouillé mon téléphone ?</a></li>
              <li><a href="/guides/how-i-reduce-phone-distractions-when-my-adhd-brain-wants-to-check-everything/">Réduire les distractions quand mon cerveau TDAH veut tout vérifier</a></li>
              <li><a href="/guides/sometimes-the-problem-isnt-getting-into-flow-its-getting-out-of-it/">Parfois le problème n'est pas d'entrer dans le flow, mais d'en sortir</a></li>
              <li><a href="/comparison/forest-alternatives-if-gamification-isnt-what-youre-looking-for/">Alternatives à Forest sans gamification</a></li>
              <li><a href="/guides/i-use-a-focus-timer-to-stop-focusing/">J'utilise un minuteur de concentration pour arrêter de me concentrer</a></li>
            </ul>
            <p>Flowtime est un minuteur de concentration flexible conçu pour rendre le temps plus visible, interrompre les habitudes automatiques et vous laisser le contrôle.</p>
  `;

  const bodyHtml = isDe ? deBodyHtml : frBodyHtml;

  const mockPostData = {
    category: "guides",
    data: {
      title: pageTitle,
      date: post.data.date,
      dateModified: post.data.date,
      author: post.data.author
    }
  };

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ${securityMeta()}
  <title>${escapeHtml(title)}</title>
  <link rel="icon" type="image/png" href="${relDepth}assets/logo-classic.png" />
  <link rel="apple-touch-icon" href="${relDepth}assets/logo-classic.png" />
  <meta name="description" content="${escapeHtml(description)}" />
  <link rel="canonical" href="${canonicalUrl}" />
  ${hreflangs}
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Flowtime" />
  <meta property="og:title" content="${escapeHtml(pageTitle)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:locale" content="${isDe ? "de_DE" : "fr_FR"}" />
  <meta property="og:image" content="${socialImage}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="${escapeHtml(pageTitle)} - Flowtime article preview" />
  <meta property="article:published_time" content="${post.data.date}" />
  <meta property="article:modified_time" content="${post.data.date}" />
  <meta property="article:author" content="${escapeHtml(post.data.author || "Ava Thalheim")}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(pageTitle)}" />
  <meta name="twitter:description" content="${escapeHtml(description)}" />
  <meta name="twitter:image" content="${socialImage}" />
  <meta name="twitter:image:alt" content="${escapeHtml(pageTitle)} - Flowtime article preview" />
  <link rel="stylesheet" href="${relDepth}style.css" />
  <link rel="stylesheet" href="${relDepth}css/blog.css" />
  <script type="application/ld+json">
    ${safeJsonLd(articleSchema(mockPostData, canonicalUrl, description, socialImage, "BlogPosting", lang))}
  </script>
  <script src="${relDepth}scripts/attribution.js"></script>
  <!-- Privacy-friendly analytics by Plausible -->
  <script async src="https://plausible.io/js/pa-0aTxMuaeWykhlYbR-knZ5.js"></script>
  <script>
    window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
    plausible.init()
  </script>
  <script src="${relDepth}scripts/conversion-analytics.js"></script>
</head>
<body id="top" data-theme="mono" data-blog-category="guides">
  <div id="site-header"></div>
  <main class="blog-main">
    <article class="blog-article">
      <header class="article-header">
        <p class="eyebrow">${escapeHtml(categoryLabel)}</p>
        <h1>${escapeHtml(pageTitle)}</h1>
        <p class="article-description">${escapeHtml(description)}</p>
        <div class="article-meta"><span>${escapeHtml(authorLabel)}</span><time datetime="${post.data.date}">${post.data.date}</time><span>${escapeHtml(readTimeLabel)}</span></div>
        <div class="article-tags"><span class="article-tag">app blocking</span><span class="article-tag">phone distraction</span><span class="article-tag">adhd</span><span class="article-tag">focus</span></div>
      </header>
      <div class="article-layout">
        <aside class="article-aside" aria-label="Article details">
          <div class="author-card"><img class="author-avatar" src="${relDepth}assets/ava-icon.png" alt="" width="180" height="180" loading="lazy" decoding="async" /><p><strong>Ava Thalheim</strong><span>Developer of Flowtime</span></p></div>
        </aside>
        <div class="article-content">
          <div class="article-body">
${bodyHtml}
          </div>
        </div>
      </div>
    </article>
  </main>
  <div id="site-footer"></div>
  <script>window.flowtimeRoot = "${relDepth}"; window.flowtimeLocale = "${lang}"; window.flowtimePreserveTitle = true; window.flowtimeNoWaitlist = true; window.renderSection = function (id, markup) { document.getElementById(id).outerHTML = markup; };</script>
  <script src="${relDepth}scripts/i18n.js"></script>
  <script src="${relDepth}sections/header.js"></script>
  <script src="${relDepth}sections/footer.js"></script>
  <script src="${relDepth}scripts/theme.js"></script>
</body>
</html>
`;
}

function renderPage(post, posts) {
  const title = post.data.seoTitle || `${post.data.title} - Flowtime`;
  const description = post.data.metaDescription || post.data.description;
  const tags = post.data.tags || [];
  const toc = headings(post.body);
  const bodyHtml = markdownToHtml(post.body);
  const related = relatedArticles(post, posts);
  const url = `${siteUrl}/${post.category}/${post.slug}/`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ${securityMeta()}
  <title>${escapeHtml(title)}</title>
  <link rel="icon" type="image/png" href="../../assets/logo-classic.png" />
  <link rel="apple-touch-icon" href="../../assets/logo-classic.png" />
  <meta name="description" content="${escapeHtml(description)}" />
  <link rel="canonical" href="${url}" />
  ${getHreflangTags(post)}
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Flowtime" />
  <meta property="og:title" content="${escapeHtml(post.data.title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${socialImage}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="${escapeHtml(post.data.title)} - Flowtime article preview" />
  <meta property="article:published_time" content="${post.data.date}" />
  <meta property="article:modified_time" content="${post.data.dateModified || post.data.updated || post.data.date}" />
  <meta property="article:author" content="${escapeHtml(post.data.author || "Ava Thalheim")}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(post.data.title)}" />
  <meta name="twitter:description" content="${escapeHtml(description)}" />
  <meta name="twitter:image" content="${socialImage}" />
  <meta name="twitter:image:alt" content="${escapeHtml(post.data.title)} - Flowtime article preview" />
  <link rel="stylesheet" href="../../style.css" />
  <link rel="stylesheet" href="../../css/blog.css" />
  <script type="application/ld+json">
    ${safeJsonLd(articleSchema(post, url, description, socialImage, post.category === "comparison" ? "Article" : "BlogPosting"))}
  </script>
  <script src="../../scripts/attribution.js"></script>
  <!-- Privacy-friendly analytics by Plausible -->
  <script async src="https://plausible.io/js/pa-0aTxMuaeWykhlYbR-knZ5.js"></script>
  <script>
    window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
    plausible.init()
  </script>
  <script src="../../scripts/conversion-analytics.js"></script>
</head>
<body id="top" data-theme="mono" data-blog-category="${post.category}">
  <div id="site-header"></div>
  <main class="blog-main">
    <article class="blog-article">
      <header class="article-header">
        <p class="eyebrow">${escapeHtml(categoryName(post.category))}</p>
        <h1>${escapeHtml(post.data.title)}</h1>
        <p class="article-description">${escapeHtml(post.data.description)}</p>
        <div class="article-meta"><span>By ${escapeHtml(post.data.author || "Ava Thalheim")}</span><time datetime="${post.data.date}">${formatDate(post.data.date)}</time><span>${readingTime(post.raw)}</span></div>
        <div class="article-tags">${tags.map((tag) => `<span class="article-tag">${escapeHtml(tag)}</span>`).join("")}</div>
      </header>
      <div class="article-layout">
        <aside class="article-aside" aria-label="Article details">
          <div class="author-card"><img class="author-avatar" src="../../assets/ava-icon.png" alt="" width="180" height="180" loading="lazy" decoding="async" /><p><strong>Ava Thalheim</strong><span>Developer of Flowtime</span></p></div>
          <nav class="article-toc" aria-label="Table of contents"><h2>Table of contents</h2><ol>${toc.map((item) => `<li><a href="#${item.id}">${escapeHtml(item.text)}</a></li>`).join("")}</ol></nav>
        </aside>
        <div class="article-content">
          <div class="article-body">
${bodyHtml}
          </div>
        </div>
      </div>
    </article>
    <section class="blog-related" aria-labelledby="related-title"><h2 id="related-title">Related articles</h2><div class="related-grid">${related.map((item) => `<a class="related-card" href="../../${item.category}/${item.slug}/index.html"><strong>${escapeHtml(item.data.title)}</strong><span>${escapeHtml(item.data.description)}</span></a>`).join("")}</div></section>
  </main>
  <div id="site-footer"></div>
  <script>window.flowtimeRoot = "../../"; window.flowtimePreserveTitle = true; window.flowtimeNoWaitlist = true; window.renderSection = function (id, markup) { document.getElementById(id).outerHTML = markup; };</script>
  <script src="../../scripts/i18n.js"></script>
  <script src="../../sections/header.js"></script>
  <script src="../../sections/footer.js"></script>
  <script src="../../scripts/theme.js"></script>
</body>
</html>
`;
}

function readPosts() {
  return categories.flatMap((category) => {
    const dir = path.join(root, "content", category);
    return fs.readdirSync(dir)
      .filter((file) => file.endsWith(".md"))
      .map((file) => {
        const raw = fs.readFileSync(path.join(dir, file), "utf8");
        const parsed = parseFrontmatter(raw);
        return {
          category,
          slug: file.replace(/\.md$/, ""),
          raw,
          body: parsed.body,
          data: parsed.data
        };
      })
      .filter((post) => post.data.draft !== "true");
  });
}

function renderPostsIndex(posts) {
  const entries = posts
    .slice()
    .sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
    .map((post) => ({
      slug: post.slug,
      category: post.category,
      title: post.data.title,
      description: post.data.description,
      date: post.data.date,
      author: post.data.author || "Ava Thalheim",
      authorRole: "Developer of Flowtime",
      tags: post.data.tags || [],
      featuredImage: post.data.featuredImage || "",
      readingTime: readingTime(post.raw)
    }));

  fs.writeFileSync(
    path.join(root, "scripts", "blog-posts.js"),
    `window.flowtimeBlogPosts = ${JSON.stringify(entries, null, 2)};\n`
  );
}

function main() {
  const posts = readPosts();
  posts.forEach((post) => {
    const dir = path.join(root, post.category, post.slug);
    fs.mkdirSync(dir, { recursive: true });
    const enHtml = renderPage(post, posts);
    fs.writeFileSync(path.join(dir, "index.html"), enHtml);

    if (post.slug === "interrupting-autopilot-conscious-app-blocking") {
      // Also write /blog/interrupting-autopilot-conscious-app-blocking/index.html
      const blogDir = path.join(root, "blog", post.slug);
      fs.mkdirSync(blogDir, { recursive: true });
      fs.writeFileSync(path.join(blogDir, "index.html"), enHtml);

      // Render German pages
      const deBlogDir = path.join(root, "de", "blog", "autopilot-unterbrechen-apps-bewusst-blockieren");
      fs.mkdirSync(deBlogDir, { recursive: true });
      const deHtml = renderLocalizedPage(post, "de", "autopilot-unterbrechen-apps-bewusst-blockieren", `${siteUrl}/de/blog/autopilot-unterbrechen-apps-bewusst-blockieren/`, "../../../");
      fs.writeFileSync(path.join(deBlogDir, "index.html"), deHtml);

      const deGuidesDir = path.join(root, "de", "guides", "autopilot-unterbrechen-apps-bewusst-blockieren");
      fs.mkdirSync(deGuidesDir, { recursive: true });
      fs.writeFileSync(path.join(deGuidesDir, "index.html"), deHtml);

      // Render French pages
      const frBlogDir = path.join(root, "fr", "blog", "interrompre-pilote-automatique-blocage-applications");
      fs.mkdirSync(frBlogDir, { recursive: true });
      const frHtml = renderLocalizedPage(post, "fr", "interrompre-pilote-automatique-blocage-applications", `${siteUrl}/fr/blog/interrompre-pilote-automatique-blocage-applications/`, "../../../");
      fs.writeFileSync(path.join(frBlogDir, "index.html"), frHtml);

      const frGuidesDir = path.join(root, "fr", "guides", "interrompre-pilote-automatique-blocage-applications");
      fs.mkdirSync(frGuidesDir, { recursive: true });
      fs.writeFileSync(path.join(frGuidesDir, "index.html"), frHtml);
    }
  });
  renderPostsIndex(posts);
}

main();
