window.renderSection("reports", `
  <section id="reports" class="section reports">
    <div class="section-heading">
      <p class="eyebrow" data-i18n="reports.eyebrow">${window.t("reports.eyebrow")}</p>
      <h2 data-i18n="reports.title">${window.t("reports.title")}</h2>
      <p data-i18n="reports.description">${window.t("reports.description")}</p>
    </div>

    <div class="reports-grid">
      <div class="reports-left">
        <article class="history-card">
          <header class="history-summary">
            <div>
              <p class="eyebrow">${window.t("reports.today")}</p>
              <strong data-history-total>7h 15m</strong>
            </div>
          </header>
          <div class="activity-chart" aria-label="${window.t("reports.activity")}" data-history-chart>
            <span class="all-focus" style="--bar:70%"><i></i><small>${window.t("time.8")}</small></span>
            <span class="all-focus" style="--bar:78%"><i></i><small>${window.t("time.9")}</small></span>
            <span class="break" style="--bar:20%"><i></i><small>${window.t("reports.break")}</small></span>
            <span class="all-focus" style="--bar:92%"><i></i><small>${window.t("time.11")}</small></span>
            <span class="all-focus" style="--bar:86%"><i></i><small>${window.t("time.13")}</small></span>
            <span class="all-focus" style="--bar:64%"><i></i><small>${window.t("time.14")}</small></span>
            <span class="break" style="--bar:20%"><i></i><small>${window.t("reports.break")}</small></span>
            <span class="all-focus" style="--bar:54%"><i></i><small>${window.t("time.18")}</small></span>
          </div>
          <div class="activity-key" data-history-key>
            <span class="focus-gradient">${window.t("reports.tracked")}</span>
            <span class="break-key">${window.t("reports.break")}</span>
          </div>
        </article>

        <article class="reports-note">
          <div class="reports-note-header">
            <svg class="material-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9.2h3V19H5V9.2zm5.6-4.1h3V19h-3V5.1zm5.7 7.1h3V19h-3v-6.8z"/></svg>
            <div>
              <h3>${window.t("reports.flexible")}</h3>
              <p>${window.t("reports.flexible.text")}</p>
            </div>
          </div>
          <div class="report-filters" aria-label="${window.t("reports.filters")}">
            <span>${window.t("reports.day")}</span>
            <span>${window.t("reports.week")}</span>
            <span>${window.t("reports.month")}</span>
            <span>${window.t("reports.project")}</span>
            <span>${window.t("reports.timer.type")}</span>
          </div>
        </article>
      </div>

      <div class="reports-right">
        <article class="project-overview">
          <p class="eyebrow">${window.t("reports.filter")}</p>
          <p class="project-prompt">${window.t("reports.prompt")}</p>
          <button class="project-line all-project is-active" type="button" data-history-project="all" aria-pressed="true">
            <span class="project-symbol all"><svg class="material-svg" viewBox="0 0 24 24"><path d="M4 5h16v3H4V5zm0 5h16v3H4v-3zm0 5h16v3H4v-3z"/></svg></span>
            <span class="project-copy"><strong>${window.t("reports.all")}</strong><i style="--fill:100%"></i></span>
            <b>7h 15m<small>100%</small></b>
          </button>
          <button class="project-line flowtime-project" type="button" data-history-project="flowtime" aria-pressed="false">
            <span class="project-symbol flowtime"><svg class="material-svg" viewBox="0 0 24 24"><path d="M14 2H10v5h4V2zm0 15h-4v5h4v-5zm2-8H8v6h8V9z"/></svg></span>
            <span class="project-copy"><strong>${window.t("project.flowtime")}</strong><i style="--fill:28%"></i></span>
            <b>2h 00m<small>28%</small></b>
          </button>
          <button class="project-line work-project" type="button" data-history-project="work" aria-pressed="false">
            <span class="project-symbol work"><svg class="material-svg" viewBox="0 0 24 24"><path d="M14 6V4h-4v2H5v15h14V6h-5zm-3-1h2v1h-2V5zm6 14H7V8h10v11z"/></svg></span>
            <span class="project-copy"><strong>${window.t("project.work")}</strong><i style="--fill:55%"></i></span>
            <b>4h 00m<small>55%</small></b>
          </button>
          <button class="project-line testing-project" type="button" data-history-project="testing" aria-pressed="false">
            <span class="project-symbol testing"><svg class="material-svg" viewBox="0 0 24 24"><path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg></span>
            <span class="project-copy"><strong>${window.t("project.testing")}</strong><i style="--fill:17%"></i></span>
            <b>1h 15m<small>17%</small></b>
          </button>
        </article>
      </div>
    </div>
  </section>
`);

(function () {
  var total = document.querySelector("[data-history-total]");
  var chart = document.querySelector("[data-history-chart]");
  var key = document.querySelector("[data-history-key]");
  var projects = document.querySelectorAll("[data-history-project]");
  var activity = {
    all: {
      total: "7h 15m",
      key: '<span class="focus-gradient">' + window.t("reports.tracked") + '</span><span class="break-key">' + window.t("reports.break") + "</span>",
      bars: [["70%", window.t("time.8"), "all-focus"], ["78%", window.t("time.9"), "all-focus"], ["20%", window.t("reports.break"), "break"], ["92%", window.t("time.11"), "all-focus"], ["86%", window.t("time.13"), "all-focus"], ["64%", window.t("time.14"), "all-focus"], ["20%", window.t("reports.break"), "break"], ["54%", window.t("time.18"), "all-focus"]]
    },
    flowtime: {
      total: "2h 00m",
      key: '<span class="flowtime-key">' + window.t("project.flowtime") + '</span><span class="break-key">' + window.t("reports.break") + "</span>",
      bars: [["70%", window.t("time.8"), "flowtime"], ["78%", window.t("time.9"), "flowtime"], ["20%", window.t("reports.break"), "break"], ["0%", window.t("time.11"), "idle"], ["0%", window.t("time.13"), "idle"], ["0%", window.t("time.14"), "idle"], ["0%", window.t("reports.break"), "idle"], ["0%", window.t("time.18"), "idle"]]
    },
    work: {
      total: "4h 00m",
      key: '<span class="work-key">' + window.t("project.work") + '</span><span class="break-key">' + window.t("reports.break") + "</span>",
      bars: [["0%", window.t("time.8"), "idle"], ["0%", window.t("time.9"), "idle"], ["20%", window.t("reports.break"), "break"], ["92%", window.t("time.11"), "work"], ["86%", window.t("time.13"), "work"], ["64%", window.t("time.14"), "work"], ["20%", window.t("reports.break"), "break"], ["0%", window.t("time.18"), "idle"]]
    },
    testing: {
      total: "1h 15m",
      key: '<span class="testing-key">' + window.t("project.testing") + '</span><span class="break-key">' + window.t("reports.break") + "</span>",
      bars: [["0%", window.t("time.8"), "idle"], ["0%", window.t("time.9"), "idle"], ["0%", window.t("reports.break"), "idle"], ["0%", window.t("time.11"), "idle"], ["0%", window.t("time.13"), "idle"], ["0%", window.t("time.14"), "idle"], ["20%", window.t("reports.break"), "break"], ["54%", window.t("time.18"), "testing"]]
    }
  };

  projects.forEach(function (project) {
    project.addEventListener("click", function () {
      var selected = project.dataset.historyProject;
      var view = activity[selected];

      total.textContent = view.total;
      key.innerHTML = view.key;
      chart.innerHTML = view.bars.map(function (bar) {
        return '<span class="' + bar[2] + '" style="--bar:' + bar[0] + '"><i></i><small>' + bar[1] + "</small></span>";
      }).join("");

      projects.forEach(function (option) {
        var active = option === project;
        option.classList.toggle("is-active", active);
        option.setAttribute("aria-pressed", String(active));
      });
    });
  });
}());
