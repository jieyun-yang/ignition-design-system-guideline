---
title: Typography
category: Foundations
url: https://design.ignitionapp.com/25ddf264c/p/2945250
scraped: 2025-11-16T03:39:46.194Z
---

# Typography
### Overview
This document outlines the typographic system for the design system, defining the core font stack, a hierarchical set of heading styles, and their appropriate usage across various components and platforms. It aims to ensure visual consistency, readability, and a clear information hierarchy throughout the user interface.

### Usage Guidelines
This section details the recommended application for each defined typographic style, ensuring appropriate use based on context and prominence.

#### Heading Usage Guidelines
*   **Display1**: Exclusively used for prominent, top-level headers in guided wizards.
*   **Display2**: Appropriate for guided wizard headers and new page titles.
*   **H1**: Reserved for main page headers and top-level client portal document headers (e.g., Pricing, Service).
*   **H2**: Ideal for significant page section headers, empty state headers, drawer headers, and modal headers.
*   **H3**: Utilized for NPE (New Page Experience) titles, section headers within NPE (e.g., Term, Proposal presentation), dashboard data, card headers, and large accordion titles.
*   **H4**: Applied to smaller interactive elements such as small accordion headers, rich button titles, and alert titles.
*   **H5**: Used for small informational text like table headers and captions.

### Anatomy/Structure
The typography system is built upon a foundational font stack designed for broad compatibility and clarity, which then branches into a structured hierarchy of heading styles.

#### Font Stack
The design system utilizes a platform-optimized font stack to provide a consistent and legible typographic experience across different operating systems.

##### OS-Specific Font Families
| OS      | Font family    |
| :------ | :------------- |
| Windows | Helvetica Neue |
| Mac OS  | SF Pro Text    |

##### CSS Font Stack Declaration
```css
font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica-, Arial, sans-serif
```

#### Heading Hierarchy
A defined set of heading styles ensures a clear visual hierarchy, guiding users through content effectively. Each heading serves a specific purpose in structuring information.

### Variants/States
The following heading variants are defined, each with distinct properties and recommended use cases.

#### Display1
A large, prominent display style for key introductory content.

| Property      | Value                 |
| :------------ | :-------------------- |
| Family        | SF Pro Text (600)     |
| Size          | 48px                  |
| Line height   | 110%                  |
| Letter spacing| -1px                  |

*Example:* The wizard quickly jinxed the gnomes before they vaporized

#### Display2
A substantial display style, suitable for important headers and titles.

| Property      | Value                 |
| :------------ | :-------------------- |
| Family        | SF Pro Text (600)     |
| Size          | 32px                  |
| Line height   | 110%                  |
| Letter spacing| -1px                  |

*Example:* Heavy boxes perform quick waltzes and jigs

#### H1
The primary heading for main page and document titles.

| Property      | Value                 |
| :------------ | :-------------------- |
| Family        | SF Pro Text (500)     |
| Size          | 24px                  |
| Line height   | 150%                  |
| Letter spacing| 0px                   |

*Example:* Show mangled quartz flip vibe exactly

#### H2
Used for significant section headers within pages.

| Property      | Value                 |
| :------------ | :-------------------- |
| Family        | SF Pro Text (500)     |
| Size          | 20px                  |
| Line height   | 150%                  |
| Letter spacing| 0px                   |

*Example:* The wizard quickly jinxed the gnomes before they vaporized

#### H3
A versatile heading for sub-sections and data presentation.

| Property      | Value                 |
| :------------ | :-------------------- |
| Family        | SF Pro Text (500)     |
| Size          | 18px                  |
| Line height   | 150%                  |
| Letter spacing| 0px                   |

*Example:* Pack my red box with five dozen quality jugs

#### H4
Suitable for smaller interactive components and alerts.

| Property      | Value                 |
| :------------ | :-------------------- |
| Family        | SF Pro Text (500)     |
| Size          | 16px                  |
| Line height   | 150%                  |
| Letter spacing| 0px                   |

*Example:* The wizard quickly jinxed the gnomes before they vaporized

#### H5
The smallest heading, typically for captions and table headers.

| Property      | Value                 |
| :------------ | :-------------------- |
| Family        | SF Pro Text (500)     |
| Size          | 12px                  |
| Line height   | 150%                  |
| Letter spacing| 0px                   |

*Example:* Pack my red box with five dozen quality jugs

#### Body Text
The standard body text style is used for general content and paragraphs. Specific properties for body text are not detailed in this document.

### Properties/Options
Detailed properties including font family, weight, size, line height, and letter spacing for each heading variant are specified within the "Variants/States" section above.

### Best Practices
*   Maintain a clear visual hierarchy by consistently applying the defined heading levels.
*   Avoid skipping heading levels (e.g., going directly from an H1 to an H3) to preserve logical document structure.
*   Use display headings (`Display1`, `Display2`) sparingly for maximum impact in key areas.
*   Ensure that the choice of heading aligns with the semantic importance and content type, as described in the "Usage Guidelines."

### Accessibility
No explicit accessibility considerations or specific guidelines (e.g., minimum font sizes for readability, contrast ratios, etc.) are mentioned in the provided content for typography.

### Code Examples
A code example for the CSS `font-family` declaration is provided under the "CSS Font Stack Declaration" subsection within "Anatomy/Structure".

### Spacing/Sizing
All specific measurements related to typography, including font `Size`, `Line height`, and `Letter spacing`, are detailed within the "Variants/States" section for each respective heading type.

### Related Components
No explicit links or mentions to related components or guidelines (e.g., text inputs, buttons, etc.) are included in the provided content.