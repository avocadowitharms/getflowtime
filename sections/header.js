window.renderSection("site-header", `
  <header class="site-header" aria-label="Flowtime">
    <a class="brand" href="#">
      <span class="logo-swap brand-logo">
        <img class="logo-mono" src="assets/logo.png" alt="Flowtime logo" />
        <img class="logo-classic" src="assets/logo-classic.png" alt="" aria-hidden="true" />
      </span>
      <span>Flowtime&deg;</span>
    </a>
    <button class="theme-switch" id="theme-switch" type="button" aria-label="Switch to Classic theme" aria-pressed="false">
      <span>Mono</span>
      <span class="switch-track" aria-hidden="true"><span class="switch-thumb"></span></span>
      <span>Classic</span>
    </button>
  </header>
`);
