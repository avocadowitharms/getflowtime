window.renderSection("site-footer", `
  <footer>
    <span>${window.t("footer.copyright")}</span>
    <nav class="footer-links" aria-label="${window.t("footer.links")}">
      <a href="docs/privacy-policy.html">${window.t("footer.privacy")}</a>
      <a href="docs/terms-of-use.html">${window.t("footer.terms")}</a>
      <a href="docs/support.html">${window.t("footer.support")}</a>
    </nav>
    <div class="footer-actions">
      <a class="coffee-link" href="https://buymeacoffee.com/avocadowita" target="_blank" rel="noopener noreferrer">
        <svg class="material-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-1h2c2.21 0 4-1.79 4-4V7c0-2.21-1.79-4-4-4zm-4 10c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5h10v8zm4-3h-2V5h2c1.1 0 2 .9 2 2v1c0 1.1-.9 2-2 2zM4 19h16v2H4v-2z"/></svg>
        <span>${window.t("footer.coffee")}</span>
      </a>
      <a class="top-link" href="#top">${window.t("footer.top")} <span aria-hidden="true">&uarr;</span></a>
    </div>
  </footer>
`);
