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
          <div id="error-message" class="sib-form-message-panel" style="display: none;">
            <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
              <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon" style="width: 20px; height: 20px; fill: currentColor; margin-right: 8px; vertical-align: middle;">
                <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
              </svg>
              <span class="sib-form-message-panel__inner-text">
                Your subscription could not be saved. Please try again.
              </span>
            </div>
          </div>
          <div></div>
          <div id="success-message" class="sib-form-message-panel" style="display: none;">
            <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
              <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon" style="width: 20px; height: 20px; fill: currentColor; margin-right: 8px; vertical-align: middle;">
                <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
              </svg>
              <span class="sib-form-message-panel__inner-text">
                ${window.t("waitlist.success")} ${window.t("waitlist.thanks")}
              </span>
            </div>
          </div>
          <div></div>

          <div class="row-form">
            <p class="eyebrow">${window.t("waitlist.eyebrow")}</p>
            <h3 id="waitlist-title">${window.t("waitlist.title")}</h3>
            <p id="waitlist-description">${window.t("waitlist.description")}</p>

            <form
              id="sib-form"
              class="ml-block-form waitlist-form"
              action="https://6483f87d.sibforms.com/serve/MUIFAKh3H0EDfBc5ZHSxO6GgQcjYYoVB120vpcCgntSdJld99DrfkFp147fb4vu1Yrp1i2-7JG5CiWQkjcDXVfBcay7pXjndjTl47QO9TYS3fSUkBsSPm6cU2Mjy2v5eX8XWGvYhdG1gd9RXy2l3wN_whIcoabJ1SlheNHwGicRvW0v847HOLL4jg7Um272IdTrOlfID-zTKJUbV2w=="
              data-type="subscription"
              data-analytics-form="newsletter_signup"
              method="post"
            >
              <div style="padding: 8px 0;">
                <div class="sib-input sib-form-block">
                  <div class="form__entry entry_block">
                    <div class="form__label-row">
                      <div class="entry__field">
                        <input
                          id="EMAIL"
                          class="input"
                          type="text"
                          name="EMAIL"
                          autocomplete="off"
                          value=""
                          placeholder="${window.t("waitlist.placeholder")}"
                          data-required="true"
                          required
                          aria-label="${window.t("waitlist.email")}"
                        />
                      </div>
                    </div>
                    <label class="entry__error entry__error--primary" style="display: none;"></label>
                    <label class="entry__specification" style="font-family: inherit; font-size: 12px; opacity: 0.8; margin-top: 8px; display: block;">
                      ${window.t("waitlist.policy.before")}
                      <a href="docs/privacy-policy.html">${window.t("waitlist.policy.link")}</a>.
                    </label>
                  </div>
                </div>
              </div>

              <p class="waitlist-privacy">
                ${window.t("waitlist.privacy")}
              </p>

              <div style="padding: 8px 0;">
                <div class="sib-form-block">
                  <button class="button primary sib-form-block__button sib-form-block__button-with-loader" form="sib-form" type="submit">
                    <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512" style="width: 16px; height: 16px; fill: currentColor; margin-right: 8px; vertical-align: middle;">
                      <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                    </svg>
                    <span>${window.t("waitlist.notify")}</span> <span aria-hidden="true">&rarr;</span>
                  </button>
                </div>
              </div>

              <div style="padding: 8px 0;">
                <div class="sib-captcha sib-form-block">
                  <div class="form__entry entry_block">
                    <div class="form__label-row">
                      <div
                        class="cf-turnstile g-recaptcha"
                        data-sitekey="0x4AAAAAAD74COzMSdP6jZ-T"
                        id="sib-captcha"
                        data-callback="handleCaptchaResponse"
                        data-language="${window.flowtimeLocale || "en"}"
                      ></div>
                    </div>
                    <label class="entry__error entry__error--primary" style="display: none;"></label>
                  </div>
                </div>
              </div>

              <input type="text" name="email_address_check" value="" class="input--hidden" hidden aria-hidden="true" tabindex="-1" />
              <input type="hidden" name="locale" value="${window.flowtimeLocale || "en"}" />
            </form>
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

      var emailInput = waitlistModal.querySelector("#EMAIL");

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
  window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
  window.LOCALE = window.flowtimeLocale || 'en';
  window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";
  window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";
  window.GENERIC_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";
  window.INVALID_NUMBER = "The information provided is invalid. Please review the field format and try again.";
  window.INVALID_DATE = "Please enter a valid date";
  window.REQUIRED_MULTISELECT_MESSAGE = 'Please select at least 1 option';
  window.translation = {
    common: {
      selectedList: '{quantity} list selected',
      selectedLists: '{quantity} lists selected',
      selectedOption: '{quantity} selected',
      selectedOptions: '{quantity} selected',
    }
  };
  var AUTOHIDE = Boolean(0);

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
