---
title: List Card
category: Components
url: https://design.ignitionapp.com/25ddf264c/p/4580454
scraped: 2025-11-16T03:21:41.719Z
---

# List Card
```markdown
## Overview

The `List Card` component is a versatile UI element designed to display summarized information for items within a list, often facilitating selection or further interaction. It provides a compact and structured way to present key details, making it easy for users to browse and choose from multiple options efficiently.

## Usage Guidelines

The `List Card` component has specific usage contexts within the application:

*   **Proposal template selection**: Used within the NPE (New Project Experience) Template modal for choosing templates.
*   **Selecting a workflow**: Employed in the NPE Add workflow flow to select from available workflows.

## Anatomy

A `List Card` is composed of the following visual and functional elements:

*   **Container**: The primary bounding box that encapsulates all card content.
*   **Border**: A visual outline that defines the card's boundaries.
*   **Title**: The main heading or name of the list item the card represents.
*   **Description**: Secondary text providing additional context, details, or a brief summary.
*   **Icon or logo (optional)**: An illustrative graphic or brand mark to aid recognition.
*   **Badge (optional)**: A small, often colored, indicator used to convey status, count, or category.

## Behaviour

### States

`List Cards` can transition between the following states, each reflecting a different user interaction or condition:

*   **Default**: The initial, unselected, and inactive state of the card.
*   **Hover**: The state when a user's cursor is positioned over the card, typically indicating interactivity.
*   **Active**: The state indicating the card is currently selected or has been activated by the user.
*   **Disabled**: The state when the card is not interactive and cannot be selected or activated.

### Interactions

*   **Elevation/Shadow on Hover**: When a `List Card` is in the `Hover` state, it visually communicates interactivity by displaying elevation or a subtle shadow.
*   **Greyscale Icon/Logo**: Icons or logos within the card are initially greyscale until the card's state changes to `Hover` or `Active`.
*   **Detailed Information on Active State**: When a `List Card` transitions to the `Active` state, the user is provided with a preview or more detailed information related to the card's content.

## Styling Properties

The `List Card` component's visual appearance is defined by the following styling properties:

| Property             | Description                                                                                                                                                                 | Default Value                    | Active State     | Hover State |
| :------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------- | :--------------- | :---------- |
| **Background colour** | The fill color of the card's container.                                                                                                                                     | `white`                          | `purple/50`      |             |
| **Border colour**    | The color of the card's border.                                                                                                                                             | `gray/200`                       |                  |             |
| **Border weight**    | The thickness of the card's border.                                                                                                                                         | `1px`                            |                  |             |
| **Shadow**           | Drop shadow applied to the card to give it depth.                                                                                                                           | `none`                           |                  | (Implied)   |
| **Border radius**    | The curvature applied to the corners of the card.                                                                                                                           | `default (3px)`                  |                  |             |
| **Padding (content)**| The inner spacing between the card's border and its content.                                                                                                                | `padding-large`                  |                  |             |
| **Justify content**  | The horizontal alignment of content within the card. While `centre` is the default, it is almost always overridden to `left` alignment for practical usage.                | `centre`                         |                  |             |
| **Text style**       | Defined typographic styles for the text elements within the card.                                                                                                           |                                  |                  |             |
| &nbsp; &nbsp; _Title_| &nbsp; The style for the card's main title.                                                                                                                                   | `Body/medium`, `Gray/900` (primary text) |                  |             |
| &nbsp; _Description_ | &nbsp; The style for the card's secondary description text.                                                                                                                   | `Body/small`, `Gray/800` (secondary text) |                  |             |

## Variants

*   **Workflow List Cards**: This variant has specific deviations from the default `List Card` styling and behavior:
    *   The selection color (when active) is `blue`.
    *   The logo color remains its natural color and is not greyscale when the card is not selected.

## Best Practices

### Do's

*   **Left-align content**: Ensure all textual and visual content within the `List Card` is left-aligned for readability.
*   **Stack cards vertically**: Arrange multiple `List Cards` in a vertical orientation, forming clear lists.
*   **Show more information on selection**: When a card is in an `Active` (selected) state, provide additional details or a preview to the user.

### Don'ts

*   **Centre-align content**: Avoid centre-aligning content, as it can hinder scanability and readability in a list context.
*   **Stack cards horizontally**: Do not arrange `List Cards` side-by-side, as this disrupts the list pattern and can complicate layout responsiveness.
*   **Allow multiple selections**: Prevent users from selecting more than one `List Card` at a time, unless the use case explicitly requires multi-selection and is clearly designed for it.
```