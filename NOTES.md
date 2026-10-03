# Task Tracker --- Codebase Bug Notes

## 1. Status Filter is not working

### Location

-   **File:** `TaskRepository.java`
-   **Folder:** `Backed`

After checking the backend SQL query, the filtering logic was found to be incorrectly grouped.


**Screenshot:** Done filter is selected but data is showing for all three filters.

<img src="./handwritten/screenshots/bug-1.png" alt="Dashboard" width="800">

## 2. Pagination Not Resetting After Search/Filter Changes

### Location

-   **File:** `App.jsx`,`SearchBar.jsx` and `StatusFilter.jsx`
-   **Folder:** Frontend

**Screenshot:** See the selected-filter and empty-page screenshots in

<img src="./handwritten/screenshots/bug-2.png" alt="Dashboard" width="800">

## 3. Unnecessary API Calls During Search

### Where the bug is

-   **Location:** `useTasks.js` 
-   **Folder:** Frontend

**Screenshot:** See the search/API request inspection screenshot in

<img src="./handwritten/screenshots/bug-3.png" alt="Dashboard" width="800">

## 4. Clear Filters Button --- Optional Improvement

### Location

-   **File:** `App.jsx`
-   **Layer:** Frontend → User experience

### Issue

Users previously had to manually clear the search and status filter.

# Notes-
<img src="./handwritten/page-1.jpeg" alt="Dashboard" width="600">
<img src="./handwritten/page-2.jpeg" alt="Dashboard" width="600">
<img src="./handwritten/page-3.jpeg" alt="Dashboard" width="600">
<img src="./handwritten/page-4.jpeg" alt="Dashboard" width="600">
<img src="./handwritten/page-5.jpeg" alt="Dashboard" width="600">

### AI Tool - 
 I used Chatgpt for fixing the sql query and writing the debounce hook.

