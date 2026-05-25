window.renderSection("themes", `
  <section id="themes" class="section themes">
    <div class="section-heading">
      <p class="eyebrow">Themes</p>
      <h2>Two Styles -<br />one workflow.</h2>
      <p>Mono keeps things clean and distraction-free. Classic adds subtle color and visual depth when context matters.</p>
    </div>
    <div class="theme-grid">
      <article class="palette-card mono-palette">
        <header><div><h3>Mono</h3><p>Bright, minimal, distraction-free.</p></div><span>Light</span></header>
        <div class="palette-body">
          <div class="palette-graphic-frame mono-frame"><div class="palette-graphic mono-graphic"></div></div>
          <ul>
            <li><i style="--color:#ffffff"></i>Background <code>#FFFFFF</code></li>
            <li><i style="--color:#fafafa"></i>Surface <code>#FAFAFA</code></li>
            <li><i style="--color:#111111"></i>Text <code>#111111</code></li>
            <li><i style="--color:#e1e1e1"></i>Border <code>#E1E1E1</code></li>
          </ul>
        </div>
      </article>
      <article class="palette-card classic-palette">
        <header><div><h3>Classic</h3><p>Low-light focus with color cues.</p></div><span>Dark</span></header>
        <div class="palette-body">
          <div class="palette-graphic-frame classic-frame"><div class="palette-graphic classic-graphic"></div></div>
          <ul>
            <li><i style="--color:#090c11"></i>Background <code>#090C11</code></li>
            <li><i style="--color:#11161e"></i>Surface <code>#11161E</code></li>
            <li><i style="--color:#6c5ce7"></i>Purple <code>#6C5CE7</code></li>
            <li><i style="--color:#22d3ee"></i>Cyan <code>#22D3EE</code></li>
          </ul>
        </div>
      </article>
    </div>
  </section>
`);
