---
title: Menu button
category: Components
url: https://design.ignitionapp.com/25ddf264c/p/5080877
scraped: 2025-11-16T03:15:05.640Z
---

# Menu button
## Overview

The Menu button component is used to present a list of related actions or options within a dropdown menu. It is distinguished by a visible label and an accompanying down arrow icon, which clearly indicates its interactive nature and that it will reveal further choices upon activation.

## Usage Guidelines

Use the Menu button to consolidate multiple actions or options, enhancing UI clarity and reducing clutter.

### Best Practices

*   **Do**: Always include a down arrow icon in menu buttons to clearly communicate that clicking it will open a dropdown menu.
*   **Don't**: Do not use the menu button without a down arrow icon, as this can mislead users about its functionality.

## Anatomy/Structure

The Menu button comprises the following visual elements:

*   **Label**: Text that describes the primary function or category of the menu items.
*   **Arrow icon**: A downward-pointing arrow icon, visually indicating that the button will expand to reveal a dropdown menu.

## Behaviour

### States

The Menu button supports the following interactive states:

| State        | Description                                       |
| :----------- | :------------------------------------------------ |
| Default      | The standard, un-interacted appearance of the button. |
| Hover/Active | The appearance when the user's cursor is over the button, or when the menu is currently open/active. |
| Disabled     | The appearance when the button is inactive and cannot be interacted with. |

### Interactions

#### Opening the menu
Details on how the menu is triggered to open (e.g., on click).

#### Closing the menu
Details on how the menu is dismissed (e.g., click outside, Esc key).

### Styling
*(No specific styling guidelines were provided in the extracted content.)*

## Variants

The Menu button has specialized variants for different use cases:

| Variant                   | Description                                                                                             | Usage Example                                                                                                                  |
| :------------------------ | :------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------- |
| Filter button             | Used for applying filters to data, typically within lists or tables.                                    | Used in pipeline and clients list page for table filters.                                                                      |
| Overflow actions button   | Provides access to multiple actions or options that do not fit within the main interface due to space constraints or hierarchy. | Used in multiple places in the app where multiple actions are available or options that cannot fit within the main interface. |

## Related Components

*   **Combo button**: Consider the differences between a Menu button and a Combo button for specific interaction patterns.