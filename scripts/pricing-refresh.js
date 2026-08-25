(function () {
  var copy = {
    en: [
      "Standard Timer", "Standard notifications", "Pomodoro (fixed intervals)", "1 Project", "1 day of History",
      "Flow Sessions", "Flowmodoro", "Custom Pomodoro intervals", "Unlimited Projects", "Unlimited History",
      "App Blocking", "Quick Start Templates", "Reminder Profiles", "UI customization (accent colors)",
      "Reports & Exports", "All future pro features"
    ],
    de: [
      "Standard-Timer", "Standardbenachrichtigungen", "Pomodoro (feste Intervalle)", "1 Projekt", "1 Tag Verlauf",
      "Flow Sessions", "Flowmodoro", "Eigene Pomodoro-Intervalle", "Unbegrenzte Projekte", "Unbegrenzter Verlauf",
      "App-Blocking", "Quick-Start-Vorlagen", "Erinnerungsprofile", "UI-Anpassung (Akzentfarben)",
      "Berichte & Exporte", "Alle zukünftigen Pro-Funktionen"
    ],
    fr: [
      "Minuteur standard", "Notifications standard", "Pomodoro (intervalles fixes)", "1 projet", "1 jour d'historique",
      "Flow Sessions", "Flowmodoro", "Intervalles Pomodoro personnalisés", "Projets illimités", "Historique illimité",
      "Blocage d'apps", "Modèles Quick Start", "Profils de rappel", "Personnalisation de l'interface (couleurs d'accent)",
      "Rapports et exports", "Toutes les futures fonctionnalités Pro"
    ]
  };
  var locale = document.documentElement.lang;
  var labels = copy[locale] || copy.en;
  var labelIndex = 0;
  var plans = [
    [".free-plan ul", [
      "pricing.free.timer",
      "pricing.free.notifications",
      "pricing.free.pomodoro",
      "pricing.free.projects",
      "pricing.free.history"
    ]],
    [".pro-plan ul", [
      "pricing.pro.flow_sessions",
      "pricing.pro.flowmodoro",
      "pricing.pro.pomodoro",
      "pricing.pro.projects",
      "pricing.pro.history",
      "pricing.pro.blocking",
      "pricing.pro.templates",
      "pricing.pro.reminders",
      "pricing.pro.customization",
      "pricing.pro.reports",
      "pricing.pro.future"
    ]]
  ];

  plans.forEach(function (plan) {
    var list = document.querySelector(plan[0]);
    if (!list) return;
    list.replaceChildren.apply(list, plan[1].map(function (key) {
      var item = document.createElement("li");
      item.setAttribute("data-i18n", key);
      item.textContent = labels[labelIndex++];
      return item;
    }));
  });
}());
