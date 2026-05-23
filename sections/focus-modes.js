window.renderSection("focus-modes", `
  <section class="section focus-modes">
    <div class="focus-heading">
      <p class="eyebrow">Focus modes</p>
      <h2>Three ways to focus.</h2>
      <p>Choose the timer that fits your workflow.</p>
    </div>

    <div class="focus-mode-row">
      <article class="focus-mode">
        <div class="focus-mode-copy">
          <span class="focus-mode-icon flow-icon"></span>
          <h3>Flow Session</h3>
          <p>Set a target duration and stay immersed.</p>
        </div>
        <picture>
          <source srcset="./assets/flow-session-classic.png" media="(prefers-color-scheme: dark)" />
          <img src="./assets/flow-session-mono.png" alt="Flow Session timer in Flowtime" />
        </picture>
      </article>

      <article class="focus-mode">
        <div class="focus-mode-copy">
          <span class="focus-mode-icon pomodoro-icon"></span>
          <h3>Pomodoro</h3>
          <p>Stay structured with work intervals.</p>
        </div>
        <picture>
          <source srcset="./assets/pomodoro-classic.png" media="(prefers-color-scheme: dark)" />
          <img src="./assets/pomodoro-mono.png" alt="Pomodoro timer in Flowtime" />
        </picture>
      </article>

      <article class="focus-mode">
        <div class="focus-mode-copy">
          <span class="focus-mode-icon timer-icon"></span>
          <h3>Classic Timer</h3>
          <p>Simple, intuitive time tracking.</p>
        </div>
        <picture>
          <source srcset="./assets/classic-timer-classic.png" media="(prefers-color-scheme: dark)" />
          <img src="./assets/classic-timer-mono.png" alt="Classic timer in Flowtime" />
        </picture>
      </article>
    </div>
  </section>
`);