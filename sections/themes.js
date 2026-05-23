window.renderSection("themes", `
  <section id="themes" class="section themes">
    <div class="section-title">
      <p class="eyebrow">Themes</p>
      <h2>Two distinct ways to focus.</h2>
      <p>Mono is precise and quiet. Classic adds color when context matters.</p>
    </div>
    <div class="theme-content">
      <div class="theme-grid palette-grid">
        <article class="palette-card mono-palette">
          <header class="palette-heading">
            <div>
              <h3>Mono</h3>
              <p>Bright, minimal, distraction-free.</p>
            </div>
            <span class="theme-chip">Light</span>
          </header>
          <div class="palette-graphic mono-graphic" aria-hidden="true">
            <span class="palette-orbit"></span>
            <span class="palette-dot"></span>
          </div>
          <ul class="swatch-list" aria-label="Mono theme colors">
            <li><i style="--swatch: #FFFFFF"></i><span>Background</span><code>#FFFFFF</code></li>
            <li><i style="--swatch: #FAFAFA"></i><span>Surface</span><code>#FAFAFA</code></li>
            <li><i style="--swatch: #111111"></i><span>Text</span><code>#111111</code></li>
            <li><i style="--swatch: #E1E1E1"></i><span>Border</span><code>#E1E1E1</code></li>
          </ul>
        </article>
        <article class="palette-card classic-palette">
          <header class="palette-heading">
            <div>
              <h3>Classic</h3>
              <p>Low-light focus with color cues.</p>
            </div>
            <span class="theme-chip">Dark</span>
          </header>
          <div class="palette-graphic classic-graphic" aria-hidden="true">
            <span class="spectrum-ring"></span>
            <span class="classic-core"></span>
          </div>
          <ul class="swatch-list" aria-label="Classic theme colors">
            <li><i style="--swatch: #090C11"></i><span>Background</span><code>#090C11</code></li>
            <li><i style="--swatch: #11161E"></i><span>Surface</span><code>#11161E</code></li>
            <li><i style="--swatch: #6C5CE7"></i><span>Purple</span><code>#6C5CE7</code></li>
            <li><i style="--swatch: #22D3EE"></i><span>Cyan</span><code>#22D3EE</code></li>
          </ul>
        </article>
      </div>
      <article class="project-compare">
        <div class="compare-copy">
          <p class="eyebrow">Projects</p>
          <h3>One icon. A different language.</h3>
          <p>Both themes include icon selection. Classic also unlocks project color with a full color wheel.</p>
        </div>
        <div class="project-examples">
          <div class="project-example mono-project">
            <header>
              <strong>Mono</strong>
              <span>Icon only</span>
            </header>
            <div class="project-input">
              <svg class="material-svg project-material" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 6V4h-4v2H5v15h14V6h-5zm-3-1h2v1h-2V5zm6 14H7V8h10v11z"/></svg>
              <b>Work</b>
            </div>
            <div class="icon-options" aria-hidden="true">
              <span class="selected"><svg class="material-svg" viewBox="0 0 24 24"><path d="M14 6V4h-4v2H5v15h14V6h-5zm-3-1h2v1h-2V5zm6 14H7V8h10v11z"/></svg></span>
              <span><svg class="material-svg" viewBox="0 0 24 24"><path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg></span>
              <span><svg class="material-svg" viewBox="0 0 24 24"><path d="M12 10.1c1.76-2.01 2.04-4.8 0-8.1-2.04 3.3-1.76 6.09 0 8.1zm0 2.45C9.86 9.35 5.64 8.14 2 8c.36 5.17 4.37 9.63 10 10 5.63-.37 9.64-4.83 10-10-3.64.14-7.86 1.35-10 4.55zM12 16c-2.27-.16-4.29-1.43-5.62-3.43 2.2.61 4.09 1.97 5.62 3.43 1.53-1.46 3.42-2.82 5.62-3.43C16.29 14.57 14.27 15.84 12 16z"/></svg></span>
            </div>
          </div>
          <div class="project-example classic-project">
            <header>
              <strong>Classic</strong>
              <span>Icon + color</span>
            </header>
            <div class="project-input">
              <svg class="material-svg project-material" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 6V4h-4v2H5v15h14V6h-5zm-3-1h2v1h-2V5zm6 14H7V8h10v11z"/></svg>
              <b>Work</b>
              <i class="project-color"></i>
            </div>
            <div class="color-wheel" aria-label="Classic project color wheel">
              <span></span>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
`);
