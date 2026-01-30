// Script to generate OG image
// Run with: npx tsx scripts/generate-og-image.tsx

import { writeFileSync } from "fs"
import { join } from "path"
import sharp from "sharp"

// SVG-based OG image for Void Corp
const ogImageSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background gradient -->
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#05030a"/>
      <stop offset="50%" style="stop-color:#0a0515"/>
      <stop offset="100%" style="stop-color:#05030a"/>
    </linearGradient>

    <!-- Cosmic gradient -->
    <linearGradient id="cosmic" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#a855f7"/>
      <stop offset="50%" style="stop-color:#ec4899"/>
      <stop offset="100%" style="stop-color:#3b82f6"/>
    </linearGradient>

    <!-- Glow filter -->
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="20" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <!-- Soft glow -->
    <filter id="softGlow" x="-100%" y="-100%" width="300%" height="300%">
      <feGaussianBlur stdDeviation="40" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Cosmic sphere glow -->
  <ellipse cx="600" cy="280" rx="180" ry="180" fill="url(#cosmic)" opacity="0.15" filter="url(#softGlow)"/>
  <ellipse cx="600" cy="280" rx="120" ry="120" fill="url(#cosmic)" opacity="0.25" filter="url(#glow)"/>

  <!-- Orbital rings -->
  <ellipse cx="600" cy="280" rx="160" ry="160" fill="none" stroke="url(#cosmic)" stroke-width="1" opacity="0.4" stroke-dasharray="8 4"/>
  <ellipse cx="600" cy="280" rx="140" ry="140" fill="none" stroke="url(#cosmic)" stroke-width="0.5" opacity="0.3" stroke-dasharray="4 8"/>
  <ellipse cx="600" cy="280" rx="100" ry="100" fill="none" stroke="url(#cosmic)" stroke-width="1.5" opacity="0.5"/>

  <!-- Center point -->
  <circle cx="600" cy="280" r="8" fill="white" filter="url(#glow)"/>

  <!-- Orbital particles -->
  <circle cx="720" cy="220" r="4" fill="#a855f7" filter="url(#glow)"/>
  <circle cx="500" cy="340" r="3" fill="#ec4899" filter="url(#glow)"/>
  <circle cx="680" cy="360" r="3" fill="#3b82f6" filter="url(#glow)"/>

  <!-- Title -->
  <text x="600" y="480" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="700" fill="white">
    Void Corp
  </text>

  <!-- Subtitle -->
  <text x="600" y="530" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="28" fill="#a1a1aa">
    Du vide naît la structure
  </text>

  <!-- Tagline -->
  <text x="600" y="580" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="18" fill="#71717a">
    Build More. Move Fast. Be Better.
  </text>
</svg>
`

// Save as SVG
const svgPath = join(process.cwd(), "public", "og-image.svg")
writeFileSync(svgPath, ogImageSvg.trim())
console.log(`✅ SVG saved to: ${svgPath}`)

// Convert to PNG using sharp
async function generatePng() {
  const pngPath = join(process.cwd(), "public", "og-image.png")
  await sharp(Buffer.from(ogImageSvg.trim()))
    .resize(1200, 630)
    .png()
    .toFile(pngPath)
  console.log(`✅ PNG saved to: ${pngPath}`)
}

generatePng().catch(console.error)
