---
title: Guided wizard
category: Worflows
url: https://design.ignitionapp.com/25ddf264c/p/6346062
scraped: 2025-11-16T03:52:25.788Z
---

# Guided wizard
```markdown
## Overview

A Guided Wizard is a user interface pattern designed to guide users through a structured, multi-step process. It breaks down complex tasks, forms, or onboarding flows into smaller, manageable sections, improving user comprehension, completion rates, and overall experience.

### Key Benefits

*   **Streamlined Onboarding:** Facilitates new user setup, preference customization, and feature learning.
*   **Simplified Complex Processes:** Breaks down long forms and data collection into digestible steps, enhancing accuracy and completion rates.

## Usage Guidelines

### When to use the Guided Wizard pattern

*   **Onboarding new users:**
    *   Helps users set up accounts.
    *   Guides through customizing preferences.
    *   Assists in learning key product features through a structured flow.
    *   *Example:* Creating a demo proposal.
*   **Complex forms and data collection:**
    *   Breaks down long forms into digestible sections.
    *   Improves accuracy and completion rates for data entry.
    *   *Example:* A CMI (Customer Management Integration) flow after sign-up.

### When not to use the Guided Wizard pattern

Avoid using a guided wizard in the following scenarios, as more efficient or appropriate patterns may exist:

*   **Simple content organization:** For breaking down long forms or content into expandable sections without a rigid flow. Consider using **Accordions** instead.
*   **Contextual input:** When fields should appear progressively based on user input, providing a smoother and more intuitive experience. Consider using **Dynamic Forms** instead.
*   **Clear, smaller stages:** If a task can be divided into clear, smaller stages where a linear progress indicator is sufficient. Consider using **Steppers** instead.

## Anatomy/Structure

*(Information not specified in the provided content.)*

## Variants/States

The Guided Wizard pattern can feature different states or variations depending on the user's progress or the context. While specific details are not provided, common variations include:

### Intro

The initial state of the wizard, typically used to introduce the process, explain its purpose, or gather initial information.

### Loading

A state indicating that content or data is being fetched or processed, often displayed between steps or upon initial load.

### Transition

Refers to the visual and interactive changes that occur when moving between different steps of the wizard.

## Properties/Options

*(Information not specified in the provided content.)*

## Best Practices

*   **Prioritize clarity:** Each step should have a clear purpose and guide the user towards completion.
*   **Minimize steps:** Only include necessary steps to avoid user fatigue.
*   **Provide progress indication:** Always show users where they are in the process (e.g., using steppers within the wizard or a simple step counter).
*   **Allow back navigation:** Users should be able to revisit previous steps to review or edit information.
*   **Offer exit points:** Provide clear options to save progress and exit the wizard if the user cannot complete it in one session.

## Accessibility

*(Information not specified in the provided content.)*

## Code Examples

*(Information not specified in the provided content.)*

## Spacing/Sizing

*(Information not specified in the provided content.)*

## Related Components

Consider these alternative patterns when a Guided Wizard may not be the most suitable solution:

*   **Accordions:** For breaking down long forms or content into expandable sections, making information more manageable without a rigid, sequential flow.
*   **Dynamic Forms:** For showing relevant fields progressively based on user input, providing a smoother and more intuitive experience where the next input depends on the previous.
*   **Steppers:** If the task can be divided into clear, smaller stages, a stepper (linear progress indicator) may be a sufficient and more efficient solution without the full overhead of a wizard pattern.
```