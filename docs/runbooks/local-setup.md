# Local setup

Prepare the Archcode Heritage Novel checkout, local environment, and development runtime. [Product](../product.md) owns accepted outcomes, [Architecture](../architecture.md) owns system boundaries, and project `AGENTS.md` owns approval and task-routing rules. This runbook owns verification that the editorial and game entry surfaces start with the selected local environment. Unfinished work stays in task context. Provider mutations, content submission, and production delivery remain separate transitions.

## Target and preconditions

Run the procedure from the repository root on a platform supported by `mise.lock`. The operator needs access to the 1Password Secure Note mapped by `fnox.toml` before recovering the local environment. The procedure installs repository dependencies and writes `.env.local`. It does not submit game content or mutate provider state.

## Audit

Read `mise.toml`, `package.json`, `fnox.toml`, and the environment schema before changing local state. Confirm the selected checkout, supported platform, tool versions, Secure Note, and required environment names still match this procedure.

## Prepare the toolchain

Install the Node.js, pnpm, and fnox versions declared in `mise.toml`, then restore locked dependencies:

```sh
mise install
pnpm install
```

`mise.lock` records supported artifact URLs and checksums for macOS arm64 development and Linux x64 CI.

## Recover the local environment

`fnox.toml` maps the Supabase and Imgflip variables consumed by repository code to concealed fields in the Personal-vault Secure Note `archcode-heritage-novel/.env.local`. Vercel-generated fields are excluded.

Restore the ignored canonical environment file and restrict it to the current user:

```sh
umask 077
mise exec -- fnox export --if-missing error --output .env.local
chmod 600 .env.local
```

The Secure Note owns the canonical values. After approval for a field change, edit the matching concealed field and rerun the export command. Do not edit the exported file directly. Keep `.env.development.local` as an ignored override if a later local workflow needs one.

## Run the local product

Run the repository gate, then start the local website:

```sh
pnpm run lint
pnpm run dev
```

Open the local URL printed by Next.js. Confirm the editorial home page, visual-novel entry, and game asset loading reach their initial states without a Supabase or Imgflip environment error. Do not submit game content during this check.

## Failure recovery

If tool installation or dependency restoration fails, preserve the lockfiles and inspect the failing artifact or package before retrying. If environment recovery fails, leave any existing `.env.local` in place and restore access through the mapped Secure Note. If artifact generation is interrupted, rerun the owning generator before using the development or lint command and inspect the generated-path diff.

## Verification

Confirm `pnpm run lint` passes and the development server reaches the editorial and game entry surfaces. Treat these results as local checkout evidence. Supabase writes, Imgflip writes, and production delivery remain outside this runbook.
