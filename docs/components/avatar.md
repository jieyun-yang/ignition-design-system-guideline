---
title: Avatar
category: Components
url: https://design.ignitionapp.com/25ddf264c/p/2978022
scraped: 2025-11-16T03:34:18.271Z
---

# Avatar
This document outlines the guidelines for using the Avatar component within the design system.

## Overview
The Avatar component provides a visual representation for users or entities. It can display a user's profile picture or, as a fallback, show their initials. It is often accompanied by text such as a name and secondary information like an email or company name.

## Anatomy
The Avatar component is composed of the following primary elements:

| Element               | Description                                                                                                                                                              |
| :-------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Visual Representation** | Displays either a user's profile picture or a fallback with their initials. Initials are derived from the user's name: 2 initials are used if both first and last names are available; 1 initial is used if only one name is available. |
| **Name**              | The personal name or business name associated with the avatar.                                                                                                           |
| **Secondary Information** | Optional supplementary details such as an email address or company name.                                                                                                 |

## Usage Guidelines
Avatars are used to represent users across various parts of the product interface.

*   Use small avatars primarily in lists to effectively represent individual users.

## Best Practices

### Do
*   Use small avatars in lists to represent users.

### Don't
*   Do not place the avatar to the right of the associated name and email.
*   Do not use random colors for the avatar background when displaying initials. The consistent teal color has been chosen as part of the product's visual brand language.

## Behaviour

### Interactions
The Avatar component supports the following interactive behavior:

| Interaction | Description                                            |
| :---------- | :----------------------------------------------------- |
| **Click**   | Clicking on a user profile avatar (e.g., in a global header) typically opens a user-specific menu or profile details. |

## Properties

### Sizes
The design system supports specific sizes for the Avatar component.

| Property | Value          | Description                                                                                                                                                                                             |
| :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Size** | Small, Medium | These are the standard and only sizes we typically use within our product. While the underlying Chakra UI library provides access to 7 different sizes, 'Small' and 'Medium' are the approved options for our product. |

*Note*: If there is a specific requirement for sizes larger than 'Medium', please refer to the Chakra UI documentation for available options and considerations.

### Styling
The background color for avatar fallbacks (when initials are displayed) is a consistent teal. This color is a deliberate choice reflecting the product's visual brand language and should not be altered or randomized.

## Variants
The Avatar component supports the following visual variants based on content availability:

*   **Avatar with Profile Picture**: Displays a user's uploaded image.
*   **Avatar with Initials Fallback**: Displays dynamically generated initials when a profile picture is unavailable. This variant adheres to the following logic:
    *   Two initials are used if both the first and last name are provided.
    *   One initial is used if only a single name is provided.

## Accessibility
No specific accessibility considerations for the Avatar component were mentioned in the provided content.

## Spacing/Sizing
As detailed in the "Properties > Sizes" section, the component is standardized for 'Small' and 'Medium' usage. Specific pixel dimensions, padding, or margin values beyond these general size labels are not explicitly defined in the provided guidelines.

## Related Components
This component is built using the **Chakra UI** library. For details on additional sizes or advanced configurations beyond the scope of these guidelines, consult the official [Chakra UI Avatar documentation](https://chakra-ui.com/docs/components/avatar) (example link, please replace with actual documentation link if available).