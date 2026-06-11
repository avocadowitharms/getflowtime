(function () {
  var root = window.flowtimeRoot || "";
  var headerCta = window.flowtimeNoWaitlist
    ? '<a class="button primary header-cta" href="' + root + 'index.html#download-panel">' + window.t("cta.waitlist") + "</a>"
    : '<button class="button primary header-cta" type="button" data-waitlist-open>' + window.t("cta.waitlist") + "</button>";

  window.renderSection("site-header", `
  <header class="site-header" aria-label="Flowtime">
    <a class="brand" href="${root}index.html" aria-label="${window.t("a11y.home")}">
      <span class="logo-swap brand-logo">
        <img class="logo-mono" src="${root}assets/logo.png" alt="" />
        <img class="logo-classic" src="${root}assets/logo-classic.png" alt="" />
      </span>
      <span>Flowtime&deg;</span>
    </a>
    
    <nav class="site-nav" aria-label="${window.t("a11y.nav")}">
      <a href="${root}index.html#focus-modes">${window.t("nav.focus")}</a>
      <a href="${root}index.html#simplicity">${window.t("nav.simplicity")}</a>
      <a href="${root}index.html#reports">${window.t("nav.reports")}</a>
      <a href="${root}index.html#pricing">${window.t("nav.pricing")}</a>
      <a href="${root}index.html#faq">${window.t("nav.faq")}</a>
      
      <!-- Desktop Dropdown: Compare -->
      <div class="nav-dropdown">
        <button class="nav-dropdown-trigger" type="button" aria-expanded="false" data-dropdown="compare">
          <span>${window.t("nav.compare")}</span>
          <svg class="chevron-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div class="nav-dropdown-menu" id="dropdown-compare">
          <a href="${root}comparison/flowtime-vs-toggl/index.html">vs Toggl Track</a>
          <a href="${root}comparison/flowtime-vs-forest/index.html">vs Forest</a>
          <a href="${root}comparison/flowtime-vs-session/index.html">vs Session</a>
          <a href="${root}comparison/flowtime-vs-focus-todo/index.html">vs Focus To-Do</a>
          <a href="${root}comparison/flowtime-vs-be-focused/index.html">vs Be Focused</a>
          <a class="all-link" href="${root}comparison/index.html">${window.t("nav.all")}</a>
        </div>
      </div>
      
      <!-- Desktop Dropdown: Guides -->
      <div class="nav-dropdown">
        <button class="nav-dropdown-trigger" type="button" aria-expanded="false" data-dropdown="guides">
          <span>${window.t("nav.guides")}</span>
          <svg class="chevron-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div class="nav-dropdown-menu" id="dropdown-guides">
          <a href="${root}guides/time-tracker-without-account/index.html">Time Tracker Without an Account</a>
          <a href="${root}guides/best-offline-time-trackers/index.html">Best Offline Time Trackers</a>
          <a href="${root}guides/why-most-time-tracking-apps-feel-overengineered/index.html">Why Most Time Tracking Apps Feel Overengineered</a>
          <a href="${root}guides/sometimes-the-problem-isnt-getting-into-flow-its-getting-out-of-it/index.html">Sometimes the Problem Isn't Getting Into Flow</a>
          <a class="all-link" href="${root}guides/index.html">${window.t("nav.allGuides")}</a>
        </div>
      </div>
    </nav>
    
    <div class="header-actions">
      <div class="locale-switch" role="group" aria-label="${window.t("language.label")}">
        <button type="button" data-locale="en" aria-pressed="${window.flowtimeLocale === "en"}">EN</button>
        <button type="button" data-locale="de" aria-pressed="${window.flowtimeLocale === "de"}">DE</button>
        <button type="button" data-locale="fr" aria-pressed="${window.flowtimeLocale === "fr"}">FR</button>
      </div>
      ${headerCta}
      
      <!-- Mobile menu hamburger toggle -->
      <button class="mobile-menu-toggle" type="button" aria-expanded="false" data-menu-toggle aria-label="Toggle navigation menu">
        <span class="bar bar-top"></span>
        <span class="bar bar-middle"></span>
        <span class="bar bar-bottom"></span>
      </button>
    </div>
    
    <!-- Mobile Navigation Drawer -->
    <div class="mobile-menu-drawer" aria-hidden="true" id="mobile-menu">
      <nav class="mobile-nav">
        <a href="${root}index.html#focus-modes">${window.t("nav.focus")}</a>
        <a href="${root}index.html#simplicity">${window.t("nav.simplicity")}</a>
        <a href="${root}index.html#reports">${window.t("nav.reports")}</a>
        <a href="${root}index.html#pricing">${window.t("nav.pricing")}</a>
        <a href="${root}index.html#faq">${window.t("nav.faq")}</a>
        
        <!-- Mobile Accordion: Compare -->
        <div class="mobile-accordion">
          <button class="mobile-accordion-toggle" type="button" aria-expanded="false">
            <span>${window.t("nav.compare")}</span>
            <svg class="chevron-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="mobile-accordion-panel">
            <a href="${root}comparison/flowtime-vs-toggl/index.html">vs Toggl Track</a>
            <a href="${root}comparison/flowtime-vs-forest/index.html">vs Forest</a>
            <a href="${root}comparison/flowtime-vs-session/index.html">vs Session</a>
            <a href="${root}comparison/flowtime-vs-focus-todo/index.html">vs Focus To-Do</a>
            <a href="${root}comparison/flowtime-vs-be-focused/index.html">vs Be Focused</a>
            <a class="all-link" href="${root}comparison/index.html">${window.t("nav.all")}</a>
          </div>
        </div>
        
        <!-- Mobile Accordion: Guides -->
        <div class="mobile-accordion">
          <button class="mobile-accordion-toggle" type="button" aria-expanded="false">
            <span>${window.t("nav.guides")}</span>
            <svg class="chevron-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="mobile-accordion-panel">
            <a href="${root}guides/time-tracker-without-account/index.html">Time Tracker Without an Account</a>
            <a href="${root}guides/best-offline-time-trackers/index.html">Best Offline Time Trackers</a>
            <a href="${root}guides/why-most-time-tracking-apps-feel-overengineered/index.html">Why Most Time Tracking Apps Feel Overengineered</a>
            <a href="${root}guides/sometimes-the-problem-isnt-getting-into-flow-its-getting-out-of-it/index.html">Sometimes the Problem Isn't Getting Into Flow</a>
            <a class="all-link" href="${root}guides/index.html">${window.t("nav.allGuides")}</a>
          </div>
        </div>
      </nav>
      
      <div class="mobile-menu-cta">
        ${headerCta}
      </div>
    </div>
  </header>
`);

  // Dropdown interactivity
  var triggers = document.querySelectorAll(".nav-dropdown-trigger");
  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function (event) {
      event.stopPropagation();
      var isExpanded = trigger.getAttribute("aria-expanded") === "true";
      
      // Close other dropdowns
      triggers.forEach(function (otherTrigger) {
        if (otherTrigger !== trigger) {
          otherTrigger.setAttribute("aria-expanded", "false");
          var menu = document.getElementById("dropdown-" + otherTrigger.dataset.dropdown);
          if (menu) menu.classList.remove("is-open");
        }
      });

      trigger.setAttribute("aria-expanded", String(!isExpanded));
      var targetMenu = document.getElementById("dropdown-" + trigger.dataset.dropdown);
      if (targetMenu) {
        targetMenu.classList.toggle("is-open", !isExpanded);
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", function () {
    triggers.forEach(function (trigger) {
      trigger.setAttribute("aria-expanded", "false");
      var menu = document.getElementById("dropdown-" + trigger.dataset.dropdown);
      if (menu) menu.classList.remove("is-open");
    });
  });

  // Mobile menu drawer toggle
  var menuToggle = document.querySelector("[data-menu-toggle]");
  var menuDrawer = document.querySelector(".mobile-menu-drawer");
  if (menuToggle && menuDrawer) {
    menuToggle.addEventListener("click", function (event) {
      event.stopPropagation();
      var isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuDrawer.setAttribute("aria-hidden", String(isOpen));
      document.body.classList.toggle("has-mobile-menu", !isOpen);
    });
    
    // Prevent document clicks from closing drawer inside it
    menuDrawer.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  }

  // Mobile Accordions
  var accordionToggles = document.querySelectorAll(".mobile-accordion-toggle");
  accordionToggles.forEach(function (accToggle) {
    accToggle.addEventListener("click", function () {
      var isExpanded = accToggle.getAttribute("aria-expanded") === "true";
      accToggle.setAttribute("aria-expanded", String(!isExpanded));
      var panel = accToggle.nextElementSibling;
      if (panel) {
        if (isExpanded) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      }
    });
  });

  // Language buttons
  document.querySelectorAll("[data-locale]").forEach(function (button) {
    button.addEventListener("click", function () {
      window.setFlowtimeLocale(button.dataset.locale);
    });
  });
}());
