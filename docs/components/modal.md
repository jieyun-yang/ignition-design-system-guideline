---
title: Modal
category: Components
url: https://design.ignitionapp.com/25ddf264c/p/2978010
scraped: 2025-11-16T03:10:02.981Z
---

# Modal
## Overview

Modals are temporary, superimposed UI elements that display focused content or require user interaction without navigating away from the current page. They are typically used for tasks, decisions, or information that needs immediate attention and prevents interaction with the underlying content until dismissed.

## Anatomy

Modals consist of several key structural elements, each with a specific purpose.

| Element        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Header**     | The title should clearly indicate the modal's purpose at a glance. Where possible, keep the title short, include a verb and noun. The close icon (X) provides an explicit way to dismiss the modal without completing its primary action.                                                                                                                                                                                                                                                                                           |
| **Content area** | This area contains the primary information, context, or functionality necessary for the user to confidently complete the task. Where possible, avoid nesting modals and excessive scrollable content. If scrolling is necessary, the action bar should remain sticky at the bottom, and scrolling should occur within the content area, including a display shadow to indicate overflow.                                                                                                                                        |
| **Action bar** | Positioned at the bottom, buttons are typically aligned to the right. It should include a primary action button for task completion. Button labels should include a verb and align with the modal title to provide greater context to users.                                                                                                                                                                                                                                                                                   |
| **Container**  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

### Content Guidelines

| Element        | Guideline                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Header**     | Briefly explain what the modal is about. The title should contain a verb and noun.                                                                                                                                                                                                                                                                                                                                                                                  |
| **Content area** | Provide important information about the task, consequence of an action, or next steps.                                                                                                                                                                                                                                                                                                                                                                              |
| **Buttons**    | In most circumstances, the primary action button can contain a verb only, which should align with the verb in the modal title. The secondary button should typically be "Cancel". If there is only one button and its purpose is to close the modal, label it "Done".                                                                                                                                                                                               |

## Behavior

Modals interact with users and the system in specific ways.

| Property          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| :---------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Trigger**       | Modals are typically triggered by user actions, such as clicking to export a client list. System-triggered modals should be used judiciously as they can interrupt a user mid-task and should generally be avoided unless critical.                                                                                                                                                                                                                                                                |
| **Close**         | Modals close when the user clicks the primary action button, completing the task, submitting data, and returning the user to their previous context. Clicking outside the modal or on the close icon (X) in the top right corner will also close the modal, but without submitting any data.                                                                                                                                                                                                        |
| **Position**      | Modals are horizontally centered and vertically positioned so that the modal header is always close to the top of the page.                                                                                                                                                                                                                                                                                                                                                                       |
| **Content overflow** | The default overflow behavior for content within the modal is `inside` (as inherited from Chakra UI). Where scrolling is required, the action bar should be sticky, and scrolling should occur only within the content area, including a display shadow to indicate overflow.                                                                                                                                                                                                                |

## Variants and Usage

Modals come in several types, each designed for specific interaction patterns and use cases.

### Confirmation Modals

Confirmation modals provide users with a final choice before committing to an action, such as deleting a client, allowing them to reconsider. They require an explicit action to be completed and include both a "Cancel" and a primary action button.

*   **Guidance:**
    *   **Secondary action:** The "Cancel" button should use a subtle variant.
    *   **Primary action:** Add an icon to the primary action button.
    *   **Content:** Clearly state the outcome or consequence of performing the action.
    *   **Header content:** Use a "Verb Noun" format (present tense).
    *   **Icon in header:** Only use a warning icon if the action is irreversible (e.g., "Delete," "End").
        *   _Example: Revoking is reversible, so a warning icon isn't required._
        *   _Example: Ending services is irreversible, so we display a warning icon._

### Decision Modals

Decision modals present users with a choice between two somewhat equally weighted actions.

*   **Guidance:**
    *   **Header content:** Frame the header as a question.

### Context Modals

Context modals provide users with more information related to their current task or inform them of an action the system is taking (e.g., "A payments collection export is being emailed to you on completion").

*   **Guidance:**
    *   **Primary action:** Use "Done" as a subtle variant.
    *   **Content:** Clearly state the action the system is taking.
    *   **Header content:** Use a "Noun Verbed" format (past tense).

### Preview Modals

These modals are used to preview the result of a task, currently limited to previewing client emails for requests, edits, and proposals.

*   **Guidance:**
    *   **Header content:** Use a "Verb Noun" format (present tense), e.g., "Preview proposal email."
    *   **Content overflow:** The header and footer should remain sticky while the content scrolls.
    *   **Action bar:** Use a subtle "Done" button.

### Input-Edit Modals

Input-edit modals allow users to add or change data without leaving the current page. They are useful for completing sub-tasks within larger task flows, but their use should be carefully considered to avoid overly complex interactions. Input-edit modal action bars can include secondary buttons, but these should not be used for controls that belong in the main content area.

*   **Guidance:**
    *   **Content:** State the action the system is taking.
    *   **Header content:** Use a "Verb Noun" format (present tense).
    *   **Action bar:** The primary action button should relate to and match the header. "Cancel" should be a subtle variant.
    *   **When to use modal instead of a drawer for input:**
        *   If the task is a single step.
        *   If the task is a sub-step originating from a drawer.
        *   If the UI is accessed from multiple flows.

### Brand Promise Modals

These are system-triggered modals that users see the first time they navigate to specific areas.

### Benefits Modals

These are system-triggered modals displayed after first-time actions are completed.

## Best Practices

### Do's

*   Appropriately label the modal and its buttons.
*   Provide enough context within the modal to enable the task to be completed confidently.
*   Where scrolling is required, make the action bar sticky and scroll only within the content area (including a display shadow to indicate overflow).
*   Position buttons on the right of the action bar and always include a primary action button for task completion (with the exception of decision and context modals). Button labels should include a verb and match the modal title to give users greater context.

### Don'ts

*   Don't use modals for displaying error messages.
*   Don't nest modals (i.e., opening a modal from within another modal).

## Sizing

Modals come in various predefined widths to accommodate different content needs.

| Size       | Width   |
| :--------- | :------ |
| XXSmall    | 364px   |
| XSmall     | 416px   |
| Small      | 468px   |
| Medium     | 546px   |
| Large      | 624px   |
| XLarge     | 728px   |
| XXLarge    | 768px   |
| One-off 90% | (unspecified, implies 90% of viewport width) |