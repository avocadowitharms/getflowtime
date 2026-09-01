(function () {
  var root = window.flowtimeRoot || "";
  var instagramUrl = window.flowtimeInstagramUrl || "https://www.instagram.com/flowtimefocus/";

  window.renderSection("site-footer", `
  <footer>
    <span>${window.t("footer.copyright")}</span>
    <nav class="footer-links" aria-label="${window.t("footer.links")}">
      <a href="${root}about-flowtime/index.html">${window.t("footer.about")}</a>
      <a href="${root}press/index.html">Press Kit</a>
      <a href="https://gugus.software/privacy/flowtime/">${window.t("footer.privacy")}</a>
      <a href="https://gugus.software/terms/flowtime/">${window.t("footer.terms")}</a>
      <a href="${root}docs/support.html">${window.t("footer.support")}</a>
      <a href="https://gugus.software/" target="_blank" rel="noopener noreferrer">${window.t("footer.creator")}</a>
      <span class="footer-love">L ❤️</span>
    </nav>
    <div class="footer-actions">
      <a class="social-icon-link instagram-icon-link" href="${instagramUrl}" target="_blank" rel="noopener noreferrer" aria-label="${window.t("social.instagram")}" data-analytics-event="instagram_click" data-analytics-location="footer">
        <svg class="material-svg" viewBox="0 0 24 24" aria-hidden="true">
          <defs>
            <linearGradient id="instagram-icon-gradient" x1="4" y1="22" x2="20" y2="2" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#ffdc80"/>
              <stop offset="0.32" stop-color="#f77737"/>
              <stop offset="0.6" stop-color="#e1306c"/>
              <stop offset="1" stop-color="#833ab4"/>
            </linearGradient>
          </defs>
          <path fill="url(#instagram-icon-gradient)" d="M7 2h10c2.76 0 5 2.24 5 5v10c0 2.76-2.24 5-5 5H7c-2.76 0-5-2.24-5-5V7c0-2.76 2.24-5 5-5zm0 2c-1.65 0-3 1.35-3 3v10c0 1.65 1.35 3 3 3h10c1.65 0 3-1.35 3-3V7c0-1.65-1.35-3-3-3H7zm5 3.5A4.5 4.5 0 1 1 12 16.5 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 12 14.5 2.5 2.5 0 0 0 12 9.5zM17.75 6.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/>
        </svg>
      </a>
      <a class="top-link" href="#top">${window.t("footer.top")} <span aria-hidden="true">&uarr;</span></a>
    </div>
  </footer>
`);
}());
