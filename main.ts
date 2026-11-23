import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My phone's battery health is 87%, which it proves daily by dying at 4pm like a Victorian child sent to bed without supper.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(
    `entry must be 1-200 characters, got ${ENTRY.length}`,
  );
}
// Count code points, not UTF-16 units, so an astral character counts once.
if ([...ENTRY].length > 200) {
  throw new Error(`entry must be at most 200 characters, got ${[...ENTRY].length}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line with no line breaks");
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
