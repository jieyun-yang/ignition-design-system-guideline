---
title: Button
category: Components
url: https://design.ignitionapp.com/25ddf264c/p/2945254
scraped: 2025-11-16T03:36:32.799Z
---

# Button
Here is the LLM-friendly markdown documentation for the "Button" component:

---

## Overview

Buttons are interactive elements that enable users to perform actions. They are crucial for guiding user workflows and indicating key interaction points within an interface.

## Anatomy/Structure

Buttons are composed of various elements depending on their type.

| Button Type | Structure                                 |
| :---------- | :---------------------------------------- |
| Solid button | `Icon (Optional) + Text label`             |
| Ghost button | `Icon (Optional) + Text label`             |
| Text button | `Icon (Optional) + Text label`             |
| Icon button | `Icon + Container (Optional for background)` |

## Variants

Buttons come in different visual variants and states to communicate their purpose and current interaction status.

### Type Variants

The primary visual styles for buttons include:

*   **Solid button:** A button with a filled background, typically used for primary actions.
*   **Ghost button:** A button with a transparent background and a border, often used for secondary actions.
*   **Text button:** A button with no background or border, represented only by its text label, suitable for tertiary or low-priority actions.
*   **Icon button:** A button consisting solely of an icon, often used in space-constrained areas.

### Hierarchy Variants

Buttons are categorized by their hierarchical importance on a screen.

| Hierarchy | Appearance                                | Description                                                                                                                                                                                                                                       | Example Context                  |
| :-------- | :---------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------- |
| **Primary** | Purple 500, Orange 500                  | Use the primary button for the most important call-to-action (CTA), usually related to the user’s main goal. Aim for one primary action per screen, section, or container to eliminate confusion. *Orange 500 button is currently the primary button, but we'll reconsider it in the future. Users find the red button confusing for destructive actions.* | Primary button example           |
| **Secondary** | Gray 200, Purple 500                  | Use secondary buttons for regular, non-primary actions.                                                                                                                                                                                             | Secondary button examples        |
| **Tertiary** | (No specific color mentioned, implied) | Use for lowest priority actions like "Close", "Done", and "Clear filters".                                                                                                                                                                        | Tertiary button example          |

### Behavioral States

Buttons respond to user interaction and changes in application state.

| State           | Solid | Ghost | Text |
| :-------------- | :---- | :---- | :--- |
| **Default**     |       |       |      |
| **Hover/Active** |       |       |      |
| **Disabled**    |       |       |      |

#### Loading State

During an asynchronous operation, buttons indicate a loading state.

*   Update label text to present continuous when loading.
    *   *Example:* `long button with ...`

## Usage Guidelines

### Buttons vs. Links

This section would typically clarify the distinction between when to use a button (for actions) and when to use a link (for navigation). (Specific content on this distinction was not provided in the extracted content beyond the heading.)

### Hierarchy Usage

*   Aim for one primary action per screen, section, or container to eliminate confusion.
*   Avoid using two primary buttons next to one another.
*   Do not use non-primary colors for primary actions unless specified for a different hierarchy.

### Icon Usage in Buttons

| Type                  | Guidelines                                                                                                              |
| :-------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| **Icon and text button** | Use icon + text buttons for primary actions that require high emphasis.                                                 |
| **Icon button**       | Use icon-only buttons when there is limited space available.                                                            |
| **Left/Right icon position** | In most cases, position icons to the left of the button text. Use right-positioned icons if the action navigates to different pages or different contexts. |

### Width

*   Use a filled button on its own for a single important action.
    *   *Example:* `Loading button` (when referring to a full-width loading button).

## Properties/Options

### Sizing

Buttons are available in different sizes to accommodate various layouts and contexts.

| Size    | Description                                                                                                                             |
| :------ | :-------------------------------------------------------------------------------------------------------------------------------------- |
| **sm**  | Use when there is not enough vertical space for the default or field-sized button. *Before using the small button, please discuss it with other designers in the Spar session.* |
| **md (Default)** | This is the most common button size.                                                                                                    |

## Best Practices

### Do's

*   Aim for one primary action per screen, section, or container to eliminate confusion.
*   Always add hover tooltips to icon-only buttons to explain the meaning of the icon.
*   Update label text to present continuous when loading.
    *   *Example:* `long button with ...`
*   Use a filled button on its own for a single important action.

### Don'ts

*   Avoid using two primary buttons next to one another.
*   Don't use non-primary colors.
*   Do not use icon-only buttons without a tooltip.
*   Don't use label text with "..." (ellipses) as the primary indication for loading states.
    *   *Example:* `Label hidden` (implies not to hide the label during loading)
*   Don't use the spinner itself as the sole indication of loading.
    *   *Example:* `Enabled button` (implies not to show a spinner on an enabled button that isn't actively loading).
*   Don't enable the button while loading.

## Accessibility

*   For icon-only buttons, always provide hover tooltips to explain the meaning or action of the icon, ensuring clarity for all users.
*   Do not use icon-only buttons without a tooltip.

---