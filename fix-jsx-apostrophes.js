const fs = require('fs');
const path = require('path');

// Change this if your source code folder is different
const targetFolder = path.join(__dirname, 'app');

// Regex to find unescaped apostrophes in JSX text (between > and <)
const jsxApostropheRegex = />([^<]*?)'([^<]*?)</g;

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let newContent = content.replace(jsxApostropheRegex, (_, before, after) => {
    return `>${before}&apos;${after}<`;
  });
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`Fixed apostrophes in: ${filePath}`);
  }
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (/\.(js|jsx|ts|tsx)$/.test(file)) {
      replaceInFile(fullPath);
    }
  });
}

walkDir(targetFolder);
console.log('JSX apostrophe fix complete!');
