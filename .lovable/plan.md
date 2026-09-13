# Home Intro Test

## Scope
- Add one reusable, code-only `SectionIntroAnimation` component configured only for `section="home"`.
- Play a 1–2 second full-screen cyber-tech sequence using lightweight Framer Motion, CSS/SVG grid lines, particles, terminal UI, scan effects, and animated `HOME` typography.
- Keep the existing Home content mounted but visually hidden during the intro, then reveal it smoothly when the component reports completion.
- Restore About and every later section to their direct existing rendering so no section-opening animation runs outside Home.

## Technical details
- Use transform and opacity animations only where practical, with fixed layers to avoid layout shifts.
- Use `AnimatePresence` for the cinematic exit and parent completion callback.
- Skip the intro for `prefers-reduced-motion` users.
- Preserve all existing Home markup, content, styling, controls, links, and custom cursor behavior.
- Verify type/build health and test the complete flow at desktop and mobile sizes.
