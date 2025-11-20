---
title: Global banner
category: Components
url: https://design.ignitionapp.com/25ddf264c/p/4580453
scraped: 2025-11-16T03:31:28.619Z
---

# Global banner
## Overview

The global banner is a component designed to communicate critical or important messages that are relevant across multiple pages of an application. It provides feedback on actions, conveys important information, warns users, or notifies them of errors.

**Important Note:** These guidelines describe how the global banner *should* function. Currently, the component may appear at the bottom of the page, globally blocking UI elements. **Avoid using this component until engineering work has been completed to ensure it functions without blocking interactive UI.**

## Usage Guidelines

Global banners are used for two primary types of messaging:

| Category             | Description                                                                                                                                                                  |
| :------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Critical messaging** | Use for issues that must be resolved ASAP. For example, billing and subscription issues where, if not resolved, the user will not be able to use the app.                      |
| **Non-critical messaging** | Important messaging that's relevant across multiple pages of the app. For example, when viewing a preview of a proposal.                                                   |

### Positioning
Place the global banner in a location where it will not cover interactive UI elements. Refer to Best Practices for more details.

## Anatomy/Structure

A global banner consists of the following elements:

*   **Icon and background color**: Visually indicates the global banner type (e.g., success, error) and comes in default styles.
*   **Body**: Describes the situation or problem and any action the user needs to take.
*   **Button**: *Optional*. Allows the user to perform an action or navigate to a specific location within the app.
*   **Close button**: *Optional*. It is recommended to display the global banner *without* a close button if the message requires persistent attention.

## Variants/States

Global banners come in different variants to convey specific types of messages:

| Variant   | Description                                                           |
| :-------- | :-------------------------------------------------------------------- |
| **Success** | Provides feedback that an action was completed successfully.          |
| **Info**    | Provides important information or helpful tips for the situation.     |
| **Warning** | Warns users of information that may affect their experience.          |
| **Error**   | Notifies users of critical information that will affect their experience. |

### Examples

| Scenario           | Variant      | Description                                                 |
| :----------------- | :----------- | :---------------------------------------------------------- |
| **Coupon applied** | Success state | Appears when a coupon has been successfully applied.        |
| **Invalid coupon** | Error state   | Appears when the coupon code is invalid or no longer active. |

## Properties/Options

### Interaction Properties

| Property | Description                                                                         |
| :------- | :---------------------------------------------------------------------------------- |
| **Close**  | The banner disappears when the problem it addresses is resolved. If the global alert is situational and persistent, it may remain visible indefinitely. |

## Best Practices

### Do's
*   If the global banner blocks interactive elements when positioned at the top of the page, position it at the bottom of the page.

### Don'ts
*   Do not block interactive UI elements with the global banner.
*   Avoid using the component until engineering work ensures it functions without blocking UI (as noted in the Overview).

## Accessibility

No specific accessibility considerations were mentioned in the provided content.

## Code Examples

No code snippets were provided in the extracted content.

## Spacing/Sizing

| Property      | Value                                     |
| :------------ | :---------------------------------------- |
| **Sizing**    | Global banners occupy the entire width of the page. |
| **Positioning** | Global banners display on the top of the page and are fixed when scrolling. |

## Related Components

No related components or guidelines were mentioned in the provided content.