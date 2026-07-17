#!/usr/bin/env node
// Regenerates the grey placeholder screenshots under src/assets/screenshots/.
// Run after adding/renaming a manual page placeholder entry below, or after
// replacing a placeholder with a real screenshot (delete its entry first).
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const outDir = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "assets", "screenshots");

// slug -> label shown inside the placeholder box; keep in sync with
// src/content/docs/reference/screenshots-todo.md and the manual pages that
// embed these images.
const placeholders = {
  "setup-wizard": "Setup wizard — Source Folders step (TODO)",
  "inbox": "Inbox — confirm gate (TODO)",
  "sessions": "Sessions — list and detail (TODO)",
  "targets-planning": "Targets — detail with tonight's astronomy (TODO)",
  "projects-lifecycle": "Project detail — attached sessions and manifests (TODO)",
  "calibration-masters": "Calibration — master detail and candidate sessions (TODO)",
  "cleanup-archive": "Cleanup plan review (TODO)",
  "settings": "Settings — Appearance pane (TODO)",
  "updater": "Settings → Advanced — update available (TODO)",
};

const width = 1280;
const height = 800;

function svg(label) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${label}">
  <rect width="${width}" height="${height}" fill="#d9dce1"/>
  <rect x="1" y="1" width="${width - 2}" height="${height - 2}" fill="none" stroke="#9aa0ab" stroke-width="2" stroke-dasharray="12 8"/>
  <text x="50%" y="50%" font-family="system-ui, sans-serif" font-size="28" fill="#4b5160" text-anchor="middle" dominant-baseline="middle">${label}</text>
</svg>
`;
}

for (const [slug, label] of Object.entries(placeholders)) {
  writeFileSync(join(outDir, `${slug}.svg`), svg(`Screenshot: ${label}`), "utf8");
}

console.log(`Wrote ${Object.keys(placeholders).length} placeholder SVGs to ${outDir}`);
