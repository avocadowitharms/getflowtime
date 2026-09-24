document.querySelectorAll('.journal').forEach(journal => {
  let selected = 'All';
  const search = journal.querySelector('[data-article-search]');
  function filter() {
    const query = search.value.trim().toLowerCase();
    let count = 0;
    journal.querySelectorAll('[data-topic]').forEach(card => {
      card.hidden = (selected !== 'All' && card.dataset.topic !== selected) || !card.textContent.toLowerCase().includes(query);
      if (!card.hidden) count++;
    });
    journal.querySelector('[data-learn-count]').textContent = `${count} ${count === 1 ? 'article' : 'articles'}`;
    journal.querySelector('[data-empty-results]').hidden = count !== 0;
  }
  journal.querySelectorAll('[data-learn-filter]').forEach(button => button.addEventListener('click', () => {
    selected = button.dataset.learnFilter;
    journal.querySelectorAll('[data-learn-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    filter();
  }));
  search.addEventListener('input', filter);
});

document.querySelectorAll('[data-billing]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-billing]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  const period = button.dataset.billing;
  document.querySelector('[data-plan-price]').textContent = `$${button.dataset.price}`;
  document.querySelector('[data-plan-period]').textContent = {monthly:'/ month',yearly:'/ year',lifetime:'one time'}[period];
  document.querySelector('[data-plan-note]').textContent = period === 'lifetime' ? 'One purchase. Lifetime Pro access.' : `Billed ${period} through your app store.`;
}));

document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', async () => {
  const source = document.getElementById(button.dataset.copy);
  const status = document.querySelector('[data-copy-status]');
  try {
    await navigator.clipboard.writeText(source.textContent);
    status.textContent = 'Text copied to clipboard.';
  } catch {
    const range = document.createRange();
    range.selectNodeContents(source);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'Text selected. Use your device’s copy command to copy it.';
  }
}));

document.querySelectorAll('[data-mode-explorer]').forEach(explorer => {
  const buttons = Array.from(explorer.querySelectorAll('[data-mode-select]'));
  const panels = Array.from(explorer.querySelectorAll('[data-mode-detail]'));
  const intro = explorer.querySelector('[data-mode-intro]');
  let selected = null;

  function select(button) {
    const closing = !button || selected === button;
    const previous = selected;
    selected = closing ? null : button;
    explorer.classList.toggle('mode-expanded', !closing);
    intro.hidden = !closing;
    buttons.forEach(item => {
      item.hidden = !closing && item !== selected;
      item.setAttribute('aria-expanded', String(item === selected));
    });
    panels.forEach(panel => { panel.hidden = closing || panel.dataset.modeDetail !== selected.dataset.modeSelect; });
    if (closing) {
      previous?.focus({ preventScroll: true });
    } else {
      const panel = panels.find(item => !item.hidden);
      panel.querySelector('[data-mode-back]').focus({ preventScroll: true });
    }
  }

  buttons.forEach(button => button.addEventListener('click', () => select(button)));
  explorer.querySelectorAll('[data-mode-back]').forEach(button => button.addEventListener('click', () => select(null)));
  explorer.addEventListener('keydown', event => {
    if (event.key === 'Escape' && selected) { event.preventDefault(); select(null); }
  });
});

// Keep all original quotes in the HTML; enhance to a single rotating review.
document.querySelectorAll('[data-review-carousel]').forEach(carousel => {
  const slides = Array.from(carousel.querySelectorAll('.review-slide'));
  if (slides.length < 2) return;
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0;
  let focused = false;
  let timer;

  function show(next) {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const active = i === index;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
      slide.inert = !active;
    });
  }

  function schedule() {
    window.clearTimeout(timer);
    if (!motion.matches && !focused && !document.hidden) {
      timer = window.setTimeout(() => { show(index + 1); schedule(); }, 7000);
    }
  }

  carousel.classList.add('reviews-ready');
  show(0);
  // Avoid hiding a store link while a keyboard user is interacting with it.
  carousel.addEventListener('focusin', () => { focused = true; schedule(); });
  carousel.addEventListener('focusout', event => {
    focused = carousel.contains(event.relatedTarget);
    schedule();
  });
  document.addEventListener('visibilitychange', schedule);
  motion.addEventListener('change', schedule);
  schedule();
});

// Reveal content once it enters the viewport, keeping section backgrounds steady.
(() => {
  if (!document.body.classList.contains('reference-home') ||
      !('IntersectionObserver' in window)) return;
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches) return;
  const pending = new Set();
  const reveal = target => {
    target.classList.remove('scroll-reveal-pending');
    pending.delete(target);
    observer.unobserve(target);
  };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) reveal(target);
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0 });

  document.querySelectorAll('.reference-home main section:not(.campaign-hero) > *').forEach(target => {
    const rect = target.getBoundingClientRect();
    if (!rect.height || rect.top < window.innerHeight || target.contains(document.activeElement)) return;
    target.classList.add('scroll-reveal', 'scroll-reveal-pending');
    pending.add(target);
    observer.observe(target);
  });
  document.addEventListener('focusin', event => {
    pending.forEach(target => { if (target.contains(event.target)) reveal(target); });
  });
  motion.addEventListener('change', () => {
    if (motion.matches) pending.forEach(reveal);
  });
  window.addEventListener('beforeprint', () => pending.forEach(reveal));
})();
