# Local Admin Tools

The local admin tools allow curating static-site content and managing update notes / in-app pop-up notifications for Flowtime.

## How to Start the Local Dev Server (No Node/npm Required)

You can run the server using either **PowerShell** or **Python** (both built-in / pre-installed on Windows):

### Option 1: PowerShell (Built-in on Windows)
```powershell
powershell -ExecutionPolicy Bypass -File scripts/serve.ps1
```

### Option 2: Python
```bash
python scripts/serve_update_notes.py
```

---

## Admin Interfaces

Once the server is running, open the following URLs in your browser:

### 1. Update Notes & Pop-Up Notifications Creator
`http://localhost:5500/admin/update-notes/index.html`

Edits in this tool save directly to:
- `update-notes.json`

This file is fetched by the Flowtime Flutter app to display What's New release notes and trigger in-app pop-up notifications.

### 2. Social Library Admin
`http://localhost:5500/admin/social-library/index.html`

Edits in this tool save to:
- `data/social-updates.json`
- `data/social-updates.js`

*Note: The live Netlify site redirects `/admin/*` to a 404 for security.*
