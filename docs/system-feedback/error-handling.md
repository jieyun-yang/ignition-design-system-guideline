---
title: Error handling
category: System feedback
url: https://design.ignitionapp.com/25ddf264c/p/5121383
scraped: 2025-11-16T03:45:40.385Z
---

# Error handling
```markdown
## Overview
Error handling provides clear, timely, and actionable feedback to users when issues arise, helping them understand what went wrong and how to resolve it. This guideline outlines various error types, their appropriate display, and interaction patterns within the system.

## Usage Guidelines

### Error Types and Usage
| Error Type | Description |
| :------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Input errors - text** | Display the error message close to the error's source, below the field in red text. |
| **Field error - tooltip** | Display the tooltip error close to the error's source when space doesn't allow for text below the input. Display tooltip error on flush input below the input. |
| **Alert errors** | Display an error alert (and disable the button to complete a workflow) when a user attempts to complete a workflow. *Discussion Point: Consider using a modal for workflow errors instead of an alert and disabled button.* |
| **Table activity data error** | Display the activity in red (e.g., "Renew failed") and on hover display the error tooltip with the error reason. |
| **Bulk process toast errors** | Display the outcome of all items and provide a link in red to view failed items. The link navigates the user to a list of items that failed to process, with table activity data errors. |
| **404 and no access full page errors** | **404:** Display when a user may have saved a URL but its content has been removed or moved to another URL. <br> **Access Denied:** Display when a user was given a URL for which they do not have user permissions. |
| **List error** | This error is low impact and doesn't block the user from proceeding but warns users with red text that data is missing from an item, along with an affordance to resolve it. |

## Anatomy
Error handling typically involves the following visual elements:
*   **Text:** Displayed in red, positioned close to the error's source, often directly below an input field.
*   **Tooltips:** Used for field errors when space is limited, or to provide detailed reasons on hover for table activity data errors.
*   **Alerts:** System-level messages that may disable further workflow actions.
*   **Links:** Provided in red to allow navigation to detailed error lists (e.g., for bulk processes).

## States and Behavior

### Triggers and Interactions
| Scenario | Trigger & Behavior |
| :------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Form errors** | Error should be triggered on form submission or upon navigating to the next step if within a workflow. (Note: Avoid premature display before data entry, which is an identified issue). |
| **Placeholder errors** | A red placeholder is triggered if a user manually opens up the HTML to edit the placeholder code. A tooltip error then displays on hover. |
| **Bulk process errors** | A warning displays as a toast when the process is submitted. Users can then view a list of items that couldn't process. |
| **List error** | When adding a new contact without an email, an "email missing" error displays upon submission. |
| **Table activity errors** | An error is triggered if a bulk action has failed. The error activity displays in red, and a tooltip error displays on hover to show the error reason. |

## Best Practices

### Do
*   Display the error close to the error's source.
*   Safeguard against mistakes. Warn users to prevent errors before they occur.

### Don't
*   Prematurely display an error. Errors should primarily display on submit or on completing a workflow.
*   Over-explain how the system works. Keep the error message simple, concise, and focused on the user's action and solution.

## Related Components
*   [Alert](/components/alert)
*   [Toast](/components/toast)
*   [Modal](/components/modal)
*   [Tooltip](/components/tooltip)
```