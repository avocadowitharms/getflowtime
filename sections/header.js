window.renderSection("site-header", `
  <header class="site-header" aria-label="Flowtime">
    <a class="brand" href="#" aria-label="${window.t("a11y.home")}">
      <span class="logo-swap brand-logo">
        <img class="logo-mono" src="assets/logo.png" alt="" />
        <img class="logo-classic" src="assets/logo-classic.png" alt="" />
      </span>
      <span>Flowtime&deg;</span>
    </a>
    <nav class="site-nav" aria-label="${window.t("a11y.nav")}">
      <a href="#focus-modes">${window.t("nav.focus")}</a>
      <a href="#reports">${window.t("nav.reports")}</a>
      <a href="#pricing">${window.t("nav.pricing")}</a>
      <a href="#faq">${window.t("nav.faq")}</a>
    </nav>
    <div class="locale-switch" role="group" aria-label="${window.t("language.label")}">
      <button type="button" data-locale="en" aria-pressed="${window.flowtimeLocale === "en"}">EN</button>
      <button type="button" data-locale="de" aria-pressed="${window.flowtimeLocale === "de"}">DE</button>
      <button type="button" data-locale="fr" aria-pressed="${window.flowtimeLocale === "fr"}">FR</button>
    </div>
    <button class="button primary header-cta" type="button" data-waitlist-open>
      ${window.t("cta.waitlist")}
    </button>
  </header>
`);

(function () {
  document.querySelectorAll("[data-locale]").forEach(function (button) {
    button.addEventListener("click", function () {
      window.setFlowtimeLocale(button.dataset.locale);
    });
  });
}());
