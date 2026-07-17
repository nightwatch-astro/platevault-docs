---
title: Sessions
description: Read-only, always up-to-date acquisition session inventory.
---

Sessions shows your acquisition sessions — a night's worth of a
target/filter combination — as a read-only inventory derived from the
library index. There is nothing to approve here: the [Inbox](../inbox/)
confirm gate you already passed is the only gate. The page carries no
Confirm, Re-open, Reject, or Ignore control and no review-state pill.

![Screenshot: Sessions list and detail](../../../assets/screenshots/sessions.svg)

## Where rows come from

The list stays empty until an Inbox item has been confirmed and its plan
applied. From then on, session rows appear automatically after every apply
— whether the files were moved into the library or catalogued in place —
with frame counts matching exactly what the plan processed. A single source
folder can yield several sessions when its frames split by gain, binning,
or other settings.

When FITS metadata carries no target name, the Target cell falls back to
the session's own name rather than showing a blank.

Re-running an Inbox scan of an already-confirmed source never duplicates a
session and never changes the list.

## Filter, group, and sort

- **Filter** and **Camera** dropdowns are populated from the full session
  set — picking one filter never removes the other options.
- **Group by** Target, Filter, Night, Camera, or Month; a "Grouped by X"
  hint appears under the list while grouping is active.
- Click a column header to sort; the active column announces its direction
  to assistive technology via `aria-sort`.

There is no frame-type filter: sessions are light frames only. Calibration
frames live on the [Calibration page](../calibration-masters/).

## Session detail

Selecting a row opens a detail panel with the session's attributes: target,
filter, frame count, exposure, total integration time (when derivable),
night, camera, gain, binning, sensor temperature, and who confirmed it.
Each value carries a source badge (FITS / User / Inferred / Default) only
when a real value is present; an applicable-but-missing value renders a
distinct unresolved chip, and a not-applicable field renders a plain dash.
Closing the panel never mutates the session.

From the detail you can also:

- **Open a linked project** — a project chip navigates to the
  [Projects page](../projects-lifecycle/).
- **Show in File Explorer** (label follows your OS) — opens the OS file
  manager at the session's source root. The action is offered only when a
  source path resolves; a failed reveal shows an error toast and leaves the
  panel open.

## Cleaning up raw sub-frames

A session's detail also hosts the raw sub-frame cleanup scan, for
reclaiming space from superseded lights/darks/flats/bias —
through the same plan review and apply flow as every other mutation. See
[Cleanup & archive plans](../cleanup-archive/).
