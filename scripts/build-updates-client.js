(function () {
  const grid = document.getElementById('updates-grid');
  if (!grid) return;
  const renderer = window.FlowtimeUpdateContent;
  // Read the current exported editor data, with static HTML as a no-JS fallback.
  if (renderer && Array.isArray(window.FlowtimeUpdatesData)) {
    grid.innerHTML = renderer.published(window.FlowtimeUpdatesData).map(renderer.card).join('');
  }
  const cards = Array.from(grid.querySelectorAll('[data-update-id]'));
  const filters = Array.from(document.querySelectorAll('[data-update-filter]'));
  const count = document.getElementById('updates-count-display');
  const empty = document.getElementById('updates-empty-display');
  function filter(platform) {
    let visible = 0;
    cards.forEach(card => { card.hidden = platform !== 'all' && card.dataset.platform !== platform; if (!card.hidden) visible++; });
    filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.updateFilter === platform)));
    count.textContent = `${visible} ${visible === 1 ? 'update' : 'updates'}`;
    empty.hidden = visible > 0;
  }
  filters.forEach(button => button.addEventListener('click', () => filter(button.dataset.updateFilter)));
  grid.querySelectorAll('[data-update-thumbnail]').forEach(img => {
    const loaded = () => { if (img.naturalWidth) img.parentElement.classList.add('has-image'); };
    img.addEventListener('load', loaded);
    img.addEventListener('error', () => { img.hidden = true; img.parentElement.classList.remove('has-image'); });
    if (img.complete) loaded();
  });
  function revealLinkedEntry() {
    const hash = location.hash.slice(1);
    const slug = new URLSearchParams(location.search).get('post');
    const card = cards.find(item => item.id === hash || item.dataset.slug === hash || (slug && item.dataset.slug === slug));
    if (!card) return;
    filter('all');
    const details = card.querySelector('details');
    if (details) details.open = true;
    card.scrollIntoView({ block:'start' });
  }
  window.addEventListener('hashchange', revealLinkedEntry);
  filter('all');
  revealLinkedEntry();
}());
