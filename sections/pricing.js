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
            <li data-i18n="pricing.free.timer">${window.t("pricing.free.timer")}</li>
            <li data-i18n="pricing.free.notifications">${window.t("pricing.free.notifications")}</li>
            <li data-i18n="pricing.free.pomodoro">${window.t("pricing.free.pomodoro")}</li>
            <li data-i18n="pricing.free.projects">${window.t("pricing.free.projects")}</li>
            <li data-i18n="pricing.free.history">${window.t("pricing.free.history")}</li>
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
            <li data-i18n="pricing.pro.flow_sessions">${window.t("pricing.pro.flow_sessions")}</li>
            <li data-i18n="pricing.pro.flowmodoro">${window.t("pricing.pro.flowmodoro")}</li>
            <li data-i18n="pricing.pro.pomodoro">${window.t("pricing.pro.pomodoro")}</li>
            <li data-i18n="pricing.pro.projects">${window.t("pricing.pro.projects")}</li>
            <li data-i18n="pricing.pro.history">${window.t("pricing.pro.history")}</li>
            <li data-i18n="pricing.pro.blocking">${window.t("pricing.pro.blocking")}</li>
            <li data-i18n="pricing.pro.templates">${window.t("pricing.pro.templates")}</li>
            <li data-i18n="pricing.pro.reminders">${window.t("pricing.pro.reminders")}</li>
            <li data-i18n="pricing.pro.customization">${window.t("pricing.pro.customization")}</li>
            <li data-i18n="pricing.pro.reports">${window.t("pricing.pro.reports")}</li>
            <li data-i18n="pricing.pro.future">${window.t("pricing.pro.future")}</li>
          </ul>
        </div>
        <div class="price-screen">
          <img class="theme-shot" src="assets/reports-mono-opt.webp" data-theme-mono="assets/reports-mono-opt.webp" data-theme-classic="assets/reports-classic-opt.webp" alt="Flowtime reports" width="1320" height="2868" loading="lazy" decoding="async" />
        </div>
      </article>
    </div>
  </section>
`);
