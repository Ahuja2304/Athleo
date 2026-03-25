const fs = require('fs');
const path = require('path');

const targetDirs = [
  'SparkyFitnessFrontend/src/locales',
  'SparkyFitnessFrontend/src/components',
  'SparkyFitnessFrontend/src/pages',
  'SparkyFitnessFrontend/index.html',
  'SparkyFitnessFrontend/public/manifest.json',
  'SparkyFitnessMobile/src/components',
  'SparkyFitnessMobile/src/screens',
  'SparkyFitnessMobile/app.json',
  'SparkyFitnessServer/services/emailService.js',
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
        .replace(/SparkyFitness/g, 'Athleo')
        .replace(/Sparky Fitness/g, 'Athleo')
        .replace(/sparkyfitness/g, 'athleo')
        .replace(/sparky fitness/g, 'athleo');
      
      // Revert GitHub URLs that got mangled
      newContent = newContent.replace(/github\.com\/CodeWithCJ\/Athleo/g, 'github.com/CodeWithCJ/SparkyFitness');
      newContent = newContent.replace(/CodeWithCJ\/Athleo/g, 'CodeWithCJ/SparkyFitness');

      if (content !== newContent) {
        fs.writeFileSync(p, newContent, 'utf8');
        console.log('Updated: ' + p);
      }
    } catch(e) { console.error('Error processing ' + p, e); }
  }
}

targetDirs.forEach(d => processPath(path.join(__dirname, d)));
console.log("Safe scope rename completed.");
