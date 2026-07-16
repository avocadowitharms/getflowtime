(function () {
  var storageKey = "flowtime-locale";
  var supported = ["en", "de", "fr"];
  var saved = window.localStorage.getItem(storageKey);
  var requested = new URLSearchParams(window.location.search).get("lang");
  var locale = supported.indexOf(requested) >= 0
    ? requested
    : (supported.indexOf(saved) >= 0 ? saved : "en");
  window.localStorage.setItem(storageKey, locale);
  var copy = {
    en: {
      "meta.title": "Flowtime - ADHD Focus Timer for Time Blindness",
      "meta.description": "Flowtime is a focus timer and time-awareness app for iPhone and Android, with flexible focus sessions, Pomodoro, reminders, projects, and optional app blocking.",
      "meta.og.image.alt": "Flowtime focus timer and time tracker preview",
      "a11y.home": "Flowtime home",
      "a11y.nav": "Main navigation",
      "language.label": "Language",
      "nav.toggle": "Toggle navigation menu",
      "nav.about": "About",
      "nav.focus": "Focus modes",
      "nav.simplicity": "Simplicity",
      "nav.reports": "Reports",
      "nav.pricing": "Pricing",
      "nav.faq": "FAQ",
      "nav.social": "Social",
      "nav.blog": "Blog",
      "nav.compare": "Compare",
      "nav.guides": "Guides",
      "nav.all": "All comparisons",
      "nav.allGuides": "All guides",
      "nav.compare.toggl": "vs Toggl Track",
      "nav.compare.forest": "vs Forest",
      "nav.compare.session": "vs Session",
      "nav.compare.todo": "vs Focus To-Do",
      "nav.compare.focused": "vs Be Focused",
      "nav.guide.noAccount": "Time Tracker Without an Account",
      "nav.guide.offline": "Best Offline Time Trackers",
      "nav.guide.overengineered": "Why Most Time Tracking Apps Feel Overengineered",
      "nav.guide.flow": "Sometimes the Problem Isn't Getting Into Flow",
      "cta.waitlist": "Subscribe for news",
      "cta.waitlist.long": "Subscribe for news",
      "cta.appstore": "Download on the App Store",
      "cta.playstore": "Get it on Google Play",
      "hero.eyebrow": "Time awareness for real focus",
      "hero.title": "A focus timer for ADHD time blindness.",
      "hero.description": "Start when you need to focus. Get focus reminders when you've disappeared too deep. Block the apps that hijack your attention.",
      "hero.category": "A flexible ADHD focus timer, hyperfocus timer, time tracker, and Pomodoro alternative for work, study, and intentional breaks.",
      "hero.benefits": "Flowtime benefits",
      "hero.timerCard.title": "Time awareness",
      "hero.timerCard.text": "Keep session time visible.",
      "hero.projects.title": "Flexible boundaries",
      "hero.projects.text": "Stop, continue, or switch.",
      "hero.history.title": "Focus reminders",
      "hero.history.text": "Show time while you work.",
      "hero.privacy.title": "App blocking",
      "hero.privacy.text": "Reduce attention hijacking.",
      "hero.rotate": "Rotate phone to try the timer",
      "hero.timer.start": "Start timer",
      "hero.timer.resume": "Resume timer",
      "hero.timer.pause": "Pause timer",
      "hero.hint.rotate": "Tap phone to try timer",
      "hero.hint.start": "Tap timer to start",
      "hero.hint.reset": "Reset. Tap timer to start",
      "hero.hint.paused": "Paused. Tap to resume",
      "hero.hint.running": "Running. Tap to pause",
      "launch.eyebrow": "Launch announcement",
      "launch.title": "Now available on the App Store and Google Play",
      "launch.description": "Flowtime is live for iPhone and Android. Thank you for being here at the start.",
      "focus.eyebrow": "Focus modes",
      "focus.title": "Focus without one rigid rhythm.",
      "focus.description": "Use a classic focus timer, Pomodoro timer, or flexible Flow Session for work, study, ADHD time awareness, hyperfocus check-ins, and intentional breaks.",
      "focus.classic.title": "Classic Timer",
      "focus.classic.text": "Simple, intuitive time tracking.",
      "focus.pomodoro.title": "Pomodoro",
      "focus.pomodoro.text": "Stay structured with work intervals.",
      "focus.flow.title": "Flow Session",
      "focus.flow.text": "Set a target duration, get reminders, and decide when to stop.",
      "styles.eyebrow": "Styles",
      "styles.title": "Your productivity.<br />Your style.",
      "styles.description": "Switch between Classic and Mono at any time.",
      "styles.instruction": "Tap a side to preview",
      "styles.preview.classic": "Preview Classic style",
      "styles.preview.mono": "Preview Mono style",
      "simplicity.eyebrow": "Simplicity",
      "simplicity.title": "Start. Stop. Switch.",
      "simplicity.description": "All the features you need in one simple interface. A tap / swipe to control your focus.",
      "quick.title": "Quick selection",
      "quick.description": "Tap the center button to open the selector, then choose a project to switch instantly.",
      "quick.open": "Open quick selection. Current project: {project}",
      "quick.close": "Close quick selection. Current project: {project}",
      "quick.switch": "Switch to {project}",
      "quick.selected": "Selected project:",
      "controls.title": "Timer controls",
      "controls.description": "Tap once to start, again to pause, double tap to stop.",
      "swipe.title": "Swipe to switch",
      "swipe.description": "Change timer type by swiping left or right on the circle.",
      "project.work": "Work",
      "project.gardening": "Gardening",
      "project.flowtime": "Flowtime",
      "project.testing": "Testing",
      "reports.eyebrow": "History & Reports",
      "reports.title": "Explore your focus.",
      "reports.description": "Review today's activity by project, then use reports to understand your focus over time.",
      "reports.today": "Today",
      "reports.activity": "Today's focus activity",
      "reports.tracked": "Tracked focus",
      "reports.break": "Break",
      "reports.filter": "Filter activity by project",
      "reports.prompt": "Tap a project to see its activity above.",
      "reports.all": "All projects",
      "reports.flexible": "Flexible reports",
      "reports.flexible.text": "Sort and compare focus by project, timer type, or time range.",
      "reports.filters": "Report filters",
      "reports.day": "Day",
      "reports.week": "Week",
      "reports.month": "Month",
      "reports.project": "Project",
      "reports.timer.type": "Timer type",
      "time.8": "8 AM",
      "time.9": "9 AM",
      "time.11": "11 AM",
      "time.13": "1 PM",
      "time.14": "2 PM",
      "time.18": "6 PM",
      "pricing.eyebrow": "Pricing",
      "pricing.title": "Free vs Pro.<br />Clear limits.",
      "pricing.description": "Start with the essentials for focused work. Upgrade when you need more projects, more templates, analytics, and deeper timer control.",
      "pricing.free": "Free",
      "pricing.free.title": "Essential timers,<br />simple limits.",
      "pricing.free.timers": "Standard timer, Flow Session, and Pomodoro",
      "pricing.free.projects": "2 projects",
      "pricing.free.templates": "2 Quick Start templates",
      "pricing.free.reminders": "Standard timer reminders and check-ins",
      "pricing.free.flow": "Flow Session target duration and basic end reminder",
      "pricing.free.pomodoro": "Default Pomodoro preset",
      "pricing.free.selection": "Manual project selection",
      "pricing.free.appearance": "Basic theme and timer appearance settings",
      "pricing.free.shielding": "Focus shielding and app blocking",
      "pricing.pro.title": "More control,<br />without extra clutter.",
      "pricing.pro.projects": "Unlimited projects",
      "pricing.pro.templates": "Unlimited Quick Start templates",
      "pricing.pro.timer.templates": "Start Quick Start templates directly from the timer",
      "pricing.pro.launch": "Quick Start on app launch",
      "pricing.pro.pinned": "Up to 6 pinned Quick Start templates",
      "pricing.pro.reminder.profiles": "Custom reminder profiles",
      "pricing.pro.reminder.controls": "Custom intervals, reminder text, and sounds",
      "pricing.advanced.pomodoro": "Advanced Pomodoro controls",
      "pricing.break.tracking": "Break tracking",
      "pricing.pro.analytics": "Analytics",
      "pricing.timer.ring": "Timer ring color customization",
      "social.eyebrow": "Social",
      "social.title": "Follow the build.",
      "social.description": "Browse the latest Flowtime updates, launch notes, design progress, and social posts in one place.",
      "social.instagram": "Follow on Instagram",
      "social.x": "Follow on X",
      "social.gallery": "Flowtime social gallery",
      "faq.eyebrow": "FAQ",
      "faq.title": "Frequently Asked Questions",
      "faq.what.q": "What is Flowtime?",
      "faq.what.a": "Flowtime is a focus timer and time-awareness app for iPhone and Android. It supports flexible focus sessions, a standard timer, Pomodoro, focus reminders, optional app blocking, personal time tracking, projects, session history, and reports.",
      "faq.who.q": "Who is Flowtime for?",
      "faq.who.a": "Flowtime is for people who want to make focused time visible without managing a heavy workspace. It is designed especially around ADHD time blindness, hyperfocus, and reducing distracting context switches.",
      "faq.adhd.q": "Is Flowtime good for ADHD?",
      "faq.adhd.a": "Flowtime can help people who benefit from external time cues, focus reminders, visible sessions, and low-friction project switching. It is not a medical tool, diagnostic tool, or ADHD treatment.",
      "faq.pomodoro.diff.q": "How is Flowtime different from Pomodoro?",
      "faq.pomodoro.diff.a": "Pomodoro is one structured interval method. Flowtime includes Pomodoro, but also works as a flexible Pomodoro alternative with open-ended Flow Sessions, target duration, standard time tracking, project selection, reminders, and reviewable focus history.",
      "faq.competitors.q": "How is Flowtime different from Forest, Toggl, or Session?",
      "faq.competitors.a": "Flowtime focuses on simple personal focus tracking without account-heavy setup. It is available for iPhone and Android and is designed around flexible sessions rather than only fixed intervals.",
      "faq.free.q": "Is Flowtime free?",
      "faq.free.a": "Yes. Free includes the standard timer, Flow Session, Pomodoro, 2 projects, and 2 Quick Start templates. Pro removes those limits and adds analytics and deeper timer controls.",
      "faq.platform.q": "What platforms does Flowtime support?",
      "faq.platform.a": "Flowtime is available for iPhone and Android. The web experience is designed to match the app with the same simple, minimal design language.",
      "faq.languages.q": "How many languages does Flowtime support?",
      "faq.languages.a": "Flowtime currently supports 10 languages: English, German, Spanish, French, Italian, Japanese, Korean, Dutch, Polish, and Portuguese.",
      "faq.flow.q": "What is a Flow Session?",
      "faq.flow.a": "Flow Sessions let you set a target duration without rigid intervals. They are designed for focused, flexible work sessions.",
      "faq.pomodoro.q": "Does Flowtime use the Pomodoro technique?",
      "faq.pomodoro.a": "Yes. Free includes the classic 25 / 5 Pomodoro pattern, while Pro adds advanced Pomodoro settings.",
      "faq.privacy.q": "Is my data private?",
      "faq.privacy.a": "No account is required. The privacy policy states that timer and project data are stored locally on your device and are not sent to Flowtime servers.",
      "faq.pro.q": "What does Flowtime Pro include?",
      "faq.pro.a": "Flowtime Pro unlocks:",
      "faq.pro.projects": "Unlimited projects",
      "faq.pro.templates": "Unlimited Quick Start templates",
      "faq.pro.reminders": "Custom reminder profiles",
      "faq.pro.pomodoro": "Advanced Pomodoro controls",
      "faq.pro.analytics": "Analytics",
      "faq.pro.appearance": "Break tracking and timer ring color customization",
      "faq.beta.q": "Where can I download Flowtime?",
      "faq.beta.a": "Flowtime is available on the App Store for iPhone and on Google Play for Android.",
      "download.title": "Download Flowtime",
      "download.description": "Use a focus timer, hyperfocus timer, time tracker, app blocker, and Pomodoro alternative for work, study, deep focus, and intentional breaks.",
      "modal.close": "Close",
      "waitlist.close": "Close news subscription",
      "waitlist.eyebrow": "News",
      "waitlist.title": "Subscribe for Flowtime news.",
      "waitlist.description": "Get app updates, release notes and future feature news.",
      "waitlist.email": "Email address",
      "waitlist.placeholder": "Email",
      "waitlist.privacy": "Flowtime updates only.",
      "waitlist.policy.before": "You can unsubscribe anytime. For more details, review our",
      "waitlist.policy.link": "Privacy Policy",
      "waitlist.notify": "Subscribe",
      "waitlist.success": "You're subscribed.",
      "waitlist.thanks": "Thanks for supporting Flowtime.",
      "footer.copyright": "&copy; 2026 Ava Thalheim",
      "footer.links": "Legal and support",
      "footer.about": "About Flowtime",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms of Use",
      "footer.support": "Support",
      "footer.creator": "avathalheim.dev",
      "footer.coffee": "Buy me a coffee",
      "footer.top": "Back to top"
    },
    de: {
      "meta.title": "Flowtime - ADHD Focus Timer for Time Blindness",
      "meta.description": "Flowtime ist ein Fokus-Timer und Time Tracker für Pomodoro-Sessions, Flow Sessions, Projekte, Erinnerungen, Analytics und datenschutzfreundliche Produktivität.",
      "meta.og.image.alt": "Flowtime Fokus-Timer und Time-Tracker-Vorschau",
      "a11y.home": "Flowtime Startseite",
      "a11y.nav": "Hauptnavigation",
      "language.label": "Sprache",
      "nav.toggle": "Navigationsmenü umschalten",
      "nav.about": "About",
      "nav.focus": "Fokusmodi",
      "nav.simplicity": "Einfachheit",
      "nav.reports": "Berichte",
      "nav.pricing": "Preise",
      "nav.faq": "FAQ",
      "nav.social": "Social",
      "nav.blog": "Blog",
      "nav.compare": "Vergleichen",
      "nav.guides": "Ratgeber",
      "nav.all": "Alle Vergleiche",
      "nav.allGuides": "Alle Ratgeber",
      "nav.compare.toggl": "vs Toggl Track",
      "nav.compare.forest": "vs Forest",
      "nav.compare.session": "vs Session",
      "nav.compare.todo": "vs Focus To-Do",
      "nav.compare.focused": "vs Be Focused",
      "nav.guide.noAccount": "Zeiterfassung ohne Account",
      "nav.guide.offline": "Die besten Offline-Zeiterfassungen",
      "nav.guide.overengineered": "Warum Zeiterfassungs-Apps oft überladen wirken",
      "nav.guide.flow": "Manchmal ist das Problem nicht der Flow, sondern das Herauskommen",
      "cta.waitlist": "News abonnieren",
      "cta.waitlist.long": "News abonnieren",
      "cta.appstore": "Im App Store laden",
      "cta.playstore": "Bei Google Play laden",
      "hero.eyebrow": "Zeitwahrnehmung für echten Fokus",
      "hero.title": "Ein Fokus-Timer für ADHS und Zeitblindheit.",
      "hero.description": "Starte, wenn du dich konzentrieren musst. Bekomme Fokus-Erinnerungen, wenn du zu tief abgetaucht bist. Blockiere Apps, die deine Aufmerksamkeit kapern.",
      "hero.category": "Ein flexibler Fokus-Timer, Time Tracker und App-Blocker für Arbeit, Lernen und bewusste Pausen.",
      "hero.benefits": "Vorteile von Flowtime",
      "hero.timerCard.title": "Zeitwahrnehmung",
      "hero.timerCard.text": "Session-Zeit sichtbar halten.",
      "hero.projects.title": "Flexible Grenzen",
      "hero.projects.text": "Stoppen, weitermachen oder wechseln.",
      "hero.history.title": "Fokus-Erinnerungen",
      "hero.history.text": "Check-ins als Zeit-Hinweis.",
      "hero.privacy.title": "App-Blocking",
      "hero.privacy.text": "Weniger Aufmerksamkeits-Hijacking.",
      "hero.rotate": "Handy drehen, um den Timer auszuprobieren",
      "hero.timer.start": "Timer starten",
      "hero.timer.resume": "Timer fortsetzen",
      "hero.timer.pause": "Timer pausieren",
      "hero.hint.rotate": "Tippen, um den Timer zu testen",
      "hero.hint.start": "Timer antippen zum Start",
      "hero.hint.reset": "Zurückgesetzt. Tippen zum Start",
      "hero.hint.paused": "Pausiert. Tippen zum Fortsetzen",
      "hero.hint.running": "Läuft. Tippen zum Pausieren",
      "launch.eyebrow": "Launch-Ankuendigung",
      "launch.title": "Jetzt im App Store und bei Google Play verfuegbar",
      "launch.description": "Flowtime ist für iPhone und Android live. Danke, dass du von Anfang an dabei bist.",
      "focus.eyebrow": "Fokusmodi",
      "focus.title": "Drei Arten zu fokussieren.",
      "focus.description": "Wähle den Timer für deinen Arbeitsfluss - klassisches Tracking, strukturierte Pomodoro-Sessions oder Flow Sessions mit Zieldauer.",
      "focus.classic.title": "Klassischer Timer",
      "focus.classic.text": "Einfache, intuitive Zeiterfassung.",
      "focus.pomodoro.title": "Pomodoro",
      "focus.pomodoro.text": "Arbeite strukturiert in Intervallen.",
      "focus.flow.title": "Flow Session",
      "focus.flow.text": "Setze eine Zieldauer und arbeite weiter.",
      "styles.eyebrow": "Stile",
      "styles.title": "Deine Produktivität.<br />Dein Stil.",
      "styles.description": "Wechsle jederzeit zwischen Classic und Mono.",
      "styles.instruction": "Tippe auf eine Seite zur Vorschau",
      "styles.preview.classic": "Classic-Stil anzeigen",
      "styles.preview.mono": "Mono-Stil anzeigen",
      "simplicity.eyebrow": "Einfachheit",
      "simplicity.title": "Starten. Stoppen. Wechseln.",
      "simplicity.description": "All die Funktionen, die du brauchst, in einer einfachen Oberfläche. Ein Tap / Swipe, um deinen Fokus zu steuern.",
      "quick.title": "Schnellauswahl",
      "quick.description": "Tippe auf die mittlere Taste, öffne die Auswahl und wechsle sofort zu einem Projekt.",
      "quick.open": "Schnellauswahl öffnen. Aktuelles Projekt: {project}",
      "quick.close": "Schnellauswahl schließen. Aktuelles Projekt: {project}",
      "quick.switch": "Zu {project} wechseln",
      "quick.selected": "Ausgewähltes Projekt:",
      "controls.title": "Timer-Steuerung",
      "controls.description": "Einmal tippen zum Starten, erneut zum Pausieren, zweimal tippen zum Beenden.",
      "swipe.title": "Wischen zum Wechseln",
      "swipe.description": "Wechsle die Timerart durch Wischen nach links oder rechts auf dem Kreis.",
      "project.work": "Arbeit",
      "project.gardening": "Garten",
      "project.flowtime": "Flowtime",
      "project.testing": "Testen",
      "reports.eyebrow": "Historie & Berichte",
      "reports.title": "Erkunde deinen Fokus.",
      "reports.description": "Prüfe die heutige Aktivität nach Projekt und nutze Berichte, um deinen Fokus über Zeit zu verstehen.",
      "reports.today": "Heute",
      "reports.activity": "Heutige Fokusaktivität",
      "reports.tracked": "Erfasster Fokus",
      "reports.break": "Pause",
      "reports.filter": "Aktivität nach Projekt filtern",
      "reports.prompt": "Tippe auf ein Projekt, um oben seine Aktivität zu sehen.",
      "reports.all": "Alle Projekte",
      "reports.flexible": "Flexible Berichte",
      "reports.flexible.text": "Sortiere und vergleiche Fokus nach Projekt, Timerart oder Zeitraum.",
      "reports.filters": "Berichtsfilter",
      "reports.day": "Tag",
      "reports.week": "Woche",
      "reports.month": "Monat",
      "reports.project": "Projekt",
      "reports.timer.type": "Timerart",
      "time.8": "08:00",
      "time.9": "09:00",
      "time.11": "11:00",
      "time.13": "13:00",
      "time.14": "14:00",
      "time.18": "18:00",
      "pricing.eyebrow": "Preise",
      "pricing.title": "Free vs. Pro.<br />Klare Limits.",
      "pricing.description": "Starte mit den wichtigsten Funktionen für fokussiertes Arbeiten. Upgrade, wenn du mehr Projekte, mehr Vorlagen, Analytics und mehr Timer-Kontrolle brauchst.",
      "pricing.free": "Free",
      "pricing.free.title": "Wichtige Timer,<br />einfache Limits.",
      "pricing.free.timers": "Standard-Timer, Flow Session und Pomodoro",
      "pricing.free.projects": "2 Projekte",
      "pricing.free.templates": "2 Quick-Start-Vorlagen",
      "pricing.free.reminders": "Standard-Timer-Erinnerungen und Check-ins",
      "pricing.free.flow": "Flow-Session-Zieldauer und einfache Enderinnerung",
      "pricing.free.pomodoro": "Standard-Pomodoro-Voreinstellung",
      "pricing.free.selection": "Manuelle Projektauswahl",
      "pricing.free.appearance": "Basis-Einstellungen fuer Theme und Timer-Darstellung",
      "pricing.free.shielding": "Focus Shielding und App-Blocking",
      "pricing.pro.title": "Mehr Kontrolle,<br />ohne mehr Unruhe.",
      "pricing.pro.projects": "Unbegrenzte Projekte",
      "pricing.pro.templates": "Unbegrenzte Quick-Start-Vorlagen",
      "pricing.pro.timer.templates": "Quick-Start-Vorlagen direkt vom Timer starten",
      "pricing.pro.launch": "Quick Start beim App-Start",
      "pricing.pro.pinned": "Bis zu 6 angepinnte Quick-Start-Vorlagen",
      "pricing.pro.reminder.profiles": "Eigene Erinnerungsprofile",
      "pricing.pro.reminder.controls": "Eigene Intervalle, Erinnerungstexte und Sounds",
      "pricing.advanced.pomodoro": "Erweiterte Pomodoro-Steuerung",
      "pricing.break.tracking": "Pausen-Tracking",
      "pricing.pro.analytics": "Analytics",
      "pricing.timer.ring": "Timer-Ring-Farbe anpassen",
      "social.eyebrow": "Social",
      "social.title": "Folge der Entwicklung.",
      "social.description": "Entdecke die neuesten Flowtime-Updates, Launch Notes, Design-Fortschritte und Social Posts an einem Ort.",
      "social.instagram": "Auf Instagram folgen",
      "social.x": "Auf X folgen",
      "social.gallery": "Flowtime Social-Galerie",
      "faq.eyebrow": "FAQ",
      "faq.title": "Häufig gestellte Fragen",
      "faq.what.q": "Was ist Flowtime?",
      "faq.what.a": "Flowtime ist ein Fokus-Timer und Time Tracker für iPhone und Android. Die App unterstützt Standard-Timer, Flow Sessions, Pomodoro, Projekte, Erinnerungen, Historie, Berichte und datenschutzfreundliche persönliche Produktivität.",
      "faq.who.q": "Für wen ist Flowtime gedacht?",
      "faq.who.a": "Flowtime ist für Menschen gedacht, die verstehen möchten, wohin ihre Fokuszeit geht, ohne einen schweren Workspace zu verwalten. Es passt zu Studierenden, Freelancern, Entwicklern, Schreibenden, Forschenden und allen, die einfache persönliche Zeiterfassung bevorzugen.",
      "faq.adhd.q": "Ist Flowtime gut bei ADHS?",
      "faq.adhd.a": "Flowtime kann Menschen helfen, denen externe Zeitreize, Fokus-Erinnerungen, sichtbare Sessions und schneller Projektwechsel guttun. Es ist kein medizinisches Tool, Diagnosewerkzeug oder ADHS-Behandlung.",
      "faq.pomodoro.diff.q": "Wie unterscheidet sich Flowtime von Pomodoro?",
      "faq.pomodoro.diff.a": "Pomodoro ist eine strukturierte Intervallmethode. Flowtime enthält Pomodoro, unterstützt aber auch offene Flow Sessions mit Zieldauer, klassische Zeiterfassung, Projektauswahl, Erinnerungen und auswertbare Fokushistorie.",
      "faq.competitors.q": "Wie unterscheidet sich Flowtime von Forest, Toggl oder Session?",
      "faq.competitors.a": "Flowtime ist weniger spielerisch als Forest, leichter als teamorientierte Tools wie Toggl und plattformübergreifender als Apple-zentrierte Timer wie Session. Der Fokus liegt auf einfacher persönlicher Fokuserfassung ohne accountlastige Einrichtung.",
      "faq.free.q": "Ist Flowtime kostenlos?",
      "faq.free.a": "Ja. Free enthält den Standard-Timer, Flow Session, Pomodoro, 2 Projekte und 2 Quick-Start-Vorlagen. Pro hebt diese Limits auf und ergänzt Analytics und mehr Timer-Kontrolle.",
      "faq.platform.q": "Welche Plattformen unterstützt Flowtime?",
      "faq.platform.a": "Flowtime ist für iPhone und Android verfügbar. Das Web-Erlebnis folgt derselben einfachen und direkten Designsprache wie die App.",
      "faq.languages.q": "Wie viele Sprachen unterstuetzt Flowtime?",
      "faq.languages.a": "Flowtime unterstuetzt aktuell 10 Sprachen: Englisch, Deutsch, Spanisch, Franzoesisch, Italienisch, Japanisch, Koreanisch, Niederlaendisch, Polnisch und Portugiesisch.",
      "faq.flow.q": "Was ist eine Flow Session?",
      "faq.flow.a": "Mit Flow Sessions setzt du eine Zieldauer ohne starre Intervalle. Sie sind für konzentrierte, flexible Arbeitssessions gedacht.",
      "faq.pomodoro.q": "Nutzt Flowtime die Pomodoro-Technik?",
      "faq.pomodoro.a": "Ja. Free enthält das klassische 25 / 5-Pomodoro-Muster, Pro ergänzt erweiterte Pomodoro-Einstellungen.",
      "faq.privacy.q": "Sind meine Daten privat?",
      "faq.privacy.a": "Ja. Deine Sessions und Projekte bleiben deine. Flowtime setzt Datenschutz an erste Stelle und vermeidet unnötiges Tracking.",
      "faq.pro.q": "Was enthält Flowtime Pro?",
      "faq.pro.a": "Flowtime Pro schaltet frei:",
      "faq.pro.projects": "Unbegrenzte Projekte",
      "faq.pro.templates": "Unbegrenzte Quick-Start-Vorlagen",
      "faq.pro.reminders": "Eigene Erinnerungsprofile",
      "faq.pro.pomodoro": "Erweiterte Pomodoro-Steuerung",
      "faq.pro.analytics": "Analytics",
      "faq.pro.appearance": "Pausen-Tracking und Timer-Ring-Farbe",
      "faq.beta.q": "Wo kann ich Flowtime herunterladen?",
      "faq.beta.a": "Flowtime ist im App Store für iPhone und bei Google Play für Android verfügbar.",
      "download.title": "Bereit für deinen Flow?",
      "download.description": "Erfasse deinen Fokus mit einem direkten App-Erlebnis für konzentriertes Arbeiten und tägliche Produktivität.",
      "modal.close": "Schließen",
      "waitlist.close": "News-Anmeldung schließen",
      "waitlist.eyebrow": "News",
      "waitlist.title": "Flowtime-News abonnieren.",
      "waitlist.description": "Erhalte App-Updates, Release Notes und Neuigkeiten zu zukünftigen Funktionen.",
      "waitlist.email": "E-Mail-Adresse",
      "waitlist.placeholder": "E-Mail",
      "waitlist.privacy": "Nur Flowtime-Updates.",
      "waitlist.policy.before": "Du kannst dich jederzeit abmelden. Weitere Details findest du in unserer",
      "waitlist.policy.link": "Datenschutzerklärung",
      "waitlist.notify": "Abonnieren",
      "waitlist.success": "Du hast die News abonniert.",
      "waitlist.thanks": "Danke, dass du Flowtime unterstützt.",
      "footer.copyright": "&copy; 2026 Ava Thalheim",
      "footer.links": "Rechtliches und Support",
      "footer.about": "About Flowtime",
      "footer.privacy": "Datenschutzerklärung",
      "footer.terms": "Nutzungsbedingungen",
      "footer.support": "Support",
      "footer.creator": "avathalheim.dev",
      "footer.coffee": "Kauf mir einen Kaffee",
      "footer.top": "Nach oben"
    },
    fr: {
      "meta.title": "Flowtime - ADHD Focus Timer for Time Blindness",
      "meta.description": "Flowtime est un minuteur de concentration et un outil de time tracking pour Pomodoro, Flow Sessions, projets, rappels, analytics et productivité respectueuse de la vie privée.",
      "meta.og.image.alt": "Aperçu du minuteur de concentration et du time tracker Flowtime",
      "a11y.home": "Accueil Flowtime",
      "a11y.nav": "Navigation principale",
      "language.label": "Langue",
      "nav.toggle": "Ouvrir ou fermer le menu de navigation",
      "nav.about": "About",
      "nav.focus": "Modes de concentration",
      "nav.simplicity": "Simplicité",
      "nav.reports": "Rapports",
      "nav.pricing": "Tarifs",
      "nav.faq": "FAQ",
      "nav.social": "Social",
      "nav.blog": "Blog",
      "nav.compare": "Comparer",
      "nav.guides": "Guides",
      "nav.all": "Toutes les comparaisons",
      "nav.allGuides": "Tous les guides",
      "nav.compare.toggl": "vs Toggl Track",
      "nav.compare.forest": "vs Forest",
      "nav.compare.session": "vs Session",
      "nav.compare.todo": "vs Focus To-Do",
      "nav.compare.focused": "vs Be Focused",
      "nav.guide.noAccount": "Suivi du temps sans compte",
      "nav.guide.offline": "Les meilleurs outils de suivi hors-ligne",
      "nav.guide.overengineered": "Pourquoi les applications de suivi du temps semblent surchargées",
      "nav.guide.flow": "Parfois, le problème n'est pas d'entrer dans le flow, c'est d'en sortir",
      "cta.waitlist": "S'abonner aux nouvelles",
      "cta.waitlist.long": "S'abonner aux nouvelles",
      "cta.appstore": "Telecharger dans l'App Store",
      "cta.playstore": "Disponible sur Google Play",
      "hero.eyebrow": "Perception du temps pour une vraie concentration",
      "hero.title": "Un minuteur pour le TDAH et la notion du temps.",
      "hero.description": "Commencez quand vous devez vous concentrer. Recevez des rappels de concentration quand vous êtes parti trop loin. Bloquez les apps qui détournent votre attention.",
      "hero.category": "Un minuteur de concentration flexible, un time tracker et un bloqueur d'apps pour le travail, les études et les pauses intentionnelles.",
      "hero.benefits": "Avantages de Flowtime",
      "hero.timerCard.title": "Perception du temps",
      "hero.timerCard.text": "Gardez la session visible.",
      "hero.projects.title": "Limites flexibles",
      "hero.projects.text": "Arrêter, continuer ou changer.",
      "hero.history.title": "Rappels de concentration",
      "hero.history.text": "Affiche le temps pendant la session.",
      "hero.privacy.title": "Blocage d'apps",
      "hero.privacy.text": "Réduisez le détournement de l'attention.",
      "hero.rotate": "Faire pivoter le téléphone pour essayer le minuteur",
      "hero.timer.start": "Démarrer le minuteur",
      "hero.timer.resume": "Reprendre le minuteur",
      "hero.timer.pause": "Mettre le minuteur en pause",
      "hero.hint.rotate": "Touchez pour essayer le minuteur",
      "hero.hint.start": "Touchez le minuteur pour démarrer",
      "hero.hint.reset": "Réinitialisé. Touchez pour démarrer",
      "hero.hint.paused": "En pause. Touchez pour reprendre",
      "hero.hint.running": "En cours. Touchez pour mettre en pause",
      "launch.eyebrow": "Annonce de lancement",
      "launch.title": "Disponible sur l'App Store et Google Play",
      "launch.description": "Flowtime est disponible pour iPhone et Android. Merci d'etre la depuis le debut.",
      "focus.eyebrow": "Modes de concentration",
      "focus.title": "Trois façons de se concentrer.",
      "focus.description": "Choisissez le minuteur adapté à votre rythme - suivi classique, sessions Pomodoro structurées ou Flow Sessions avec durée cible.",
      "focus.classic.title": "Minuteur classique",
      "focus.classic.text": "Un suivi du temps simple et intuitif.",
      "focus.pomodoro.title": "Pomodoro",
      "focus.pomodoro.text": "Structurez votre travail en intervalles.",
      "focus.flow.title": "Flow Session",
      "focus.flow.text": "Définissez une durée cible et continuez à travailler.",
      "styles.eyebrow": "Styles",
      "styles.title": "Votre productivité.<br />Votre style.",
      "styles.description": "Passez de Classic à Mono à tout moment.",
      "styles.instruction": "Touchez un côté pour prévisualiser",
      "styles.preview.classic": "Prévisualiser le style Classic",
      "styles.preview.mono": "Prévisualiser le style Mono",
      "simplicity.eyebrow": "Simplicité",
      "simplicity.title": "Démarrer. Arrêter. Changer.",
      "simplicity.description": "Toutes les fonctionnalités dont vous avez besoin, dans une interface simple. Un simple geste ou balayage pour garder le contrôle de votre concentration.",
      "quick.title": "Sélection rapide",
      "quick.description": "Touchez le bouton central pour ouvrir le sélecteur, puis choisissez un projet instantanément.",
      "quick.open": "Ouvrir la sélection rapide. Projet actuel : {project}",
      "quick.close": "Fermer la sélection rapide. Projet actuel : {project}",
      "quick.switch": "Passer à {project}",
      "quick.selected": "Projet sélectionné :",
      "controls.title": "Contrôles du minuteur",
      "controls.description": "Appuyez une fois pour démarrer, à nouveau pour mettre en pause, deux fois pour arrêter.",
      "swipe.title": "Balayer pour changer",
      "swipe.description": "Changez de type de minuteur en balayant vers la gauche ou la droite sur le cercle.",
      "project.work": "Travail",
      "project.gardening": "Jardinage",
      "project.flowtime": "Flowtime",
      "project.testing": "Tests",
      "reports.eyebrow": "Historique et rapports",
      "reports.title": "Explorez votre concentration.",
      "reports.description": "Consultez l'activité du jour par projet, puis utilisez les rapports pour comprendre votre concentration dans le temps.",
      "reports.today": "Aujourd'hui",
      "reports.activity": "Activité de concentration du jour",
      "reports.tracked": "Concentration suivie",
      "reports.break": "Pause",
      "reports.filter": "Filtrer l'activité par projet",
      "reports.prompt": "Touchez un projet pour afficher son activité ci-dessus.",
      "reports.all": "Tous les projets",
      "reports.flexible": "Rapports flexibles",
      "reports.flexible.text": "Triez et comparez la concentration par projet, type de minuteur ou période.",
      "reports.filters": "Filtres des rapports",
      "reports.day": "Jour",
      "reports.week": "Semaine",
      "reports.month": "Mois",
      "reports.project": "Projet",
      "reports.timer.type": "Type de minuteur",
      "time.8": "08:00",
      "time.9": "09:00",
      "time.11": "11:00",
      "time.13": "13:00",
      "time.14": "14:00",
      "time.18": "18:00",
      "pricing.eyebrow": "Tarifs",
      "pricing.title": "Free vs Pro.<br />Limites claires.",
      "pricing.description": "Commencez avec l'essentiel pour travailler concentré. Passez à Pro quand vous avez besoin de plus de projets, de modèles, d'analytics et de contrôle du minuteur.",
      "pricing.free": "Free",
      "pricing.free.title": "Minuteurs essentiels,<br />limites simples.",
      "pricing.free.timers": "Minuteur standard, Flow Session et Pomodoro",
      "pricing.free.projects": "2 projets",
      "pricing.free.templates": "2 modèles Quick Start",
      "pricing.free.reminders": "Rappels et check-ins standard du minuteur",
      "pricing.free.flow": "Durée cible Flow Session et rappel de fin simple",
      "pricing.free.pomodoro": "Préréglage Pomodoro par défaut",
      "pricing.free.selection": "Sélection manuelle du projet",
      "pricing.free.appearance": "Réglages de base du thème et de l'apparence du minuteur",
      "pricing.free.shielding": "Focus shielding et blocage d'apps",
      "pricing.pro.title": "Plus de contrôle,<br />sans complexité.",
      "pricing.pro.projects": "Projets illimités",
      "pricing.pro.templates": "Modèles Quick Start illimités",
      "pricing.pro.timer.templates": "Lancer des modèles Quick Start depuis le minuteur",
      "pricing.pro.launch": "Quick Start au lancement de l'app",
      "pricing.pro.pinned": "Jusqu'à 6 modèles Quick Start épinglés",
      "pricing.pro.reminder.profiles": "Profils de rappel personnalisés",
      "pricing.pro.reminder.controls": "Intervalles, textes et sons de rappel personnalisés",
      "pricing.advanced.pomodoro": "Contrôles Pomodoro avancés",
      "pricing.break.tracking": "Suivi des pauses",
      "pricing.pro.analytics": "Analytics",
      "pricing.timer.ring": "Personnalisation de la couleur de l'anneau du minuteur",
      "social.eyebrow": "Social",
      "social.title": "Suivez la création.",
      "social.description": "Parcourez les dernières mises à jour de Flowtime, les notes de lancement, les avancées de design et les posts sociaux au même endroit.",
      "social.instagram": "Suivre sur Instagram",
      "social.x": "Suivre sur X",
      "social.gallery": "Galerie sociale Flowtime",
      "faq.eyebrow": "FAQ",
      "faq.title": "Questions fréquentes",
      "faq.what.q": "Qu'est-ce que Flowtime ?",
      "faq.what.a": "Flowtime est un minuteur de concentration et un outil de time tracking pour iPhone et Android. Il prend en charge le minuteur standard, les Flow Sessions, Pomodoro, les projets, les rappels, l'historique, les rapports et la productivité personnelle respectueuse de la vie privée.",
      "faq.who.q": "À qui s'adresse Flowtime ?",
      "faq.who.a": "Flowtime s'adresse aux personnes qui veulent comprendre où va leur temps de concentration sans gérer un espace de travail lourd. Il convient aux étudiants, freelances, développeurs, auteurs, chercheurs et à toute personne qui préfère un suivi personnel simple.",
      "faq.adhd.q": "Flowtime est-il utile pour le TDAH ?",
      "faq.adhd.a": "Flowtime peut aider les personnes qui utilisent des reperes temporels externes, des rappels de concentration, des sessions visibles et un changement de projet rapide. Ce n'est pas un outil medical, un outil de diagnostic ni un traitement du TDAH.",
      "faq.pomodoro.diff.q": "En quoi Flowtime diffère-t-il de Pomodoro ?",
      "faq.pomodoro.diff.a": "Pomodoro est une méthode d'intervalles structurée. Flowtime inclut Pomodoro, mais prend aussi en charge les Flow Sessions ouvertes avec durée cible, le suivi classique du temps, la sélection de projets, les rappels et un historique de concentration consultable.",
      "faq.competitors.q": "En quoi Flowtime diffère-t-il de Forest, Toggl ou Session ?",
      "faq.competitors.a": "Flowtime est moins gamifié que Forest, plus léger que les outils d'équipe comme Toggl et plus multiplateforme que les minuteurs centrés sur Apple comme Session. Il se concentre sur le suivi personnel simple, sans configuration lourde basée sur un compte.",
      "faq.free.q": "Flowtime est-il gratuit ?",
      "faq.free.a": "Oui. Free inclut le minuteur standard, Flow Session, Pomodoro, 2 projets et 2 modèles Quick Start. Pro supprime ces limites et ajoute les analytics et plus de contrôle du minuteur.",
      "faq.platform.q": "Quelles plateformes sont compatibles avec Flowtime ?",
      "faq.platform.a": "Flowtime est disponible sur iPhone et Android. L'expérience web reprend le même langage visuel simple et minimal que l'application.",
      "faq.languages.q": "Combien de langues Flowtime prend-il en charge ?",
      "faq.languages.a": "Flowtime prend actuellement en charge 10 langues : anglais, allemand, espagnol, francais, italien, japonais, coreen, neerlandais, polonais et portugais.",
      "faq.flow.q": "Qu'est-ce qu'une Flow Session ?",
      "faq.flow.a": "Les Flow Sessions permettent de définir une durée cible sans intervalles rigides. Elles sont conçues pour un travail concentré et flexible.",
      "faq.pomodoro.q": "Flowtime utilise-t-il la technique Pomodoro ?",
      "faq.pomodoro.a": "Oui. Free inclut le cycle Pomodoro classique 25 / 5, tandis que Pro ajoute des réglages Pomodoro avancés.",
      "faq.privacy.q": "Mes données sont-elles privées ?",
      "faq.privacy.a": "Oui. Vos sessions et projets restent les vôtres. Flowtime place la confidentialité au premier plan et évite le suivi superflu.",
      "faq.pro.q": "Que comprend Flowtime Pro ?",
      "faq.pro.a": "Flowtime Pro débloque :",
      "faq.pro.projects": "Projets illimités",
      "faq.pro.templates": "Modèles Quick Start illimités",
      "faq.pro.reminders": "Profils de rappel personnalisés",
      "faq.pro.pomodoro": "Contrôles Pomodoro avancés",
      "faq.pro.analytics": "Analytics",
      "faq.pro.appearance": "Suivi des pauses et couleur de l'anneau du minuteur",
      "faq.beta.q": "Ou puis-je telecharger Flowtime ?",
      "faq.beta.a": "Flowtime est disponible sur l'App Store pour iPhone et sur Google Play pour Android.",
      "download.title": "Prêt à entrer dans le flow ?",
      "download.description": "Commencez à suivre votre concentration grâce à une expérience simple et directe conçue pour le travail concentré et la productivité quotidienne.",
      "modal.close": "Fermer",
      "waitlist.close": "Fermer l'inscription aux nouvelles",
      "waitlist.eyebrow": "Nouvelles",
      "waitlist.title": "S'abonner aux nouvelles de Flowtime.",
      "waitlist.description": "Recevez les mises a jour de l'app, les notes de version et les futures fonctionnalites.",
      "waitlist.email": "Adresse e-mail",
      "waitlist.placeholder": "E-mail",
      "waitlist.privacy": "Uniquement les nouvelles de Flowtime.",
      "waitlist.policy.before": "Vous pouvez vous désinscrire à tout moment. Pour plus de détails, consultez notre",
      "waitlist.policy.link": "Politique de confidentialité",
      "waitlist.notify": "S'abonner",
      "waitlist.success": "Vous etes abonne.",
      "waitlist.thanks": "Merci de soutenir Flowtime.",
      "footer.copyright": "&copy; 2026 Ava Thalheim",
      "footer.links": "Mentions légales et assistance",
      "footer.privacy": "Politique de confidentialité",
      "footer.terms": "Conditions d'utilisation",
      "footer.support": "Assistance",
      "footer.creator": "avathalheim.dev",
      "footer.coffee": "M'offrir un café",
      "footer.top": "Retour en haut"
    }
  };

  function t(key, values) {
    var value = (copy[locale] && copy[locale][key]) || copy.en[key] || key;
    Object.keys(values || {}).forEach(function (name) {
      value = value.replace(new RegExp("\\{" + name + "\\}", "g"), values[name]);
    });
    return value;
  }


  var staticPageTranslations = {
    en: {
      "positioning.eyebrow": "Does this sound familiar?",
      "positioning.title": "Time can disappear while you work.",
      "positioning.description": "Flowtime is built for the ordinary moments when ADHD time blindness, hyperfocus, rigid Pomodoro intervals, or phone distractions make focused time hard to feel.",
      "positioning.time.title": "Time blindness",
      "positioning.time.text": "You start one task and suddenly hours have passed. A visible ADHD timer and focus reminders make passing time easier to notice.",
      "positioning.hyperfocus.title": "Hyperfocus",
      "positioning.hyperfocus.text": "Getting focused is not always the problem. Sometimes stopping is. Flow Sessions work like a hyperfocus timer, creating flexible boundaries without forcing a break at the wrong moment.",
      "positioning.hijacking.title": "Attention hijacking",
      "positioning.hijacking.text": "One notification becomes twenty minutes of unrelated scrolling. App blocking helps protect intentional focus periods and reduce context switching.",
      "positioning.rigid.title": "Rigid timers",
      "positioning.rigid.text": "Pomodoro can help, but a fixed interval can interrupt your best work. Flowtime supports Pomodoro and a flexible Pomodoro alternative for longer focus sessions.",
      "founder.eyebrow": "Why Flowtime exists",
      "founder.title": "I started using a focus timer to stop focusing.",
      "founder.p1": "I have ADHD, and during intense hyperfocus I can spend weeks mentally stuck on work, features, UI details, or whatever my brain has decided matters. Even when I stop working physically, my brain often keeps going.",
      "founder.p2": "Flowtime began as a way to focus longer. Over time, it also became a way to unfocus on purpose. Sometimes I start a one-hour FlowSession, block distracting apps, and go for a walk with my dog. Knowing the timer is running and the usual apps are unavailable makes it easier to be present instead of repeatedly checking my phone or thinking about work.",
      "founder.p3": "That is not a medical promise. It is one personal reason Flowtime is built around visible time, focus reminders, flexible sessions, and fewer distractions."
    },
    de: {
      "positioning.eyebrow": "Kommt dir das bekannt vor?",
      "positioning.title": "Zeit kann beim Arbeiten verschwinden.",
      "positioning.description": "Flowtime ist f\u00fcr die allt\u00e4glichen Momente gebaut, in denen Aufmerksamkeit abschweift, sich ausdehnt oder woanders hingezogen wird.",
      "positioning.time.title": "Time-Blindness",
      "positioning.time.text": "Du beginnst eine Aufgabe und pl\u00f6tzlich sind Stunden vergangen. Ein sichtbarer Session-Timer und Fokus-Erinnerungen machen vergehende Zeit leichter bemerkbar.",
      "positioning.hyperfocus.title": "Hyperfokus",
      "positioning.hyperfocus.text": "In den Fokus zu kommen ist nicht immer das Problem. Manchmal ist es das Aufh\u00f6ren. Flow Sessions schaffen flexible Grenzen, ohne dich im falschen Moment herauszurei\u00dfen.",
      "positioning.hijacking.title": "Aufmerksamkeits-Hijacking",
      "positioning.hijacking.text": "Eine Benachrichtigung wird zu zwanzig Minuten Scrollen. App-Blocking sch\u00fctzt bewusste Fokuszeiten und reduziert Context Switching.",
      "positioning.rigid.title": "Starre Timer",
      "positioning.rigid.text": "Pomodoro kann helfen, aber ein festes Intervall kann deine beste Arbeit unterbrechen. Flowtime unterst\u00fctzt Pomodoro und flexible Fokus-Sessions.",
      "founder.eyebrow": "Warum es Flowtime gibt",
      "founder.title": "Ich nutze einen Fokus-Timer, um mit dem Fokussieren aufzuh\u00f6ren.",
      "founder.p1": "Ich habe ADHS, und w\u00e4hrend intensiver Hyperfokus-Phasen kann ich wochenlang gedanklich an Arbeit, Features, UI-Details oder dem h\u00e4ngen, was mein Gehirn gerade wichtig findet. Selbst wenn ich k\u00f6rperlich aufh\u00f6re zu arbeiten, macht mein Kopf oft weiter.",
      "founder.p2": "Flowtime begann als M\u00f6glichkeit, l\u00e4nger zu fokussieren. Mit der Zeit wurde es auch eine M\u00f6glichkeit, absichtlich zu ent-fokussieren. Manchmal starte ich eine einst\u00fcndige FlowSession, blockiere ablenkende Apps und gehe mit meinem Hund spazieren. Zu wissen, dass der Timer l\u00e4uft und die \u00fcblichen Apps nicht verf\u00fcgbar sind, macht es leichter, pr\u00e4sent zu sein, statt st\u00e4ndig aufs Handy zu schauen oder an Arbeit zu denken.",
      "founder.p3": "Das ist kein medizinisches Versprechen. Es ist ein pers\u00f6nlicher Grund, warum Flowtime um sichtbare Zeit, Fokus-Erinnerungen, flexible Sessions und weniger Ablenkung gebaut ist."
    },
    fr: {
      "positioning.eyebrow": "Cela vous parle ?",
      "positioning.title": "Le temps peut dispara\u00eetre pendant le travail.",
      "positioning.description": "Flowtime est con\u00e7u pour ces moments ordinaires o\u00f9 l'attention d\u00e9rive, s'\u00e9tire ou se fait happer ailleurs.",
      "positioning.time.title": "Time blindness",
      "positioning.time.text": "Vous commencez une t\u00e2che et soudain des heures ont pass\u00e9. Un minuteur visible et des rappels de concentration rendent le temps qui passe plus perceptible.",
      "positioning.hyperfocus.title": "Hyperfocus",
      "positioning.hyperfocus.text": "Se concentrer n'est pas toujours le probl\u00e8me. Parfois, c'est s'arr\u00eater. Les Flow Sessions cr\u00e9ent des limites flexibles sans imposer une pause au mauvais moment.",
      "positioning.hijacking.title": "D\u00e9tournement de l'attention",
      "positioning.hijacking.text": "Une notification devient vingt minutes de scrolling. Le blocage d'apps aide \u00e0 prot\u00e9ger les p\u00e9riodes de concentration intentionnelle et \u00e0 r\u00e9duire les changements de contexte.",
      "positioning.rigid.title": "Minuteurs rigides",
      "positioning.rigid.text": "Pomodoro peut aider, mais un intervalle fixe peut interrompre votre meilleur travail. Flowtime prend en charge Pomodoro et les sessions flexibles.",
      "founder.eyebrow": "Pourquoi Flowtime existe",
      "founder.title": "J'utilise un minuteur de concentration pour arr\u00eater de me concentrer.",
      "founder.p1": "J'ai un TDAH, et pendant les phases d'hyperfocus intense, je peux rester mentalement bloqu\u00e9e pendant des semaines sur le travail, les fonctionnalit\u00e9s, les d\u00e9tails d'interface ou ce que mon cerveau a d\u00e9cid\u00e9 de trouver important. M\u00eame quand j'arr\u00eate physiquement de travailler, mon cerveau continue souvent.",
      "founder.p2": "Flowtime a commenc\u00e9 comme une fa\u00e7on de me concentrer plus longtemps. Avec le temps, c'est aussi devenu une fa\u00e7on de d\u00e9crocher volontairement. Parfois, je lance une FlowSession d'une heure, je bloque les apps distrayantes et je vais promener mon chien. Savoir que le minuteur tourne et que les apps habituelles sont indisponibles m'aide \u00e0 \u00eatre pr\u00e9sente au lieu de v\u00e9rifier mon t\u00e9l\u00e9phone ou de penser au travail.",
      "founder.p3": "Ce n'est pas une promesse m\u00e9dicale. C'est une raison personnelle pour laquelle Flowtime est construit autour du temps visible, de rappels de concentration, de sessions flexibles et de moins de distractions."
    }
  };

  Object.keys(staticPageTranslations).forEach(function (loc) {
    copy[loc] = copy[loc] || {};
    Object.keys(staticPageTranslations[loc]).forEach(function (key) {
      copy[loc][key] = staticPageTranslations[loc][key];
    });
  });

  function setLocale(nextLocale) {
    if (supported.indexOf(nextLocale) < 0 || nextLocale === locale) {
      return;
    }
    window.localStorage.setItem(storageKey, nextLocale);
    var nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set("lang", nextLocale);
    window.location.assign(nextUrl.toString());
  }

  function setMeta(selector, attribute, value) {
    var element = document.querySelector(selector);
    if (element && value) {
      element.setAttribute(attribute, value);
    }
  }

  function localizeMetadata() {
    if (window.flowtimePreserveTitle) {
      return;
    }

    var title = t("meta.title");
    var description = t("meta.description");
    var imageAlt = t("meta.og.image.alt");

    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:image:alt"]', "content", imageAlt);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image:alt"]', "content", imageAlt);

    var jsonLd = document.querySelector('script[type="application/ld+json"][data-flowtime-schema]');
    if (!jsonLd) {
      return;
    }

    try {
      var data = JSON.parse(jsonLd.textContent);
      var graph = data && data["@graph"] ? data["@graph"] : [];
      graph.forEach(function (node) {
        if (node["@type"] === "SoftwareApplication" || node["@type"] === "WebSite") {
          node.description = description;
        }
        if (node["@type"] === "FAQPage" && Array.isArray(node.mainEntity)) {
          [
            ["faq.what.q", "faq.what.a"],
            ["faq.who.q", "faq.who.a"],
            ["faq.adhd.q", "faq.adhd.a"],
            ["faq.pomodoro.diff.q", "faq.pomodoro.diff.a"],
            ["faq.competitors.q", "faq.competitors.a"]
          ].forEach(function (keys, index) {
            if (!node.mainEntity[index]) {
              return;
            }
            node.mainEntity[index].name = t(keys[0]);
            if (node.mainEntity[index].acceptedAnswer) {
              node.mainEntity[index].acceptedAnswer.text = t(keys[1]);
            }
          });
        }
      });
      jsonLd.textContent = JSON.stringify(data);
    } catch (_error) {
      // Keep static schema if parsing fails.
    }
  }

  function localizeStaticText() {
    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      var key = element.getAttribute("data-i18n");
      var value = t(key);
      if (value && value !== key) {
        element.textContent = value;
      }
    });
  }

  document.documentElement.lang = locale;
  localizeMetadata();
  localizeStaticText();
  window.flowtimeLocale = locale;
  window.t = t;
  window.setFlowtimeLocale = setLocale;
  window.flowtimeAddTranslations = function(loc, dict) {
    if (!copy[loc]) copy[loc] = {};
    for (var k in dict) {
      copy[loc][k] = dict[k];
    }
  };

  function loadAdhdBlogLocalization() {
    if (window.flowtimeAdhdI18nLoading || window.flowtimeAdhdI18nLoaded) {
      return;
    }
    window.flowtimeAdhdI18nLoading = true;
    var adhdScript = document.createElement("script");
    adhdScript.src = (window.flowtimeRoot || "") + "scripts/adhd-i18n-data.js";
    adhdScript.onload = function() {
      window.flowtimeAdhdI18nLoading = false;
      window.flowtimeAdhdI18nLoaded = true;
    };
    adhdScript.onerror = function() { window.flowtimeAdhdI18nLoading = false; };
    document.head.appendChild(adhdScript);
  }
  // Dynamically load blog localization script if needed
  var isBlogPage = !!(document.body.dataset.blogCategory || document.querySelector(".blog-article") || document.querySelector("[data-blog-grid]"));
  if (isBlogPage && locale !== "en" && !window.flowtimeBlogI18nLoading && !window.flowtimeTranslateBlog) {
    window.flowtimeBlogI18nLoading = true;
    var script = document.createElement("script");
    script.src = (window.flowtimeRoot || "") + "scripts/blog-i18n-data.js";
    script.onload = function() {
      window.flowtimeBlogI18nLoading = false;
      if (window.flowtimeTranslateBlog) {
        window.flowtimeTranslateBlog(locale);
      }
      loadAdhdBlogLocalization();
    };
    script.onerror = function() { window.flowtimeBlogI18nLoading = false; };
    document.head.appendChild(script);
  } else if (isBlogPage && locale !== "en") {
    loadAdhdBlogLocalization();
  }
}());
