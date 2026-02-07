# Specification

## Summary
**Goal:** Update the floating background animation so roses and hearts appear together consistently, with moderate density and simple tuning controls, while staying subtle and behind all hero content.

**Planned changes:**
- Adjust the particle generation logic so hearts and roses are always present concurrently (controlled distribution rather than randomly selecting only one type).
- Increase overall particle density from the current level and add simple tuning parameters (e.g., total count and per-type split) to control the mix.
- Ensure the full-screen canvas remains fixed, non-interactive, and layered behind all page content so readability and clicking/scrolling are unaffected.

**User-visible outcome:** On page load, users see a subtle but clearly noticeable background animation containing both floating hearts and roses at the same time, without interfering with reading or interacting with the hero section.
