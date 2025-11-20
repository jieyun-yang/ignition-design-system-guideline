---
title: Activity log
category: System feedback
url: https://design.ignitionapp.com/25ddf264c/p/5828335
scraped: 2025-11-16T03:43:57.932Z
---

# Activity log
```markdown
## Overview

The Activity log is a system feedback component designed to record and display a chronological list of events, actions, or changes that occur within the system. It provides users with transparency into processes, user actions, and system responses, often used for auditing, tracking progress, or understanding the history of an item.

## Usage Guidelines

Activity log entries are categorized by type, each indicating the nature and outcome of an event. These types are differentiated by specific icons and colors, as detailed in the Anatomy section.

### Types of Activity Log Entries

| Type | Description |
| :--- | :---------- |
| **Info** | Used when the event is not the final event in a process, indicating an ongoing or intermediate step. |
| **Success** | Used when the event signifies the final event in a process, and the process was completed successfully. |
| **Error** | Used when an error occurred, resulting in the main process not being completed. |
| **Warning** | Used when something undesirable will happen but the main process will still be completed, or when the main process was completed, but something undesirable happened afterward. |

## Anatomy/Structure

An activity log entry is composed of several key elements to provide comprehensive information about a recorded event.

| Element                     | Description                                                                                                                                                                                                                                                                                                                                                                                                      |
| :-------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Icon and Colour**         | A visual indicator that communicates the type of event (Info, Success, Error, Warning) at a glance. The color corresponds to the event's status. Refer to the "Usage Guidelines" for specific type definitions and the visual associations.                                                                                                                                                                    |
| **Content**                 | The primary textual description of the activity or event that occurred. This typically follows specific writing patterns to ensure clarity and consistency.                                                                                                                                                                                                                                                       |
| **Timestamp**               | Indicates when the event occurred, providing a chronological context.                                                                                                                                                                                                                                                                                                                                              |
| **Additional information**  | (Optional) Supplementary details related to the event, such as a reason for a change, old and new values, or specific identifiers. This expands on the main content and provides deeper insights when necessary.                                                                                                                                                                                                      |

## Variants/States

The Activity Log component primarily differentiates its entries based on their **Type** (Info, Success, Error, Warning), as detailed in the "Usage Guidelines" section. Each type implies a different visual state (icon and color) and contextual meaning.

## Properties/Options

### Common Event Content & Writing Patterns

Consistency in content and writing patterns is crucial for clarity and user understanding within the activity log. The following table outlines common event types and their recommended writing patterns.

| Activity                    | Writing Pattern                                                                                                                                                                                                                                                                     |
| :-------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Edits**                   | `[Thing] edited by [user]. [Reason: <reason>]` <br/> `[Old value] → [New value]` <br/> _If the value is long text, use:_ `[Field name] edited`                                                                                                                                         |
| **Email to contact**        | `[Thing] sent to [type of contact]: [contact name] ([contact email])`                                                                                                                                                                                                               |
| **Anything related to a billing item** | `Billing for [date] [event] by [user]`                                                                                                                                                                                                                                              |
| **Error with reason**       | `[Thing failed]. Reason: [<reason>]`                                                                                                                                                                                                                                                |

## Best Practices

_No specific best practices were provided in the extracted content._

## Accessibility

_No specific accessibility considerations were provided in the extracted content._

## Code Examples

_No code examples were provided in the extracted content._

## Spacing/Sizing

_No specific spacing or sizing guidelines were provided in the extracted content._

## Related Components

_No specific related components or guidelines were provided in the extracted content._
```