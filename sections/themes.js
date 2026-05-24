window.renderSection("themes", `
  <section id="themes" class="section themes">
    <div class="section-heading">
      <p class="eyebrow">Themes</p>
      <h2>Two distinct ways to focus.</h2>
      <p>Mono is precise and quiet. Classic adds color when context matters.</p>
    </div>
    <div class="theme-grid">
      <article class="palette-card mono-palette">
        <header><div><h3>Mono</h3><p>Bright, minimal, distraction-free.</p></div><span>Light</span></header>
        <div class="palette-body">
          <div class="palette-graphic mono-graphic"><i></i></div>
          <ul>
            <li><i style="--color:#ffffff"></i>Background <code>#FFFFFF</code></li>
            <li><i style="--color:#fafafa"></i>Surface <code>#FAFAFA</code></li>
            <li><i style="--color:#111111"></i>Text <code>#111111</code></li>
            <li><i style="--color:#e1e1e1"></i>Border <code>#E1E1E1</code></li>
          </ul>
        </div>
        <button class="theme-preview" type="button" data-theme-preview="mono" aria-pressed="true">Preview Mono <span>&rarr;</span></button>
      </article>
      <article class="palette-card classic-palette">
        <header><div><h3>Classic</h3><p>Low-light focus with color cues.</p></div><span>Dark</span></header>
        <div class="palette-body">
          <div class="palette-graphic classic-graphic"><i></i></div>
          <ul>
            <li><i style="--color:#090c11"></i>Background <code>#090C11</code></li>
            <li><i style="--color:#11161e"></i>Surface <code>#11161E</code></li>
            <li><i style="--color:#6c5ce7"></i>Purple <code>#6C5CE7</code></li>
            <li><i style="--color:#22d3ee"></i>Cyan <code>#22D3EE</code></li>
          </ul>
        </div>
        <button class="theme-preview" type="button" data-theme-preview="classic" aria-pressed="false">Preview Classic <span>&rarr;</span></button>
      </article>
    </div>
    <div class="theme-note">
      <svg class="material-svg" viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2H17a4 4 0 0 0 4-4c0-3.9-4-7.2-9-7.2zm-5.5 9A1.5 1.5 0 1 1 8 10.5 1.5 1.5 0 0 1 6.5 12zM9 7.5A1.5 1.5 0 1 1 10.5 9 1.5 1.5 0 0 1 9 7.5zm4.5 0A1.5 1.5 0 1 1 15 9a1.5 1.5 0 0 1-1.5-1.5zm4 4.5a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5z"/></svg>
      <div><strong>Instantly switch themes</strong><p>Preview either design language on this page.</p></div>
    </div>
  </section>
`);
