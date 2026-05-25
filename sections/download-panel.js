window.renderSection("download-panel", `
  <section class="download-panel">
    <div>
      <h2>Ready to enter flow?</h2>
      <p>Start tracking your focus with a calm, minimal experience designed for deep work and everyday productivity.</p>
    </div>
    <div class="actions">
      <button class="button primary" type="button" data-waitlist-open>Join the Waitlist <span aria-hidden="true">&rarr;</span></button>
      <a class="button secondary" href="https://testflight.apple.com/join/4E4S2cqM" target="_blank" rel="noopener noreferrer">Join TestFlight <span aria-hidden="true">&rarr;</span></a>
      <button class="button secondary" type="button" data-android-open>Join Android testing <span aria-hidden="true">&rarr;</span></button>
    </div>

    <div class="android-modal signup-modal" data-waitlist-modal hidden>
      <button class="android-backdrop" type="button" data-waitlist-close aria-label="Close waitlist sign up"></button>
      <article class="android-card signup-card" role="dialog" aria-modal="true" aria-labelledby="waitlist-title" aria-describedby="waitlist-description">
        <button class="android-close" type="button" data-waitlist-close aria-label="Close">
          <svg class="material-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4-6.3-6.3-6.3 6.3-1.4-1.4L9.2 12 2.9 5.7l1.4-1.4 6.3 6.3 6.3-6.3 1.4 1.4z"/></svg>
        </button>
        <div id="mlb2-41744891" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-41744891">
          <div class="row-form">
            <p class="eyebrow">Waitlist</p>
            <h3 id="waitlist-title">Join the waitlist.</h3>
            <p id="waitlist-description">Get launch updates, beta access and future features.</p>
            <form class="ml-block-form waitlist-form" action="https://assets.mailerlite.com/jsonp/2378130/forms/188442807544842085/subscribe" data-code="" method="post" target="_blank">
              <label for="waitlist-email">Email address</label>
              <input id="waitlist-email" aria-label="email" aria-required="true" name="fields[email]" type="email" inputmode="email" autocomplete="email" placeholder="Email" required />
              <p class="waitlist-privacy">No spam. Just Flowtime updates. Unsubscribe anytime.</p>
              <p class="waitlist-policy">You can unsubscribe anytime. For more details, review our <a href="docs/privacy-policy.html">Privacy Policy</a>.</p>
              <input type="hidden" name="ml-submit" value="1" />
              <button class="button primary" type="submit">Notify Me <span aria-hidden="true">&rarr;</span></button>
              <button class="button primary loading" type="button" disabled hidden>
                <span class="ml-form-embedSubmitLoad" aria-hidden="true"></span>
                <span class="sr-only">Loading...</span>
              </button>
              <input type="hidden" name="anticsrf" value="true" />
            </form>
          </div>
          <div class="row-success" hidden>
            <p class="eyebrow">Waitlist</p>
            <h3>You&rsquo;re on the list.</h3>
            <p class="waitlist-success">Thanks for supporting Flowtime.</p>
          </div>
        </div>
      </article>
    </div>

    <div class="android-modal" data-android-modal hidden>
      <button class="android-backdrop" type="button" data-android-close aria-label="Close Android testing details"></button>
      <article class="android-card" role="dialog" aria-modal="true" aria-labelledby="android-title" aria-describedby="android-description">
        <button class="android-close" type="button" data-android-close aria-label="Close">
          <svg class="material-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4-6.3-6.3-6.3 6.3-1.4-1.4L9.2 12 2.9 5.7l1.4-1.4 6.3 6.3 6.3-6.3 1.4 1.4z"/></svg>
        </button>
        <p class="eyebrow">Android testing</p>
        <h3 id="android-title">Join Flowtime on Android.</h3>
        <p id="android-description">Android testing has two steps. First join the testers group, then open the Play Store listing to download the app.</p>
        <div class="android-steps">
          <a class="android-step" href="https://groups.google.com/u/1/g/flowtime_app_testers" target="_blank" rel="noopener noreferrer">
            <b>1</b>
            <span><strong>Join the testers group</strong><small>Google Groups access</small></span>
            <i aria-hidden="true">&rarr;</i>
          </a>
          <a class="android-step" href="https://play.google.com/store/apps/details?id=com.avocadowitharms.flowtime" target="_blank" rel="noopener noreferrer">
            <b>2</b>
            <span><strong>Download the app</strong><small>Open in Google Play</small></span>
            <i aria-hidden="true">&rarr;</i>
          </a>
        </div>
      </article>
    </div>
  </section>
`);

(function () {
  var waitlistOpen = document.querySelector("[data-waitlist-open]");
  var waitlistModal = document.querySelector("[data-waitlist-modal]");
  var waitlistCloseButtons = waitlistModal.querySelectorAll("[data-waitlist-close]");
  var open = document.querySelector("[data-android-open]");
  var modal = document.querySelector("[data-android-modal]");
  var closeButtons = modal.querySelectorAll("[data-android-close]");

  waitlistOpen.addEventListener("click", function () {
    waitlistModal.hidden = false;
    document.body.classList.add("has-modal");
    waitlistModal.querySelector("#waitlist-email").focus();
  });

  function closeWaitlist() {
    waitlistModal.hidden = true;
    document.body.classList.remove("has-modal");
    waitlistOpen.focus();
  }

  waitlistCloseButtons.forEach(function (button) {
    button.addEventListener("click", closeWaitlist);
  });

  open.addEventListener("click", function () {
    modal.hidden = false;
    document.body.classList.add("has-modal");
    modal.querySelector(".android-close").focus();
  });

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("has-modal");
    open.focus();
  }

  closeButtons.forEach(function (button) {
    button.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      if (!waitlistModal.hidden) {
        closeWaitlist();
      } else if (!modal.hidden) {
        closeModal();
      }
    }
  });
}());

window.ml_webform_success_41744891 = function () {
  var form = document.querySelector(".ml-subscribe-form-41744891 .row-form");
  var success = document.querySelector(".ml-subscribe-form-41744891 .row-success");

  if (form && success) {
    form.hidden = true;
    success.hidden = false;
  }
};
