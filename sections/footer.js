(function () {
  const footerHtml = `
    <footer class="campaign-footer">
      <div class="campaign-footer-inner">
        <div class="footer-brand">
          <h4>Flowtime</h4>
          <p>Made by <a href="https://gugus.software/" target="_blank" rel="noopener">gugus.</a><br>software &amp; things</p>
        </div>
        <nav class="footer-nav" aria-label="Explore Flowtime">
          <a href="/#focus-modes">Features</a>
          <a href="/learn/">Learn</a>
          <a href="/updates/">Follow the build</a>
          <a href="/press/">Press</a>
          <a href="/pricing/">Pricing</a>
          <a href="/about-flowtime/">About Flowtime</a>
          <a href="/support/">Support</a>
          <a href="https://gugus.software/privacy/flowtime/">Privacy</a>
          <a href="https://gugus.software/terms/flowtime/">Terms</a>
          <a href="/download/">Download</a>
        </nav>
        <div class="footer-connect">
          <a href="https://x.com/Flowtime_app" target="_blank" rel="noopener">X ↗</a>
          <a href="https://www.instagram.com/flowtimefocus/" target="_blank" rel="noopener">Instagram ↗</a>
          <a href="https://discord.gg/4P4QudduWm" target="_blank" rel="noopener">Discord ↗</a>
          <div class="footer-locales" aria-label="Language selector">
            <button type="button" data-locale="en">EN</button>
            <button type="button" data-locale="de">DE</button>
            <button type="button" data-locale="fr">FR</button>
          </div>
          <a href="#top" style="margin-top: 8px;">Back to top ↑</a>
        </div>
      </div>
    </footer>
  `;

  window.renderSection('site-footer', footerHtml);

  document.querySelectorAll('[data-locale]').forEach((b) => {
    b.setAttribute('aria-pressed', String(window.flowtimeLocale === b.dataset.locale));
    b.addEventListener('click', () => {
      if (typeof window.setFlowtimeLocale === 'function') {
        window.setFlowtimeLocale(b.dataset.locale);
      }
    });
  });
}());
