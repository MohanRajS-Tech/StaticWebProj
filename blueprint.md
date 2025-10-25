
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

## Current Implementation Plan

### Task: Expand and Enhance the Timeline

The goal is to transform the existing 5-step timeline into a more detailed and immersive 11-stage journey. This will create a more visually appealing and informative experience.

#### Steps:

1.  **Expand Timeline Stages:** Increase the number of stages from five to eleven to provide a more granular and comprehensive view of the data lifecycle.
2.  **Enrich Content:** Update the `title`, `subtitle`, and `detail` for each stage to be more descriptive and engaging.
3.  **Integrate Visual Media:** Add a relevant GIF (`gifUrl`) to each of the eleven stages. This will make the timeline more dynamic and contribute to a longer, more immersive scrolling experience.
4.  **Implement Zig-Zag Layout:**
    *   Modify `App.jsx` to alternate the `alignment` of `TimelineCard` components.
    *   Update `TimelineCard.jsx` to dynamically render on the left or right based on the `alignment` prop.
    *   Add an `<img>` tag to display the GIF within the card.
5.  **Create Zig-Zag Connector:** Replace the straight vertical line in `src/index.css` with a visually appealing SVG zig-zag pattern to connect the timeline cards.
