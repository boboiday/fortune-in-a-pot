import { mkdirSync, writeFileSync } from "node:fs";

// A kind, funny fortune for a houseplant.
const FORTUNE =
  "This week, the sun will find your favourite leaf, and you will grow an inch taller just to say thank you.";

if (FORTUNE.length < 1 || FORTUNE.length > 120) {
  throw new Error(`fortune must be 1-120 characters, got ${FORTUNE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE + "\n", "utf8");
