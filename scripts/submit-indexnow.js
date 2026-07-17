const https = require("https");
const fs = require("fs");
const path = require("path");
const facts = require("../data/product-facts");

const root = path.resolve(__dirname, "..");
const key = process.env.INDEXNOW_KEY || fs.readFileSync(path.join(root, "indexnow-key.txt"), "utf8").trim();
const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const cliUrls = process.argv.slice(2);
const urlList = cliUrls.length ? cliUrls : sitemapUrls;

if (!key) {
  throw new Error("Missing IndexNow key. Set INDEXNOW_KEY or add indexnow-key.txt.");
}

if (!urlList.length) {
  throw new Error("No URLs to submit.");
}

const payload = JSON.stringify({
  host: new URL(facts.siteUrl).host,
  key,
  keyLocation: `${facts.siteUrl}/indexnow-key.txt`,
  urlList
});

const request = https.request({
  hostname: "api.indexnow.org",
  path: "/indexnow",
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(payload)
  }
}, (response) => {
  let body = "";
  response.setEncoding("utf8");
  response.on("data", (chunk) => {
    body += chunk;
  });
  response.on("end", () => {
    if (response.statusCode < 200 || response.statusCode >= 300) {
      console.error(`IndexNow submission failed with ${response.statusCode}.`);
      if (body) {
        console.error(body);
      }
      process.exit(1);
    }
    console.log(`Submitted ${urlList.length} URL(s) to IndexNow.`);
  });
});

request.on("error", (error) => {
  console.error(`IndexNow submission failed: ${error.message}`);
  process.exit(1);
});

request.write(payload);
request.end();
