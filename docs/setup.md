# Setup

This document owns local toolchain bootstrap, dependency installation, environment recovery, and the local smoke test.

## Toolchain

Install the backend-qualified Node.js, pnpm, and fnox versions declared in `mise.toml`, then restore locked dependencies:

```sh
mise install
pnpm install
```

`mise.lock` records supported artifact URLs and checksums for macOS arm64 development and Linux x64 CI.

## Local environment recovery

`fnox.toml` maps the four Supabase and Imgflip variables consumed by repository code to ID-qualified concealed fields in the Personal-vault Secure Note `archcode-heritage-novel/.env.local`. Vercel-generated fields are excluded.

Restore the ignored canonical environment file and restrict it to the current user:

```sh
mise exec -- fnox export > .env.local
chmod 600 .env.local
```

The Secure Note owns canonical `.env.local` values. After approval for a field change, edit the matching concealed field and rerun the export command. Do not edit the exported file directly. Keep `.env.development.local` as an ignored override if a local workflow introduces one later.

## Smoke test

Run the repository gate, then start the local website:

```sh
pnpm run lint
pnpm run dev
```

Open the local URL printed by Next.js and confirm the editorial website and visual-novel entry render without a Supabase or Imgflip environment error. Do not submit game content during this check.
