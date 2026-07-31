const fs = require("fs");
const http = require("http");
const path = require("path");
const { URL } = require("url");

const root = path.resolve(__dirname, "..");
const host = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT || process.argv[2] || 5500);
const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8"
};

function send(res, status, body, contentType) {
  res.writeHead(status, {
    "Content-Type": contentType,
    "Content-Length": Buffer.byteLength(body),
    "Connection": "close"
  });
  res.end(body);
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("error", reject);
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
  });
}

async function handleSocialUpdates(req, res) {
  try {
    const body = await readRequestBody(req);
    const parsed = JSON.parse(body);

    if (!Array.isArray(parsed)) {
      throw new Error("Expected a JSON array of updates.");
    }

    const dataDir = path.join(root, "data");
    const json = `${JSON.stringify(parsed, null, 2)}\n`;
    fs.mkdirSync(dataDir, { recursive: true });
    fs.writeFileSync(path.join(dataDir, "social-updates.json"), json);
    fs.writeFileSync(path.join(dataDir, "social-updates.js"), `window.FlowtimeUpdatesData = ${json}`);
    send(res, 200, '{"ok":true}', "application/json; charset=utf-8");
  } catch (_error) {
    send(res, 400, '{"ok":false,"error":"Invalid update payload"}', "application/json; charset=utf-8");
  }
}

function staticFilePath(requestUrl) {
  const url = new URL(requestUrl, `http://${host}:${port}`);
  let pathname = decodeURIComponent(url.pathname);

  if (pathname === "/") {
    pathname = "/index.html";
  }

  const filePath = path.resolve(root, pathname.replace(/^\/+/, ""));
  const isInsideRoot = filePath === root || filePath.startsWith(`${root}${path.sep}`);
  return isInsideRoot ? filePath : null;
}

async function handleUpdateNotes(req, res) {
  try {
    const body = await readRequestBody(req);
    const parsed = JSON.parse(body);

    const updateNotesPath = path.join(root, "update-notes.json");
    const json = `${JSON.stringify(parsed, null, 2)}\n`;
    fs.writeFileSync(updateNotesPath, json);
    send(res, 200, '{"ok":true}', "application/json; charset=utf-8");
  } catch (_error) {
    send(res, 400, '{"ok":false,"error":"Invalid update notes payload"}', "application/json; charset=utf-8");
  }
}

const server = http.createServer(async (req, res) => {
  const pathname = req.url ? new URL(req.url, `http://${host}:${port}`).pathname : "";
  if (req.method === "POST" && pathname === "/api/social-updates") {
    await handleSocialUpdates(req, res);
    return;
  }
  if (req.method === "POST" && pathname === "/api/update-notes") {
    await handleUpdateNotes(req, res);
    return;
  }

  if (req.method !== "GET" && req.method !== "HEAD") {
    send(res, 405, "Method not allowed", "text/plain; charset=utf-8");
    return;
  }

  const filePath = req.url ? staticFilePath(req.url) : null;

  if (!filePath || !fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    send(res, 404, "Not found", "text/plain; charset=utf-8");
    return;
  }

  const extension = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[extension] || "application/octet-stream";
  const body = req.method === "HEAD" ? "" : fs.readFileSync(filePath);
  res.writeHead(200, {
    "Content-Type": contentType,
    "Content-Length": Buffer.byteLength(body),
    "Connection": "close"
  });
  res.end(body);
});

server.listen(port, host, () => {
  console.log(`Flowtime preview ready at http://${host}:${port}/`);
});