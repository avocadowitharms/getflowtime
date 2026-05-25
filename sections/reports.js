window.renderSection("reports", `
  <section id="reports" class="section reports">
    <div class="section-heading">
      <p class="eyebrow">History &amp; Reports</p>
      <h2>Explore your focus.</h2>
      <p>Review today&rsquo;s activity by project, then use reports to understand your focus over time.</p>
    </div>

    <article class="history-card">
      <header class="history-summary">
        <div>
          <p class="eyebrow">Today</p>
          <strong data-history-total>7h 15m</strong>
        </div>
      </header>
      <div class="activity-chart" aria-label="Today's focus activity" data-history-chart>
        <span class="all-focus" style="--bar:70%"><i></i><small>8 AM</small></span>
        <span class="all-focus" style="--bar:78%"><i></i><small>9 AM</small></span>
        <span class="break" style="--bar:20%"><i></i><small>Break</small></span>
        <span class="all-focus" style="--bar:92%"><i></i><small>11 AM</small></span>
        <span class="all-focus" style="--bar:86%"><i></i><small>1 PM</small></span>
        <span class="all-focus" style="--bar:64%"><i></i><small>2 PM</small></span>
        <span class="break" style="--bar:20%"><i></i><small>Break</small></span>
        <span class="all-focus" style="--bar:54%"><i></i><small>6 PM</small></span>
      </div>
      <div class="activity-key" data-history-key>
        <span class="focus-gradient">Tracked focus</span>
        <span class="break-key">Break</span>
      </div>
    </article>

    <article class="project-overview">
      <p class="eyebrow">Filter activity by project</p>
      <p class="project-prompt">Tap a project to see its activity above.</p>
      <button class="project-line all-project is-active" type="button" data-history-project="all" aria-pressed="true">
        <span class="project-symbol all"><svg class="material-svg" viewBox="0 0 24 24"><path d="M4 5h16v3H4V5zm0 5h16v3H4v-3zm0 5h16v3H4v-3z"/></svg></span>
        <span class="project-copy"><strong>All projects</strong><i style="--fill:100%"></i></span>
        <b>7h 15m<small>100%</small></b>
      </button>
      <button class="project-line flowtime-project" type="button" data-history-project="flowtime" aria-pressed="false">
        <span class="project-symbol flowtime"><svg class="material-svg" viewBox="0 0 24 24"><path d="M14 2H10v5h4V2zm0 15h-4v5h4v-5zm2-8H8v6h8V9z"/></svg></span>
        <span class="project-copy"><strong>Flowtime</strong><i style="--fill:28%"></i></span>
        <b>2h 00m<small>28%</small></b>
      </button>
      <button class="project-line work-project" type="button" data-history-project="work" aria-pressed="false">
        <span class="project-symbol work"><svg class="material-svg" viewBox="0 0 24 24"><path d="M14 6V4h-4v2H5v15h14V6h-5zm-3-1h2v1h-2V5zm6 14H7V8h10v11z"/></svg></span>
        <span class="project-copy"><strong>Work</strong><i style="--fill:55%"></i></span>
        <b>4h 00m<small>55%</small></b>
      </button>
      <button class="project-line testing-project" type="button" data-history-project="testing" aria-pressed="false">
        <span class="project-symbol testing"><svg class="material-svg" viewBox="0 0 24 24"><path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg></span>
        <span class="project-copy"><strong>Testing</strong><i style="--fill:17%"></i></span>
        <b>1h 15m<small>17%</small></b>
      </button>
    </article>

    <article class="reports-note">
      <div class="reports-note-header">
        <svg class="material-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9.2h3V19H5V9.2zm5.6-4.1h3V19h-3V5.1zm5.7 7.1h3V19h-3v-6.8z"/></svg>
        <div>
          <h3>Flexible reports</h3>
          <p>Sort and compare focus by project, timer type, or time range.</p>
        </div>
      </div>
      <div class="report-filters" aria-label="Report filters">
        <span>Day</span>
        <span>Week</span>
        <span>Month</span>
        <span>Project</span>
        <span>Timer type</span>
      </div>
    </article>
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
      key: '<span class="focus-gradient">Tracked focus</span><span class="break-key">Break</span>',
      bars: [["70%", "8 AM", "all-focus"], ["78%", "9 AM", "all-focus"], ["20%", "Break", "break"], ["92%", "11 AM", "all-focus"], ["86%", "1 PM", "all-focus"], ["64%", "2 PM", "all-focus"], ["20%", "Break", "break"], ["54%", "6 PM", "all-focus"]]
    },
    flowtime: {
      total: "2h 00m",
      key: '<span class="flowtime-key">Flowtime</span><span class="break-key">Break</span>',
      bars: [["70%", "8 AM", "flowtime"], ["78%", "9 AM", "flowtime"], ["20%", "Break", "break"], ["0%", "11 AM", "idle"], ["0%", "1 PM", "idle"], ["0%", "2 PM", "idle"], ["0%", "Break", "idle"], ["0%", "6 PM", "idle"]]
    },
    work: {
      total: "4h 00m",
      key: '<span class="work-key">Work</span><span class="break-key">Break</span>',
      bars: [["0%", "8 AM", "idle"], ["0%", "9 AM", "idle"], ["20%", "Break", "break"], ["92%", "11 AM", "work"], ["86%", "1 PM", "work"], ["64%", "2 PM", "work"], ["20%", "Break", "break"], ["0%", "6 PM", "idle"]]
    },
    testing: {
      total: "1h 15m",
      key: '<span class="testing-key">Testing</span><span class="break-key">Break</span>',
      bars: [["0%", "8 AM", "idle"], ["0%", "9 AM", "idle"], ["0%", "Break", "idle"], ["0%", "11 AM", "idle"], ["0%", "1 PM", "idle"], ["0%", "2 PM", "idle"], ["20%", "Break", "break"], ["54%", "6 PM", "testing"]]
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
