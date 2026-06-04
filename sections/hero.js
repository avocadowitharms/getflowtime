window.renderSection("hero", `
  <section class="hero">
    <div class="hero-intro">
      <p class="eyebrow hero-eyebrow">${window.t("hero.eyebrow")}</p>
      <a
        class="peepush-badge hero-badge"
        href="https://peerpush.net/p/flowtime"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Flowtime on PeerPush"
      >
        <img
          src="https://peerpush.net/p/flowtime/badge.png"
          alt="Flowtime on PeerPush"
          width="230"
          loading="lazy"
        />
      </a>
      <h1>${window.t("hero.title")}</h1>
      <p class="hero-description">${window.t("hero.description")}</p>
      <div class="hero-actions">
        <button class="button primary" type="button" data-waitlist-open>
          ${window.t("cta.waitlist.long")} <span aria-hidden="true">&rarr;</span>
        </button>
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
        <button class="button secondary" type="button" data-android-open>
          ${window.t("cta.android")} <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
      <div class="launch-announcement" aria-label="${window.t("launch.eyebrow")}">
        <span>${window.t("launch.eyebrow")}</span>
        <strong>${window.t("launch.title")}</strong>
        <p>${window.t("launch.description")}</p>
      </div>
    </div>
    <div class="hero-showcase">
      <div class="hero-features" aria-label="${window.t("hero.benefits")}">
        <div class="hero-feature">
          <svg class="material-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 1H9v2h6V1zm-3 6a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm1 8h-2V9h2v6z"/></svg>
          <strong>${window.t("hero.timerCard.title")}</strong>
          <span>${window.t("hero.timerCard.text")}</span>
        </div>
        <div class="hero-feature">
          <svg class="material-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>
          <strong>${window.t("hero.projects.title")}</strong>
          <span>${window.t("hero.projects.text")}</span>
        </div>
        <div class="hero-feature">
          <svg class="material-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9.2h3V19H5V9.2zm5.6-4.1h3V19h-3V5.1zm5.7 7.1h3V19h-3v-6.8z"/></svg>
          <strong>${window.t("hero.history.title")}</strong>
          <span>${window.t("hero.history.text")}</span>
        </div>
        <div class="hero-feature">
          <svg class="material-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M11 21h-1l1-7H7.5c-.88 0-.33-.75-.31-.78C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.4 0 .62.19.4.66C12.96 17.55 11 21 11 21z"/></svg>
          <strong>${window.t("hero.privacy.title")}</strong>
          <span>${window.t("hero.privacy.text")}</span>
        </div>
      </div>
      <div class="hero-phone">
        <div class="hero-device" data-hero-device>
          <button class="hero-device-face hero-device-angle" type="button" data-hero-rotate aria-label="${window.t("hero.rotate")}">
            <img class="theme-shot-mono" src="assets/phone-mono2.png" alt="Flowtime Classic Timer in Mono theme on iPhone" />
            <img class="theme-shot-classic" src="assets/phone-classic.png" alt="Flowtime timer in Classic theme on iPhone" />
          </button>
          <div class="hero-device-face hero-device-front" aria-hidden="true">
            <img class="theme-shot-mono" src="assets/classic-timer-mono.png" alt="" />
            <img class="theme-shot-classic" src="assets/classic-timer-classic.png" alt="" />
            <button class="hero-timer" type="button" data-hero-timer aria-label="${window.t("hero.timer.start")}" aria-pressed="false" tabindex="-1">
              <span class="hero-timer-ring" aria-hidden="true"></span>
              <span class="hero-timer-value" data-hero-timer-value>04:02:46</span>
            </button>
          </div>
        </div>
        <p class="hero-phone-hint" data-hero-phone-hint>${window.t("hero.hint.rotate")}</p>
      </div>
    </div>
  </section>
`);

(function () {
  var device = document.querySelector("[data-hero-device]");
  var rotate = document.querySelector("[data-hero-rotate]");
  var front = document.querySelector(".hero-device-front");
  var timer = document.querySelector("[data-hero-timer]");
  var timerValue = document.querySelector("[data-hero-timer-value]");
  var hint = document.querySelector("[data-hero-phone-hint]");
  var seconds = (4 * 60 * 60) + (2 * 60) + 46;
  var timerId = null;
  var lastTouchEnd = 0;
  var suppressTimerClick = false;

  function formatTime(totalSeconds) {
    var hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    var minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    var remainingSeconds = String(totalSeconds % 60).padStart(2, "0");

    return hours + ":" + minutes + ":" + remainingSeconds;
  }

  function pauseTimer() {
    window.clearInterval(timerId);
    timerId = null;
    timer.classList.remove("is-running");
    timer.setAttribute("aria-label", window.t("hero.timer.resume"));
    timer.setAttribute("aria-pressed", "false");
  }

  function resetTimer() {
    pauseTimer();
    seconds = 0;
    timerValue.textContent = formatTime(seconds);
    hint.textContent = window.t("hero.hint.reset");
    timer.setAttribute("aria-label", window.t("hero.timer.start"));
  }

  rotate.addEventListener("click", function () {
    device.classList.add("is-front");
    rotate.disabled = true;
    timer.tabIndex = 0;
    timer.closest(".hero-device-front").setAttribute("aria-hidden", "false");
    hint.textContent = window.t("hero.hint.start");
  });

  timer.addEventListener("click", function () {
    if (suppressTimerClick) {
      suppressTimerClick = false;
      return;
    }

    if (timerId) {
      pauseTimer();
      hint.textContent = window.t("hero.hint.paused");
      return;
    }

    timer.classList.add("is-running");
    timer.setAttribute("aria-label", window.t("hero.timer.pause"));
    timer.setAttribute("aria-pressed", "true");
    hint.textContent = window.t("hero.hint.running");
    timerId = window.setInterval(function () {
      seconds += 1;
      timerValue.textContent = formatTime(seconds);
    }, 1000);
  });

  front.addEventListener("dblclick", function () {
    resetTimer();
  });

  front.addEventListener("touchend", function () {
    var now = Date.now();

    if (now - lastTouchEnd < 340) {
      suppressTimerClick = true;
      resetTimer();
      lastTouchEnd = 0;
      return;
    }

    lastTouchEnd = now;
  }, { passive: true });
}());
