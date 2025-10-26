
# Project Blueprint: The Life Journey of Data

## Overview

This document outlines the design, features, and implementation plan for a dynamic and visually engaging timeline application. The application showcases the "Life Journey of Data" using a modern, responsive, and accessible interface built with React and Tailwind CSS.

## Core Features & Design

*   **Technology Stack:** React, Vite, Tailwind CSS
*   **Layout:** A responsive, single-page vertical timeline.
*   **Visual Style:**
    *   **Aesthetics:** A clean, modern design with a professional yet vibrant color palette.
    *   **Typography:** Clear and expressive fonts to guide the user's attention.
    *   **Iconography & Imagery:** Relevant GIFs are used for each stage to make the content more engaging and illustrative.
    *   **Layout:** A zig-zag pattern for the timeline to create a visually balanced and dynamic flow, ensuring the application is engaging on both desktop and mobile.
*   **Accessibility:** The application will adhere to a11y standards, ensuring it is usable by a wide range of users.

## New Feature Plan: Automated Presentation Mode

To create a more guided and presentation-like experience, we will implement an automated scrolling feature. This will be controlled by a simple "Play" button, allowing users to watch the timeline unfold automatically.

### Implementation Steps:

1.  **Add a "Play" Button:**
    *   A single "Play" button will be added to the top-left of the page, near the main title.

2.  **Implement Automated Scrolling:**
    *   **State Management:** The application will use React's `useState` and `useEffect` hooks to manage the `activeItemIndex`.
    *   **Timed Progression:** When "Play" is clicked, a `setInterval` will advance the `activeItemIndex` every 3 seconds.
    *   **Scrolling into View (Robust Method):** A `useEffect` hook will listen for changes to `activeItemIndex`.
        *   When the index changes, this effect will use `document.querySelectorAll('.vertical-item-row')` to get a list of all timeline items.
        *   It will then select the specific element from that list using the `activeItemIndex` (e.g., `items[activeItemIndex]`). This is more reliable than waiting for a specific CSS class.
        *   It will then call the standard browser `element.scrollIntoView({ behavior: 'smooth', block: 'center' })` method on the selected element.
