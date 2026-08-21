window.renderSection("download-panel", `
  <section class="download-panel">
    <div>
      <h2>${window.t("download.title")}</h2>
      <p>${window.t("download.description")}</p>
    </div>

    <div class="actions">
      <a
        class="app-store-badge"
        href="https://apps.apple.com/ch/app/flowtime-adhs-fokus-timer/id6768056969"
        target="_blank"
        rel="noopener noreferrer"
        data-analytics-event="app_store_click"
        data-analytics-platform="ios"
        data-platform-target="ios"
        data-source-page-type="homepage"
        data-content-cluster="general"
        data-analytics-location="download_panel"
        aria-label="${window.t("cta.appstore")}"
      >
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="${window.t("cta.appstore")}"
          loading="lazy"
          decoding="async"
          width="120"
          height="40"
        />
      </a>

      <a
        class="app-store-badge google-play-badge"
        href="https://play.google.com/store/apps/details?id=com.avocadowitharms.flowtime"
        target="_blank"
        rel="noopener noreferrer"
        data-analytics-event="play_store_click"
        data-analytics-platform="android"
        data-platform-target="android"
        data-source-page-type="homepage"
        data-content-cluster="general"
        data-analytics-location="download_panel"
        aria-label="${window.t("cta.playstore")}"
      >
        <img
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          alt="${window.t("cta.playstore")}"
          loading="lazy"
          decoding="async"
          width="646"
          height="250"
        />
      </a>

      <a class="button primary" href="https://discord.gg/4P4QudduWm" target="_blank" rel="noopener noreferrer" data-analytics-event="discord_join" data-analytics-location="download_panel">
        ${window.t("cta.discord")} <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  </section>
`);
