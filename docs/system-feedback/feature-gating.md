---
title: Feature gating
category: System feedback
url: https://design.ignitionapp.com/25ddf264c/p/5184521
scraped: 2025-11-16T03:45:00.745Z
---

# Feature gating
Here's the well-structured documentation for "Feature gating":

## Overview

Feature gating is used to indicate that certain UI components or features are locked and require an upgrade or specific plan to access. When a user interacts with a "locked" UI component, a benefits modal appears, providing information on how to unlock the feature.

## Anatomy

Feature gating involves a combination of a lock icon, an optional tooltip, and a benefits modal.

### Locked UI Element
A UI element is marked as locked, typically with a lock icon, and provides a tooltip on hover.

### Benefits Modal
The benefits modal presents upgrade options and feature details, with variations based on user roles.

#### Admin Users
For Admin users, the modal includes:
*   **Hero image:** A visual representation.
*   **Heading:** Main title for the modal.
*   **Body copy:** Explanatory text.
*   **Plan inclusions:** A list of features available with an upgrade.
*   **Action buttons:** Options to upgrade or dismiss.

#### Member Users
For Member users, the modal includes:
*   **Hero image:** A visual representation.
*   **Heading:** Main title for the modal.
*   **Body copy:** Explanatory text.
*   **Plan inclusions:** A list of features available with an upgrade.
*   **Alert:** An additional message, typically directing them to an administrator.
*   **Action buttons:** Options to upgrade (primary action disabled) or dismiss.

## Usage Guidelines

The lock indicator and its associated styling vary depending on the UI component it is applied to.

| UI Component | Position                 | Spacing | Color             | Size  |
| :----------- | :----------------------- | :------ | :---------------- | :---- |
| Menu item    | Right                    | 4px     | Text colour       | -     |
| Button       | Right                    | 4px     | Text colour       | -     |
| Tab          | Right                    | 4px     | Text colour       | -     |
| Toggle       | Right of toggle          | 8px     | Gray 500          | 24px  |
| Tile         | Bottom-right of tile     | -       | Gray 700          | 24px  |

## Variants

### Premium Alert
The premium alert is a specialized variation of feature gating, typically used in demo or preview contexts.

| Scenario                                   | Description                                                                                             |
| :----------------------------------------- | :------------------------------------------------------------------------------------------------------ |
| **Demo Dashboard**                         | An alert appears on a demo dashboard, indicating the user is viewing demo data and needs to upgrade to see their real data. |
| **Feature Preview**                        | An alert appears above a feature preview, indicating the user needs to upgrade to get the feature.      |

## Content Guidelines

Consistent and clear messaging is crucial for effective feature gating.

| UI Component     | Copy Guidelines                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tooltip**      | **Copy:** `Upgrade plan to unlock`                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Premium Alert**| **Copy:** `Upgrade your plan to {do this}`<br>`"{do this}"` briefly describes the feature.<br>`"Upgrade your plan"` links to the plan page.<br>*You can add more copy if you need more context to avoid stacking alerts.*                                                                                                                                                                                                                                                             |
| **Modal**        | **Heading:** `Upgrade your plan to unlock more value`<br>**Description:** `This feature is only available on a higher tier plan. {Description of gated feature - 2 lines max}.`<br>**Bullet list:** `Upgrade and get more features like:`<br>*List populated from plan inclusions below*<br>**Primary button:** `Upgrade`<br>**Secondary button:** `Skip for now`                                                                                                                              |
| **Info Alert**   | **Copy:** `Speak to your admin to upgrade your plan.`                                                                                                                                                                                                                                                                                                                                                                                                                                           |

### Modal Content: Plan Inclusions
The following features can be listed in the modal's bulleted list to highlight the value of upgrading.

| Icon Name              | Description                                                                   |
| :--------------------- | :---------------------------------------------------------------------------- |
| `paper-plane`          | Branded emails that look professional and build trust                         |
| `timer`                | Bulk proposal renewals that save you time.                                    |
| `wand-magic-sparkles`  | Integration with practice management systems so you can automate workflows.     |
| `signature`            | Multiple e-signatures making it easy to stay compliant.                       |
| `video`                | Videos in proposals for a personalized touch.                                 |
| `envelope`             | Multiple email templates making client emails effortless.                     |
| `users`                | Up to 500 active clients with a signed engagement.                            |
| `signature`            | Up to 10 E-signatures making it easy to stay compliant.                       |
| `clipboard-check`      | Proposal reviews and approvals so you can send proposals with confidence.     |
| `users`                | Unlimited active clients with a signed engagement.                            |
| `user-plus`            | Unlimited users so there’s room for the whole team.                           |
| `business-time`        | Faster response time when you contact our customer team from your account.    |

## Best Practices

*   **Be Concise:** Keep descriptions of gated features brief (max 2 lines in the modal).
*   **Provide Clear Call to Action:** Ensure primary action buttons are clear and guide the user to upgrade where appropriate.
*   **Contextual Messaging:** Use additional copy for alerts only when necessary to provide more context and avoid stacking multiple alerts.
*   **Differentiate User Experiences:** Tailor the modal experience for different user roles (e.g., disable primary action for member users and provide an info alert).
*   **Link to Relevant Pages:** Ensure "Upgrade your plan" links direct users to the appropriate plan page.

## Accessibility

Accessibility considerations were not explicitly detailed in the provided content. Ensure that locked components, tooltips, and modals are accessible to users with disabilities, including screen reader support, keyboard navigation, and appropriate ARIA attributes.