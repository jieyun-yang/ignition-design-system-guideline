---
title: Spacing
category: Foundations
url: https://design.ignitionapp.com/25ddf264c/p/2945253
scraped: 2025-11-16T03:42:28.696Z
---

# Spacing
```markdown
## Overview

The Spacing guidelines define a consistent system of values used to manage the visual distance between UI elements, ensuring a harmonious and predictable user experience across the product. These tokens help establish clear relationships, improve readability, and maintain a unified aesthetic.

## Spacing Tokens

This section details the defined spacing tokens, their values, and typical use cases within the design system.

| Token Name | Value | Common Usage (examples, not exhaustive) | Notes/Inconsistencies |
| :--------- | :---- | :-------------------------------------- | :-------------------- |
| zero (TBC) | 0     | Margin between menu items, field label and caption | This is not a formally defined value in the current codebase. There's an inconsistency with the Chakra input component, which has a built-in label and caption gap of `0.5rem` (6.5px). |
| xsmall     | 4px   | Margin between icon and text for most components, such as menus, input fields, and buttons. | Inconsistency: Chakra components currently use various icon and text margin values. For example, `0.5rem` for inputs and buttons, and `0.75rem` (9.75px) for menus. |
| small      | 8px   | Vertical padding for menu items; Margin between buttons in the action bar; Margin between caption and field for inputs. | Inconsistency: In the NPE (Product Name/Environment), the margin between buttons in the action bar is currently `12px`. |
| medium     | 12px  | Margin between the divider and heading for the header of modals. | |
| large      | 16px  | (Usage not explicitly defined in provided content) | |
| xlarge     | 24px  | (Usage not explicitly defined in provided content) | |
| xxlarge    | 32px  | (Usage not explicitly defined in provided content) | |
| form (TBC) | 16px  | (Usage not explicitly defined in provided content) | |

## Usage Guidelines

Use the defined spacing tokens to achieve visual consistency and clarity in your designs:

*   **`zero` (0)**: Intended for situations where elements should have no visual separation, such as direct adjacencies. Be mindful of existing component implementations that may introduce small gaps.
*   **`xsmall` (4px)**: Ideal for small inline separations, particularly between an icon and its accompanying text within a component.
*   **`small` (8px)**: Suitable for common, modest separations like vertical padding within list items or standard margins between interactive elements like buttons.
*   **`medium` (12px)**: Use for slightly larger separations, such as dividing content blocks or providing clear space around prominent headings within components like modals.
*   **`large` (16px)**, **`xlarge` (24px)**, **`xxlarge` (32px)**: These larger tokens are generally used for spacing between major sections, groups of components, or to define significant container padding.
*   **`form` (16px)**: (Usage not explicitly defined, but likely intended for consistent vertical spacing within forms or between form fields).

## Best Practices & Considerations

*   **Prioritize Token Usage**: Always strive to use a defined spacing token rather than arbitrary pixel values to maintain consistency and ease future updates.
*   **Address Inconsistencies**: Be aware of the noted inconsistencies with existing component libraries (e.g., Chakra UI). When implementing new designs or updating existing ones, advocate for aligning with the defined spacing tokens where possible.
*   **Evaluate "TBC" Tokens**: Tokens marked "TBC" (To Be Confirmed) like `zero` and `form` indicate areas where further definition or clarification is needed. Use them with caution and provide feedback to the design system team.
*   **Review `small` token application**: Note the discrepancy regarding the margin between action bar buttons (currently `12px` in NPE vs. `8px` for `small`). Consider aligning this to `small` for consistency.

## Related Components

The spacing tokens are applied across various components within the design system, including but not limited to:

*   Menus
*   Input fields
*   Buttons
*   Modals
*   Action Bars