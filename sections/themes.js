window.renderSection("themes", `
  <section class="section themes">
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
              <span class="project-briefcase" aria-hidden="true"></span>
              <b>Work</b>
            </div>
            <div class="icon-options" aria-hidden="true">
              <span class="option-work selected"></span>
              <span class="option-code"></span>
              <span class="option-leaf"></span>
            </div>
          </div>
          <div class="project-example classic-project">
            <header>
              <strong>Classic</strong>
              <span>Icon + color</span>
            </header>
            <div class="project-input">
              <span class="project-briefcase" aria-hidden="true"></span>
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
