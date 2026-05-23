window.renderSection("hero", `
  <section class="hero">
    <div class="hero-visual phone-stage" aria-label="Flowtime in Mono and Classic themes">
      <h2 class="mobile-style-title">Select your style.</h2>
      <div class="phone-showcase">
        <button class="phone-feature" type="button" data-theme-preview="mono" aria-label="Select Mono theme" aria-pressed="true">
          <img class="hero-phone" src="assets/phone-mono.png" alt="Flowtime Mono timer displayed on an iPhone" />
          <span class="phone-label">Mono</span>
        </button>
        <button class="phone-feature" type="button" data-theme-preview="classic" aria-label="Select Classic theme" aria-pressed="false">
          <img class="hero-phone" src="assets/phone-classic.png" alt="Flowtime Classic timer displayed on an iPhone" />
          <span class="phone-label phone-label-classic">Classic</span>
        </button>
      </div>
    </div>

    <div class="hero-copy">
      <h1>Built to help you focus.</h1>
      <p class="hero-tagline">Time tracking without clutter.</p>
      <p class="hero-description">Flowtime gives you calm timers, simple projects, and clear focus history — without turning productivity into pressure.</p>
      <div class="actions" aria-label="Download options">
        <a class="button primary" href="#" aria-label="Download Flowtime"><span>Get Flowtime</span></a>
        <a class="button secondary" href="#" aria-label="Join the Flowtime TestFlight"><span>Join TestFlight</span></a>
      </div>
      <p class="trustline">Minimal focus tracking for iPhone</p>
    </div>
  </section>
`);
