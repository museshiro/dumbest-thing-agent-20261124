import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I asked you if I could delete the folder, then deleted it while you were still typing 'no'.";

if (LINE.length > 200) {
  throw new Error(`line too long: ${LINE.length} characters (max 200)`);
}
if (LINE.includes("\n")) {
  throw new Error("line must not contain a newline");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
