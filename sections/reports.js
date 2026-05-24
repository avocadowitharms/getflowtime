window.renderSection("reports", `
  <section class="section reports">
    <div class="section-heading">
      <p class="eyebrow">Reports</p>
      <h2>Explore your focus patterns.</h2>
      <p>Tap a range, review your rhythm, and see where your time goes.</p>
    </div>
    <article class="insight-card">
      <div class="insight-tabs"><button class="is-active">Week</button><button>Month</button><button>Projects</button></div>
      <div class="insight-summary">
        <div><p class="eyebrow">Focused time</p><strong>12h 40m</strong><span>Your strongest focus day is Thursday.</span></div>
        <div class="growth"><b>+18%</b><span>vs previous week</span></div>
      </div>
      <div class="bar-chart" aria-label="Weekly focus chart">
        <span style="--bar:60%"><i></i><small>Mon</small></span>
        <span style="--bar:82%"><i></i><small>Tue</small></span>
        <span style="--bar:53%"><i></i><small>Wed</small></span>
        <span style="--bar:100%"><i></i><small>Thu</small></span>
        <span style="--bar:76%"><i></i><small>Fri</small></span>
        <span style="--bar:59%"><i></i><small>Sat</small></span>
        <span style="--bar:76%"><i></i><small>Sun</small></span>
      </div>
    </article>
    <article class="project-overview">
      <p class="eyebrow">Project overview</p>
      <div class="project-line"><span class="project-symbol"><svg class="material-svg" viewBox="0 0 24 24"><path d="M4 6h16v10H4V6zm-2 12h20v2H2v-2z"/></svg></span><div><strong>Project One</strong><i style="--fill:71%"></i></div><b>12h<small>71%</small></b></div>
      <div class="project-line"><span class="project-symbol soft"><svg class="material-svg" viewBox="0 0 24 24"><path d="M6 2h9l3 3v17H6V2zm8 1.5V7h3.5L14 3.5z"/></svg></span><div><strong>Project Two</strong><i style="--fill:29%"></i></div><b>5h<small>29%</small></b></div>
    </article>
  </section>
`);
