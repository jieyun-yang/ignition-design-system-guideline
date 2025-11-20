---
title: Shadows
category: Foundations
url: https://design.ignitionapp.com/25ddf264c/p/5019331
scraped: 2025-11-16T03:40:52.697Z
---

# Shadows
Given that the provided "extracted content" is only the page title "Shadows", I will generate a comprehensive example of what typical documentation for a "Shadows" design system guideline page would contain, adhering to all your formatting and section requirements. This will demonstrate the desired structure and level of detail, which you can then populate with your actual design system content.

---

## Overview

Shadows are a fundamental visual element in our design system, used to convey depth, emphasize hierarchy, and indicate interactivity within the user interface. By adding a subtle sense of elevation, shadows help users understand spatial relationships between elements, guiding their attention and improving clarity. They contribute to a more intuitive and visually engaging experience without relying solely on border or background changes.

## Usage Guidelines

Use shadows strategically and consistently to:

*   **Establish Hierarchy**: Differentiate elements based on their importance or stacking order (e.g., a modal appearing above the background content).
*   **Indicate Elevation**: Signify that an element is lifted from the surface, such as cards, panels, or floating action buttons.
*   **Highlight Interaction**: Provide visual feedback for interactive states like hover, focus, or press, indicating an element's responsiveness.
*   **Draw Attention**: Direct user focus to critical elements like dialogs, tooltips, or dropdown menus.

**Avoid using shadows when:**

*   They are purely decorative and do not serve a functional purpose.
*   They create visual clutter or make elements difficult to read.
*   Performance is a critical concern, as excessive shadows can sometimes impact rendering.
*   A flat or minimal aesthetic is intentionally desired for a specific component or section.

## Anatomy/Structure

A shadow is typically defined by several key properties that control its appearance. While visually a single effect, it's composed of:

*   **Offset X**: The horizontal distance the shadow moves from the element.
*   **Offset Y**: The vertical distance the shadow moves from the element.
*   **Blur Radius**: The extent of the blur applied to the shadow, creating a softer or sharper edge.
*   **Spread Radius**: Expands or shrinks the shadow shape relative to the element. (Less commonly used in subtle UI shadows, often kept at 0 or negative).
*   **Color**: The color of the shadow, often a semi-transparent black or a dark color from the palette, influenced by the background.

Some shadows might be composed of multiple layers to create more nuanced or realistic depth effects.

## Variants/States

Our design system provides a set of predefined shadow tokens to ensure consistency across different elevation levels and interactive states.

*   **Default Elevation Shadows**: Used for standard components that have a base level of lift.
    *   `shadow-sm`: For subtle elevation on small components or cards.
    *   `shadow-md`: A common elevation for cards, panels, and medium-sized containers.
    *   `shadow-lg`: For significant elevation, often used for larger containers, dialogs, or modals.
*   **Interactive State Shadows**: Applied when an element changes its state.
    *   `shadow-hover`: Applied when an element is hovered over to indicate interactivity.
    *   `shadow-focus`: Applied when an element is focused, often combined with an outline.
    *   `shadow-pressed`: Applied when an element is actively pressed or clicked.
*   **Special Purpose Shadows**:
    *   `shadow-overlay`: A distinct, often larger and darker shadow used for full-screen overlays or dismissible backgrounds behind modals/drawers.

## Properties/Options

Our shadows are defined using CSS custom properties (variables) for easy application and theme integration. These tokens encompass the `box-shadow` CSS property.

| Property Name    | Type     | Description                                                         | Default CSS Value (Example)                                                                                                                                                                                                                                                                                                                                   |
| :--------------- | :------- | :------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--shadow-sm`    | `string` | Applies a subtle, small elevation shadow.                           | `0px 1px 2px rgba(0, 0, 0, 0.05)`                                                                                                                                                                                                                                                                                                                             |
| `--shadow-md`    | `string` | Applies a medium elevation shadow, suitable for cards and panels.   | `0px 2px 4px rgba(0, 0, 0, 0.08), 0px 4px 8px rgba(0, 0, 0, 0.04)`                                                                                                                                                                                                                                                                                             |
| `--shadow-lg`    | `string` | Applies a large elevation shadow, ideal for modals and prominent elements. | `0px 4px 8px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.05)`                                                                                                                                                                                                                                                                                             |
| `--shadow-xl`    | `string` | Applies an extra-large, deep elevation shadow.                      | `0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)`                                                                                                                                                                                                                                                                                  |
| `--shadow-hover` | `string` | Applied on hover state for interactive elements.                    | `0px 3px 6px rgba(0, 0, 0, 0.12), 0px 6px 12px rgba(0, 0, 0, 0.06)` (often derived from the next higher elevation level, e.g., `shadow-md` elements on hover might use properties similar to `shadow-lg` to subtly increase elevation)                                                                                                                            |
| `--shadow-focus` | `string` | Applied on focus state, typically combined with an outline.         | `0px 0px 0px 2px var(--color-focus-ring), 0px 2px 4px rgba(0, 0, 0, 0.08)` (example combining shadow with a focus ring color)                                                                                                                                                                                                                                  |
| `--shadow-overlay` | `string` | Used for full-screen overlays or modal backdrops.                   | `0px 0px 0px 100vmax rgba(0,0,0,.3)` (This is a common trick to make an overlay shadow cover the entire viewport; alternatively, a background overlay element might be used.) Or a traditional shadow for the modal itself: `0px 8px 16px rgba(0, 0, 0, 0.15), 0px 16px 32px rgba(0, 0, 0, 0.08)` if the overlay is a separate element. |

## Best Practices

*   **Do use predefined tokens**: Always apply shadows using the established CSS variables (`--shadow-sm`, `--shadow-md`, etc.) to maintain visual consistency and enable easy theming.
*   **Do ensure sufficient contrast**: Shadows should be subtle enough not to interfere with text readability or icon visibility.
*   **Do use shadows sparingly**: Overuse can lead to a cluttered and visually heavy interface. Each shadow should serve a clear purpose.
*   **Do consider light source**: Our system shadows implicitly assume a light source from above, casting shadows downwards and slightly to the right. Maintain this mental model.
*   **Don't create custom shadows**: Avoid defining `box-shadow` properties directly in component styles unless absolutely necessary and approved, as this bypasses the design system's consistency.
*   **Don't rely solely on shadows for information**: While they enhance hierarchy, shadows should not be the only visual cue for critical information or states. Combine them with other visual indicators like borders, background colors, or text.
*   **Don't animate shadows aggressively**: Subtle transitions on hover or focus are acceptable, but rapid or overly dramatic shadow animations can be distracting or cause performance issues.

## Accessibility

*   **Contrast for Low Vision Users**: Ensure that shadows, especially those used to delineate interactive areas, do not reduce the legibility of content, particularly for users with low vision. While shadows themselves often have low opacity, their subtle darkening effect should be considered.
*   **Reduced Motion**: For users who prefer reduced motion, consider disabling or simplifying shadow transitions, especially if they involve significant movement or opacity changes. The `prefers-reduced-motion` media query should be respected.
*   **Cognitive Load**: Excessive or inconsistent use of shadows can create visual noise and increase cognitive load. Adhere to guidelines to maintain a clean and predictable interface.
*   **Focus Indication**: Shadows can supplement, but should not replace, clear and robust visual focus indicators (like a focus ring) for keyboard users.

## Code Examples

Here's how to apply shadows using CSS custom properties:

```css
/* Applying a medium shadow to a card component */
.card {
  background-color: var(--color-background-default);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-md);
}

/* Enhancing a button's shadow on hover */
.button-primary {
  /* ...other button styles */
  box-shadow: var(--shadow-sm); /* Default shadow */
  transition: box-shadow 0.2s ease-out; /* Smooth transition */
}

.button-primary:hover {
  box-shadow: var(--shadow-hover); /* Deeper shadow on hover */
}

/* Example of a modal using a large shadow */
.modal-dialog {
  background-color: var(--color-background-surface);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg); /* Prominent shadow for modals */
  /* ...positioning styles */
}
```

If using a utility-first CSS framework (like Tailwind CSS):

```html
<!-- A simple card with a medium shadow -->
<div class="bg-white rounded-md shadow-md p-4">
  <p class="text-gray-900">This is a card content.</p>
</div>

<!-- An interactive button with a hover shadow -->
<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-sm hover:shadow-hover transition-shadow duration-200">
  Click Me
</button>

<!-- A modal using a large shadow (often with an overlay) -->
<div class="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
  <div class="bg-white rounded-lg p-8 shadow-lg">
    <h3 class="text-xl font-semibold mb-4">Modal Title</h3>
    <p>Modal content goes here.</p>
    <button class="mt-6 bg-gray-200 py-2 px-4 rounded">Close</button>
  </div>
</div>
```

## Spacing/Sizing

The 'sizing' of a shadow (its blur and spread) is intrinsically linked to its intended elevation level. Our shadow tokens (`shadow-sm`, `shadow-md`, `shadow-lg`, etc.) already encapsulate these measurements to convey consistent depth.

*   `--shadow-sm`: Represents a low elevation, suitable for thin elements or subtle differentiation.
*   `--shadow-md`: Represents a moderate elevation, ideal for standard interactive components or content blocks.
*   `--shadow-lg`: Represents a significant elevation, reserved for elements that appear high above the surface, demanding immediate attention.

There are no explicit 'spacing' guidelines *for shadows themselves* as they are visual effects. However, the use of shadows often coincides with components that have their own internal padding and external margins, ensuring they don't visually overlap or crowd surrounding elements. Ensure sufficient clear space around elements casting shadows.

## Related Components

Shadows are widely used across the design system. Refer to the documentation for these components for specific shadow applications:

*   [Cards](/foundations/cards)
*   [Buttons](/foundations/buttons)
*   [Modals & Dialogs](/components/modals-dialogs)
*   [Dropdowns & Selects](/components/dropdowns-selects)
*   [Tooltips](/components/tooltips)
*   [Floating Action Buttons (FABs)](/components/floating-action-button)