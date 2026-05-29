// inject-meta.js
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const BASE_URL = "https://tefol-hub.github.io/freeCodeCamp-Projects";
const ROOT = "/home/tefo/Documents/freeCodeCamp-Projects";

function injectMeta(htmlPath) {
  let html = fs.readFileSync(htmlPath, "utf8");

  // Skip if already injected
  if (html.includes("og:image")) return console.log(`  skip  ${htmlPath}`);

  const projectPath = htmlPath
    .replace(ROOT, "")
    .replace("/index.html", "");

  const thumbUrl = `${BASE_URL}${projectPath}/media/screenshot_thumb.png`;
  const pageUrl  = `${BASE_URL}${projectPath}/`;
  const title    = html.match(/<title>(.*?)<\/title>/i)?.[1] || "Project";
  const desc     = html.match(/meta name="description" content="(.*?)"/i)?.[1] || "";

  const block = `
  <!-- Open Graph / Twitter -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${pageUrl}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${desc}">
  <meta property="og:image" content="${thumbUrl}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="${pageUrl}">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${desc}">
  <meta name="twitter:image" content="${thumbUrl}">`;

  html = html.replace("</head>", `${block}\n</head>`);
  fs.writeFileSync(htmlPath, html);
  console.log(`  ✓  ${htmlPath}`);
}

// Find all index.html files
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Usage: node inject-meta.js <folder> [folder ...]");
  console.log("Example: node inject-meta.js project1/ project2/");
  process.exit(1);
}

args.forEach((arg) => {
  const p = path.resolve(process.cwd(), arg);
  const stat = fs.statSync(p);

  if (stat.isDirectory()) {
    // Find all index.html files inside the folder
    const files = execSync(`find ${p} -name "index.html"`)
      .toString().trim().split("\n")
      .filter(Boolean);
    files.forEach(injectMeta);
  } else if (path.basename(p) === "index.html") {
    // Direct path to an index.html file
    injectMeta(p);
  } else {
    console.log(`  skip  ${p}  (not a folder or index.html)`);
  }
});
