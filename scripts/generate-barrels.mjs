import { readdir, writeFile } from "node:fs/promises";
import { basename, extname, join } from "node:path";

const barrels = [
  { directory: "src/api", prefix: "" },
  { directory: "src/components", prefix: "" },
  { directory: "src/game/branches", prefix: "Branch" },
  { directory: "src/game/commands", prefix: "" },
  { directory: "src/game/commands/internal", prefix: "" },
];

async function main() {
  await Promise.all(barrels.map((barrel) => generateBarrel(barrel)));
}

/** @param {{directory: string; prefix: string}} options - Barrel source owner. */
async function generateBarrel({ directory, prefix }) {
  const entries = await readdir(directory, { withFileTypes: true });

  const exports = entries
    .filter((entry) => {
      const extension = extname(entry.name);

      return (
        entry.isFile() &&
        entry.name !== "index.ts" &&
        (extension === ".ts" || extension === ".tsx") &&
        entry.name.startsWith(prefix)
      );
    })
    .map((entry) => basename(entry.name, extname(entry.name)))
    .toSorted((left, right) => left.localeCompare(right, "en"))
    .map((name) => `export * from "./${name}";`);

  await writeFile(join(directory, "index.ts"), `${exports.join("\n")}\n`);
}

await main();
