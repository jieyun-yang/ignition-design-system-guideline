---
title: Progress stepper
category: Components
url: https://design.ignitionapp.com/25ddf264c/p/5030208
scraped: 2025-11-16T03:15:44.733Z
---

# Progress stepper
This document outlines the design guidelines for the **Progress Stepper** component. It details its purpose, structure, interactive behaviors, and best practices to ensure consistent and effective use across applications.

---

## Overview

The Progress Stepper is a visual component used to guide users through a multi-step process, clearly indicating their current position within a defined sequence of tasks or stages. It provides a clear roadmap, enhancing user orientation and reducing cognitive load in complex workflows such as multi-page forms, onboarding processes, or application submissions.

## Usage Guidelines

Use the Progress Stepper when:

*   **Guiding Multi-Step Processes**: The user needs to complete a series of discrete steps to achieve a larger goal.
*   **Visualizing Progress**: It's important for users to understand how much progress they've made and what remains.
*   **Linear Workflows**: The process is inherently linear, requiring completion of one step before proceeding to the next (though some flexibility for optional steps or backward navigation may be supported).

Avoid using the Progress Stepper when:

*   **Single-Step Tasks**: The process can be completed on a single screen without distinct stages.
*   **Non-Linear Processes**: The user can jump between steps arbitrarily without completing them in order, or the order is not fixed. In such cases, consider alternative navigation patterns like tabs or a checklist.
*   **Too Many Steps**: For processes with an excessive number of steps (e.g., more than 7-10), consider breaking down the process into smaller steppers or using a different navigation paradigm.

**General Guidelines:**

*   **Clear Labeling**: Ensure each step has a concise and descriptive label that clearly communicates its purpose.
*   **Logical Order**: Steps should follow a logical and intuitive sequence.
*   **Provide Feedback**: Clearly indicate the current, completed, and upcoming steps.

## Anatomy/Structure

A Progress Stepper is typically composed of the following key elements:

*   **Step Indicator**: A visual cue (e.g., a number, an icon, or a dot) representing an individual step.
*   **Step Label**: Text accompanying the indicator, describing the step.
*   **Connector**: A line or visual element that links consecutive step indicators, symbolizing progression.
*   **Container**: The overall element housing all steps and connectors.

### Example Structure (Illustrative HTML)

```html
<nav aria-label="Progress">
  <ol class="progress-stepper">
    <li class="progress-stepper__step progress-stepper__step--completed">
      <div class="progress-stepper__indicator" aria-label="Step 1: Account Setup - Completed">
        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
      </div>
      <span class="progress-stepper__label">Account Setup</span>
      <div class="progress-stepper__connector"></div>
    </li>
    <li class="progress-stepper__step progress-stepper__step--active" aria-current="step">
      <div class="progress-stepper__indicator" aria-label="Step 2: Profile Details - Current">2</div>
      <span class="progress-stepper__label">Profile Details</span>
      <div class="progress-stepper__connector"></div>
    </li>
    <li class="progress-stepper__step">
      <div class="progress-stepper__indicator" aria-label="Step 3: Payment Information">3</div>
      <span class="progress-stepper__label">Payment Information</span>
      <div class="progress-stepper__connector"></div>
    </li>
    <li class="progress-stepper__step">
      <div class="progress-stepper__indicator" aria-label="Step 4: Review & Confirm">4</div>
      <span class="progress-stepper__label">Review & Confirm</span>
    </li>
  </ol>
</nav>
```

## Variants/States

The Progress Stepper supports different visual representations and interactive states to convey information effectively.

### States

*   **Upcoming (Inactive)**: Represents a step that has not yet been started.
    *   **Styling**: Typically greyed out or lighter color, often with a simple number indicator.
    *   **Interaction**: Usually not clickable for direct navigation unless `allowNavigation` is enabled.
*   **Active (Current)**: Represents the step the user is currently on.
    *   **Styling**: Highlighted with a primary brand color, bold text, and a distinct indicator (e.g., number in a circle, filled icon).
    *   **Interaction**: Not clickable to navigate to itself.
*   **Completed**: Represents a step that has been successfully finished.
    *   **Styling**: Often indicated with a checkmark icon or a primary color, sometimes with a subdued label.
    *   **Interaction**: May be clickable to revisit a completed step if backward navigation is allowed.
*   **Error**: Represents a completed or current step that has encountered an error or requires attention.
    *   **Styling**: Often uses a danger/error color (e.g., red) for the indicator or label.
    *   **Interaction**: Should be clickable to allow the user to return and fix the error.

### Variants

*   **Horizontal Stepper**: Steps are laid out side-by-side, ideal for processes with fewer steps or when horizontal space is ample.
*   **Vertical Stepper**: Steps are stacked vertically, suitable for longer processes, mobile views, or when vertical screen real estate is preferred.
*   **Numbered Stepper**: Uses sequential numbers as step indicators.
*   **Icon Stepper**: Uses relevant icons instead of or in addition to numbers for step indicators, especially useful for illustrating categories or abstract steps.
*   **Optional Steps**: Steps that can be skipped without affecting the overall process completion. These are often visually differentiated (e.g., with a dashed border or lighter text) and may include an "Optional" label.

## Properties/Options

The following properties can be configured to customize the Progress Stepper's behavior and appearance:

| Property            | Type             | Description                                                                  | Default        |
| :------------------ | :--------------- | :--------------------------------------------------------------------------- | :------------- |
| `currentStep`       | `number`         | The 0-indexed or 1-indexed number of the currently active step.              | `0` (or `1`)   |
| `steps`             | `Array<object>`  | An array of step configurations, each with at least a `label`.               | `[]`           |
| `orientation`       | `'horizontal'` \| `'vertical'` | Determines the layout direction of the stepper.                           | `'horizontal'` |
| `showLabels`        | `boolean`        | If `true`, step labels are displayed below/beside the indicators.            | `true`         |
| `allowNavigation`   | `boolean`        | If `true`, users can click on any completed or upcoming step to navigate.    | `false`        |
| `showConnector`     | `boolean`        | If `true`, displays the connector lines between steps.                       | `true`         |
| `errorStep`         | `number` \| `null` | The 0-indexed or 1-indexed number of a step currently in an error state.   | `null`         |
| `showIcons`         | `boolean`        | If `true`, displays icons instead of numbers for completed steps.            | `true`         |
| `customIconRenderer`| `(stepIndex, state) => ReactNode` \| `null` | A function to render custom icons for step indicators. | `null`         |

*Note: The `steps` array typically expects objects like `{ label: 'Step Title', optional: false }` and may include `icon` properties for custom iconography.*

## Behaviour

### Interactions

*   **Clicking Steps (if `allowNavigation` is `true`)**:
    *   **Completed Steps**: Clicking a completed step should navigate the user back to that step, allowing them to review or modify previous input.
    *   **Upcoming Steps**: If `allowNavigation` is `true`, clicking an upcoming step may navigate forward, but this should generally be restricted until all preceding steps are valid and complete. Consider using a "Save & Continue" button instead for forward progression.
    *   **Current Step**: Clicking the current step should have no action.
*   **Keyboard Navigation**:
    *   Users should be able to navigate between steps using `Tab` and `Shift + Tab`.
    *   When a step is focused, `Enter` or `Space` should trigger the same action as a click (if clickable).
*   **Progression**: The primary method of progression should be via dedicated "Next" or "Continue" actions within the content area of the current step, rather than relying solely on clicking the stepper elements.

### Styling

*   **Colors**: Use brand-primary for active/completed steps, neutral colors for upcoming steps, and danger/error colors for error states.
*   **Typography**: Step labels should use a consistent typographic style, legible at various screen sizes.
*   **Spacing**: Maintain consistent spacing between step indicators, labels, and connectors.
*   **Transitions**: Smooth transitions (e.g., color changes, icon swaps) can enhance the user experience when a step's state changes.

## Spacing/Sizing

*   **Step Indicator Size**: Recommended `24px` to `32px` diameter for number/icon circles.
*   **Label Spacing**: `8px` to `12px` vertical spacing between indicator and label in vertical layouts; `8px` to `16px` horizontal spacing in horizontal layouts (depending on typography).
*   **Connector Thickness**: `2px` to `4px` for the connector lines.
*   **Overall Step Spacing (Horizontal)**: A minimum of `24px` horizontal spacing between the end of one step's label/indicator and the start of the next's connector/indicator.
*   **Overall Step Spacing (Vertical)**: A minimum of `32px` vertical spacing between the bottom of one step's content and the top of the next.

## Best Practices

### Do's

*   **Do** keep step labels concise and clear (e.g., "Account Details" instead of "Tell us about your account").
*   **Do** use the stepper for truly sequential processes.
*   **Do** provide clear visual feedback for the active, completed, and upcoming states.
*   **Do** allow users to go back to previous steps, especially for reviewing or editing information.
*   **Do** ensure the stepper is responsive and adapts gracefully to different screen sizes, potentially collapsing to a vertical layout on smaller screens.
*   **Do** provide "Save & Continue" or "Next" buttons within the step's content area for progression, rather than relying on clicking the stepper itself.

### Don'ts

*   **Don't** use a stepper for non-linear or optional-only processes where order doesn't matter.
*   **Don't** hide the stepper; it should always be visible to maintain user orientation.
*   **Don't** use too many steps (aim for 3-7 for optimal user experience).
*   **Don't** automatically advance the user to the next step without their explicit action or consent.
*   **Don't** use ambiguous or technical jargon in step labels.

## Accessibility

*   **ARIA Attributes**:
    *   The entire stepper should be wrapped in a `<nav>` element with `aria-label="Progress"` or similar.
    *   Each step should be a list item (`<li>`) within an ordered list (`<ol>`).
    *   The current step's indicator should have `aria-current="step"`.
    *   If steps are clickable, ensure they are focusable and have appropriate `role="link"` or `role="button"` attributes.
*   **Keyboard Navigation**: Ensure all interactive elements within the stepper are reachable and operable via keyboard (`Tab`, `Shift + Tab`, `Enter`, `Space`).
*   **Screen Reader Compatibility**: Step labels and states (e.g., "Step 2: Profile Details - Current") should be clearly announced by screen readers. Custom icons should have `aria-label` or `title` attributes if they convey meaning.
*   **Color Contrast**: Ensure sufficient color contrast for all text and interactive elements to meet WCAG guidelines.
*   **Focus Management**: When navigating to a new step, programmatically move focus to the primary interactive element or the main heading of the new step's content.

## Related Components

*   **Button**: Used for primary actions like "Next", "Back", "Save", and "Submit" within each step.
*   **Form**: The Progress Stepper often wraps a series of forms or input fields across multiple steps.
*   **Wizard**: Often used interchangeably with "Progress Stepper," though "Wizard" might imply the entire multi-step process UI, whereas "Stepper" specifically refers to the navigational progress indicator.
*   **Tabs**: For horizontal navigation between distinct sections where the order is not strictly sequential or progress tracking isn't the primary goal.