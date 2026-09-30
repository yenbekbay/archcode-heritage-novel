import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";

const sourceDirectory = "assets/game/sounds";
const outputDirectory = "public/__generated__/audio";
const entries = await readdir(sourceDirectory);

const filenames = entries
  .filter((filename) => filename.endsWith(".mp3"))
  .toSorted();

await mkdir(outputDirectory, { recursive: true });
await mkdir("__generated__", { recursive: true });

const declarations = await Promise.all(
  filenames.map((filename) => generateAudio(filename)),
);

await writeFile("__generated__/audio.ts", `${declarations.join("\n")}\n`);

/** @param {string} filename - Retained source audio filename. */
async function generateAudio(filename) {
  const bytes = await readFile(join(sourceDirectory, filename));
  const hash = createHash("sha256").update(bytes).digest("hex");
  const outputFilename = `${basename(filename, ".mp3")}.${hash}.mp3`;

  const exportName = filename
    .replaceAll(/-([a-z0-9])/gu, (_, letter) => String(letter).toUpperCase())
    .replace(".mp3", "Mp3");

  await writeFile(join(outputDirectory, outputFilename), bytes);
  return `export const ${exportName} = "/__generated__/audio/${outputFilename}";`;
}
