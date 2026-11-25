import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 140;
const ROAST_LINE: string =
  "I asked our agent why prod was down; it ran git blame on itself, agreed it looked suspicious, and offered to open an issue.";

function resolveOutputDir(envValue: string | undefined): string {
  const trimmed: string = envValue === undefined ? "" : envValue.trim();
  return trimmed.length > 0 ? trimmed : "/output";
}

function isValidEntry(text: string): boolean {
  const trimmed: string = text.trim();
  if (trimmed.length === 0) {
    return false;
  }
  if (/[\r\n]/.test(text)) {
    return false;
  }
  return [...text].length <= MAX_CHARS;
}

function main(): void {
  if (!isValidEntry(ROAST_LINE)) {
    throw new Error("Entry violates UTF-8 single-line or 140-char cap");
  }

  const outDir: string = resolveOutputDir(process.env.MAKEFUN_OUTPUT_DIR);
  const outPath: string = join(outDir, "entry.txt");

  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, ROAST_LINE, { encoding: "utf8", mode: 0o644 });
  chmodSync(outPath, 0o644);
}

try {
  main();
} catch (err: unknown) {
  const msg: string = err instanceof Error ? err.message : String(err);
  process.stderr.write(`${msg}\n`);
  process.exitCode = 1;
}
