#!/usr/bin/env node

/**
 * Post-build cleanup script
 * Removes unoptimized JPG files from the output directory
 * since we're using optimized WebP versions
 */

const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '../out');
const FILES_TO_REMOVE = [
  'hero-banner.jpg',
  'before-after-acne.jpg'
];

console.log('🧹 Cleaning up unoptimized images from output...\n');

let totalSaved = 0;

for (const fileName of FILES_TO_REMOVE) {
  const filePath = path.join(OUT_DIR, fileName);
  
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
    
    fs.unlinkSync(filePath);
    totalSaved += stats.size;
    
    console.log(`✅ Removed ${fileName} (${sizeMB} MB)`);
  }
}

const totalSavedMB = (totalSaved / 1024 / 1024).toFixed(2);
console.log(`\n✨ Cleanup complete! Saved ${totalSavedMB} MB\n`);
