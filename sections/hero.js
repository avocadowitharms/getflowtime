window.renderSection("hero", `
  <section class="hero hero-centered">
    <div class="hero-copy hero-copy-centered">
      <h1>Focus. Your way.</h1>
      <p class="hero-description">Flowtime breaks the rigid rules of traditional timers. Designed for deep work.</p>
    </div>

    <div class="theme-drag-stage" aria-label="Drag to preview Mono and Classic themes">
      <div class="theme-phone" data-theme-slider>
        <img class="theme-phone-image theme-phone-image-mono" src="assets/theme-mono.png" alt="Flowtime mono theme" />
        <img class="theme-phone-image theme-phone-image-classic" src="assets/theme-classic.png" alt="Flowtime classic theme" />
        <button class="theme-drag-handle" type="button" aria-label="Drag to switch theme" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50"></button>
      </div>
      <p class="theme-drag-hint">Swipe over the display</p>
    </div>
  </section>
`);