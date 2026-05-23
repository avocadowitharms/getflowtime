window.renderSection("onboarding", `
  <section class="section onboarding">
    <div class="section-title onboarding-title">
      <p class="eyebrow">Built in</p>
      <h2>Guidance that feels like the app.</h2>
      <p>Get oriented once, then focus with projects and history always within reach.</p>
    </div>
    <div class="onboarding-grid">
      <article class="onboarding-card">
        <div class="card-preview timer-preview" aria-hidden="true"><div class="preview-ring"></div></div>
        <div class="card-sheet">
          <div class="sheet-top">
            <span class="material-symbols-rounded sheet-icon" aria-hidden="true">work</span>
            <span class="skip-label">Skip</span>
          </div>
          <h3>Assign work from the timer</h3>
          <p>Choose a project before you start, or switch projects while your focus keeps moving.</p>
          <div class="sheet-actions">
            <span class="pager"><i></i><i class="active"></i><i></i></span>
            <span class="next-button">Next</span>
          </div>
        </div>
      </article>
      <article class="onboarding-card">
        <div class="card-preview history-preview" aria-hidden="true">
          <h3>History</h3>
          <div class="preview-bars"><i></i><i></i><i></i><i></i><i></i></div>
        </div>
        <div class="card-sheet">
          <div class="sheet-top">
            <span class="material-symbols-rounded sheet-icon" aria-hidden="true">history</span>
            <span class="skip-label">Skip</span>
          </div>
          <h3>Your full history is here</h3>
          <p>Review sessions, filter by project or timer type, and see your focus over time.</p>
          <div class="sheet-actions">
            <span class="pager"><i></i><i></i><i class="active"></i></span>
            <span class="next-button">Next</span>
          </div>
        </div>
      </article>
    </div>
  </section>
`);
