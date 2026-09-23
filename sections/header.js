(function () {
  const headerHtml = `
    <a class="skip-link" href="#main-content">Skip to content</a>
    <header class="campaign-header">
      <div class="campaign-header-inner">
        <a class="campaign-brand" href="/" aria-label="Flowtime home">Flowtime</a>
        <nav class="campaign-nav" id="campaign-nav" aria-label="Main navigation">
          <a href="/#focus-modes">Features</a>
          <a href="/learn/">Learn</a>
          <a href="/updates/">Follow the build</a>
          <a href="/press/">Press</a>
          <a href="/pricing/">Pricing</a>
          <a class="nav-download" href="/download/">Download ↗</a>
        </nav>
        <button class="campaign-menu" aria-label="Open navigation" aria-expanded="false" aria-controls="campaign-nav">☰</button>
      </div>
    </header>
  `;

  window.renderSection('site-header', headerHtml);

  const toggle = document.querySelector('.campaign-menu');
  const nav = document.querySelector('#campaign-nav');

  if (toggle && nav) {
    const close = () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
      nav.classList.remove('is-open');
    };

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      nav.classList.toggle('is-open', open);
    });

    nav.addEventListener('click', (e) => {
      if (e.target.closest('a')) close();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        close();
        toggle.focus();
      }
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.campaign-header')) close();
    });
  }

  const main = document.querySelector('main');
  if (main && !main.id) {
    main.id = 'main-content';
  } else if (main) {
    const skip = document.querySelector('.skip-link');
    if (skip) skip.href = '#' + main.id;
  }
}());
