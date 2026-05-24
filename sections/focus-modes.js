window.renderSection("focus-modes", `
  <section class="section focus-modes">
    <div class="section-heading">
      <p class="eyebrow">Focus modes</p>
      <h2>Three ways to focus.</h2>
      <p>Choose the timer that fits your workflow and the way you think.</p>
    </div>
    <article class="featured-mode">
      <div class="featured-copy">
        <span class="mode-ring pomodoro-ring" aria-hidden="true"></span>
        <h3>Pomodoro</h3>
        <p>Stay structured with work intervals.</p>
      </div>
      <div class="featured-phone">
        <img class="theme-shot-mono" src="assets/pomodoro-mono.png" alt="Pomodoro timer in Mono" />
        <img class="theme-shot-classic" src="assets/pomodoro-classic.png" alt="Pomodoro timer in Classic" />
      </div>
    </article>
    <h3 class="mode-list-title">Choose your flow</h3>
    <div class="mode-grid">
      <article><span class="mode-ring timer-ring"></span><h3>Classic Timer</h3><p>Simple, intuitive time tracking.</p></article>
      <article><span class="mode-ring pomodoro-ring"></span><h3>Pomodoro</h3><p>Stay structured with intervals.</p></article>
      <article><span class="mode-ring flow-ring"></span><h3>Flow Session</h3><p>Set a target and stay immersed.</p></article>
    </div>
  </section>
`);
