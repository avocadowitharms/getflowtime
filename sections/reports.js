window.renderSection("reports", `
  <section id="reports" class="section reports-section">
    <div class="reports-copy">
      <p class="eyebrow">Reports</p>
      <h2>Explore your focus patterns.</h2>
      <p>Make the website feel like the app: tap a range, hover the bars, and watch the insight card update.</p>
    </div>

    <article class="reports-demo" data-report-demo>
      <div class="report-tabs" role="tablist" aria-label="Report range">
        <button class="is-active" type="button" data-report-range="week">Week</button>
        <button type="button" data-report-range="month">Month</button>
        <button type="button" data-report-range="projects">Projects</button>
      </div>

      <div class="report-card-main">
        <div>
          <span class="report-label">Focused time</span>
          <strong data-report-total>12h 40m</strong>
          <p data-report-note>Your strongest focus day is Thursday.</p>
        </div>
        <span class="report-pill" data-report-pill>+18%</span>
      </div>

      <div class="report-bars" aria-label="Interactive focus report">
        <button type="button" style="--h: 42%" data-value="Mon · 1h 20m"><span>Mon</span></button>
        <button type="button" style="--h: 58%" data-value="Tue · 1h 50m"><span>Tue</span></button>
        <button type="button" style="--h: 35%" data-value="Wed · 1h 05m"><span>Wed</span></button>
        <button type="button" style="--h: 86%" data-value="Thu · 2h 45m"><span>Thu</span></button>
        <button type="button" style="--h: 70%" data-value="Fri · 2h 15m"><span>Fri</span></button>
        <button type="button" style="--h: 49%" data-value="Sat · 1h 30m"><span>Sat</span></button>
        <button type="button" style="--h: 62%" data-value="Sun · 1h 55m"><span>Sun</span></button>
      </div>

      <div class="report-detail" data-report-detail>Tap a bar to inspect a day.</div>
    </article>
  </section>
`);
