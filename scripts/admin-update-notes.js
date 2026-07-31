/**
 * Admin Update Notes & In-App Pop-up Notifications Creator JS
 */

(function () {
  let notesData = {
    version: '2.3.24',
    title: 'What’s new in Flowtime',
    subtitle: 'Quick Start templates, notification templates, and 10 language support.',
    slides: [],
    entries: []
  };

  let selectedEntryIndex = 0;
  let selectedSlideIndex = 0;

  // DOM Elements
  const entriesListContainer = document.getElementById('entries-list-container');
  const slidesContainer = document.getElementById('slides-container');
  const inputId = document.getElementById('input-id');
  const inputVersion = document.getElementById('input-version');
  const inputTitle = document.getElementById('input-title');
  const inputSubtitle = document.getElementById('input-subtitle');
  const inputPopupType = document.getElementById('input-popup-type');
  const inputPublished = document.getElementById('input-published');
  const inputShowPopup = document.getElementById('input-show-popup');
  const inputMinVersion = document.getElementById('input-min-version');
  const inputMaxVersion = document.getElementById('input-max-version');

  // Simulator Elements
  const simVersionText = document.getElementById('sim-version-text');
  const simHeroBox = document.getElementById('sim-hero-box');
  const simPillText = document.getElementById('sim-pill-text');
  const simTitleText = document.getElementById('sim-title-text');
  const simDescText = document.getElementById('sim-desc-text');
  const simItemsList = document.getElementById('sim-items-list');
  const simDotsContainer = document.getElementById('sim-dots-container');

  // Buttons
  const btnNewEntry = document.getElementById('btn-new-entry');
  const btnSaveServer = document.getElementById('btn-save-server');
  const btnExportJson = document.getElementById('btn-export-json');
  const btnDeleteEntry = document.getElementById('btn-delete-entry');
  const btnAddSlide = document.getElementById('btn-add-slide');

  async function loadData() {
    try {
      const res = await fetch('/update-notes.json');
      if (res.ok) {
        const data = await res.json();
        if (data && typeof data === 'object') {
          notesData = data;
          if (!Array.isArray(notesData.entries)) {
            notesData.entries = [];
          }
        }
      }
    } catch (e) {
      console.warn('Could not fetch /update-notes.json, using defaults.', e);
    }

    if (notesData.entries.length === 0) {
      notesData.entries.push({
        id: 'entry_' + (notesData.version || '2.3.24'),
        version: notesData.version || '2.3.24',
        publishedAt: new Date().toISOString(),
        title: notesData.title || 'What’s new in Flowtime',
        subtitle: notesData.subtitle || 'Small improvements to help you focus better.',
        showAsPopup: true,
        popupType: 'release_notes',
        slides: notesData.slides || []
      });
    }

    renderEntriesList();
    loadEntryToForm(0);
  }

  function renderEntriesList() {
    entriesListContainer.innerHTML = '';
    notesData.entries.forEach((entry, idx) => {
      const card = document.createElement('div');
      card.className = 'entry-card' + (idx === selectedEntryIndex ? ' is-selected' : '');

      const isPopup = entry.showAsPopup !== false;
      const typeLabel = entry.popupType || 'release_notes';

      card.innerHTML = `
        <div class="entry-card-title">${escapeHtml(entry.title || 'Untitled Entry')}</div>
        <div class="entry-card-meta">
          <span>v${escapeHtml(entry.version || '2.3.24')}</span>
          ${isPopup ? '<span class="badge badge-popup">POPUP</span>' : ''}
          <span class="badge ${typeLabel === 'announcement' ? 'badge-announcement' : 'badge-release'}">${escapeHtml(typeLabel)}</span>
        </div>
      `;

      card.addEventListener('click', () => {
        saveCurrentFormToEntry();
        selectedEntryIndex = idx;
        selectedSlideIndex = 0;
        renderEntriesList();
        loadEntryToForm(idx);
      });

      entriesListContainer.appendChild(card);
    });
  }

  function loadEntryToForm(idx) {
    if (idx < 0 || idx >= notesData.entries.length) return;
    const entry = notesData.entries[idx];

    inputId.value = entry.id || '';
    inputVersion.value = entry.version || '';
    inputTitle.value = entry.title || '';
    inputSubtitle.value = entry.subtitle || '';
    inputPopupType.value = entry.popupType || 'release_notes';
    inputPublished.value = entry.publishedAt || '';
    inputShowPopup.checked = entry.showAsPopup !== false;
    inputMinVersion.value = entry.minAppVersion || '';
    inputMaxVersion.value = entry.maxAppVersion || '';

    renderSlidesList(entry);
    updateSimulator();
  }

  function saveCurrentFormToEntry() {
    if (selectedEntryIndex < 0 || selectedEntryIndex >= notesData.entries.length) return;
    const entry = notesData.entries[selectedEntryIndex];

    entry.id = inputId.value.trim() || ('entry_' + (inputVersion.value.trim() || 'default'));
    entry.version = inputVersion.value.trim();
    entry.title = inputTitle.value.trim();
    entry.subtitle = inputSubtitle.value.trim();
    entry.popupType = inputPopupType.value;
    entry.publishedAt = inputPublished.value.trim() || new Date().toISOString();
    entry.showAsPopup = inputShowPopup.checked;
    if (entry.showAsPopup) {
      notesData.entries.forEach((e, idx) => {
        if (idx !== selectedEntryIndex) {
          e.showAsPopup = false;
        }
      });
    }
    entry.minAppVersion = inputMinVersion.value.trim() || null;
    entry.maxAppVersion = inputMaxVersion.value.trim() || null;

    if (selectedEntryIndex === 0) {
      notesData.version = entry.version;
      notesData.title = entry.title;
      notesData.subtitle = entry.subtitle;
      notesData.slides = entry.slides;
    }
  }

  function renderSlidesList(entry) {
    slidesContainer.innerHTML = '';
    const slides = entry.slides || [];

    if (slides.length === 0) {
      slidesContainer.innerHTML = '<p style="font-size:0.78rem; color:#94a3b8; padding:6px 0;">No slides added yet. Click "+ Add Slide" to create slides.</p>';
      return;
    }

    slides.forEach((slide, sIdx) => {
      const slideCard = document.createElement('div');
      slideCard.className = 'slide-item';
      if (sIdx === selectedSlideIndex) {
        slideCard.style.borderColor = '#3b82f6';
      }

      slideCard.innerHTML = `
        <div class="slide-item-header">
          <span>Slide ${sIdx + 1} (${escapeHtml(slide.type || 'feature')})</span>
          <button class="btn-danger-sm btn-remove-slide" data-sidx="${sIdx}">&times; Remove</button>
        </div>
        <div class="field-row">
          <div class="field">
            <label>Type</label>
            <select class="slide-type" data-sidx="${sIdx}">
              <option value="feature" ${slide.type === 'feature' ? 'selected' : ''}>Feature</option>
              <option value="list" ${slide.type === 'list' ? 'selected' : ''}>List</option>
            </select>
          </div>
          <div class="field">
            <label>Pill Label</label>
            <input class="slide-label" type="text" data-sidx="${sIdx}" value="${escapeHtml(slide.label || '')}" placeholder="NEW / FEATURE" />
          </div>
        </div>
        <div class="field">
          <label>Slide Title</label>
          <input class="slide-title" type="text" data-sidx="${sIdx}" value="${escapeHtml(slide.title || '')}" placeholder="Slide Title" />
        </div>
        <div class="field">
          <label>Slide Description</label>
          <textarea class="slide-desc" data-sidx="${sIdx}" rows="2" placeholder="Slide Description">${escapeHtml(slide.description || '')}</textarea>
        </div>
        <div class="field">
          <label>Image URL (Optional)</label>
          <input class="slide-image" type="text" data-sidx="${sIdx}" value="${escapeHtml(slide.imageUrl || '')}" placeholder="https://..." />
        </div>
        ${slide.type === 'list' ? `
          <div class="field">
            <label>Bullet Items (One per line)</label>
            <textarea class="slide-items" data-sidx="${sIdx}" rows="3" placeholder="Item 1\nItem 2\nItem 3">${escapeHtml((slide.items || []).join('\n'))}</textarea>
          </div>
        ` : ''}
      `;

      slideCard.addEventListener('click', (e) => {
        if (!e.target.classList.contains('btn-remove-slide')) {
          selectedSlideIndex = sIdx;
          updateSimulator();
        }
      });

      slidesContainer.appendChild(slideCard);
    });

    slidesContainer.querySelectorAll('input, select, textarea').forEach(elem => {
      elem.addEventListener('input', (e) => {
        const sIdx = parseInt(e.target.getAttribute('data-sidx'), 10);
        const slide = entry.slides[sIdx];
        if (!slide) return;

        if (e.target.classList.contains('slide-type')) slide.type = e.target.value;
        if (e.target.classList.contains('slide-label')) slide.label = e.target.value;
        if (e.target.classList.contains('slide-title')) slide.title = e.target.value;
        if (e.target.classList.contains('slide-desc')) slide.description = e.target.value;
        if (e.target.classList.contains('slide-image')) slide.imageUrl = e.target.value;
        if (e.target.classList.contains('slide-items')) {
          slide.items = e.target.value.split('\n').map(s => s.trim()).filter(Boolean);
        }

        if (e.target.classList.contains('slide-type')) {
          renderSlidesList(entry);
        }
        updateSimulator();
      });
    });

    slidesContainer.querySelectorAll('.btn-remove-slide').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const sIdx = parseInt(btn.getAttribute('data-sidx'), 10);
        entry.slides.splice(sIdx, 1);
        if (selectedSlideIndex >= entry.slides.length) {
          selectedSlideIndex = Math.max(0, entry.slides.length - 1);
        }
        renderSlidesList(entry);
        updateSimulator();
      });
    });
  }

  function updateSimulator() {
    const entry = notesData.entries[selectedEntryIndex];
    if (!entry) return;

    simVersionText.textContent = entry.version ? ('v' + entry.version) : 'v2.4.0';

    const slides = entry.slides || [];
    if (selectedSlideIndex >= slides.length) {
      selectedSlideIndex = Math.max(0, slides.length - 1);
    }

    const currentSlide = slides[selectedSlideIndex] || {
      type: 'feature',
      label: 'NEW',
      title: entry.title || 'What’s new in Flowtime',
      description: entry.subtitle || 'Description text goes here.',
      items: []
    };

    simPillText.textContent = currentSlide.label || 'NEW';
    simPillText.style.display = currentSlide.label ? 'inline-block' : 'none';

    simTitleText.textContent = currentSlide.title || entry.title || 'What’s new in Flowtime';
    simDescText.textContent = currentSlide.description || entry.subtitle || 'Description text';

    if (currentSlide.imageUrl && currentSlide.imageUrl.trim() !== '') {
      simHeroBox.style.display = 'block';
      simHeroBox.innerHTML = `<img src="${escapeHtml(currentSlide.imageUrl)}" alt="Hero Image" />`;
    } else {
      simHeroBox.style.display = 'none';
      simHeroBox.innerHTML = '';
    }

    simItemsList.innerHTML = '';
    if (currentSlide.items && currentSlide.items.length > 0) {
      currentSlide.items.forEach(item => {
        const itemRow = document.createElement('div');
        itemRow.className = 'sim-item-row';
        itemRow.innerHTML = `<span style="color:#34d399; font-weight:bold;">✓</span> <span>${escapeHtml(item)}</span>`;
        simItemsList.appendChild(itemRow);
      });
    }

    simDotsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.className = 'sim-dot' + (idx === selectedSlideIndex ? ' active' : '');
      dot.style.cursor = 'pointer';
      dot.addEventListener('click', () => {
        selectedSlideIndex = idx;
        updateSimulator();
      });
      simDotsContainer.appendChild(dot);
    });
  }

  [inputId, inputVersion, inputTitle, inputSubtitle, inputPopupType, inputPublished, inputShowPopup, inputMinVersion, inputMaxVersion].forEach(elem => {
    elem.addEventListener('input', () => {
      saveCurrentFormToEntry();
      renderEntriesList();
      updateSimulator();
    });
  });

  btnNewEntry.addEventListener('click', () => {
    saveCurrentFormToEntry();
    const newEntry = {
      id: 'entry_' + Date.now(),
      version: '2.4.0',
      publishedAt: new Date().toISOString(),
      title: 'New Update Title',
      subtitle: 'New update description subtitle.',
      showAsPopup: true,
      popupType: 'release_notes',
      slides: [
        {
          type: 'feature',
          label: 'NEW',
          title: 'New Feature Highlight',
          description: 'Explanation of the new capability.'
        }
      ]
    };
    notesData.entries.unshift(newEntry);
    selectedEntryIndex = 0;
    selectedSlideIndex = 0;
    renderEntriesList();
    loadEntryToForm(0);
  });

  btnAddSlide.addEventListener('click', () => {
    const entry = notesData.entries[selectedEntryIndex];
    if (!entry) return;
    if (!entry.slides) entry.slides = [];

    entry.slides.push({
      type: 'feature',
      label: 'NEW',
      title: 'New Slide Title',
      description: 'Slide description details.'
    });

    selectedSlideIndex = entry.slides.length - 1;
    renderSlidesList(entry);
    updateSimulator();
  });

  btnDeleteEntry.addEventListener('click', () => {
    if (notesData.entries.length <= 1) {
      alert('Cannot delete the last remaining entry.');
      return;
    }
    if (confirm('Are you sure you want to delete this update entry?')) {
      notesData.entries.splice(selectedEntryIndex, 1);
      selectedEntryIndex = 0;
      selectedSlideIndex = 0;
      renderEntriesList();
      loadEntryToForm(0);
    }
  });

  btnSaveServer.addEventListener('click', async () => {
    saveCurrentFormToEntry();

    const confirmed = confirm(
      'Are you sure you want to save all changes directly to update-notes.json?\n\nOnce saved, you can commit and push the updated file to your server/repository.'
    );

    if (!confirmed) return;

    try {
      const res = await fetch('/api/update-notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(notesData, null, 2)
      });

      if (res.ok) {
        alert('✅ Successfully updated update-notes.json!\n\nYou can now commit and push the updated file to your repository.');
      } else {
        alert('⚠️ Server API endpoint returned an error. Downloading updated update-notes.json file instead...');
        triggerJsonDownload();
      }
    } catch (e) {
      alert('⚠️ Local server backend not active. Downloading updated update-notes.json file directly to replace in your repository...');
      triggerJsonDownload();
    }
  });

  function triggerJsonDownload() {
    saveCurrentFormToEntry();
    const jsonStr = JSON.stringify(notesData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'update-notes.json';
    a.click();
    URL.revokeObjectURL(url);
  }

  btnExportJson.addEventListener('click', () => {
    triggerJsonDownload();
  });

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  loadData();
})();
