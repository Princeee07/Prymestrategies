/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace common global classes
  content = content.replace(/bg-\[var\(--color-navy\)\]/g, 'bg-white');
  content = content.replace(/bg-\[#060D18\]/g, 'bg-gray-50');

  // Specific fix for hero sections to remain dark navy
  if (content.includes('Hero Banner') || content.includes('Hero Section')) {
    // If it's a hero banner, we make sure its section keeps bg-[var(--color-navy)] and text-white
    content = content.replace(
      /<section className="([^"]*)bg-gray-50([^"]*)"([^>]*)>\s*<div([^>]*)>\s*<div([^>]*)>\s*(<div[^>]*>)?\s*<div([^>]*)>\s*<ScrollReveal>\s*<h1 className="([^"]*)text-\[var\(--color-text-white\)\]/g,
      (match) =>
        match
          .replace('bg-gray-50', 'bg-[var(--color-navy)]')
          .replace('text-[var(--color-text-white)]', 'text-white')
    );

    // Fix text in hero banner (e.g. text-[var(--color-text-gray)])
    content = content.replace(
      /<section className="[^"]*bg-\[var\(--color-navy\)[^>]+>[\s\S]*?<\/section>/g,
      (match) => {
        return match
          .replace(/text-\[var\(--color-text-white\)\]/g, 'text-white')
          .replace(/text-\[var\(--color-text-gray\)\]/g, 'text-gray-300')
          .replace(/bg-white/g, 'bg-[var(--color-navy)]'); // Revert inner bgs if accidentally matched
      }
    );
  }

  // Any remaining text-[var(--color-text-white)] in light sections becomes text-gray-900
  content = content.replace(
    /text-\[var\(--color-text-white\)\]/g,
    'text-gray-900'
  );

  // Re-read and apply specific fixes
  fs.writeFileSync(filePath, content, 'utf8');
}

const files = [
  'src/app/(marketing)/about/page.tsx',
  'src/app/(marketing)/careers/page.tsx',
  'src/app/(marketing)/apply/page.tsx',
  'src/app/(marketing)/contact/page.tsx',
].map((f) => path.join(__dirname, f));

files.forEach((f) => {
  if (fs.existsSync(f)) {
    replaceInFile(f);
    console.log('Updated', f);
  }
});
