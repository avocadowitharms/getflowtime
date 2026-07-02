window.renderSection("pricing", `
  <section id="pricing" class="section pricing">
    <div class="section-heading">
      <p class="eyebrow">${window.t("pricing.eyebrow")}</p>
      <h2>${window.t("pricing.title")}</h2>
      <p>${window.t("pricing.description")}</p>
    </div>
    <div class="price-grid">
      <article class="price-card free-plan">
        <div class="price-copy">
          <span class="plan-pill">${window.t("pricing.free")}</span>
          <h3>${window.t("pricing.free.title")}</h3>
          <ul>
            <li>${window.t("pricing.free.timers")}</li>
            <li>${window.t("pricing.free.projects")}</li>
            <li>${window.t("pricing.free.templates")}</li>
            <li>${window.t("pricing.free.reminders")}</li>
            <li>${window.t("pricing.free.flow")}</li>
            <li>${window.t("pricing.free.pomodoro")}</li>
            <li>${window.t("pricing.free.selection")}</li>
            <li>${window.t("pricing.free.appearance")}</li>
            <li>${window.t("pricing.free.shielding")}</li>
          </ul>
        </div>
        <div class="price-screen">
          <img class="theme-shot-mono" src="assets/classic-timer-mono.png" alt="Classic Timer in the Flowtime Mono theme" />
          <img class="theme-shot-classic" src="assets/classic-timer-classic.png" alt="Classic Timer in the Flowtime Classic theme" />
        </div>
      </article>
      <article class="price-card pro-plan">
        <div class="price-copy">
          <span class="plan-pill dark">Pro</span>
          <h3>${window.t("pricing.pro.title")}</h3>
          <ul>
            <li>${window.t("pricing.pro.projects")}</li>
            <li>${window.t("pricing.pro.templates")}</li>
            <li>${window.t("pricing.pro.timer.templates")}</li>
            <li>${window.t("pricing.pro.launch")}</li>
            <li>${window.t("pricing.pro.pinned")}</li>
            <li>${window.t("pricing.pro.reminder.profiles")}</li>
            <li>${window.t("pricing.pro.reminder.controls")}</li>
            <li>${window.t("pricing.advanced.pomodoro")}</li>
            <li>${window.t("pricing.break.tracking")}</li>
            <li>${window.t("pricing.pro.analytics")}</li>
            <li>${window.t("pricing.timer.ring")}</li>
          </ul>
        </div>
        <div class="price-screen">
          <img class="theme-shot-mono" src="assets/reports-mono.png" alt="Flowtime reports in the Mono theme" />
          <img class="theme-shot-classic" src="assets/reports-classic.png" alt="Flowtime reports in the Classic theme" />
        </div>
      </article>
    </div>
  </section>
`);
