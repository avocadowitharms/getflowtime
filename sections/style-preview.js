window.renderSection("style-preview", `
  <section class="section style-preview">
    <div class="section-heading">
      <p class="eyebrow">Styles</p>
      <h2>Your productivity.<br />Your style.</h2>
      <p>Switch between Classic and Mono at any time.</p>
    </div>
    <div class="style-device">
      <p class="style-instruction">Tap a side to preview</p>
      <div class="style-phone">
        <img src="assets/split-front.png" alt="Flowtime timer split between Classic and Mono styles" />
        <button class="style-side style-classic" type="button" data-theme-preview="classic" aria-label="Preview Classic style" aria-pressed="false">
          <span>Classic</span>
        </button>
        <button class="style-side style-mono" type="button" data-theme-preview="mono" aria-label="Preview Mono style" aria-pressed="true">
          <span>Mono</span>
        </button>
      </div>
    </div>
  </section>
`);
