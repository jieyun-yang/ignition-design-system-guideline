---
title: Intro banner
category: Components
url: https://design.ignitionapp.com/25ddf264c/p/5497127
scraped: 2025-11-16T03:31:55.256Z
---

# Intro banner
```markdown
## Overview
The Intro banner component provides essential context or announcements to users at the top of a page. It is typically used for onboarding new users or highlighting new features, guiding engagement without obstructing core content.

## Usage Guidelines
Use the Intro banner to:
*   Provide context about a page for onboarding new users.
*   Raise awareness and encourage users to engage with a new feature.

## Anatomy
The Intro banner is composed of the following key elements:
*   **Background**: The visual backdrop of the banner.
*   **Illustration**: A graphic element to visually represent the banner's message.
*   **Title**: A concise heading for the banner's message.
*   **Paragraph content**: Detailed explanatory text.
*   **Close Action bar**: An element allowing the user to dismiss the banner.

## Variants
### Subscription banner
A larger variant of the standard banner, designed to highlight subscription benefits.
*   **Key Differences**:
    *   Larger than the standard banner.
    *   Includes space for displaying 3 benefits.
    *   Replaces the tertiary button with static text "Have a question?" in `Body Medium` style.
    *   Includes "Chat with us now" as link text, which opens the Intercom chat window upon click.

## Properties
### Sizing
The Intro banner has the following sizing properties:

| Property  | Value    |
| :-------- | :------- |
| `Width`   | 25%      |
| `minWidth`| 350px    |
| `maxWidth`| 400px    |
| `maxHeight`| 140px    |

## Styling Guidelines
### Positioning
The Intro banner should be positioned according to its context:
*   Position at the top of the page, directly beneath the main page title bar.
*   If the banner's message relates specifically to content within a particular tab, position the banner beneath that relevant tab.

## Best Practices
### Do
*   Use a banner to onboard new users to a page, especially when the page already displays data (e.g., demo data).

### Don't
*   Avoid showing an Intro banner and an empty state on the same page simultaneously. If an empty state is present, consider integrating the banner's content directly into the empty state message.
*   Avoid showing an Intro banner and a contextual modal at the same time to prevent information overload.
```