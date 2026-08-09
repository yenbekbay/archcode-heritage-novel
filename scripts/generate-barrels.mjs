import {readdir, writeFile} from 'node:fs/promises'
import {basename, extname, join} from 'node:path'

const barrels = [
  {directory: 'api', prefix: ''},
  {directory: 'components', prefix: ''},
  {directory: 'game/branches', prefix: 'Branch'},
  {directory: 'game/commands', prefix: ''},
  {directory: 'game/commands/internal', prefix: ''},
]

async function main() {
  await Promise.all(barrels.map(generateBarrel))
}

/** @param {{directory: string; prefix: string}} options */
async function generateBarrel({directory, prefix}) {
  const entries = await readdir(directory, {withFileTypes: true})
  const exports = entries
    .filter((entry) => {
      const extension = extname(entry.name)

      return (
        entry.isFile() &&
        entry.name !== 'index.ts' &&
        (extension === '.ts' || extension === '.tsx') &&
        entry.name.startsWith(prefix)
      )
    })
    .map((entry) => basename(entry.name, extname(entry.name)))
    .sort((left, right) => left.localeCompare(right, 'en'))
    .map((name) => `export * from './${name}'`)

  await writeFile(join(directory, 'index.ts'), `${exports.join('\n')}\n`)
}

await main()
