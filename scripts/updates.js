/**
 * Flowtime "Follow the Build" Visual Journal Client Script
 * Clean placeholder layout matching Mockup 1
 */
(function () {
  const flagshipUpdates = [
    {
      id: "build_42",
      number: "#42",
      date: "SEP 12, 2026",
      title: "Flowtime got a little louder.",
      description: "A completely new timer design, customizable type and a more playful identity. Same idea, just bolder.",
      category: "Design",
      cardType: "loud",
      body: `Flowtime has always been about getting started quickly. The new timer screen takes that even further with a bold, minimal design and large, customizable type. It's simple, clear and a lot more fun to use.

### Why the change?
We noticed that many users keep Flowtime running on their desk throughout the day as a dedicated digital desk clock. By giving the timer numbers maximum prominence, you can see your remaining focus time at a glance from across the room.

### Design process
We explored several typefaces before settling on a customized grotesk with ultra-tight tracking and vertical digit stacking.

### What's next
Next up are custom typography weights and soundscapes tailored for deep work.`
    },
    {
      id: "build_41",
      number: "#41",
      date: "SEP 5, 2026",
      title: "Simplicity wins again.",
      description: "Sometimes less is more. A new minimal theme, cleaner navigation and a timer that gets out of your way even more.",
      category: "Development",
      cardType: "simplicity",
      body: `We stripped away non-essential UI borders and reduced visual noise so the screen breathes and focus remains uninterrupted.`
    },
    {
      id: "build_40",
      number: "#40",
      date: "AUG 29, 2026",
      title: "App Shielding comes to Flowtime.",
      description: "Block distractions, stay in control. App Shielding is now available in the beta build.",
      category: "Releases",
      cardType: "shielding",
      body: `App Shielding allows you to selectively block distracting social and news apps while your focus session is active. You always remain in control and can override if needed.`
    },
    {
      id: "build_39",
      number: "#39",
      date: "AUG 16, 2026",
      title: "A first look at statistics.",
      description: "New insights to help you understand your focus. Still work in progress, but it's getting there.",
      category: "Design",
      cardType: "stats",
      body: `Visualizing focus time by day, project, and session length without complicated corporate spreadsheets.`
    },
    {
      id: "build_38",
      number: "#38",
      date: "AUG 2, 2026",
      title: "Colors, at last.",
      description: "You asked for more personalization, so Flowtime now supports custom accent colors. Make it yours.",
      category: "Design",
      cardType: "colors",
      body: `Personalize your timer with vibrant Flowtime accent colors including acid green, pink, purple, orange and blue.`
    }
  ];

  let currentCategory = "All";
  const categories = ["All", "Development", "Design", "Marketing", "Releases", "Behind the scenes"];

  const listView = document.getElementById('updates-list-view');
  const detailView = document.getElementById('updates-detail-view');
  const grid = document.getElementById('updates-grid');
  const tagsContainer = document.getElementById('updates-tags-container');
  const countDisplay = document.getElementById('updates-count-display');
  const backBtn = document.getElementById('back-to-updates-btn');

  function getCardPreviewHtml(cardType) {
    if (cardType === "loud") {
      return `<div class="ui-placeholder" style="width: 100%; height: 260px; border-radius: 20px;">Loud Timer Visual</div>`;
    }
    if (cardType === "simplicity") {
      return `<div class="ui-placeholder ui-placeholder-light" style="width: 100%; height: 260px; border-radius: 20px; transform: rotate(-3deg);">Minimal Theme Visual</div>`;
    }
    if (cardType === "shielding") {
      return `<div class="ui-placeholder" style="width: 100%; height: 260px; border-radius: 20px;">App Shielding Visual</div>`;
    }
    if (cardType === "stats") {
      return `<div class="ui-placeholder" style="width: 100%; height: 260px; border-radius: 20px; background: rgba(0,0,0,0.1); color: #000; border: 1px solid rgba(0,0,0,0.15);">Statistics Preview</div>`;
    }
    if (cardType === "colors") {
      return `<div class="ui-placeholder" style="width: 100%; height: 260px; border-radius: 20px;">Color Themes Visual</div>`;
    }
    return '';
  }

  function renderFilters() {
    if (!tagsContainer) return;
    tagsContainer.innerHTML = categories.map(cat => `
      <button type="button" data-tag="${cat}" aria-pressed="${cat === currentCategory}">
        ${cat}
      </button>
    `).join('');

    tagsContainer.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        currentCategory = btn.dataset.tag;
        renderFilters();
        renderGrid();
      });
    });
  }

  function renderGrid() {
    if (!grid) return;
    const filtered = currentCategory === "All" 
      ? flagshipUpdates 
      : flagshipUpdates.filter(u => u.category === currentCategory);

    if (countDisplay) {
      countDisplay.textContent = `${filtered.length} update${filtered.length === 1 ? '' : 's'}`;
    }

    grid.innerHTML = filtered.map((u, i) => {
      let cardClass = "update-card";
      if (u.cardType === "simplicity") cardClass += " update-card-reverse";
      else if (u.cardType === "shielding") cardClass += " update-card-dark";
      else if (u.cardType === "stats") cardClass += " update-card-pink update-card-reverse";

      return `
        <article class="${cardClass}" data-id="${u.id}">
          <div class="update-card-copy">
            <div class="meta">
              <span>${u.number}</span> · <span>${u.date}</span>
            </div>
            <h2>${u.title}</h2>
            <p>${u.description}</p>
            <div>
              <a href="#detail-${u.id}" class="text-link" data-open-update="${u.id}">Read update →</a>
            </div>
          </div>
          <div class="update-card-preview">
            ${getCardPreviewHtml(u.cardType)}
          </div>
        </article>
      `;
    }).join('');

    grid.querySelectorAll('[data-open-update]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        showDetail(link.dataset.openUpdate);
      });
    });
  }

  function showDetail(id) {
    const item = flagshipUpdates.find(u => u.id === id);
    if (!item) return;

    if (listView) listView.hidden = true;
    if (detailView) detailView.hidden = false;

    const numBadge = document.getElementById('detail-number-badge');
    const dateEl = document.getElementById('detail-date');
    const titleEl = document.getElementById('detail-title');
    const descEl = document.getElementById('detail-description');
    const bodyEl = document.getElementById('detail-body');

    if (numBadge) numBadge.textContent = item.number;
    if (dateEl) dateEl.textContent = item.date;
    if (titleEl) titleEl.textContent = item.title;
    if (descEl) descEl.textContent = item.description;
    
    if (bodyEl) {
      const paragraphs = item.body.split('\n\n').map(p => {
        if (p.startsWith('### ')) {
          return `<h3 style="font-size: 26px; margin: 36px 0 12px;">${p.replace('### ', '')}</h3>`;
        }
        return `<p style="font-size: 18px; line-height: 1.7; margin-bottom: 20px;">${p}</p>`;
      }).join('');
      bodyEl.innerHTML = `
        <div style="margin-bottom: 40px; background: var(--bg-soft); border-radius: var(--radius-md); padding: 48px; display: flex; justify-content: center;">
          ${getCardPreviewHtml(item.cardType)}
        </div>
        ${paragraphs}
      `;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function hideDetail() {
    if (detailView) detailView.hidden = true;
    if (listView) listView.hidden = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (backBtn) {
    backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      hideDetail();
    });
  }

  renderFilters();
  renderGrid();
}());
