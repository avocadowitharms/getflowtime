document.querySelectorAll('[data-learn-filter]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-learn-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 let count=0;document.querySelectorAll('[data-topic]').forEach(card=>{card.hidden=button.dataset.learnFilter!=='All'&&card.dataset.topic!==button.dataset.learnFilter;if(!card.hidden)count++;});
 document.querySelector('[data-learn-count]').textContent=`${count} articles`;
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
