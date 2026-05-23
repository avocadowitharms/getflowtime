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
            <span class="sheet-icon" aria-hidden="true"><svg class="material-svg" viewBox="0 0 24 24"><path d="M14 6V4h-4v2H5v15h14V6h-5zm-3-1h2v1h-2V5zm6 14H7V8h10v11z"/></svg></span>
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
            <span class="sheet-icon" aria-hidden="true"><svg class="material-svg" viewBox="0 0 24 24"><path d="M13 3c-4.97 0-9 4.03-9 9H1l4 4 4-4H6c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7c-1.93 0-3.68-.79-4.95-2.05l-1.42 1.42C8.27 20 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg></span>
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
