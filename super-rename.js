const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
// Adding 'super-rename.js' to exclude so it doesn't rename itself while running
const excludeDirs = ['.git', 'node_modules', 'dist', 'build', '.expo', '.vercel', 'docker', 'helm', 'super-rename.js'];
const excludeExts = ['.png', '.jpg', '.jpeg', '.gif', '.ico', '.webp', '.zip', '.gz', '.pdf', '.svg'];

function walkAndReplaceContents(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (excludeDirs.includes(file)) continue;

    const fullPath = path.join(dir, file);
    if (!fs.existsSync(fullPath)) continue;

    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      walkAndReplaceContents(fullPath);
    } else {
      if (excludeExts.includes(path.extname(file).toLowerCase()) || file === 'super-rename.js') continue;
      
      try {
        let content = fs.readFileSync(fullPath, 'utf8');
        let newContent = content
          .replace(/SparkyFitness/g, 'Athleo')
          .replace(/sparkyfitness/g, 'athleo')
          .replace(/SPARKY_FITNESS/g, 'ATHLEO')
          .replace(/Sparky Fitness/g, 'Athleo')
          .replace(/sparky fitness/g, 'athleo')
          .replace(/CodeWithCJ\/SparkyFitness/g, 'Ahuja2304/Athleo')
          .replace(/CodeWithCJ\/Athleo/g, 'Ahuja2304/Athleo'); // Just in case it was partially replaced before
        
        if (content !== newContent) {
          fs.writeFileSync(fullPath, newContent, 'utf8');
          console.log(`Updated content: ${fullPath}`);
        }
      } catch (e) {
        // Skip files that fail to read (e.g. binary)
      }
    }
  }
}

function walkAndRename(dir) {
  if (!fs.existsSync(dir)) return;
  
  let files = fs.readdirSync(dir);
  for (const file of files) {
    if (excludeDirs.includes(file)) continue;

    const fullPath = path.join(dir, file);
    if (!fs.existsSync(fullPath)) continue;

    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      walkAndRename(fullPath);
    }
    
    // Rename file or directory if it matches
    if (file.includes('SparkyFitness') || file.includes('sparkyfitness')) {
      const newName = file
        .replace(/SparkyFitness/g, 'Athleo')
        .replace(/sparkyfitness/g, 'athleo');
      const newPath = path.join(dir, newName);
      
      try {
        fs.renameSync(fullPath, newPath);
        console.log(`Renamed: ${fullPath} -> ${newPath}`);
      } catch (e) {
        console.error(`Failed to rename ${fullPath}`, e);
      }
    }
  }
}

console.log("Starting deep content replacement...");
walkAndReplaceContents(rootDir);
console.log("Starting file and directory renames...");
walkAndRename(rootDir);
console.log("Deep rebrand complete!");
