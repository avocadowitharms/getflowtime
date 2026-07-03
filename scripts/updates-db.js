/**
 * UpdatesDB
 * Handles storage of Update objects from tracked site data and local editor saves.
 */
const UPDATES_STORAGE_KEY = 'flowtime-updates-data';
const UPDATES_SAVE_ENDPOINT = '/api/social-updates';

function normalizeUpdates(updates) {
  if (!Array.isArray(updates)) return [];
  return updates.filter(u => u && u.id && !String(u.id).startsWith('mock_'));
}

function getInitialUpdates() {
  const fileUpdates = Array.isArray(window.FlowtimeUpdatesData)
    ? normalizeUpdates(window.FlowtimeUpdatesData)
    : [];
  if (fileUpdates.length > 0) return fileUpdates;

  try {
    const data = localStorage.getItem(UPDATES_STORAGE_KEY);
    return data ? normalizeUpdates(JSON.parse(data)) : [];
  } catch (e) {
    console.error('Failed to parse updates from localStorage:', e);
    return [];
  }
}

function toAsciiJson(value) {
  return JSON.stringify(value, null, 2).replace(/[^\x00-\x7F]/g, char => {
    return char.split('').map(part => {
      return '\\u' + part.charCodeAt(0).toString(16).padStart(4, '0');
    }).join('');
  });
}

let updatesCache = getInitialUpdates();

const UpdatesDB = {
  /**
   * Fetches all update entries.
   * @returns {Array<object>}
   */
  getAll() {
    return updatesCache;
  },

  /**
   * Saves the entire updates array to localStorage.
   * @param {Array<object>} updates 
   */
  saveAll(updates) {
    updatesCache = normalizeUpdates(updates);
    window.FlowtimeUpdatesData = updatesCache;
    localStorage.setItem(UPDATES_STORAGE_KEY, JSON.stringify(updatesCache));
    this.persistToSource();
  },

  /**
   * Persists updates into data/social-updates.json and data/social-updates.js
   * when the local preview server is running. It safely no-ops on deployed hosts.
   */
  persistToSource() {
    if (!['localhost', '127.0.0.1'].includes(window.location.hostname)) {
      return Promise.resolve({ ok: false, skipped: true });
    }

    return fetch(UPDATES_SAVE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: toAsciiJson(updatesCache)
    }).catch(error => {
      console.warn('Could not save updates to source file. Run scripts/serve.ps1 for automatic local saves.', error);
      return { ok: false, error };
    });
  },

  /**
   * Finds an update by ID.
   * @param {string} id 
   * @returns {object|null}
   */
  getById(id) {
    return this.getAll().find(u => u.id === id) || null;
  },

  /**
   * Finds an update by slug.
   * @param {string} slug 
   * @returns {object|null}
   */
  getBySlug(slug) {
    return this.getAll().find(u => u.slug === slug) || null;
  },

  /**
   * Saves or updates an entry.
   * @param {object} update 
   * @returns {object} The saved/updated object
   */
  save(update) {
    const updates = this.getAll();
    const index = updates.findIndex(u => u.id === update.id);
    
    // Set system timestamps
    const nowStr = new Date().toISOString();
    update.updatedAt = nowStr;
    
    // Automatically set publishedAt timestamp if transition to published occurs
    if (update.status === 'published') {
      if (!update.publishedAt) {
        update.publishedAt = nowStr;
      }
    } else {
      update.publishedAt = null;
    }

    if (index >= 0) {
      // Preserve original createdAt
      update.createdAt = updates[index].createdAt || nowStr;
      updates[index] = update;
    } else {
      update.createdAt = nowStr;
      updates.push(update);
    }
    
    this.saveAll(updates);
    return update;
  },

  /**
   * Deletes an update by ID.
   * @param {string} id 
   */
  delete(id) {
    const updates = this.getAll();
    const filtered = updates.filter(u => u.id !== id);
    this.saveAll(filtered);
  }
};

// Export to window object for browser access
window.UpdatesDB = UpdatesDB;
