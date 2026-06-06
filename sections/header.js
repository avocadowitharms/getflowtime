(function () {
  var root = window.flowtimeRoot || "";
  var headerCta = window.flowtimeNoWaitlist
    ? '<a class="button primary header-cta" href="' + root + 'index.html#download-panel">' + window.t("cta.waitlist") + "</a>"
    : '<button class="button primary header-cta" type="button" data-waitlist-open>' + window.t("cta.waitlist") + "</button>";

  window.renderSection("site-header", `
  <header class="site-header" aria-label="Flowtime">
    <a class="brand" href="${root}index.html" aria-label="${window.t("a11y.home")}">
      <span class="logo-swap brand-logo">
        <img class="logo-mono" src="${root}assets/logo.png" alt="" />
        <img class="logo-classic" src="${root}assets/logo-classic.png" alt="" />
      </span>
      <span>Flowtime&deg;</span>
    </a>
    <nav class="site-nav" aria-label="${window.t("a11y.nav")}">
      <a href="${root}index.html#focus-modes">${window.t("nav.focus")}</a>
      <a href="${root}index.html#reports">${window.t("nav.reports")}</a>
      <a href="${root}index.html#pricing">${window.t("nav.pricing")}</a>
      <a href="${root}index.html#faq">${window.t("nav.faq")}</a>
      <a href="${root}blog/index.html">${window.t("nav.blog")}</a>
    </nav>
    <div class="locale-switch" role="group" aria-label="${window.t("language.label")}">
      <button type="button" data-locale="en" aria-pressed="${window.flowtimeLocale === "en"}">EN</button>
      <button type="button" data-locale="de" aria-pressed="${window.flowtimeLocale === "de"}">DE</button>
      <button type="button" data-locale="fr" aria-pressed="${window.flowtimeLocale === "fr"}">FR</button>
    </div>
    ${headerCta}
  </header>
`);

  document.querySelectorAll("[data-locale]").forEach(function (button) {
    button.addEventListener("click", function () {
      window.setFlowtimeLocale(button.dataset.locale);
    });
  });
}());
