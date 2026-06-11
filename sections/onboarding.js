window.renderSection("onboarding", `
  <section id="simplicity" class="section simplicity">
    <div class="section-heading">
      <p class="eyebrow">${window.t("simplicity.eyebrow")}</p>
      <h2>${window.t("simplicity.title")}</h2>
      <p>${window.t("simplicity.description")}</p>
    </div>
    
    <div class="simplicity-grid">
      <!-- Card 1: Quick Selection -->
      <article class="quick-card">
        <div class="quick-header">
          <span class="accent-icon">
            <svg class="material-svg" viewBox="0 0 24 24"><path d="m11 21 1-7H7l6-11-1 7h5l-6 11z"/></svg>
          </span>
          <div>
            <h3>${window.t("quick.title")}</h3>
            <p>${window.t("quick.description")}</p>
          </div>
        </div>
        <div class="selector-visual" data-quick-selector data-active-project="Work">
          <button class="selector-active" type="button" data-quick-active="Work" data-quick-toggle aria-expanded="false" aria-label="${window.t("quick.open", { project: window.t("project.work") })}">
            <svg class="material-svg" viewBox="0 0 24 24"><path d="M14 6V4h-4v2H5v15h14V6h-5zm-3-1h2v1h-2V5zm6 14H7V8h10v11z"/></svg>
          </button>
          <button class="select-bubble left" type="button" data-quick-project="Gardening" aria-label="${window.t("quick.switch", { project: window.t("project.gardening") })}">
            <svg class="material-svg" viewBox="0 0 24 24"><path d="M12 10.1c1.76-2.01 2.04-4.8 0-8.1-2.04 3.3-1.76 6.09 0 8.1zm0 2.45C9.86 9.35 5.64 8.14 2 8c.36 5.17 4.37 9.63 10 10 5.63-.37 9.64-4.83 10-10-3.64.14-7.86 1.35-10 4.55z"/></svg>
          </button>
          <button class="select-bubble right" type="button" data-quick-project="Flowtime" aria-label="${window.t("quick.switch", { project: window.t("project.flowtime") })}">
            <svg class="material-svg" viewBox="0 0 24 24"><path d="M14 2H10v5h4V2zm0 15h-4v5h4v-5zm2-8H8v6h8V9z"/></svg>
          </button>
          <button class="select-bubble bottom" type="button" data-quick-project="Testing" aria-label="${window.t("quick.switch", { project: window.t("project.testing") })}">
            <svg class="material-svg" viewBox="0 0 24 24"><path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
          </button>
        </div>
        <p class="selector-status">${window.t("quick.selected")} <strong data-quick-selected>${window.t("project.work")}</strong></p>
      </article>

      <!-- Card 2: Timer Controls -->
      <article class="quick-card controls-card">
        <div class="quick-header">
          <span class="accent-icon">
            <svg class="material-svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
          </span>
          <div>
            <h3>${window.t("controls.title")}</h3>
            <p>${window.t("controls.description")}</p>
          </div>
        </div>
        
        <div class="timer-visual-widget">
          <button class="timer-circle-btn" type="button" data-interactive-timer aria-label="Interactive focus timer circle">
            <span class="timer-circle-ring"></span>
            <span class="timer-digital-display" data-timer-display>25:00</span>
          </button>
          <p class="timer-status-hint" data-timer-hint>Tap to start</p>
        </div>
      </article>

      <!-- Card 3: Swipe to Switch -->
      <article class="quick-card swipe-card">
        <div class="quick-header">
          <span class="accent-icon">
            <svg class="material-svg" viewBox="0 0 24 24"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"/></svg>
          </span>
          <div>
            <h3>${window.t("swipe.title")}</h3>
            <p>${window.t("swipe.description")}</p>
          </div>
        </div>
        
        <div class="swipe-visual-widget">
          <div class="swipe-container">
            <button class="swipe-arrow prev" type="button" data-swipe-prev aria-label="Previous timer mode">&#8592;</button>
            <div class="swipe-circle" data-swipe-circle>
              <!-- Mode Visual Icons -->
              <div class="mode-icon-wrapper is-active" data-mode-index="0">
                <span class="mode-ring timer-ring"></span>
              </div>
              <div class="mode-icon-wrapper" data-mode-index="1">
                <span class="mode-ring pomodoro-ring"></span>
              </div>
              <div class="mode-icon-wrapper" data-mode-index="2">
                <span class="mode-ring flow-ring"></span>
              </div>
            </div>
            <button class="swipe-arrow next" type="button" data-swipe-next aria-label="Next timer mode">&#8594;</button>
          </div>
          <p class="swipe-status-text" data-swipe-label>${window.t("focus.classic.title")}</p>
        </div>
      </article>
    </div>
  </section>
`);

(function () {
  // --- Card 1: Quick Selection Script ---
  var selector = document.querySelector("[data-quick-selector]");
  var toggle = document.querySelector("[data-quick-toggle]");
  var selected = document.querySelector("[data-quick-selected]");
  var projects = selector ? selector.querySelectorAll("[data-quick-project]") : [];

  function projectName(projectId) {
    return window.t("project." + projectId.toLowerCase());
  }

  if (toggle && selector) {
    toggle.addEventListener("click", function () {
      var open = selector.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", window.t(open ? "quick.close" : "quick.open", { project: selected.textContent }));
    });
  }

  projects.forEach(function (project) {
    project.addEventListener("click", function () {
      var previousName = toggle.dataset.quickActive;
      var previousIcon = toggle.innerHTML;
      var nextName = project.dataset.quickProject;

      toggle.dataset.quickActive = nextName;
      toggle.innerHTML = project.innerHTML;
      project.dataset.quickProject = previousName;
      project.innerHTML = previousIcon;
      project.setAttribute("aria-label", window.t("quick.switch", { project: projectName(previousName) }));
      selected.textContent = projectName(nextName);
      selector.dataset.activeProject = nextName;
      selector.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", window.t("quick.open", { project: projectName(nextName) }));
    });
  });

  // --- Card 2: Interactive Timer Controls Script ---
  var timerBtn = document.querySelector("[data-interactive-timer]");
  var timerDisplay = document.querySelector("[data-timer-display]");
  var timerHint = document.querySelector("[data-timer-hint]");
  var timerInterval = null;
  var timeLeft = 25 * 60; // 25:00
  var isRunning = false;
  var clickTimeout = null;

  function updateTimerUI() {
    if (!timerDisplay) return;
    var mins = Math.floor(timeLeft / 60);
    var secs = timeLeft % 60;
    timerDisplay.textContent = (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;
  }

  function startTimer() {
    if (isRunning) return;
    isRunning = true;
    if (timerBtn) timerBtn.classList.add("is-running");
    if (timerHint) timerHint.textContent = "Tap to pause";
    timerInterval = setInterval(function () {
      if (timeLeft > 0) {
        timeLeft--;
        updateTimerUI();
      } else {
        stopTimer();
      }
    }, 1000);
  }

  function pauseTimer() {
    if (!isRunning) return;
    isRunning = false;
    if (timerBtn) timerBtn.classList.remove("is-running");
    if (timerHint) timerHint.textContent = "Tap to resume";
    clearInterval(timerInterval);
  }

  function stopTimer() {
    isRunning = false;
    if (timerBtn) timerBtn.classList.remove("is-running");
    if (timerHint) timerHint.textContent = "Tap to start";
    clearInterval(timerInterval);
    timeLeft = 25 * 60;
    updateTimerUI();
  }

  if (timerBtn) {
    timerBtn.addEventListener("click", function () {
      if (clickTimeout) {
        clearTimeout(clickTimeout);
        clickTimeout = null;
      } else {
        clickTimeout = setTimeout(function () {
          clickTimeout = null;
          if (isRunning) {
            pauseTimer();
          } else {
            startTimer();
          }
        }, 250);
      }
    });

    timerBtn.addEventListener("dblclick", function (e) {
      e.preventDefault();
      if (clickTimeout) {
        clearTimeout(clickTimeout);
        clickTimeout = null;
      }
      stopTimer();
    });
  }

  // --- Card 3: Interactive Switcher Script ---
  var modeNames = [
    window.t("focus.classic.title"),
    window.t("focus.pomodoro.title"),
    window.t("focus.flow.title")
  ];
  var currentModeIndex = 0;
  var prevBtn = document.querySelector("[data-swipe-prev]");
  var nextBtn = document.querySelector("[data-swipe-next]");
  var swipeCircle = document.querySelector("[data-swipe-circle]");
  var swipeLabel = document.querySelector("[data-swipe-label]");
  var icons = swipeCircle ? swipeCircle.querySelectorAll(".mode-icon-wrapper") : [];

  function updateMode(index) {
    icons.forEach(function (icon) {
      icon.classList.remove("is-active");
    });
    if (icons[index]) icons[index].classList.add("is-active");
    if (swipeLabel) swipeLabel.textContent = modeNames[index];
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      currentModeIndex = (currentModeIndex - 1 + 3) % 3;
      updateMode(currentModeIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      currentModeIndex = (currentModeIndex + 1) % 3;
      updateMode(currentModeIndex);
    });
  }

  if (swipeCircle) {
    swipeCircle.addEventListener("click", function () {
      currentModeIndex = (currentModeIndex + 1) % 3;
      updateMode(currentModeIndex);
    });
  }
}());
