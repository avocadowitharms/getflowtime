const fs = require('fs');
const path = require('path');

const repos = [
  { name: 'getflowtime', root: path.resolve(__dirname, '..') },
  { name: 'gettogether', root: path.resolve(__dirname, '../../gettogether') }
];

let totalIssues = 0;
let totalFilesChecked = 0;

function logIssue(repo, file, issue) {
  console.error(`[SECURITY ISSUE] [${repo}] ${file}: ${issue}`);
  totalIssues++;
}

function logPass(msg) {
  console.log(`[PASS] ${msg}`);
}

function getAllFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    if (file === '.git' || file === 'node_modules' || file === '.vscode') return;
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

console.log("=========================================");
console.log("   ADDITIONAL SECURITY CONFIG AUDIT     ");
console.log("=========================================\n");

repos.forEach(({ name, root }) => {
  console.log(`--- Auditing ${name} (${root}) ---`);

  if (!fs.existsSync(root)) {
    console.error(`Directory ${root} does not exist!`);
    return;
  }

  // 1. Check _headers existence & syntax
  const headersPath = path.join(root, '_headers');
  if (!fs.existsSync(headersPath)) {
    logIssue(name, '_headers', 'Missing _headers file!');
  } else {
    const content = fs.readFileSync(headersPath, 'utf8');
    const requiredHeaders = [
      'X-Content-Type-Options: nosniff',
      'X-Frame-Options: DENY',
      'Referrer-Policy: strict-origin-when-cross-origin',
      'Permissions-Policy:',
      'Content-Security-Policy:'
    ];

    requiredHeaders.forEach(req => {
      if (!content.includes(req)) {
        logIssue(name, '_headers', `Missing required header rule: ${req}`);
      }
    });

    // Check syntax of global CSP directives
    if (content.includes('Content-Security-Policy:')) {
      const globalCspLine = content.split('\n').find(l => l.includes('Content-Security-Policy:') && l.includes("default-src 'self'"));
      if (!globalCspLine) {
        logIssue(name, '_headers', "Global CSP does not specify default-src 'self'");
      } else {
        if (!globalCspLine.includes("object-src 'none'")) {
          logIssue(name, '_headers', "Global CSP does not specify object-src 'none'");
        }
        if (!globalCspLine.includes("frame-ancestors")) {
          logIssue(name, '_headers', "Global CSP does not specify frame-ancestors");
        }
      }
    }
    logPass(`${name} _headers security directives verified.`);
  }

  // 2. Scan all files for sensitive names and keys
  const allFiles = getAllFiles(root);
  totalFilesChecked += allFiles.length;

  const sensitiveNamePatterns = [
    /\.env$/i, /\.env\./i, /firebase\.json$/i, /google-credentials\.json$/i,
    /wp-config\.php$/i, /\.bak$/i, /Dockerfile$/i, /docker-compose.*\.ya?ml$/i,
    /\.pem$/i, /\.key$/i, /\.pkcs12$/i, /\.pfx$/i
  ];

  const secretRegexes = [
    /-----BEGIN (RSA|EC|PGP|OPENSSH) PRIVATE KEY-----/,
    /AIzaSy[A-Za-z0-9_-]{35}/, // Google API key
    /sk_live_[0-9a-zA-Z]{24}/, // Stripe live key
    /ghp_[0-9a-zA-Z]{36}/,     // GitHub personal access token
  ];

  allFiles.forEach(filePath => {
    const relPath = path.relative(root, filePath);
    const fileName = path.basename(filePath);

    // Check sensitive filenames
    sensitiveNamePatterns.forEach(pattern => {
      if (pattern.test(fileName)) {
        logIssue(name, relPath, `Sensitive file found in project: ${fileName}`);
      }
    });

    // Read file for inspection
    try {
      const fileText = fs.readFileSync(filePath, 'utf8');

      // Check secrets in file content
      secretRegexes.forEach(regex => {
        if (regex.test(fileText)) {
          logIssue(name, relPath, `Potential secret token pattern matched! (${regex.source})`);
        }
      });

      // Audit HTML files specifically
      if (filePath.endsWith('.html')) {
        // Check target="_blank" missing noopener
        const blankLinks = fileText.match(/<a\s+[^>]*target=["']_blank["'][^>]*>/gi) || [];
        blankLinks.forEach(link => {
          if (!/rel=["'][^"']*(noopener|noreferrer)[^"']*["']/i.test(link)) {
            logIssue(name, relPath, `Anchor with target="_blank" missing rel="noopener noreferrer": ${link.substring(0, 80)}`);
          }
        });

        // Check for non-HTTPS external script/style/img links (excluding localhost/schema.org/xml namespaces)
        const httpSrcMatches = fileText.match(/(src|href)=["']http:\/\/(?!localhost|127\.0\.0\.1|www\.w3\.org|schema\.org|www\.sitemaps\.org)[^"']+["']/gi) || [];
        httpSrcMatches.forEach(match => {
          logIssue(name, relPath, `Insecure http:// resource reference: ${match}`);
        });

        // Check form actions
        const formActions = fileText.match(/<form\s+[^>]*action=["']([^"']+)["'][^>]*>/gi) || [];
        formActions.forEach(form => {
          const actionMatch = form.match(/action=["']([^"']+)["']/i);
          if (actionMatch && actionMatch[1].startsWith('http://')) {
            logIssue(name, relPath, `Insecure form action endpoint: ${actionMatch[1]}`);
          }
        });
      }
    } catch (err) {
      // Ignore binary files or unreadable files
    }
  });

  logPass(`${name} scanned ${allFiles.length} files cleanly.`);
});

console.log("\n=========================================");
console.log(` AUDIT COMPLETE: Checked ${totalFilesChecked} files.`);
console.log(` TOTAL SECURITY ISSUES FOUND: ${totalIssues}`);
console.log("=========================================\n");

if (totalIssues > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
