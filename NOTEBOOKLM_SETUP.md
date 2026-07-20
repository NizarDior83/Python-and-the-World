# NotebookLM Skill Setup

This repository has the [`notebooklm-py`](https://github.com/teng-lin/notebooklm-py)
agent skill installed so Claude Code (and other agents) can drive Google
NotebookLM programmatically — create notebooks, add sources, chat, and generate
audio/reports/quizzes/etc.

## What's installed

| Path | For |
|------|-----|
| `.claude/skills/notebooklm/SKILL.md` | Claude Code |
| `.agents/skills/notebooklm/SKILL.md` | Universal agent skill dirs |

The skill activates on `/notebooklm` or on intent like *"summarize these
sources"* / *"create a podcast about X"*.

## One-time prerequisites

```bash
pip install "notebooklm-py[browser]"   # base package + interactive-login support
```

## Authentication (the one manual step)

NotebookLM auth uses your **Google browser session cookies**, not a GCP token.

- **On a machine with a browser:**
  ```bash
  notebooklm login          # opens Google OAuth in a browser
  notebooklm auth check --test   # expect "status": ok AND checks.token_fetch: true
  ```
  This writes `~/.notebooklm/profiles/default/storage_state.json`.

- **In a headless / sandboxed session (no browser):** you cannot run `login`.
  Reuse a `storage_state.json` produced by a browser login on a host machine:
  ```bash
  export NOTEBOOKLM_AUTH_JSON="$(cat /path/to/storage_state.json)"   # from a secret store
  notebooklm auth check --test --json
  ```

> ⚠️ `storage_state.json` / `NOTEBOOKLM_AUTH_JSON` are **bearer credentials** for
> your Google account. Keep the file `0600`, load it from a secret store, never
> commit it or print it, and `unset NOTEBOOKLM_AUTH_JSON` when done.

## Quickstart: summarize sources

```bash
# 1. Create a notebook
notebooklm create "Summary: <topic>" --json        # → note the .notebook.id

# 2. Add your sources (URLs, PDFs, YouTube, Google Docs, text/markdown, ...)
notebooklm source add "https://example.com/article" -n <notebook_id> --json
notebooklm source add ./local-doc.pdf              -n <notebook_id> --json

# 3. Wait for sources to finish indexing (required before chat/generation)
notebooklm source list -n <notebook_id> --json     # poll until every status == ready

# 4a. Ask for a summary directly in chat
notebooklm ask "Summarize the key points across all sources." -n <notebook_id>
notebooklm ask "What are the main arguments and where do they conflict?" -n <notebook_id>

# 4b. Or generate a written report artifact
notebooklm generate report --format briefing-doc -n <notebook_id> --json   # → task_id
notebooklm artifact wait <task_id> -n <notebook_id>
notebooklm download report ./summary.md -a <task_id> -n <notebook_id>
```

In parallel/automated workflows always pass an explicit `-n <notebook_id>`
rather than relying on `notebooklm use`.

See `.claude/skills/notebooklm/SKILL.md` for the full command reference,
generation types, error handling, and processing-time expectations.
