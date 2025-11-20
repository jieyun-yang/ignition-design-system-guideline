---
title: Card
category: Foundations
url: https://design.ignitionapp.com/25ddf264c/p/5460637
scraped: 2025-11-16T03:41:58.641Z
---

# Card
```markdown
## Overview

The Card component serves as a foundational wrapper for grouping and organizing related information within various user interface contexts. It provides a visual container that helps segment content, making it easier to digest and manage. While the base Card component is non-interactive, it forms the basis for numerous interactive and complex components within the system.

## Anatomy

The Card component is composed of a primary container and can include optional elements like a Header and Footer to structure its content further.

### Core Structure

| Element   | Description                                            |
| :-------- | :----------------------------------------------------- |
| Container | The parent wrapper that provides context for its children. |
| Body      | The wrapper that houses the card's main content.       |

### Optional Elements

Cards can optionally include a header and footer for more complex content arrangements or actions.

| Element   | Description                                         |
| :-------- | :-------------------------------------------------- |
| Header    | The wrapper that contains a card's header.          |
| Footer    | The footer that houses the card's action elements.  |

## Usage Guidelines

The Card component is highly versatile and used in various scenarios, ranging from static content grouping to interactive elements.

*   **Page Sections**:
    *   Used to form groups of relevant information within a full page.
    *   Usually has a title, which can be inside or outside the component.
    *   Not interactive itself, but elements inside can be (e.g., a CTA button).
*   **Drawer Sections**:
    *   Used to form groups of relevant data within a drawer, often nested under a tab/segment.
    *   Usually has a title, which can be inside or outside the component.
    *   Not interactive itself, but elements inside can be (e.g., a CTA button).
*   **Invoice Cards**:
    *   Used as the base of an interactive, navigational component.
    *   Triggers a drawer with more detailed information about the object and any related actions.
    *   Has specific behaviours and states.
    *   Includes the header component.
    *   *Note*: This is a specific, unique component in the application (InvoiceCard) and is not documented generically in Spark due to its specificity. It may feature manual overrides, such as the header background colour ('purple/50').
*   **Proposal Cards**:
    *   Used as the base of an interactive, navigational component.
    *   Triggers a drawer with more detailed information about the object and any related actions.
    *   Has specific behaviours and states.
    *   Features a coloured bar representing the status of the object.
    *   *Note*: This is a specific, unique component in the application (ProposalCard) and is not documented generically in Spark due to its specificity.
*   **Workflow Cards**:
    *   Used as a wrapper for all the form elements that directly feed into the object.
    *   Not interactive and has no states, but elements inside can be (e.g., text input).
    *   *Note*: This is a specific, unique component in the application (WorkflowCard) and is not documented generically in Spark due to its specificity.
*   **Card with Footer & Checkbox**:
    *   Used as the base of an interactive component.
    *   Behaves like a multi-select checkbox, allowing users to select one or multiple items before applying an action.
    *   Isn't navigational.
    *   Appears in individual client records under Billing Schedule.
    *   Uses the footer component.
    *   *Note*: This style of component is likely to be deprecated during UI refactoring of the Billing hub (transitioning from cards to table rows).
*   **Decision Card**:
    *   Used as the base for an interactive component.
    *   Has behaviours and states, and is navigational.
    *   Behaves like a radio selector: the user can only select one option.
    *   Once clicked, the application typically redirects to a new view based on that selection.
    *   *Note*: This example has been documented as a new, reusable component (`DecisionCard`).

## Behaviour

### States

The fundamental `Card` component itself is **not interactive** and has no inherent behaviours or states. It serves primarily as a static container for information.

For example, a basic Card component might visually resemble interactive components often displayed in the same view (e.g., `List Card` within the Proposal Templates modal), but it cannot be directly interacted with and does not exhibit states like hover, active, or selected.

However, as demonstrated in the Usage Guidelines, specific applications of the Card component (e.g., Invoice Cards, Decision Cards) *do* incorporate interactivity, behaviours, and states, often by wrapping the base Card with additional logic and UI elements.

## Styling Properties

### Base Card Styles

| Property            | Value          | Description                                                    |
| :------------------ | :------------- | :------------------------------------------------------------- |
| Background colour   | `white`        | The background colour of the card's container.                 |
| Border colour       | `gray/200`     | The colour of the card's border.                               |
| Border weight       | `1px`          | The thickness of the card's border.                            |
| Border radius       | `default (3px)` | The roundedness of the card's corners.                         |
| Padding (container) | `padding-large` | The internal spacing around the content within the card container. |
| Justify content     | `centre`       | The default alignment of content horizontally.                 |

### Header & Footer Styles

Specific background colours are applied to the optional header and footer elements.

| Element Style             | Value          |
| :------------------------ | :------------- |
| Header background colour  | `purple/50`    |
| Footer background colour  | `white`        |

## Best Practices

*   **Content Alignment**: While `justify-content` defaults to `centre`, it is typically manually overridden to `left` for better content readability and standard layout.
*   **Specific vs. Generic Cards**: When creating highly interactive or unique components that derive from the visual style of a Card but have specific behaviours, consider documenting them as separate, reusable components (e.g., `DecisionCard`). Avoid reusing the generic `Card` component for every specific interactive pattern if it leads to complex overrides or inconsistent behaviour.
*   **Legacy Components**: Be aware that some application-specific components (e.g., `InvoiceCard`, `ProposalCard`, `WorkflowCard`) are custom implementations and not part of the generic Spark Card documentation, often with unique styling or behaviours.
*   **Future Deprecation**: Note that the "Card with footer & checkbox" style may be deprecated in future UI refactors in favour of alternative component patterns like table rows.

## Related Components

*   **DecisionCard**: A specific, reusable component documented within the design system that builds upon the base Card to provide interactive, radio-selector-like behaviour.
*   **List Card**: An interactive component mentioned as similar in appearance to the basic Card, often found within modals (e.g., Proposal Templates modal), but with distinct interactive capabilities.
*   **InvoiceCard**, **ProposalCard**, **WorkflowCard**: While visually similar or using the base Card, these are specific application components not generally documented as part of the generic Spark Card due to their unique, bespoke nature.
```