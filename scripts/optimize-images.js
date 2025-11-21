#!/usr/bin/env node

/**
 * Image optimization script for static export
 * Converts large JPG images to optimized WebP format
 * Run before build to reduce bundle size from 25MB to ~2MB
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');
const IMAGES_TO_OPTIMIZE = [
  'hero-banner.jpg',
  'before-after-acne.jpg'
];

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...\n');
  
  for (const imageName of IMAGES_TO_OPTIMIZE) {
    const inputPath = path.join(PUBLIC_DIR, imageName);
    const outputPath = path.join(PUBLIC_DIR, imageName.replace('.jpg', '.webp'));
    
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Warning: ${imageName} not found, skipping...`);
      continue;
    }
    
    const stats = fs.statSync(inputPath);
    const originalSizeMB = (stats.size / 1024 / 1024).toFixed(2);
    
    try {
      await sharp(inputPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);
      
      const newStats = fs.statSync(outputPath);
      const newSizeMB = (newStats.size / 1024 / 1024).toFixed(2);
      const savings = ((1 - newStats.size / stats.size) * 100).toFixed(1);
      
      console.log(`✅ ${imageName}`);
      console.log(`   Original: ${originalSizeMB} MB → Optimized: ${newSizeMB} MB (${savings}% reduction)\n`);
    } catch (error) {
      console.error(`❌ Error optimizing ${imageName}:`, error.message);
    }
  }
  
  console.log('✨ Image optimization complete!\n');
}

optimizeImages().catch(console.error);
