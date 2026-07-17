---
title: Screenshots TODO
description: Checklist of placeholder screenshots that need a real capture.
---

Every manual page currently embeds a generated grey placeholder SVG instead
of a real screenshot. Replace each one with an actual capture from the
running app, then delete its entry from `scripts/generate-placeholders.mjs`
and re-run `node scripts/generate-placeholders.mjs` to keep the two lists in
sync.

- [ ] **Setup wizard** (`manual/setup-wizard.md`) — Source Folders step, mid
      fill, showing required/optional grouping.
- [ ] **Inbox** (`manual/inbox.md`) — the plan-review confirm gate, showing
      source → destination paths before Apply.
- [ ] **Sessions** (`manual/sessions.md`) — session list plus an open detail
      panel.
- [ ] **Targets & planning** (`manual/targets-planning.md`) — a target's
      detail panel showing tonight's real per-site astronomy.
- [ ] **Projects & lifecycle** (`manual/projects-lifecycle.md`) — project
      detail with attached sessions and per-channel numbers.
- [ ] **Calibration & masters** (`manual/calibration-masters.md`) — a master
      frame's detail view with ranked candidate sessions.
- [ ] **Cleanup & archive plans** (`manual/cleanup-archive.md`) — a cleanup
      plan under review, before approval.
- [ ] **Settings** (`manual/settings.md`) — the Appearance pane with theme
      and density controls.
- [ ] **Updater** (`manual/updater.md`) — Settings → Advanced showing an
      available update.

Screenshots should be captured at the app's default light theme unless a
page specifically needs to demonstrate theming, and cropped to the relevant
panel rather than the full desktop window.
