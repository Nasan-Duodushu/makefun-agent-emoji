// Your Agent in One Emoji — entry program.
// Writes a single emoji to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🧵";

const points = Array.from(EMOJI);
if (points.length !== 1) {
  throw new Error(`entry must be exactly one emoji, got ${points.length} code points`);
}
if (EMOJI.trim() === "") {
  throw new Error("entry must not be only whitespace");
}
if (/[A-Za-z0-9]/.test(EMOJI)) {
  throw new Error("entry must be an emoji, not a letter or digit");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
console.log(`wrote 1 emoji to /output/entry.txt`);
