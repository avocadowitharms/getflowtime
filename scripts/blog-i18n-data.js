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
        next: "Weiter",
        searchArticles: "Artikel suchen",
        sortArticles: "Artikel sortieren",
        filterByTag: "Nach Schlagwort filtern"
      },
      tags: {
        "privacy": "Datenschutz",
        "offline": "Offline",
        "time tracking": "Zeiterfassung",
        "comparison": "Vergleich",
        "productivity": "Produktivität",
        "product design": "Produktdesign",
        "focus": "Fokus",
        "projects": "Projekte"
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
          comparisons: [
            { h3: "Flowtime vs Toggl Track", p: "Toggl Track ist ein detaillierter, teamorientierter Logger für Agenturen. Flowtime ist ein leichter, accountfreier Fokus-Timer für Einzelpersonen." },
            { h3: "Flowtime vs Forest", p: "Forest nutzt Gamification und virtuelle Bäume, um Fokus zu fördern. Flowtime bietet einen klaren Utility-Timer mit strukturierten Berichten ohne Spielmechanik." },
            { h3: "Flowtime vs Session", p: "Session ist ein funktionsreiches Timer-Tool für das Apple-Ökosystem. Flowtime ist eine plattformübergreifende, minimalistische Alternative." },
            { h3: "Flowtime vs Focus To-Do", p: "Focus To-Do kombiniert Pomodoro mit komplexen GTD-Aufgabenlisten. Flowtime konzentriert sich auf reine Fokus-Sessions und flexible Projektzuordnung." },
            { h3: "Flowtime vs Be Focused", p: "Be Focused ist ein klassischer Intervall-Timer. Flowtime ergänzt offene Flow Sessions, Berichte und anpassbare Oberflächenthemen." }
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
          pricingBadge: "Preise",
          pricingTitle: "Preise auf einen Blick",
          pricingDesc: "Vergleiche, wie jedes Tool die Funktionen bepreist, die für Einzelpersonen wichtig sind: Fokus-Sessions, Projekt-Erfassung, Berichte und Account-Pflicht.",
          pricingCards: [
            { label: "Beste Wahl mit wenig Reibung", title: "Flowtime", price: "Kostenloser Kern-Timer", desc: "Pomodoro und offene Flow Sessions sind kostenlos. Pro ergänzt Projekt-Erfassung und ausführlichere Historie ohne Account-Zwang." },
            { label: "Tools für Team-Abrechnung", title: "Toggl Track", price: "Free Plan, bezahlte Team-Tarife", desc: "Stark für Teamberichte und Kundenabrechnung, aber die meisten Kollaborationsfunktionen liegen in einem accountbasierten Workspace." },
            { label: "Spezialisierte Fokus-Apps", title: "Forest, Session, Focus To-Do, Be Focused", price: "Kostenlose oder günstige App-Upgrades", desc: "Die Preise variieren je nach Plattform. Rechne mit App-Käufen, Abos oder Upgrades für Sync, Berichte, erweiterte Aufgaben oder geräteübergreifende Funktionen." }
          ],
          pricingHeaders: ["Tool", "Typisches Preismodell", "Bestes Preis-Leistungs-Verhältnis, wenn"],
          pricingRows: [
            ["Flowtime", "Kostenlose Kern-Fokusmodi, Pro für Projekte und reichere Historie", "Du einen privaten persönlichen Timer mit minimalem Setup willst"],
            ["Toggl Track", "Kostenloser Einstieg, bezahlte Tarife für Teams und Reporting", "Du Kunden abrechnest oder gemeinsame Workspaces verwaltest"],
            ["Forest", "App-Kauf oder optionale Upgrades je nach Plattform", "Du Motivation durch Gamification suchst"],
            ["Session", "Abo oder bezahlte Upgrades für erweiterte Funktionen", "Du im Apple-Ökosystem arbeitest und detaillierte Sessions willst"],
            ["Focus To-Do", "Free Tier mit bezahlten Upgrades für mehr Aufgabenfunktionen", "Du Pomodoro mit Aufgabenverwaltung kombinieren willst"],
            ["Be Focused", "Kostenlose oder günstige Pro-App je nach Plattform", "Du einen einfachen Intervall-Timer brauchst"]
          ],
          articlesBadge: "Vergleichsartikel",
          articlesTitle: "Ausführliche Analysen",
          articlesLabel: "Ausführliche Vergleichsartikel",
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
        },
        "how-to-find-out-where-your-time-actually-goes": {
          title: "So findest du heraus, wo deine Zeit wirklich bleibt",
          desc: "Ein einfacher Prozess, um eine Woche lang Zeit zu erfassen, Muster zu erkennen und Vermutungen durch hilfreiche Daten zu ersetzen."
        },
        "local-first-apps-explained": {
          title: "Local-First-Apps einfach erklärt",
          desc: "Was Local-First-Apps von Cloud-Tools unterscheidet und warum lokale Speicherung für persönliche Produktivität wichtig ist."
        },
        "the-best-productivity-system-is-the-one-you-forget-about": {
          title: "Das beste Produktivitätssystem ist das, das du vergisst",
          desc: "Warum einfache Produktivitätssysteme oft besser funktionieren als aufwendige Workflows, die ständig gepflegt werden müssen."
        },
        "the-hidden-cost-of-context-switching": {
          title: "Die versteckten Kosten von Context Switching",
          desc: "Warum kleine Unterbrechungen fokussierte Arbeit erschweren und wie Zeiterfassung die tatsächlichen Wechselkosten sichtbar macht."
        },
        "time-tracking-for-neurodivergent-minds": {
          title: "Zeiterfassung für neurodivergente Menschen",
          desc: "Ein praktischer Leitfaden zu Time Blindness, Hyperfokus, Übergängen, Energie und flexiblen Routinen."
        },
        "how-long-should-a-focus-session-be": {
          title: "Wie lang sollte eine Fokus-Session sein?",
          desc: "Wie du die passende Länge für Fokus-Sessions findest: je nach Arbeit, Energie und natürlichem Aufmerksamkeitsrhythmus."
        },
        "why-i-removed-account-creation-from-my-time-tracker": {
          title: "Warum ich die Account-Erstellung aus meinem Time Tracker entfernt habe",
          desc: "Die Produktüberlegungen hinter Flowtime ohne Account-Erstellung und warum weniger Reibung beim Fokussieren hilft."
        },
        "time-tracking-for-freelancers-and-contractors": {
          title: "Zeiterfassung für Freelancer und Selbstständige",
          desc: "Wie Freelancer Projektzeit, abrechenbare Arbeit und Schätzungen erfassen können, ohne ein schweres Abrechnungssystem zu pflegen."
        },
        "time-tracking-for-developers-and-creators": {
          title: "Zeiterfassung für Entwickler und Kreative",
          desc: "Wie Entwickler und Kreative Deep Work, Projekte und Context Switching erfassen können, ohne den Arbeitsfluss zu stören."
        },
        "time-tracking-for-students-and-academics": {
          title: "Zeiterfassung für Studierende und Wissenschaftler",
          desc: "Wie Studierende und Akademiker Lernzeit, Forschung, Lesen, Schreiben und Wochenmuster einfach erfassen können."
        },
        "time-tracking-for-writers-and-researchers": {
          title: "Zeiterfassung für Autoren und Forscher",
          desc: "Wie Schreib- und Forschungsarbeit sichtbar wird: Lesen, Notizen, Entwurf, Überarbeitung und konzentrierte Sitzungen."
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
        },
        "how-to-find-out-where-your-time-actually-goes": {
          metaTitle: "Wo bleibt deine Zeit wirklich? - Flowtime",
          metaDesc: "Ein einfacher Prozess, um Zeit zu erfassen, Muster zu erkennen und bessere Entscheidungen mit echten Daten zu treffen."
        },
        "local-first-apps-explained": {
          metaTitle: "Local-First-Apps erklärt - Flowtime",
          metaDesc: "Was Local-First-Software bedeutet, welche Vorteile sie hat und warum lokale Daten für Produktivität wichtig sind."
        },
        "the-best-productivity-system-is-the-one-you-forget-about": {
          metaTitle: "Das beste Produktivitätssystem ist einfach - Flowtime",
          metaDesc: "Warum einfache Systeme oft besser funktionieren als komplexe Workflows, die selbst zur Arbeit werden."
        },
        "the-hidden-cost-of-context-switching": {
          metaTitle: "Die versteckten Kosten von Context Switching - Flowtime",
          metaDesc: "Warum kurze Unterbrechungen mehr kosten als sie scheinen und wie du Task Switching reduzieren kannst."
        },
        "time-tracking-for-neurodivergent-minds": {
          metaTitle: "Zeiterfassung für neurodivergente Menschen - Flowtime",
          metaDesc: "Ein nicht-klinischer Leitfaden zu Time Blindness, Hyperfokus, Übergängen und Energie beim Arbeiten."
        },
        "how-long-should-a-focus-session-be": {
          metaTitle: "Wie lang sollte eine Fokus-Session sein? - Flowtime",
          metaDesc: "Von Pomodoro bis Deep Work: So findest du eine Fokusdauer, die zu deiner Arbeit und Energie passt."
        },
        "why-i-removed-account-creation-from-my-time-tracker": {
          metaTitle: "Warum Flowtime keine Account-Erstellung braucht",
          metaDesc: "Warum Flowtime ohne Account-Erstellung funktioniert und wie Local-First-Tracking die Reibung reduziert."
        },
        "time-tracking-for-freelancers-and-contractors": {
          metaTitle: "Zeiterfassung für Freelancer - Flowtime",
          metaDesc: "Wie Freelancer und Selbstständige Projektzeit, abrechenbare Arbeit und Schätzungen ohne unnötige Komplexität erfassen."
        },
        "time-tracking-for-developers-and-creators": {
          metaTitle: "Zeiterfassung für Entwickler und Kreative - Flowtime",
          metaDesc: "Wie Entwickler und Kreative Deep Work, Projekte und Context Switching mit weniger Reibung erfassen."
        },
        "time-tracking-for-students-and-academics": {
          metaTitle: "Zeiterfassung für Studierende - Flowtime",
          metaDesc: "Wie Studierende und Akademiker Lernzeit, Forschung, Lesen und Schreiben mit einfachen Sessions sichtbar machen."
        },
        "time-tracking-for-writers-and-researchers": {
          metaTitle: "Zeiterfassung für Autoren und Forscher - Flowtime",
          metaDesc: "Wie Autoren und Forscher Schreiben, Lesen, Recherche und Überarbeitung ruhig und lokal erfassen können."
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
        },
        "time-tracking-for-freelancers-and-contractors": {
          title: "Zeiterfassung für Freelancer und Selbstständige",
          description: "Ein praktischer Leitfaden zur Zeiterfassung für freie und selbstständige Arbeit, ohne daraus eine schwere Abrechnungsplattform zu machen.",
          readingTime: "4 Min. Lesezeit",
          toc: ["Zusammenfassung", "Was du erfassen solltest", "Wo Flowtime passt", "FAQ"],
          summaryPoints: [
            "Freelancer brauchen oft persönliche Übersicht und genug Nachweise für Kunden.",
            "Nicht jede selbstständige Arbeit braucht eine komplette Abrechnungsplattform.",
            "Projektbasierte Zeiterfassung hilft bei Schätzungen, Preisen und Wochenrückblicken."
          ],
          bodyHtml: `
            <h2 id="what-to-track">Was du erfassen solltest</h2>
            <p>Beginne mit Kunden oder Projekten und ergänze nur dann Details, wenn sie wirklich helfen. Auch nicht abrechenbare Arbeit wie Angebote, E-Mail, Recherche und Admin kostet Zeit und sollte sichtbar sein.</p>
            <h2 id="where-flowtime-fits">Wo Flowtime passt</h2>
            <p>Flowtime ist sinnvoll, wenn du eine lokale, einfache Projekt-Historie und schnelle Fokus-Sessions willst. Wenn du Rechnungen, Kundenportale oder Teamfreigaben brauchst, ist ein Business-Tool wahrscheinlich besser.</p>
            <h2 id="faq">FAQ</h2>
            <details open><summary>Was sollten Freelancer tracken?</summary><p>Kundenarbeit, Admin, Angebote, Recherche, Meetings und wiederkehrende nicht abrechenbare Aufgaben.</p></details>
            <details><summary>Brauche ich eine Abrechnungsplattform?</summary><p>Nur wenn deine Zeiterfassung direkt in Rechnungen, Kundenberichte oder Teamprozesse fließen muss.</p></details>
          `
        },
        "time-tracking-for-developers-and-creators": {
          title: "Zeiterfassung für Entwickler und Kreative",
          description: "Ein praktischer Leitfaden, um Deep Work, kreative Sessions, Projekte und Context Switching zu erfassen, ohne die Arbeit selbst zu stören.",
          readingTime: "4 Min. Lesezeit",
          toc: ["Zusammenfassung", "Warum wenig Reibung wichtig ist", "Context Switching beobachten", "FAQ"],
          summaryPoints: [
            "Technische und kreative Arbeit braucht oft lange ungestörte Aufmerksamkeit.",
            "Breite Projektkategorien sind meist nachhaltiger als zu viele kleine Aufgaben.",
            "Erinnerungen können als Check-ins dienen, ohne den Flow hart zu unterbrechen."
          ],
          bodyHtml: `
            <h2 id="low-friction">Warum wenig Reibung wichtig ist</h2>
            <p>Programmieren, Design und kreative Arbeit brauchen oft Aufwärmzeit. Ein Timer sollte schnell starten und danach aus dem Weg gehen, statt vor jeder Session neue Entscheidungen zu verlangen.</p>
            <h2 id="context-switching">Context Switching beobachten</h2>
            <p>Kurze Unterbrechungen können den Wiedereinstieg erschweren. Zeiterfassung macht sichtbar, wann Arbeit in zu viele kleine Stücke zerfällt und welche Projekte mehr Schutz brauchen.</p>
            <h2 id="faq">FAQ</h2>
            <details open><summary>Sollten Entwickler jede Aufgabe tracken?</summary><p>Nicht unbedingt. Breite Projektkategorien sind oft leichter durchzuhalten und trotzdem nützlich.</p></details>
            <details><summary>Ist Pomodoro gut fürs Coding?</summary><p>Manchmal zum Starten. Für tiefere Problemlösung passen längere Flow-Sessions oft besser.</p></details>
          `
        },
        "time-tracking-for-students-and-academics": {
          title: "Zeiterfassung für Studierende und Wissenschaftler",
          description: "Ein praktischer Leitfaden für Lern-Sessions, Forschung, Lesen, Schreiben und akademische Projekte ohne überladenes System.",
          readingTime: "4 Min. Lesezeit",
          toc: ["Zusammenfassung", "Breite Kategorien nutzen", "Wochenmuster prüfen", "FAQ"],
          summaryPoints: [
            "Studium und Forschung bestehen aus vielen unsichtbaren Arbeitsphasen.",
            "Breite Kategorien reichen am Anfang meist aus.",
            "Ein Wochenrückblick zeigt, welche Fächer oder Projekte wirklich Zeit bekommen."
          ],
          bodyHtml: `
            <h2 id="categories">Breite Kategorien nutzen</h2>
            <p>Starte mit Lesen, Schreiben, Recherche, Wiederholung, Vorlesungen, Admin und Projektarbeit. Zu viele Kategorien machen das Tracking schwerer, bevor es nützlich wird.</p>
            <h2 id="weekly-review">Wochenmuster prüfen</h2>
            <p>Ein kurzer Wochenrückblick zeigt, welche Themen Aufmerksamkeit bekommen haben, welche liegen geblieben sind und wann Fokus am besten funktioniert.</p>
            <h2 id="faq">FAQ</h2>
            <details open><summary>Was sollten Studierende erfassen?</summary><p>Lernen, Lesen, Schreiben, Wiederholung, Vorlesungen, akademische Admin-Aufgaben und größere Projekte.</p></details>
            <details><summary>Ist Pomodoro gut zum Lernen?</summary><p>Ja, besonders zum Anfangen. Für Schreiben oder tiefe Recherche können längere Sessions besser sein.</p></details>
          `
        },
        "time-tracking-for-writers-and-researchers": {
          title: "Zeiterfassung für Autoren und Forscher",
          description: "Ein praktischer Leitfaden, um Schreiben, Lesen, Recherche, Überarbeitung und Deep Work ruhig und privat zu erfassen.",
          readingTime: "4 Min. Lesezeit",
          toc: ["Zusammenfassung", "Arbeitsphasen sichtbar machen", "Lange Aufmerksamkeit schützen", "FAQ"],
          summaryPoints: [
            "Schreiben und Forschung erzeugen nicht immer sofort sichtbaren Output.",
            "Zeiterfassung macht Lesen, Notizen, Entwürfe und Überarbeitung sichtbarer.",
            "Ein ruhiger lokaler Timer passt gut zu sensibler Schreib- und Forschungsarbeit."
          ],
          bodyHtml: `
            <h2 id="phases">Arbeitsphasen sichtbar machen</h2>
            <p>Tracke Lesen, Notizen, Gliederung, Entwurf, Überarbeitung, Quellenprüfung und Admin. Das hilft, Aufwand zu sehen, auch wenn am Ende wenig Text stehen bleibt.</p>
            <h2 id="protect-focus">Lange Aufmerksamkeit schützen</h2>
            <p>Schreiben und Forschung brauchen oft ruhige Kontinuität. Erinnerungen sollten eher Check-ins sein: Brauche ich eine Pause, bin ich noch auf der richtigen Spur, was ist der nächste Schritt?</p>
            <h2 id="faq">FAQ</h2>
            <details open><summary>Sollten Autoren Wörter oder Zeit tracken?</summary><p>Beides kann helfen. Zeit erfasst auch Denken, Recherche und Überarbeitung, wenn keine neuen Wörter entstehen.</p></details>
            <details><summary>Warum lokal tracken?</summary><p>Lokale Zeiterfassung hält persönliche Arbeitsmuster und Projekthistorie näher am eigenen Gerät.</p></details>
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
        next: "Suivant",
        searchArticles: "Rechercher des articles",
        sortArticles: "Trier les articles",
        filterByTag: "Filtrer par tag"
      },
      tags: {
        "privacy": "Confidentialité",
        "offline": "Hors-ligne",
        "time tracking": "Suivi du temps",
        "comparison": "Comparaison",
        "productivity": "Productivité",
        "product design": "Design de produit",
        "focus": "Focalisation",
        "projects": "Projets"
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
          comparisons: [
            { h3: "Flowtime vs Toggl Track", p: "Toggl Track est un outil détaillé orienté équipes et agences. Flowtime est un minuteur personnel léger, sans compte, centré sur le focus." },
            { h3: "Flowtime vs Forest", p: "Forest utilise la gamification et des arbres virtuels pour encourager la concentration. Flowtime propose un minuteur clair avec rapports, sans mécanique de jeu." },
            { h3: "Flowtime vs Session", p: "Session est un minuteur riche en fonctionnalités pour l'écosystème Apple. Flowtime est une alternative minimaliste et multiplateforme." },
            { h3: "Flowtime vs Focus To-Do", p: "Focus To-Do combine Pomodoro avec des listes de tâches GTD complexes. Flowtime se concentre sur les sessions de focus et les projets flexibles." },
            { h3: "Flowtime vs Be Focused", p: "Be Focused est un minuteur classique par intervalles. Flowtime ajoute des sessions Flow ouvertes, des rapports et des thèmes adaptables." }
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
          pricingBadge: "Tarifs",
          pricingTitle: "Les tarifs en un coup d'oeil",
          pricingDesc: "Comparez la facon dont chaque outil facture les fonctions importantes pour les utilisateurs individuels : sessions de concentration, projets, rapports et creation de compte.",
          pricingCards: [
            { label: "Meilleur choix sans friction", title: "Flowtime", price: "Minuteur principal gratuit", desc: "Pomodoro et les Flow Sessions ouvertes sont gratuits. Pro ajoute les projets et un historique plus riche sans imposer de compte." },
            { label: "Outils de facturation d'equipe", title: "Toggl Track", price: "Plan gratuit, offres payantes pour equipes", desc: "Tres utile pour les rapports d'equipe et la facturation client, mais la plupart des fonctions collaboratives passent par un espace de travail avec compte." },
            { label: "Applications de focus specialisees", title: "Forest, Session, Focus To-Do, Be Focused", price: "Gratuit ou upgrades peu couteux", desc: "Les tarifs varient selon la plateforme. Attendez-vous a des achats d'app, abonnements ou upgrades pour la synchronisation, les rapports, les taches avancees ou le multi-appareil." }
          ],
          pricingHeaders: ["Outil", "Modele de tarification typique", "Meilleure valeur quand"],
          pricingRows: [
            ["Flowtime", "Modes de concentration principaux gratuits, Pro pour les projets et un historique plus riche", "Vous voulez un minuteur personnel prive avec peu de configuration"],
            ["Toggl Track", "Plan de depart gratuit, offres payantes pour equipes et rapports", "Vous facturez des clients ou gerez des espaces partages"],
            ["Forest", "Achat d'application ou upgrades optionnels selon la plateforme", "Vous voulez de la motivation par gamification"],
            ["Session", "Abonnement ou upgrades payants pour les fonctions avancees", "Vous travaillez dans l'ecosysteme Apple et voulez des sessions detaillees"],
            ["Focus To-Do", "Offre gratuite avec upgrades payants pour plus de fonctions de taches", "Vous voulez combiner Pomodoro et gestion des taches"],
            ["Be Focused", "Application gratuite ou Pro peu couteuse selon la plateforme", "Vous avez besoin d'un simple minuteur par intervalles"]
          ],
          articlesBadge: "Articles comparatifs",
          articlesTitle: "Analyses détaillées",
          articlesLabel: "Articles comparatifs détaillés",
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
        },
        "how-to-find-out-where-your-time-actually-goes": {
          title: "Comment savoir où va vraiment votre temps",
          desc: "Un processus simple pour suivre votre temps pendant une semaine, repérer les tendances et remplacer les suppositions par des données utiles."
        },
        "local-first-apps-explained": {
          title: "Les applications local-first expliquées",
          desc: "Ce que signifie local-first, en quoi cela diffère du cloud-first et pourquoi les données locales comptent pour la productivité."
        },
        "the-best-productivity-system-is-the-one-you-forget-about": {
          title: "Le meilleur système de productivité est celui qu'on oublie",
          desc: "Pourquoi les systèmes simples fonctionnent souvent mieux que les workflows élaborés qui demandent une maintenance constante."
        },
        "the-hidden-cost-of-context-switching": {
          title: "Le coût caché du changement de contexte",
          desc: "Pourquoi les petites interruptions rendent le travail concentré plus difficile et comment le suivi du temps révèle leur vrai coût."
        },
        "time-tracking-for-neurodivergent-minds": {
          title: "Suivi du temps pour les esprits neurodivergents",
          desc: "Un guide pratique sur la cécité temporelle, l'hyperfocus, les transitions, l'énergie et les routines flexibles."
        },
        "how-long-should-a-focus-session-be": {
          title: "Combien de temps doit durer une session de focus ?",
          desc: "Comment choisir une durée de concentration selon le type de travail, votre énergie et votre attention naturelle."
        },
        "why-i-removed-account-creation-from-my-time-tracker": {
          title: "Pourquoi j'ai retiré la création de compte de mon time tracker",
          desc: "La réflexion produit derrière Flowtime sans création de compte, et pourquoi moins de friction aide à se concentrer."
        },
        "time-tracking-for-freelancers-and-contractors": {
          title: "Suivi du temps pour freelancers et indépendants",
          desc: "Comment suivre les projets, le temps facturable et les estimations sans transformer le suivi personnel en plateforme lourde."
        },
        "time-tracking-for-developers-and-creators": {
          title: "Suivi du temps pour développeurs et créateurs",
          desc: "Comment suivre le deep work, les projets et les changements de contexte sans interrompre le travail créatif ou technique."
        },
        "time-tracking-for-students-and-academics": {
          title: "Suivi du temps pour étudiants et universitaires",
          desc: "Comment suivre les sessions d'étude, la recherche, la lecture, l'écriture et les tendances hebdomadaires."
        },
        "time-tracking-for-writers-and-researchers": {
          title: "Suivi du temps pour écrivains et chercheurs",
          desc: "Comment rendre visible l'écriture et la recherche : lecture, notes, brouillons, révision et sessions de concentration."
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
        },
        "how-to-find-out-where-your-time-actually-goes": {
          metaTitle: "Comment savoir où va votre temps - Flowtime",
          metaDesc: "Un processus simple pour suivre votre temps, repérer les tendances et prendre de meilleures décisions."
        },
        "local-first-apps-explained": {
          metaTitle: "Applications local-first expliquées - Flowtime",
          metaDesc: "Ce que signifie local-first, ses avantages et pourquoi les données locales comptent pour la productivité."
        },
        "the-best-productivity-system-is-the-one-you-forget-about": {
          metaTitle: "Le meilleur système de productivité est simple - Flowtime",
          metaDesc: "Pourquoi les systèmes simples fonctionnent souvent mieux que les workflows complexes à maintenir."
        },
        "the-hidden-cost-of-context-switching": {
          metaTitle: "Le coût caché du changement de contexte - Flowtime",
          metaDesc: "Pourquoi les interruptions courtes coûtent plus qu'elles ne semblent et comment réduire le changement de tâche."
        },
        "time-tracking-for-neurodivergent-minds": {
          metaTitle: "Suivi du temps neurodivergent - Flowtime",
          metaDesc: "Un guide non clinique sur la cécité temporelle, l'hyperfocus, les transitions et l'énergie."
        },
        "how-long-should-a-focus-session-be": {
          metaTitle: "Combien de temps doit durer une session de focus ? - Flowtime",
          metaDesc: "De Pomodoro au deep work, trouvez une durée de concentration adaptée à votre travail et votre énergie."
        },
        "why-i-removed-account-creation-from-my-time-tracker": {
          metaTitle: "Pourquoi Flowtime fonctionne sans compte - Flowtime",
          metaDesc: "Pourquoi Flowtime évite la création de compte et comment le local-first réduit la friction."
        },
        "time-tracking-for-freelancers-and-contractors": {
          metaTitle: "Suivi du temps pour freelancers - Flowtime",
          metaDesc: "Comment les indépendants peuvent suivre projets, temps facturable et estimations sans complexité inutile."
        },
        "time-tracking-for-developers-and-creators": {
          metaTitle: "Suivi du temps pour développeurs et créateurs - Flowtime",
          metaDesc: "Comment suivre deep work, projets et changements de contexte avec moins de friction."
        },
        "time-tracking-for-students-and-academics": {
          metaTitle: "Suivi du temps pour étudiants - Flowtime",
          metaDesc: "Comment rendre visibles les sessions d'étude, la recherche, la lecture et l'écriture avec un minuteur simple."
        },
        "time-tracking-for-writers-and-researchers": {
          metaTitle: "Suivi du temps pour écrivains et chercheurs - Flowtime",
          metaDesc: "Comment suivre l'écriture, la lecture, la recherche et la révision dans un workflow calme et local."
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
                <tr>
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
        },
        "time-tracking-for-freelancers-and-contractors": {
          title: "Suivi du temps pour freelancers et indépendants",
          description: "Un guide pratique pour suivre le travail freelance ou contractuel sans transformer le suivi personnel en plateforme de facturation lourde.",
          readingTime: "4 min de lecture",
          toc: ["Résumé", "Ce qu'il faut suivre", "Où Flowtime convient", "FAQ"],
          summaryPoints: [
            "Les indépendants ont souvent besoin de visibilité personnelle et de traces suffisantes pour les clients.",
            "Tous les workflows freelance n'ont pas besoin d'une plateforme complète de facturation.",
            "Le suivi par projet aide les estimations, les prix et les bilans hebdomadaires."
          ],
          bodyHtml: `
            <h2 id="what-to-track">Ce qu'il faut suivre</h2>
            <p>Commencez par les clients ou les projets, puis ajoutez des détails seulement s'ils sont utiles. Le travail non facturable comme les devis, les e-mails, la recherche et l'administratif consomme aussi du temps.</p>
            <h2 id="where-flowtime-fits">Où Flowtime convient</h2>
            <p>Flowtime convient si vous voulez un historique local, simple et organisé par projet. Si vous avez besoin de factures, de portails clients ou de validations d'équipe, un outil business sera probablement plus adapté.</p>
            <h2 id="faq">FAQ</h2>
            <details open><summary>Que doivent suivre les freelancers ?</summary><p>Le travail client, l'administratif, les devis, la recherche, les réunions et les tâches non facturables récurrentes.</p></details>
            <details><summary>Ai-je besoin d'une plateforme de facturation ?</summary><p>Seulement si vos heures doivent devenir directement des factures, des rapports clients ou des processus d'équipe.</p></details>
          `
        },
        "time-tracking-for-developers-and-creators": {
          title: "Suivi du temps pour développeurs et créateurs",
          description: "Un guide pratique pour suivre le deep work, les sessions créatives, les projets et les changements de contexte sans interrompre le travail.",
          readingTime: "4 min de lecture",
          toc: ["Résumé", "Pourquoi réduire la friction", "Observer le changement de contexte", "FAQ"],
          summaryPoints: [
            "Le travail technique et créatif demande souvent une attention longue et sans interruption.",
            "Des catégories de projet larges sont souvent plus durables que trop de petites tâches.",
            "Les rappels peuvent servir de check-ins sans casser le flow."
          ],
          bodyHtml: `
            <h2 id="low-friction">Pourquoi réduire la friction</h2>
            <p>Coder, concevoir ou créer demande souvent un temps d'échauffement. Le minuteur doit démarrer vite puis disparaître, au lieu d'ajouter des décisions avant chaque session.</p>
            <h2 id="context-switching">Observer le changement de contexte</h2>
            <p>De petites interruptions peuvent rendre le retour au travail plus difficile. Le suivi du temps montre quand le travail se fragmente et quels projets ont besoin de plus de protection.</p>
            <h2 id="faq">FAQ</h2>
            <details open><summary>Les développeurs doivent-ils suivre chaque tâche ?</summary><p>Pas forcément. Des catégories larges par projet sont souvent plus faciles à maintenir et restent utiles.</p></details>
            <details><summary>Pomodoro est-il adapté au code ?</summary><p>Parfois pour commencer. Pour résoudre des problèmes profonds, des sessions Flow plus longues conviennent souvent mieux.</p></details>
          `
        },
        "time-tracking-for-students-and-academics": {
          title: "Suivi du temps pour étudiants et universitaires",
          description: "Un guide pratique pour suivre les sessions d'étude, la recherche, la lecture, l'écriture et les projets académiques sans système trop lourd.",
          readingTime: "4 min de lecture",
          toc: ["Résumé", "Utiliser de grandes catégories", "Revoir les tendances hebdomadaires", "FAQ"],
          summaryPoints: [
            "Les études et la recherche contiennent beaucoup de travail invisible.",
            "De grandes catégories suffisent souvent au début.",
            "Un bilan hebdomadaire montre quelles matières ou projets reçoivent vraiment du temps."
          ],
          bodyHtml: `
            <h2 id="categories">Utiliser de grandes catégories</h2>
            <p>Commencez par lecture, écriture, recherche, révision, cours, administratif et projet. Trop de catégories rendent le suivi plus lourd avant qu'il soit utile.</p>
            <h2 id="weekly-review">Revoir les tendances hebdomadaires</h2>
            <p>Un court bilan hebdomadaire montre quels sujets ont reçu de l'attention, lesquels ont été évités et à quels moments la concentration fonctionne le mieux.</p>
            <h2 id="faq">FAQ</h2>
            <details open><summary>Que doivent suivre les étudiants ?</summary><p>Les sessions d'étude, la lecture, l'écriture, la révision, les cours, l'administratif académique et les grands projets.</p></details>
            <details><summary>Pomodoro est-il utile pour étudier ?</summary><p>Oui, surtout pour commencer. Pour écrire ou faire de la recherche profonde, des sessions plus longues peuvent être meilleures.</p></details>
          `
        },
        "time-tracking-for-writers-and-researchers": {
          title: "Suivi du temps pour écrivains et chercheurs",
          description: "Un guide pratique pour suivre l'écriture, la lecture, la recherche, la révision et le deep work dans un workflow calme et privé.",
          readingTime: "4 min de lecture",
          toc: ["Résumé", "Rendre visibles les phases du travail", "Protéger l'attention longue", "FAQ"],
          summaryPoints: [
            "L'écriture et la recherche ne produisent pas toujours un résultat visible immédiatement.",
            "Le suivi du temps rend visibles la lecture, les notes, les brouillons et la révision.",
            "Un minuteur local et calme convient bien au travail sensible d'écriture et de recherche."
          ],
          bodyHtml: `
            <h2 id="phases">Rendre visibles les phases du travail</h2>
            <p>Suivez lecture, notes, plan, brouillon, révision, vérification des sources et administratif. Cela montre l'effort même quand peu de texte final reste.</p>
            <h2 id="protect-focus">Protéger l'attention longue</h2>
            <p>L'écriture et la recherche demandent souvent une continuité calme. Les rappels doivent plutôt agir comme des check-ins : ai-je besoin d'une pause, suis-je encore sur la bonne piste, quelle est la prochaine étape ?</p>
            <h2 id="faq">FAQ</h2>
            <details open><summary>Les écrivains doivent-ils suivre les mots ou le temps ?</summary><p>Les deux peuvent aider. Le temps capture aussi la réflexion, la recherche et la révision quand aucun mot nouveau n'apparaît.</p></details>
            <details><summary>Pourquoi suivre localement ?</summary><p>Le suivi local garde les habitudes de travail et l'historique des projets plus proches de votre propre appareil.</p></details>
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

  function setMeta(selector, attribute, value) {
    var element = document.querySelector(selector);
    if (element && value) {
      element.setAttribute(attribute, value);
    }
  }

  function localizeSocialMetadata(title, description) {
    if (!title && !description) {
      return;
    }
    if (title) {
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
    var scripts = document.querySelectorAll('script[type="application/ld+json"]');
    scripts.forEach(function (script) {
      try {
        var data = JSON.parse(script.textContent);
        var graph = data["@graph"] || [data];
        graph.forEach(function (node) {
          if ((node["@type"] === "Blog" || node["@type"] === "BlogPosting" || node["@type"] === "Article") && title) {
            node.name = node.name ? title : node.name;
            node.headline = node.headline ? title : node.headline;
          }
          if ((node["@type"] === "Blog" || node["@type"] === "BlogPosting" || node["@type"] === "Article") && description) {
            node.description = description;
          }
        });
        script.textContent = JSON.stringify(data);
      } catch (_error) {
        // Keep static structured data if parsing fails.
      }
    });
  }

  function buildLocalizedArticleFallback(loc, dict, pageKey, category) {
    var metaData = dict.blog_metadata[pageKey] || {};
    var isGerman = loc === "de";
    var isComparison = category === "comparison";
    var fallbackTitle = metaData.title || pageKey;
    var fallbackDesc = metaData.desc || "";
    var subject = fallbackTitle.replace(/^Flowtime vs\s+/i, "");

    if (isComparison) {
      return {
        title: fallbackTitle,
        description: fallbackDesc,
        readingTime: isGerman ? "4 Min. Lesezeit" : "4 min de lecture",
        toc: isGerman ? ["Zusammenfassung", "Schnellvergleich", "Worauf du achten solltest", "FAQ"] : ["Resume", "Comparaison rapide", "Points a verifier", "FAQ"],
        summaryPoints: isGerman ? [
          fallbackDesc,
          "Flowtime eignet sich besonders für ruhige, persönliche Fokus-Sessions ohne Account-Zwang.",
          subject + " kann besser passen, wenn du genau dessen spezielles Funktionsmodell brauchst."
        ] : [
          fallbackDesc,
          "Flowtime convient surtout aux sessions de concentration personnelles, calmes et sans compte.",
          subject + " peut mieux convenir si vous avez besoin de son modele de fonctionnalites specifique."
        ],
        bodyHtml: isGerman ? `
          <h2 id="comparison">Schnellvergleich</h2>
          <p>${fallbackDesc}</p>
          <p>Flowtime ist für Menschen gedacht, die einen leichten Timer, lokale Historie und klare Projektzuordnung möchten, ohne daraus ein Verwaltungssystem zu machen.</p>
          <h2 id="criteria">Worauf du achten solltest</h2>
          <p>Entscheidend ist, ob du persönlichen Fokus oder eine größere Produktivitätsplattform suchst. Wenn du Teamberichte, Konten, Synchronisierung oder sehr spezielle Workflows brauchst, kann ein umfangreicheres Tool sinnvoll sein. Wenn du schnell starten und deine Arbeitszeit privat verstehen möchtest, ist Flowtime die bewusst einfachere Wahl.</p>
          <h2 id="faq">FAQ</h2>
          <details open><summary>Ist Flowtime ein Ersatz für ${subject}?</summary><p>Für persönliches Fokus-Tracking oft ja. Für spezialisierte Workflows von ${subject} hängt es davon ab, welche Funktionen du wirklich brauchst.</p></details>
          <details><summary>Wann passt Flowtime besser?</summary><p>Wenn du eine lokale, accountfreie Zeiterfassung für Fokus-Sessions, Projekte und einfache Rückblicke suchst.</p></details>
        ` : `
          <h2 id="comparison">Comparaison rapide</h2>
          <p>${fallbackDesc}</p>
          <p>Flowtime est concu pour les personnes qui veulent un minuteur leger, un historique local et des projets clairs, sans transformer le suivi en plateforme d'administration.</p>
          <h2 id="criteria">Points a verifier</h2>
          <p>La question principale est de savoir si vous cherchez un outil de concentration personnel ou une plateforme plus large. Si vous avez besoin de rapports d'equipe, de comptes, de synchronisation ou de workflows tres specialises, un outil plus complet peut etre logique. Pour demarrer vite et comprendre votre temps en prive, Flowtime reste l'option volontairement plus simple.</p>
          <h2 id="faq">FAQ</h2>
          <details open><summary>Flowtime remplace-t-il ${subject} ?</summary><p>Pour le suivi personnel de la concentration, souvent oui. Pour les workflows specialises de ${subject}, cela depend des fonctions dont vous avez vraiment besoin.</p></details>
          <details><summary>Quand Flowtime convient-il mieux ?</summary><p>Quand vous voulez un suivi local, sans compte, pour les sessions de concentration, les projets et les bilans simples.</p></details>
        `
      };
    }

    return {
      title: fallbackTitle,
      description: fallbackDesc,
      readingTime: isGerman ? "4 Min. Lesezeit" : "4 min de lecture",
      toc: isGerman ? ["Zusammenfassung", "Warum es wichtig ist", "So nutzt du Flowtime", "FAQ"] : ["Resume", "Pourquoi c'est important", "Utiliser Flowtime", "FAQ"],
      summaryPoints: isGerman ? [
        fallbackDesc,
        "Ein einfacher Timer macht Arbeit sichtbar, ohne neue Verwaltungspflichten zu schaffen.",
        "Flowtime bleibt lokal, schnell und bewusst reduziert, damit der Fokus im Vordergrund bleibt."
      ] : [
        fallbackDesc,
        "Un minuteur simple rend le travail visible sans ajouter une nouvelle charge administrative.",
        "Flowtime reste local, rapide et volontairement minimal pour proteger la concentration."
      ],
      bodyHtml: isGerman ? `
        <h2 id="why">Warum es wichtig ist</h2>
        <p>${fallbackDesc}</p>
        <p>Viele Zeiterfassungs-Tools verlangen zuerst Konten, Teams, Dashboards oder komplizierte Einstellungen. Für persönliche Fokusarbeit ist das oft mehr Reibung als Nutzen. Ein guter Guide sollte deshalb bei der eigentlichen Frage bleiben: Wie hilft dir der Timer, deine Arbeit klarer zu sehen?</p>
        <h2 id="flowtime">So nutzt du Flowtime</h2>
        <p>Starte eine Session, wähle ein Projekt und halte die Erfassung leicht genug, dass du sie auch an normalen Arbeitstagen nutzt. Nach einigen Sessions erkennst du Muster: welche Aufgaben viel Zeit brauchen, wann Pausen nötig werden und welche Projekte wirklich Aufmerksamkeit bekommen.</p>
        <h2 id="faq">FAQ</h2>
        <details open><summary>Brauche ich dafür einen Account?</summary><p>Nein. Flowtime ist für lokale, accountfreie Zeiterfassung gebaut.</p></details>
        <details><summary>Ist das für Teams gedacht?</summary><p>Flowtime richtet sich vor allem an einzelne Menschen, die Fokus-Sessions und Projektzeit verstehen möchten.</p></details>
      ` : `
        <h2 id="why">Pourquoi c'est important</h2>
        <p>${fallbackDesc}</p>
        <p>Beaucoup d'outils de suivi commencent par des comptes, des equipes, des tableaux de bord ou des reglages complexes. Pour le travail de concentration personnel, cela ajoute souvent plus de friction que de valeur. Un bon guide doit rester centre sur la vraie question : comment le minuteur aide-t-il a mieux comprendre votre travail ?</p>
        <h2 id="flowtime">Utiliser Flowtime</h2>
        <p>Demarrez une session, choisissez un projet et gardez le suivi assez leger pour l'utiliser meme pendant les journees ordinaires. Apres quelques sessions, les tendances deviennent visibles : les taches qui prennent du temps, les moments ou une pause aide, et les projets qui recoivent vraiment votre attention.</p>
        <h2 id="faq">FAQ</h2>
        <details open><summary>Faut-il creer un compte ?</summary><p>Non. Flowtime est concu pour un suivi local et sans compte.</p></details>
        <details><summary>Est-ce pense pour les equipes ?</summary><p>Flowtime s'adresse surtout aux personnes qui veulent comprendre leurs sessions de concentration et leur temps par projet.</p></details>
      `
    };
  }

  function expandLocalizedComparisonArticle(loc, pageKey, aData) {
    var isGerman = loc === "de";
    var notes = {
      "flowtime-vs-toggl": {
        tool: "Toggl Track",
        deBest: "wenn Abrechnung, Teams, Kundenberichte und Freigabeprozesse wichtiger sind als ein ruhiger persönlicher Timer.",
        frBest: "si la facturation, les équipes, les rapports client et les validations comptent plus qu'un minuteur personnel discret."
      },
      "flowtime-vs-forest": {
        tool: "Forest",
        deBest: "wenn du Motivation durch Spielmechanik, virtuelle Bäume und sichtbare Belohnungen brauchst.",
        frBest: "si vous avez besoin de motivation par le jeu, d'arbres virtuels et de récompenses visibles."
      },
      "flowtime-vs-session": {
        tool: "Session",
        deBest: "wenn du tief im Apple-Ökosystem arbeitest und Kalender, Shortcuts oder Status-Automationen aktiv nutzen möchtest.",
        frBest: "si vous travaillez entièrement dans l'écosystème Apple et voulez utiliser calendrier, raccourcis ou automatisations de statut."
      },
      "flowtime-vs-focus-todo": {
        tool: "Focus To-Do",
        deBest: "wenn du Aufgabenlisten, Wiederholungen, Unteraufgaben und Pomodoro-Zyklen in derselben App verwalten möchtest.",
        frBest: "si vous voulez gérer listes de tâches, répétitions, sous-tâches et cycles Pomodoro dans la même application."
      },
      "flowtime-vs-be-focused": {
        tool: "Be Focused",
        deBest: "wenn du einen sehr einfachen Intervall-Timer für Apple-Geräte suchst und keine offenen Flow Sessions brauchst.",
        frBest: "si vous cherchez un minuteur par intervalles très simple sur appareils Apple et n'avez pas besoin de sessions Flow ouvertes."
      },
      "best-app-for-tracking-time-on-tasks-and-projects": {
        tool: "andere Projekt-Zeiterfassungen",
        deBest: "wenn dein Hauptproblem Team-Reporting, Rechnungsstellung oder ein vollständiges Projektmanagement-System ist.",
        frBest: "si votre problème principal est le reporting d'équipe, la facturation ou un système complet de gestion de projet."
      }
    };
    var note = notes[pageKey];
    if (!note || !aData.bodyHtml || aData._expandedComparison) return aData;

    var title = aData.title || "Flowtime";
    var expandedToc = isGerman
      ? ["Zusammenfassung", "Schnellvergleich", "Alltagstauglichkeit", "Datenschutz und Setup", "Preise und langfristiger Nutzen", "Entscheidungshilfe", "Praktischer Entscheidungstest", "Worauf du nach der Auswahl achten solltest", "FAQ"]
      : ["Résumé", "Comparaison rapide", "Usage quotidien", "Confidentialité et configuration", "Prix et valeur durable", "Aide à la décision", "Test de décision pratique", "À vérifier après le choix", "FAQ"];

    var extraHtml = isGerman ? `
            <h2 id="daily-use">Alltagstauglichkeit</h2>
            <p>Der wichtigste Unterschied zeigt sich nicht in einer Feature-Liste, sondern im Moment, in dem du wirklich arbeiten willst. Flowtime ist dafür gebaut, dass du eine Session schnell startest, einem Projekt zuordnest und danach wieder aus dem Weg räumst. Das ist besonders hilfreich, wenn du deinen Fokus nicht erst durch Setup, Kontoabfragen oder ein voll beladenes Dashboard verlieren möchtest.</p>
            <p>${note.tool} kann trotzdem sinnvoll sein, ${note.deBest} Für viele Einzelpersonen ist genau diese zusätzliche Struktur aber der Punkt, an dem Zeiterfassung zu schwer wird. Wenn du nur wissen möchtest, wohin deine Arbeitszeit geht, ist ein kleineres Werkzeug oft zuverlässiger als eine größere Plattform.</p>
            <p>Im Alltag zählt auch, wie oft du das Tool öffnest. Eine App kann viele Funktionen haben und trotzdem weniger brauchbare Daten erzeugen, wenn du sie wegen Reibung selten nutzt. Flowtime optimiert deshalb den Moment vor der Arbeit: Timer öffnen, Projekt wählen, starten. Die Auswertung kommt später, wenn sie hilfreich ist.</p>
            <h2 id="privacy-setup">Datenschutz und Setup</h2>
            <p>Flowtime priorisiert einen lokalen, accountfreien Start. Das bedeutet: Du kannst den Timer verwenden, ohne zuerst ein Konto, einen Workspace oder eine Synchronisierung einzurichten. Für persönliche Produktivität ist das wichtig, weil Zeitdaten sehr viel über Arbeitsrhythmus, Pausen, Energie und Gewohnheiten verraten.</p>
            <p>Bei umfangreicheren Tools ist Cloud-Synchronisierung häufig Teil des Kernmodells. Das ist praktisch, wenn mehrere Geräte, Teams oder Integrationen beteiligt sind. Es ist aber weniger ideal, wenn du bewusst eine private Historie führen möchtest, die nicht wie ein Team-Dashboard behandelt wird.</p>
            <p>Wenn du ein Vergleichstool auswählst, prüfe deshalb nicht nur, welche Features existieren, sondern welche Daten du dafür preisgibst und welche Einrichtung nötig ist. Ein Konto, eine Cloud-Historie und gemeinsame Workspaces sind sinnvoll, wenn du sie wirklich brauchst. Für rein persönliche Fokusarbeit können sie unnötige Komplexität hinzufügen.</p>
            <h2 id="pricing-value">Preise und langfristiger Nutzen</h2>
            <p>Beim Preisvergleich geht es nicht nur um den niedrigsten Einstiegspreis. Entscheidend ist, welche Funktionen du im Alltag tatsächlich nutzt. Flowtime hält die wichtigsten Fokusmodi leicht zugänglich und ergänzt Pro-Funktionen dort, wo sie für wiederkehrende Nutzung Sinn ergeben: Projekte, Verlauf und bessere Auswertung.</p>
            <p>Ein günstiges oder kostenloses Tool kann trotzdem teuer wirken, wenn es dich regelmäßig aus deinem Arbeitsfluss holt. Umgekehrt lohnt sich ein bezahltes Tool nur, wenn seine zusätzlichen Funktionen wirklich ein Problem lösen. Die beste Wahl ist deshalb die App, die du auch nach zwei Wochen noch öffnest, ohne darüber nachzudenken.</p>
            <p>Achte außerdem darauf, ob ein Upgrade Funktionen freischaltet, die du tatsächlich täglich nutzt. Für manche Workflows sind Integrationen, Teamberichte und Synchronisierung zentral. Für andere reicht ein ruhiger Timer mit klarer Historie. Der beste Preis ist nicht der mit der längsten Feature-Liste, sondern der mit dem geringsten Widerstand für deinen echten Arbeitsalltag.</p>
            <h2 id="decision">Entscheidungshilfe</h2>
            <p>Wähle Flowtime, wenn du Fokus-Sessions, Pomodoro, offene Flow Sessions, Projektzuordnung und eine ruhige Oberfläche möchtest. Wähle ${note.tool}, wenn dessen spezieller Ansatz genau zu deinem Workflow passt und du die zusätzliche Struktur aktiv nutzen wirst.</p>
            <p>Als Faustregel gilt: Je persönlicher deine Zeiterfassung ist, desto wichtiger werden Einfachheit, Datenschutz und schnelle Bedienung. Je stärker deine Zeiterfassung mit Teams, Kunden oder Aufgabenverwaltung verbunden ist, desto eher kann ein größeres System sinnvoll sein.</p>
            <p>Wenn du unsicher bist, beginne nicht mit der mächtigsten Option, sondern mit der kleinsten Lösung, die dein Problem wirklich löst. Du kannst später immer noch zu einem größeren System wechseln, wenn Rechnungen, Teamabstimmung oder komplexe Aufgabenverwaltung wichtiger werden.</p>
            <h2 id="decision-test">Praktischer Entscheidungstest</h2>
            <p>Teste beide Richtungen eine Woche lang mit derselben Arbeit. Starte jede relevante Session, ordne sie einem Projekt zu und prüfe am Ende des Tages, ob die App dir geholfen oder dich ausgebremst hat. Notiere nicht nur, welche Reports verfügbar sind, sondern ob du die Erfassung wirklich konsequent genutzt hast.</p>
            <p>Wenn deine Daten am Ende der Woche vor allem für dich selbst nützlich sind, spricht viel für Flowtime. Wenn andere Personen die Daten brauchen, etwa Kundinnen, Kunden, Teammitglieder oder Buchhaltung, ist ein stärker strukturiertes Tool wahrscheinlich sinnvoller. Die richtige Entscheidung hängt daran, wer die Zeitdaten später lesen und verwenden muss.</p>
            <h2 id="after-choosing">Worauf du nach der Auswahl achten solltest</h2>
            <p>Nach der Entscheidung lohnt sich ein kurzer Realitätscheck. Erzeugt das Tool bessere Entscheidungen, oder nur mehr Pflegeaufwand? Verstehst du schneller, welche Projekte Zeit verbrauchen? Erinnern dich Timer und Verlauf an Pausen, Fokuswechsel und realistische Planung?</p>
            <p>Ein gutes Zeiterfassungs-Tool verschwindet während der Arbeit und ist danach klar genug, um Muster sichtbar zu machen. Wenn du ständig Einstellungen pflegst, Kategorien korrigierst oder Berichte baust, obwohl du nur persönlichen Fokus verstehen willst, ist das ein Zeichen, dass das Tool zu groß für den Job ist.</p>
          ` : `
            <h2 id="daily-use">Usage quotidien</h2>
            <p>La vraie différence n'apparaît pas seulement dans une liste de fonctionnalités, mais au moment où vous voulez commencer à travailler. Flowtime est conçu pour lancer une session rapidement, l'associer à un projet puis disparaître de votre attention. C'est utile si vous ne voulez pas perdre votre concentration dans la création de compte, la configuration ou un tableau de bord trop chargé.</p>
            <p>${note.tool} peut rester un bon choix ${note.frBest} Pour beaucoup d'utilisateurs individuels, cette structure supplémentaire est justement ce qui rend le suivi du temps trop lourd. Si votre objectif est simplement de comprendre où part votre temps de travail, un outil plus petit peut être plus fiable qu'une plateforme plus large.</p>
            <p>Au quotidien, la fréquence d'utilisation compte autant que la richesse fonctionnelle. Une application peut offrir beaucoup de possibilités et produire peu de données utiles si vous l'évitez parce qu'elle demande trop d'effort. Flowtime optimise donc le moment avant le travail : ouvrir le minuteur, choisir un projet, démarrer.</p>
            <h2 id="privacy-setup">Confidentialité et configuration</h2>
            <p>Flowtime privilégie un démarrage local et sans compte. Vous pouvez utiliser le minuteur sans créer d'espace de travail, sans synchronisation obligatoire et sans transformer votre historique personnel en tableau de bord d'équipe. C'est important, car les données de temps révèlent beaucoup sur vos rythmes, vos pauses, votre énergie et vos habitudes.</p>
            <p>Les outils plus complets intègrent souvent la synchronisation cloud dans leur modèle principal. C'est pratique pour plusieurs appareils, des équipes ou des intégrations, mais moins adapté si vous voulez garder un historique privé et personnel.</p>
            <p>Lorsque vous comparez deux outils, regardez donc aussi ce que chaque fonctionnalité exige : compte, cloud, espace partagé, configuration ou intégrations. Ces éléments sont utiles lorsqu'ils servent un besoin réel. Pour un suivi personnel de la concentration, ils peuvent ajouter une complexité qui n'améliore pas votre travail.</p>
            <h2 id="pricing-value">Prix et valeur durable</h2>
            <p>Comparer les prix ne revient pas seulement à chercher l'option la moins chère. La vraie question est de savoir quelles fonctions vous utilisez réellement au quotidien. Flowtime garde les modes de concentration essentiels faciles d'accès et réserve les fonctions Pro aux besoins récurrents : projets, historique et analyses plus utiles.</p>
            <p>Un outil gratuit peut sembler coûteux s'il interrompt souvent votre élan. À l'inverse, un outil payant peut valoir son prix si ses fonctions supplémentaires résolvent un problème clair. Le meilleur choix est donc l'application que vous continuez à ouvrir après deux semaines, sans résistance.</p>
            <p>Vérifiez aussi si une offre payante débloque des fonctions que vous utiliserez vraiment. Certaines personnes ont besoin de rapports d'équipe, de facturation ou d'intégrations. D'autres ont surtout besoin d'un minuteur calme et d'un historique lisible. Le meilleur rapport qualité-prix dépend de votre usage réel, pas de la longueur de la fiche produit.</p>
            <h2 id="decision">Aide à la décision</h2>
            <p>Choisissez Flowtime si vous voulez des sessions de concentration, Pomodoro, des sessions Flow ouvertes, des projets et une interface calme. Choisissez ${note.tool} si son approche spécifique correspond exactement à votre workflow et si vous utiliserez vraiment sa structure supplémentaire.</p>
            <p>Règle simple : plus votre suivi du temps est personnel, plus la simplicité, la confidentialité et la rapidité comptent. Plus il dépend d'équipes, de clients ou de gestion de tâches, plus un système large peut avoir du sens.</p>
            <p>Si vous hésitez, commencez par la plus petite solution qui répond au problème. Vous pourrez toujours passer à un système plus lourd si la facturation, la coordination d'équipe ou la gestion de tâches deviennent centrales.</p>
            <h2 id="decision-test">Test de décision pratique</h2>
            <p>Essayez les deux approches pendant une semaine avec le même type de travail. Lancez chaque session importante, associez-la à un projet et observez le soir si l'application vous a aidé ou ralenti. Ne regardez pas seulement les rapports disponibles : demandez-vous si vous avez réellement suivi votre temps de manière régulière.</p>
            <p>Si les données servent surtout à votre propre compréhension, Flowtime est probablement plus adapté. Si elles doivent être partagées avec des clients, une équipe, un responsable ou la comptabilité, un outil plus structuré peut être le meilleur choix. La vraie question est de savoir qui doit utiliser ces données après la session.</p>
            <h2 id="after-choosing">À vérifier après le choix</h2>
            <p>Après quelques jours, faites un contrôle simple : l'outil améliore-t-il vos décisions, ou ajoute-t-il surtout de la maintenance ? Voyez-vous plus clairement quels projets prennent du temps ? Les minuteurs et l'historique vous aident-ils à prévoir, à faire des pauses et à réduire les changements de contexte ?</p>
            <p>Un bon outil de suivi disparaît pendant le travail puis rend les tendances lisibles après coup. Si vous passez trop de temps à corriger des catégories, configurer des vues ou produire des rapports alors que votre besoin est personnel, l'outil est probablement trop grand pour le travail demandé.</p>
          `;

    return Object.assign({}, aData, {
      _expandedComparison: true,
      title: title,
      readingTime: isGerman ? "5 Min. Lesezeit" : "5 min de lecture",
      toc: expandedToc,
      bodyHtml: aData.bodyHtml.replace(/\s*<h2 id="faq">/, extraHtml + "\n            <h2 id=\"faq\">")
    });
  }

  window.flowtimeTranslateBlog = function (loc) {
    var dict = blogTranslations[loc];
    if (!dict) return;

    var pageKey = getPageKey();
    if (pageKey && dict.pages[pageKey]) {
      var pData = dict.pages[pageKey];
      if (pData.metaTitle) document.title = pData.metaTitle;
      localizeSocialMetadata(pData.metaTitle, pData.metaDesc);
      localizeJsonLd(pData.metaTitle, pData.metaDesc);
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
        var searchLabel = document.querySelector('label .sr-only + [data-blog-search]');
        if (searchLabel && dict.labels.searchArticles) searchLabel.previousElementSibling.textContent = dict.labels.searchArticles;

        var sortSelect = document.querySelector("[data-blog-sort]");
        if (sortSelect && lData.sortNewest) {
          sortSelect.options[0].text = lData.sortNewest;
          sortSelect.options[1].text = lData.sortOldest;
        }
        var sortLabel = document.querySelector('label .sr-only + [data-blog-sort]');
        if (sortLabel && dict.labels.sortArticles) sortLabel.previousElementSibling.textContent = dict.labels.sortArticles;

        var tagFilters = document.querySelector("[data-blog-tags]");
        if (tagFilters && dict.labels.filterByTag) tagFilters.setAttribute("aria-label", dict.labels.filterByTag);

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

          var comparisonCards = document.querySelectorAll(".showcase-column:nth-child(2) .showcase-card");
          if (comparisonCards.length >= 5 && lData.comparisons) {
            for (var compIndex = 0; compIndex < 5; compIndex++) {
              var compH3 = comparisonCards[compIndex].querySelector("h3");
              var compP = comparisonCards[compIndex].querySelector("p");
              if (compH3 && lData.comparisons[compIndex]) compH3.innerHTML = lData.comparisons[compIndex].h3 + ' <span class="arrow">&rarr;</span>';
              if (compP && lData.comparisons[compIndex]) compP.textContent = lData.comparisons[compIndex].p;
            }
          }

          var matrixBadges = document.querySelectorAll(".matrix-badge");
          if (matrixBadges[0] && lData.matrixBadge) matrixBadges[0].textContent = lData.matrixBadge;

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

          var pricingBadge = document.querySelector(".pricing-badge");
          if (pricingBadge && lData.pricingBadge) pricingBadge.textContent = lData.pricingBadge;

          var pricingTitle = document.querySelector(".pricing-comparison-section h2");
          if (pricingTitle && lData.pricingTitle) pricingTitle.textContent = lData.pricingTitle;

          var pricingDesc = document.querySelector(".pricing-desc");
          if (pricingDesc && lData.pricingDesc) pricingDesc.textContent = lData.pricingDesc;

          var pricingCards = document.querySelectorAll(".pricing-card");
          if (pricingCards.length >= 3 && lData.pricingCards) {
            for (var pc = 0; pc < 3; pc++) {
              var pricingLabel = pricingCards[pc].querySelector(".pricing-label");
              var pricingH3 = pricingCards[pc].querySelector("h3");
              var pricingPrice = pricingCards[pc].querySelector(".pricing-price");
              var pricingCopy = pricingCards[pc].querySelector("p:last-child");
              if (pricingLabel && lData.pricingCards[pc]) pricingLabel.textContent = lData.pricingCards[pc].label;
              if (pricingH3 && lData.pricingCards[pc]) pricingH3.textContent = lData.pricingCards[pc].title;
              if (pricingPrice && lData.pricingCards[pc]) pricingPrice.textContent = lData.pricingCards[pc].price;
              if (pricingCopy && lData.pricingCards[pc]) pricingCopy.textContent = lData.pricingCards[pc].desc;
            }
          }

          var pricingThs = document.querySelectorAll(".pricing-table th");
          if (pricingThs.length >= 3 && lData.pricingHeaders) {
            for (var ph = 0; ph < 3; ph++) {
              pricingThs[ph].textContent = lData.pricingHeaders[ph];
            }
          }

          var pricingRows = document.querySelectorAll(".pricing-table tbody tr");
          if (pricingRows.length >= 6 && lData.pricingRows) {
            for (var pr = 0; pr < 6; pr++) {
              var pricingTds = pricingRows[pr].querySelectorAll("td");
              if (pricingTds.length >= 3 && lData.pricingRows[pr]) {
                pricingTds[0].innerHTML = "<strong>" + lData.pricingRows[pr][0] + "</strong>";
                pricingTds[1].textContent = lData.pricingRows[pr][1];
                pricingTds[2].textContent = lData.pricingRows[pr][2];
              }
            }
          }

          var articlesSection = document.querySelector(".blog-listing");
          if (articlesSection && lData.articlesLabel) articlesSection.setAttribute("aria-label", lData.articlesLabel);
          if (matrixBadges[1] && lData.articlesBadge) matrixBadges[1].textContent = lData.articlesBadge;

          var articlesTitle = document.querySelector(".blog-listing h2");
          if (articlesTitle && lData.articlesTitle) articlesTitle.textContent = lData.articlesTitle;
        }
      }

      if (window.flowtimeRenderPosts) {
        window.flowtimeRenderPosts();
      }
    }

    var isArticle = !!document.querySelector(".blog-article");
    if (isArticle && pageKey && (dict.articles[pageKey] || dict.blog_metadata[pageKey])) {
      var metaData = dict.blog_metadata[pageKey] || {};
      var aData = dict.articles[pageKey] || buildLocalizedArticleFallback(loc, dict, pageKey, category);
      if (!aData.bodyHtml && dict.blog_metadata[pageKey]) {
        aData = Object.assign(buildLocalizedArticleFallback(loc, dict, pageKey, category), aData);
      }
      if (category === "comparison") {
        aData = expandLocalizedComparisonArticle(loc, pageKey, aData);
      }

      localizeSocialMetadata(metaData.metaTitle || aData.title, metaData.metaDesc || aData.description);
      localizeJsonLd(aData.title || metaData.title, aData.description || metaData.desc);

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
