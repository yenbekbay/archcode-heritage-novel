import { getUserAgentRegex } from "browserslist-useragent-regexp";
import { mkdir, writeFile } from "node:fs/promises";

const regex = getUserAgentRegex({ allowHigherVersions: true });

await mkdir("src/__generated__", { recursive: true });
await writeFile(
  "src/__generated__/browserslist.mjs",
  `export const SUPPORTED_BROWSERS_UA_RE = ${regex.toString()};\n`,
);
