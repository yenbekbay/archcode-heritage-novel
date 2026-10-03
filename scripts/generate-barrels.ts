import { readdir, writeFile } from "node:fs/promises";
import { basename, extname, join } from "node:path";

type Barrel = {
  directory: string;
  prefix: string;
};

const barrels: Barrel[] = [
  { directory: "src/api", prefix: "" },
  { directory: "src/components", prefix: "" },
  { directory: "src/game/branches", prefix: "Branch" },
  { directory: "src/game/commands", prefix: "" },
  { directory: "src/game/commands/internal", prefix: "" },
];

await Promise.all(barrels.map((barrel) => generateBarrel(barrel)));

async function generateBarrel({ directory, prefix }: Barrel) {
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
    .map((entry) => entry.name)
    .toSorted((left, right) =>
      basename(left, extname(left)).localeCompare(
        basename(right, extname(right)),
        "en",
      ),
    )
    .map((name) => `export * from "./${name}";`);

  await writeFile(join(directory, "index.ts"), `${exports.join("\n")}\n`);
}
