window.renderSection("focus-modes", `
  <section id="focus-modes" class="section focus-modes">
    <div class="section-heading">
      <p class="eyebrow">${window.t("focus.eyebrow")}</p>
      <h2>${window.t("focus.title")}</h2>
      <p>${window.t("focus.description")}</p>
    </div>
    <div class="mode-showcase">
      <article class="featured-mode">
        <div class="featured-copy">
          <span class="mode-ring timer-ring" aria-hidden="true"></span>
          <h3>${window.t("focus.classic.title")}</h3>
          <p>${window.t("focus.classic.text")}</p>
        </div>
        <div class="featured-phone">
          <img class="theme-shot-mono" src="assets/classic-timer-mono.png" alt="Classic Timer in Mono" />
          <img class="theme-shot-classic" src="assets/classic-timer-classic.png" alt="Classic Timer in Classic" />
        </div>
      </article>
      <article class="featured-mode">
        <div class="featured-copy">
          <span class="mode-ring pomodoro-ring" aria-hidden="true"></span>
          <h3>${window.t("focus.pomodoro.title")}</h3>
          <p>${window.t("focus.pomodoro.text")}</p>
        </div>
        <div class="featured-phone">
          <img class="theme-shot-mono" src="assets/pomodoro-mono.png" alt="Pomodoro timer in Mono" />
          <img class="theme-shot-classic" src="assets/pomodoro-classic.png" alt="Pomodoro timer in Classic" />
        </div>
      </article>
      <article class="featured-mode">
        <div class="featured-copy">
          <span class="mode-ring flow-ring" aria-hidden="true"></span>
          <h3>${window.t("focus.flow.title")}</h3>
          <p>${window.t("focus.flow.text")}</p>
        </div>
        <div class="featured-phone">
          <img class="theme-shot-mono" src="assets/flow-session-mono.png" alt="Flow Session in Mono" />
          <img class="theme-shot-classic" src="assets/flow-session-classic.png" alt="Flow Session in Classic" />
        </div>
      </article>
    </div>
  </section>
`);
