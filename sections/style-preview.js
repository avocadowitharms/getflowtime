window.renderSection("style-preview", `
  <section id="styles" class="section style-preview">
    <div class="section-heading">
      <p class="eyebrow">${window.t("styles.eyebrow")}</p>
      <h2>${window.t("styles.title")}</h2>
      <p>${window.t("styles.description")}</p>
    </div>
    <div class="style-device">
      <p class="style-instruction">${window.t("styles.instruction")}</p>
      <div class="style-phone">
        <img src="assets/split-front-opt.webp" alt="Flowtime timer split between Classic and Mono styles" width="1320" height="2868" loading="lazy" decoding="async" />
        <button class="style-side style-classic" type="button" data-theme-preview="classic" aria-label="${window.t("styles.preview.classic")}" aria-pressed="false">
          <span>Classic</span>
        </button>
        <button class="style-side style-mono" type="button" data-theme-preview="mono" aria-label="${window.t("styles.preview.mono")}" aria-pressed="true">
          <span>Mono</span>
        </button>
      </div>
    </div>
  </section>
`);

