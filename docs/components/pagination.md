---
title: Pagination
category: Components
url: https://design.ignitionapp.com/25ddf264c/p/4524419
scraped: 2025-11-16T03:23:10.082Z
---

# Pagination
This document outlines the guidelines and specifications for the Pagination component within the design system. It covers its structure, usage, behavior, and best practices.

### Overview

The Pagination component provides controls for navigating through large sets of data, allowing users to access different pages of results. It is often used in conjunction with or as an alternative to a "Load more" pattern, depending on the specific use case and data volume.

### Usage Guidelines

Use Pagination or Load more components to manage the display of extensive lists and data tables effectively.

**When to use Pagination:**
*   For data tables.
*   For dedicated pages where users need to navigate specific result sets.

**When to use Load more:**
*   For smaller lists, such as summaries or dashboard pages, where the total number of items is not expected to be excessively large.

**Placement:**
*   Display pagination controls at the bottom of a list or table.
*   Display the Load more button at the bottom center of the results.

**Pagination Display:**
*   Display a maximum of 10 pages by default.
*   Always display the selected page.
*   Always display 'Previous page', 'Next page', 'First page', and 'Last page' navigation controls.

### Anatomy/Structure

The Pagination component includes several interactive elements for navigation, while the Load more component is a single action button.

**Pagination Elements:**

*   **First page icon button:** Navigates the user to the first page of results (`<<`).
*   **Previous page icon button:** Navigates the user to the previous page of results (`<`).
*   **Selected page button:** Indicates the currently active page.
*   **Default page button:** Represents other available pages.
*   **Next page icon button:** Navigates the user to the next page of results (`>`).
*   **Last page icon button:** Navigates the user to the last page of results (`>>`).

**Load more Element:**

*   **Load more button:** An interactive button that, when clicked, displays additional items in the list.

### Variants/States

The system supports both traditional pagination and a "Load more" pattern, with specific behaviors and styling variations across different contexts.

**General Behaviors:**

*   **Pagination:** Typically displays fixed navigation controls for moving between discrete pages.
*   **Load more:** Extends the current list by fetching and appending more items, often with a visual loader.

**Inconsistent/Preferred Behaviors (Context-Specific):**

The following table outlines observed inconsistencies and preferred patterns for Pagination and Load more components across various parts of the application, often due to API limitations or historical implementations.

| Context                                                                 | Inconsistent Behavior                                                                                                                                                                                                                                                            | Preferred Behavior                                                                                                                                                                                                                                               |
| :---------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **All Pagination**                                                      | N/A                                                                                                                                                                                                                                                                      | Controls: `<<` (first page), `<` (previous page), `>` (next page), `>>` (last page). Only display 10 pages to navigate 10 at a time.                                                                                                                                 |
| **Pipeline, Clients Library/services**                                  | N/A                                                                                                                                                                                                                                                                      | Always visible at the bottom of the table while scrolling.                                                                                                                                                                                                   |
| **Library/proposals, Library/terms, Library/emails, Library/messages**  | Only visible until the user scrolls to the bottom of default displayed data.                                                                                                                                                                                             | Always visible at the bottom of the table.                                                                                                                                                                                                                   |
| **Settings/Users**                                                      | Don't display this component at all.                                                                                                                                                                                                                                     | Display a Load more or pagination after 25 results.                                                                                                                                                                                                          |
| **Client/Client summary**                                               | Displays 6 results initially.                                                                                                                                                                                                                                            | Displays 5 results initially, to be consistent with manual billing. Load more displays another 6 items.                                                                                                                                                    |
| **Client/Services**                                                     | Load more component copy is "Load more active services" and bold, and loader is orange. Displays 25 items initially.                                                                                                                                                     | Load more component copy is "Load more..." and default text. Loader is purple. Displays 25 items initially, Load more displays another 25 items (with orange loader as currently implemented, though purple is generally preferred).                            |
| **Client/Billing schedule/Billed Manually**                             | N/A                                                                                                                                                                                                                                                                      | Displays 5 items initially. Load more displays a purple loader and another 5 items.                                                                                                                                                                          |
| **Client/Billing schedule/Billed Automatically and Client/Billing schedule/Invoices** | Load more is centered in a card component that has elevation on hover. Displays 10 items initially.                                                                                                                                                              | Load more component on the left bottom of displayed results. Displays 10 items initially. Load more displays a purple loader and 10 more items.                                                                                                             |
| **Payments/Collections/Pending, Rejected, Verifying, NPE:templates selection** | Load more is centered. Displays 25 items initially.                                                                                                                                                                                                                      | Load more component on the left bottom of displayed results. Displays 25 items initially. Load more displays another 25 items.                                                                                                                                 |

**Loader Colors and Text (Summary):**
*   **Preferred Loader Color:** Purple (used in Billing schedules).
*   **Inconsistent Loader Color:** Orange (observed in Client/Services).
*   **Preferred Load More Text:** "Load more..." (default text).
*   **Inconsistent Load More Text:** "Load more active services" (bold, context-specific).

*Note: The `### States` heading was present in the original content but contained no specific details regarding different component states (e.g., hover, disabled, active) beyond what's implied in the "Variants/States" table above.*

### Properties/Options

While not explicitly defined as "properties," the "Behaviour" section provides implicit configuration details that influence how Pagination and Load more components function across the system.

| Property/Context           | Type/Value                                            | Description                                                                                             | Default/Preferred                                                                                                                                              |
| :------------------------- | :---------------------------------------------------- | :------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `maxPagesDisplayed`        | Number                                                | Maximum number of page buttons displayed at one time in the pagination component.                       | 10                                                                                                                                                             |
| `itemsPerPage` (Load more) | Number                                                | Number of items loaded per 'Load more' action.                                                          | Varies by context: 6 (Client/Client summary), 25 (Client/Services, Settings/Users, Payments), 5 (Client/Billing schedule/Billed Manually), 10 (Client/Billing schedule/Billed Automatically/Invoices) |
| `loadMoreButtonPosition`   | String (`bottom-center`, `bottom-left`)             | Placement of the 'Load more' button relative to the displayed results.                                  | `bottom-center` (general), `bottom-left` (preferred for Client/Billing, Payments)                                                                              |
| `loadMoreLoaderColor`      | String (`orange`, `purple`)                           | Color of the loader animation displayed during a 'Load more' action.                                    | `purple` (preferred overall), `orange` (currently implemented in Client/Services)                                                                                |
| `loadMoreButtonText`       | String                                                | Text displayed on the 'Load more' button.                                                               | "Load more..." (preferred)                                                                                                                                     |
| `initialItemsDisplayed`    | Number                                                | Number of items displayed on the initial page load (for Load more patterns).                            | Varies: 6 (Client/Client summary, inconsistent), 5 (Client/Client summary, preferred), 25 (Client/Services, Payments), 10 (Client/Billing Auto/Invoices), 5 (Client/Billing Manual) |
| `visibility`               | String (`always-visible`, `scroll-dependent`, `hidden`) | Controls when the pagination component is visible (e.g., always, or only after scrolling).              | `always-visible` (preferred for most tables), `hidden` (inconsistent for Settings/Users)                                                                       |

### Best Practices

**Do's:**
*   Display pagination controls at the bottom of a list or table.
*   Display a maximum of 10 page numbers by default in the pagination component.
*   Always display the selected page number.
*   Always display 'First page', 'Previous page', 'Next page', and 'Last page' navigation controls.
*   Display the Load more button at the bottom center of the results (general).
*   Ensure pagination is always visible at the bottom of tables, even while scrolling.
*   Use "Load more..." as the default text for the Load more button, avoiding context-specific phrasing like "Load more active services".
*   Use a purple loader for Load more actions.
*   Place the Load more component on the left bottom of displayed results for specific contexts like Client/Billing schedules and Payments/Collections.
*   Ensure consistency in the number of items displayed for Load more, e.g., 5 results for Client/Client summary to align with manual billing.

**Don'ts:**
*   Do not display pagination controls at the top of a list.
*   Do not display more than 10 page numbers at a time in the component.
*   Do not display the Load more button at the top of a list.
*   Do not make pagination visibility dependent on user scroll (i.e., hide it until scroll to bottom).
*   Avoid centering the Load more button if other preferred placements are specified (e.g., bottom-left).
*   Do not use specific, bolded text for the 'Load more' button (e.g., "Load more active services").
*   Avoid inconsistent loader colors for 'Load more' actions; prefer purple.

**Deprecated Pattern:**
The original content explicitly marks a "DEPRECATED PATTERN" multiple times without further detail. This suggests that certain previous implementations or approaches to pagination/load more are no longer recommended. Users should refer to the "Best Practices" and "Preferred Behavior" sections for current guidance.

### Accessibility

Accessibility considerations were not explicitly mentioned in the provided content.

### Code Examples

No code examples were provided in the original content.

### Spacing/Sizing

**Pagination:**
*   Maximum 10 page numbers displayed at a time in the component.

**Load more:**
*   **Client/Client summary:** Displays 6 items, Load more displays another 6 items (inconsistent: 5 items preferred initially).
*   **Client/Services:** Displays 25 items, Load more displays another 25 items.
*   **Client/Billing schedule/Billed Manually:** Displays 5 items, Load more displays another 5 items.
*   **Client/Billing schedule/Billed Automatically & Client/Billing schedule/Invoices:** Displays 10 items, Load more displays another 10 items.
*   **Payments/Collections/Pending, Rejected, Verifying, NPE:templates selection:** Displays 25 items, Load more displays another 25 items.

**Placement:**
*   Bottom of a list (general).
*   Bottom center of results (Load more general).
*   Left bottom of displayed results (Load more preferred for specific billing/payments contexts).

### Related Components

*   **Data Tables:** Primary context for Pagination.
*   **Summary Pages:** Suitable for "Load more" pattern.
*   **Dashboard Pages:** Suitable for "Load more" pattern.
*   **Specific application views:**
    *   Pipeline
    *   Clients Library/services
    *   Library/proposals, Library/terms, Library/emails, Library/messages
    *   Settings/Users
    *   Client/Client summary
    *   Client/Services
    *   Client/Billing schedule/Billed Manually, Billed Automatically, Invoices
    *   Payments/Collections/Pending, Rejected, Verifying, NPE:templates selection