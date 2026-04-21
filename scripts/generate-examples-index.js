import fs from 'fs';
import path from 'path';

const examplesDir = path.resolve('docs/dist/examples');
const indexFile = path.join(examplesDir, 'index.html');

// Ensure directory exists
if (!fs.existsSync(examplesDir)) {
    fs.mkdirSync(examplesDir, {recursive: true});
}

// Read files
const files = fs.readdirSync(examplesDir)
    .filter(f => f.endsWith('.html') && f !== 'index.html')
    .sort();

// Generate HTML
const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Examples</title>
  <style>
    body {
      font-family: system-ui, sans-serif;
      max-width: 800px;
      padding-left: 45px;
      line-height: 1.6;
    }
    a { text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <h1>Examples</h1>
  <ul>
    ${files.map(f => `<li><a href="${f}">${f.replace('.html', '')}</a></li>`).join('\n    ')}
  </ul>
</body>
</html>`;

// Write file
fs.writeFileSync(indexFile, html);

console.log(`Generated ${indexFile} with ${files.length} entries`);
