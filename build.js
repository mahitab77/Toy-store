// build.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Utility function to copy a file
const copyFileSync = (source, target) => {
  let targetFile = target;

  // If target is a directory, a new file with the same name will be created
  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source));
    }
  }

  fs.writeFileSync(targetFile, fs.readFileSync(source));
};

// Utility function to copy a folder recursively
const copyFolderRecursiveSync = (source, target) => {
  let files = [];

  // Check if folder needs to be created or integrated
  const targetFolder = path.join(target, path.basename(source));
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
  }

  // Copy
  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source);
    files.forEach((file) => {
      const curSource = path.join(source, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, targetFolder);
      } else {
        copyFileSync(curSource, targetFolder);
      }
    });
  }
};

// Get the directory name of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const distDir = path.join(__dirname, 'dist');
const htmlFiles = ['./index.html'];
const jsDir = './js';
const assetsDir = './assets';

// Create dist directory if it doesn't exist
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Copy HTML files
htmlFiles.forEach(file => {
  copyFileSync(path.join(__dirname, file), distDir);
});

// Copy JS directory
copyFolderRecursiveSync(path.join(__dirname, jsDir), distDir);

// Copy assets directory
copyFolderRecursiveSync(path.join(__dirname, assetsDir), distDir);

console.log('Build completed successfully.');
