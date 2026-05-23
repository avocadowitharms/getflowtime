window.renderSection("hero", `
  <section class="hero">
    <div class="hero-visual phone-stage" aria-label="Flowtime in Mono and Classic themes">
      <div class="phone-showcase">
        <figure class="phone-feature">
          <img class="hero-phone" src="assets/phone-mono.png" alt="Flowtime Mono timer displayed on an iPhone" />
          <figcaption class="phone-label">Mono</figcaption>
        </figure>
        <figure class="phone-feature">
          <img class="hero-phone" src="assets/phone-classic.png" alt="Flowtime Classic timer displayed on an iPhone" />
          <figcaption class="phone-label phone-label-classic">Classic</figcaption>
        </figure>
      </div>
    </div>

    <div class="hero-copy">
      <span class="logo-swap app-icon" aria-hidden="true">
        <img class="logo-mono" src="assets/logo.png" alt="" />
        <img class="logo-classic" src="assets/logo-classic.png" alt="" />
      </span>
      <h1>Focus. Your way.</h1>
      <p class="hero-tagline">Tracks your time, your way.</p>
      <p class="hero-description">Flowtime helps you stay focused with beautifully designed timers, projects, and calm productivity tools.</p>
      <div class="actions" aria-label="Download options">
        <a class="button primary" href="#" aria-label="Subscribe to Flowtime"><span>Subscribe</span></a>
        <a class="button secondary" href="#" aria-label="Join the Flowtime TestFlight"><span>Join TestFlight</span></a>
      </div>
      <p class="trustline">Flowtime - Focus. Your way.</p>
    </div>
  </section>
`);
