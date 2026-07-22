window.renderSection("focus-modes", `
  <section id="focus-modes" class="section focus-modes">
    <div class="section-heading">
      <p class="eyebrow" data-i18n="focus.eyebrow">${window.t("focus.eyebrow")}</p>
      <h2 data-i18n="focus.title">${window.t("focus.title")}</h2>
      <p data-i18n="focus.description">${window.t("focus.description")}</p>
    </div>
    <div class="mode-showcase">
      <article class="featured-mode">
        <div class="featured-copy">
          <span class="mode-ring timer-ring" aria-hidden="true"></span>
          <h3 data-i18n="focus.classic.title">${window.t("focus.classic.title")}</h3>
          <p data-i18n="focus.classic.text">${window.t("focus.classic.text")}</p>
        </div>
        <div class="featured-phone">
          <img class="theme-shot" src="assets/classic-timer-mono-opt.webp" data-theme-mono="assets/classic-timer-mono-opt.webp" data-theme-classic="assets/classic-timer-classic-opt.webp" alt="Classic Timer in Flowtime" width="1320" height="2868" loading="lazy" decoding="async" />
        </div>
      </article>
      <article class="featured-mode">
        <div class="featured-copy">
          <span class="mode-ring pomodoro-ring" aria-hidden="true"></span>
          <h3 data-i18n="focus.pomodoro.title">${window.t("focus.pomodoro.title")}</h3>
          <p data-i18n="focus.pomodoro.text">${window.t("focus.pomodoro.text")}</p>
        </div>
        <div class="featured-phone">
          <img class="theme-shot" src="assets/pomodoro-mono-opt.webp" data-theme-mono="assets/pomodoro-mono-opt.webp" data-theme-classic="assets/pomodoro-classic-opt.webp" alt="Pomodoro timer in Flowtime" width="1320" height="2868" loading="lazy" decoding="async" />
        </div>
      </article>
      <article class="featured-mode">
        <div class="featured-copy">
          <span class="mode-ring timer-ring" aria-hidden="true"></span>
          <h3 data-i18n="focus.flowmodoro.title">${window.t("focus.flowmodoro.title")}</h3>
          <p data-i18n="focus.flowmodoro.text">${window.t("focus.flowmodoro.text")}</p>
        </div>
        <div class="featured-phone">
          <img class="theme-shot" src="assets/classic-timer-mono-opt.webp" data-theme-mono="assets/classic-timer-mono-opt.webp" data-theme-classic="assets/classic-timer-classic-opt.webp" alt="Flowmodoro timer in Flowtime" width="1320" height="2868" loading="lazy" decoding="async" />
        </div>
      </article>
      <article class="featured-mode">
        <div class="featured-copy">
          <span class="mode-ring flow-ring" aria-hidden="true"></span>
          <h3 data-i18n="focus.flow.title">${window.t("focus.flow.title")}</h3>
          <p data-i18n="focus.flow.text">${window.t("focus.flow.text")}</p>
        </div>
        <div class="featured-phone">
          <img class="theme-shot" src="assets/flow-session-mono-opt.webp" data-theme-mono="assets/flow-session-mono-opt.webp" data-theme-classic="assets/flow-session-classic-opt.webp" alt="Flow Session in Flowtime" width="1320" height="2868" loading="lazy" decoding="async" />
        </div>
      </article>
    </div>
  </section>
`);
