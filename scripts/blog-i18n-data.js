(function () {
  var locale = window.flowtimeLocale || "en";

  var blogTranslations = {
    de: {
      labels: {
        comparison: "Vergleich",
        guide: "Ratgeber",
        byAva: "Von Ava Thalheim",
        toc: "Inhaltsverzeichnis",
        summary: "Zusammenfassung",
        related: "Ähnliche Artikel",
        previous: "Zurück",
        next: "Weiter"
      },
      tags: {
        "privacy": "Datenschutz",
        "offline": "Offline",
        "time tracking": "Zeiterfassung",
        "comparison": "Vergleich",
        "productivity": "Produktivität",
        "product design": "Produktdesign",
        "focus": "Fokus"
      },
      listings: {
        comparison: {
          eyebrow: "Vergleich",
          title: "Wähle das richtige Fokus-Tool.",
          desc: "Vergleiche Flowtime mit beliebten Pomodoro-Apps, Intervall-Timern und Team-Trackern, um die richtige Balance aus Einfachheit, Metriken und Datenschutz zu finden.",
          showcaseBadge1: "Ausgelegt Für",
          showcaseBadge2: "Vergleiche",
          showcaseTitle1: "Lösungen nach Workflow",
          showcaseTitle2: "Vergleiche",
          showcaseDesc1: "Flowtime - Time Tracker ist für konzentrierte Einzelarbeit konzipiert. Erkunde die Vorteile für deine spezifischen Fokus-Bedürfnisse.",
          showcaseDesc2: "Minimalistische Fokus-Timer im Vergleich zu teamorientierten Zeiterfassungsplattformen. Finde das passende Tool für deinen Workflow.",
          solutions: [
            { h3: "Für Freelancer & Selbstständige", p: "Erfasse abrechenbare Stunden auf Projekten und Aufgaben, ohne dass Rechnungsformulare, Account-Syncs oder Manager-Dashboards im Weg stehen." },
            { h3: "Für Entwickler & Kreative", p: "Start ohne Reibung. Tippe einmal zum Wechseln von Projekten, passe Fokusmodi an und halte deine Aufmerksamkeit voll auf der Arbeit." },
            { h3: "Für Studenten & Wissenschaftler", p: "Strukturiere Lerneinheiten mit klassischen Pomodoro-Intervallen, setze Zielzeiten für Flow Sessions und nutze wöchentliche Verlaufscharts." },
            { h3: "Für Autoren & Forscher", p: "Begib dich in eine ablenkungsfreie Fokuszone. Aktiviere das Mono-Design, halte deine Daten lokal und arbeite in klarer Einfachheit." }
          ],
          matrixBadge: "Feature-Matrix",
          matrixTitle: "Direkter Vergleich",
          matrixDesc: "Sieh, wie Flowtime im Vergleich zu Toggl Track, Forest, Session, Focus To-Do und Be Focused bei den wichtigsten Kriterien abschneidet.",
          matrixHeaders: ["Feature", "Flowtime", "Toggl Track", "Forest", "Session", "Focus To-Do", "Be Focused"],
          matrixRows: [
            ["Ideal für", "Minimalen Fokus", "Team-Abrechnungen", "Gamifizierte Arbeit", "Detaillierte Notizen", "GTD-Aufgabenlisten", "Einfache Intervalle"],
            ["Start ohne Account", "Ja (Sofortstart)", "Nein (Pflicht)", "Optional", "Nein (Pflicht)", "Nein (Pflicht)", "Ja"],
            ["Lokaler Datenschutz", "Ja (Lokal)", "Nein (Cloud)", "Nein (Sync)", "Nein (Cloud)", "Nein (Cloud)", "Ja"],
            ["Pomodoro-Modus", "Ja (Free)", "Optional", "Ja", "Ja", "Ja", "Ja"],
            ["Offene Flow Sessions", "Ja (Free)", "Nein", "Nein", "Nein", "Nein", "Nein"],
            ["Projekt-Erfassung", "Ja (Pro)", "Ja", "Ja", "Ja", "Ja", "Ja"],
            ["Oberfläche", "Ultra-minimal", "Komplexes Dashboard", "Gamifiziert, verspielt", "Modernes iOS-Design", "Dichte Listen", "Einfacher Timer"]
          ],
          searchPlaceholder: "Vergleiche durchsuchen",
          sortNewest: "Neueste zuerst",
          sortOldest: "Älteste zuerst",
          emptyMsg: "Keine Vergleiche entsprechen deiner Suche."
        },
        guides: {
          eyebrow: "Ratgeber & Blog",
          title: "Ideen für minimalistische Zeiterfassung.",
          desc: "Notizen zu konzentriertem Arbeiten, privater Produktivität, Offline-Zeiterfassung und dem Bau eines Timers, der sich im Hintergrund hält.",
          searchPlaceholder: "Artikel durchsuchen",
          sortNewest: "Neueste zuerst",
          sortOldest: "Älteste zuerst",
          emptyMsg: "Keine Artikel entsprechen deiner Suche."
        }
      },
      blog_metadata: {
        "time-tracker-without-account": {
          title: "Zeiterfassung ohne Account",
          desc: "Ein praktischer Leitfaden zur Auswahl einer privaten, reibungslosen Zeiterfassung, die ohne Anmeldung oder Sync funktioniert."
        },
        "flowtime-vs-toggl": {
          title: "Flowtime vs Toggl",
          desc: "Ein praktischer Vergleich von Flowtime und Toggl für die Entscheidung zwischen Fokus-Tracking und Team-Abrechnung."
        },
        "best-offline-time-trackers": {
          title: "Die besten Offline-Zeiterfassungen",
          desc: "Worauf man bei einem Offline-Time-Tracker achten sollte - mit Fokus auf Privatsphäre, Speed und lokale Historie."
        },
        "why-most-time-tracking-apps-feel-overengineered": {
          title: "Warum Zeiterfassungs-Apps oft überladen wirken",
          desc: "Ein Produkt-Design-Essay darüber, warum Zeiterfassungstools zu komplex werden und wie einfachere UIs den Fokus stärken."
        },
        "best-app-for-tracking-time-on-tasks-and-projects": {
          title: "Beste App für die Zeiterfassung auf Projekten",
          desc: "Ein Vergleich darüber, was einen guten Time Tracker ausmacht. Von Timern und Erinnerungen bis hin zu flexiblen Berichten."
        },
        "sometimes-the-problem-isnt-getting-into-flow-its-getting-out-of-it": {
          title: "Manchmal ist das Problem nicht der Flow, sondern das Herauskommen",
          desc: "Fokus-Sitzungen in Flowtime sind so konzipiert, dass sie Achtsamkeit schaffen und verhindern, dass man sich in stundenlanger Arbeit verliert."
        },
        "flowtime-vs-forest": {
          title: "Flowtime vs Forest",
          desc: "Ein Vergleich von Flowtime und Forest: Gamifizierter Fokus vs. minimalistischer, ablenkungsfreier Utility-Timer."
        },
        "flowtime-vs-session": {
          title: "Flowtime vs Session",
          desc: "Vergleiche Flowtime und Session: Apple-exklusive Automatisierungen oder plattformübergreifende Einfachheit."
        },
        "flowtime-vs-focus-todo": {
          title: "Flowtime vs Focus To-Do",
          desc: "Vergleiche Flowtime und Focus To-Do: Finde heraus, ob ein reiner Timer oder eine integrierte GTD-Aufgabenliste besser für dich ist."
        },
        "flowtime-vs-be-focused": {
          title: "Flowtime vs Be Focused",
          desc: "Ein Vergleich von Flowtime und Be Focused: Der Unterschied zwischen starren Intervallen und flexiblen Flow-Timer-Sitzungen."
        }
      },
      pages: {
        "comparison": {
          metaTitle: "Flowtime - Zeiterfassungsvergleiche vs Toggl, Forest & Session",
          metaDesc: "Vergleiche Flowtime mit Toggl Track, Forest, Session, Focus To-Do und Be Focused. Wähle den besten Fokus-Timer für dich."
        },
        "guides": {
          metaTitle: "Flowtime Ratgeber & Blog - Fokus, Zeiterfassung und Privatsphäre",
          metaDesc: "Flowtime Ratgeber und Blogartikel über einfache Zeiterfassung, fokussiertes Arbeiten, Offline-Produktivität und Datenschutz."
        },
        "time-tracker-without-account": {
          metaTitle: "Zeiterfassung ohne Account - Flowtime - Time Tracker",
          metaDesc: "Ein Leitfaden zur Auswahl einer privaten Zeiterfassung, die ohne Anmeldung, Sync oder Registrierung auskommt."
        },
        "flowtime-vs-toggl": {
          metaTitle: "Flowtime vs Toggl - Flowtime - Time Tracker",
          metaDesc: "Ein praktischer Vergleich von Flowtime und Toggl für alle, die sich zwischen Fokus-Tracking und Team-Abrechnung entscheiden."
        },
        "best-offline-time-trackers": {
          metaTitle: "Die besten Offline-Zeiterfassungen - Flowtime - Time Tracker",
          metaDesc: "Worauf man bei einer Offline-Zeiterfassung achten sollte - mit Fokus auf Datenschutz, Speed und lokale Historie."
        },
        "why-most-time-tracking-apps-feel-overengineered": {
          metaTitle: "Warum Zeiterfassungs-Apps oft überladen wirken - Flowtime - Time Tracker",
          metaDesc: "Design-Essay darüber, warum Zeiterfassungstools zu komplex werden und wie einfachere UIs den Fokus unterstützen."
        },
        "best-app-for-tracking-time-on-tasks-and-projects": {
          metaTitle: "Beste App für die Zeiterfassung auf Projekten - Flowtime",
          metaDesc: "Ein Vergleich der wichtigsten Features von Zeiterfassungs-Apps, von Projekten und Timern bis zu Berichten."
        },
        "sometimes-the-problem-isnt-getting-into-flow-its-getting-out-of-it": {
          metaTitle: "Manchmal ist das Problem das Verlassen des Flows - Flowtime",
          metaDesc: "Wie Fokus-Erinnerungen helfen können, sich der verstreichenden Zeit bewusst zu werden und Rabbit Holes zu vermeiden."
        },
        "flowtime-vs-forest": {
          metaTitle: "Flowtime vs Forest - Flowtime - Time Tracker",
          metaDesc: "Vergleich zwischen Flowtime und Forest: Gamifizierung und virtuelle Bäume vs. minimalistische Utility-Timer."
        },
        "flowtime-vs-session": {
          metaTitle: "Flowtime vs Session - Flowtime - Time Tracker",
          metaDesc: "Finde heraus, was besser zu dir passt: Kalender-Integrationen auf Apple-Geräten oder plattformübergreifender Datenschutz."
        },
        "flowtime-vs-focus-todo": {
          metaTitle: "Flowtime vs Focus To-Do - Flowtime - Time Tracker",
          metaDesc: "Vergleich zwischen Flowtime und Focus To-Do: Reiner Fokus-Timer oder integrierte GTD-Aufgabenverwaltung."
        },
        "flowtime-vs-be-focused": {
          metaTitle: "Flowtime vs Be Focused - Flowtime - Time Tracker",
          metaDesc: "Vergleich zwischen Flowtime und Be Focused: Starre Pomodoro-Intervalle oder flexible Flow-Sitzungen."
        }
      },
      articles: {
        "time-tracker-without-account": {
          title: "Zeiterfassung ohne Account",
          description: "Ein praktischer Leitfaden zur Auswahl einer privaten, reibungslosen Zeiterfassung, die ohne Anmeldung, Synchronisierung oder Account-Setup funktioniert.",
          readingTime: "4 Min. Lesezeit",
          toc: ["Zusammenfassung", "Was offline bedeuten sollte", "Bewertungskriterien", "FAQ"],
          summaryPoints: [
            "Zeiterfassung ohne Account reduziert den Einrichtungsaufwand.",
            "Lokale Tools schützen die Privatsphäre deiner Arbeitsmuster besser.",
            "Für Einzelarbeit reicht oft ein einfacher Timer aus."
          ],
          bodyHtml: `
            <h2 id="offline">Was offline bedeuten sollte</h2>
            <p>Offline-Betrieb bedeutet mehr als nur, dass die App ohne Internet nicht abstürzt. Eine gute Offline-Zeiterfassung sollte das Starten, Stoppen, Überprüfen und Organisieren von Sessions vollständig lokal ermöglichen.</p>
            <h2 id="criteria">Bewertungskriterien</h2>
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Warum es wichtig ist</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lokaler Speicher</td>
                  <td>Hält persönliche Arbeitsmuster privat.</td>
                </tr>
                <tr>
                  <td>Schneller Start</td>
                  <td>Verringert die Hürde vor konzentrierter Arbeit.</td>
                </tr>
                <tr>
                  <td>Klare Historie</td>
                  <td>Macht Rückblicke nützlich, ohne zur lästigen Pflicht zu werden.</td>
                </tr>
                <tr>
                  <td>Export-Optionen</td>
                  <td>Ermöglicht es dir, deine Daten bei Bedarf zu verschieben.</td>
                </tr>
              </tbody>
            </table>
            <h2 id="faq">FAQ</h2>
            <details open>
              <summary>Ist eine Zeiterfassung ohne Account automatisch privat?</summary>
              <p>Sie kann es sein, aber nur, wenn die App Tracking-Daten lokal speichert und unnötige Analysen vermeidet.</p>
            </details>
            <details>
              <summary>Kann ich Flowtime ohne Account nutzen?</summary>
              <p>Ja. Flowtime ist so konzipiert, dass du deinen Fokus ohne Account-Erstellung erfassen kannst.</p>
            </details>
            <details>
              <summary>Ist Offline-Zeiterfassung für Kundenarbeit nützlich?</summary>
              <p>Ja, besonders wenn du die Zusammenfassungen später exportierst. Für Echtzeit-Teamberichte ist ein Cloud-Tool oft besser geeignet.</p>
            </details>
          `
        },
        "flowtime-vs-toggl": {
          title: "Flowtime vs Toggl",
          description: "Ein praktischer Vergleich von Flowtime und Toggl für die Entscheidung zwischen einfachem Fokus-Tracking und teamorientierter Zeiterfassung.",
          readingTime: "4 Min. Lesezeit",
          toc: ["Zusammenfassung", "Schnellvergleich", "Wähle Flowtime, wenn", "FAQ"],
          summaryPoints: [
            "Flowtime ist für persönliche Fokus-Erfassung optimiert.",
            "Toggl ist breiter aufgestellt und ideal für Agenturberichte und Teamstunden.",
            "Die Wahl hängt davon ab, ob du Fokus-Timer oder Team-Infrastruktur benötigst."
          ],
          bodyHtml: `
            <h2 id="comparison">Schnellvergleich</h2>
            <table>
              <thead>
                <tr>
                  <th>Kriterium</th>
                  <th>Flowtime</th>
                  <th>Toggl</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ideal für</td>
                  <td>Persönliche Fokus-Sessions</td>
                  <td>Team- und Kundenabrechnungen</td>
                </tr>
                <tr>
                  <td>Account-Modell</td>
                  <td>Kein Account nötig (lokal)</td>
                  <td>Account-pflichtig (cloud)</td>
                </tr>
                <tr>
                  <td>Berichterstattung</td>
                  <td>Konzentrierte persönliche Analysen</td>
                  <td>Detaillierte Business-Berichte</td>
                </tr>
                <tr>
                  <td>Einrichtung</td>
                  <td>Sehr gering</td>
                  <td>Mittel</td>
                </tr>
              </tbody>
            </table>
            <h2 id="choose-flowtime">Wähle Flowtime, wenn</h2>
            <p>Du einen minimalistischen Timer für Fokusarbeit, Pomodoro, Flow-Sitzungen und eine einfache Projekthistorie suchst, ohne Zeiterfassung in ein Verwaltungssystem zu verwandeln.</p>
            <h2>Wähle Toggl, wenn</h2>
            <p>Du Rechnungsstellung, Team-Rapporte, Kunden-Dashboards, Workspace-Berechtigungen oder Integrationen in deine Business-Software benötigst.</p>
            <h2 id="faq">FAQ</h2>
            <details open>
              <summary>Ist Flowtime ein Toggl-Ersatz?</summary>
              <p>Für private Fokus-Erfassung ja. Für Agentur-Abrechnungen und Teams ist Toggl spezialisierter.</p>
            </details>
            <details>
              <summary>Was ist besser für Deep Work?</summary>
              <p>Flowtime ist bewusster einfacher und hilft Einzelpersonen, leichter in den Arbeitsfluss zu finden.</p>
            </details>
          `
        },
        "best-offline-time-trackers": {
          title: "Best Offline Time Trackers",
          description: "Worauf man bei einer Offline-Zeiterfassung achten sollte - mit Fokus auf Privatsphäre, Speed und eine verlässliche persönliche Historie.",
          readingTime: "4 Min. Lesezeit",
          toc: ["Zusammenfassung", "Was offline bedeuten sollte", "Bewertungskriterien", "FAQ"],
          summaryPoints: [
            "Die besten Offline-Tracker funktionieren komplett ohne Netzwerkverbindung.",
            "Lokale Datenhaltung und Exportfunktionen sind essenziell.",
            "Eine minimalistische Benutzeroberfläche hilft, den Fokus zu wahren."
          ],
          bodyHtml: `
            <h2 id="offline">Was offline bedeuten sollte</h2>
            <p>Offline sollte mehr bedeuten als nur 'die App stürzt ohne Internet nicht ab'. Ein guter Offline-Tracker lässt dich Sessions vollständig lokal starten, stoppen, einsehen und organisieren.</p>
            <h2 id="criteria">Bewertungskriterien</h2>
            <table>
              <thead>
                <tr>
                  <th>Kriterium</th>
                  <th>Gutes Zeichen</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lokale Daten</td>
                  <td>Sessions sind jederzeit ohne Netzverbindung einsehbar.</td>
                </tr>
                <tr>
                  <td>Einfaches Projektmodell</td>
                  <td>Du kannst deine Zeit ohne komplizierte Einrichtung strukturieren.</td>
                </tr>
                <tr>
                  <td>Export-Möglichkeit</td>
                  <td>Du bist nicht dauerhaft in der App eingesperrt.</td>
                </tr>
                <tr>
                  <td>Wenig visueller Lärm</td>
                  <td>Die App unterstützt dich beim Fokussieren, statt dich abzulenken.</td>
                </tr>
              </tbody>
            </table>
            <h2>Warum Flowtime passt</h2>
            <p>Flowtime ist für minimalistische Zeiterfassung, flexible Projekte und eine übersichtliche Historie gebaut. Es ist für Personen gedacht, die tracken möchten, ohne ein schweres Business-Tool zu verwalten.</p>
            <h2 id="faq">FAQ</h2>
            <details open>
              <summary>Synchronisieren Offline-Timer über Geräte hinweg?</summary>
              <p>Manche tun es, aber die Synchronisation erfordert meist einen Account oder Cloud-Service. Wenn dir Multi-Device-Zugriff wichtig ist, prüfe genau, wo deine Daten gespeichert werden.</p>
            </details>
            <details>
              <summary>Sind Offline-Tracker besser für den Datenschutz?</summary>
              <p>Ja, da die erfassten Daten lokal bleiben und die App auf unnötige Datensammlungen verzichtet.</p>
            </details>
          `
        },
        "why-most-time-tracking-apps-feel-overengineered": {
          title: "Warum Zeiterfassungs-Apps oft überladen wirken",
          description: "Ein Produkt-Design-Essay darüber, warum Zeiterfassungstools zu komplex werden und wie einfachere UIs den Fokus unterstützen.",
          readingTime: "4 Min. Lesezeit",
          toc: ["Zusammenfassung", "Der Feature-Sog", "Der Fokus auf das Wesentliche"],
          summaryPoints: [
            "Viele Zeiterfassungs-Apps sind für Agenturen, Manager oder Teams gebaut.",
            "Diese Anforderungen sind legitim, für Einzelpersonen aber oft überflüssig.",
            "Flowtime konzentriert sich auf das Wesentliche: Ein Timer, der dir zeigt, wo deine Zeit geblieben ist."
          ],
          bodyHtml: `
            <h2 id="features">Der Feature-Sog</h2>
            <p>Die meisten Tools auf dem Markt richten sich an Unternehmen, die abrechenbare Stunden protokollieren müssen. Das führt zu komplexen Benutzeroberflächen mit Freigabeprozessen, Stundensätzen und Team-Berechtigungen. Für Einzelentwickler, Designer oder Studenten führt dieser Overhead oft dazu, dass sie das Tracken komplett aufgeben.</p>
            <h2 id="focus">Der Fokus auf das Wesentliche</h2>
            <p>Gutes Produkt-Design bedeutet oft zu wissen, was man weglässt. Flowtime verzichtet auf Team-Verwaltungen und konzentriert sich ganz auf den individuellen Arbeitsfluss – mit schnellen Projekt-Tags und übersichtlichen Auswertungen, die direkt auf dem Gerät bleiben.</p>
          `
        },
        "best-app-for-tracking-time-on-tasks-and-projects": {
          title: "Beste App für die Zeiterfassung auf Projekten",
          description: "Ein Produktvergleich darüber, was einen großartigen Time Tracker ausmacht – von Timern und Erinnerungen bis hin zu Berichten und ablenkungsfreiem Arbeiten.",
          readingTime: "2 Min. Lesezeit",
          toc: ["Zusammenfassung", "Wichtige Kriterien", "FAQ"],
          summaryPoints: [
            "Der beste Time Tracker hängt davon ab, ob du Team-Features oder persönlichen Fokus brauchst.",
            "Achte auf Projektzuordnung, integrierte Timer, Erinnerungen und nützliche Reports.",
            "Flowtime richtet sich an alle, die ohne Setup-Hürden Projekte erfassen wollen."
          ],
          bodyHtml: `
            <h2 id="features">Wichtige Kriterien</h2>
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Warum es wichtig ist</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Projektzuordnung</td>
                  <td>Hilft dir zu sehen, wie sich deine Zeit über verschiedene Arbeitsbereiche verteilt.</td>
                </tr>
                <tr>
                  <td>Integrierter Timer</td>
                  <td>Erleichtert das Erfassen im Moment des Arbeitens.</td>
                </tr>
                <tr>
                  <td>Erinnerungen</td>
                  <td>Unterstützen dich dabei, lange Sitzungen im Blick zu behalten.</td>
                </tr>
                <tr>
                  <td>Berichte</td>
                  <td>Machen deine erfasste Historie verständlich und nützlich.</td>
                </tr>
                <tr>
                  <td>Einfacher Start</td>
                  <td>Reduziert die Hürde und erleichtert die Gewohnheitsbildung.</td>
                </tr>
              </tbody>
            </table>
            <h2 id="faq">FAQ</h2>
            <details open>
              <summary>Was ist die beste App für Projekt-Zeiterfassung?</summary>
              <p>Für Teams eignen sich Tools wie Toggl Track oder Clockify. Einzelpersonen, die schnelle Projektzuordnung, einen Timer und lokale Berichte wollen, greifen eher zu Flowtime.</p>
            </details>
            <details>
              <summary>Bieten Zeiterfassungs-Apps Erinnerungen?</summary>
              <p>Ja. Erinnerungen helfen dir, Pausen nicht zu vergessen oder nach einer Ablenkung zum Timer zurückzukehren.</p>
            </details>
            <details>
              <summary>Benötige ich einen Account für Zeiterfassung?</summary>
              <p>Nicht zwingend. Während Cloud-Tools Accounts erzwingen, funktioniert Flowtime vollständig ohne Anmeldung.</p>
            </details>
          `
        },
        "sometimes-the-problem-isnt-getting-into-flow-its-getting-out-of-it": {
          title: "Manchmal ist das Problem nicht der Flow, sondern das Herauskommen",
          description: "Fokus-Sitzungen in Flowtime sind so konzipiert, dass sie Momente der Achtsamkeit schaffen, um Rabbit Holes zu vermeiden.",
          readingTime: "2 Min. Lesezeit",
          toc: ["Zusammenfassung", "Die Kehrseite des Flows", "FAQ"],
          summaryPoints: [
            "Fokus ist produktiv, kann aber auch dazu führen, dass Zeit unsichtbar verstreicht.",
            "Flowtime-Sitzungen helfen dir, ein gesundes Zeitbewusstsein zu wahren.",
            "Erinnerungen regen dazu auf, kurz innezuhalten und den Fokus bewusst zu lenken."
          ],
          bodyHtml: `
            <h2 id="flow">Die Kehrseite des Flows</h2>
            <p>Hyperfokus ist ein mächtiges Werkzeug, birgt aber das Risiko, dass man Pausen vergisst, die eigene Energie erschöpft oder stundenlang in der falschen Aufgabe versinkt. Flowtime hilft dir durch sanfte Signale und offene Sitzungen, bewusst zu arbeiten und den Moment des Aufhörens nicht zu verpassen.</p>
            <h2 id="faq">FAQ</h2>
            <details open>
              <summary>Warum enthält Flowtime Fokus-Erinnerungen?</summary>
              <p>Sie schaffen kleine Momente der Achtsamkeit in langen Sessions, um Energie und Prioritäten kurz abzugleichen.</p>
            </details>
            <details>
              <summary>Sollen Erinnerungen den Fokus stören?</summary>
              <p>Nein. Sie dienen nicht der Störung, sondern der bewussten Entscheidung, ob du weitermachen oder eine Pause machen möchtest.</p>
            </details>
          `
        },
        "flowtime-vs-forest": {
          title: "Flowtime vs Forest",
          description: "Ein Vergleich von Flowtime und Forest: Gamifizierung und virtuelle Wälder vs. minimalistische, ablenkungsfreie Timer.",
          readingTime: "4 Min. Lesezeit",
          toc: ["Zusammenfassung", "Schnellvergleich", "Wähle Flowtime, wenn", "FAQ"],
          summaryPoints: [
            "Flowtime und Forest nutzen grundlegend andere Ansätze für Fokus.",
            "Forest setzt auf Gamifizierung und bestraft das Verlassen der App mit dem Absterben virtueller Bäume.",
            "Flowtime ist ein reines Werkzeug mit Projekttags, Mono-Designs und klaren Berichten."
          ],
          bodyHtml: `
            <h2 id="comparison">Schnellvergleich</h2>
            <table>
              <thead>
                <tr>
                  <th>Kriterium</th>
                  <th>Flowtime</th>
                  <th>Forest</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fokusmethode</td>
                  <td>Klassischer Timer & Protokolle</td>
                  <td>Gamifiziertes Baumwachstum</td>
                </tr>
                <tr>
                  <td>Design</td>
                  <td>Minimalistisch (Classic/Mono)</td>
                  <td>Illustrierte Cartoon-Welt</td>
                </tr>
                <tr>
                  <td>Datenmodell</td>
                  <td>Lokal und privat</td>
                  <td>Account-basiert mit Cloud-Sync</td>
                </tr>
                <tr>
                  <td>Sitzungsstil</td>
                  <td>Offene Flow Sessions & Pomodoro</td>
                  <td>Strikter Countdown-Timer</td>
                </tr>
                <tr>
                  <td>Berichte</td>
                  <td>Wöchentliche/Monatliche Charts</td>
                  <td>Bäume und Erfolge-Historie</td>
                </tr>
              </tbody>
            </table>
            <h2 id="choose-flowtime">Wähle Flowtime, wenn</h2>
            <p>Du ein klares Werkzeug ohne Spielereien suchst. Flowtime ist ideal, wenn du deine echte Arbeitszeit auf Projekten protokollieren möchtest und eine ablenkungsfreie Oberfläche schätzt.</p>
            <h2>Wähle Forest, wenn</h2>
            <p>Du eine spielerische Motivation brauchst, um dein Smartphone nicht anzufassen, und dir die Angst vor einem sterbenden virtuellen Baum hilft, diszipliniert zu bleiben.</p>
            <h2 id="faq">FAQ</h2>
            <details open>
              <summary>Ist Flowtime gamifiziert?</summary>
              <p>Nein. Flowtime verzichtet bewusst auf Erfolge, virtuelle Währungen und spielerische Elemente, um den Fokus rein auf der Arbeit zu halten.</p>
            </details>
            <details>
              <summary>Welche Plattformen werden unterstützt?</summary>
              <p>Beides sind mobile Apps für iOS und Android. Forest gibt es zusätzlich als Browser-Erweiterung.</p>
            </details>
          `
        },
        "flowtime-vs-session": {
          title: "Flowtime vs Session",
          description: "Vergleiche Flowtime und Session: Finde heraus, ob du Apple-exklusive Automatisierungen oder einfache, plattformübergreifende Timer bevorzugst.",
          readingTime: "4 Min. Lesezeit",
          toc: ["Zusammenfassung", "Schnellvergleich", "Wähle Flowtime, wenn", "FAQ"],
          summaryPoints: [
            "Beide Apps sind moderne und ansprechende Fokus-Tracker.",
            "Session ist tief in macOS/iOS integriert, erfordert Apple-IDs und bietet Slack- und Kalender-Sync.",
            "Flowtime fokussiert sich auf eine datenschutzfreundliche, mobile App auf iOS und Android mit lokaler Speicherung."
          ],
          bodyHtml: `
            <h2 id="comparison">Schnellvergleich</h2>
            <table>
              <thead>
                <tr>
                  <th>Kriterium</th>
                  <th>Flowtime</th>
                  <th>Session</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Plattformen</td>
                  <td>iOS und Android</td>
                  <td>Nur macOS, iOS, iPadOS</td>
                </tr>
                <tr>
                  <td>Integrationen</td>
                  <td>Keine (vollständig lokal)</td>
                  <td>Apple Kalender, Slack, Kurzbefehle</td>
                </tr>
                <tr>
                  <td>Account</td>
                  <td>Kein Account nötig</td>
                  <td>Cloud-Sync via Apple-ID zwingend</td>
                </tr>
                <tr>
                  <td>Features</td>
                  <td>Flow Sessions & Pomodoro</td>
                  <td>Strikte Blöcke mit Sitzungsnotizen</td>
                </tr>
                <tr>
                  <td>Preis</td>
                  <td>Kostenlos (Pro-Option)</td>
                  <td>Abonnement-Modell</td>
                </tr>
              </tbody>
            </table>
            <h2 id="choose-flowtime">Wähle Flowtime, wenn</h2>
            <p>Du einen schnellen, accountfreien Start auf iOS oder Android wünschst. Ideal, wenn du deine Daten lokal halten und keine Abogebühren zahlen möchtest.</p>
            <h2>Wähle Session, wenn</h2>
            <p>Du ausschließlich Apple-Geräte nutzt, deine Kalendereinträge automatisch in Logs wandeln willst und Automatisierungen (wie automatischen Slack-Statuswechsel) liebst.</p>
            <h2 id="faq">FAQ</h2>
            <details open>
              <summary>Unterstützt Flowtime Kalender-Synchronisation?</summary>
              <p>Nein, Flowtime arbeitet als eigenständiger, lokaler Fokus-Timer ohne externe Kalenderverbindungen.</p>
            </details>
            <details>
              <summary>Funktioniert Flowtime offline?</summary>
              <p>Ja, alle Daten verbleiben offline und direkt gesichert auf deinem Mobilgerät.</p>
            </details>
          `
        },
        "flowtime-vs-focus-todo": {
          title: "Flowtime vs Focus To-Do",
          description: "Vergleich zwischen Flowtime und Focus To-Do: Reiner Fokus-Timer oder integrierte GTD-Aufgabenverwaltung.",
          readingTime: "4 Min. Lesezeit",
          toc: ["Zusammenfassung", "Schnellvergleich", "Wähle Flowtime, wenn", "FAQ"],
          summaryPoints: [
            "Flowtime und Focus To-Do verfolgen unterschiedliche Ansätze.",
            "Focus To-Do ist ein mächtiger Aufgabenmanager mit integriertem Pomodoro-Timer.",
            "Flowtime ist ein minimalistischer Timer für die direkte Zuordnung auf übergeordnete Projekte."
          ],
          bodyHtml: `
            <h2 id="comparison">Schnellvergleich</h2>
            <table>
              <thead>
                <tr>
                  <th>Kriterium</th>
                  <th>Flowtime</th>
                  <th>Focus To-Do</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fokus</td>
                  <td>Zeiterfassung & Projektzuordnung</td>
                  <td>Komplexes Aufgaben-Management</td>
                </tr>
                <tr>
                  <td>Timer-Modell</td>
                  <td>Flexible Flow Sessions oder Pomodoro</td>
                  <td>Klassischer Pomodoro-Timer</td>
                </tr>
                <tr>
                  <td>Aufgabenlisten</td>
                  <td>Nein (Konzentration auf Zeit)</td>
                  <td>Ja (Unteraufgaben, Termine, Wiederholungen)</td>
                </tr>
                <tr>
                  <td>Setup-Hürde</td>
                  <td>Sehr gering (Direktstart)</td>
                  <td>Mittel (Listen müssen gepflegt werden)</td>
                </tr>
                <tr>
                  <td>Design</td>
                  <td>Minimalistisch und modern</td>
                  <td>Klassisches Listen-Dashboard</td>
                </tr>
              </tbody>
            </table>
            <h2 id="choose-flowtime">Wähle Flowtime, wenn</h2>
            <p>Du bereits ein separates Tool für Aufgaben nutzt (wie Notion, Obsidian oder Papier) und nur einen schnellen Timer zum Erfassen deiner Arbeitszeit brauchst.</p>
            <h2>Wähle Focus To-Do, wenn</h2>
            <p>Du eine All-in-One-App suchst, die deine To-Do-Listen, Checklisten, Deadlines und Timer in einem Dashboard vereint.</p>
            <h2 id="faq">FAQ</h2>
            <details open>
              <summary>Bietet Flowtime Checklisten?</summary>
              <p>Nein, Flowtime verzichtet auf Checklisten und konzentriert sich ganz auf die Projekterfassung per Timer.</p>
            </details>
            <details>
              <summary>Kann ich in Focus To-Do offene Sitzungen starten?</summary>
              <p>Focus To-Do ist auf feste Intervalle (meist 25 Min.) ausgelegt. Flowtime bietet offene Flow Sessions ohne erzwungene Pausen.</p>
            </details>
          `
        },
        "flowtime-vs-be-focused": {
          title: "Flowtime vs Be Focused",
          description: "Ein Vergleich von Flowtime und Be Focused: Finde heraus, ob du feste Pomodoro-Intervalle oder flexible Flow-Sitzungen bevorzugst.",
          readingTime: "4 Min. Lesezeit",
          toc: ["Zusammenfassung", "Schnellvergleich", "Wähle Flowtime, wenn", "FAQ"],
          summaryPoints: [
            "Beide Timer helfen dir, deine produktiven Stunden zu erfassen.",
            "Be Focused konzentriert sich auf klassisches Intervall-Tracking mit konfigurierbaren Sounds.",
            "Flowtime bietet die Wahl zwischen klassischen Intervallen und anpassungsfähigen, offenen Flow Sessions."
          ],
          bodyHtml: `
            <h2 id="comparison">Schnellvergleich</h2>
            <table>
              <thead>
                <tr>
                  <th>Kriterium</th>
                  <th>Flowtime</th>
                  <th>Be Focused</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sitzungsstil</td>
                  <td>Offener Flow & Intervalle</td>
                  <td>Klassische Intervall-Blöcke</td>
                </tr>
                <tr>
                  <td>Oberfläche</td>
                  <td>Modern und minimalistisch</td>
                  <td>Einfaches macOS/iOS-Utility</td>
                </tr>
                <tr>
                  <td>Anpassung</td>
                  <td>Mono/Classic Themes</td>
                  <td>Custom Sounds & Intervalle</td>
                </tr>
                <tr>
                  <td>Plattformen</td>
                  <td>iOS und Android</td>
                  <td>Nur macOS und iOS</td>
                </tr>
                <tr>
                  <td>Berichte</td>
                  <td>Projektcharts & Verteilungen</td>
                  <td>Einfache Historien-Logs</td>
                </tr>
              </tbody>
            </table>
            <h2 id="choose-flowtime">Wähle Flowtime, wenn</h2>
            <p>Du Flexibilität wünschst. Dank offener Flow Sessions bremst Flowtime dich nicht aus, wenn du gerade hochproduktiv bist und keine Pause brauchst.</p>
            <h2>Wähle Be Focused, wenn</h2>
            <p>Du ein simples Menüleisten-Utility auf dem Mac suchst, das dir klassische Signaltöne bei Intervallende sendet.</p>
            <h2 id="faq">FAQ</h2>
            <details open>
              <summary>Unterstützt Be Focused offene Timer?</summary>
              <p>Be Focused ist primär auf starre Arbeits- und Pausenzyklen (z.B. 25/5 Minuten) ausgelegt.</p>
            </details>
            <details>
              <summary>Kann ich meine Daten aus Flowtime exportieren?</summary>
              <p>Ja. Flowtime speichert alles lokal auf dem Gerät und ermöglicht den Export als CSV/Rohdaten.</p>
            </details>
          `
        }
      }
    },
    fr: {
      labels: {
        comparison: "Comparaison",
        guide: "Guide",
        byAva: "Par Ava Thalheim",
        toc: "Table des matières",
        summary: "Résumé",
        related: "Articles associés",
        previous: "Précédent",
        next: "Suivant"
      },
      tags: {
        "privacy": "Confidentialité",
        "offline": "Hors-ligne",
        "time tracking": "Suivi du temps",
        "comparison": "Comparaison",
        "productivity": "Productivité",
        "product design": "Design de produit",
        "focus": "Focalisation"
      },
      listings: {
        comparison: {
          eyebrow: "Comparaison",
          title: "Choisissez le bon outil de concentration.",
          desc: "Comparez Flowtime avec les applications Pomodoro populaires, les minuteurs d'intervalles et les outils de suivi d'équipe pour trouver le bon équilibre entre simplicité, statistiques et confidentialité.",
          showcaseBadge1: "Conçu Pour",
          showcaseBadge2: "Comparaisons",
          showcaseTitle1: "Solutions par workflow",
          showcaseTitle2: "Comparaisons",
          showcaseDesc1: "Flowtime - Time Tracker est conçu pour le travail personnel concentré. Découvrez les avantages optimisés pour vos besoins spécifiques.",
          showcaseDesc2: "Minuteurs de concentration minimalistes vs. plateformes de suivi d'équipe. Choisissez l'outil le plus adapté à votre workflow.",
          solutions: [
            { h3: "Pour les Freelancers & Indépendants", p: "Suivez vos heures facturables sur vos projets et tâches, sans factures complexes, synchronisations de comptes ou tableaux de bord managériaux." },
            { h3: "Pour les Développeurs & Créateurs", p: "Démarrage instantané. Touchez une fois pour changer de projet, personnalisez vos modes de concentration et restez concentré sur votre code." },
            { h3: "Pour les Étudiants & Universitaires", p: "Structurez vos sessions d'étude avec le Pomodoro classique, définissez des durées cibles pour vos Flow Sessions et analysez vos graphiques hebdomadaires." },
            { h3: "Pour les Écrivains & Chercheurs", p: "Entrez dans une zone de concentration sans distraction. Activez le thème Mono, conservez vos données localement et travaillez en toute simplicité." }
          ],
          matrixBadge: "Tableau comparatif",
          matrixTitle: "Comparaison côte à côte",
          matrixDesc: "Découvrez comment Flowtime se compare à Toggl Track, Forest, Session, Focus To-Do et Be Focused sur les critères essentiels pour votre productivité.",
          matrixHeaders: ["Fonctionnalité", "Flowtime", "Toggl Track", "Forest", "Session", "Focus To-Do", "Be Focused"],
          matrixRows: [
            ["Idéal pour", "Focalisation minimale", "Facturation d'équipe", "Travail gamifié", "Notes détaillées", "Listes de tâches GTD", "Intervalles simples"],
            ["Sans création de compte", "Oui (Instantané)", "Non (Obligatoire)", "Optionnel", "Non (Obligatoire)", "Non (Obligatoire)", "Oui"],
            ["Confidentialité locale", "Oui (Données locales)", "Non (Cloud)", "Non (Sync)", "Non (Cloud)", "Non (Cloud)", "Oui"],
            ["Mode Pomodoro", "Oui (Gratuit)", "Optionnel", "Oui", "Oui", "Oui", "Oui"],
            ["Flow Sessions ouvertes", "Oui (Gratuit)", "Non", "Non", "Non", "Non", "Non"],
            ["Suivi par projet", "Oui (Pro)", "Oui", "Oui", "Oui", "Oui", "Oui"],
            ["Interface", "Ultra-minimaliste", "Tableau de bord dense", "Illustrations cartoon", "Style iOS moderne", "Listes compactes", "Minuteur simple"]
          ],
          searchPlaceholder: "Rechercher des comparaisons",
          sortNewest: "Plus récents en premier",
          sortOldest: "Plus anciens en premier",
          emptyMsg: "Aucune comparaison ne correspond à votre recherche."
        },
        guides: {
          eyebrow: "Guides & Blog",
          title: "Des idées pour un suivi du temps minimaliste.",
          desc: "Notes sur le travail de concentration, la productivité privée, le suivi du temps hors-ligne et la conception d'un minuteur discret.",
          searchPlaceholder: "Rechercher des articles",
          sortNewest: "Plus récents en premier",
          sortOldest: "Plus anciens en premier",
          emptyMsg: "Aucun article ne correspond à votre recherche."
        }
      },
      blog_metadata: {
        "time-tracker-without-account": {
          title: "Suivi du temps sans compte",
          desc: "Un guide pratique pour choisir un outil de suivi du temps privé et fluide qui fonctionne sans inscription ni synchronisation."
        },
        "flowtime-vs-toggl": {
          title: "Flowtime vs Toggl",
          desc: "Une comparaison pratique de Flowtime et Toggl pour choisir entre minuteur de concentration personnel et suivi d'équipe."
        },
        "best-offline-time-trackers": {
          title: "Les meilleurs outils de suivi hors-ligne",
          desc: "Ce qu'il faut chercher dans un outil hors-ligne, avec un accent sur la confidentialité, la vitesse et l'historique local."
        },
        "why-most-time-tracking-apps-feel-overengineered": {
          title: "Pourquoi les applications de suivi du temps semblent surchargées",
          desc: "Un essai sur le design produit : pourquoi ces outils deviennent trop complexes et comment une interface simple sert le focus."
        },
        "best-app-for-tracking-time-on-tasks-and-projects": {
          title: "Meilleure application pour le suivi par projet",
          desc: "Une comparaison des fonctionnalités essentielles, des minuteurs et rappels jusqu'aux rapports et analyses de concentration."
        },
        "sometimes-the-problem-isnt-getting-into-flow-its-getting-out-of-it": {
          title: "Parfois, le problème n'est pas d'entrer dans le flow, c'est d'en sortir",
          desc: "Les sessions de concentration de Flowtime sont conçues pour créer des moments de conscience et éviter de se perdre dans le travail."
        },
        "flowtime-vs-forest": {
          title: "Flowtime vs Forest",
          desc: "Une comparaison entre Flowtime et Forest : la concentration gamifiée contre un minuteur minimaliste et discret."
        },
        "flowtime-vs-session": {
          title: "Flowtime vs Session",
          desc: "Comparez Flowtime et Session : les automatisations de l'écosystème Apple contre la simplicité multiplateforme."
        },
        "flowtime-vs-focus-todo": {
          title: "Flowtime vs Focus To-Do",
          desc: "Comparez Flowtime et Focus To-Do : déterminez si un minuteur pur ou une liste de tâches GTD intégrée convient le mieux."
        },
        "flowtime-vs-be-focused": {
          title: "Flowtime vs Be Focused",
          desc: "Une comparaison entre Flowtime et Be Focused : la différence entre intervalles stricts et sessions Flow flexibles."
        }
      },
      pages: {
        "comparison": {
          metaTitle: "Flowtime - Comparaisons de suivi du temps vs Toggl, Forest & Session",
          metaDesc: "Comparez Flowtime avec Toggl Track, Forest, Session, Focus To-Do et Be Focused. Choisissez le meilleur outil pour vous."
        },
        "guides": {
          metaTitle: "Flowtime Guides & Blog - Focus, suivi du temps et confidentialité",
          metaDesc: "Guides et articles de blog Flowtime sur le suivi simple du temps, le travail concentré, la productivité hors-ligne et la vie privée."
        },
        "time-tracker-without-account": {
          metaTitle: "Suivi du temps sans compte - Flowtime - Time Tracker",
          metaDesc: "Un guide pour choisir un outil de suivi privé et sans friction, fonctionnant sans inscription, sync ou création de compte."
        },
        "flowtime-vs-toggl": {
          metaTitle: "Flowtime vs Toggl - Flowtime - Time Tracker",
          metaDesc: "Une comparaison pratique de Flowtime et Toggl pour choisir entre suivi de concentration et facturation d'équipe."
        },
        "best-offline-time-trackers": {
          metaTitle: "Les meilleurs outils de suivi hors-ligne - Flowtime - Time Tracker",
          metaDesc: "Ce qu'il faut chercher dans un outil hors-ligne : confidentialité, vitesse et historique local."
        },
        "why-most-time-tracking-apps-feel-overengineered": {
          metaTitle: "Pourquoi ces applications semblent surchargées - Flowtime",
          metaDesc: "Essai sur le design produit : pourquoi ces outils deviennent trop complexes et comment une interface simple sert le focus."
        },
        "best-app-for-tracking-time-on-tasks-and-projects": {
          metaTitle: "Meilleure application pour le suivi par projet - Flowtime",
          metaDesc: "Une comparaison des fonctionnalités essentielles, des minuteurs et rappels jusqu'aux rapports de concentration."
        },
        "sometimes-the-problem-isnt-getting-into-flow-its-getting-out-of-it": {
          metaTitle: "Parfois, le problème est de sortir du flow - Flowtime",
          metaDesc: "Comment les rappels de concentration aident à rester conscient du temps et à éviter les rabbit holes."
        },
        "flowtime-vs-forest": {
          metaTitle: "Flowtime vs Forest - Flowtime - Time Tracker",
          metaDesc: "Comparaison entre Flowtime et Forest : gamification et arbres virtuels contre minuteur utilitaire minimaliste."
        },
        "flowtime-vs-session": {
          metaTitle: "Flowtime vs Session - Flowtime - Time Tracker",
          metaDesc: "Découvrez ce qui vous convient le mieux : automatisations Apple ou confidentialité multiplateforme."
        },
        "flowtime-vs-focus-todo": {
          metaTitle: "Flowtime vs Focus To-Do - Flowtime - Time Tracker",
          metaDesc: "Comparaison entre Flowtime et Focus To-Do : minuteur de concentration pur ou gestionnaire de tâches GTD complet."
        },
        "flowtime-vs-be-focused": {
          metaTitle: "Flowtime vs Be Focused - Flowtime - Time Tracker",
          metaDesc: "Comparaison entre Flowtime et Be Focused : cycles Pomodoro rigides ou sessions de concentration ouvertes."
        }
      },
      articles: {
        "time-tracker-without-account": {
          title: "Suivi du temps sans compte",
          description: "Un guide pratique pour choisir un outil de suivi du temps privé et fluide qui fonctionne sans inscription, synchronisation ou configuration de compte.",
          readingTime: "4 min de lecture",
          toc: ["Résumé", "Ce que hors-ligne devrait signifier", "Critères d'évaluation", "FAQ"],
          summaryPoints: [
            "Le suivi sans compte réduit la friction de configuration.",
            "Les outils locaux préservent mieux la confidentialité de vos habitudes.",
            "Pour le travail en solo, un simple minuteur suffit largement."
          ],
          bodyHtml: `
            <h2 id="offline">Ce que "hors-ligne" devrait signifier</h2>
            <p>Être hors-ligne devrait signifier plus que simplement 'l'application ne plante pas sans connexion'. Un bon outil de suivi hors-ligne doit vous permettre de démarrer, d'arrêter, de revoir et d'organiser vos sessions de travail localement.</p>
            <h2 id="criteria">Critères d'évaluation</h2>
            <table>
              <thead>
                <tr>
                  <th>Fonctionnalité</th>
                  <th>Pourquoi c'est important</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Stockage local</td>
                  <td>Préserve la confidentialité de vos habitudes de travail.</td>
                </tr>
                <tr>
                  <td>Démarrage rapide</td>
                  <td>Réduit la friction avant le travail de concentration.</td>
                </tr>
                <tr>
                  <td>Historique clair</td>
                  <td>Rend les bilans utiles sans devenir une corvée de tableau de bord.</td>
                </tr>
                <tr>
                  <td>Options d'export</td>
                  <td>Vous permet de déplacer vos données lorsque vous en avez besoin.</td>
                </tr>
              </tbody>
            </table>
            <h2 id="faq">FAQ</h2>
            <details open>
              <summary>Un outil de suivi sans compte est-il privé par défaut ?</summary>
              <p>Il peut l'être, mais uniquement si l'application stocke les données localement et évite les analyses superflues.</p>
            </details>
            <details>
              <summary>Puis-je utiliser Flowtime sans créer de compte ?</summary>
              <p>Oui. Flowtime est conçu pour que vous puissiez suivre votre concentration sans créer de compte.</p>
            </details>
            <details>
              <summary>Le suivi du temps hors-ligne est-il utile pour le travail client ?</summary>
              <p>Oui, surtout si vous exportez les résumés plus tard. Pour les rapports d'équipe en temps réel, un outil cloud est plus adapté.</p>
            </details>
          `
        },
        "flowtime-vs-toggl": {
          title: "Flowtime vs Toggl",
          description: "Une comparaison pratique de Flowtime et Toggl pour choisir entre minuteur de concentration personnel et suivi d'équipe.",
          readingTime: "4 min de lecture",
          toc: ["Résumé", "Comparaison rapide", "Choisissez Flowtime si", "FAQ"],
          summaryPoints: [
            "Flowtime est conçu pour le suivi de la concentration personnelle.",
            "Toggl est plus large et mieux adapté aux rapports d'affaires et d'équipes.",
            "Le meilleur choix dépend de votre besoin : minuteur de concentration ou infrastructure d'équipe."
          ],
          bodyHtml: `
            <h2 id="comparison">Comparaison rapide</h2>
            <table>
              <thead>
                <tr>
                  <th>Critère</th>
                  <th>Flowtime</th>
                  <th>Toggl</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Idéal pour</td>
                  <td>Sessions de concentration personnelles</td>
                  <td>Suivi du temps d'équipe et client</td>
                </tr>
                <tr>
                  <td>Compte</td>
                  <td>Aucun compte (stockage local)</td>
                  <td>Basé sur le compte (dans le cloud)</td>
                </tr>
                <tr>
                  <td>Rapports</td>
                  <td>Statistiques de focus personnelles</td>
                  <td>Rapports professionnels détaillés</td>
                </tr>
                <tr>
                  <td>Configuration</td>
                  <td>Trés simple</td>
                  <td>Moyenne</td>
                </tr>
              </tbody>
            </table>
            <h2 id="choose-flowtime">Choisissez Flowtime si</h2>
            <p>Vous recherchez un minuteur minimaliste pour le travail concentré, les sessions Pomodoro, les Flow Sessions et un historique simple, sans transformer le suivi en système administratif.</p>
            <h2>Choisissez Toggl si</h2>
            <p>Vous avez besoin de facturation, de rapports d'équipe, de tableaux de bord clients, de gestion d'espace de travail ou d'intégrations complexes.</p>
            <h2 id="faq">FAQ</h2>
            <details open>
              <summary>Flowtime est-il un remplaçant de Toggl ?</summary>
              <p>Pour le suivi personnel du focus, oui. Pour la facturation d'équipe, Toggl est plus adapté.</p>
            </details>
            <details>
              <summary>Lequel est préférable pour le travail profond ?</summary>
              <p>Flowtime est volontairement plus léger et plus axé sur l'attention individuelle.</p>
            </details>
          `
        },
        "best-offline-time-trackers": {
          title: "Les meilleurs outils de suivi hors-ligne",
          description: "Ce qu'il faut chercher dans un outil hors-ligne, avec un accent sur la confidentialité, la vitesse et l'historique local.",
          readingTime: "4 min de lecture",
          toc: ["Résumé", "Ce que hors-ligne devrait signifier", "Critères d'évaluation", "FAQ"],
          summaryPoints: [
            "Les meilleurs trackers hors-ligne fonctionnent sans connexion réseau.",
            "Le stockage local des données et les fonctionnalités d'exportation sont cruciaux.",
            "Une interface épurée aide à maintenir la concentration."
          ],
          bodyHtml: `
            <h2 id="offline">Ce que "hors-ligne" devrait signifier</h2>
            <p>Être hors-ligne devrait signifier plus que simplement 'l'application ne plante pas sans internet'. Un bon outil hors-ligne vous permet de démarrer, arrêter et organiser des sessions localement.</p>
            <h2 id="criteria">Critères d'évaluation</h2>
            <table>
              <thead>
                <tr>
                  <th>Critère</th>
                  <th>Bon signal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Données locales</td>
                  <td>Les sessions sont accessibles à tout moment sans connexion.</td>
                </tr>
                <tr>
                  <td>Projets simples</td>
                  <td>Vous organisez votre temps sans configuration fastidieuse.</td>
                </tr>
                <tr>
                  <td>Chemin d'export</td>
                  <td>Vos données ne sont pas enfermées dans l'application.</td>
                </tr>
                <tr>
                  <td>Bruit visuel réduit</td>
                  <td>L'application aide à la concentration au lieu de l'interrompre.</td>
                </tr>
              </tbody>
            </table>
            <h2>Pourquoi Flowtime convient</h2>
            <p>Flowtime est conçu pour le suivi minimaliste, des projets flexibles et un historique épuré. Il s'adresse aux personnes qui souhaitent suivre leur temps sans la lourdeur d'une plateforme d'entreprise.</p>
            <h2 id="faq">FAQ</h2>
            <details open>
              <summary>Les outils de suivi hors-ligne se synchronisent-ils entre appareils ?</summary>
              <p>Certains le font, mais la synchronisation nécessite généralement un compte ou un service cloud. Si l'accès multi-appareils est important, vérifiez où vos données sont stockées.</p>
            </details>
            <details>
              <summary>Les outils hors-ligne sont-ils plus sûrs pour la vie privée ?</summary>
              <p>Oui, car vos données de suivi restent sur votre appareil et l'application évite les collectes superflues.</p>
            </details>
          `
        },
        "why-most-time-tracking-apps-feel-overengineered": {
          title: "Pourquoi les applications de suivi du temps semblent surchargées",
          description: "Un essai sur le design produit : pourquoi ces outils deviennent trop complexes et comment une interface simple sert le focus.",
          readingTime: "4 min de lecture",
          toc: ["Résumé", "La course aux fonctionnalités", "L'accent sur l'essentiel"],
          summaryPoints: [
            "De nombreuses applications de suivi sont conçues pour les agences, managers ou équipes.",
            "Ces besoins sont légitimes, mais inutiles pour les particuliers.",
            "Flowtime a été créé autour d'un besoin simple : un minuteur qui montre où va votre temps."
          ],
          bodyHtml: `
            <h2 id="features">La course aux fonctionnalités</h2>
            <p>La majorité des outils se concentrent sur la facturation horaire des entreprises. Cela engendre des interfaces lourdes avec des processus de validation et des taux horaires. Pour les créateurs ou étudiants indépendants, cette complexité décourage souvent le suivi.</p>
            <h2 id="focus">L'accent sur l'essentiel</h2>
            <p>Un bon design produit consiste à savoir quoi omettre. Flowtime fait l'impasse sur la gestion d'équipe et se concentre sur le flux de travail individuel – avec des tags de projet rapides et des statistiques locales.</p>
          `
        },
        "best-app-for-tracking-time-on-tasks-and-projects": {
          title: "Meilleure application pour le suivi par projet",
          description: "Un comparatif de ce qui fait un bon outil de suivi : des minuteurs et rappels jusqu'aux rapports de concentration.",
          readingTime: "2 min de lecture",
          toc: ["Résumé", "Fonctionnalités clés", "FAQ"],
          summaryPoints: [
            "La meilleure application dépend de votre besoin de fonctionnalités d'équipe ou de focus personnel.",
            "Recherchez la gestion par projets, un minuteur intégré, des rappels et des rapports clairs.",
            "Flowtime s'adresse à ceux qui veulent suivre des projets sans barrière à l'entrée."
          ],
          bodyHtml: `
            <h2 id="features">Fonctionnalités clés</h2>
            <table>
              <thead>
                <tr>
                  <th>Fonctionnalité</th>
                  <th>Pourquoi c'est important</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gestion par projets</td>
                  <td>Permet de visualiser la répartition de votre temps de travail.</td>
                </tr>
                <tr>
                  <td>Minuteur intégré</td>
                  <td>Facilite la capture des sessions pendant qu'elles se déroulent.</td>
                </tr>
                <tr>
                  <td>Rappels</td>
                  <td>Aide à garder le contrôle sur les longues sessions.</td>
                </tr>
                <tr>
                  <td>Rapports</td>
                  <td>Rend votre historique compréhensible et exploitable.</td>
                </tr>
                <tr>
                  <td>Démarrage simple</td>
                  <td>Réduit la friction et facilite l'installation d'une routine.</td>
                </tr>
              </tbody>
            </table>
            <h2 id="faq">FAQ</h2>
            <details open>
              <summary>Quelle est la meilleure app pour le suivi de projet ?</summary>
              <p>Les équipes préféreront des outils comme Toggl Track ou Clockify. Les indépendants cherchant des projets simples, un minuteur et des statistiques locales apprécieront Flowtime.</p>
            </details>
            <details>
              <summary>Les applications incluent-elles des rappels ?</summary>
              <p>Oui. Les rappels aident à prendre des pauses régulières ou à relancer le minuteur après une distraction.</p>
            </details>
            <details>
              <summary>Faut-il un compte pour suivre son temps ?</summary>
              <p>Pas nécessairement. Alors que les applications cloud imposent un compte, Flowtime fonctionne totalement sans inscription.</p>
            </details>
          `
        },
        "sometimes-the-problem-isnt-getting-into-flow-its-getting-out-of-it": {
          title: "Parfois, le problème n'est pas d'entrer dans le flow, c'est d'en sortir",
          description: "Les sessions de concentration Flowtime sont conçues pour créer des moments de conscience et éviter de se perdre dans le travail.",
          readingTime: "2 min de lecture",
          toc: ["Résumé", "Le revers du flow", "FAQ"],
          summaryPoints: [
            "La focalisation est utile, mais elle peut aussi faire disparaître le temps.",
            "Les sessions de Flowtime vous aident à maintenir une relation saine avec le temps.",
            "Les rappels incitent à faire une pause rapide et à réévaluer ses priorités."
          ],
          bodyHtml: `
            <h2 id="flow">Le revers du flow</h2>
            <p>L'hyperfocalisation est un outil puissant, mais elle comporte le risque d'oublier les pauses, d'épuiser son énergie ou de passer des heures sur la mauvaise tâche. Flowtime vous aide par des signaux légers à travailler en pleine conscience et à vous arrêter au bon moment.</p>
            <h2 id="faq">FAQ</h2>
            <details open>
              <summary>Pourquoi Flowtime intègre-t-il des rappels de focus ?</summary>
              <p>Ils créent des moments de conscience durant les longues sessions pour vérifier votre énergie et vos priorités.</p>
            </details>
            <details>
              <summary>Les rappels nuisent-ils à la concentration ?</summary>
              <p>Non. Le but n'est pas de vous couper dans votre travail, mais de vous aider à choisir d'arrêter ou de continuer consciemment.</p>
            </details>
          `
        },
        "flowtime-vs-forest": {
          title: "Flowtime vs Forest",
          description: "Une comparaison entre Flowtime et Forest : gamification et arbres virtuels contre minuteurs discrets et minimalistes.",
          readingTime: "4 min de lecture",
          toc: ["Résumé", "Comparaison rapide", "Choisissez Flowtime si", "FAQ"],
          summaryPoints: [
            "Flowtime et Forest proposent des méthodes très différentes.",
            "Forest s'appuie sur le jeu et fait mourir vos arbres virtuels si vous quittez l'app.",
            "Flowtime est un outil épuré avec projets, design mono et rapports clairs."
          ],
          bodyHtml: `
            <h2 id="comparison">Comparaison rapide</h2>
            <table>
              <thead>
                <tr>
                  <th>Critère</th>
                  <th>Flowtime</th>
                  <th>Forest</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Méthode</td>
                  <td>Minuteur classique et rapports</td>
                  <td>Croissance d'arbres gamifiée</td>
                </tr>
                <tr>
                  <td>Design</td>
                  <td>Minimaliste (Classic/Mono)</td>
                  <td>Style cartoon illustré</td>
                </tr>
                <tr>
                  <td>Confidentialité</td>
                  <td>Local et privé</td>
                  <td>Basé sur le compte avec cloud sync</td>
                </tr>
                <tr>
                  <td>Style de session</td>
                  <td>Flow Sessions libres ou Pomodoro</td>
                  <td>Minuteurs de compte à rebours rigides</td>
                </tr>
                <tr>
                  <td>Rapports</td>
                  <td>Graphiques mensuels/hebdomadaires</td>
                  <td>Forêts virtuelles et trophées</td>
                </tr>
              </tbody>
            </table>
            <h2 id="choose-flowtime">Choisissez Flowtime si</h2>
            <p>Vous cherchez un outil simple sans éléments de jeu. Flowtime est idéal pour mesurer votre vrai temps de travail par projet avec une interface épurée.</p>
            <h2>Choisissez Forest si</h2>
            <p>Vous avez du mal à poser votre smartphone et si la peur de voir mourir un arbre virtuel vous aide à rester discipliné.</p>
            <h2 id="faq">FAQ</h2>
            <details open>
              <summary>Flowtime est-il gamifié ?</summary>
              <p>Non. Flowtime évite délibérément les récompenses et trophées pour garder l'esprit concentré uniquement sur le travail.</p>
            </details>
            <details>
              <summary>Quelles plateformes sont supportées ?</summary>
              <p>Ce sont deux applications mobiles iOS et Android. Forest est également disponible en extension de navigateur.</p>
            </details>
          `
        },
        "flowtime-vs-session": {
          title: "Flowtime vs Session",
          description: "Comparez Flowtime et Session : déterminez si vous préférez les automatisations Apple ou la simplicité multiplateforme.",
          readingTime: "4 min de lecture",
          toc: ["Résumé", "Comparaison rapide", "Choisissez Flowtime si", "FAQ"],
          summaryPoints: [
            "Les deux applications sont des minuteurs modernes et esthétiques.",
            "Session est très intégré à l'écosystème Apple, avec synchronisation calendrier et Slack.",
            "Flowtime propose une expérience hors-ligne centrée sur des projets et statistiques locales sur iOS et Android."
          ],
          bodyHtml: `
            <h2 id="comparison">Comparaison rapide</h2>
            <table>
              <thead>
                <tr>
                  <th>Critère</th>
                  <th>Flowtime</th>
                  <th>Session</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Compatibilité</td>
                  <td>iOS et Android</td>
                  <td>macOS, iOS, iPadOS uniquement</td>
                </tr>
                <tr>
                  <td>Intégrations</td>
                  <td>Aucune (local uniquement)</td>
                  <td>Calendrier Apple, Slack, Raccourcis</td>
                </tr>
                <tr>
                  <td>Compte</td>
                  <td>Aucun compte nécessaire</td>
                  <td>Synchronisation Apple ID obligatoire</td>
                </tr>
                <tr>
                  <td>Fonctionnalités</td>
                  <td>Flow Sessions & Pomodoro</td>
                  <td>Blocs de focus stricts avec notes</td>
                </tr>
                <tr>
                  <td>Prix</td>
                  <td>Gratuit (option Pro)</td>
                  <td>Abonnement payant</td>
                </tr>
              </tbody>
            </table>
            <h2 id="choose-flowtime">Choisissez Flowtime si</h2>
            <p>Vous voulez démarrer instantanément sans compte sur iOS ou Android. Idéal pour garder le contrôle de ses données locales sans frais d'abonnement.</p>
            <h2>Choisissez Session si</h2>
            <p>Vous êtes exclusivement sur Apple, souhaitez lier votre calendrier à vos sessions et appréciez les automatisations (comme le statut Slack).</p>
            <h2 id="faq">FAQ</h2>
            <details open>
              <summary>Flowtime propose-t-il la sync calendrier ?</summary>
              <p>Non, Flowtime fonctionne de manière autonome et locale sans connexions externes.</p>
            </details>
            <details>
              <summary>Puis-je l'utiliser hors-ligne ?</summary>
              <p>Oui, toutes vos données restent stockées directement sur votre smartphone.</p>
            </details>
          `
        },
        "flowtime-vs-focus-todo": {
          title: "Flowtime vs Focus To-Do",
          description: "Comparaison entre Flowtime et Focus To-Do : minuteur de concentration pur ou gestionnaire de tâches GTD complet.",
          readingTime: "4 min de lecture",
          toc: ["Résumé", "Comparaison rapide", "Choisissez Flowtime si", "FAQ"],
          summaryPoints: [
            "Les deux outils adoptent des directions très différentes.",
            "Focus To-Do combine la méthode Pomodoro à une gestion de tâches GTD complète.",
            "Flowtime est un minuteur épuré pour attribuer votre temps à de grands projets."
          ],
          bodyHtml: `
            <h2 id="comparison">Comparaison rapide</h2>
            <table>
              <thead>
                <tr>
                  <th>Critère</th>
                  <th>Flowtime</th>
                  <th>Focus To-Do</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Focus principal</td>
                  <td>Suivi du temps et projets</td>
                  <td>Gestion de tâches complexes</td>
                </tr>
                <tr>
                  <td>Minuteur</td>
                  <td>Flow Sessions libres ou Pomodoro</td>
                  <td>Cycles Pomodoro classiques</td>
                </tr>
                  <td>Gestion de listes</td>
                  <td>Non (focus sur le temps)</td>
                  <td>Oui (sous-tâches, dates, rappels)</td>
                </tr>
                <tr>
                  <td>Mise en route</td>
                  <td>Très simple (lancement direct)</td>
                  <td>Moyenne (organisation préalable)</td>
                </tr>
                <tr>
                  <td>Design</td>
                  <td>Minimaliste et moderne</td>
                  <td>Dashboard de listes classique</td>
                </tr>
              </tbody>
            </table>
            <h2 id="choose-flowtime">Choisissez Flowtime si</h2>
            <p>Vous utilisez déjà un outil distinct pour vos tâches (Notion, Obsidian ou papier) et cherchez juste un minuteur rapide pour mesurer vos heures de focus.</p>
            <h2>Choisissez Focus To-Do si</h2>
            <p>Vous voulez une seule application qui réunit vos listes de tâches, sous-tâches, rappels et cycles Pomodoro.</p>
            <h2 id="faq">FAQ</h2>
            <details open>
              <summary>Flowtime propose-t-il des listes ?</summary>
              <p>Non, il n'intègre pas de listes de tâches pour se concentrer uniquement sur le suivi par projet.</p>
            </details>
            <details>
              <summary>Puis-je faire des sessions libres dans Focus To-Do ?</summary>
              <p>Focus To-Do est pensé pour des cycles fixes. Flowtime permet des sessions Flow ouvertes qui s'adaptent à votre élan.</p>
            </details>
          `
        },
        "flowtime-vs-be-focused": {
          title: "Flowtime vs Be Focused",
          description: "Une comparaison entre Flowtime et Be Focused : la différence entre intervalles stricts et sessions de concentration flexibles.",
          readingTime: "4 min de lecture",
          toc: ["Résumé", "Comparaison rapide", "Choisissez Flowtime si", "FAQ"],
          summaryPoints: [
            "Les deux outils enregistrent efficacement vos heures productives.",
            "Be Focused se concentre sur les intervalles standard avec des alertes sonores configurables.",
            "Flowtime offre le choix entre intervalles classiques et sessions Flow ouvertes adaptables."
          ],
          bodyHtml: `
            <h2 id="comparison">Comparaison rapide</h2>
            <table>
              <thead>
                <tr>
                  <th>Critère</th>
                  <th>Flowtime</th>
                  <th>Be Focused</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Style de session</td>
                  <td>Flow libre & intervalles</td>
                  <td>Intervalles de travail fixes</td>
                </tr>
                <tr>
                  <td>Interface</td>
                  <td>Moderne et minimaliste</td>
                  <td>Utilitaire barre des menus macOS/iOS</td>
                </tr>
                <tr>
                  <td>Personnalisation</td>
                  <td>Thèmes Classic/Mono</td>
                  <td>Sons et intervalles personnalisables</td>
                </tr>
                <tr>
                  <td>Plates-formes</td>
                  <td>iOS et Android</td>
                  <td>macOS et iOS uniquement</td>
                </tr>
                <tr>
                  <td>Rapports</td>
                  <td>Graphiques de projet</td>
                  <td>Historiques simples</td>
                </tr>
              </tbody>
            </table>
            <h2 id="choose-flowtime">Choisissez Flowtime si</h2>
            <p>Vous aimez la flexibilité. Grâce aux sessions Flow, Flowtime ne vous impose pas de coupure lorsque vous êtes dans votre élan créatif.</p>
            <h2>Choisissez Be Focused si</h2>
            <p>Vous cherchez un utilitaire discret pour Mac qui loge dans la barre des menus et émet des carillons classiques à chaque fin de cycle.</p>
            <h2 id="faq">FAQ</h2>
            <details open>
              <summary>Be Focused supporte-t-il les sessions libres ?</summary>
              <p>Non, il est principalement pensé pour des cycles fixes (ex. 25/5 minutes).</p>
            </details>
            <details>
              <summary>Puis-je exporter mes données de Flowtime ?</summary>
              <p>Oui, Flowtime stocke tout sur votre appareil et permet d'exporter les sessions brutes.</p>
            </details>
          `
        }
      }
    }
  };

  // Add translated titles and descriptions to window.t copying dictionary
  if (locale !== "en" && blogTranslations[locale]) {
    var dict = blogTranslations[locale];
    var metadataTranslations = {};
    for (var slug in dict.blog_metadata) {
      metadataTranslations["blog.title." + slug] = dict.blog_metadata[slug].title;
      metadataTranslations["blog.desc." + slug] = dict.blog_metadata[slug].desc;
    }
    
    // Add tag translations
    for (var tag in dict.tags) {
      metadataTranslations["blog.tag." + tag] = dict.tags[tag];
    }
    
    // Common labels
    metadataTranslations["blog.tag.all"] = locale === "de" ? "Alle" : "Tout";
    metadataTranslations["blog.read_article"] = locale === "de" ? "Artikel lesen" : "Lire l'article";
    metadataTranslations["blog.reading_time"] = locale === "de" ? "{minutes} Min. Lesezeit" : "{minutes} min de lecture";
    metadataTranslations["blog.count_single"] = locale === "de" ? "1 Artikel" : "1 article";
    metadataTranslations["blog.count_multiple"] = locale === "de" ? "{count} Artikel" : "{count} articles";

    window.flowtimeAddTranslations(locale, metadataTranslations);
  }

  function getPageKey() {
    var parts = window.location.pathname.split('/');
    var file = parts[parts.length - 1] || parts[parts.length - 2];
    if (file === "index.html" || file === "") {
      file = parts[parts.length - 2];
    }
    return file || "";
  }

  function getSlugFromUrl(url) {
    if (!url) return "";
    var parts = url.split('/');
    parts = parts.filter(Boolean);
    var file = parts[parts.length - 1];
    if (file === "index.html") {
      file = parts[parts.length - 2];
    }
    return file || "";
  }

  window.flowtimeTranslateBlog = function (loc) {
    var dict = blogTranslations[loc];
    if (!dict) return;

    var pageKey = getPageKey();
    if (pageKey && dict.pages[pageKey]) {
      var pData = dict.pages[pageKey];
      if (pData.metaTitle) document.title = pData.metaTitle;
      var metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && pData.metaDesc) metaDesc.setAttribute("content", pData.metaDesc);
    }

    var isList = !!document.querySelector("[data-blog-grid]");
    var category = document.body.dataset.blogCategory;

    if (isList && category) {
      var lData = dict.listings[category];
      if (lData) {
        var eyebrow = document.querySelector(".blog-hero .eyebrow");
        if (eyebrow && lData.eyebrow) eyebrow.textContent = lData.eyebrow;

        var title = document.querySelector("#blog-title");
        if (title && lData.title) title.textContent = lData.title;

        var desc = document.querySelector(".blog-hero p:not(.eyebrow)");
        if (desc && lData.desc) desc.textContent = lData.desc;

        var searchInput = document.querySelector("[data-blog-search]");
        if (searchInput && lData.searchPlaceholder) searchInput.setAttribute("placeholder", lData.searchPlaceholder);

        var sortSelect = document.querySelector("[data-blog-sort]");
        if (sortSelect && lData.sortNewest) {
          sortSelect.options[0].text = lData.sortNewest;
          sortSelect.options[1].text = lData.sortOldest;
        }

        var emptyMsg = document.querySelector("[data-blog-empty]");
        if (emptyMsg && lData.emptyMsg) emptyMsg.textContent = lData.emptyMsg;

        if (category === "comparison") {
          var badges = document.querySelectorAll(".showcase-badge");
          if (badges[0] && lData.showcaseBadge1) badges[0].textContent = lData.showcaseBadge1;
          if (badges[1] && lData.showcaseBadge2) badges[1].textContent = lData.showcaseBadge2;

          var titles = document.querySelectorAll(".showcase-title");
          if (titles[0] && lData.showcaseTitle1) titles[0].textContent = lData.showcaseTitle1;
          if (titles[1] && lData.showcaseTitle2) titles[1].textContent = lData.showcaseTitle2;

          var descs = document.querySelectorAll(".showcase-desc");
          if (descs[0] && lData.showcaseDesc1) descs[0].textContent = lData.showcaseDesc1;
          if (descs[1] && lData.showcaseDesc2) descs[1].textContent = lData.showcaseDesc2;

          var cards = document.querySelectorAll(".showcase-column:first-child .showcase-card");
          if (cards.length >= 4 && lData.solutions) {
            for (var i = 0; i < 4; i++) {
              var cardH3 = cards[i].querySelector("h3");
              var cardP = cards[i].querySelector("p");
              if (cardH3 && lData.solutions[i]) cardH3.innerHTML = lData.solutions[i].h3 + ' <span class="arrow">&rarr;</span>';
              if (cardP && lData.solutions[i]) cardP.textContent = lData.solutions[i].p;
            }
          }

          var matrixBadge = document.querySelector(".matrix-badge");
          if (matrixBadge && lData.matrixBadge) matrixBadge.textContent = lData.matrixBadge;

          var matrixTitle = document.querySelector(".comparison-matrix-section h2");
          if (matrixTitle && lData.matrixTitle) matrixTitle.textContent = lData.matrixTitle;

          var matrixDesc = document.querySelector(".matrix-desc");
          if (matrixDesc && lData.matrixDesc) matrixDesc.textContent = lData.matrixDesc;

          var tableThs = document.querySelectorAll(".matrix-table th");
          if (tableThs.length >= 7 && lData.matrixHeaders) {
            for (var j = 0; j < 7; j++) {
              tableThs[j].textContent = lData.matrixHeaders[j];
            }
          }
          var tableRows = document.querySelectorAll(".matrix-table tbody tr");
          if (tableRows.length >= 7 && lData.matrixRows) {
            for (var r = 0; r < 7; r++) {
              var tds = tableRows[r].querySelectorAll("td");
              if (tds.length >= 7 && lData.matrixRows[r]) {
                for (var c = 0; c < 7; c++) {
                  if (c === 0) {
                    tds[c].innerHTML = "<strong>" + lData.matrixRows[r][c] + "</strong>";
                  } else {
                    tds[c].textContent = lData.matrixRows[r][c];
                    if (c === 1) {
                      tds[c].className = "highlight";
                    }
                  }
                }
              }
            }
          }
        }
      }

      if (window.flowtimeRenderPosts) {
        window.flowtimeRenderPosts();
      }
    }

    var isArticle = !!document.querySelector(".blog-article");
    if (isArticle && pageKey && dict.articles[pageKey]) {
      var aData = dict.articles[pageKey];

      var catEyebrow = document.querySelector(".article-header .eyebrow");
      if (catEyebrow) catEyebrow.textContent = category === "comparison" ? dict.labels.comparison : dict.labels.guide;

      var artH1 = document.querySelector(".article-header h1");
      if (artH1 && aData.title) artH1.textContent = aData.title;

      var artDesc = document.querySelector(".article-header .article-description");
      if (artDesc && aData.description) artDesc.textContent = aData.description;

      var artMeta = document.querySelector(".article-header .article-meta");
      if (artMeta && aData.readingTime) {
        var timeNode = document.querySelector(".article-header .article-meta time");
        var dateVal = timeNode ? timeNode.getAttribute("datetime") : new Date().toISOString().split('T')[0];
        var localizedDate = new Intl.DateTimeFormat(loc, { month: "long", day: "numeric", year: "numeric" }).format(new Date(dateVal + "T00:00:00"));
        artMeta.innerHTML = "<span>" + dict.labels.byAva + "</span><time datetime=\"" + dateVal + "\">" + localizedDate + "</time><span>" + aData.readingTime + "</span>";
      }

      var artTags = document.querySelectorAll(".article-header .article-tags .article-tag");
      artTags.forEach(function(tagNode) {
        var cleanTag = tagNode.textContent.trim().toLowerCase();
        if (dict.tags[cleanTag]) tagNode.textContent = dict.tags[cleanTag];
      });

      var tocHeader = document.querySelector(".article-toc h2");
      if (tocHeader) tocHeader.textContent = dict.labels.toc;
      var tocLinks = document.querySelectorAll(".article-toc a");
      if (tocLinks.length >= 4 && aData.toc) {
        for (var k = 0; k < tocLinks.length; k++) {
          if (aData.toc[k]) tocLinks[k].textContent = aData.toc[k];
        }
      }

      var summaryHeader = document.querySelector(".article-summary h2");
      if (summaryHeader) summaryHeader.textContent = dict.labels.summary;
      var summaryLis = document.querySelectorAll(".article-summary li");
      if (summaryLis.length >= 3 && aData.summaryPoints) {
        for (var l = 0; l < summaryLis.length; l++) {
          if (aData.summaryPoints[l]) summaryLis[l].textContent = aData.summaryPoints[l];
        }
      }

      var artBody = document.querySelector(".article-body");
      if (artBody && aData.bodyHtml) {
        artBody.innerHTML = aData.bodyHtml;
      }

      var relatedHeader = document.querySelector(".blog-related h2");
      if (relatedHeader) relatedHeader.textContent = dict.labels.related;
      var relatedCards = document.querySelectorAll(".blog-related .related-card");
      relatedCards.forEach(function(cardNode) {
        var linkHref = cardNode.getAttribute("href") || "";
        var targetSlug = getSlugFromUrl(linkHref);
        if (targetSlug && dict.blog_metadata[targetSlug]) {
          var cardStrong = cardNode.querySelector("strong");
          var cardSpan = cardNode.querySelector("span");
          if (cardStrong) cardStrong.textContent = dict.blog_metadata[targetSlug].title;
          if (cardSpan) cardSpan.textContent = dict.blog_metadata[targetSlug].desc;
        }
      });

      var prevLink = document.querySelector(".article-nav a:first-child");
      var nextLink = document.querySelector(".article-nav a:last-child");
      if (prevLink) {
        var prevSpan = prevLink.querySelector("span");
        var prevHref = prevLink.getAttribute("href") || "";
        var prevSlug = getSlugFromUrl(prevHref);
        if (prevSpan) prevSpan.textContent = dict.labels.previous;
        if (prevSlug && dict.blog_metadata[prevSlug]) {
          prevLink.innerHTML = "<span>" + dict.labels.previous + "</span>" + dict.blog_metadata[prevSlug].title;
        }
      }
      if (nextLink) {
        var nextSpan = nextLink.querySelector("span");
        var nextHref = nextLink.getAttribute("href") || "";
        var nextSlug = getSlugFromUrl(nextHref);
        if (nextSpan) nextSpan.textContent = dict.labels.next;
        if (nextSlug && dict.blog_metadata[nextSlug]) {
          nextLink.innerHTML = "<span>" + dict.labels.next + "</span>" + dict.blog_metadata[nextSlug].title;
        }
      }
    }
  };

  // Run automatically if the script is loaded and translations are already registered
  if (locale !== "en") {
    window.flowtimeTranslateBlog(locale);
  }
}());
