---
title: Intercom
category: Components
url: https://design.ignitionapp.com/25ddf264c/p/2979790
scraped: 2025-11-16T03:33:44.840Z
---

# Intercom
## Overview

The Intercom component guideline outlines various in-app messaging types used for user education, announcements, and calls to action. It encompasses several distinct message formats, each serving specific communication goals:

*   **Product tour**: An interactive series of popovers designed to provide guided assistance and in-context education on key functionality within the application.
*   **Tooltip**: A non-disruptive, pulsating beacon that reveals a tooltip on click, typically used for minor UI changes or contextual announcements.
*   **Post**: A message or announcement from a particular sender, available in small and large variants, suitable for feature releases or urgent communications.
*   **Banner**: A floating rectangular box containing a message, used for driving small actions or providing informational alerts.

## Usage Guidelines

Intercom components are utilized across different GTM (Go-To-Market) categories to provide targeted in-app communication.

| Component       | GTM Category            | Usage                                                                                                                                                                                                                                                                                                                                |
| :-------------- | :---------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tooltip**     | Bronze                  | Use tooltips to provide non-disruptive education or make a contextual announcement about a minor UI change.                                                                                                                                                                                                                            |
| **Product Tour** | Bronze, Silver, Gold, Platinum | Use product tours to provide in-context education on key functionality in the app. Use product tours to call attention to minor functional changes in the app, where a tooltip is insufficient.                                                                                                                                       |
| **Banner**      |                         | Use banners to drive small actions or FYIs such as:                                                                                                                                                                                                                                                                                  |
|                 |                         | - Referral offers                                                                                                                                                                                                                                                                                                                    |
|                 |                         | - Book demo for trial users                                                                                                                                                                                                                                                                                                          |
|                 |                         | - Buy now for trial users                                                                                                                                                                                                                                                                                                            |
|                 |                         | - Webinar or workshop registration                                                                                                                                                                                                                                                                                                   |
| **Small Post**  | Silver, Gold            | Use small posts for less timely announcements or feature releases where proactive communication is required, but no immediate action is necessary.                                                                                                                                                                                      |
| **Large Post**  | Gold, Platinum          | Use large posts for major feature releases or urgent communications (e.g., incident responses).                                                                                                                                                                                                                                        |

## Anatomy/Structure

### Product Tour

*   Heading
*   Description
*   Dismiss tour button (optional)
*   Step counter
*   CTA (optional)
*   Close button

### Tooltip

*   Tooltip
*   Pulsating beacon

### Post (Small variant shown)

*   Sender profile
*   Image (optional)
*   H2 Subtitle (optional)
*   H1 Heading
*   Description
*   CTA (optional)
*   Open Intercom widget

### Banner

*   Body text
*   CTA
*   Close

## Variants/States

*   **Post**: Available in `Small` and `Large` variants.
*   **Tooltip**: Can be in an `engaged` state (after interaction).

## Properties/Options

### Product Tour Settings

| Property                | Value/Options                                                              | Notes                                                                                                                                   |
| :---------------------- | :------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| **Intercom Settings**   |                                                                            |                                                                                                                                         |
| Sender                  | Don't show the sender                                                      |                                                                                                                                         |
| Use custom color        | Off                                                                        |                                                                                                                                         |
| **General Settings**    |                                                                            |                                                                                                                                         |
| Snooze tour             | On                                                                         |                                                                                                                                         |
| Restart tour            | Off                                                                        |                                                                                                                                         |
| Celebrate completion    | Up to you                                                                  |                                                                                                                                         |
| Custom button text      | Off                                                                        |                                                                                                                                         |
| **Tour Advancement**    | Next or Done button, Click on the element, Fill in the field               | The method for advancing the tour is determined by the designer.                                                                        |
| Use custom button text  | Off                                                                        |                                                                                                                                         |
| **Advanced Settings**   | Leave default                                                              |                                                                                                                                         |
| **Scheduling**          |                                                                            |                                                                                                                                         |
| For new users           | Evergreen (never stop sending)                                             |                                                                                                                                         |
| For existing users      | Ensure an appropriate end date                                             |                                                                                                                                         |

### Tooltip Settings

| Property                  | Value/Options                                 | Notes                                                               |
| :------------------------ | :-------------------------------------------- | :------------------------------------------------------------------ |
| **Group Settings**        |                                               |                                                                     |
| Frequency                 | Show until engaged with                       |                                                                     |
| **Style - Tooltip**       |                                               |                                                                     |
| Icon                      | Beacon                                        |                                                                     |
| Colour                    | `#e64d10`                                     | Specific hex code for the beacon.                                   |
| Animated beacon           | Off                                           |                                                                     |
| Show content on           | Hover                                         |                                                                     |
| Pointer position          | Auto                                          |                                                                     |
| **Style - Group (text box)** |                                               |                                                                     |
| Background colour         | `#403e3d`                                     | Specific hex code for the tooltip background.                       |
| Text colour               | `#faf7fa`                                     | Specific hex code for the tooltip text.                             |
| Button/button text colours | Ignore                                        | These settings are not utilized.                                    |
| **Layout**                | Leave default                                 |                                                                     |
| **Scheduling**            | Stop sending 1-2 months after the tooltip has been sent |                                                                     |

### Banner Settings

| Property                | Value/Options                                 | Notes                          |
| :---------------------- | :-------------------------------------------- | :----------------------------- |
| **Intercom Settings**   |                                               |                                |
| Sender                  | Show sender                                   |                                |
| Show dismiss button     | On                                            |                                |
| **Style**               |                                               |                                |
| Placement               | Floating                                      |                                |
| Position                | Bottom                                        |                                |
| Colour                  | `#15514d`                                     | Specific hex code for banner.  |
| **Scheduling**          | Stop sending 1-2 months after launch          |                                |

### Post Settings

| Property                  | Value/Options          | Notes                                  |
| :------------------------ | :--------------------- | :------------------------------------- |
| **Intercom Settings**     |                        |                                        |
| Sender                    | You (or your PM)       |                                        |
| Assign replies to         | You (or your PM)       |                                        |
| Format                    | Small or Large         |                                        |
| Reply type                | None or reaction       |                                        |
| Sent as                   | Snippet                |                                        |
| Show first on             | Web                    |                                        |
| **Style**                 |                        |                                        |
| Subheader                 | H2                     |                                        |
| Main header               | H1                     |                                        |
| **Scheduling**            | Stop sending 1-2 months after launch |                                        |

## Best Practices

### Do

*   Encourage users to interact with the app.

### Caution

*   For optional engagement, keep product tours to less than 5 steps.

## Accessibility

No specific accessibility considerations are mentioned in the provided documentation.

## Code Examples

For precise placement of Product Tours and Tooltips, it is recommended to work with developers to create specific HTML attributes for targeting:

```html
<div data-intercom-target="your-element-name">...</div>
```

This `data-intercom-target` element can then be used in Intercom settings for `Placement` (e.g., "CSS for the element you're pointing to" or "By CSS selector").

## Spacing/Sizing

*   **Product Tour Length**: Keep tours to less than 5 steps for optional engagement.
*   **Scheduling Duration**: Most Intercom messages (Tooltips, Banners, Posts) are recommended to stop sending 1-2 months after launch or initial send. Product tours for new users can be evergreen.

## Related Components

No explicit related components or guidelines are mentioned in the provided documentation.