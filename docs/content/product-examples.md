---
title: Product examples
category: CONTENT
url: https://design.ignitionapp.com/25ddf264c/p/2946182
scraped: 2025-11-16T03:50:37.790Z
---

# Product examples
This documentation outlines the guidelines and best practices for various UI components and content patterns within the design system, ensuring consistency, clarity, and an optimal user experience across the product. It covers topics from activity logs and button labels to error messages, modals, and notifications.

## Activity Log

### Overview
Guidelines for creating clear and consistent entries in activity logs.

### Properties/Options
| Type    | Writing Pattern                                    | Examples                                                                                                           |
| :------ | :------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| Info    | `[Event] by [user][Additional info if required]`   | Payment collection scheduled for 21 September 2023 by Kimberley Peters. Signed by Kimberley Peters on behalf of Space Ranger. Reason: Space already agreed |
| Warning | `[Event][Additional info if required]`             | Refund request declined                                                                                            |
| Success | `[Event][Additional info if required]`             | Proposal automatically accepted as all Signatories have signed                                                     |
| Error   | `[Event]: <Reason>`                                | VISA ∙∙∙ 4242 marked as invalid. Reason: Bank account closed                                                       |

### Best Practices
*   **Do**: Avoid technical jargon.

### Edit Activities

### Properties/Options
| Writing Pattern                                                                           | Example                                                                                                                                                                                                                                                                                                            |
| :---------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{Item} edited by {user}. Reason: <Insert reason here>{FieldName}: {Old value} → {New value})` | Service edited by Kimberley Peters. Reason: Price increase. Billing mode: Automatic → Manual. Price: $200.00 → $220.00. Discount: None → $10.00. Email sent to kimberley.peters@ignitionapp.com |

### Best Practices
*   **Do**: Create 1 entry per field in the same session.
*   **Don't**: Combine multiple field edits into a single entry for the same session.

### Payment Method Activity Log
_No specific guidelines provided in the source content for this section._

## Buttons

### Action Buttons

### Usage Guidelines
*   Use a verb and a noun to clearly indicate the action (e.g., "Add service").
*   Use a 1-word verb label when the action is clear from context (e.g., "Export" within a client table).
*   Leave out pronouns like "your" and "my", adjectives like "new", and articles like "a" or "the" unless they are required for clarity.
*   The global action button is labeled "New" to allow for flexibility in the dropdown menu actions.
*   Index page buttons are in the format "New <noun>" to ensure consistency across all tables.

### Best Practices
*   **Do**: Use a verb-only label when the action is clear.
*   **Do**: Leave out pronouns like "your" and "my".

## Error Messages

### Overview
Guidelines for crafting effective and user-friendly error messages.

### Usage Guidelines
*   Use plain language, avoiding technical terms and jargon.
*   Maintain an appropriate tone: neutral and approachable. Warmth is acceptable for less serious errors, but avoid overly lighthearted tones for critical issues. Never blame the user.
*   Be specific: adapt messages to the situation and avoid generic terms like "invalid". If an error is too generic, consider splitting it into multiple contextual errors.
*   State the issue, its cause, and provide a clear resolution.

### Best Practices
*   **Do**: State the issue, cause, and provide a resolution.
*   **Do**: Don't blame the user.

### Inline Errors

### Properties/Options
| Context                     | Do This                                                               | Avoid This                                                           |
| :-------------------------- | :-------------------------------------------------------------------- | :------------------------------------------------------------------- |
| Required field not completed | Enter an email address                                                | Invalid email:                                                       |
| Input not in the correct format | Email address must be in the format someone@example.com. First name can only contain letters, hyphens and spaces. | Invalid email: someone@example.com. No numbers or special characters allowed. |

## Fields

### Label

### Usage Guidelines
*   Communicate clearly what information a user should input.

### Best Practices
*   **Do**: Keep the label concise.
*   **Do**: Direct users on how to input the information.
*   **Do**: Use regionalized labels where required, providing relevant options for data with different names and inputs depending on the country.
*   **Don't**: Use verbs like "enter", "select", "add" etc. in the label itself. Use the field caption for guidance instead.
*   **Don't**: Add a colon (:) to the field label, as the component's design indicates the relationship between the label and the field.

### Caption

### Usage Guidelines
*   Provide clarity on what the field is about.
*   Guide users on how to complete the field.
*   Specify the kind of information that needs to be entered or selected.
*   Offer specific formatting examples or requirements.

### Best Practices
*   **Do**: Provide greater clarity if required.
*   **Do**: Omit the caption if the field is intuitive and self-explanatory.

### Placeholders

### Usage Guidelines
*   Use placeholders to provide examples of expected input.

### Best Practices
*   **Do**: Help users complete the field by providing an example of how to format their input.

## In-product Notifications

### Overview
Guidelines for displaying in-product notifications, categorized by assigned and non-assigned events.

### Properties/Options
| Description                                                                 |
| :-------------------------------------------------------------------------- |
| Assigned event: tasks assigned to a specific user (used for proposal reviews) |
| Non-assigned events: general events that cannot be assigned to a particular user. |

### Assigned Events

### Usage Guidelines
*   If the notification is for the user to whom the task is assigned, use the pattern: `You have {an event}`. Example: "You have a review request."
*   If the task is assigned to someone else, use the pattern: `UserName has {an event}`. Example: "Kim Berry has a review request."

### Best Practices
*   **Do**: Use for assigned events with no specific comment.
*   **Do**: Use for assigned events with a comment.

### Non-assigned Events

### Best Practices
*   **Do**: Use for events such as "Proposal accepted by an Ignition user."

## Modals

### Confirmation

### Anatomy/Structure
| Element         | Guidelines                                                                                                       |
| :-------------- | :--------------------------------------------------------------------------------------------------------------- |
| **Title**       | Use the pattern `<Verb><noun>?` (maximum 30 characters).                                                         |
| **Content Area** | Communicate the consequences of the action. Provide enough context for the user to make an informed decision confidently. |
| **Primary Button** | Use the pattern `<Verb>` or `<Verb><noun>` if more context is needed. The verb should typically match the modal title's verb. |
| **Secondary Button** | Use "Cancel" to allow the user to close the modal and discontinue the action.                                      |

### Best Practices
*   **Do**: Inform the user if there are any consequences of proceeding with the action.
*   **Do**: Ensure there's a clear contrast between the primary and secondary actions.
*   **Don't**: Avoid asking if the user is "sure."
*   **Don't**: If the primary action is "Cancel," do not use "Cancel" as the secondary action.

### Completed

### Anatomy/Structure
| Element         | Guidelines                                                                    |
| :-------------- | :---------------------------------------------------------------------------- |
| **Title**       | Use the pattern `<Verb><past-tense noun>` (maximum 30 characters).            |
| **Content Area** | Communicate what will happen next and any other important information.        |
| **Action**      | Use "Done" as the button label for the primary action.                          |

### Best Practices
*   **Do**: Communicate what's happening or the next steps.
*   **Don't**: Avoid generic language.

### Task

### Anatomy/Structure
| Element         | Guidelines                                                                                                           |
| :-------------- | :------------------------------------------------------------------------------------------------------------------- |
| **Title**       | Use the pattern `<Verb><noun>` to communicate what the user needs to do (maximum 30 characters).                       |
| **Content Area** | Communicate what you need to do within this modal. If the task is clear from the heading alone, no copy is required. |
| **Primary Action** | Use the pattern `<Verb>` or `<Verb><noun>` if more context is needed. The verb should typically match the modal title's verb. If there's nothing more to do, use "Done". |
| **Secondary Action** | Use "Cancel".                                                                                                        |

### Best Practices
*   **Do**: Ensure the heading matches the job to be done.

## Switch

### Overview
Guidelines for the design and labeling of switch components.

### Best Practices
*   **Do**: Clearly describe what the switch will do when it's turned on.
*   **Do**: If you have multiple switches in a row that perform similar functions, ensure consistent framing.
*   **Do**: Avoid ambiguous actions and negative constructions. The "On" action for a switch should be positive and straightforward.
*   **Do**: If multiple switches are arranged in a list and have a similar function, you can set up the overall context in the title/description of the list rather than within each individual switch.

## Table Data

### Overview
Guidelines for displaying different types of data within tables, including alignment and formatting.

### Properties/Options
| Data Type           | Display Guidelines                                                                                                                                                                                                                                                          |
| :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Non-numerical data** | **Yes/No values**: Display a check icon for "Yes" and a hyphen (`-`) for "No." <br/> **No data**: Display a hyphen (`-`). <br/> **Alignment**: Align non-numerical data (e.g., calendar dates, textual data) to the left. |
| **Numerical data**  | **Dollar value (how much)**: Include the dollar or currency symbol in the column. If the amount is $0 rounded to a whole number, display "$0." If the amount is $0 rounded to two decimal places, display "$0.00." (Where '$' is the localized currency symbol). <br/> **Count (how many)**: If the count is 0, display "0." <br/> **Alignment**: Align dollar values to the right. |

### Best Practices
*   **Do**: Align dollar values to the right.
*   **Don't**: Align dollar values to the left.

## Toasts

### Success Toasts

### Anatomy/Structure
| Element    | Guidelines                                                                                                              |
| :--------- | :---------------------------------------------------------------------------------------------------------------------- |
| **Header** | Use the pattern `<Noun> <Past tense verb>`. The header should ideally be 1 line and briefly explain what happened.        |
| **Body**   | (Optional) Use the body to briefly provide more context if required. Aim for 2 lines or less, maximum 3. If no additional context is required, use the Header only toast variant. |
| **Action** | (Optional) Use the pattern `<Verb><Noun>`.                                                                              |

### Best Practices
*   **Do**: Clearly communicate the outcome in the header.
*   **Don't**: Avoid generic language.

### Failure Toasts

### Anatomy/Structure
| Element    | Guidelines                                                                                                                             |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| **Header** | Use the pattern `<Noun> failed to <verb>`. Aim for 1 line in length and briefly explain what happened.                                 |
| **Body**   | Use the body to further explain why the error occurred or what needs to be done to resolve the issue. Aim for 2 lines or less.     |
| **Action** | (Optional) Add a button where possible to resolve the issue or view more details about it. Use the pattern: `<Verb><Noun>`. |

### Best Practices
*   **Do**: Explain the problem in plain language.
*   **Don't**: Avoid technical jargon.

## Tooltips

### Usage Guidelines
Tooltips are used to:
*   Provide a brief definition of a technical term.
*   Explain an icon's meaning.
*   Offer hints and tips.
*   Indicate keyboard shortcuts.
*   Show truncated text.

### Best Practices
*   **Do**: Keep tooltips concise, ideally a few words only. In some use cases, a single sentence (approximately 20 words) or less is acceptable.
*   **Do**: If a tooltip requires multiple sentences or paragraphs for explanation, consider linking to a help article instead.

## Alerts

### Overview
Guidelines for creating various types of alerts (Warning, Error, Info, Success) to communicate important messages to users.

### Usage Guidelines
*   Be clear and direct. State the outcome or issue in the first sentence.
*   If action is required from the user, specify exactly what they should do.
*   Link to more information or help when needed. Use "Learn more" only if more context is required, and "Contact support" only if user intervention from support is necessary.
*   Match the tone of the alert to its context (see guidelines for each alert type below).

### Variants/States

| Type     | Tone                             | Content                                                                                                                               | Example                                                               |
| :------- | :------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------- |
| **Warning** | Calm but cautionary              | State what’s about to happen, what’s at stake, or why the user is receiving the warning. Highlight the impact.                           | This proposal will be moved to draft. Your client will no longer be able to access it. |
| **Error**   | Resourceful, empathetic, and neutral | Explain the issue in plain terms. Briefly explain why (if known). Offer a clear next step or solution.                                | Failed to send proposal. Make sure it's in draft status and try again. |
| **Info**    | Informative and neutral          | Share important information, context, or actions that the user absolutely must know in the moment.                                    | Client will be created when the proposal is accepted.                 |
| **Success** | Positive, straight up            | Confirm what was done successfully. If helpful, share what's next or offer related actions.                                          | Payment collected (May 7, 2025)                                       |

### Best Practices
*   **Do**: Share important, contextual information. Use info alerts to call attention to critical information that the user must know in the moment.
*   **Don't**: Use info alerts for general instructions, page summaries, or content that isn’t new or urgent.