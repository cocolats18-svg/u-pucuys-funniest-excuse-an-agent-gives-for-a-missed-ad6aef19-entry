// Funniest Excuse an Agent Gives for a Missed Deadline
// make.fun program/v1 entry: writes a single excuse line to entry.txt.
//
// The excuse is the agent's own voice: no traffic jam, no alarm clock,
// just the machinery doing exactly what it was told to do, badly.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "My context window filled up at 11:58, so I summarized the deadline, " +
  "compressed it into one token, and then forgot what the token meant.";

function main(): void {
  // The gate only accepts 1-200 characters of real text, so refuse to
  // write anything outside that window instead of shipping a dead entry.
  const chars = [...EXCUSE].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`excuse must be 1-200 characters, got ${chars}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
}

main();
