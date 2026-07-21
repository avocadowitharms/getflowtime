window.renderSection("pricing", `
  <section id="pricing" class="section pricing">
    <div class="section-heading">
      <p class="eyebrow" data-i18n="pricing.eyebrow">${window.t("pricing.eyebrow")}</p>
      <h2 data-i18n="pricing.title">${window.t("pricing.title")}</h2>
      <p data-i18n="pricing.description">${window.t("pricing.description")}</p>
    </div>
    <div class="price-grid">
      <article class="price-card free-plan">
        <div class="price-copy">
          <span class="plan-pill" data-i18n="pricing.free">${window.t("pricing.free")}</span>
          <h3 data-i18n="pricing.free.title">${window.t("pricing.free.title")}</h3>
          <ul>
            <li data-i18n="pricing.free.timers">${window.t("pricing.free.timers")}</li>
            <li data-i18n="pricing.free.projects">${window.t("pricing.free.projects")}</li>
            <li data-i18n="pricing.free.templates">${window.t("pricing.free.templates")}</li>
            <li data-i18n="pricing.free.reminders">${window.t("pricing.free.reminders")}</li>
            <li data-i18n="pricing.free.flow">${window.t("pricing.free.flow")}</li>
            <li data-i18n="pricing.free.pomodoro">${window.t("pricing.free.pomodoro")}</li>
            <li data-i18n="pricing.free.selection">${window.t("pricing.free.selection")}</li>
            <li data-i18n="pricing.free.appearance">${window.t("pricing.free.appearance")}</li>
            <li data-i18n="pricing.free.shielding">${window.t("pricing.free.shielding")}</li>
          </ul>
        </div>
        <div class="price-screen">
          <img class="theme-shot" src="assets/classic-timer-mono-opt.webp" data-theme-mono="assets/classic-timer-mono-opt.webp" data-theme-classic="assets/classic-timer-classic-opt.webp" alt="Classic Timer in Flowtime" width="1320" height="2868" loading="lazy" decoding="async" />
        </div>
      </article>
      <article class="price-card pro-plan">
        <div class="price-copy">
          <span class="plan-pill dark">Pro</span>
          <h3 data-i18n="pricing.pro.title">${window.t("pricing.pro.title")}</h3>
          <ul>
            <li data-i18n="pricing.pro.projects">${window.t("pricing.pro.projects")}</li>
            <li data-i18n="pricing.pro.templates">${window.t("pricing.pro.templates")}</li>
            <li data-i18n="pricing.pro.timer.templates">${window.t("pricing.pro.timer.templates")}</li>
            <li data-i18n="pricing.pro.launch">${window.t("pricing.pro.launch")}</li>
            <li data-i18n="pricing.pro.pinned">${window.t("pricing.pro.pinned")}</li>
            <li data-i18n="pricing.pro.reminder.profiles">${window.t("pricing.pro.reminder.profiles")}</li>
            <li data-i18n="pricing.pro.reminder.controls">${window.t("pricing.pro.reminder.controls")}</li>
            <li data-i18n="pricing.advanced.pomodoro">${window.t("pricing.advanced.pomodoro")}</li>
            <li data-i18n="pricing.break.tracking">${window.t("pricing.break.tracking")}</li>
            <li data-i18n="pricing.pro.analytics">${window.t("pricing.pro.analytics")}</li>
            <li data-i18n="pricing.timer.ring">${window.t("pricing.timer.ring")}</li>
          </ul>
        </div>
        <div class="price-screen">
          <img class="theme-shot" src="assets/reports-mono-opt.webp" data-theme-mono="assets/reports-mono-opt.webp" data-theme-classic="assets/reports-classic-opt.webp" alt="Flowtime reports" width="1320" height="2868" loading="lazy" decoding="async" />
        </div>
      </article>
    </div>
  </section>
`);
