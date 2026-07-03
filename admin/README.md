# Local Admin Notes

The Social Library admin page is a local curator for static-site content. It is intended for local editing only.

Run the local preview server and open:

`http://localhost:5500/admin/social-library/index.html`

The live Netlify site redirects `/admin/*` to a 404.

When the local preview server is running, edits in the admin save to:

- `data/social-updates.json`
- `data/social-updates.js`

Those files are the source used by the homepage social gallery and the public updates page. Commit and deploy them when you want the live site to change.
