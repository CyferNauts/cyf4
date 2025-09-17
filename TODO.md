# Event Explorer UI Implementation TODO

## 1. Setup Dependencies
- [ ] Check if Framer Motion is installed; install if not (`npm install framer-motion`)
- [ ] Check TailwindCSS config for Syne font; add if needed (update tailwind.config.js and src/index.css)

## 2. Create Reusable Components
- [ ] Create src/components/Events/Sidebar.js: Festival logo/name, grouped events by category, highlight active, smooth switch
- [ ] Create src/components/Events/EventDetail.js: Structured event details with sections, previous/next arrows
- [ ] Create src/components/Events/RoundSection.js: Display rounds with bold headings and details
- [ ] Create src/components/Events/JudgingTable.js: Table/grid for judging criteria with name and weight %
- [ ] Create src/components/Events/ContactsList.js: List of coordinators with optional phone/handle

## 3. Refactor Main Events Component
- [ ] Update src/components/Events/Events.js: Main container with state for active event, grouped events, previous/next logic, responsive layout

## 4. Implement Features
- [ ] Add event grouping by category in Sidebar
- [ ] Add previous/next arrows to cycle through events in EventDetail
- [ ] Implement responsive sidebar collapse into dropdown or off-canvas on mobile
- [ ] Add Framer Motion animations for transitions (fade in/out, slide in for content)

## 5. Styling and Theming
- [ ] Apply Syne font family throughout
- [ ] Implement clean minimal dark theme with high contrast using TailwindCSS
- [ ] Ensure all sections are styled clearly with spacing, headings in uppercase

## 6. Testing and Optimization
- [ ] Test dynamic mapping from events.json
- [ ] Verify responsiveness on mobile
- [ ] Optimize for readability and maintainability
- [ ] Run the app and check for any errors
