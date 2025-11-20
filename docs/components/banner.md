---
title: Banner
category: Components
url: https://design.ignitionapp.com/25ddf264c/p/5461793
scraped: 2025-11-16T03:30:28.575Z
---

# Banner
Here is the comprehensive markdown documentation for the Banner component, optimized for LLM consumption:

---

## Overview

The Banner component is a prominent, non-modal message display area used to communicate important, system-level, or contextual information to users. It appears at the top of a page, within a specific section, or can be sticky to remain visible while scrolling. Banners are designed to be noticeable without completely interrupting the user's workflow, offering critical updates, warnings, success messages, or calls to action.

## Usage Guidelines

Use Banners to:
*   **System-wide announcements:** Inform users about maintenance, new features, or critical updates affecting the entire application.
*   **Success messages:** Confirm that an action was completed successfully (e.g., "Settings saved successfully!").
*   **Warning messages:** Alert users to potential issues or actions requiring caution (e.g., "Your session will expire soon.").
*   **Error messages:** Display non-blocking errors that do not prevent further interaction but require attention (e.g., "Failed to load data, please try again.").
*   **Informational messages:** Provide context or helpful tips relevant to the current view.
*   **Promotional/Discovery content:** Highlight new features or offers in a subtle way.

Do NOT use Banners for:
*   Minor, ephemeral feedback (use [Toast](#related-components) instead).
*   Blocking user interaction or requiring immediate decision-making (use [Modal](#related-components) or [Alert](#related-components) instead).
*   Displaying highly complex or extensive information.
*   Overloading the interface with multiple banners simultaneously, which can be distracting.

### Placement
Banners typically reside:
*   **Top of the page:** For system-wide messages.
*   **Within a specific section or container:** For contextual messages related to that area.

## Anatomy/Structure

A Banner typically consists of the following elements:

1.  **Container:** The main wrapper that holds all banner content, often with a distinct background color corresponding to its `type`.
2.  **Icon (Optional):** A visual cue indicating the message type (e.g., checkmark for success, exclamation for warning, 'i' for info).
3.  **Message Text:** The primary content of the banner, conveying the information. This should be concise and clear.
4.  **Call to Action (Optional):** A link or button allowing the user to take immediate action related to the banner's message.
5.  **Dismiss Button (Optional):** An 'X' icon or button allowing the user to close and remove the banner from view.

```html
<div class="banner-container banner-type-[type]">
  <span class="banner-icon" aria-hidden="true">
    <!-- SVG icon based on type -->
  </span>
  <div class="banner-content">
    <p class="banner-message">Your message goes here.</p>
    <a href="#" class="banner-action-link" role="button">Action</a>
  </div>
  <button class="banner-dismiss-button" aria-label="Dismiss banner">
    <!-- SVG for close icon -->
  </button>
</div>
```

## Variants/States

Banners come in several variants, each designed to convey a specific tone or message type through color and iconography.

### Variants

*   **Informational (`info`):** Used for general information, updates, or helpful tips.
    *   **Color:** Often blue or neutral gray background, with dark text.
    *   **Icon:** `info-circle` or similar.
*   **Success (`success`):** Used to confirm successful completion of an action.
    *   **Color:** Green background, with dark text.
    *   **Icon:** `check-circle` or similar.
*   **Warning (`warning`):** Used to alert users to potential issues, non-critical errors, or caution.
    *   **Color:** Yellow or orange background, with dark text.
    *   **Icon:** `exclamation-triangle` or similar.
*   **Error (`error`):** Used for critical but non-blocking errors, indicating a problem that needs attention.
    *   **Color:** Red background, with dark text.
    *   **Icon:** `times-circle` or similar.
*   **Neutral (`neutral`):** A subtle banner for less urgent or purely descriptive information without strong emotional connotation.
    *   **Color:** Light gray background, with dark text.
    *   **Icon:** Optional, could be `info-circle` or none.

### States

*   **Default:** The standard appearance of the banner when visible.
*   **Dismissed:** The banner is no longer visible, either closed by the user or automatically.
*   **Hover:** Applies to interactive elements within the banner (e.g., action link, dismiss button).
*   **Focus:** Applies to interactive elements within the banner when navigated to via keyboard.

### Interactions

*   **Dismissal:** Users can typically dismiss a banner by clicking a close button (if `isDismissible` is true). Banners may also be designed to auto-dismiss after a set duration for less critical messages.
*   **Action:** Clicking the optional action link/button performs the specified action or navigates to a relevant page.

### Styling

Banner styling typically includes:
*   **Background Color:** Varies by variant (`info`, `success`, `warning`, `error`, `neutral`).
*   **Text Color:** Chosen for readability and contrast against the background.
*   **Icon Color:** Often matches text color or is slightly darker/lighter.
*   **Border Radius:** Slightly rounded corners for a softer appearance.
*   **Shadow:** Optional, for elevation and emphasis.

## Properties/Options

| Property         | Type      | Description                                                    | Default                    |
| :--------------- | :-------- | :------------------------------------------------------------- | :------------------------- |
| `type`           | `string`  | Defines the visual style and semantic meaning of the banner.   | `info`                     |
| `message`        | `string`  | The main text content displayed within the banner.             | `''`                       |
| `isDismissible`  | `boolean` | If `true`, a close button is rendered, allowing user dismissal. | `false`                    |
| `onDismiss`      | `function`| Callback function invoked when the dismiss button is clicked.  | `() => {}`                 |
| `actionLabel`    | `string`  | Text for an optional call-to-action link/button.               | `''`                       |
| `onActionClick`  | `function`| Callback function invoked when the action link/button is clicked. | `() => {}`                 |
| `icon`           | `ReactNode` or `string` | Optional custom icon to override the default for the `type`. | Varies by `type` (e.g., `info-circle`) |
| `placement`      | `string`  | Determines the banner's position (`top`, `sticky-top`, `inline`). | `inline`                   |
| `autoDismiss`    | `boolean` | If `true`, the banner will automatically dismiss after `duration`. | `false`                    |
| `duration`       | `number`  | Time in milliseconds after which the banner auto-dismisses (if `autoDismiss` is `true`). | `5000` (5 seconds)         |
| `role`           | `string`  | ARIA role for accessibility (e.g., `alert`, `status`).          | `status`                   |
| `ariaLive`       | `string`  | ARIA live region attribute (`polite` or `assertive`).         | `polite`                   |

## Best Practices

### Do's
*   **Keep messages concise and clear:** Get straight to the point.
*   **Provide clear calls to action:** If an action is required, make it obvious and actionable.
*   **Use appropriate `type` for the message:** Match the urgency and sentiment with the correct visual variant.
*   **Ensure high contrast:** Text and icons must be easily readable against the background.
*   **Make critical banners persistent:** For messages that users absolutely must see, remove the dismiss button.
*   **Implement ARIA live regions:** Ensure screen readers announce dynamic banner content changes.

### Don'ts
*   **Don't overuse banners:** Too many banners can lead to cognitive overload and diminish their impact.
*   **Don't use for minor, transient feedback:** Use a Toast component for less critical, temporary messages.
*   **Don't put complex forms or extensive content in banners:** Banners are for quick, high-level information.
*   **Don't rely solely on color to convey meaning:** Always pair color with an icon and clear message for accessibility.
*   **Don't use banners to block user interaction:** If a user must stop and make a choice, a Modal is more appropriate.

## Accessibility

*   **ARIA Live Regions:** Banners should utilize `aria-live` attributes to announce dynamic content changes to screen readers.
    *   For `info` and `success` banners: `role="status"` and `aria-live="polite"` (announces changes without interrupting the user).
    *   For `warning` and `error` banners: `role="alert"` and `aria-live="assertive"` (announces changes immediately and interrupts current task).
*   **Keyboard Navigation:** All interactive elements within the banner (dismiss button, action link/button) must be focusable via keyboard (`Tab` key) and activatable (`Enter` or `Space` key).
*   **Color Contrast:** Ensure text and icons meet WCAG 2.1 AA contrast requirements against their background color.
*   **Semantic HTML:** Use appropriate semantic HTML elements (e.g., `button` for dismiss, `a` for links).
*   **Labels for Icons:** If an icon conveys meaning without text, provide an `aria-label` or `title` attribute. The banner's main message should always be readable.
*   **Focus Management:** When a banner appears, ensure focus remains within the main content area unless the banner explicitly requires interaction. If the banner is dismissible, ensure the dismiss button is accessible.

## Code Examples

### Basic Informational Banner

```jsx
import React, { useState } from 'react';
import { Banner } from '@your-design-system/components';

function MyComponent() {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) return null;

  return (
    <Banner
      type="info"
      message="Welcome back! Check out our new feature updates."
      isDismissible
      onDismiss={() => setShowBanner(false)}
      actionLabel="Learn more"
      onActionClick={() => window.location.href = '/features'}
    />
  );
}
```

### Warning Banner with Auto-Dismiss

```jsx
import React from 'react';
import { Banner } from '@your-design-system/components';

const SessionWarning = () => (
  <Banner
    type="warning"
    message="Your session will expire in 60 seconds. Please save your work."
    autoDismiss
    duration={60000} // Dismiss after 60 seconds
  />
);
```

### Error Banner (Persistent)

```jsx
import React from 'react';
import { Banner } from '@your-design-system/components';

const DataLoadError = () => (
  <Banner
    type="error"
    message="Failed to load user data. Please check your internet connection."
    // Not dismissible, as it's a persistent error until resolved
  />
);
```

## Spacing/Sizing

All measurements are based on the design system's spacing tokens.

*   **Vertical Padding:** `spacing-md` (e.g., `16px`)
*   **Horizontal Padding:** `spacing-lg` (e.g., `24px`)
*   **Minimum Height:** Content-driven, but typically has a minimum line height for single-line messages.
*   **Icon Size:** `icon-size-md` (e.g., `20px` or `24px`)
*   **Gap between Icon and Text:** `spacing-sm` (e.g., `8px`)
*   **Gap between Message and Action/Dismiss:** `spacing-md` (e.g., `16px`)
*   **Text Line Height:** `line-height-body`
*   **Max Width:** Typically 100% of its parent container, or a defined `max-width` for readability in very wide layouts.
*   **Border Radius:** `border-radius-sm` (e.g., `4px`)

## Related Components

*   [Toast](/components/toast): For small, transient, non-disruptive messages.
*   [Modal](/components/modal): For critical information or actions that block the user's interaction until addressed.
*   [Alert](/components/alert): A more permanent, within-content warning or error display, often not dismissible and part of the page layout.
*   [Notification](/components/notification): A broader term that might encompass banners, toasts, and alerts, often involving a notification center or bell icon.