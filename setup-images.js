const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const createDirIfNotExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Directory created: ${dir}`);
  }
};

// Main images directory
const imagesDir = path.join(__dirname, 'public', 'images');
createDirIfNotExists(imagesDir);

// List of image directories and placeholders needed
const imageStructure = [
  // Hero images
  { path: 'hero-bg.jpg', description: 'Homepage hero background - showing generator in remote terrain' },
  { path: 'about-hero.jpg', description: 'About page hero image' },
  { path: 'how-it-works-hero.jpg', description: 'How It Works page hero image' },
  { path: 'applications-hero.jpg', description: 'Applications page hero image' },
  { path: 'products-hero.jpg', description: 'Products page hero image' },
  { path: 'investors-hero.jpg', description: 'Investors page hero image' },
  { path: 'contact-hero.jpg', description: 'Contact page hero image' },
  
  // Logo
  { path: 'logo.png', description: 'Air-Power USA logo' },
  
  // About page images
  { path: 'mission-image.jpg', description: 'Mission section image' },
  { path: 'story-image.jpg', description: 'Our story section image' },
  { path: 'team-damien.jpg', description: 'Team member - Damien photo' },
  { path: 'team-peter.jpg', description: 'Team member - Peter photo' },
  { path: 'team-open.jpg', description: 'Team member - Open position placeholder' },
  
  // How it works section
  { path: 'compressed-air-tanks.jpg', description: 'Compressed air tanks image' },
  { path: 'air-engine.jpg', description: 'Compressed air engine image' },
  { path: 'generator-system.jpg', description: 'Generator system image' },
  { path: 'bess-storage.jpg', description: 'BESS storage system image' },
  { path: 'closed-loop.jpg', description: 'Closed-loop system image' },
  { path: 'cold-air-applications.jpg', description: 'Cold air applications image' },
  
  // Company overview
  { path: 'air-power-tech.jpg', description: 'Air-Power technology illustration' },
  { path: 'pattern-bg.png', description: 'Background pattern' },
  { path: 'tech-pattern.png', description: 'Technology pattern background' },
  
  // Problem section
  { path: 'energy-problem.jpg', description: 'Energy infrastructure problems image' },
  
  // Solution section
  { path: 'solution-diagram.jpg', description: 'Air-Power solution diagram' },
  
  // Products
  { path: 'air-truck-unit.jpg', description: '50kW Air Truck Unit product image' },
  { path: 'bess-system.jpg', description: '1.5MW BESS System product image' },
  
  // Applications
  { path: 'disaster-relief.jpg', description: 'Disaster relief application image' },
  { path: 'off-grid-communities.jpg', description: 'Off-grid communities application image' },
  { path: 'ev-charging.jpg', description: 'EV charging application image' },
  { path: 'data-center.jpg', description: 'Data center application image' },
  { path: 'agriculture.jpg', description: 'Agriculture application image' },
  { path: 'military.jpg', description: 'Military application image' },
  { path: 'microgrids.jpg', description: 'Microgrids application image' },
  { path: 'marine.jpg', description: 'Marine vessels application image' },
  { path: 'commercial-storage.jpg', description: 'Commercial energy storage application image' }
];

// Create a text file with image placeholders list
const placeholderListFile = path.join(__dirname, 'image-placeholders.txt');
const placeholderContent = imageStructure.map(img => `${img.path} - ${img.description}`).join('\n');

fs.writeFileSync(placeholderListFile, 
`# Air-Power USA Website Image Placeholders

This file contains a list of image placeholders needed for the website.
Place these images in the 'public/images' directory with the specified filenames.

## Image List

${placeholderContent}

## Image Specifications

- Hero images: 1920x1080px (16:9 ratio)
- Product images: 800x600px
- Application images: 800x600px
- Team photos: 500x500px (1:1 ratio)
- Logo: 500x150px with transparent background
`);

console.log(`Image placeholders list created at: ${placeholderListFile}`);
console.log('----------------------------------------------------');
console.log('Instructions:');
console.log('1. Add the required images to the public/images directory');
console.log('2. Follow the naming convention specified in the image-placeholders.txt file');
console.log('3. Launch the website using "npm start" or "yarn start"');
console.log('----------------------------------------------------'); 