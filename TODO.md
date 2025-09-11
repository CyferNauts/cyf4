# TODO List for Tab-Based Navigation Implementation

## Step 1: Create Folder Structure
- [x] Create src/components/Home/ directory
- [x] Create src/components/Events/ directory
- [x] Create src/components/Team/ directory
- [x] Create src/components/Gallery/ directory

## Step 2: Move Existing Components to Home Folder
- [x] Move Home.js to src/components/Home/
- [x] Move Home.css to src/components/Home/
- [x] Move AboutUs.js to src/components/Home/
- [x] Move AboutUs.css to src/components/Home/
- [x] Move MoreAboutUs.js to src/components/Home/
- [x] Move MoreAboutUs.css to src/components/Home/
- [x] Move SpacerSection.js to src/components/Home/
- [x] Move SpacerSection.css to src/components/Home/
- [x] Move video files (*.mp4) to src/components/Home/
- [x] Move Teamletters/ folder to src/components/Home/

## Step 3: Create New Components
- [x] Create Events/Events.js with boilerplate code
- [ ] Create Events/Events.css (if needed)
- [x] Create Team/Team.js with boilerplate code using Teamletters images
- [ ] Create Team/Team.css (if needed)
- [x] Create Gallery/Gallery.js with boilerplate code using Cyfernode0.3Photos images
- [ ] Create Gallery/Gallery.css (if needed)

## Step 4: Update App.js
- [x] Add activeTab state (default 'home')
- [x] Update imports to new folder structure
- [x] Add conditional rendering for tabs
- [x] Add GSAP animation for tab transitions

## Step 5: Update Navbar.js
- [x] Add click handlers for navigation links
- [x] Pass setActiveTab function as prop from App.js

## Step 6: Testing and Optimization
- [ ] Test navigation functionality
- [ ] Test sliding animations
- [ ] Ensure responsive design
- [ ] Optimize performance if needed
