const fs = require('fs');
const path = require('path');

const targetDirs = [
  'AthleoFrontend/src/locales',
  'AthleoFrontend/src/components',
  'AthleoFrontend/src/pages',
  'AthleoFrontend/index.html',
  'AthleoFrontend/public/manifest.json',
  'AthleoMobile/src/components',
  'AthleoMobile/src/screens',
  'AthleoMobile/app.json',
  'AthleoServer/services/emailService.js',
  'docs/content',
  'README.md',
];

function processPath(p) {
  if (!fs.existsSync(p)) return;
  const stats = fs.statSync(p);
  if (stats.isDirectory()) {
    const files = fs.readdirSync(p);
    for (const file of files) {
       processPath(path.join(p, file));
    }
  } else {
    // Only process common text files
    if (!['.ts', '.tsx', '.js', '.jsx', '.json', '.html', '.md', '.txt'].includes(path.extname(p))) return;
    
    try {
      let content = fs.readFileSync(p, 'utf8');
      
      let newContent = content
        .replace(/Athleo/g, 'Athleo')
        .replace(/Athleo/g, 'Athleo')
        .replace(/athleo/g, 'athleo')
        .replace(/athleo/g, 'athleo');
      
      // Revert GitHub URLs that got mangled
      newContent = newContent.replace(/github\.com\/CodeWithCJ\/Athleo/g, 'github.com/Ahuja2304/Athleo');
      newContent = newContent.replace(/CodeWithCJ\/Athleo/g, 'Ahuja2304/Athleo');

      if (content !== newContent) {
        fs.writeFileSync(p, newContent, 'utf8');
        console.log('Updated: ' + p);
      }
    } catch(e) { console.error('Error processing ' + p, e); }
  }
}

targetDirs.forEach(d => processPath(path.join(__dirname, d)));
console.log("Safe scope rename completed.");
