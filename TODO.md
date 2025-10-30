# TODO: Build Secure /resources Page with Authentication

## Step 1: Install Dependencies
- [x] Install react-router-dom for routing
- [x] Install js-cookie for cookie handling
- [x] Install express, cors, dotenv for backend API

## Step 2: Set Up Backend API
- [x] Create backend/ folder
- [x] Create backend/server.js with Express server
- [x] Create backend/routes/verifyCode.js for /api/verify-code endpoint
- [x] Set up .env file with RESOURCE_ACCESS_CODE
- [x] Add scripts to package.json for running backend

## Step 3: Update React App for Routing
- [x] Modify src/index.js to wrap App with BrowserRouter
- [x] Modify src/App.js to use Routes and Route for /resources
- [x] Create src/components/Resources.js component

## Step 4: Implement Authentication Logic in Resources Component
- [x] Check for resourceAuth cookie on load
- [x] If not present, show password prompt
- [x] Handle form submission to verify code via API
- [x] Set cookie on success, show resources page
- [x] Add logout button to clear cookie

## Step 5: Style the UI
- [x] Style password prompt with fade-in animation
- [x] Style resources page with header and grid of cards (mock data)
- [x] Ensure professional, minimal design using Tailwind

## Step 6: Test Functionality
- [x] Test direct access to /resources
- [x] Test authentication flow
- [x] Test cookie persistence
- [x] Test logout
