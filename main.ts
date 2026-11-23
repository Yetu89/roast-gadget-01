import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My phone's battery health is 87%, which it proves daily by dying at 4pm like a Victorian child sent to bed without supper.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(
    `entry must be 1-200 characters, got ${ENTRY.length}`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
