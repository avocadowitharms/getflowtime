window.renderSection("download-panel", `
  <section class="download-panel">
    <div>
      <h2>${window.t("download.title")}</h2>
      <p>${window.t("download.description")}</p>
    </div>

    <div class="actions">
      <a
        class="app-store-badge"
        href="https://apps.apple.com/ch/app/flowtime/id6768056969"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="${window.t("cta.appstore")}"
      >
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="${window.t("cta.appstore")}"
          loading="lazy"
        />
      </a>

      <a
        class="app-store-badge google-play-badge"
        href="https://play.google.com/store/apps/details?id=com.avocadowitharms.flowtime"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="${window.t("cta.playstore")}"
      >
        <img
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          alt="${window.t("cta.playstore")}"
          loading="lazy"
        />
      </a>

      <button class="button primary" type="button" data-waitlist-open>
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
          id="mlb2-41744891"
          class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-41744891"
        >
          <div class="row-form">
            <p class="eyebrow">${window.t("waitlist.eyebrow")}</p>

            <h3 id="waitlist-title">${window.t("waitlist.title")}</h3>

            <p id="waitlist-description">
              ${window.t("waitlist.description")}
            </p>

            <form
              class="ml-block-form waitlist-form"
              action="https://assets.mailerlite.com/jsonp/2378130/forms/188442807544842085/subscribe"
              data-code=""
              method="post"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div class="ml-form-formContent">
                <div class="ml-form-fieldRow ml-last-item">
                  <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                    <label for="waitlist-email">${window.t("waitlist.email")}</label>

                    <input
                      id="waitlist-email"
                      aria-label="${window.t("waitlist.email")}"
                      aria-required="true"
                      name="fields[email]"
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

              <input type="hidden" name="ml-submit" value="1" />

              <div class="ml-form-embedSubmit">
  <button class="button primary" type="submit">
    ${window.t("waitlist.notify")} <span aria-hidden="true">&rarr;</span>
  </button>

  <button class="loading" type="button" disabled aria-hidden="true">
    <span class="ml-form-embedSubmitLoad"></span>
  </button>
</div>

              <input type="hidden" name="anticsrf" value="true" />
            </form>
          </div>

          <div class="row-success" style="display: none;">
            <p class="eyebrow">${window.t("waitlist.eyebrow")}</p>

            <h3>${window.t("waitlist.success")}</h3>

            <p class="waitlist-success">
              ${window.t("waitlist.thanks")}
            </p>
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

function ml_webform_success_41744891() {
  var form = document.querySelector(
    ".ml-subscribe-form-41744891 .row-form"
  );

  var success = document.querySelector(
    ".ml-subscribe-form-41744891 .row-success"
  );

  if (form && success) {
    form.style.display = "none";
    success.style.display = "block";
  }
}

(function () {
  var script = document.createElement("script");

  script.src =
    "https://groot.mailerlite.com/js/w/webforms.min.js?vb397d78ebaa8a0f631d35384c46d781b";

  script.type = "text/javascript";
  script.async = true;
  script.referrerPolicy = "strict-origin-when-cross-origin";

  document.body.appendChild(script);

  fetch(
    "https://assets.mailerlite.com/jsonp/2378130/forms/188442807544842085/takel"
  ).catch(function () {});
}());
