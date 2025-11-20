---
title: First-use
category: ONBOARDING
url: https://design.ignitionapp.com/25ddf264c/p/5840305
scraped: 2025-11-16T03:51:59.473Z
---

# First-use
```markdown
## Overview

The "First-use" guideline defines the principles and patterns for designing initial user experiences when they encounter a new feature, a section of an application, or the application itself for the very first time. Its primary purpose is to provide clear, concise guidance and context, ensuring users can quickly understand and effectively utilize the product or feature without feeling overwhelmed. This guideline aims to create a welcoming and intuitive onboarding experience, reducing friction and increasing user adoption.

## Usage Guidelines

This section outlines when and how to implement first-use experiences effectively within the product.

### When to use First-use experiences:

*   **New User Onboarding**: When a user logs into the application for the very first time, to introduce core functionalities and value propositions.
*   **Introducing New Features**: When a significant new feature is released, to guide existing users through its purpose and basic interaction.
*   **Complex Workflow Introduction**: When a user encounters a particularly complex or critical workflow for the first time, to walk them through the necessary steps or concepts.
*   **Contextual Guidance**: To provide just-in-time help or tips for specific, less intuitive UI elements or interactions on their initial encounter.

### How to implement First-use experiences:

*   **Keep it Concise**: Focus on one key message or action at a time. Avoid overwhelming the user with too much information.
*   **Action-Oriented**: Guide the user towards taking a meaningful first action that demonstrates value or progresses their setup.
*   **Skippable and Dismissible**: Always provide a clear way for users to skip or dismiss the first-use experience if they prefer to explore independently.
*   **Non-intrusive**: Design the experience to be helpful without completely blocking access to the underlying interface, unless absolutely necessary for critical setup.
*   **Progressive Disclosure**: For complex onboarding, consider breaking down information into smaller, digestible chunks presented sequentially rather than all at once.
*   **Contextual Relevance**: Ensure the first-use experience is directly relevant to the user's current context and their probable next steps.
*   **Visual Cues**: Use visual highlights, overlays, or animations to draw attention to specific UI elements being explained.

## Anatomy/Structure

No specific information was provided in the original extract for this section. Typically, this section would detail common structural elements of a first-use pattern (e.g., modals, tooltips, walkthroughs, highlight tours, progress indicators).

## Variants/States

No specific information was provided in the original extract for this section. This would usually describe different types of first-use patterns (e.g., product tours, feature highlights, empty states with onboarding content) or their interactive states (e.g., active, completed, skipped).

## Properties/Options

No specific information was provided in the original extract for this section. This would typically include configurable properties for first-use components, such as:

| Property       | Type    | Description                                   | Default |
| :------------- | :------ | :-------------------------------------------- | :------ |
| `skippable`    | boolean | Whether the user can skip the entire sequence | `true`  |
| `autoAdvance`  | boolean | Whether steps advance automatically           | `false` |
| `placement`    | string  | Position relative to the target element       | `bottom`|
| `primaryAction`| object  | Configuration for the main call to action button | `{...}` |
| `secondaryAction`| object | Configuration for secondary actions (e.g., "Learn More") | `{...}` |
| `steps`        | array   | Array of individual step configurations       | `[]`    |

## Best Practices

*   **Keep it Focused**: Each first-use step or screen should convey a single, clear message or instruction.
*   **Respect User Choice**: Always offer an escape hatch (e.g., "Skip Tour", "Got It"). Forcing users through an experience can be frustrating.
*   **Track Progress**: If it's a multi-step experience, show the user their progress (e.g., "1 of 3").
*   **Personalize (if possible)**: Tailor the experience based on user roles, past behavior, or initial setup choices to make it more relevant.
*   **Test and Iterate**: User test first-use experiences to identify points of confusion or drop-off and iterate based on feedback.
*   **Avoid Over-Explaining**: Trust users to explore. Only highlight essential actions or concepts.

## Accessibility

No specific information was provided in the original extract for this section. However, common accessibility considerations for first-use patterns include:

*   **Keyboard Navigation**: Ensure all interactive elements within the first-use experience (e.g., "Next," "Skip," "Close") are fully navigable via keyboard.
*   **Screen Reader Support**: Provide appropriate ARIA attributes and semantic HTML to convey the purpose and state of the first-use content to screen readers.
*   **Focus Management**: Manage focus carefully, especially in modal-like first-use experiences, to trap focus within the active overlay until it's dismissed.
*   **Contrast and Sizing**: Ensure sufficient color contrast for text and interactive elements, and appropriate target sizes for touch/click.
*   **Reduced Motion**: Respect user preferences for reduced motion by providing alternative, static presentations where animations are used.

## Code Examples

No specific information was provided in the original extract for this section. This section would typically include code snippets demonstrating how to implement a first-use component using the design system's framework (e.g., React, Vue, Angular) or plain HTML/CSS.

## Spacing/Sizing

No specific information was provided in the original extract for this section. This would detail measurements like padding, margins, minimum sizes for clickable areas, or specific breakpoints for responsive behavior of first-use components.

## Related Components

No specific information was provided in the original extract for this section. This would typically link to other related components or guidelines such as:

*   **Empty States**: Guidelines for designing states where there is no content yet.
*   **Tooltips & Popovers**: For showing contextual information on hover or click.
*   **Modals & Dialogs**: For drawing immediate attention and requiring user interaction.
*   **Progress Indicators**: For visualizing user advancement through a process.
```