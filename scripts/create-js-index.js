// create-js-index.js
const fs = require("fs");
const path = require("path");

const BASE_URL = "https://tefol-hub.github.io/freeCodeCamp-Projects-and-Certs";
const CERT_PATH = "Javascript-Certification";
const THEMES_URL = `${BASE_URL}/${CERT_PATH}/themes`;

function toTitle(folderName) {
  return folderName
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function createIndex(projectPath) {
  const p = path.resolve(process.cwd(), projectPath);

  if (!fs.existsSync(p)) {
    return console.log(`  not found: ${p}`);
  }

  const folderName = path.basename(p);
  const title = toTitle(folderName);
  const projectUrl = `${BASE_URL}/${CERT_PATH}/${folderName}/`;
  const outPath = path.join(p, "index.html");

  if (fs.existsSync(outPath)) {
    return console.log(`  skip  ${outPath}  (already exists — delete it first to regenerate)`);
  }

  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="${THEMES_URL}/styles.css">
    <!-- <link rel="stylesheet" href="styles.css"> -->
    <link rel="stylesheet" href="${THEMES_URL}/prism.css">
  </head>
  <body>
    <h1>${title}</h1>
    <p>Open your browser's Developer Console (F12) to view the output execution of the following execution:</p>
    <div>
      <pre class="language-JavaScript"><code class="language-javascript" id="js-code" data-src="${projectUrl}script.js"></code></pre>
    </div>
    <script src="script.js"></script>
    <script src="${THEMES_URL}/prism.js"></script>
    <script src="${THEMES_URL}/script.js"></script>
  </body>
</html>`;

  fs.writeFileSync(outPath, html);
  console.log(`  ✓  ${outPath}`);
}

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Usage: node create-js-index.js <project-folder> [project-folder ...]");
  console.log("Example: node create-js-index.js Javascript-Certification/javascript-trivia-bot/");
  process.exit(1);
}

args.forEach(createIndex);