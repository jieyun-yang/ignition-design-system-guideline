---
title: Client card
category: Components
url: https://design.ignitionapp.com/25ddf264c/p/5156129
scraped: 2025-11-16T03:14:40.826Z
---

# Client card
## Overview
The Client Card component is a flexible container designed to display a collection of related items, such as client details, tasks, or resources, in a structured list format. It provides clear affordances for managing, viewing, and adding new items, making it suitable for dashboards and management interfaces where quick access and action are required.

## Anatomy/Structure

The Client Card is composed of several key visual elements:

*   **Header:** Displays a primary title or descriptor for the card's content.
*   **Badge:** A small indicator, often used for status or categorization, typically found within the header area.
*   **Edit/Manage button:** Provides an action to modify the overall client card or its primary content.
*   **List items:** Individual entries within the card's main content area, displayed as a list.
*   **Add/create more or view more button:** An action button typically at the bottom of the card, allowing users to add new items to the list or navigate to a more comprehensive view of all items.

## Usage Guidelines

Use the Client Card to:
*   Group and display a coherent list of related information or actions pertaining to a specific client or entity.
*   Provide a concise overview with clear options for interaction and expansion.
*   Enable users to quickly add new items to the list directly from the card.

## Best Practices

### Do
*   Use the header to display a clear and concise title that accurately describes the items contained within the card.
*   Display the contents of the card as a list, ensuring readability and consistency.
*   Provide a clear affordance (e.g., a button) to add new items to the list within the card.

### Don't
*   Display the header or any interactive buttons (like edit/manage or add/view more) outside the designated boundaries of the card component.
*   Display the contents of the card using nested card components; always use a list format for internal items.

## Behaviour

### Interactions

The Client Card supports several interactive behaviors:

*   **Edit/Manage Button:**
    *   Navigates to a dedicated page for editing the client or card details.
    *   Alternatively, opens a modal dialog to edit the client or card details directly.
*   **List Item Interaction:**
    *   Clicking on an individual list item opens a modal dialog to view the specific item's details.
*   **Add/Create More Button:**
    *   Opens a modal dialog to create a new item within the context of the card.

## Variants/States

The Client Card component can appear in various forms to suit different contexts:

*   **Avatar Header:** A variant where the header incorporates an Avatar component, typically used when the card represents a specific person or entity.
*   **Footer Display:** A variant that includes a dedicated footer area, which can be used for additional actions or summary information.
*   **Empty State:** A specific state displayed when there are no items to show within the card's list, often including a prompt or action to add the first item.