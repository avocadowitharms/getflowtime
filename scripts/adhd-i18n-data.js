(function () {
  var locale = window.flowtimeLocale || "en";

  var data = {
    de: {
      labels: {
        category: "ADHS",
        related: "Ähnliche Artikel",
        toc: "Inhaltsverzeichnis",
        byAva: "Von Ava Thalheim",
        readArticle: "Artikel lesen",
        readingTime: "{minutes} Min. Lesezeit",
        countSingle: "1 Artikel",
        countMultiple: "{count} Artikel",
        all: "Alle"
      },
      tags: {
        adhd: "ADHS",
        focus: "Fokus",
        "time awareness": "Zeitwahrnehmung",
        hyperfocus: "Hyperfokus",
        procrastination: "Prokrastination",
        "executive dysfunction": "Exekutive Dysfunktion"
      },
      pages: {
        adhd: {
          metaTitle: "Flowtime ADHS-Ratgeber - Symptome, Fokus und Zeitwahrnehmung",
          metaDesc: "Flowtime ADHS-Ratgeber über Symptome, ADHS bei Erwachsenen, Hyperfokus, exekutive Dysfunktion, Zeitblindheit, Erinnerungen und Stopp-Punkte.",
          eyebrow: "ADHS-Ratgeber",
          title: "ADHS, Fokus und Zeitwahrnehmung.",
          desc: "Lies über ADHS Symptome, ADHS bei Erwachsenen, Hyperfokus, exekutive Dysfunktion, Zeitblindheit, Aufmerksamkeitswechsel und externe Fokus-Hinweise.",
          searchPlaceholder: "ADHS-Artikel suchen",
          sortNewest: "Neueste zuerst",
          sortOldest: "Älteste zuerst",
          emptyMsg: "Keine ADHS-Artikel entsprechen deiner Suche."
        }
      },
      metadata: {
        "what-is-adhd": {
          title: "Was ist ADHS? Symptome, Fokus und das ADHS-Gehirn",
          desc: "Was ist ADHS? Erfahre, wie ADHS Aufmerksamkeit, Fokus, Impulsivität, exekutive Funktionen und den Alltag Erwachsener beeinflussen kann."
        },
        "adhd-symptoms": {
          title: "ADHS Symptome bei Erwachsenen: Anzeichen, die du vielleicht erkennst",
          desc: "ADHS Symptome bei Erwachsenen können Ablenkung, Hyperfokus, Prokrastination, innere Unruhe und Schwierigkeiten beim Starten von Aufgaben umfassen."
        }
      },
      articles: {
        "what-is-adhd": {
          title: "Was ist ADHS? Symptome, Fokus und das ADHS-Gehirn",
          description: "Ein vorsichtiger, praktischer Einstieg in ADHS, Aufmerksamkeit, Fokus, Hyperfokus, exekutive Dysfunktion, Zeitblindheit und den Alltag Erwachsener.",
          readingTime: "5 Min. Lesezeit",
          toc: ["Was bedeutet ADHS?", "ADHS ist nicht einfach Ablenkung", "Die drei ADHS-Präsentationen", "ADHS und Fokus", "Was ist ADHS-Hyperfokus?", "ADHS und exekutive Dysfunktion", "ADHS und Zeitblindheit"],
          bodyHtml: `
<p>ADHS wird oft als Problem mit Aufmerksamkeit beschrieben.</p>
<p>Diese Beschreibung ist technisch gesehen richtig.</p>
<p>Aber sie ist auch unvollständig.</p>
<p>Für viele Menschen mit ADHS besteht das Problem nicht einfach darin, dass sie sich nicht konzentrieren können.</p>
<p>Manchmal können sie nicht anfangen.</p>
<p>Manchmal können sie nicht aufhören.</p>
<p>Manchmal springt ihre Aufmerksamkeit zwischen fünf verschiedenen Dingen hin und her.</p>
<p>Und manchmal versinken sie so sehr in einer Sache, dass Stunden verschwinden, ohne dass sie es bemerken.</p>
<p>ADHS kann beeinflussen, wie Aufmerksamkeit gelenkt wird, wie Aufgaben begonnen werden, wie Zeit wahrgenommen wird und wie leicht das Gehirn von einer Aktivität zur nächsten wechselt.</p>
<h2 id="was-bedeutet-adhs">Was bedeutet ADHS?</h2>
<p>ADHS steht für Aufmerksamkeitsdefizit-Hyperaktivitätsstörung.</p>
<p>Es ist eine neuroentwicklungsbedingte Störung, die Aufmerksamkeit, Impulsivität und die Regulation von Aktivität beeinflussen kann.</p>
<p>ADHS beginnt oft in der Kindheit, aber es verschwindet nicht einfach, wenn jemand erwachsen wird.</p>
<p>Die Art, wie es sich zeigt, kann sich verändern.</p>
<p>Ein erwachsener Mensch mit ADHS rennt vielleicht nicht sichtbar durch den Raum.</p>
<p>Stattdessen kann sich Hyperaktivität wie innere Unruhe anfühlen.</p>
<p>Ständige Gedanken.</p>
<p>Zwischen Aufgaben wechseln.</p>
<p>Das Handy checken, ohne sich bewusst dafür entschieden zu haben.</p>
<p>Oder sich zutiefst unwohl fühlen, wenn gerade nichts passiert.</p>
<h2 id="adhs-ist-nicht-einfach-ablenkung">ADHS ist nicht einfach Ablenkung</h2>
<p>Alle Menschen sind mal abgelenkt.</p>
<p>Alle schieben Dinge auf.</p>
<p>Alle vergessen gelegentlich etwas.</p>
<p>Bei ADHS können diese Muster so häufig auftreten, dass sie den Alltag beeinträchtigen.</p>
<p>Du setzt dich hin, um eine E-Mail zu beantworten, und stellst plötzlich fest, dass du deinen gesamten Desktop neu sortiert hast.</p>
<p>Du weißt genau, was du tun musst, fühlst dich aber unfähig anzufangen.</p>
<p>Du öffnest dein Handy, um eine Benachrichtigung zu prüfen, und <a href="/guides/why-do-i-forget-why-i-unlocked-my-phone/">vergisst, warum du es entsperrt hast</a>.</p>
<p>Oder du arbeitest stundenlang intensiv an etwas und bemerkst die Zeit erst, als es draußen plötzlich dunkel ist.</p>
<p>Die Schwierigkeit liegt oft nicht darin zu verstehen, was passieren müsste.</p>
<p>Sie liegt darin, Aufmerksamkeit und Handlung zu regulieren.</p>
<h2 id="die-drei-adhs-prasentationen">Die drei ADHS-Präsentationen</h2>
<p>ADHS Symptome werden im Allgemeinen in drei Präsentationen eingeteilt.</p>
<h3 id="vorwiegend-unaufmerksame-prasentation">Vorwiegend unaufmerksame Präsentation</h3>
<p>Dazu können Schwierigkeiten gehören, Aufmerksamkeit aufrechtzuerhalten, Vergesslichkeit, Dinge zu verlieren, Details zu übersehen und Aufgaben zu organisieren.</p>
<p>Menschen mit unaufmerksamer ADHS wirken eher ruhig oder abwesend als sichtbar hyperaktiv.</p>
<h3 id="vorwiegend-hyperaktiv-impulsive-prasentation">Vorwiegend hyperaktiv-impulsive Präsentation</h3>
<p>Dazu können Unruhe, schnelles Handeln ohne vollständiges Abwägen der Folgen, Unterbrechen in Gesprächen oder Schwierigkeiten beim Warten gehören.</p>
<p>Bei Erwachsenen kann sich Hyperaktivität auch innerlich anfühlen.</p>
<p>Der Körper kann still sein, während das Gehirn alles andere als still ist.</p>
<h3 id="kombinierte-prasentation">Kombinierte Präsentation</h3>
<p>Die kombinierte ADHS umfasst deutliche Symptome aus Unaufmerksamkeit und Hyperaktivität oder Impulsivität.</p>
<p>ADHS kann von Mensch zu Mensch sehr unterschiedlich aussehen.</p>
<p>Für eine alltagsnähere Liste von Merkmalen lies <a href="/adhd/adhd-symptoms/">ADHS Symptome bei Erwachsenen: Anzeichen, die du vielleicht erkennst</a>.</p>
<h2 id="adhs-und-fokus">ADHS und Fokus</h2>
<p>Eines der größten Missverständnisse über ADHS ist die Vorstellung, Menschen mit ADHS könnten sich einfach nicht konzentrieren.</p>
<p>Viele können sich unglaublich tief konzentrieren.</p>
<p>Die Schwierigkeit kann darin liegen zu steuern, wohin dieser Fokus geht.</p>
<p>Ein spannendes Projekt kann deine Aufmerksamkeit sechs Stunden lang halten.</p>
<p>Eine fünfminütige Verwaltungsaufgabe kann sich fast unmöglich anfühlen.</p>
<p>Darum funktioniert klassische Produktivitätsberatung bei ADHS nicht immer gut.</p>
<p>„Konzentrier dich einfach.“</p>
<p>„Entferne Ablenkungen.“</p>
<p>„Mach die Aufgabe fertig.“</p>
<p>Das Problem ist selten fehlende Einsicht.</p>
<p>Du weißt wahrscheinlich schon, was du tun solltest.</p>
<p>Der schwierige Teil kann sein, Aufmerksamkeit absichtlich zu lenken.</p>
<h2 id="was-ist-adhs-hyperfokus">Was ist ADHS-Hyperfokus?</h2>
<p>Hyperfokus beschreibt Phasen extrem intensiver Konzentration auf eine Aktivität.</p>
<p>Während Hyperfokus kann die Wahrnehmung anderer Dinge verblassen.</p>
<p>Zeit.</p>
<p>Hunger.</p>
<p>Benachrichtigungen.</p>
<p>Menschen, die sprechen.</p>
<p>Sogar körperliches Unbehagen.</p>
<p>Hyperfokus kann unglaublich nützlich sein, wenn er zur richtigen Zeit und bei der richtigen Aufgabe passiert.</p>
<p>Er kann auch erschöpfend sein, wenn er versehentlich passiert.</p>
<p>Manchmal ist das Problem nicht, in den Fokus zu kommen.</p>
<p>Es ist, wieder herauszukommen.</p>
<p>Externe Erinnerungen, Timer und bewusste Stopp-Punkte können helfen, vergehende Zeit sichtbarer zu machen. Ich habe dazu mehr in <a href="/guides/adhd-hyperfocus-how-to-stop-without-killing-your-focus/">ADHS-Hyperfokus: Aufhören, ohne den Fokus kaputtzumachen</a> geschrieben.</p>
<p>Diese Idee ist einer der Gründe, warum ich Flowtime gebaut habe.</p>
<p>Nicht, um mich zu zwingen, stärker zu fokussieren.</p>
<p>Manchmal nutze ich es, um mich daran zu erinnern aufzuhören.</p>
<h2 id="adhs-und-exekutive-dysfunktion">ADHS und exekutive Dysfunktion</h2>
<p>Exekutive Funktionen sind mentale Prozesse, die an Planung, Aufgabenstart, Arbeitsgedächtnis und Verhaltensregulation beteiligt sind.</p>
<p>ADHS kann diese Prozesse beeinflussen.</p>
<p>Du möchtest eine Aufgabe vielleicht wirklich erledigen.</p>
<p>Du verstehst vielleicht genau, wie du sie erledigen kannst.</p>
<p>Du bist vielleicht sogar gestresst, weil du sie nicht erledigst.</p>
<p>Und fängst trotzdem nicht an.</p>
<p>Diese Erfahrung wird oft als exekutive Dysfunktion beschrieben.</p>
<p>Aufgaben in kleinere Schritte zu teilen, Entscheidungen zu reduzieren und externe Hinweise zu nutzen, kann den Anfang manchmal leichter machen.</p>
<h2 id="adhs-und-zeitblindheit">ADHS und Zeitblindheit</h2>
<p>Fünf Minuten.</p>
<p>Zwanzig Minuten.</p>
<p>Zwei Stunden.</p>
<p>Für manche Menschen mit ADHS können sich diese Zeitspannen überraschend ähnlich anfühlen, wenn sie tief fokussiert sind.</p>
<p>Schwierigkeiten, vergehende Zeit zu bemerken oder einzuschätzen, werden informell oft Zeitblindheit genannt.</p>
<p>Das kann Übergänge erschweren.</p>
<p>Es kann auch zu Zuspätkommen, versehentlichem Hyperfokus und dem Gefühl beitragen, dass ein ganzer Tag einfach verschwunden ist.</p>
<p>Sichtbare Timer und Erinnerungen können als externe Signale dienen, wenn dein inneres Zeitgefühl gerade nicht besonders hilfreich ist. Mehr dazu findest du in <a href="/guides/why-adhd-makes-you-lose-track-of-time/">Warum ADHS dazu führen kann, dass du die Zeit aus dem Blick verlierst</a> und <a href="/guides/gentle-time-reminders-for-adhd-time-blindness/">Flexible Zeiterinnerungen bei ADHS-Zeitblindheit</a>.</p>
<h2 id="adhs-im-alltag">ADHS im Alltag</h2>
<p>ADHS kann viel mehr beeinflussen als Arbeit oder Schule.</p>
<p>Es kann sich auswirken auf:</p>
<ul><li>Haushaltsorganisation</li><li>Gespräche</li><li>Beziehungen</li><li>Schlafroutinen</li><li>Hobbys</li><li>Termine verwalten</li><li>zwischen Aktivitäten wechseln</li><li>sich an kleine Aufgaben erinnern</li><li>Handynutzung</li><li>Erholung</li></ul>
<p>Sogar Entspannen kann sich manchmal schwierig anfühlen.</p>
<p>Du hast endlich freie Zeit.</p>
<p>Und dein Gehirn beginnt sofort, nach dem nächsten Projekt zu suchen.</p>
<h2 id="habe-ich-adhs">Habe ich ADHS?</h2>
<p>ADHS-Merkmale bei dir wiederzuerkennen bedeutet nicht automatisch, dass du ADHS hast.</p>
<p>Viele Erfahrungen, die mit ADHS verbunden werden, können auch andere Gründe haben.</p>
<p>Online-Artikel und Symptomlisten können ADHS nicht diagnostizieren.</p>
<p>Wenn ADHS Symptome deinen Alltag deutlich beeinflussen und du Klarheit möchtest, sprich am besten mit einer qualifizierten medizinischen Fachperson.</p>
<h2 id="mit-deiner-aufmerksamkeit-arbeiten">Mit deiner Aufmerksamkeit arbeiten</h2>
<p>Es gibt kein einzelnes Produktivitätssystem, das für jedes ADHS-Gehirn funktioniert.</p>
<p>Für mich war die größte Veränderung, nicht mehr zu versuchen, meine Aufmerksamkeit in ein perfekt strukturiertes System zu zwingen.</p>
<p>Stattdessen begann ich, nach externen Hinweisen zu suchen.</p>
<p>Timer.</p>
<p>Erinnerungen.</p>
<p>App-Blocking.</p>
<p>Klare Stopp-Punkte.</p>
<p>Tools, die Zeit und Übergänge sichtbarer machen.</p>
<p>Das ist auch die Philosophie hinter Flowtime.</p>
<p>Ein Fokus-Tracker, gebaut um die Idee, dass du manchmal Hilfe beim Starten brauchst.</p>
<p>Und manchmal eine Erinnerung, wieder aufzutauchen. Die persönliche Version davon steht in <a href="/guides/i-use-a-focus-timer-to-stop-focusing/">Ich nutze einen Fokus-Timer, um abzuschalten.</a>.</p>`
        },
        "adhd-symptoms": {
          title: "ADHS Symptome bei Erwachsenen: Anzeichen, die du vielleicht erkennst",
          description: "Ein persönlicher, vorsichtiger Guide zu ADHS Symptomen bei Erwachsenen, darunter Ablenkung, Hyperfokus, Prokrastination, innere Unruhe, Zeitblindheit und Aufgabenwechsel.",
          readingTime: "5 Min. Lesezeit",
          toc: ["Schwierigkeiten, Aufmerksamkeit zu halten", "Hyperfokus", "Schwierigkeiten beim Starten von Aufgaben", "Prokrastination", "Zeit aus dem Blick verlieren", "Aufmerksamkeitswechsel", "Vergesslichkeit"],
          bodyHtml: `
<p>Wenn Menschen sich ADHS vorstellen, denken sie oft an ein Kind, das nicht stillsitzen kann.</p>
<p>ADHS bei Erwachsenen sieht nicht immer so aus.</p>
<p>Es kann aussehen wie eine Stunde lang auf eine einfache Aufgabe zu starren, ohne anzufangen.</p>
<p>Bis Mitternacht zu arbeiten, weil du vergessen hast aufzuhören.</p>
<p>Dein Handy wegen einer Benachrichtigung zu öffnen und zwanzig Minuten zu verlieren.</p>
<p>Dich körperlich unruhig zu fühlen, wenn du dich eigentlich entspannen sollst.</p>
<p>Oder dich ständig zu fragen, warum einfache Dinge so viel Aufwand brauchen.</p>
<p>ADHS Symptome können sich bei Erwachsenen anders zeigen.</p>
<p>Hier sind einige häufige Erfahrungen, die Menschen mit ADHS vielleicht wiedererkennen.</p>
<p>Für einen breiteren Einstieg lies zuerst <a href="/adhd/what-is-adhd/">Was ist ADHS? Symptome, Fokus und das ADHS-Gehirn</a>.</p>
<h2 id="schwierigkeiten-aufmerksamkeit-zu-halten">Schwierigkeiten, Aufmerksamkeit zu halten</h2>
<p>Du beginnst zu lesen.</p>
<p>Ein paar Absätze später merkst du, dass deine Augen weitergewandert sind, dein Gehirn aber nicht mehr zugehört hat.</p>
<p>Du gehst in ein Gespräch mit der Absicht zuzuhören und bemerkst plötzlich, dass du an etwas völlig anderes gedacht hast.</p>
<p>Aufmerksamkeit zu halten kann schwierig sein, besonders wenn etwas repetitiv ist oder sich nicht unmittelbar interessant anfühlt.</p>
<p>Das bedeutet nicht, dass jemand mit ADHS nie aufmerksam ist.</p>
<p>Aufmerksamkeit kann stark vom Kontext abhängen.</p>
<h2 id="hyperfokus">Hyperfokus</h2>
<p>ADHS kann Ablenkung bedeuten.</p>
<p>Es kann auch das komplette Gegenteil bedeuten.</p>
<p>Hyperfokus ist eine Phase intensiver Konzentration, in der alles außerhalb der aktuellen Aktivität weniger bemerkbar wird.</p>
<p>Du vergisst vielleicht zu essen.</p>
<p>Ignorierst Benachrichtigungen.</p>
<p>Verlierst die Zeit aus dem Blick.</p>
<p>Oder arbeitest weiter, lange nachdem du eigentlich aufhören wolltest.</p>
<p>Hyperfokus kann sich produktiv anfühlen.</p>
<p>Bis du merkst, dass du seit fünf Stunden in derselben Position sitzt.</p>
<p>Ich habe einen ausführlicheren Guide zu <a href="/guides/adhd-hyperfocus-how-to-stop-without-killing-your-focus/">ADHS-Hyperfokus und dem Aufhören, ohne den Fokus kaputtzumachen</a> geschrieben.</p>
<h2 id="schwierigkeiten-beim-starten-von-aufgaben">Schwierigkeiten beim Starten von Aufgaben</h2>
<p>Du weißt, was du tun musst.</p>
<p>Die Aufgabe ist nicht besonders kompliziert.</p>
<p>Vielleicht willst du sie sogar machen.</p>
<p>Aber du scheinst nicht anfangen zu können.</p>
<p>Das ist eine der frustrierendsten ADHS-Erfahrungen.</p>
<p>Von außen kann es wie Prokrastination aussehen.</p>
<p>Innerlich kann es sich anfühlen, als würdest du zwischen Absicht und Handlung feststecken.</p>
<p>Den ersten Schritt extrem klein zu machen, kann diese Hürde manchmal senken.</p>
<p>Nicht „Küche aufräumen“.</p>
<p>Einen Teller wegräumen.</p>
<h2 id="prokrastination">Prokrastination</h2>
<p>ADHS-Prokrastination bedeutet nicht immer, Arbeit zu vermeiden.</p>
<p>Manchmal scheint das Gehirn auf Dringlichkeit zu warten.</p>
<p>Eine Aufgabe, die sich drei Wochen lang unmöglich angefühlt hat, wird am Abend vor der Deadline plötzlich machbar.</p>
<p>Druck erzeugt Stimulation.</p>
<p>Die Aufgabe wird unmittelbar.</p>
<p>Aufmerksamkeit rastet endlich ein.</p>
<p>Das Problem ist, dass es erschöpfend sein kann, ständig auf Notfälle angewiesen zu sein, um Aufgaben zu starten.</p>
<h2 id="zeit-aus-dem-blick-verlieren">Zeit aus dem Blick verlieren</h2>
<p>Du schaust auf die Uhr.</p>
<p>Es ist 14:00.</p>
<p>Du machst etwas, das sich wie zwanzig Minuten anfühlt.</p>
<p>Es ist 17:30.</p>
<p>Schwierigkeiten, vergehende Zeit wahrzunehmen, werden häufig als Zeitblindheit beschrieben.</p>
<p>Das kann Termine, Arbeit, Hobbys und Übergänge zwischen Aktivitäten beeinflussen.</p>
<p>Externe Timer und Erinnerungen können Signale schaffen, dass Zeit vergangen ist. <a href="/guides/gentle-time-reminders-for-adhd-time-blindness/">Flexible Zeiterinnerungen bei ADHS-Zeitblindheit</a> geht tiefer auf diese Idee ein.</p>
<h2 id="aufmerksamkeitswechsel">Aufmerksamkeitswechsel</h2>
<p>Eine Benachrichtigung.</p>
<p>Ein Gedanke.</p>
<p>Ein Browser-Tab.</p>
<p>Plötzlich ist die ursprüngliche Aufgabe weg.</p>
<p>Menschen mit ADHS können besonders empfindlich dafür sein, dass Aufmerksamkeit zu etwas Neuem oder unmittelbar Interessantem gezogen wird.</p>
<p>Ich denke dabei an Aufmerksamkeits-Hijacking.</p>
<p>Die Ablenkung unterbricht die Aufgabe nicht nur.</p>
<p>Sie ersetzt sie.</p>
<p>Manchmal merkst du es erst zwanzig Minuten später. Das ähnelt dem Handy-Muster, das ich in <a href="/guides/why-do-i-forget-why-i-unlocked-my-phone/">Warum vergesse ich, warum ich mein Handy entsperrt habe?</a> beschreibe.</p>
<h2 id="vergesslichkeit">Vergesslichkeit</h2>
<p>In einen Raum gehen und vergessen, warum.</p>
<p>Beim Duschen an etwas Wichtiges denken und es fünf Minuten später komplett vergessen.</p>
<p>Einen Termin verpassen, den du wirklich wahrnehmen wolltest.</p>
<p>ADHS kann das Arbeitsgedächtnis beeinflussen.</p>
<p>Information kann sich in einem Moment unglaublich wichtig anfühlen und einfach verschwinden, wenn die Aufmerksamkeit wechselt.</p>
<p>Externe Systeme können helfen.</p>
<p>Notizen.</p>
<p>Kalender.</p>
<p>Erinnerungen.</p>
<p>Alles, was bedeutet, dass dein Gehirn nicht alles gleichzeitig halten muss.</p>
<h2 id="innere-unruhe">Innere Unruhe</h2>
<p>Hyperaktivität ist bei Erwachsenen nicht immer sichtbar.</p>
<p>Manchmal fühlt sie sich innerlich an.</p>
<p>Ein ständiges Bedürfnis, etwas zu tun.</p>
<p>Apps wechseln.</p>
<p>Neue Projekte anfangen.</p>
<p>Zwischen Aufgaben hin und her gehen.</p>
<p>Sich beim Ausruhen unwohl fühlen.</p>
<p>Du kannst körperlich auf dem Sofa sitzen, während dein Gehirn durch zwanzig verschiedene Ideen rennt.</p>
<h2 id="impulsivitat">Impulsivität</h2>
<p>Impulsivität kann viele Formen haben.</p>
<p>Unterbrechen, weil du Angst hast, deinen Gedanken zu vergessen.</p>
<p>Sofort etwas kaufen.</p>
<p>Um Mitternacht ein neues Projekt starten.</p>
<p>Eine Nachricht senden, bevor du sie vollständig durchdacht hast.</p>
<p>Der Abstand zwischen Gedanke und Handlung kann sich manchmal extrem klein anfühlen.</p>
<h2 id="schwierigkeiten-beim-wechseln-von-aufgaben">Schwierigkeiten beim Wechseln von Aufgaben</h2>
<p>Anfangen kann schwierig sein.</p>
<p>Aufhören kann auch schwierig sein.</p>
<p>Du weißt vielleicht, dass du ins Bett gehen solltest.</p>
<p>Du denkst vielleicht aktiv: „Ich sollte jetzt aufhören.“</p>
<p>Und machst noch zwei Stunden weiter.</p>
<p>Aufgabenwechsel bedeutet, Aufmerksamkeit von einer Aktivität zu lösen und auf eine andere zu richten.</p>
<p>Während intensiven Fokus kann dieser Übergang überraschend schwierig sein.</p>
<p>Darum habe ich angefangen, Fokus-Timer anders zu nutzen.</p>
<p>Manchmal stelle ich einen Timer nicht, damit ich arbeite.</p>
<p>Ich stelle ihn, um meinem Gehirn einen klaren Stopp-Punkt zu geben. Das ist auch die Idee hinter <a href="/guides/i-use-a-focus-timer-to-stop-focusing/">einen Fokus-Timer nutzen, um mit dem Fokussieren aufzuhören</a>.</p>
<h2 id="emotionale-regulation">Emotionale Regulation</h2>
<p>Manche Erwachsene mit ADHS beschreiben Gefühle als schnell und intensiv.</p>
<p>Frust kann sofort da sein.</p>
<p>Begeisterung kann alles übernehmen.</p>
<p>Eine kleine Unterbrechung kann sich unverhältnismäßig irritierend anfühlen, wenn du tief fokussiert bist.</p>
<p>Schwierigkeiten mit emotionaler Regulation sind nicht exklusiv für ADHS, aber viele Erwachsene mit ADHS sprechen über diese Erfahrung.</p>
<h2 id="schwierigkeiten-beim-entspannen">Schwierigkeiten beim Entspannen</h2>
<p>Du hast endlich einen freien Nachmittag.</p>
<p>Nichts braucht sofort deine Aufmerksamkeit.</p>
<p>Und irgendwie fühlt sich das unangenehm an.</p>
<p>Du fängst an zu putzen.</p>
<p>Öffnest einen Laptop.</p>
<p>Recherchierst eine neue Idee.</p>
<p>Beginnst ein weiteres Nebenprojekt.</p>
<p>Für manche Menschen mit ADHS fühlt sich Nichtstun weniger erholsam an als erwartet.</p>
<p>Erholung muss vielleicht absichtlich sein, statt einfach darauf zu warten, dass das Gehirn stoppt.</p>
<h2 id="sind-das-adhs-symptome">Sind das ADHS Symptome?</h2>
<p>Dich in diesem Artikel wiederzuerkennen bedeutet nicht, dass du ADHS hast.</p>
<p>ADHS Symptome überschneiden sich mit vielen anderen Erfahrungen und Zuständen.</p>
<p>Dieser Artikel ist keine diagnostische Checkliste und Flowtime ist kein medizinisches Tool.</p>
<p>Eine qualifizierte medizinische Fachperson kann ADHS Symptome, ihre Vorgeschichte und ihre Auswirkungen auf den Alltag einschätzen.</p>
<h2 id="systeme-um-dein-gehirn-bauen">Systeme um dein Gehirn bauen</h2>
<p>Jahrelang dachte ich, ich bräuchte ein strengeres Produktivitätssystem.</p>
<p>Mehr Disziplin.</p>
<p>Bessere Planung.</p>
<p>Einen komplizierteren Task Manager.</p>
<p>Was mir mehr geholfen hat, war, ein paar unsichtbare Dinge sichtbar zu machen.</p>
<p>Zeit.</p>
<p>Übergänge.</p>
<p>Ablenkungen.</p>
<p>Stopp-Punkte.</p>
<p>Darum habe ich Flowtime gebaut.</p>
<p>Es ist ein Fokus-Tracker mit Erinnerungen und App-Blocking, gebaut um die Art, wie ich Fokus mit ADHS tatsächlich erlebe.</p>
<p>Denn manchmal brauche ich Hilfe beim Fokussieren.</p>
<p>Und manchmal brauche ich einen Timer, der mir sagt, dass ich genug fokussiert habe.</p>`
        }
      }
    },
    fr: {
      labels: {
        category: "TDAH",
        related: "Articles associés",
        toc: "Sommaire",
        byAva: "Par Ava Thalheim",
        readArticle: "Lire l'article",
        readingTime: "{minutes} min de lecture",
        countSingle: "1 article",
        countMultiple: "{count} articles",
        all: "Tout"
      },
      tags: {
        adhd: "TDAH",
        focus: "Concentration",
        "time awareness": "Perception du temps",
        hyperfocus: "Hyperfocus",
        procrastination: "Procrastination",
        "executive dysfunction": "Fonctions exécutives"
      },
      pages: {
        adhd: {
          metaTitle: "Guides TDAH Flowtime - symptômes, concentration et perception du temps",
          metaDesc: "Guides Flowtime sur les symptômes du TDAH, le TDAH chez l'adulte, l'hyperfocus, les fonctions exécutives, la perception du temps et les rappels.",
          eyebrow: "Guides TDAH",
          title: "TDAH, concentration et perception du temps.",
          desc: "Lisez des guides sur les symptômes du TDAH, le TDAH chez l'adulte, l'hyperfocus, les fonctions exécutives, la perception du temps, les changements d'attention et les repères externes.",
          searchPlaceholder: "Rechercher des articles TDAH",
          sortNewest: "Plus récents d'abord",
          sortOldest: "Plus anciens d'abord",
          emptyMsg: "Aucun article TDAH ne correspond à votre recherche."
        }
      },
      metadata: {
        "what-is-adhd": {
          title: "Qu'est-ce que le TDAH ? Symptômes, concentration et cerveau TDAH",
          desc: "Qu'est-ce que le TDAH ? Découvrez comment il peut influencer l'attention, la concentration, l'impulsivité, les fonctions exécutives et le quotidien adulte."
        },
        "adhd-symptoms": {
          title: "Symptômes du TDAH chez l'adulte : signes que vous pourriez reconnaître",
          desc: "Les symptômes du TDAH chez l'adulte peuvent inclure distraction, hyperfocus, procrastination, agitation intérieure et difficulté à commencer des tâches."
        }
      },
      articles: {
        "what-is-adhd": {
          title: "Qu'est-ce que le TDAH ? Symptômes, concentration et cerveau TDAH",
          description: "Une introduction prudente et pratique au TDAH, à l'attention, à la concentration, à l'hyperfocus, aux fonctions exécutives, à la perception du temps et à la vie adulte.",
          readingTime: "5 min de lecture",
          toc: ["Que signifie TDAH ?", "Le TDAH n'est pas seulement de la distraction", "Les trois présentations du TDAH", "TDAH et concentration", "Qu'est-ce que l'hyperfocus TDAH ?", "TDAH et fonctions exécutives", "TDAH et perception du temps"],
          bodyHtml: `
<p>Le TDAH est souvent décrit comme un problème d'attention.</p>
<p>Cette description est techniquement vraie.</p>
<p>Mais elle est aussi incomplète.</p>
<p>Pour beaucoup de personnes avec un TDAH, le problème n'est pas simplement de ne pas pouvoir se concentrer.</p>
<p>Parfois, elles ne peuvent pas commencer.</p>
<p>Parfois, elles ne peuvent pas s'arrêter.</p>
<p>Parfois, leur attention saute entre cinq choses différentes.</p>
<p>Et parfois, elles sont tellement absorbées par une chose que des heures disparaissent sans qu'elles s'en rendent compte.</p>
<p>Le TDAH peut influencer la manière dont l'attention est dirigée, dont les tâches commencent, dont le temps est perçu et dont le cerveau passe d'une activité à une autre.</p>
<h2 id="que-signifie-tdah">Que signifie TDAH ?</h2>
<p>TDAH signifie trouble du déficit de l'attention avec ou sans hyperactivité.</p>
<p>C'est une condition neurodéveloppementale qui peut influencer l'attention, l'impulsivité et la régulation de l'activité.</p>
<p>Le TDAH commence souvent dans l'enfance, mais il ne disparaît pas simplement quand une personne devient adulte.</p>
<p>La manière dont il se manifeste peut changer.</p>
<p>Un adulte avec un TDAH ne court pas forcément dans une pièce.</p>
<p>À la place, l'hyperactivité peut ressembler à une agitation intérieure.</p>
<p>Des pensées constantes.</p>
<p>Passer d'une tâche à une autre.</p>
<p>Vérifier son téléphone sans l'avoir consciemment décidé.</p>
<p>Ou se sentir profondément mal à l'aise quand il n'y a rien à faire.</p>
<h2 id="le-tdah-nest-pas-seulement-de-la-distraction">Le TDAH n'est pas seulement de la distraction</h2>
<p>Tout le monde est distrait.</p>
<p>Tout le monde procrastine.</p>
<p>Tout le monde oublie parfois quelque chose.</p>
<p>Avec le TDAH, ces schémas peuvent se produire assez souvent pour gêner la vie quotidienne.</p>
<p>Vous vous asseyez pour répondre à un e-mail et vous réalisez soudain que vous avez réorganisé tout votre bureau.</p>
<p>Vous savez exactement ce que vous devez faire, mais vous vous sentez incapable de commencer.</p>
<p>Vous ouvrez votre téléphone pour vérifier une notification et <a href="/guides/why-do-i-forget-why-i-unlocked-my-phone/">vous oubliez pourquoi vous l'avez déverrouillé</a>.</p>
<p>Ou vous travaillez intensément pendant des heures et vous ne remarquez l'heure que lorsqu'il fait soudain nuit dehors.</p>
<p>La difficulté n'est souvent pas de comprendre ce qui doit se passer.</p>
<p>C'est de réguler l'attention et l'action.</p>
<h2 id="les-trois-presentations-du-tdah">Les trois présentations du TDAH</h2>
<p>Les symptômes du TDAH sont généralement regroupés en trois présentations.</p>
<h3 id="presentation-principalement-inattentive">Présentation principalement inattentive</h3>
<p>Elle peut inclure des difficultés à maintenir l'attention, des oublis, des objets perdus, des détails manqués et des difficultés à organiser les tâches.</p>
<p>Les personnes avec un TDAH inattentif peuvent sembler calmes ou ailleurs plutôt que visiblement hyperactives.</p>
<h3 id="presentation-principalement-hyperactive-impulsive">Présentation principalement hyperactive-impulsive</h3>
<p>Elle peut inclure de l'agitation, des actions rapides sans en mesurer toutes les conséquences, des interruptions dans les conversations ou une difficulté à attendre.</p>
<p>Chez les adultes, l'hyperactivité peut aussi se ressentir à l'intérieur.</p>
<p>Le corps peut être immobile pendant que le cerveau ne l'est pas du tout.</p>
<h3 id="presentation-combinee">Présentation combinée</h3>
<p>Le TDAH combiné comprend des symptômes importants d'inattention et d'hyperactivité ou d'impulsivité.</p>
<p>Le TDAH peut être très différent d'une personne à l'autre.</p>
<p>Pour une liste plus quotidienne de traits, lisez <a href="/adhd/adhd-symptoms/">Symptômes du TDAH chez l'adulte : signes que vous pourriez reconnaître</a>.</p>
<h2 id="tdah-et-concentration">TDAH et concentration</h2>
<p>L'un des plus grands malentendus sur le TDAH est l'idée que les personnes avec un TDAH ne peuvent simplement pas se concentrer.</p>
<p>Beaucoup peuvent se concentrer très profondément.</p>
<p>La difficulté peut être de contrôler où va cette concentration.</p>
<p>Un projet intéressant peut retenir votre attention pendant six heures.</p>
<p>Une tâche administrative de cinq minutes peut sembler presque impossible à commencer.</p>
<p>C'est pourquoi les conseils de productivité classiques ne fonctionnent pas toujours bien avec le TDAH.</p>
<p>« Concentre-toi, simplement. »</p>
<p>« Enlève les distractions. »</p>
<p>« Termine la tâche. »</p>
<p>Le problème est rarement un manque de conscience.</p>
<p>Vous savez probablement déjà ce que vous êtes censé faire.</p>
<p>La partie difficile peut être de diriger l'attention intentionnellement.</p>
<h2 id="quest-ce-que-lhyperfocus-tdah">Qu'est-ce que l'hyperfocus TDAH ?</h2>
<p>L'hyperfocus décrit des périodes de concentration extrêmement intense sur une activité.</p>
<p>Pendant l'hyperfocus, la conscience d'autres choses peut s'effacer.</p>
<p>Le temps.</p>
<p>La faim.</p>
<p>Les notifications.</p>
<p>Les gens qui parlent.</p>
<p>Même l'inconfort physique.</p>
<p>L'hyperfocus peut être très utile quand il arrive au bon moment et sur la bonne tâche.</p>
<p>Il peut aussi être épuisant quand il arrive par accident.</p>
<p>Parfois, le problème n'est pas d'entrer dans la concentration.</p>
<p>C'est d'en sortir.</p>
<p>Des rappels externes, des minuteurs et des points d'arrêt intentionnels peuvent rendre le temps qui passe plus visible. J'ai écrit davantage à ce sujet dans <a href="/guides/adhd-hyperfocus-how-to-stop-without-killing-your-focus/">Hyperfocus TDAH : s'arrêter sans casser sa concentration</a>.</p>
<p>C'est l'une des raisons pour lesquelles j'ai créé Flowtime.</p>
<p>Pas pour me forcer à me concentrer plus fort.</p>
<p>Parfois, je l'utilise pour me rappeler d'arrêter.</p>
<h2 id="tdah-et-fonctions-executives">TDAH et fonctions exécutives</h2>
<p>Les fonctions exécutives sont des processus mentaux impliqués dans la planification, le démarrage des tâches, la mémoire de travail et la régulation du comportement.</p>
<p>Le TDAH peut influencer ces processus.</p>
<p>Vous pouvez réellement vouloir terminer une tâche.</p>
<p>Vous pouvez comprendre exactement comment la terminer.</p>
<p>Vous pouvez même vous sentir stressé parce que vous ne la terminez pas.</p>
<p>Et pourtant ne pas commencer.</p>
<p>Cette expérience est souvent décrite comme une difficulté des fonctions exécutives.</p>
<p>Diviser les tâches en plus petites étapes, réduire les décisions et utiliser des repères externes peut parfois faciliter le démarrage.</p>
<h2 id="tdah-et-perception-du-temps">TDAH et perception du temps</h2>
<p>Cinq minutes.</p>
<p>Vingt minutes.</p>
<p>Deux heures.</p>
<p>Pour certaines personnes avec un TDAH, ces durées peuvent sembler étonnamment proches lorsqu'elles sont profondément concentrées.</p>
<p>La difficulté à remarquer ou à estimer le temps qui passe est souvent appelée, de manière informelle, time blindness ou difficulté de perception du temps.</p>
<p>Cela peut rendre les transitions difficiles.</p>
<p>Cela peut aussi contribuer aux retards, à l'hyperfocus accidentel et à l'impression qu'une journée entière a simplement disparu.</p>
<p>Des minuteurs visibles et des rappels peuvent servir de signaux externes quand votre perception interne du temps n'est pas très utile. Pour aller plus loin, lisez <a href="/guides/why-adhd-makes-you-lose-track-of-time/">Pourquoi le TDAH peut faire perdre la notion du temps</a> et <a href="/guides/gentle-time-reminders-for-adhd-time-blindness/">Rappels de concentration pour la time blindness liée au TDAH</a>.</p>
<h2 id="tdah-dans-la-vie-quotidienne">TDAH dans la vie quotidienne</h2>
<p>Le TDAH peut influencer bien plus que le travail ou les études.</p>
<p>Il peut toucher :</p>
<ul><li>l'organisation de la maison</li><li>les conversations</li><li>les relations</li><li>les routines de sommeil</li><li>les loisirs</li><li>la gestion des rendez-vous</li><li>les passages d'une activité à l'autre</li><li>les petites tâches à retenir</li><li>l'usage du téléphone</li><li>le repos</li></ul>
<p>Même se détendre peut parfois être difficile.</p>
<p>Vous avez enfin du temps libre.</p>
<p>Et votre cerveau commence immédiatement à chercher un autre projet.</p>
<h2 id="ai-je-un-tdah">Ai-je un TDAH ?</h2>
<p>Reconnaître des traits du TDAH ne signifie pas automatiquement que vous avez un TDAH.</p>
<p>Beaucoup d'expériences associées au TDAH peuvent aussi avoir d'autres causes.</p>
<p>Les articles en ligne et les listes de symptômes ne peuvent pas diagnostiquer un TDAH.</p>
<p>Si des symptômes de TDAH affectent fortement votre vie quotidienne et que vous voulez y voir plus clair, envisagez d'en parler avec un professionnel de santé qualifié.</p>
<h2 id="travailler-avec-votre-attention">Travailler avec votre attention</h2>
<p>Il n'existe pas un seul système de productivité qui fonctionne pour tous les cerveaux TDAH.</p>
<p>Pour moi, le plus grand changement a été d'arrêter d'essayer de forcer mon attention dans un système parfaitement structuré.</p>
<p>À la place, j'ai commencé à chercher des repères externes.</p>
<p>Minuteurs.</p>
<p>Rappels.</p>
<p>Blocage d'apps.</p>
<p>Points d'arrêt clairs.</p>
<p>Des outils qui rendent le temps et les transitions plus visibles.</p>
<p>C'est aussi la philosophie derrière Flowtime.</p>
<p>Un tracker de concentration construit autour de l'idée que parfois vous avez besoin d'aide pour commencer.</p>
<p>Et parfois d'un rappel pour remonter respirer. J'en raconte la version personnelle dans <a href="/guides/i-use-a-focus-timer-to-stop-focusing/">J'utilise un minuteur de concentration pour arrêter de me concentrer</a>.</p>`
        },
        "adhd-symptoms": {
          title: "Symptômes du TDAH chez l'adulte : signes que vous pourriez reconnaître",
          description: "Un guide personnel et prudent sur les symptômes du TDAH chez l'adulte, notamment la distraction, l'hyperfocus, la procrastination, l'agitation intérieure, la perception du temps et les changements de tâche.",
          readingTime: "5 min de lecture",
          toc: ["Difficulté à maintenir l'attention", "Hyperfocus", "Difficulté à commencer les tâches", "Procrastination", "Perdre la notion du temps", "Changements d'attention", "Oublis"],
          bodyHtml: `
<p>Quand les gens imaginent le TDAH, ils pensent souvent à un enfant qui ne peut pas rester assis.</p>
<p>Le TDAH chez l'adulte ne ressemble pas toujours à cela.</p>
<p>Il peut ressembler au fait de fixer une tâche simple pendant une heure sans commencer.</p>
<p>Travailler jusqu'à minuit parce que vous avez oublié de vous arrêter.</p>
<p>Ouvrir votre téléphone pour une notification et perdre vingt minutes.</p>
<p>Vous sentir physiquement agité quand vous êtes censé vous détendre.</p>
<p>Ou vous demander constamment pourquoi des choses simples semblent demander autant d'effort.</p>
<p>Les symptômes du TDAH peuvent apparaître différemment chez les adultes.</p>
<p>Voici quelques expériences courantes que des personnes avec un TDAH peuvent reconnaître.</p>
<p>Pour une introduction plus générale, lisez d'abord <a href="/adhd/what-is-adhd/">Qu'est-ce que le TDAH ? Symptômes, concentration et cerveau TDAH</a>.</p>
<h2 id="difficulte-a-maintenir-lattention">Difficulté à maintenir l'attention</h2>
<p>Vous commencez à lire.</p>
<p>Quelques paragraphes plus tard, vous réalisez que vos yeux ont continué à bouger, mais que votre cerveau n'écoutait plus.</p>
<p>Vous entrez dans une conversation avec l'intention d'être attentif et vous remarquez soudain que vous pensiez à quelque chose de complètement différent.</p>
<p>Maintenir l'attention peut être difficile, surtout quand quelque chose est répétitif ou ne semble pas immédiatement intéressant.</p>
<p>Cela ne signifie pas qu'une personne avec un TDAH ne fait jamais attention.</p>
<p>L'attention peut dépendre fortement du contexte.</p>
<h2 id="hyperfocus">Hyperfocus</h2>
<p>Le TDAH peut impliquer de la distraction.</p>
<p>Il peut aussi impliquer l'inverse complet.</p>
<p>L'hyperfocus est une période de concentration intense où tout ce qui est extérieur à l'activité en cours devient moins perceptible.</p>
<p>Vous pouvez oublier de manger.</p>
<p>Ignorer les notifications.</p>
<p>Perdre la notion du temps.</p>
<p>Ou continuer à travailler longtemps après le moment où vous aviez prévu d'arrêter.</p>
<p>L'hyperfocus peut sembler productif.</p>
<p>Jusqu'à ce que vous réalisiez que vous êtes assis dans la même position depuis cinq heures.</p>
<p>J'ai écrit un guide plus complet sur <a href="/guides/adhd-hyperfocus-how-to-stop-without-killing-your-focus/">l'hyperfocus TDAH et comment s'arrêter sans casser sa concentration</a>.</p>
<h2 id="difficulte-a-commencer-les-taches">Difficulté à commencer les tâches</h2>
<p>Vous savez ce que vous devez faire.</p>
<p>La tâche n'est pas particulièrement compliquée.</p>
<p>Vous avez peut-être même envie de la faire.</p>
<p>Mais vous n'arrivez pas à commencer.</p>
<p>C'est l'une des expériences les plus frustrantes du TDAH.</p>
<p>De l'extérieur, cela peut ressembler à de la procrastination.</p>
<p>De l'intérieur, cela peut ressembler à être coincé entre l'intention et l'action.</p>
<p>Rendre le premier pas extrêmement petit peut parfois réduire cette barrière.</p>
<p>Pas « nettoyer la cuisine ».</p>
<p>Ranger une assiette.</p>
<h2 id="procrastination">Procrastination</h2>
<p>La procrastination liée au TDAH n'est pas toujours une façon d'éviter le travail.</p>
<p>Parfois, le cerveau semble attendre l'urgence.</p>
<p>Une tâche qui semblait impossible pendant trois semaines devient soudain faisable la veille de l'échéance.</p>
<p>La pression crée de la stimulation.</p>
<p>La tâche devient immédiate.</p>
<p>L'attention s'accroche enfin.</p>
<p>Le problème, c'est que dépendre constamment des urgences pour commencer les tâches peut être épuisant.</p>
<h2 id="perdre-la-notion-du-temps">Perdre la notion du temps</h2>
<p>Vous regardez l'heure.</p>
<p>Il est 14:00.</p>
<p>Vous faites quelque chose pendant ce qui ressemble à vingt minutes.</p>
<p>Il est 17:30.</p>
<p>La difficulté à percevoir le temps qui passe est souvent décrite comme de la time blindness, ou une difficulté de perception du temps.</p>
<p>Cela peut toucher les rendez-vous, le travail, les loisirs et les transitions entre activités.</p>
<p>Des minuteurs externes et des rappels peuvent créer des signaux indiquant que le temps a passé. <a href="/guides/gentle-time-reminders-for-adhd-time-blindness/">Rappels de concentration pour la time blindness liée au TDAH</a> approfondit cette idée.</p>
<h2 id="changements-dattention">Changements d'attention</h2>
<p>Une notification.</p>
<p>Une pensée.</p>
<p>Un onglet de navigateur.</p>
<p>Soudain, la tâche d'origine a disparu.</p>
<p>Les personnes avec un TDAH peuvent être particulièrement sensibles à une attention attirée vers quelque chose de nouveau ou immédiatement intéressant.</p>
<p>Je vois cela comme un détournement de l'attention.</p>
<p>La distraction n'interrompt pas simplement la tâche.</p>
<p>Elle la remplace.</p>
<p>Parfois, vous ne le remarquez que vingt minutes plus tard. C'est proche du schéma du téléphone que je décris dans <a href="/guides/why-do-i-forget-why-i-unlocked-my-phone/">Pourquoi j'oublie pourquoi j'ai déverrouillé mon téléphone ?</a>.</p>
<h2 id="oublis">Oublis</h2>
<p>Entrer dans une pièce et oublier pourquoi.</p>
<p>Se souvenir de quelque chose d'important sous la douche et l'oublier complètement cinq minutes plus tard.</p>
<p>Manquer un rendez-vous auquel vous aviez vraiment l'intention d'aller.</p>
<p>Le TDAH peut influencer la mémoire de travail.</p>
<p>Une information peut sembler incroyablement importante à un moment et simplement disparaître quand l'attention change.</p>
<p>Les systèmes externes peuvent aider.</p>
<p>Notes.</p>
<p>Calendriers.</p>
<p>Rappels.</p>
<p>Tout ce qui signifie que votre cerveau n'a pas à tout porter en même temps.</p>
<h2 id="agitation-interieure">Agitation intérieure</h2>
<p>L'hyperactivité chez les adultes n'est pas toujours visible.</p>
<p>Parfois, elle se ressent à l'intérieur.</p>
<p>Un besoin constant de faire quelque chose.</p>
<p>Changer d'application.</p>
<p>Démarrer de nouveaux projets.</p>
<p>Passer d'une tâche à l'autre.</p>
<p>Se sentir mal à l'aise au repos.</p>
<p>Vous pouvez être physiquement assis sur un canapé pendant que votre cerveau parcourt vingt idées différentes.</p>
<h2 id="impulsivite">Impulsivité</h2>
<p>L'impulsivité peut prendre de nombreuses formes.</p>
<p>Interrompre parce que vous avez peur d'oublier votre pensée.</p>
<p>Acheter quelque chose immédiatement.</p>
<p>Commencer un nouveau projet à minuit.</p>
<p>Envoyer un message avant d'y avoir vraiment réfléchi.</p>
<p>L'écart entre la pensée et l'action peut parfois sembler extrêmement petit.</p>
<h2 id="difficulte-a-changer-de-tache">Difficulté à changer de tâche</h2>
<p>Commencer peut être difficile.</p>
<p>S'arrêter peut l'être aussi.</p>
<p>Vous savez peut-être que vous devriez aller vous coucher.</p>
<p>Vous pensez peut-être activement : « Je devrais arrêter maintenant. »</p>
<p>Et vous continuez encore deux heures.</p>
<p>Changer de tâche demande de détacher l'attention d'une activité et de la diriger ailleurs.</p>
<p>Pendant une concentration intense, cette transition peut être étonnamment difficile.</p>
<p>C'est pourquoi j'ai commencé à utiliser les minuteurs de concentration différemment.</p>
<p>Parfois, je règle un minuteur non pas pour me faire travailler.</p>
<p>Je le règle pour donner à mon cerveau un point d'arrêt clair. C'est aussi l'idée derrière <a href="/guides/i-use-a-focus-timer-to-stop-focusing/">utiliser un minuteur pour arrêter de se concentrer</a>.</p>
<h2 id="regulation-emotionnelle">Régulation émotionnelle</h2>
<p>Certains adultes avec un TDAH décrivent les émotions comme rapides et intenses.</p>
<p>La frustration peut sembler immédiate.</p>
<p>L'excitation peut tout prendre.</p>
<p>Une petite interruption peut sembler disproportionnellement irritante quand vous êtes profondément concentré.</p>
<p>Les difficultés de régulation émotionnelle ne sont pas propres au TDAH, mais beaucoup d'adultes avec un TDAH en parlent.</p>
<h2 id="difficulte-a-se-detendre">Difficulté à se détendre</h2>
<p>Vous avez enfin un après-midi libre.</p>
<p>Rien ne demande votre attention immédiate.</p>
<p>Et pourtant, cela semble inconfortable.</p>
<p>Vous commencez à ranger.</p>
<p>Vous ouvrez un ordinateur.</p>
<p>Vous recherchez une nouvelle idée.</p>
<p>Vous lancez un autre projet parallèle.</p>
<p>Pour certaines personnes avec un TDAH, ne rien faire peut être moins reposant que prévu.</p>
<p>Le repos doit parfois être intentionnel, plutôt que d'attendre simplement que le cerveau s'arrête.</p>
<h2 id="sagit-il-de-symptomes-du-tdah">S'agit-il de symptômes du TDAH ?</h2>
<p>Vous reconnaître dans cet article ne signifie pas que vous avez un TDAH.</p>
<p>Les symptômes du TDAH recoupent beaucoup d'autres expériences et conditions.</p>
<p>Cet article n'est pas une checklist diagnostique et Flowtime n'est pas un outil médical.</p>
<p>Un professionnel de santé qualifié peut évaluer les symptômes du TDAH, leur histoire et leur impact sur la vie quotidienne.</p>
<h2 id="construire-des-systemes-autour-de-votre-cerveau">Construire des systèmes autour de votre cerveau</h2>
<p>Pendant des années, j'ai pensé qu'il me fallait un système de productivité plus strict.</p>
<p>Plus de discipline.</p>
<p>Une meilleure planification.</p>
<p>Un gestionnaire de tâches plus compliqué.</p>
<p>Ce qui m'a davantage aidée, c'est de rendre visibles quelques choses invisibles.</p>
<p>Le temps.</p>
<p>Les transitions.</p>
<p>Les distractions.</p>
<p>Les points d'arrêt.</p>
<p>C'est pourquoi j'ai créé Flowtime.</p>
<p>C'est un tracker de concentration avec rappels et blocage d'apps, conçu autour de ma manière réelle de vivre la concentration avec le TDAH.</p>
<p>Parce que parfois, j'ai besoin d'aide pour me concentrer.</p>
<p>Et parfois, j'ai besoin d'un minuteur pour me dire que je me suis assez concentrée.</p>`
        }
      }
    }
  };

  var dict = data[locale];
  if (!dict) {
    return;
  }

  function getPageKey() {
    var parts = window.location.pathname.split("/").filter(Boolean);
    var last = parts[parts.length - 1] || "";
    return last === "index.html" ? (parts[parts.length - 2] || "") : last;
  }

  function setMeta(selector, attribute, value) {
    var element = document.querySelector(selector);
    if (element && value) {
      element.setAttribute(attribute, value);
    }
  }

  function localizeMetadata(title, description) {
    if (title) {
      document.title = title;
      setMeta('meta[property="og:title"]', "content", title);
      setMeta('meta[name="twitter:title"]', "content", title);
    }
    if (description) {
      setMeta('meta[name="description"]', "content", description);
      setMeta('meta[property="og:description"]', "content", description);
      setMeta('meta[name="twitter:description"]', "content", description);
    }
  }

  function localizeJsonLd(title, description) {
    document.querySelectorAll('script[type="application/ld+json"]').forEach(function (script) {
      try {
        var data = JSON.parse(script.textContent);
        var graph = data["@graph"] || [data];
        graph.forEach(function (node) {
          if ((node["@type"] === "Blog" || node["@type"] === "BlogPosting" || node["@type"] === "Article") && title) {
            if (node.name) node.name = title;
            if (node.headline) node.headline = title;
          }
          if ((node["@type"] === "Blog" || node["@type"] === "BlogPosting" || node["@type"] === "Article") && description) {
            node.description = description;
          }
          if (node["@type"] === "BreadcrumbList" && Array.isArray(node.itemListElement)) {
            node.itemListElement.forEach(function (item) {
              if (item.name === "ADHD") item.name = dict.labels.category;
            });
          }
        });
        script.textContent = JSON.stringify(data);
      } catch (_error) { }
    });
  }
  var metadataTranslations = {};
  Object.keys(dict.metadata).forEach(function (slug) {
    metadataTranslations["blog.title." + slug] = dict.metadata[slug].title;
    metadataTranslations["blog.desc." + slug] = dict.metadata[slug].desc;
  });
  Object.keys(dict.tags).forEach(function (tag) {
    metadataTranslations["blog.tag." + tag] = dict.tags[tag];
  });
  metadataTranslations["blog.tag.all"] = dict.labels.all;
  metadataTranslations["blog.read_article"] = dict.labels.readArticle;
  metadataTranslations["blog.reading_time"] = dict.labels.readingTime;
  metadataTranslations["blog.count_single"] = dict.labels.countSingle;
  metadataTranslations["blog.count_multiple"] = dict.labels.countMultiple;

  if (window.flowtimeAddTranslations) {
    window.flowtimeAddTranslations(locale, metadataTranslations);
  }

  var pageKey = getPageKey();
  var category = document.body && document.body.dataset ? document.body.dataset.blogCategory : "";
  var pageData = dict.pages[pageKey];

  if (pageData) {
    localizeMetadata(pageData.metaTitle, pageData.metaDesc);
    localizeJsonLd(pageData.metaTitle, pageData.metaDesc);

    var heroEyebrow = document.querySelector(".blog-hero .eyebrow");
    if (heroEyebrow && pageData.eyebrow) heroEyebrow.textContent = pageData.eyebrow;

    var heroTitle = document.querySelector("#blog-title");
    if (heroTitle && pageData.title) heroTitle.textContent = pageData.title;

    var heroDesc = document.querySelector(".blog-hero p:not(.eyebrow)");
    if (heroDesc && pageData.desc) heroDesc.textContent = pageData.desc;

    var searchInput = document.querySelector("[data-blog-search]");
    if (searchInput && pageData.searchPlaceholder) searchInput.setAttribute("placeholder", pageData.searchPlaceholder);

    var sortSelect = document.querySelector("[data-blog-sort]");
    if (sortSelect && pageData.sortNewest) {
      sortSelect.options[0].text = pageData.sortNewest;
      sortSelect.options[1].text = pageData.sortOldest;
    }

    var empty = document.querySelector("[data-blog-empty]");
    if (empty && pageData.emptyMsg) empty.textContent = pageData.emptyMsg;
  }

  if (window.flowtimeRenderPosts) {
    window.flowtimeRenderPosts();
  }

  var article = dict.articles[pageKey];
  if (article && document.querySelector(".blog-article")) {
    localizeMetadata((dict.metadata[pageKey] && dict.metadata[pageKey].title) || article.title, (dict.metadata[pageKey] && dict.metadata[pageKey].desc) || article.description);
    localizeJsonLd(article.title, (dict.metadata[pageKey] && dict.metadata[pageKey].desc) || article.description);

    var eyebrow = document.querySelector(".article-header .eyebrow");
    if (eyebrow) eyebrow.textContent = dict.labels.category;

    var h1 = document.querySelector(".article-header h1");
    if (h1) h1.textContent = article.title;

    var desc = document.querySelector(".article-header .article-description");
    if (desc) desc.textContent = article.description;

    var timeNode = document.querySelector(".article-header .article-meta time");
    var dateVal = timeNode ? timeNode.getAttribute("datetime") : new Date().toISOString().split("T")[0];
    var meta = document.querySelector(".article-header .article-meta");
    if (meta) {
      var localizedDate = new Intl.DateTimeFormat(locale, { month: "long", day: "numeric", year: "numeric" }).format(new Date(dateVal + "T00:00:00"));
      meta.innerHTML = "<span>" + dict.labels.byAva + "</span><time datetime=\"" + dateVal + "\">" + localizedDate + "</time><span>" + article.readingTime + "</span>";
    }

    document.querySelectorAll(".article-header .article-tag").forEach(function (tagNode) {
      var tag = tagNode.textContent.trim().toLowerCase();
      if (dict.tags[tag]) tagNode.textContent = dict.tags[tag];
    });

    var tocHeader = document.querySelector(".article-toc h2");
    if (tocHeader) tocHeader.textContent = dict.labels.toc;

    document.querySelectorAll(".article-toc a").forEach(function (link, index) {
      if (article.toc[index]) link.textContent = article.toc[index];
    });

    var body = document.querySelector(".article-body");
    if (body) body.innerHTML = article.bodyHtml;

    var relatedTitle = document.querySelector(".blog-related h2");
    if (relatedTitle) relatedTitle.textContent = dict.labels.related;

    document.querySelectorAll(".blog-related .related-card").forEach(function (card) {
      var href = card.getAttribute("href") || "";
      var parts = href.split("/").filter(Boolean);
      var slug = parts[parts.length - 1] === "index.html" ? parts[parts.length - 2] : parts[parts.length - 1];
      var meta = dict.metadata[slug];
      if (!meta) return;
      var title = card.querySelector("strong");
      var text = card.querySelector("span");
      if (title) title.textContent = meta.title;
      if (text) text.textContent = meta.desc;
    });
  }
}());
