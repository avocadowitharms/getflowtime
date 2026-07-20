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
          showcaseDesc2: "Focusedische Fokus-Timer im Vergleich zu teamorientierten Zeiterfassungsplattformen. Finde das passende Tool für deinen Workflow.",
          solutions: [
            { h3: "Für Freelancer & Selbstständige", p: "Erfasse abrechenbare Stunden auf Projekten und Aufgaben, ohne dass Rechnungsformulare, Account-Syncs oder Manager-Dashboards im Weg stehen." },
            { h3: "Für Entwickler & Kreative", p: "Start ohne Reibung. Tippe einmal zum Wechseln von Projekten, passe Fokusmodi an und halte deine Aufmerksamkeit voll auf der Arbeit." },
            { h3: "Für Studenten & Wissenschaftler", p: "Strukturiere Lerneinheiten mit klassischen Pomodoro-Intervallen, setze Zielzeiten für Flow Sessions und nutze wöchentliche Verlaufscharts." },
            { h3: "Für Autoren & Forscher", p: "Begib dich in eine ablenkungsfreie Fokuszone. Aktiviere das Mono-Design, halte deine Daten lokal und arbeite in klarer Einfachheit." }
          ],
          comparisons: [
            { h3: "Flowtime vs Toggl Track", p: "Toggl Track ist ein detaillierter, teamorientierter Logger für Agenturen. Flowtime ist ein leichter, accountfreier Fokus-Timer für Einzelpersonen." },
            { h3: "Flowtime vs Forest", p: "Forest nutzt Gamification und virtuelle Bäume, um Fokus zu fördern. Flowtime bietet einen klaren Utility-Timer mit strukturierten Berichten ohne Spielmechanik." },
            { h3: "Flowtime vs Session", p: "Session ist ein funktionsreiches Timer-Tool für das Apple-Ökosystem. Flowtime ist eine plattformübergreifende, focusedische Alternative." },
            { h3: "Flowtime vs Focus To-Do", p: "Focus To-Do kombiniert Pomodoro mit komplexen GTD-Aufgabenlisten. Flowtime konzentriert sich auf reine Fokus-Sessions und flexible Projektzuordnung." },
            { h3: "Flowtime vs Be Focused", p: "Be Focused ist ein klassischer Intervall-Timer. Flowtime ergänzt offene Flow Sessions, Berichte und anpassbare Oberflächenthemen." }
          ],
          matrixBadge: "Feature-Matrix",
          matrixTitle: "Direkter Vergleich",
          matrixDesc: "Sieh, wie Flowtime im Vergleich zu Toggl Track, Forest, Session, Focus To-Do und Be Focused bei den wichtigsten Kriterien abschneidet.",
          matrixHeaders: ["Feature", "Flowtime", "Toggl Track", "Forest", "Session", "Focus To-Do", "Be Focused"],
          matrixRows: [
            ["Ideal für", "Pers?nlichen Fokus", "Team-Abrechnungen", "Gamifizierte Arbeit", "Detaillierte Notizen", "GTD-Aufgabenlisten", "Einfache Intervalle"],
            ["Start ohne Account", "Ja (Sofortstart)", "Nein (Pflicht)", "Optional", "Nein (Pflicht)", "Nein (Pflicht)", "Ja"],
            ["Lokaler Datenschutz", "Ja (Lokal)", "Nein (Cloud)", "Nein (Sync)", "Nein (Cloud)", "Nein (Cloud)", "Ja"],
            ["Pomodoro-Modus", "Ja (Free)", "Optional", "Ja", "Ja", "Ja", "Ja"],
            ["Offene Flow Sessions", "Ja (Free)", "Nein", "Nein", "Nein", "Nein", "Nein"],
            ["Projekt-Erfassung", "Ja (Pro)", "Ja", "Ja", "Ja", "Ja", "Ja"],
            ["Oberfläche", "Reduziert", "Komplexes Dashboard", "Gamifiziert, verspielt", "Modernes iOS-Design", "Dichte Listen", "Einfacher Timer"]
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
            ["Flowtime", "Kostenlose Kern-Fokusmodi, Pro für Projekte und reichere Historie", "Du einen privaten persönlichen Timer mit wenig Setup willst"],
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
          title: "Ideen für focusedische Zeiterfassung.",
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
          desc: "Ein Vergleich von Flowtime und Forest: Gamifizierter Fokus vs. focusedischer, ablenkungsfreier Utility-Timer."
        },
        "forest-alternatives-if-gamification-isnt-what-youre-looking-for": {
          title: "Forest-Alternativen: Wenn Gamification nicht das Richtige ist",
          desc: "Auf der Suche nach Forest-Alternativen ohne Gamification? Vergleiche Fokus-Apps wie Flowtime, Focus To-Do, Session und Freedom für ADHS und Produktivität."
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
          metaDesc: "Vergleich zwischen Flowtime und Forest: Gamifizierung und virtuelle Bäume vs. focusedische Utility-Timer."
        },
        "forest-alternatives-if-gamification-isnt-what-youre-looking-for": {
          metaTitle: "Forest-Alternativen: Wenn Gamification nicht das Richtige ist - Flowtime",
          metaDesc: "Finde die besten Forest-Alternativen ohne spielerische Elemente. Vergleiche Flowtime, Focus To-Do, Session und Freedom."
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
          metaDesc: "Wie Autoren und Forscher Schreiben, Lesen, Recherche und Überarbeitung klar und lokal erfassen können."
        }
      },
      articles: {
        "forest-alternatives-if-gamification-isnt-what-youre-looking-for": {
          title: "Forest-Alternativen: Wenn Gamification nicht das Richtige ist",
          description: "Auf der Suche nach Forest-Alternativen ohne Gamification? Vergleiche Fokus-Apps wie Flowtime, Focus To-Do, Session und Freedom für ADHS und Produktivität.",
          readingTime: "4 Min. Lesezeit",
          toc: ["Zusammenfassung", "ADHS ist nicht immer ein Mangel an Fokus", "Die meiste Fokus-Apps wollen, dass du weiterarbeitest", "Das Starten ist genauso wichtig", "Warum ich Flowtime nicht nur für die Arbeit nutze", "Wo ordnet sich Forest ein?", "Weitere bedenkenswerte Forest-Alternativen", "Welche App solltest du wählen?", "FAQ"],
          summaryPoints: [
            "Forest ist eine beliebte Fokus-App, aber Gamification und Belohnungen passen nicht für jeden.",
            "Flowtime setzt auf Achtsamkeit, sanfte Check-ins und Entlastung des Autopiloten statt auf Punkte und Spielmechaniken.",
            "Weitere Alternativen wie Focus To-Do, Session und Freedom bieten spezialisierte Ansätze für Aufgaben, Apple-Workflow oder Ablenkungsblocker."
          ],
          bodyHtml: `
            <h2 id="summary">Zusammenfassung</h2>
            <p>Forest ist eine der beliebtesten Fokus-Apps, aber Gamification und virtuelle Belohnungen sind nicht für jeden das Richtige. Wenn du nach Forest-Alternativen suchst, die Achtsamkeit, geringe Reibung oder das Blockieren von Ablenkungen ohne Spielmechaniken in den Vordergrund stellen, bieten Tools wie Flowtime, Focus To-Do, Session und Freedom unterschiedliche Ansätze.</p>
            <p>Wer nach einer Fokus-App sucht, stößt schnell auf <strong>Forest</strong>. Es ist eine der beliebtesten Produktivitäts-Apps überhaupt. Die Idee ist einfach: Starte einen Timer, verlasse die App nicht und lass während der Arbeit einen virtuellen Baum wachsen.</p>
            <p>Offensichtlich funktioniert das für sehr viele Menschen. Aber das ist nicht der einzige Weg, Fokus anzugehen.</p>
            <p>Ich habe Forest tatsächlich nie selbst ausprobiert. Nicht, weil mir die Idee missfiel, sondern weil die Erstellung eines Accounts bereits mehr Reibung bedeutete, als ich wollte. Ich suchte nach etwas, das ich öffnen, sofort nutzen und wieder vergessen konnte, bis ich es das nächste Mal brauchte.</p>
            <p>Als ich diese App nicht finden konnte, begann ich mit dem Bau von Flowtime. Nicht um mit Forest zu konkurrieren, sondern um ein anderes Problem zu lösen.</p>
            <h2 id="adhd-isnt-always-a-lack-of-focus">ADHS ist nicht immer ein Mangel an Fokus</h2>
            <p>Wenn Menschen an ADHS denken, stellen sie sich oft jemanden vor, der sich nicht konzentrieren kann. Das kommt sicherlich vor. Aber es gibt eine andere Seite, über die viel weniger gesprochen wird: <strong>Hyperfokus</strong>.</p>
            <p>Ich fange an, an einem Feature zu arbeiten, verliere jedes Zeitgefühl, überspringe das Mittagessen, ignoriere mein Handy und stelle plötzlich fest, dass es Abend ist.</p>
            <p>An anderen Tagen setze ich mich hin, um einen einzelnen Bug zu beheben, und erstelle am Ende ein neues Icon, weil eine kleine Verbesserung zur nächsten führte.</p>
            <p>Das Seltsame ist: Ich war nicht abgelenkt. Ich war völlig fokussiert. Nur nicht auf das, was ich ursprünglich tun wollte. Das ist der Teil, den ich lösen wollte.</p>
            <h2 id="most-focus-apps-try-to-keep-you-working">Die meisten Fokus-Apps wollen, dass du weiterarbeitest</h2>
            <p>Flowtime versucht, dir dein Handeln bewusst zu machen. Da gibt es einen wichtigen Unterschied.</p>
            <p>Viele Produktivitäts-Apps sind um eine zentrale Frage herum entwickelt: <strong>„Wie halten wir dich länger fokussiert?“</strong></p>
            <p>Flowtime stellt eine andere Frage: <strong>„Arbeitest du immer noch am Richtigen?“</strong></p>
            <p>Das ist nicht dasselbe. Mit ADHS verlierst du nicht immer den Fokus. Manchmal verlierst du das Bewusstsein. Du wirst so sehr von etwas absorbiert, dass du aufhörst zu hinterfragen, ob es immer noch die höchste Priorität hat. Stunden vergehen, bevor du es bemerkst.</p>
            <p>Deshalb enthalten Flow-Sessions Achtsamkeits-Erinnerungen und Check-ins. Nicht um deine Arbeit zu unterbrechen, sondern um den Autopiloten zu unterbrechen.</p>
            <p>Manchmal lautet die Antwort: <em>„Ja, ich bin genau da, wo ich sein sollte.“</em> Manchmal lautet sie: <em>„Warte... wie bin ich hier gelandet?“</em> Dieser eine Moment des Bewusstseins reicht oft schon aus, um wieder auf den richtigen Weg zu kommen.</p>
            <h2 id="starting-matters-just-as-much">Das Starten ist genauso wichtig</h2>
            <p>Eine weitere Herausforderung bei ADHS ist das Anfangen. Manchmal ist die Arbeit selbst gar nicht schwer. Das Projekt öffnen, einen Timer auswählen, Einstellungen festlegen, entscheiden, wie lange man arbeiten möchte—diese winzigen Entscheidungen erzeugen Reibung, bevor du überhaupt angefangen hast.</p>
            <p>Deshalb bietet Flowtime Schnellstart-Vorlagen. Anstatt jedes Mal alles neu zu konfigurieren, kannst du eine Session mit einem einzigen Klick starten und sofort beginnen zu arbeiten. Je weniger Entscheidungen zwischen dir und deiner Aufgabe stehen, desto leichter fällt das Anfangen.</p>
            <h2 id="why-i-dont-use-flowtime-just-for-work">Warum ich Flowtime nicht nur für die Arbeit nutze</h2>
            <p>Eine meiner Lieblingsfunktionen war nicht einmal beabsichtigt. Ich gehe nach der Arbeit oft mit meinem Hund spazieren. Das Problem ist, dass mein Kopf das nicht tut. Ich denke immer noch über Code nach, neue Features, Marketing-Ideen oder Dinge, die ich vergessen habe zu implementieren. Anstatt den Spaziergang zu genießen, sitze ich gedanklich immer noch am Schreibtisch.</p>
            <p>Also habe ich angefangen, etwas anderes zu tun: Bevor ich das Haus verlasse, starte ich eine einstündige Flow-Session. Nicht weil ich mich auf die Arbeit konzentrieren will, sondern weil ich es eben <em>nicht</em> will.</p>
            <p>Die Achtsamkeits-Erinnerungen werden zu einer einfachen Aufforderung, mich wieder darauf zu besinnen, was um mich herum geschieht: <em>„Du gehst mit deinem Hund spazieren. Sei hier.“</em></p>
            <p>Deshalb beschreibe ich Flowtime manchmal als ein Werkzeug, das mir beim <strong>Entfokussieren</strong> hilft. Nicht weil ich aufhören will mich zu konzentrieren, sondern weil ich aufhören will, mich auf das Falsche zu konzentrieren.</p>
            <h2 id="so-where-does-forest-fit-in">Wo ordnet sich Forest ein?</h2>
            <p>Forest und Flowtime versuchen nicht, das gleiche Problem zu lösen. Forest nutzt Gamification: Einen Baum wachsen zu lassen wird zum Anreiz, das Handy liegenzulassen. Wenn dich das motiviert, ist das ein fantastisches Konzept.</p>
            <p>Flowtime nutzt keine Belohnungen. Es gibt keine Punkte, keine Streaks und es versucht nicht, dir ein schlechtes Gewissen zu machen, wenn du eine Session vorzeitig beendest. Stattdessen bittet es dich, ab und zu innezuhalten und zu prüfen, ob deine Aufmerksamkeit noch da ist, wo du sie haben möchtest. Für mich war das weitaus wertvoller als jedes Belohnungssystem.</p>
            <h2 id="other-forest-alternatives-worth-considering">Weitere bedenkenswerte Forest-Alternativen</h2>
            <p>Wenn Flowtime nicht das ist, wonach du suchst, gibt es mehrere andere hervorragende Fokus-Apps:</p>
            <h3>Focus To-Do</h3>
            <p>Eine gute Wahl, wenn du die Pomodoro-Technik magst und eine Aufgabenverwaltung direkt in derselben App haben möchtest.</p>
            <h3>Session</h3>
            <p>Ein eleganter Fokus-Timer für Apple-Nutzer mit Zeitplan- und Planungsfunktionen. Ideal, wenn du einen strukturierten Workflow im Apple-Ökosystem bevorzugst.</p>
            <h3>Freedom</h3>
            <p>Einer der besten Ablenkungsblocker auf dem Markt. Wenn soziale Medien und Websites deine Arbeit ständig unterbrechen, konzentriert sich Freedom darauf, diese Ablenkungen auf all deinen Geräten zu entfernen.</p>
            <h2 id="which-app-should-you-choose">Welche App solltest du wählen?</h2>
            <p>Wenn das Sammeln virtueller Bäume dich motiviert, ist Forest eine klare Empfehlung.</p>
            <p>Wenn du gerne in Pomodoro-Intervallen arbeitest, lohnt sich ein Blick auf Focus To-Do.</p>
            <p>Wenn das Blockieren von Ablenkungen deine größte Priorität ist, gehört Freedom zu den stärksten Optionen.</p>
            <p>Aber wenn du ADHS hast und deine größte Herausforderung nicht darin besteht, <em>abgelenkt zu werden</em>—sondern darin, das Bewusstsein dafür zu verlieren, <strong>was du tust</strong>, <strong>wie lange du es schon tust</strong> oder <strong>ob du immer noch an der Sache arbeitest, die am wichtigsten ist</strong>—dann ist genau das der Grund, warum ich Flowtime gebaut habe.</p>
            <p>Nicht um dich dazu zu drängen, härter zu arbeiten. Sondern um dir zu helfen zu bemerken, wenn deine Aufmerksamkeit leise dorthin gedriftet ist, wo du sie nie haben wolltet.</p>
            <p>Manchmal ist das Produktivste, was du tun kannst, nicht noch eine Stunde Arbeit. Manchmal ist es einfach, dich selbst zu fragen: <strong>„Arbeite ich immer noch am Richtigen?“</strong></p>
            <h2 id="faq">FAQ</h2>
            <details open>
              <summary>Warum eine Forest-Alternative ohne Gamification wählen?</summary>
              <p>Gamification funktioniert für manche gut, aber Punkte, virtuelle Bäume und Streaks können unbewussten Druck erzeugen. Alternative Apps bieten klare Nutzen, Bewusstsein oder gezieltes App-Blocking ohne Spielmechaniken.</p>
            </details>
            <details>
              <summary>Ist Flowtime eine gute Forest-Alternative für ADHS?</summary>
              <p>Ja. Flowtime ist speziell für ADHS-Zeitwahrnehmung und Hyperfokus-Check-ins konzipiert und verzichtet bewusst auf Belohnungs- und Punkteanreize.</p>
            </details>
            <details>
              <summary>Welche Forest-Alternative eignet sich am besten zum Blockieren ablenkender Websites?</summary>
              <p>Freedom gehört zu den stärksten Tools, wenn das geräteübergreifende Sperren von Webseiten und Social-Media-Plattformen im Vordergrund steht.</p>
            </details>
          `
        },
        "adhd-focus-timer-for-time-blindness": {
          title: "ADHS-Fokus-Timer für Zeitblindheit",
          description: "Wie ein ADHS-Fokus-Timer bei Zeitblindheit, Hyperfokus, Fokus-Erinnerungen, Pomodoro, App-Blocking und flexiblen Arbeitssessions helfen kann.",
          readingTime: "4 Min. Lesezeit",
          toc: ["Zusammenfassung", "Warum Zeitblindheit das Timer-Problem verändert", "Worauf du achten solltest", "Pomodoro kann helfen, ist aber nicht die einzige Form", "Hyperfokus braucht Ausstiegspunkte", "So passt Flowtime dazu", "Weiterlesen"],
          summaryPoints: [
            "Ein ADHS-Fokus-Timer sollte mehr tun, als Minuten zu zählen.",
            "Sichtbare Zeit, flexible Sessions, Fokus-Erinnerungen und App-Blocking können Zeitblindheit und Hyperfokus besser unterstützen.",
            "Flowtime ist kein medizinisches Produkt, sondern ein Fokus- und Zeitwahrnehmungs-Tool für iPhone und Android."
          ],
          bodyHtml: `
            <h2 id="summary">Zusammenfassung</h2>
            <p>Ein ADHS-Fokus-Timer für Zeitblindheit sollte mehr tun, als Minuten zu zählen. Der hilfreiche Teil ist oft externe Wahrnehmung: zu sehen, dass Zeit vergeht, sanfte Check-ins zu bekommen, die Session vor ablenkenden Apps zu schützen und entscheiden zu können, ob du weitermachst, stoppst oder wechselst.</p>
            <p>Flowtime ist um diese Art von Unterstützung herum gebaut. Es ist kein medizinisches Produkt, kein Diagnosewerkzeug und keine ADHS-Behandlung. Es ist eine Fokus- und Zeitwahrnehmungs-App für Menschen, die sichtbare Sessions und weniger ablenkende Ausgänge wollen.</p>
            <h2 id="why-time-blindness-changes-the-timer-problem">Warum Zeitblindheit das Timer-Problem verändert</h2>
            <p>Bei Zeitblindheit kann sich eine Aufgabe wie fünf Minuten oder wie vier Stunden anfühlen, ohne dass es innerlich rechtzeitig auffällt. Ein normaler Timer kann helfen, aber nur, wenn er zur tatsächlichen Session passt.</p>
            <p>Manche Aufgaben brauchen ein kurzes Pomodoro-Intervall. Andere brauchen einen längeren Fokusblock. Manche brauchen eine Erinnerung, die Bewusstsein zurückholt, ohne im ungünstigsten Moment eine Pause zu erzwingen.</p>
            <h2 id="what-to-look-for">Worauf du achten solltest</h2>
            <table>
              <thead><tr><th>Feature</th><th>Warum es hilft</th></tr></thead>
              <tbody>
                <tr><td>Sichtbare Session-Zeit</td><td>Macht vergehende Zeit leichter bemerkbar.</td></tr>
                <tr><td>Flexible Sessions</td><td>Lässt den Timer zu ungleichmäßigen Aufmerksamkeitsrhythmen passen.</td></tr>
                <tr><td>Fokus-Erinnerungen</td><td>Schafft Check-in-Punkte während tiefer Arbeit.</td></tr>
                <tr><td>Pomodoro-Unterstützung</td><td>Hilft, wenn feste Intervalle nützlich sind.</td></tr>
                <tr><td>App-Blocking</td><td>Reduziert Handy-Checks und Context Switching.</td></tr>
                <tr><td>Projekt-Historie</td><td>Macht Fokuszeit später leichter auswertbar.</td></tr>
                <tr><td>Start ohne Account</td><td>Entfernt Reibung vor dem Beginnen.</td></tr>
              </tbody>
            </table>
            <h2 id="pomodoro-can-help-but-it-is-not-the-only-shape">Pomodoro kann helfen, ist aber nicht die einzige Form</h2>
            <p>Pomodoro funktioniert gut, wenn ein klares Intervall beim Anfangen hilft. Für ADHS kann das wirklich nützlich sein. Die Schwierigkeit ist, dass Aufmerksamkeit nicht immer nach Zeitplan auftaucht.</p>
            <p>Wenn Fokus erst kurz vor dem Ende eines 25-Minuten-Blocks kommt, kann eine erzwungene Pause störend sein. Eine flexible Flow Session gibt dir ein Ziel und eine Erinnerung und lässt dich dann entscheiden, was als Nächstes sinnvoll ist.</p>
            <h2 id="hyperfocus-needs-exit-points">Hyperfokus braucht Ausstiegspunkte</h2>
            <p>In den Fokus zu kommen ist nicht immer der schwierigste Teil. Manchmal ist es schwieriger zu bemerken, dass du zu weit in eine Aufgabe hineingeraten bist, eine Pause übersprungen hast oder bei Arbeit bleibst, nachdem sie nicht mehr sinnvoll ist.</p>
            <p>Ein Hyperfokus-Timer sollte Ausstiegspunkte schaffen. Er muss dich nicht aus der Arbeit reißen. Er kann die aktuelle Session einfach sichtbar genug machen, damit du entscheiden kannst, ob Weitermachen noch sinnvoll ist.</p>
            <h2 id="where-flowtime-fits">So passt Flowtime dazu</h2>
            <p>Flowtime kombiniert flexible Flow Sessions, Pomodoro, Fokus-Erinnerungen, Projekt-Zeiterfassung und optionales App-Blocking. Dadurch kann es je nach Session als ADHS-Fokus-Timer, Hyperfokus-Timer, Pomodoro-Timer oder persönlicher Time Tracker funktionieren.</p>
            <p>Flowtime ist für iPhone und Android verfügbar, erfordert keinen Account und ist um ADHS-Zeitblindheit, Hyperfokus und weniger ablenkende Kontextwechsel herum gestaltet.</p>
            <h2 id="keep-reading">Weiterlesen</h2>
            <p>Passende Artikel dazu sind <a href="/guides/gentle-time-reminders-for-adhd-time-blindness/">Flexible Zeiterinnerungen bei ADHS-Time-Blindness</a>, <a href="/guides/adhd-hyperfocus-how-to-stop-without-killing-your-focus/">ADHS-Hyperfokus: Aufhören, ohne den Fokus kaputtzumachen</a> und <a href="/comparison/adhd-focus-timer-vs-pomodoro-whats-the-difference/">ADHS-Fokus-Timer vs. Pomodoro</a>.</p>
            <p>Flowtime ist ein ADHS-Fokus-Timer, der Zeit sichtbarer macht und es leichter macht, von Ablenkungen Abstand zu nehmen.</p>
          `
        },
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
            <p>Du einen direkten Timer für Fokusarbeit, Pomodoro, Flow-Sitzungen und eine einfache Projekthistorie suchst, ohne Zeiterfassung in ein Verwaltungssystem zu verwandeln.</p>
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
            "Eine focusedische Benutzeroberfläche hilft, den Fokus zu wahren."
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
            <p>Flowtime ist für focusedische Zeiterfassung, flexible Projekte und eine übersichtliche Historie gebaut. Es ist für Personen gedacht, die tracken möchten, ohne ein schweres Business-Tool zu verwalten.</p>
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
            <p>Hyperfokus ist ein mächtiges Werkzeug, birgt aber das Risiko, dass man Pausen vergisst, die eigene Energie erschöpft oder stundenlang in der falschen Aufgabe versinkt. Flowtime hilft dir durch Zeit-Signale und offene Sitzungen, bewusst zu arbeiten und den Moment des Aufhörens nicht zu verpassen.</p>
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
          description: "Ein Vergleich von Flowtime und Forest: Gamifizierung und virtuelle Wälder vs. focusedische, ablenkungsfreie Timer.",
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
                  <td>Focusedisch (Classic/Mono)</td>
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
            "Flowtime ist ein focusedischer Timer für die direkte Zuordnung auf übergeordnete Projekte."
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
                  <td>Focusedisch und modern</td>
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
                  <td>Modern und focusedisch</td>
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
          description: "Ein praktischer Leitfaden, um Schreiben, Lesen, Recherche, Überarbeitung und Deep Work klar und privat zu erfassen.",
          readingTime: "4 Min. Lesezeit",
          toc: ["Zusammenfassung", "Arbeitsphasen sichtbar machen", "Lange Aufmerksamkeit schützen", "FAQ"],
          summaryPoints: [
            "Schreiben und Forschung erzeugen nicht immer sofort sichtbaren Output.",
            "Zeiterfassung macht Lesen, Notizen, Entwürfe und Überarbeitung sichtbarer.",
            "Ein klarer lokaler Timer passt gut zu sensibler Schreib- und Forschungsarbeit."
          ],
          bodyHtml: `
            <h2 id="phases">Arbeitsphasen sichtbar machen</h2>
            <p>Tracke Lesen, Notizen, Gliederung, Entwurf, Überarbeitung, Quellenprüfung und Admin. Das hilft, Aufwand zu sehen, auch wenn am Ende wenig Text stehen bleibt.</p>
            <h2 id="protect-focus">Lange Aufmerksamkeit schützen</h2>
            <p>Schreiben und Forschung brauchen oft Kontinuit?tät. Erinnerungen sollten eher Check-ins sein: Brauche ich eine Pause, bin ich noch auf der richtigen Spur, was ist der nächste Schritt?</p>
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
          showcaseDesc2: "Minuteurs de concentration focusedes vs. plateformes de suivi d'équipe. Choisissez l'outil le plus adapté à votre workflow.",
          solutions: [
            { h3: "Pour les Freelancers & Indépendants", p: "Suivez vos heures facturables sur vos projets et tâches, sans factures complexes, synchronisations de comptes ou tableaux de bord managériaux." },
            { h3: "Pour les Développeurs & Créateurs", p: "Démarrage instantané. Touchez une fois pour changer de projet, personnalisez vos modes de concentration et restez concentré sur votre code." },
            { h3: "Pour les Étudiants & Universitaires", p: "Structurez vos sessions d'étude avec le Pomodoro classique, définissez des durées cibles pour vos Flow Sessions et analysez vos graphiques hebdomadaires." },
            { h3: "Pour les Écrivains & Chercheurs", p: "Entrez dans une zone de concentration sans distraction. Activez le thème Mono, conservez vos données localement et travaillez en toute simplicité." }
          ],
          comparisons: [
            { h3: "Flowtime vs Toggl Track", p: "Toggl Track est un outil détaillé orienté équipes et agences. Flowtime est un minuteur personnel léger, sans compte, centré sur le focus." },
            { h3: "Flowtime vs Forest", p: "Forest utilise la gamification et des arbres virtuels pour encourager la concentration. Flowtime propose un minuteur clair avec rapports, sans mécanique de jeu." },
            { h3: "Flowtime vs Session", p: "Session est un minuteur riche en fonctionnalités pour l'écosystème Apple. Flowtime est une alternative focusede et multiplateforme." },
            { h3: "Flowtime vs Focus To-Do", p: "Focus To-Do combine Pomodoro avec des listes de tâches GTD complexes. Flowtime se concentre sur les sessions de focus et les projets flexibles." },
            { h3: "Flowtime vs Be Focused", p: "Be Focused est un minuteur classique par intervalles. Flowtime ajoute des sessions Flow ouvertes, des rapports et des thèmes adaptables." }
          ],
          matrixBadge: "Tableau comparatif",
          matrixTitle: "Comparaison côte à côte",
          matrixDesc: "Découvrez comment Flowtime se compare à Toggl Track, Forest, Session, Focus To-Do et Be Focused sur les critères essentiels pour votre productivité.",
          matrixHeaders: ["Fonctionnalité", "Flowtime", "Toggl Track", "Forest", "Session", "Focus To-Do", "Be Focused"],
          matrixRows: [
            ["Idéal pour", "Focalisation personnelle", "Facturation d'équipe", "Travail gamifié", "Notes détaillées", "Listes de tâches GTD", "Intervalles simples"],
            ["Sans création de compte", "Oui (Instantané)", "Non (Obligatoire)", "Optionnel", "Non (Obligatoire)", "Non (Obligatoire)", "Oui"],
            ["Confidentialité locale", "Oui (Données locales)", "Non (Cloud)", "Non (Sync)", "Non (Cloud)", "Non (Cloud)", "Oui"],
            ["Mode Pomodoro", "Oui (Gratuit)", "Optionnel", "Oui", "Oui", "Oui", "Oui"],
            ["Flow Sessions ouvertes", "Oui (Gratuit)", "Non", "Non", "Non", "Non", "Non"],
            ["Suivi par projet", "Oui (Pro)", "Oui", "Oui", "Oui", "Oui", "Oui"],
            ["Interface", "Ultra-focusede", "Tableau de bord dense", "Illustrations cartoon", "Style iOS moderne", "Listes compactes", "Minuteur simple"]
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
          title: "Des idées pour un suivi du temps focusede.",
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
          desc: "Une comparaison entre Flowtime et Forest : la concentration gamifiée contre un minuteur focusede et discret."
        },
        "forest-alternatives-if-gamification-isnt-what-youre-looking-for": {
          title: "Alternatives à Forest : Si la gamification ne vous convient pas",
          desc: "Vous cherchez des alternatives à Forest sans gamification ? Comparez des applications de concentration comme Flowtime, Focus To-Do, Session et Freedom pour le TDAH et la productivité."
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
          metaDesc: "Comparaison entre Flowtime et Forest : gamification et arbres virtuels contre minuteur utilitaire focusede."
        },
        "forest-alternatives-if-gamification-isnt-what-youre-looking-for": {
          metaTitle: "Alternatives à Forest : Si la gamification ne vous convient pas - Flowtime",
          metaDesc: "Trouvez les meilleures alternatives à Forest sans éléments ludiques. Comparez Flowtime, Focus To-Do, Session et Freedom."
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
          metaDesc: "Comment suivre l'écriture, la lecture, la recherche et la révision dans un workflow cleare et local."
        }
      },
      articles: {
        "forest-alternatives-if-gamification-isnt-what-youre-looking-for": {
          title: "Alternatives à Forest : Si la gamification ne vous convient pas",
          description: "Vous cherchez des alternatives à Forest sans gamification ? Comparez des applications de concentration comme Flowtime, Focus To-Do, Session et Freedom pour le TDAH et la productivité.",
          readingTime: "4 min de lecture",
          toc: ["Résumé", "Le TDAH n'est pas toujours un manque de concentration", "La plupart des applications essaient de vous faire travailler plus longtemps", "Commencer compte tout autant", "Pourquoi je n'utilise pas Flowtime uniquement pour le travail", "Quelle est la place de Forest dans tout cela ?", "D'autres alternatives à Forest à envisager", "Quelle application devriez-vous choisir ?", "FAQ"],
          summaryPoints: [
            "Forest est une application populaire, mais la gamification et les récompenses visuelles ne conviennent pas à tout le monde.",
            "Flowtime privilégie la prise de conscience, des rappels doux et l'interruption du pilote automatique plutôt que des points ou des séries.",
            "D'autres alternatives comme Focus To-Do, Session et Freedom proposent des approches spécialisées pour les tâches, le workflow Apple ou le blocage d'accès."
          ],
          bodyHtml: `
            <h2 id="summary">Résumé</h2>
            <p>Forest est l'une des applications de concentration les plus populaires, mais la gamification et les récompenses visuelles ne conviennent pas à tout le monde. Si vous recherchez des alternatives à Forest qui privilégient la prise de conscience, une faible friction ou le blocage des distractions sans mécanique de jeu, des outils comme Flowtime, Focus To-Do, Session et Freedom proposent des approches différentes.</p>
            <p>Cherchez une application de concentration et vous tomberez rapidement sur <strong>Forest</strong>. C'est l'une des applications de productivité les plus connues. L'idée est simple : lancez un minuteur, ne quittez pas l'application et faites grandir un arbre virtuel pendant que vous travaillez.</p>
            <p>Manifestement, cela fonctionne pour beaucoup de monde. Mais ce n'est pas la seule manière d'aborder la concentration.</p>
            <p>Je n'ai jamais vraiment essayé Forest. Non pas que l'idée me déplaisait, mais créer un compte représentait déjà plus de friction que ce que je voulais. Je cherchais quelque chose que je pouvais ouvrir, utiliser immédiatement et oublier jusqu'à ce que j'en aie à nouveau besoin.</p>
            <p>Ne trouvant pas cette application, j'ai commencé à construire Flowtime. Non pas pour rivaliser avec Forest, mais pour résoudre un problème différent.</p>
            <h2 id="adhd-isnt-always-a-lack-of-focus">Le TDAH n'est pas toujours un manque de concentration</h2>
            <p>Quand les gens pensent au TDAH, ils imaginent souvent quelqu'un qui n'arrive pas à se concentrer. Cela arrive certainement. Mais il y a un autre aspect dont on parle beaucoup moins : <strong>l'hyperfocus</strong>.</p>
            <p>Je commence à travailler sur une fonctionnalité, je perds toute notion du temps, je saute le déjeuner, j'ignore mon téléphone et je me rends compte soudainement qu'il fait nuit.</p>
            <p>D'autres jours, je m'assieds dans l'intention de corriger un seul bug et je finis par redessiner une icône parce qu'une petite amélioration en a entraîné une autre.</p>
            <p>Le plus étrange, c'est que je n'étais pas distrait. J'étais complètement concentré. Juste pas sur ce que j'avais prévu de faire à l'origine. C'est cette partie que je voulais résoudre.</p>
            <h2 id="most-focus-apps-try-to-keep-you-working">La plupart des applications essaient de vous faire travailler plus longtemps</h2>
            <p>Flowtime essaie de vous maintenir conscient de votre attention. Il y a une différence majeure.</p>
            <p>De nombreuses applications de productivité sont conçues autour d'une seule question : <strong>« Comment vous garder concentré plus longtemps ? »</strong></p>
            <p>Flowtime en pose une différente : <strong>« Travaillez-vous toujours sur la bonne chose ? »</strong></p>
            <p>Ce n'est pas la même chose. Avec le TDAH, on ne perd pas toujours sa concentration. Parfois, on perd sa conscience de la situation. Vous devenez tellement absorbé par quelque chose que vous arrêtez de vous demander si c'est toujours la priorité absolue. Des heures passent avant que vous ne le remarquiez.</p>
            <p>C'est pourquoi les Flow Sessions incluent des rappels d'attention et des check-ins. Non pas pour interrompre votre travail, mais pour interrompre le pilote automatique.</p>
            <p>Parfois la réponse est : <em>« Oui, je suis exactement là où je devrais être. »</em> Parfois elle est : <em>« Attends... comment je me suis retrouvé à faire ça ? »</em> Ce seul moment de conscience suffit souvent pour se remettre sur les rails.</p>
            <h2 id="starting-matters-just-as-much">Commencer compte tout autant</h2>
            <p>Un autre défi avec le TDAH est de démarrer. Parfois, le travail lui-même n'est pas difficile. Ouvrir le projet, choisir un minuteur, régler les paramètres, décider combien de temps travailler—ces minuscules décisions ajoutent de la friction avant même d'avoir commencé.</p>
            <p>C'est pourquoi Flowtime inclut des modèles de démarrage rapide (Quick Start). Au lieu de tout configurer à chaque fois, vous pouvez lancer une session en un seul clic et commencer à travailler immédiatement. Moins il y a de décisions entre vous et votre tâche, plus il est facile de commencer.</p>
            <h2 id="why-i-dont-use-flowtime-just-for-work">Pourquoi je n'utilise pas Flowtime uniquement pour le travail</h2>
            <p>L'une de mes fonctionnalités préférées n'était même pas intentionnelle. Je promène souvent mon chien après le travail. Le problème, c'est que mon cerveau ne décroche pas. Je pense toujours au code, aux nouvelles fonctionnalités, aux idées marketing, aux choses que j'ai oublié d'implémenter. Au lieu de profiter de la promenade, je suis mentalement toujours assis à mon bureau.</p>
            <p>J'ai donc commencé à faire quelque chose de différent : avant de quitter la maison, je lance une Flow Session d'une heure. Non pas parce que je veux me concentrer sur le travail, mais parce que je <em>ne le veux pas</em>.</p>
            <p>Les rappels de concentration deviennent une simple invite à me reconnecter avec ce qui m'entoure : <em>« Tu promènes ton chien. Sois ici. »</em></p>
            <p>C'est pourquoi je décris parfois Flowtime comme un outil qui m'aide à <strong>déconcentrer</strong>. Non pas parce que je veux arrêter de me concentrer, mais parce que je veux arrêter de me concentrer sur la mauvaise chose.</p>
            <h2 id="so-where-does-forest-fit-in">Quelle est la place de Forest dans tout cela ?</h2>
            <p>Forest et Flowtime n'essaient pas de résoudre le même problème. Forest utilise la gamification : faire grandir un arbre devient l'incitation à rester éloigné de son téléphone. Si cela vous motive, c'est un concept fantastique.</p>
            <p>Flowtime n'utilise pas de récompenses. Il n'y a pas de points, pas de séries (streaks), et il n'essaie pas de vous faire culpabiliser si vous terminez une session plus tôt. Au lieu de cela, il vous demande de faire une pause de temps en temps pour vérifier si votre attention est toujours là où vous le souhaitez. Pour moi, cela a été bien plus précieux que n'importe quel système de récompense.</p>
            <h2 id="other-forest-alternatives-worth-considering">D'autres alternatives à Forest à envisager</h2>
            <p>Si Flowtime n'est pas ce que vous recherchez, il existe plusieurs autres excellentes applications de concentration :</p>
            <h3>Focus To-Do</h3>
            <p>Un bon choix si vous aimez la technique Pomodoro et souhaitez une gestion des tâches intégrée à la même application.</p>
            <h3>Session</h3>
            <p>Un minuteur de concentration soigné pour les utilisateurs Apple avec des fonctionnalités de planification et de calendrier. Idéal si vous préférez un workflow structuré dans l'écosystème Apple.</p>
            <h3>Freedom</h3>
            <p>L'un des meilleurs bloqueurs de distractions disponibles. Si les réseaux sociaux et les sites web interrompent constamment votre travail, Freedom se concentre sur la suppression de ces distractions sur tous vos appareils.</p>
            <h2 id="which-app-should-you-choose">Quelle application devriez-vous choisir ?</h2>
            <p>Si collectionner des arbres virtuels vous motive, Forest est une recommandation évidente.</p>
            <p>Si vous aimez travailler par intervalles Pomodoro, Focus To-Do vaut le coup d'œil.</p>
            <p>Si le blocage des distractions est votre priorité absolue, Freedom est l'une des options les plus solides.</p>
            <p>Mais si vous avez un TDAH et que votre plus grand défi n'est pas de <em>vous faire distraire</em>—mais de perdre la conscience de <strong>ce que vous faites</strong>, de <strong>depuis combien de temps vous le faites</strong>, ou de <strong>savoir si vous travaillez toujours sur la chose qui compte le plus</strong>—c'est exactement pour cela que j'ai créé Flowtime.</p>
            <p>Non pas pour vous pousser à travailler plus dur, mais pour vous aider à remarquer quand votre attention s'est silencieusement éloignée vers un endroit où vous n'aviez pas l'intention d'aller.</p>
            <p>Parfois, la chose la plus productive que vous puissiez faire n'est pas une heure de travail supplémentaire. Parfois, c'est simplement de vous demander : <strong>« Est-ce que je travaille toujours sur la bonne chose ? »</strong></p>
            <h2 id="faq">FAQ</h2>
            <details open>
              <summary>Pourquoi choisir une alternative à Forest sans gamification ?</summary>
              <p>La gamification fonctionne bien pour certains, mais les points, les arbres et les streaks peuvent créer une pression inutile. Les applications alternatives se concentrent sur l'utilité, la conscience ou le blocage des distractions sans mécanique de jeu.</p>
            </details>
            <details>
              <summary>Flowtime est-il une bonne alternative à Forest pour le TDAH ?</summary>
              <p>Oui. Flowtime est conçu spécifiquement pour la conscience du temps TDAH et les check-ins d'hyperfocus plutôt que pour le maintien de séries ou de récompenses visuelles.</p>
            </details>
            <details>
              <summary>Quelle alternative à Forest est la meilleure pour bloquer les sites web distrayants ?</summary>
              <p>Freedom est l'un des meilleurs outils si le blocage d'applications et de sites web sur l'ensemble de vos appareils est votre exigence principale.</p>
            </details>
          `
        },
        "adhd-focus-timer-for-time-blindness": {
          title: "Minuteur de concentration TDAH pour la notion du temps",
          description: "Comment un minuteur de concentration TDAH peut aider avec la notion du temps, l'hyperfocus, les rappels, Pomodoro, le blocage d'apps et les sessions flexibles.",
          readingTime: "4 min de lecture",
          toc: ["Résumé", "Pourquoi la notion du temps change le problème du minuteur", "Ce qu'il faut chercher", "Pomodoro peut aider, mais ce n'est pas la seule forme", "L'hyperfocus a besoin de points de sortie", "Comment Flowtime s'inscrit ici", "Continuer la lecture"],
          summaryPoints: [
            "Un minuteur de concentration TDAH doit faire plus que compter les minutes.",
            "Le temps visible, les sessions flexibles, les rappels et le blocage d'apps peuvent mieux soutenir la time blindness et l'hyperfocus.",
            "Flowtime n'est pas un produit médical, mais un outil de concentration et de repères temporels pour iPhone et Android."
          ],
          bodyHtml: `
            <h2 id="summary">Résumé</h2>
            <p>Un minuteur de concentration TDAH pour la notion du temps doit faire plus que compter les minutes. La partie utile est souvent externe : voir que le temps passe, recevoir des check-ins doux, protéger la session des apps distrayantes et choisir s'il faut continuer, arrêter ou changer.</p>
            <p>Flowtime est construit autour de ce type de soutien. Ce n'est pas un produit médical, un outil de diagnostic ni un traitement du TDAH. C'est une app de concentration et de repères temporels pour les personnes qui veulent des sessions visibles et moins de sorties distrayantes.</p>
            <h2 id="why-time-blindness-changes-the-timer-problem">Pourquoi la notion du temps change le problème du minuteur</h2>
            <p>Avec la time blindness, une tâche peut sembler durer cinq minutes ou quatre heures, avec très peu de signal interne. Un minuteur classique peut aider, mais seulement s'il correspond à la façon dont la session se déroule vraiment.</p>
            <p>Certaines tâches ont besoin d'un court intervalle Pomodoro. D'autres ont besoin d'un bloc de concentration plus long. D'autres encore ont besoin d'un rappel qui ramène de la conscience sans forcer une pause au pire moment.</p>
            <h2 id="what-to-look-for">Ce qu'il faut chercher</h2>
            <table>
              <thead><tr><th>Fonctionnalité</th><th>Pourquoi elle aide</th></tr></thead>
              <tbody>
                <tr><td>Temps de session visible</td><td>Rend le temps qui passe plus facile à remarquer.</td></tr>
                <tr><td>Sessions flexibles</td><td>Permet au minuteur de suivre des rythmes d'attention irréguliers.</td></tr>
                <tr><td>Rappels de concentration</td><td>Crée des points de check-in pendant le travail profond.</td></tr>
                <tr><td>Support Pomodoro</td><td>Aide quand les intervalles fixes sont utiles.</td></tr>
                <tr><td>Blocage d'apps</td><td>Réduit les vérifications du téléphone et les changements de contexte.</td></tr>
                <tr><td>Historique par projet</td><td>Rend le temps de concentration plus facile à revoir ensuite.</td></tr>
                <tr><td>Démarrage sans compte</td><td>Enlève de la friction avant de commencer.</td></tr>
              </tbody>
            </table>
            <h2 id="pomodoro-can-help-but-it-is-not-the-only-shape">Pomodoro peut aider, mais ce n'est pas la seule forme</h2>
            <p>Pomodoro fonctionne bien quand un intervalle clair aide à commencer. Pour le TDAH, cela peut être réellement utile. La difficulté, c'est que l'attention n'arrive pas toujours selon l'horaire prévu.</p>
            <p>Si la concentration arrive enfin vers la fin d'un bloc de 25 minutes, une pause forcée peut être perturbante. Une Flow Session flexible vous donne une cible et un rappel, puis vous laisse décider ce qui devrait se passer ensuite.</p>
            <h2 id="hyperfocus-needs-exit-points">L'hyperfocus a besoin de points de sortie</h2>
            <p>Entrer en concentration n'est pas toujours la partie la plus difficile. Parfois, le plus difficile est de remarquer que vous êtes allé trop loin dans une tâche, que vous avez sauté une pause ou que vous continuez après le moment où le travail n'est plus utile.</p>
            <p>Un minuteur d'hyperfocus devrait créer des points de sortie. Il n'a pas besoin de vous arracher au travail. Il peut simplement rendre la session assez visible pour que vous puissiez choisir si continuer a encore du sens.</p>
            <h2 id="where-flowtime-fits">Comment Flowtime s'inscrit ici</h2>
            <p>Flowtime combine Flow Sessions flexibles, Pomodoro, rappels de concentration, suivi du temps par projet et blocage d'apps optionnel. Selon la session, il peut donc servir de minuteur de concentration TDAH, de minuteur d'hyperfocus, de minuteur Pomodoro ou de time tracker personnel.</p>
            <p>Flowtime est disponible sur iPhone et Android, ne nécessite aucun compte et est conçu autour de la time blindness liée au TDAH, de l'hyperfocus et de la réduction des changements de contexte distrayants.</p>
            <h2 id="keep-reading">Continuer la lecture</h2>
            <p>Pour aller plus loin, lisez <a href="/guides/gentle-time-reminders-for-adhd-time-blindness/">Rappels de concentration pour la time blindness liée au TDAH</a>, <a href="/guides/adhd-hyperfocus-how-to-stop-without-killing-your-focus/">Hyperfocus TDAH : s'arrêter sans casser sa concentration</a> et <a href="/comparison/adhd-focus-timer-vs-pomodoro-whats-the-difference/">Minuteur TDAH vs Pomodoro</a>.</p>
            <p>Flowtime est un minuteur de concentration TDAH conçu pour rendre le temps plus visible et faciliter la prise de distance avec les distractions.</p>
          `
        },
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
            <p>Vous recherchez un minuteur focusede pour le travail concentré, les sessions Pomodoro, les Flow Sessions et un historique simple, sans transformer le suivi en système administratif.</p>
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
            <p>Flowtime est conçu pour le suivi focusede, des projets flexibles et un historique épuré. Il s'adresse aux personnes qui souhaitent suivre leur temps sans la lourdeur d'une plateforme d'entreprise.</p>
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
          description: "Une comparaison entre Flowtime et Forest : gamification et arbres virtuels contre minuteurs discrets et focusedes.",
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
                  <td>Focusede (Classic/Mono)</td>
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
                  <td>Focusede et moderne</td>
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
                  <td>Moderne et focusede</td>
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
          description: "Un guide pratique pour suivre l'écriture, la lecture, la recherche, la révision et le deep work dans un workflow cleare et privé.",
          readingTime: "4 min de lecture",
          toc: ["Résumé", "Rendre visibles les phases du travail", "Protéger l'attention longue", "FAQ"],
          summaryPoints: [
            "L'écriture et la recherche ne produisent pas toujours un résultat visible immédiatement.",
            "Le suivi du temps rend visibles la lecture, les notes, les brouillons et la révision.",
            "Un minuteur local et cleare convient bien au travail sensible d'écriture et de recherche."
          ],
          bodyHtml: `
            <h2 id="phases">Rendre visibles les phases du travail</h2>
            <p>Suivez lecture, notes, plan, brouillon, révision, vérification des sources et administratif. Cela montre l'effort même quand peu de texte final reste.</p>
            <h2 id="protect-focus">Protéger l'attention longue</h2>
            <p>L'écriture et la recherche demandent souvent une continuité cleare. Les rappels doivent plutôt agir comme des check-ins : ai-je besoin d'une pause, suis-je encore sur la bonne piste, quelle est la prochaine étape ?</p>
            <h2 id="faq">FAQ</h2>
            <details open><summary>Les écrivains doivent-ils suivre les mots ou le temps ?</summary><p>Les deux peuvent aider. Le temps capture aussi la réflexion, la recherche et la révision quand aucun mot nouveau n'apparaît.</p></details>
            <details><summary>Pourquoi suivre localement ?</summary><p>Le suivi local garde les habitudes de travail et l'historique des projets plus proches de votre propre appareil.</p></details>
          `
        }
      }
    }
  };


  var supplementalBlogTranslations = {
    "de": {
        "tags": {
            "adhd": "ADHS",
            "time awareness": "Zeitwahrnehmung",
            "hyperfocus": "Hyperfokus",
            "phone distraction": "Handy-Ablenkung",
            "app blocking": "App-Blocking",
            "pomodoro": "Pomodoro",
            "deep work": "Deep Work",
            "study": "Lernen"
        },
        "listings": {
            "guides": {
                "title": "Ratgeber für Fokus, Zeitwahrnehmung und klareres Tracking.",
                "desc": "Lies über ADHS-Time-Blindness, Hyperfokus, Fokus-Timer, Pomodoro-Alternativen, App-Blocking, Arbeit, Lernen und einfache persönliche Zeiterfassung.",
                "clusters": [
                    {
                        "title": "Time-Blindness und ADHS",
                        "desc": "Externe Zeitreize, sichtbare Sessions und Fokus-Erinnerungen für Menschen, die die Zeit aus dem Blick verlieren."
                    },
                    {
                        "title": "Hyperfokus",
                        "desc": "Flexible Grenzen, um aus tiefem Fokus herauszufinden, ohne abrupt herausgerissen zu werden."
                    },
                    {
                        "title": "Fokus-Timer",
                        "desc": "Arbeits-Timer, Lern-Timer, Deep-Focus-Sessions, Pomodoro und flexible Alternativen."
                    },
                    {
                        "title": "App-Blocking",
                        "desc": "Weniger Context Switching und weniger Aufmerksamkeits-Hijacking während bewusster Sessions."
                    }
                ]
            }
        },
        "blog_metadata": {
            "what-is-adhd": {
                "title": "Was ist ADHS? Symptome, Fokus und das ADHS-Gehirn",
                "desc": "Ein vorsichtiger, praktischer Einstieg in ADHS, Aufmerksamkeit, Fokus, Hyperfokus, exekutive Dysfunktion, Zeitblindheit und den Alltag Erwachsener."
            },
            "adhd-symptoms": {
                "title": "ADHS Symptome bei Erwachsenen: Anzeichen, die du vielleicht erkennst",
                "desc": "Ein persönlicher, vorsichtiger Guide zu ADHS Symptomen bei Erwachsenen, darunter Ablenkung, Hyperfokus, Prokrastination, innere Unruhe, Zeitblindheit und Aufgabenwechsel."
            },
            "why-adhd-makes-you-lose-track-of-time": {
                "title": "Warum ADHS dazu führen kann, dass du die Zeit aus dem Blick verlierst",
                "desc": "Ein praktischer Guide zu ADHS-Time-Blindness, dem Unterschied zwischen Uhrzeit und gefühlter Zeit und externen Zeitreizen."
            },
            "adhd-focus-timer-for-time-blindness": {
                "title": "ADHS-Fokus-Timer für Zeitblindheit",
                "desc": "Wie ein ADHS-Fokus-Timer bei Zeitblindheit, Hyperfokus, Fokus-Erinnerungen, Pomodoro, App-Blocking und flexiblen Arbeitssessions helfen kann."
            },
            "adhd-hyperfocus-how-to-stop-without-killing-your-focus": {
                "title": "ADHS-Hyperfokus: Aufhören, ohne den Fokus kaputtzumachen",
                "desc": "Wie flexible Grenzen, Fokus-Erinnerungen und bewusste Ausstiegspunkte beim Herauskommen aus Hyperfokus helfen können."
            },
            "i-use-a-focus-timer-to-stop-focusing": {
                "title": "Ich nutze einen Fokus-Timer, um mit dem Fokussieren aufzuhören",
                "desc": "Eine persönliche Gründerinnen-Notiz über ADHS, Hyperfokus, Hundespaziergänge, App-Blocking und absichtliches Unfokussieren."
            },
            "why-pomodoro-doesnt-always-work-for-adhd": {
                "title": "Warum Pomodoro bei ADHS nicht immer funktioniert",
                "desc": "Ein ausgewogener Blick darauf, wann Pomodoro hilft, wann feste 25-Minuten-Intervalle stören und wann flexible Sessions besser passen."
            },
            "do-you-start-working-and-suddenly-its-four-hours-later": {
                "title": "Fängst du an zu arbeiten und plötzlich sind vier Stunden vorbei?",
                "desc": "Ein alltagsnaher Guide zu Zeitverlust beim Arbeiten, Hyperfokus, externen Hinweisen und Session-Grenzen."
            },
            "why-do-i-forget-why-i-unlocked-my-phone": {
                "title": "Warum vergesse ich, warum ich mein Handy entsperrt habe?",
                "desc": "Wie visuelle Reize, Benachrichtigungen, Context Switching und App-Blocking mit Handy-Ablenkung zusammenhängen."
            },
            "gentle-time-reminders-for-adhd-time-blindness": {
                "title": "Flexible Zeiterinnerungen bei ADHS-Time-Blindness",
                "desc": "Warum Fokus-Erinnerungen oft besser funktionieren als aggressive Alarme und wie Check-ins Zeit sichtbarer machen."
            },
            "how-i-reduce-phone-distractions-when-my-adhd-brain-wants-to-check-everything": {
                "title": "Wie ich Handy-Ablenkungen reduziere, wenn mein ADHS-Gehirn alles checken will",
                "desc": "Eine persönliche Notiz über Instagram, Nachrichten, Wetter, E-Mail, App-Blocking und weniger Entscheidungen während Fokuszeit."
            },
            "how-to-use-a-focus-timer-without-interrupting-your-best-work": {
                "title": "So nutzt du einen Fokus-Timer, ohne deine beste Arbeit zu unterbrechen",
                "desc": "Ein Guide zu flexiblen Fokus-Timern, Deep Work, flexiblen Check-ins und weniger starren Pomodoro-Unterbrechungen."
            },
            "what-is-an-app-blocker-and-when-is-it-actually-useful": {
                "title": "Was ist ein App-Blocker und wann ist er wirklich nützlich?",
                "desc": "Was App-Blocker tun, wann sie beim Fokus helfen, wo ihre Grenzen liegen und warum Blocking eine Absicht unterstützen sollte."
            },
            "simple-focus-timer-for-work-study-and-deep-focus": {
                "title": "Ein einfacher Fokus-Timer für Arbeit, Lernen und Deep Focus",
                "desc": "Worauf es bei einem einfachen Fokus-Timer für Arbeit, Lernen, Erinnerungen, App-Blocking und Zeiterfassung ankommt."
            },
            "adhd-focus-timer-vs-pomodoro-whats-the-difference": {
                "title": "ADHS-Fokus-Timer vs. Pomodoro: Was ist der Unterschied?",
                "desc": "Ein sachlicher Vergleich von ADHS-Fokus-Timern und Pomodoro: feste Intervalle, flexible Sessions, Erinnerungen und App-Blocking."
            },
            "best-focus-apps-for-adhd-arent-always-planners": {
                "title": "Die besten Fokus-Apps für ADHS sind nicht immer Planner",
                "desc": "Warum Timer, App-Blocker, Body Doubling und externe Zeitreize manchmal hilfreicher sind als komplexe Planungssysteme."
            },
            "focus-timer-time-tracker-or-pomodoro-app-which-one-do-you-need": {
                "title": "Fokus-Timer, Time Tracker oder Pomodoro-App: Was brauchst du?",
                "desc": "Ein breiter Vergleich von Fokus-Timern, Time Trackern und Pomodoro-Apps für Arbeit, Lernen, Abrechnung und Zeitwahrnehmung."
            }
        }
    },
    "fr": {
        "tags": {
            "adhd": "TDAH",
            "time awareness": "Perception du temps",
            "hyperfocus": "Hyperfocus",
            "phone distraction": "Distraction du téléphone",
            "app blocking": "Blocage d'apps",
            "pomodoro": "Pomodoro",
            "deep work": "Deep work",
            "study": "Études"
        },
        "listings": {
            "guides": {
                "title": "Guides pour la concentration, la perception du temps et un suivi plus cleare.",
                "desc": "Lisez des guides sur le TDAH, la time blindness, l'hyperfocus, les minuteurs de concentration, Pomodoro, le blocage d'apps, le travail, les Études et le suivi personnel du temps.",
                "clusters": [
                    {
                        "title": "Time blindness et TDAH",
                        "desc": "Repères temporels externes, sessions visibles et rappels de concentration pour mieux remarquer le temps qui passe."
                    },
                    {
                        "title": "Hyperfocus",
                        "desc": "Des limites flexibles pour sortir d'une concentration profonde sans interruption brutale."
                    },
                    {
                        "title": "Minuteurs de concentration",
                        "desc": "Minuteurs pour le travail, les Études, le deep work, Pomodoro et les alternatives flexibles."
                    },
                    {
                        "title": "Blocage d'apps",
                        "desc": "Moins de changements de contexte et moins de détournement de l'attention pendant les sessions intentionnelles."
                    }
                ]
            }
        },
        "blog_metadata": {
            "what-is-adhd": {
                "title": "Qu'est-ce que le TDAH ? Symptômes, concentration et cerveau TDAH",
                "desc": "Une introduction prudente et pratique au TDAH, à l'attention, à la concentration, à l'hyperfocus, aux fonctions exécutives, à la time blindness et au quotidien adulte."
            },
            "adhd-symptoms": {
                "title": "Symptômes du TDAH chez l'adulte : signes que vous pourriez reconnaître",
                "desc": "Un guide personnel et prudent sur les symptômes du TDAH chez l'adulte, dont la distraction, l'hyperfocus, la procrastination, l'agitation intérieure, la time blindness et les changements de tâche."
            },
            "why-adhd-makes-you-lose-track-of-time": {
                "title": "Pourquoi le TDAH peut faire perdre la notion du temps",
                "desc": "Un guide cleare sur la time blindness, la différence entre connaître l'heure et sentir le temps passer, et les repères externes."
            },
            "adhd-focus-timer-for-time-blindness": {
                "title": "Minuteur de concentration TDAH pour la notion du temps",
                "desc": "Comment un minuteur de concentration TDAH peut aider avec la notion du temps, l'hyperfocus, les rappels, Pomodoro, le blocage d'apps et les sessions flexibles."
            },
            "adhd-hyperfocus-how-to-stop-without-killing-your-focus": {
                "title": "Hyperfocus TDAH : s'arrêter sans casser sa concentration",
                "desc": "Comment des limites flexibles, des rappels de concentration et un point de sortie intentionnel peuvent aider à sortir de l'hyperfocus."
            },
            "i-use-a-focus-timer-to-stop-focusing": {
                "title": "J'utilise un minuteur de concentration pour arrêter de me concentrer",
                "desc": "Une note personnelle sur le TDAH, l'hyperfocus, les promenades avec le chien, le blocage d'apps et le fait de décrocher intentionnellement."
            },
            "why-pomodoro-doesnt-always-work-for-adhd": {
                "title": "Pourquoi Pomodoro ne fonctionne pas toujours avec le TDAH",
                "desc": "Un regard équilibré sur Pomodoro, les interruptions fixes de 25 minutes et les sessions de concentration plus flexibles."
            },
            "do-you-start-working-and-suddenly-its-four-hours-later": {
                "title": "Vous commencez à travailler et soudain quatre heures ont passé ?",
                "desc": "Un guide conversationnel sur la perte de notion du temps au travail, l'hyperfocus, les repères externes et les limites flexibles."
            },
            "why-do-i-forget-why-i-unlocked-my-phone": {
                "title": "Pourquoi j'oublie pourquoi j'ai déverrouillé mon téléphone ?",
                "desc": "Comment les indices visuels, les notifications, le changement de contexte et le blocage d'apps se lient aux distractions du téléphone."
            },
            "gentle-time-reminders-for-adhd-time-blindness": {
                "title": "Rappels de concentration pour la time blindness liée au TDAH",
                "desc": "Pourquoi les rappels de concentration peuvent mieux soutenir la perception du temps que les alarmes agressives."
            },
            "how-i-reduce-phone-distractions-when-my-adhd-brain-wants-to-check-everything": {
                "title": "Comment je réduis les distractions du téléphone quand mon cerveau TDAH veut tout vérifier",
                "desc": "Une note personnelle sur Instagram, les messages, la météo, l'e-mail, le blocage d'apps et la réduction des décisions."
            },
            "how-to-use-a-focus-timer-without-interrupting-your-best-work": {
                "title": "Utiliser un minuteur de concentration sans interrompre votre meilleur travail",
                "desc": "Un guide sur les minuteurs flexibles, le deep work, les rappels comme check-ins et les alternatives à Pomodoro rigide."
            },
            "what-is-an-app-blocker-and-when-is-it-actually-useful": {
                "title": "Qu'est-ce qu'un bloqueur d'apps et quand est-il vraiment utile ?",
                "desc": "Ce que font les bloqueurs d'apps, quand ils aident la concentration, leurs limites et le lien avec les sessions minutées."
            },
            "simple-focus-timer-for-work-study-and-deep-focus": {
                "title": "Un minuteur simple pour le travail, les Études et le deep focus",
                "desc": "Ce qu’il faut chercher dans un minuteur simple pour travailler, étudier, bloquer les distractions et rendre le temps visible."
            },
            "adhd-focus-timer-vs-pomodoro-whats-the-difference": {
                "title": "Minuteur TDAH vs Pomodoro : quelle différence ?",
                "desc": "Une comparaison factuelle entre un minuteur TDAH et Pomodoro : intervalles fixes, sessions flexibles, rappels et blocage d'apps."
            },
            "best-focus-apps-for-adhd-arent-always-planners": {
                "title": "Les meilleures apps de concentration pour le TDAH ne sont pas toujours des planners",
                "desc": "Pourquoi les minuteurs, bloqueurs d’apps, repères externes et outils ciblés peuvent parfois aider plus que les systèmes complexes."
            },
            "focus-timer-time-tracker-or-pomodoro-app-which-one-do-you-need": {
                "title": "Minuteur de concentration, time tracker ou Pomodoro : lequel choisir ?",
                "desc": "Une comparaison large des minuteurs, time trackers et apps Pomodoro pour le travail, les Études, les habitudes et la perception du temps."
            }
        }
    }
};

  function mergeBlogTranslations(target, source) {
    Object.keys(source || {}).forEach(function (key) {
      if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
        target[key] = target[key] || {};
        mergeBlogTranslations(target[key], source[key]);
        return;
      }
      target[key] = source[key];
    });
  }

  Object.keys(supplementalBlogTranslations).forEach(function (loc) {
    blogTranslations[loc] = blogTranslations[loc] || {};
    mergeBlogTranslations(blogTranslations[loc], supplementalBlogTranslations[loc]);
  });

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

    var adhdLocalizedPages = [
      "why-adhd-makes-you-lose-track-of-time",
      "adhd-hyperfocus-how-to-stop-without-killing-your-focus",
      "i-use-a-focus-timer-to-stop-focusing",
      "why-pomodoro-doesnt-always-work-for-adhd",
      "do-you-start-working-and-suddenly-its-four-hours-later",
      "why-do-i-forget-why-i-unlocked-my-phone",
      "gentle-time-reminders-for-adhd-time-blindness",
      "how-i-reduce-phone-distractions-when-my-adhd-brain-wants-to-check-everything",
      "how-to-use-a-focus-timer-without-interrupting-your-best-work",
      "what-is-an-app-blocker-and-when-is-it-actually-useful",
      "simple-focus-timer-for-work-study-and-deep-focus",
      "adhd-focus-timer-vs-pomodoro-whats-the-difference",
      "best-focus-apps-for-adhd-arent-always-planners",
      "focus-timer-time-tracker-or-pomodoro-app-which-one-do-you-need"
    ];

    if (adhdLocalizedPages.indexOf(pageKey) >= 0) {
      return {
        title: fallbackTitle,
        description: fallbackDesc,
        readingTime: isGerman ? "4 Min. Lesezeit" : "4 min de lecture",
        toc: isGerman
          ? ["Zusammenfassung", "Warum das wichtig ist", "Session-Grenzen statt Druck", "So passt Flowtime dazu", "Weiterlesen"]
          : ["Résumé", "Pourquoi c'est important", "Des limites flexibles plutôt que de la pression", "Comment Flowtime s'inscrit ici", "Continuer la lecture"],
        summaryPoints: isGerman ? [
          fallbackDesc,
          "Die neuen ADHS- und Fokus-Inhalte erklären Zeitwahrnehmung, Hyperfokus, Ablenkung und flexible Timer ohne medizinische Versprechen.",
          "Flowtime unterstützt sichtbare Sessions, Fokus-Erinnerungen, Pomodoro, flexible Flow Sessions und optionales App-Blocking."
        ] : [
          fallbackDesc,
          "Les nouveaux contenus TDAH et concentration expliquent la perception du temps, l'hyperfocus, la distraction et les minuteurs flexibles sans promesse médicale.",
          "Flowtime soutient les sessions visibles, les rappels de concentration, Pomodoro, les Flow Sessions flexibles et le blocage d'apps optionnel."
        ],
        bodyHtml: isGerman ? `
          <h2 id="summary">Zusammenfassung</h2>
          <p>${fallbackDesc}</p>
          <p>Dieser Artikel gehört zur neuen ADHS- und Fokus-Serie von Flowtime. Die Serie richtet sich an Menschen, die Zeit leicht aus dem Blick verlieren, in Hyperfokus geraten, vom Handy abgelenkt werden oder mit starren Produktivitätssystemen nicht gut zurechtkommen.</p>
          <h2 id="why">Warum das wichtig ist</h2>
          <p>Bei ADHS ist das Problem nicht immer fehlende Motivation. Manchmal ist das Problem, dass Zeit nicht spürbar genug ist, dass ein guter Fokus zu lange weiterläuft oder dass ein einzelner Impuls den ganzen Arbeitsfluss verschiebt. Deshalb helfen einfache Ratschläge wie „stell dir einfach einen Timer“ oft nur teilweise.</p>
          <p>Ein hilfreiches Werkzeug sollte Zeit sichtbar machen, ohne zusätzlichen Druck aufzubauen. Es sollte dich daran erinnern, was gerade passiert, statt dich für Ablenkung oder Hyperfokus zu bestrafen. Genau darum geht es in diesen neuen Artikeln: externe Zeitreize, flexible Grenzen, App-Blocking und ein klarerer Umgang mit Fokus.</p>
          <h2 id="gentle-boundaries">Session-Grenzen statt Druck</h2>
          <p>Für manche Menschen ist Pomodoro nützlich, weil ein kurzer Arbeitsblock den Einstieg erleichtert. Für andere kommt die Pause genau dann, wenn der Fokus endlich da ist. Beides kann stimmen. Entscheidend ist, ob die Struktur zur Aufgabe und zum eigenen Aufmerksamkeitsrhythmus passt.</p>
          <p>Flexible Check-ins können hier besser funktionieren als harte Alarme. Eine Erinnerung muss nicht befehlen, sofort aufzuhören. Sie kann fragen: Bist du noch bei dem, was du tun wolltest? Brauchst du eine Pause? Willst du weitermachen, aber bewusst?</p>
          <h2 id="flowtime">So passt Flowtime dazu</h2>
          <p>Flowtime kombiniert sichtbare Fokus-Sessions, Pomodoro, flexible Flow Sessions, Erinnerungen, Projektzeit und optionales App-Blocking. Das ersetzt keine Diagnose, Therapie oder medizinische Unterstützung. Es kann aber helfen, äußere Hinweise zu schaffen, wenn das eigene Zeitgefühl gerade nicht zuverlässig genug ist.</p>
          <p>Die Idee ist bewusst leicht: Session starten, Zeit sichtbar halten, Ablenkungen reduzieren und später erkennen, wohin Fokus wirklich gegangen ist. Für ADHS, Hyperfokus und Time-Blindness kann genau diese Sichtbarkeit den Unterschied machen.</p>
          <h2 id="keep-reading">Weiterlesen</h2>
          <p>Passende Artikel in dieser Serie sind <a href="/guides/why-adhd-makes-you-lose-track-of-time/">Warum ADHS dazu führen kann, dass du die Zeit aus dem Blick verlierst</a>, <a href="/guides/adhd-hyperfocus-how-to-stop-without-killing-your-focus/">ADHS-Hyperfokus: Aufhören, ohne den Fokus kaputtzumachen</a> und <a href="/comparison/adhd-focus-timer-vs-pomodoro-whats-the-difference/">ADHS-Fokus-Timer vs. Pomodoro</a>.</p>
        ` : `
          <h2 id="summary">Résumé</h2>
          <p>${fallbackDesc}</p>
          <p>Cet article fait partie de la nouvelle série Flowtime sur le TDAH et la concentration. Elle s'adresse aux personnes qui perdent facilement la notion du temps, entrent en hyperfocus, se font happer par le téléphone ou ne se sentent pas aidées par les systèmes de productivité rigides.</p>
          <h2 id="why">Pourquoi c'est important</h2>
          <p>Avec le TDAH, le problème n'est pas toujours un manque de motivation. Parfois, le temps n'est pas assez perceptible, une bonne concentration dure trop longtemps, ou une seule impulsion déplace toute la session de travail. C'est pour cela que les conseils comme « mets simplement un minuteur » ne suffisent pas toujours.</p>
          <p>Un outil utile doit rendre le temps visible sans ajouter de pression. Il doit aider à remarquer ce qui se passe, plutôt que punir la distraction ou l'hyperfocus. Ces nouveaux articles parlent donc de repères temporels externes, de limites flexibles, de blocage d'apps et d'une relation plus cleare avec la concentration.</p>
          <h2 id="gentle-boundaries">Des limites flexibles plutôt que de la pression</h2>
          <p>Pour certaines personnes, Pomodoro aide parce qu'un bloc court rend le démarrage moins intimidant. Pour d'autres, la pause arrive exactement quand la concentration devient enfin possible. Les deux expériences peuvent être vraies. La bonne structure dépend de la tâche et du rythme d'attention.</p>
          <p>Des check-ins de temps peuvent mieux fonctionner que des alarmes brutales. Un rappel n'a pas besoin d'ordonner d'arrêter immédiatement. Il peut simplement demander : êtes-vous encore dans ce que vous vouliez faire ? Avez-vous besoin d'une pause ? Voulez-vous continuer, mais consciemment ?</p>
          <h2 id="flowtime">Comment Flowtime s'inscrit ici</h2>
          <p>Flowtime combine sessions visibles, Pomodoro, Flow Sessions flexibles, rappels, suivi par projet et blocage d'apps optionnel. Cela ne remplace pas un diagnostic, une thérapie ou un accompagnement médical. Mais cela peut créer des repères externes quand la perception interne du temps n'est pas assez fiable.</p>
          <p>L'idée reste légère : démarrer une session, garder le temps visible, réduire les distractions et comprendre ensuite où la concentration est vraiment allée. Pour le TDAH, l'hyperfocus et la time blindness, cette visibilité peut compter.</p>
          <h2 id="keep-reading">Continuer la lecture</h2>
          <p>Dans cette série, lisez aussi <a href="/guides/why-adhd-makes-you-lose-track-of-time/">Pourquoi le TDAH peut faire perdre la notion du temps</a>, <a href="/guides/adhd-hyperfocus-how-to-stop-without-killing-your-focus/">Hyperfocus TDAH : s'arrêter sans casser sa concentration</a> et <a href="/comparison/adhd-focus-timer-vs-pomodoro-whats-the-difference/">Minuteur TDAH vs Pomodoro</a>.</p>
        `
      };
    }
    if (isComparison) {
    return {
        title: fallbackTitle,
        description: fallbackDesc,
        readingTime: isGerman ? "4 Min. Lesezeit" : "4 min de lecture",
        toc: isGerman ? ["Zusammenfassung", "Schnellvergleich", "Worauf du achten solltest", "FAQ"] : ["Resume", "Comparaison rapide", "Points a verifier", "FAQ"],
        summaryPoints: isGerman ? [
          fallbackDesc,
          "Flowtime eignet sich besonders für klare, persönliche Fokus-Sessions ohne Account-Zwang.",
          subject + " kann besser passen, wenn du genau dessen spezielles Funktionsmodell brauchst."
        ] : [
          fallbackDesc,
          "Flowtime convient surtout aux sessions de concentration personnelles, cleares et sans compte.",
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
        "Flowtime reste local, rapide et volontairement direct pour proteger la concentration."
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
        deBest: "wenn Abrechnung, Teams, Kundenberichte und Freigabeprozesse wichtiger sind als ein klarer persönlicher Timer.",
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
            <p>Achte außerdem darauf, ob ein Upgrade Funktionen freischaltet, die du tatsächlich täglich nutzt. Für manche Workflows sind Integrationen, Teamberichte und Synchronisierung zentral. Für andere reicht ein klarer Timer mit klarer Historie. Der beste Preis ist nicht der mit der längsten Feature-Liste, sondern der mit dem geringsten Widerstand für deinen echten Arbeitsalltag.</p>
            <h2 id="decision">Entscheidungshilfe</h2>
            <p>Wähle Flowtime, wenn du Fokus-Sessions, Pomodoro, offene Flow Sessions, Projektzuordnung und eine klare Oberfläche möchtest. Wähle ${note.tool}, wenn dessen spezieller Ansatz genau zu deinem Workflow passt und du die zusätzliche Struktur aktiv nutzen wirst.</p>
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
            <p>Vérifiez aussi si une offre payante débloque des fonctions que vous utiliserez vraiment. Certaines personnes ont besoin de rapports d'équipe, de facturation ou d'intégrations. D'autres ont surtout besoin d'un minuteur cleare et d'un historique lisible. Le meilleur rapport qualité-prix dépend de votre usage réel, pas de la longueur de la fiche produit.</p>
            <h2 id="decision">Aide à la décision</h2>
            <p>Choisissez Flowtime si vous voulez des sessions de concentration, Pomodoro, des sessions Flow ouvertes, des projets et une interface cleare. Choisissez ${note.tool} si son approche spécifique correspond exactement à votre workflow et si vous utiliserez vraiment sa structure supplémentaire.</p>
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

        if (lData.clusters) {
          var clusterCards = document.querySelectorAll(".guide-clusters .showcase-card");
          for (var clusterIndex = 0; clusterIndex < clusterCards.length; clusterIndex++) {
            var cluster = lData.clusters[clusterIndex];
            if (!cluster) continue;
            var clusterTitle = clusterCards[clusterIndex].querySelector("h2");
            var clusterDesc = clusterCards[clusterIndex].querySelector("p");
            if (clusterTitle) clusterTitle.innerHTML = cluster.title + ' <span class="arrow">&rarr;</span>';
            if (clusterDesc) clusterDesc.textContent = cluster.desc;
          }
        }

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
      if (catEyebrow) catEyebrow.textContent = category === "comparison" ? dict.labels.comparison : (category === "adhd" ? (dict.labels.adhd || "ADHD") : dict.labels.guide);

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
