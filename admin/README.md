# Flowtime Admin Tools

The local admin tools allow curating static-site content, managing update notes, and triggering in-app pop-up notifications for Flowtime.

---

## 🚀 Quick Start (One-Click Launcher)

Double-click **`FlowtimeAdmin.exe`** in the repository root to automatically launch the local server backend and open the combined **Flowtime Admin Hub** in your web browser.

---

## 🛠️ Alternative Launcher Options (No Node/npm Required)

If running from terminal or scripts:

### Option 1: PowerShell (Built-in on Windows)
```powershell
powershell -ExecutionPolicy Bypass -File scripts/serve.ps1
```

### Option 2: Python
```bash
py scripts/serve_update_notes.py
```

---

## 📍 Admin Interfaces

- **Admin Hub Combined Dashboard**: `http://localhost:5500/admin/index.html`
- **Update Notes & Pop-Up Creator**: `http://localhost:5500/admin/update-notes/index.html` (saves to `update-notes.json`)
- **Social Library Admin**: `http://localhost:5500/admin/social-library/index.html` (saves to `data/social-updates.json`)

*Note: The production site redirects `/admin/*` for security.*
