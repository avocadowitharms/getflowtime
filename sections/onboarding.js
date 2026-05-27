window.renderSection("onboarding", `
  <section class="section simplicity">
    <div class="section-heading">
      <p class="eyebrow">${window.t("simplicity.eyebrow")}</p>
      <h2>${window.t("simplicity.title")}</h2>
      <p>${window.t("simplicity.description")}</p>
    </div>
    <article class="quick-card">
      <div class="quick-header">
        <span class="accent-icon"><svg class="material-svg" viewBox="0 0 24 24"><path d="m11 21 1-7H7l6-11-1 7h5l-6 11z"/></svg></span>
        <div><h3>${window.t("quick.title")}</h3><p>${window.t("quick.description")}</p></div>
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
  </section>
`);

(function () {
  var selector = document.querySelector("[data-quick-selector]");
  var toggle = document.querySelector("[data-quick-toggle]");
  var selected = document.querySelector("[data-quick-selected]");
  var projects = selector.querySelectorAll("[data-quick-project]");

  function projectName(projectId) {
    return window.t("project." + projectId.toLowerCase());
  }

  toggle.addEventListener("click", function () {
    var open = selector.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", window.t(open ? "quick.close" : "quick.open", { project: selected.textContent }));
  });

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
}());
