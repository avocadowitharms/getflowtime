(function () {
  var storageKey = "flowtime-locale";
  var supported = ["en", "de", "fr"];
  var requested = new URLSearchParams(window.location.search).get("lang");
  var saved = window.localStorage.getItem(storageKey);
  var locale = supported.indexOf(requested) >= 0
    ? requested
    : (supported.indexOf(saved) >= 0 ? saved : "en");
  window.localStorage.setItem(storageKey, locale);
  var page = document.body.dataset.document;
  var copy = {
    en: {
      common: {
        home: "Back to Flowtime",
        language: "Language",
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        support: "Support",
        copyright: "&copy; 2026 Ava Thalheim",
        creator: "avathalheim.dev",
        updated: "Last updated: May 25, 2026",
        email: "Email support"
      },
      privacy: {
        title: "Privacy Policy",
        intro: "Flowtime is designed for focused work without unnecessary tracking. Your timer and project data remain on your device.",
        sections: [
          ["Privacy first", "<p>Flowtime respects your privacy. We do not sell your data, use it for advertising, or track you across apps or websites.</p>"],
          ["Data stored locally", "<p>Flowtime may store the following information on your device:</p><ul><li>Projects you create</li><li>Time tracking sessions</li><li>Focus mode settings</li><li>App preferences</li><li>Flowtime Pro access status</li></ul><p>This data is stored locally on your device and is not sent to Flowtime servers.</p>"],
          ["Purchases", "<p>Flowtime may use Apple App Store or Google Play in-app purchase services to process Flowtime Pro purchases and subscriptions. Payment and transaction processing are handled by the store through which you make the purchase. Flowtime stores Pro access status locally so purchased features can be made available in the app.</p>"],
          ["Data sharing", "<p>Flowtime does not share your tracking data with third parties for advertising or tracking purposes. Apple and Google may process purchase information under their own privacy policies when you choose to make or restore a purchase.</p>"],
          ["Deletion and choices", "<p>You can delete locally stored tracking data from the Data screen in Flowtime settings. You can manage or cancel a recurring Flowtime Pro subscription through your Apple App Store or Google Play subscription settings.</p>"],
          ["Contact", "<p>For privacy questions, contact <a href=\"mailto:avocadowitharms@gmail.com\">avocadowitharms@gmail.com</a>.</p>"]
        ]
      },
      terms: {
        title: "Purchase Terms",
        intro: "Clear terms for Flowtime Pro subscriptions and one-time purchases made through the app stores.",
        sections: [
          ["Flowtime Pro", "<p>Flowtime Pro unlocks premium features in the Flowtime app. Available plans and prices are shown in the app using information provided by Apple App Store or Google Play for your store region.</p>"],
          ["Subscriptions", "<p>Monthly and yearly Flowtime Pro subscriptions renew automatically at the applicable displayed price and billing period unless canceled before renewal through the subscription settings of the store used for purchase.</p><p>You can manage or cancel subscriptions through your Apple App Store or Google Play account settings. Cancellation takes effect according to the store terms that apply to your transaction.</p>"],
          ["One-time purchases", "<p>A Founders Lifetime plan, when available, is a one-time purchase and does not automatically renew.</p>"],
          ["Store terms", "<p>Purchases are processed by Apple App Store or Google Play and remain subject to the applicable store terms, refund rules, and account requirements.</p>"],
          ["Contact", "<p>For purchase questions, contact <a href=\"mailto:avocadowitharms@gmail.com\">avocadowitharms@gmail.com</a>.</p>"]
        ]
      },
      support: {
        title: "Support",
        intro: "Need help with Flowtime? Send us an email and we will help you get back to focus.",
        sections: [
          ["Contact support", "<p>If you experience issues or have questions about Flowtime, contact us at <a href=\"mailto:avocadowitharms@gmail.com\">avocadowitharms@gmail.com</a>.</p><p>We usually respond within a few business days.</p>"]
        ]
      }
    },
    de: {
      common: {
        home: "Zurück zu Flowtime",
        language: "Sprache",
        privacy: "Datenschutzerklärung",
        terms: "Nutzungsbedingungen",
        support: "Support",
        copyright: "&copy; 2026 Ava Thalheim",
        creator: "avathalheim.dev",
        updated: "Zuletzt aktualisiert: 25. Mai 2026",
        email: "Support kontaktieren"
      },
      privacy: {
        title: "Datenschutzerklärung",
        intro: "Flowtime ist für konzentriertes Arbeiten ohne unnötiges Tracking entwickelt. Deine Timer- und Projektdaten bleiben auf deinem Gerät.",
        sections: [
          ["Datenschutz zuerst", "<p>Flowtime respektiert deine Privatsphäre. Wir verkaufen deine Daten nicht, nutzen sie nicht für Werbung und verfolgen dich nicht über Apps oder Websites hinweg.</p>"],
          ["Lokal gespeicherte Daten", "<p>Flowtime kann die folgenden Informationen auf deinem Gerät speichern:</p><ul><li>Von dir erstellte Projekte</li><li>Zeiterfassungs-Sessions</li><li>Einstellungen der Fokusmodi</li><li>App-Einstellungen</li><li>Status deines Flowtime Pro-Zugangs</li></ul><p>Diese Daten werden lokal auf deinem Gerät gespeichert und nicht an Flowtime-Server gesendet.</p>"],
          ["Käufe", "<p>Flowtime kann In-App-Kaufdienste des Apple App Store oder von Google Play verwenden, um Käufe und Abonnements von Flowtime Pro abzuwickeln. Zahlung und Transaktionsverarbeitung erfolgen über den Store, in dem du kaufst. Flowtime speichert deinen Pro-Zugangsstatus lokal, damit gekaufte Funktionen verfügbar sind.</p>"],
          ["Weitergabe von Daten", "<p>Flowtime gibt deine Tracking-Daten nicht zu Werbe- oder Trackingzwecken an Dritte weiter. Apple und Google können Kaufinformationen gemäß ihren eigenen Datenschutzrichtlinien verarbeiten, wenn du einen Kauf tätigst oder wiederherstellst.</p>"],
          ["Löschung und Auswahlmöglichkeiten", "<p>Du kannst lokal gespeicherte Tracking-Daten im Datenbereich der Flowtime-Einstellungen löschen. Ein wiederkehrendes Flowtime Pro-Abonnement kannst du über die Abonnementeinstellungen im Apple App Store oder bei Google Play verwalten oder kündigen.</p>"],
          ["Kontakt", "<p>Bei Fragen zum Datenschutz kontaktiere <a href=\"mailto:avocadowitharms@gmail.com\">avocadowitharms@gmail.com</a>.</p>"]
        ]
      },
      terms: {
        title: "Kaufbedingungen",
        intro: "Klare Bedingungen für Flowtime Pro-Abonnements und einmalige Käufe über die App Stores.",
        sections: [
          ["Flowtime Pro", "<p>Flowtime Pro schaltet Premiumfunktionen in der Flowtime-App frei. Verfügbare Tarife und Preise werden in der App anhand der Angaben des Apple App Store oder von Google Play für deine Store-Region angezeigt.</p>"],
          ["Abonnements", "<p>Monatliche und jährliche Flowtime Pro-Abonnements verlängern sich automatisch zum angezeigten Preis und Abrechnungszeitraum, sofern sie nicht vor der Verlängerung in den Abonnementeinstellungen des für den Kauf verwendeten Stores gekündigt werden.</p><p>Du kannst Abonnements über deine Kontoeinstellungen im Apple App Store oder bei Google Play verwalten oder kündigen. Die Kündigung gilt entsprechend den Store-Bedingungen für deine Transaktion.</p>"],
          ["Einmalige Käufe", "<p>Ein Founders Lifetime-Tarif ist, sofern verfügbar, ein einmaliger Kauf und verlängert sich nicht automatisch.</p>"],
          ["Store-Bedingungen", "<p>Käufe werden über den Apple App Store oder Google Play abgewickelt und unterliegen den geltenden Store-Bedingungen, Erstattungsregeln und Kontoanforderungen.</p>"],
          ["Kontakt", "<p>Bei Fragen zu Käufen kontaktiere <a href=\"mailto:avocadowitharms@gmail.com\">avocadowitharms@gmail.com</a>.</p>"]
        ]
      },
      support: {
        title: "Support",
        intro: "Du brauchst Hilfe mit Flowtime? Schreib uns eine E-Mail, damit du schnell wieder fokussiert arbeiten kannst.",
        sections: [
          ["Support kontaktieren", "<p>Wenn du Probleme hast oder Fragen zu Flowtime hast, kontaktiere uns unter <a href=\"mailto:avocadowitharms@gmail.com\">avocadowitharms@gmail.com</a>.</p><p>Wir antworten normalerweise innerhalb weniger Werktage.</p>"]
        ]
      }
    },
    fr: {
      common: {
        home: "Retour à Flowtime",
        language: "Langue",
        privacy: "Politique de confidentialité",
        terms: "Conditions d'utilisation",
        support: "Assistance",
        copyright: "&copy; 2026 Ava Thalheim",
        creator: "avathalheim.dev",
        updated: "Dernière mise à jour : 25 mai 2026",
        email: "Contacter l'assistance"
      },
      privacy: {
        title: "Politique de confidentialité",
        intro: "Flowtime est conçu pour vous aider à vous concentrer sans suivi superflu. Vos données de minuterie et de projets restent sur votre appareil.",
        sections: [
          ["La confidentialité avant tout", "<p>Flowtime respecte votre vie privée. Nous ne vendons pas vos données, ne les utilisons pas à des fins publicitaires et ne vous suivons pas entre différentes applications ou sites web.</p>"],
          ["Données stockées localement", "<p>Flowtime peut stocker les informations suivantes sur votre appareil :</p><ul><li>Les projets que vous créez</li><li>Les sessions de suivi du temps</li><li>Les réglages des modes de concentration</li><li>Les préférences de l'application</li><li>Le statut d'accès à Flowtime Pro</li></ul><p>Ces données sont stockées localement sur votre appareil et ne sont pas envoyées aux serveurs de Flowtime.</p>"],
          ["Achats", "<p>Flowtime peut utiliser les services d'achat intégré de l'Apple App Store ou de Google Play pour traiter les achats et abonnements Flowtime Pro. Le paiement et le traitement de la transaction sont gérés par la boutique utilisée pour l'achat. Flowtime stocke localement le statut d'accès Pro afin de rendre disponibles les fonctionnalités achetées.</p>"],
          ["Partage des données", "<p>Flowtime ne partage pas vos données de suivi avec des tiers à des fins publicitaires ou de suivi. Apple et Google peuvent traiter les informations d'achat selon leurs propres politiques de confidentialité lorsque vous effectuez ou restaurez un achat.</p>"],
          ["Suppression et choix", "<p>Vous pouvez supprimer les données de suivi enregistrées localement depuis l'écran Données des réglages Flowtime. Vous pouvez gérer ou annuler un abonnement Flowtime Pro récurrent depuis les réglages d'abonnement de l'Apple App Store ou de Google Play.</p>"],
          ["Contact", "<p>Pour toute question relative à la confidentialité, contactez <a href=\"mailto:avocadowitharms@gmail.com\">avocadowitharms@gmail.com</a>.</p>"]
        ]
      },
      terms: {
        title: "Conditions d'achat",
        intro: "Des conditions claires pour les abonnements Flowtime Pro et les achats uniques effectués via les boutiques d'applications.",
        sections: [
          ["Flowtime Pro", "<p>Flowtime Pro déverrouille les fonctionnalités premium de l'application Flowtime. Les formules et prix disponibles sont affichés dans l'application à partir des informations fournies par l'Apple App Store ou Google Play pour votre région.</p>"],
          ["Abonnements", "<p>Les abonnements mensuels et annuels Flowtime Pro sont renouvelés automatiquement au prix et pour la période de facturation affichés, sauf annulation avant le renouvellement depuis les réglages d'abonnement de la boutique utilisée pour l'achat.</p><p>Vous pouvez gérer ou annuler vos abonnements depuis les réglages de votre compte Apple App Store ou Google Play. L'annulation prend effet conformément aux conditions de la boutique applicables à votre transaction.</p>"],
          ["Achats uniques", "<p>Une formule Founders Lifetime, lorsqu'elle est disponible, constitue un achat unique et n'est pas renouvelée automatiquement.</p>"],
          ["Conditions des boutiques", "<p>Les achats sont traités par l'Apple App Store ou Google Play et restent soumis aux conditions, règles de remboursement et exigences de compte applicables de la boutique.</p>"],
          ["Contact", "<p>Pour toute question relative aux achats, contactez <a href=\"mailto:avocadowitharms@gmail.com\">avocadowitharms@gmail.com</a>.</p>"]
        ]
      },
      support: {
        title: "Assistance",
        intro: "Besoin d'aide avec Flowtime ? Envoyez-nous un e-mail et nous vous aiderons à retrouver votre concentration.",
        sections: [
          ["Contacter l'assistance", "<p>Si vous rencontrez un problème ou avez une question au sujet de Flowtime, contactez-nous à l'adresse <a href=\"mailto:avocadowitharms@gmail.com\">avocadowitharms@gmail.com</a>.</p><p>Nous répondons généralement sous quelques jours ouvrés.</p>"]
        ]
      }
    }
  };
  var language = copy[locale];
  var content = language[page] || language.support;
  var root = document.querySelector("[data-document-root]");

  function localeButton(code) {
    return '<button type="button" data-locale="' + code + '" aria-pressed="' + String(locale === code) + '">' + code.toUpperCase() + "</button>";
  }

  function sectionMarkup(section) {
    return '<section class="document-section"><h2>' + section[0] + "</h2>" + section[1] + "</section>";
  }

  function pageLink(file, label, pageName) {
    var active = page === pageName ? ' aria-current="page"' : "";
    return '<a href="' + file + '?lang=' + locale + '"' + active + ">" + label + "</a>";
  }

  document.documentElement.lang = locale;
  document.title = "Flowtime - " + content.title;
  root.innerHTML = [
    '<header class="site-header document-header" aria-label="Flowtime">',
    '<a class="brand" href="../index.html?lang=' + locale + '" aria-label="Flowtime">',
    '<span class="logo-swap brand-logo"><img class="logo-mono" src="../assets/logo.png" alt="" /><img class="logo-classic" src="../assets/logo-classic.png" alt="" /></span>',
    "<span>Flowtime&deg;</span></a>",
    '<a class="document-home" href="../index.html?lang=' + locale + '">' + language.common.home + "</a>",
    '<div class="locale-switch" role="group" aria-label="' + language.common.language + '">' + localeButton("en") + localeButton("de") + localeButton("fr") + "</div>",
    "</header>",
    '<main class="document-main"><div class="document-title"><p class="eyebrow">Flowtime</p><h1>' + content.title + "</h1><p>" + content.intro + "</p></div>",
    '<article class="document-card">' + content.sections.map(sectionMarkup).join("") + '<p class="document-updated">' + language.common.updated + "</p>",
    page === "support" ? '<a class="button primary support-contact" href="mailto:avocadowitharms@gmail.com">' + language.common.email + ' <span aria-hidden="true">&rarr;</span></a>' : "",
    "</article></main>",
    '<footer class="document-footer"><span>' + language.common.copyright + "</span><nav>",
    pageLink("privacy-policy.html", language.common.privacy, "privacy"),
    pageLink("terms-of-use.html", language.common.terms, "terms"),
    pageLink("support.html", language.common.support, "support"),
    '<a href="https://avathalheim.dev/" target="_blank" rel="noopener noreferrer">' + language.common.creator + "</a>",
    "</nav></footer>"
  ].join("");

  document.querySelectorAll("[data-locale]").forEach(function (button) {
    button.addEventListener("click", function () {
      var nextLocale = button.dataset.locale;
      if (nextLocale === locale) {
        return;
      }
      window.localStorage.setItem(storageKey, nextLocale);
      var nextUrl = new URL(window.location.href);
      nextUrl.searchParams.set("lang", nextLocale);
      window.location.assign(nextUrl.toString());
    });
  });
}());
