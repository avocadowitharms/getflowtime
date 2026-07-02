window.renderSection("faq", `
  <section id="faq" class="section faq">
    <div class="section-heading">
      <p class="eyebrow">FAQ</p>
      <h2>${window.t("faq.title")}</h2>
    </div>

    <div class="faq-list">
      <details class="faq-item" open>
        <summary>
          <span>${window.t("faq.free.q")}</span>
          <span class="faq-toggle" aria-hidden="true"></span>
        </summary>
        <p>${window.t("faq.free.a")}</p>
      </details>

      <details class="faq-item">
        <summary>
          <span>${window.t("faq.platform.q")}</span>
          <span class="faq-toggle" aria-hidden="true"></span>
        </summary>
        <p>${window.t("faq.platform.a")}</p>
      </details>

      <details class="faq-item">
        <summary>
          <span>${window.t("faq.flow.q")}</span>
          <span class="faq-toggle" aria-hidden="true"></span>
        </summary>
        <p>${window.t("faq.flow.a")}</p>
      </details>

      <details class="faq-item">
        <summary>
          <span>${window.t("faq.pomodoro.q")}</span>
          <span class="faq-toggle" aria-hidden="true"></span>
        </summary>
        <p>${window.t("faq.pomodoro.a")}</p>
      </details>

      <details class="faq-item">
        <summary>
          <span>${window.t("faq.privacy.q")}</span>
          <span class="faq-toggle" aria-hidden="true"></span>
        </summary>
        <p>${window.t("faq.privacy.a")}</p>
      </details>

      <details class="faq-item">
        <summary>
          <span>${window.t("faq.pro.q")}</span>
          <span class="faq-toggle" aria-hidden="true"></span>
        </summary>
        <div class="faq-answer">
          <p>${window.t("faq.pro.a")}</p>
          <ul>
            <li>${window.t("faq.pro.projects")}</li>
            <li>${window.t("faq.pro.templates")}</li>
            <li>${window.t("faq.pro.reminders")}</li>
            <li>${window.t("faq.pro.pomodoro")}</li>
            <li>${window.t("faq.pro.analytics")}</li>
            <li>${window.t("faq.pro.appearance")}</li>
          </ul>
        </div>
      </details>

      <details class="faq-item">
        <summary>
          <span>${window.t("faq.beta.q")}</span>
          <span class="faq-toggle" aria-hidden="true"></span>
        </summary>
        <p>${window.t("faq.beta.a")}</p>
      </details>
    </div>
  </section>
`);
