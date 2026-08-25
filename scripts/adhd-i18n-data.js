(function () {
  var locale = window.flowtimeLocale || "en";
  var data = {
    de: {
      labels: {
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
      page: {
        metaTitle: "Flowtime Ratgeber - Fokus und Zeitwahrnehmung",
        metaDesc: "Flowtime Ratgeber über Fokus, Hyperfokus, Zeitblindheit, Erinnerungen und bewusste Stopp-Punkte.",
        eyebrow: "Flowtime-Ratgeber",
        title: "Fokus und Zeitwahrnehmung.",
        desc: "Lies über Fokus, Hyperfokus, Zeitwahrnehmung, Aufmerksamkeitswechsel und externe Fokus-Hinweise.",
        searchPlaceholder: "Artikel suchen",
        sortNewest: "Neueste zuerst",
        sortOldest: "Älteste zuerst",
        emptyMsg: "Keine Artikel entsprechen deiner Suche."
      }
    },
    fr: {
      labels: {
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
      page: {
        metaTitle: "Guides Flowtime - concentration et perception du temps",
        metaDesc: "Guides Flowtime sur la concentration, l'hyperfocus, la perception du temps, les rappels et les points d'arrêt intentionnels.",
        eyebrow: "Guides Flowtime",
        title: "Concentration et perception du temps.",
        desc: "Lisez des guides sur la concentration, l'hyperfocus, la perception du temps, les changements d'attention et les repères externes.",
        searchPlaceholder: "Rechercher des articles",
        sortNewest: "Plus récents d'abord",
        sortOldest: "Plus anciens d'abord",
        emptyMsg: "Aucun article ne correspond à votre recherche."
      }
    }
  };

  var dict = data[locale];
  if (!dict) return;

  var translations = {};
  Object.keys(dict.tags).forEach(function (tag) {
    translations["blog.tag." + tag] = dict.tags[tag];
  });
  translations["blog.tag.all"] = dict.labels.all;
  translations["blog.read_article"] = dict.labels.readArticle;
  translations["blog.reading_time"] = dict.labels.readingTime;
  translations["blog.count_single"] = dict.labels.countSingle;
  translations["blog.count_multiple"] = dict.labels.countMultiple;
  if (window.flowtimeAddTranslations) window.flowtimeAddTranslations(locale, translations);

  var page = dict.page;
  document.title = page.metaTitle;
  [
    ['meta[name="description"]', page.metaDesc],
    ['meta[property="og:title"]', page.metaTitle],
    ['meta[property="og:description"]', page.metaDesc],
    ['meta[name="twitter:title"]', page.metaTitle],
    ['meta[name="twitter:description"]', page.metaDesc]
  ].forEach(function (entry) {
    var element = document.querySelector(entry[0]);
    if (element) element.setAttribute("content", entry[1]);
  });

  var eyebrow = document.querySelector(".blog-hero .eyebrow");
  if (eyebrow) eyebrow.textContent = page.eyebrow;
  var title = document.querySelector("#blog-title");
  if (title) title.textContent = page.title;
  var description = document.querySelector(".blog-hero p:not(.eyebrow)");
  if (description) description.textContent = page.desc;
  var search = document.querySelector("[data-blog-search]");
  if (search) search.setAttribute("placeholder", page.searchPlaceholder);
  var sort = document.querySelector("[data-blog-sort]");
  if (sort && sort.options.length > 1) {
    sort.options[0].text = page.sortNewest;
    sort.options[1].text = page.sortOldest;
  }
  var empty = document.querySelector("[data-blog-empty]");
  if (empty) empty.textContent = page.emptyMsg;
  if (window.flowtimeRenderPosts) window.flowtimeRenderPosts();
}());
