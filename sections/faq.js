window.renderSection("faq", `
  <section id="faq" class="section faq">
    <div class="section-heading">
      <p class="eyebrow" data-i18n="faq.eyebrow">${window.t("faq.eyebrow")}</p>
      <h2 data-i18n="faq.title">${window.t("faq.title")}</h2>
    </div>

    <div class="faq-list">
      <details class="faq-item" open>
        <summary>
          <span data-i18n="faq.what.q">${window.t("faq.what.q")}</span>
          <span class="faq-toggle" aria-hidden="true"></span>
        </summary>
        <p data-i18n="faq.what.a">${window.t("faq.what.a")}</p>
      </details>

      <details class="faq-item">
        <summary>
          <span data-i18n="faq.who.q">${window.t("faq.who.q")}</span>
          <span class="faq-toggle" aria-hidden="true"></span>
        </summary>
        <p data-i18n="faq.who.a">${window.t("faq.who.a")}</p>
      </details>

      <details class="faq-item">
        <summary>
          <span data-i18n="faq.pomodoro.diff.q">${window.t("faq.pomodoro.diff.q")}</span>
          <span class="faq-toggle" aria-hidden="true"></span>
        </summary>
        <p data-i18n="faq.pomodoro.diff.a">${window.t("faq.pomodoro.diff.a")}</p>
      </details>

      <details class="faq-item">
        <summary>
          <span data-i18n="faq.competitors.q">${window.t("faq.competitors.q")}</span>
          <span class="faq-toggle" aria-hidden="true"></span>
        </summary>
        <p data-i18n="faq.competitors.a">${window.t("faq.competitors.a")}</p>
      </details>

      <details class="faq-item">
        <summary>
          <span data-i18n="faq.free.q">${window.t("faq.free.q")}</span>
          <span class="faq-toggle" aria-hidden="true"></span>
        </summary>
        <p data-i18n="faq.free.a">${window.t("faq.free.a")}</p>
      </details>

      <details class="faq-item">
        <summary>
          <span data-i18n="faq.platform.q">${window.t("faq.platform.q")}</span>
          <span class="faq-toggle" aria-hidden="true"></span>
        </summary>
        <p data-i18n="faq.platform.a">${window.t("faq.platform.a")}</p>
      </details>

      <details class="faq-item">
        <summary>
          <span data-i18n="faq.languages.q">${window.t("faq.languages.q")}</span>
          <span class="faq-toggle" aria-hidden="true"></span>
        </summary>
        <p data-i18n="faq.languages.a">${window.t("faq.languages.a")}</p>
      </details>

      <details class="faq-item">
        <summary>
          <span data-i18n="faq.flow.q">${window.t("faq.flow.q")}</span>
          <span class="faq-toggle" aria-hidden="true"></span>
        </summary>
        <p data-i18n="faq.flow.a">${window.t("faq.flow.a")}</p>
      </details>

      <details class="faq-item">
        <summary>
          <span data-i18n="faq.pomodoro.q">${window.t("faq.pomodoro.q")}</span>
          <span class="faq-toggle" aria-hidden="true"></span>
        </summary>
        <p data-i18n="faq.pomodoro.a">${window.t("faq.pomodoro.a")}</p>
      </details>

      <details class="faq-item">
        <summary>
          <span data-i18n="faq.privacy.q">${window.t("faq.privacy.q")}</span>
          <span class="faq-toggle" aria-hidden="true"></span>
        </summary>
        <p data-i18n="faq.privacy.a">${window.t("faq.privacy.a")}</p>
      </details>

      <details class="faq-item">
        <summary>
          <span data-i18n="faq.pro.q">${window.t("faq.pro.q")}</span>
          <span class="faq-toggle" aria-hidden="true"></span>
        </summary>
        <div class="faq-answer">
          <p data-i18n="faq.pro.a">${window.t("faq.pro.a")}</p>
          <ul>
            <li data-i18n="faq.pro.projects">${window.t("faq.pro.projects")}</li>
            <li data-i18n="faq.pro.templates">${window.t("faq.pro.templates")}</li>
            <li data-i18n="faq.pro.reminders">${window.t("faq.pro.reminders")}</li>
            <li data-i18n="faq.pro.pomodoro">${window.t("faq.pro.pomodoro")}</li>
            <li data-i18n="faq.pro.analytics">${window.t("faq.pro.analytics")}</li>
            <li data-i18n="faq.pro.appearance">${window.t("faq.pro.appearance")}</li>
          </ul>
        </div>
      </details>

      <details class="faq-item">
        <summary>
          <span data-i18n="faq.beta.q">${window.t("faq.beta.q")}</span>
          <span class="faq-toggle" aria-hidden="true"></span>
        </summary>
        <p data-i18n="faq.beta.a">${window.t("faq.beta.a")}</p>
      </details>
    </div>
  </section>
`);
