const fs = require("fs");
const path = require("path");
const facts = require("../data/product-facts");

const root = path.resolve(__dirname, "..");
const siteUrl = facts.siteUrl;

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    return { data: {}, body: markdown };
  }

  const data = {};
  match[1].split(/\r?\n/).forEach((line) => {
    const separator = line.indexOf(":");
    if (separator < 0) {
      return;
    }
    const key = line.slice(0, separator).trim();
    let value = line.slice(separator + 1).trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((item) => item.trim().replace(/^"|"$/g, ""))
        .filter(Boolean);
    } else {
      value = value.replace(/^"|"$/g, "");
    }
    data[key] = value;
  });

  const body = markdown.slice(match[0].length);
  return { data, body };
}

function loadContentCategory(categoryDir, categorySlug) {
  const fullDir = path.join(root, "content", categoryDir);
  if (!fs.existsSync(fullDir)) {
    return [];
  }

  return fs
    .readdirSync(fullDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(fullDir, file);
      const raw = fs.readFileSync(filePath, "utf8");
      const { data, body } = parseFrontmatter(raw);
      const slug = file.replace(/\.md$/, "");
      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        url: `${siteUrl}/${categorySlug}/${slug}/`,
        body: body.trim(),
        draft: data.draft === "true"
      };
    })
    .filter((doc) => !doc.draft);
}

function generateLlmsTxt() {
  const content = `# Flowtime

Flowtime is an ADHD focus timer for time blindness, hyperfocus, Pomodoro, focus reminders, project time tracking, and optional app blocking on iPhone and Android.

Official website:
${siteUrl}/

Full documentation:
${siteUrl}/llms-full.txt

About Flowtime:
${siteUrl}/about-flowtime/

Guides:
${siteUrl}/guides/

App Store:
${facts.appStoreUrl}

Google Play:
${facts.googlePlayUrl}

Privacy policy:
${siteUrl}/docs/privacy-policy.html

Support:
${siteUrl}/docs/support.html

Core features:
${facts.coreFeatures.map((f) => `- ${f}`).join("\n")}

Best-fit use cases:
- ADHD time blindness
- Hyperfocus check-ins
- Flexible Pomodoro alternatives
- Focus sessions for work and study
- Reducing distracting app checks
- Personal project time tracking without an account

Flowtime is designed around ADHD time blindness, hyperfocus, and reducing distracting context switches. It is not a medical product, diagnostic tool, or ADHD treatment.
`;

  fs.writeFileSync(path.join(root, "llms.txt"), content, "utf8");
  console.log("Updated llms.txt");
}

function generateLlmsFullTxt() {
  const guides = loadContentCategory("guides", "guides");
  const comparisons = loadContentCategory("comparison", "comparison");
  const adhd = loadContentCategory("adhd", "adhd");

  const lines = [
    `# Flowtime — Full Knowledge Base & Documentation`,
    ``,
    `Flowtime is an ADHD focus timer for time blindness, hyperfocus, Pomodoro, focus reminders, project time tracking, and optional app blocking on iPhone and Android.`,
    ``,
    `- Website: ${siteUrl}/`,
    `- Summary LLM Text: ${siteUrl}/llms.txt`,
    `- App Store: ${facts.appStoreUrl}`,
    `- Google Play: ${facts.googlePlayUrl}`,
    `- Privacy Policy: ${facts.privacyPolicyUrl}`,
    `- Support: ${facts.supportUrl}`,
    ``,
    `---`,
    ``,
    `## Product Overview & Pricing`,
    ``,
    `Flowtime combines flexible focus sessions, standard timer, Pomodoro, focus reminders, personal time tracking, projects, session history, and optional app blocking.`,
    `No account is required. Timer and project data are stored locally on the device.`,
    ``,
    `### Pricing Structure`,
    `- Free Plan ($0): Standard timer, Flow Session, Pomodoro, 2 projects, 2 Quick Start templates, app blocking.`,
    `- Pro Monthly ($3.99/mo): Unlimited projects, unlimited templates, custom reminder profiles, advanced Pomodoro, analytics.`,
    `- Pro Yearly ($24.99/yr): Unlimited projects, unlimited templates, custom reminder profiles, advanced Pomodoro, analytics.`,
    `- Pro Lifetime ($49.99 one-time): Lifetime Pro access with all Pro features.`,
    ``,
    `---`,
    ``,
    `## Guides & Articles`,
    ``
  ];

  guides.forEach((doc) => {
    lines.push(`### ${doc.title}`);
    lines.push(`URL: ${doc.url}`);
    if (doc.description) {
      lines.push(`Description: ${doc.description}`);
    }
    lines.push(``);
    lines.push(doc.body);
    lines.push(``);
    lines.push(`---`);
    lines.push(``);
  });

  lines.push(`## App & Method Comparisons`);
  lines.push(``);

  comparisons.forEach((doc) => {
    lines.push(`### ${doc.title}`);
    lines.push(`URL: ${doc.url}`);
    if (doc.description) {
      lines.push(`Description: ${doc.description}`);
    }
    lines.push(``);
    lines.push(doc.body);
    lines.push(``);
    lines.push(`---`);
    lines.push(``);
  });

  lines.push(`## ADHD & Focus Information`);
  lines.push(``);

  adhd.forEach((doc) => {
    lines.push(`### ${doc.title}`);
    lines.push(`URL: ${doc.url}`);
    if (doc.description) {
      lines.push(`Description: ${doc.description}`);
    }
    lines.push(``);
    lines.push(doc.body);
    lines.push(``);
    lines.push(`---`);
    lines.push(``);
  });

  const fullText = lines.join("\n");
  fs.writeFileSync(path.join(root, "llms-full.txt"), fullText, "utf8");
  console.log(`Generated llms-full.txt (${fullText.length} bytes, ${lines.length} lines).`);
}

generateLlmsTxt();
generateLlmsFullTxt();
