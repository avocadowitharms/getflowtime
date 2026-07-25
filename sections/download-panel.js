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

      <button class="button primary" type="button" data-waitlist-open data-analytics-event="newsletter_open" data-analytics-location="download_panel">
        ${window.t("cta.waitlist.long")} <span aria-hidden="true">&rarr;</span>
      </button>
    </div>

    <!-- WAITLIST MODAL -->
    <div class="android-modal signup-modal" data-waitlist-modal hidden>
      <button
        class="android-backdrop"
        type="button"
        data-waitlist-close
        aria-label="${window.t("waitlist.close")}"
      ></button>

      <article
        class="android-card signup-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="waitlist-title"
        aria-describedby="waitlist-description"
      >
        <button
          class="android-close"
          type="button"
          data-waitlist-close
          aria-label="${window.t("modal.close")}"
        >
          <svg class="material-svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4-6.3-6.3-6.3 6.3-1.4-1.4L9.2 12 2.9 5.7l1.4-1.4 6.3 6.3 6.3-6.3 1.4 1.4z"/>
          </svg>
        </button>

        <div
          id="sib-form-container"
          class="ml-form-embedContainer"
        >
          <div class="row-form">
            <p class="eyebrow">${window.t("waitlist.eyebrow")}</p>

            <h3 id="waitlist-title">${window.t("waitlist.title")}</h3>

            <p id="waitlist-description">
              ${window.t("waitlist.description")}
            </p>

            <form
              id="sib-form"
              class="ml-block-form waitlist-form"
              action="https://6483f87d.sibforms.com/serve/MUIFAKh3H0EDfBc5ZHSxO6GgQcjYYoVB120vpcCgntSdJld99DrfkFp147fb4vu1Yrp1i2-7JG5CiWQkjcDXVfBcay7pXjndjTl47QO9TYS3fSUkBsSPm6cU2Mjy2v5eX8XWGvYhdG1gd9RXy2l3wN_whIcoabJ1SlheNHwGicRvW0v847HOLL4jg7Um272IdTrOlfID-zTKJUbV2w=="
              data-type="subscription"
              data-analytics-form="newsletter_signup"
              method="post"
            >
              <div class="ml-form-formContent">
                <div class="ml-form-fieldRow ml-last-item">
                  <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                    <label for="waitlist-email">${window.t("waitlist.email")}</label>

                    <input
                      id="waitlist-email"
                      aria-label="${window.t("waitlist.email")}"
                      aria-required="true"
                      name="EMAIL"
                      type="email"
                      autocomplete="email"
                      placeholder="${window.t("waitlist.placeholder")}"
                      required
                    />
                  </div>
                </div>
              </div>

              <p class="waitlist-privacy">
                ${window.t("waitlist.privacy")}
              </p>

              <p class="waitlist-policy">
                ${window.t("waitlist.policy.before")}
                <a href="docs/privacy-policy.html">${window.t("waitlist.policy.link")}</a>.
              </p>

              <div class="ml-form-embedSubmit">
  <button class="button primary" type="submit">
    ${window.t("waitlist.notify")} <span aria-hidden="true">&rarr;</span>
  </button>

  <button class="loading" type="button" disabled aria-hidden="true">
    <span class="ml-form-embedSubmitLoad"></span>
  </button>
</div>

              <div class="sib-captcha">
                <div
                  class="cf-turnstile g-recaptcha"
                  data-sitekey="0x4AAAAAAD74COzMSdP6jZ-T"
                  id="sib-captcha"
                  data-callback="handleCaptchaResponse"
                  data-language="${window.flowtimeLocale || "en"}"
                ></div>
              </div>

              <input type="text" name="email_address_check" value="" hidden aria-hidden="true" tabindex="-1" />
              <input type="hidden" name="locale" value="${window.flowtimeLocale || "en"}" />
            </form>
          </div>

          <div id="success-message" class="row-success sib-form-message-panel" style="display: none;">
            <p class="eyebrow">${window.t("waitlist.eyebrow")}</p>

            <h3>${window.t("waitlist.success")}</h3>

            <p class="waitlist-success">
              ${window.t("waitlist.thanks")}
            </p>
          </div>
          <div id="error-message" class="sib-form-message-panel" style="display: none;">
            Your subscription could not be saved. Please try again.
          </div>
        </div>
      </article>
    </div>

  </section>
`);

(function () {
  var waitlistOpenButtons = document.querySelectorAll("[data-waitlist-open]");
  var waitlistModal = document.querySelector("[data-waitlist-modal]");
  var waitlistCloseButtons = waitlistModal.querySelectorAll("[data-waitlist-close]");
  var lastWaitlistTrigger = null;

  waitlistOpenButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      lastWaitlistTrigger = button;
      waitlistModal.hidden = false;
      document.body.classList.add("has-modal");

      var emailInput = waitlistModal.querySelector("#waitlist-email");

      if (emailInput) {
        emailInput.focus();
      }
    });
  });

  function closeWaitlist() {
    waitlistModal.hidden = true;
    document.body.classList.remove("has-modal");
    if (lastWaitlistTrigger) {
      lastWaitlistTrigger.focus();
    }
  }

  waitlistCloseButtons.forEach(function (button) {
    button.addEventListener("click", closeWaitlist);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !waitlistModal.hidden) {
      closeWaitlist();
    }
  });
}());

function handleCaptchaResponse() {
  document.getElementById("sib-captcha").dispatchEvent(new Event("captchaChange"));
  window.grecaptcha = window.turnstile;
}

(function () {
  window.REQUIRED_CODE_ERROR_MESSAGE = "Please choose a country code";
  window.LOCALE = window.flowtimeLocale || "en";
  window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE =
    "The information provided is invalid. Please review the field format and try again.";
  window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank.";
  window.GENERIC_INVALID_MESSAGE = window.EMAIL_INVALID_MESSAGE;
  window.AUTOHIDE = false;

  if (document.getElementById("sib-form")) {
    [
      "https://sibforms.com/forms/end-form/build/main.js",
      "https://challenges.cloudflare.com/turnstile/v0/api.js"
    ].forEach(function (src) {
      var script = document.createElement("script");
      script.src = src;
      script.async = false;
      document.body.appendChild(script);
    });
  }
}());
