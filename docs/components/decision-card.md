---
title: Decision Card
category: Components
url: https://design.ignitionapp.com/25ddf264c/p/5461387
scraped: 2025-11-16T03:13:47.804Z
---

# Decision Card
This document outlines the guidelines for using the Decision Card component within the design system.

## Overview

Decision Cards are visually prominent UI components designed for scenarios where selection is a primary action or creates a significant fork in a workflow. They are an enhanced type of card, often including icons for additional visual context.

## Usage Guidelines

Decision Cards are intended for primary interactions and clear decision points within an application workflow.

### When to Use Decision Cards

*   When the selection is a primary action on the page.
*   To provide strong visual context, often with an accompanying icon.
*   When displayed in isolation, rather than embedded within a single page or form.
*   To create a forked path that significantly alters the workflow.
*   When a selection immediately impacts the output or the following view.
*   When there is no minimum or maximum number of options required.
*   Use the small size when there are more than 4 choices and/or less descriptive content is required per choice.

### Positioning

*   Decision Cards should be displayed horizontally.
*   They are designed to wrap if necessary.

### Decision Card vs. Radio Button

| Feature                      | Decision Card                                                                                                                                                                                                                                                                                                                                                                                                  | Radio Button                                                                                                                                                                                                                                                                  |
| :--------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Visual Prominence**        | More visually prominent, with an icon for visual context. Ideal if selection is a primary action.                                                                                                                                                                                                                                                                                                                | Less visually prominent, when only a few words or a short sentence are required for context.                                                                                                                                                                                  |
| **Display Context**          | Displayed in isolation, rather than within a single page/form.                                                                                                                                                                                                                                                                                                                                                 | Used as a minor choice within a single page/form.                                                                                                                                                                                                                             |
| **Workflow Impact**          | Used to create a forked path within a workflow. Typically immediately impacts the output when selected (i.e., applies selection to the following view).                                                                                                                                                                                                                                                           | Doesn't immediately impact the output when selected (i.e., user may not be able to see the output of their selection in the following view).                                                                                                                                    |
| **Number of Options**        | No min/max number of options.                                                                                                                                                                                                                                                                                                                                                                                  | Max 5-6 options. Beyond this, use the Select component.                                                                                                                                                                                                                       |
| **Position (General Guide)** | Display horizontally and wrap.                                                                                                                                                                                                                                                                                                                                                                                 | Display vertically.                                                                                                                                                                                                                                                           |

## Anatomy/Structure

A Decision Card typically consists of the following elements:

| Element             | Description                                          |
| :------------------ | :--------------------------------------------------- |
| `Container`         | The main interactive area of the card.               |
| `Icon`              | A visual icon providing context (required).          |
| `Title`             | The main heading or name of the decision (required). |
| `Description`       | Additional explanatory text (optional).              |

## Variants and States

### States

Decision Cards exhibit the following interactive states:

| State      | Description                               |
| :--------- | :---------------------------------------- |
| **Default**  | The initial, unselected state of the card.  |
| **Hover**    | The state when a user's cursor is over the card. |
| **Selected** | The state when the card has been chosen.  |
| **Disabled** | The state when the card is not interactive. |

### Interactions

*   **Hover**: A change of state or highlight color occurs when the user hovers over a Decision Card.
*   **Click**: Clicking a Decision Card typically redirects the user to a new view and applies their selection to the next stage of the workflow.

### Sizing Variants and Styling

Decision Cards come in two primary sizes, each with distinct styling:

| Size     | Property      | Description                                             |
| :------- | :------------ | :------------------------------------------------------ |
| **Large**  | **Width**       | Fills the parent container.                             |
|          | **Description** | Always includes a description.                          |
|          | **Icon**        | Purple icon with a surrounding circle.                  |
| **Small**  | **Width**       | Fixed width.                                            |
|          | **Description** | Does not include a description.                         |
|          | **Icon**        | Gray icon only (no surrounding circle).                 |

### Behavioral Variant

A specific behavioral variant exists for small-sized Decision Cards used in the "First-use Onboarding" workflow:

*   **Pre-made Selection**: There is a pre-made selection provided, acting as a best guess or closest mapping to an industry type from the user's ledger.
*   **Delayed Progression**: Clicking a card in this variant does not automatically progress the user to the next step in the workflow. Users can click multiple cards, change their selections, and then click a "Continue" Call-to-Action (CTA) to apply their choices and proceed.

## Best Practices

### Do

*   Display Decision Cards in isolation (e.g., within a modal or a dedicated full page).
*   Use the small size when there are more than 4 choices, especially if less descriptive content is required per choice.

### Don't

*   Avoid adding Decision Cards to busy pages or within other containers that could create visual clutter or confusion.

## Related Components

*   **Radio**
*   **Select component**