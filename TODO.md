# TODO: Remove custom cursor on mobile view

- [x] Modify src/App.css: Add `* { cursor: auto !important; }` in the `@media (max-width: 768px)` block to show default cursor on mobile.
- [x] Modify src/components/CustomCursor.css: Add media query `@media (max-width: 768px) { .cursor, .cursor-inner { display: none; } }` to hide custom cursor elements on mobile.
