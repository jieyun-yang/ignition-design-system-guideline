---
title: Text input
category: Components
url: https://design.ignitionapp.com/25ddf264c/p/2978057
scraped: 2025-11-16T03:37:14.056Z
---

# Text input
```markdown
## Overview

The Text Input component is a fundamental UI element designed for users to enter single-line text data. It is a versatile component that adapts to various contexts within forms, supporting features like labels, optional captions, validation, and character limits. This guideline outlines its anatomy, usage, behavior, styling, and best practices to ensure a consistent and user-friendly experience across the system.

## Anatomy/Structure

The Text Input component is comprised of several elements, some mandatory and some optional, to guide user interaction and provide necessary feedback.

| Figure | Element                 | Optional?       | Description                                                                                                                                                                                                                                  |
| :----- | :---------------------- | :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1      | Label                   | No              | Text that informs the user about the content they need to enter in the field. All fields require a Label.                                                                                                                                      |
| 2      | Required (*)            | Yes             | A red asterisk (*) next to the label informs the user when this is a required field.                                                                                                                                                           |
| 3      | Caption                 | Yes             | Assistive text that can provide additional aid or context to the user. A caption cannot be present without a Label.                                                                                                                            |
| 4      | Border                  | No              | The color of the border changes depending on the input's state (e.g., default, hover, focus, error, disabled).                                                                                                                               |
| 5      | Left icon               | Yes             | Can be used to help with scan-ability and provide a visual cue as to what data is required (e.g., currency symbol for price input).                                                                                                              |
| 6      | Input or Placeholder text | No              | The content that the user has entered into the field. Where there is no user input or pre-populated data, placeholder text should be shown instead.                                                                                         |
| 7      | Right icon              | Yes             | An icon placed on the far right side of the input is usually interactive (e.g., an 'i' icon for more information, a calendar icon to indicate a date-picker, or an 'X' icon to clear the input in a search field).                          |
| 8      | Input indicator         | No              | A visual cue to let the user know where the last character they have entered is.                                                                                                                                                               |
| 9      | Count                   | Yes             | Alternatively, a number or count can be shown (e.g., 60) to indicate how many characters are remaining in a limit placed on the field.                                                                                                         |
| 10     | Error message           | On validation   | Text that appears when the user's input isn't accepted, or when required input isn't detected when the user tries to progress. Error messages appear below the input container, until the issue is resolved.                                |

## Usage Guidelines

### General Usage in Forms

*   **Labels**: All text inputs must have a Label.
*   **Captions**: Captions are optional and used to provide additional context when needed.
*   **Required Fields**: An asterisk (*) icon next to the label indicates mandatory fields.
*   **Character Limit/Count**: Where a character limit exists, show the remaining number of characters within the input as the user types.

### Icon Usage

*   **Leading Icon**: Primarily used to communicate price-only inputs.
*   **Trailing Icon**: Used when the icon/field is interactive:
    *   `X` (`isClearable`) = clears the input.
    *   Calendar icon = triggers a date picker.

### Inline Error Validation

*   When an error occurs, move inputs down to accommodate the error message.
*   Change the text input to red when that field has an error.
*   Keep the field border red, even when focused, if there is an error.

### Call-to-Action (CTA) Button States

*   Keep CTA buttons enabled when the user cannot progress or there is an error, as long as they can resolve the issue themselves within the UI. This allows them to click the CTA to identify the issue and how to resolve it.

## Best Practices

### Placeholder Text

*   **Do**: Show placeholder text with a lighter text color when the input is empty (no user-filled or pre-populated data).
*   **Don't**: Have placeholder text which is the same color as the input text; users will have trouble identifying incomplete fields.

### Labels and Captions

*   **Do**: The label should always be visible unless the input is used in specific variants (e.g., Search component, which has no label).
*   **Don't**: Show an input with only a Caption and no Label.
*   **Don't**: Use a dark colored text for captions, as it distracts from the Label and input field.

### Input Sizing and Width

*   **Do**: Use appropriate-sized text fields depending on the situation:
    *   **Text Input** for single-line entries.
    *   **Text Area** for longer, multi-line entries.
*   **Don't**: Use the Text Input component for longer entries, e.g., descriptions.
*   **Do**: Use shorter width inputs where expected characters will be approximately 4 (e.g., Postcode, State/Province, Year).
*   **Don't**: Use different fixed widths within the same form. All text inputs should fill the container width, unless they are likely to contain less than 10 characters (e.g., Postcode, Year, Month).

### Icon Usage

*   **Caution**: Unless the input is used in the separate Search component, avoid using two icons in the same input.

### Inline Error Validation

*   **Do**:
    *   Move inputs down to accommodate for error messages.
    *   Change text input to red when that field has an error.
    *   Keep field border red (rather than blue), even when focused.
*   **Don't**:
    *   Fix position of inputs so error message overlaps others.
    *   Keep text input neutral colored when that field has an error.
    *   Change field border to blue when focused, with error.

### Modal Design

*   **Caution**: Need to ensure that modals don't have a fixed height (or if that is impossible, create a visible scroll container with an obvious scroll handle). This avoids modal content cramping, overlapping, or dropping outside of the container.

### Call-to-Action (CTA) Button States

*   **Do**: Keep CTA buttons enabled when the user cannot progress or there is an error, so long as they can resolve the issue themselves within the UI. This allows them to click the CTA to identify the issue and how to resolve it.
*   **Don't**: Disable CTA button when there is an error in the form, unless the reason is external (system-level / API / server).

## Variants/States

### States

| State       | Inconsistency/Notes                                                                                                                                                                                        | Interaction                                                                                                              |
| :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| **Default** | Sometimes there is a placeholder and sometimes there isn't. Placeholder is usually the same color as input text, which is confusing; it's not clear which inputs require action at first glance.           | N/A                                                                                                                      |
| **Hover**   | Mostly missing the hover state/interaction for Default Text Inputs, which is specified in the Design System. The hover state does work in some specific UIs (e.g., Subscription & Billing > Subscribe).     | N/A                                                                                                                      |
| **Focus**   |                                                                                                                                                                                                            | Clicking into the field triggers the blue border or focus state. This can also be triggered via keyboard (e.g., Tab button). |
| **Error**   | Two main variants of error message in-app: tooltips and inline error messages. The tooltip variant has a few different styles (e.g., red vs grey) and positions.                                        | N/A                                                                                                                      |
| **Disabled** | No in-app examples found.                                                                                                                                                                                  | N/A                                                                                                                      |

### Interactions

| Interaction          | Notes                                                                                                                  |
| :------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| **Focus**            | Clicking into the field triggers the blue border or focus state. This can also be triggered via keyboard (e.g., Tab button). |
| **Autocomplete history** | Don't block the browser's autocomplete history function, which is triggered when an input is in the Focus state.           |
| **isLoading**        | N/A (mentioned, but no details provided)                                                                               |
| **isClearable**      | N/A (mentioned, but no details provided)                                                                               |

### Variants

| Type    | Where it's used                                                                                                                                           |
| :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Flush** | Used in the Services tab of the NPE ONLY. Sizes: Project name = XL, Price / Qty = Medium. This variant currently uses the tooltip error style. |

## Properties/Options

### Styling

| Property        | Variants / Value                                                                                                        |
| :-------------- | :---------------------------------------------------------------------------------------------------------------------- |
| **Size**        | **Medium**: Height: 32px (Usage: everywhere in the app) <br/> **Large**: Height: 40px (Usage: only used in Airlock Sign-in pages, e.g., SSO) |
| **Width**       | Auto (fill container) OR predefined sizes: <br/> `small`: 92px <br/> `small`: 175px <br/> `medium`: 335px <br/> `large`: 580px |
| **Typography**  | **Medium**: <br/> Size: Body (13pt) <br/> Input Color: Gray 800 <br/> Placeholder Color: Gray 600 <br/> Error Color: Red 500 |
| **Fill**        | **Default**: White <br/> **Disabled**: Gray 300                                                                         |
| **Border**      | 1px, solid, color: <br/> **Default**: Gray 300 <br/> **Hover**: Gray 400 <br/> **Focus**: Purple 500 <br/> **Disabled**: Gray 400 <br/> **Error**: Red 500 |
| **Border radius** | 4px, inside                                                                                                             |
| **Padding**     | **Input container**: Vertical: 6px, Horizontal: 12px <br/> **Inner content / elements**: Horizontal: 4px                 |

## Related Components

*   Textarea
*   Search
*   Select
*   Password
*   Date picker (via calendar icon)
```