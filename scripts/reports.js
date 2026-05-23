(function () {
  var demo = document.querySelector("[data-report-demo]");
  if (!demo) return;

  var ranges = {
    week: {
      total: "12h 40m",
      note: "Your strongest focus day is Thursday.",
      pill: "+18%",
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      heights: [42, 58, 35, 86, 70, 49, 62],
      values: ["Mon · 1h 20m", "Tue · 1h 50m", "Wed · 1h 05m", "Thu · 2h 45m", "Fri · 2h 15m", "Sat · 1h 30m", "Sun · 1h 55m"]
    },
    month: {
      total: "48h 10m",
      note: "Your focus is most consistent in the second half of the month.",
      pill: "+11%",
      labels: ["W1", "W2", "W3", "W4", "W5"],
      heights: [52, 61, 48, 82, 70],
      values: ["Week 1 · 9h 40m", "Week 2 · 11h 15m", "Week 3 · 8h 55m", "Week 4 · 15h 10m", "Week 5 · 3h 10m"]
    },
    projects: {
      total: "6 projects",
      note: "Design takes the biggest share of your focused work.",
      pill: "Top: Design",
      labels: ["Design", "Build", "Admin", "Study", "Life"],
      heights: [88, 74, 32, 56, 40],
      values: ["Design · 18h", "Build · 15h", "Admin · 6h", "Study · 11h", "Life · 8h"]
    }
  };

  var total = demo.querySelector("[data-report-total]");
  var note = demo.querySelector("[data-report-note]");
  var pill = demo.querySelector("[data-report-pill]");
  var detail = demo.querySelector("[data-report-detail]");
  var bars = demo.querySelector(".report-bars");

  function render(rangeName) {
    var range = ranges[rangeName];
    total.textContent = range.total;
    note.textContent = range.note;
    pill.textContent = range.pill;
    detail.textContent = "Tap a bar to inspect a " + (rangeName === "projects" ? "project" : "period") + ".";

    demo.querySelectorAll("[data-report-range]").forEach(function (button) {
      button.classList.toggle("is-active", button.dataset.reportRange === rangeName);
    });

    bars.innerHTML = range.labels.map(function (label, index) {
      return '<button type="button" style="--h: ' + range.heights[index] + '%" data-value="' + range.values[index] + '"><span>' + label + '</span></button>';
    }).join("");
  }

  demo.addEventListener("click", function (event) {
    var rangeButton = event.target.closest("[data-report-range]");
    var barButton = event.target.closest(".report-bars button");

    if (rangeButton) render(rangeButton.dataset.reportRange);
    if (barButton) {
      demo.querySelectorAll(".report-bars button").forEach(function (button) {
        button.classList.toggle("is-selected", button === barButton);
      });
      detail.textContent = barButton.dataset.value;
    }
  });
}());
