---
title: Date picker
category: Components
url: https://design.ignitionapp.com/25ddf264c/p/2978053
scraped: 2025-11-16T03:24:48.775Z
---

# Date picker
```markdown
## Overview
A Date picker is a user interface component that allows users to select a single date from a calendar. It typically consists of a date input field and an interactive calendar overlay, providing a guided way to select specific dates for various purposes.

## Anatomy/Structure
The Date picker component is composed of the following visual elements and their functions:

*   **Date field**: This is the primary text input area. Selecting this field opens the calendar component. Users have the option to manually input dates directly into this field. Once a date is selected from the calendar, it will be displayed in this text input.
*   **Calendar**: This is the interactive menu or overlay that appears when the Date field is activated, allowing a date to be visually selected.
*   **Previous and next month controls**: These are navigation elements within the calendar that enable the user to move forward or backward one month at a time to find the desired date.
*   **Today’s date**: A specific indicator on the calendar highlighting the current day.
*   **Outside month date**: Refers to dates displayed within the calendar grid that technically belong to the preceding or succeeding month, often styled to differentiate them from the current month's dates.
*   **Selected date**: The date that has been chosen by the user, typically shown with distinct visual styling (e.g., a background highlight).
*   **Unselected date**: Any date on the calendar that has not been chosen by the user.

## Usage Guidelines
The Date picker component should be utilized in contexts where users need to specify a date. Key usage scenarios include:

*   Specifying proposal start dates or "Bill on" dates within systems like the New Payment Experience (NPE).
*   Scheduling invoice or payment collection dates.
*   Applying date-based filters on data displays, such as in pipeline or client pages (e.g., filtering by "Billing due date").

## Variants/States

### Date field States
The date input field can display in several states, each indicating a different interaction or condition:

| State    | Description                                                                     |
| :------- | :------------------------------------------------------------------------------ |
| Default  | The date field defaults to displaying today's date in both its placeholder and within the calendar when the calendar is opened. |
| Focus    | *No specific description provided.*                                             |
| Invalid  | *No specific description provided.*                                             |
| Disabled | *No specific description provided.*                                             |

### Calendar date States
Individual date cells within the calendar can also exhibit various states, often indicated by distinct visual styling. These states can apply differently depending on whether the date falls within the current month, a previous/next month, or if it is today's date.

| State           | Current month | Prev/Next month | Today |
| :-------------- | :------------ | :-------------- | :---- |
| Default state   |               |                 |       |
| Hover state     |               |                 |       |
| Disabled        |               |                 |       |
| Selected        |               |                 |       |

## Properties/Options

### Date format
*No specific configurable properties or options regarding date format are provided in the current documentation.*

## Behavior
This section outlines the interactive behavior and expected user experience when interacting with the Date picker component.

### Opening the calendar
*No specific details provided on the behavior or conditions for opening the calendar.*

### Selecting a date
*No specific details provided on the behavior or interaction patterns for selecting a date.*

### Next and previous month
*No specific details provided on the behavior or animation for navigating to the next and previous month.*

### Closing the calendar
*No specific details provided on the behavior or conditions for closing the calendar.*
```