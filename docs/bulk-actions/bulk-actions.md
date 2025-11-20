---
title: BULK ACTIONS
category: BULK ACTIONS
url: https://design.ignitionapp.com/25ddf264c/p/4641301
scraped: 2025-11-16T03:46:57.386Z
---

# BULK ACTIONS
This document outlines guidelines for implementing "Bulk Actions" within the design system.

## Overview
No specific overview content was provided for this section in the input. Generally, Bulk Actions refer to the ability for users to select multiple items and perform an action on all selected items simultaneously, enhancing efficiency when managing large sets of data.

## Usage Guidelines
No specific usage guidelines were provided for this section in the input. Typically, bulk actions are used when:
*   Users need to manage a large number of items (e.g., emails, files, user accounts).
*   There are common operations that can apply to multiple items (e.g., delete, archive, move, publish/unpublish).
*   The interface clearly communicates which items are selected and which actions are available.

## Anatomy/Structure
No specific anatomy or structural details were provided for this section in the input. Common elements often include:
*   **Checkbox/Selection Mechanism**: A way to select individual items, often a checkbox next to each item, and a "select all" option.
*   **Action Bar/Toolbar**: A dedicated area that appears when items are selected, containing buttons or dropdowns for available bulk actions.
*   **Selection Count**: A clear indication of how many items are currently selected.
*   **Clear Selection Option**: A way to easily deselect all items.

## Variants/States
No specific variants or states were provided for this section in the input. Potential states might include:
*   **No Selection**: Bulk action UI is hidden or disabled.
*   **Single Selection**: Only one item selected, possibly enabling some single-item actions in the bulk action bar.
*   **Multiple Selection**: Two or more items selected, enabling bulk actions.
*   **All Selected**: All items on the current page or in the entire dataset are selected.
*   **Mixed Selection**: Selected items have differing properties, potentially disabling certain actions (e.g., "publish" is disabled if some selected items are already published).

## Properties/Options
No specific properties or configurable options were provided for this section in the input. If content were available, it might appear in a table format like this:

| Property       | Type     | Description                                     | Default |
| :------------- | :------- | :---------------------------------------------- | :------ |
| `selectionMode` | `string` | Defines how items can be selected.              | `multi` |
| `actions`      | `array`  | An array of action objects to display.          | `[]`    |
| `position`     | `string` | Where the bulk action bar appears (e.g., `top`, `bottom`). | `top`   |

## Best Practices
No specific best practices were provided for this section in the input. General best practices for bulk actions often include:
*   **Clear Indication**: Visually distinguish selected items clearly.
*   **Contextual Actions**: Only show actions relevant to the selected items.
*   **Confirmation**: For destructive or irreversible actions (e.g., delete), prompt the user for confirmation.
*   **Performance**: Ensure that bulk operations are performed efficiently, especially for very large datasets, and provide feedback during processing.
*   **Scalability**: Design for scenarios ranging from a few selected items to hundreds or thousands.

## Accessibility
No specific accessibility considerations were provided for this section in the input. Important accessibility aspects often include:
*   **Keyboard Navigation**: Ensure users can select/deselect items and trigger actions using only a keyboard.
*   **Screen Reader Support**: Provide appropriate ARIA attributes for selection states, action bar visibility, and action buttons.
*   **Focus Management**: Manage focus gracefully when the bulk action bar appears or disappears.
*   **Clear Labels**: Use descriptive labels for checkboxes and action buttons.

## Code Examples
No code examples were provided for this section in the input. If available, code snippets for implementation would be placed here, for example:

```html
<!-- Example of a simplified bulk action toolbar -->
<div class="bulk-actions-toolbar" data-visible="false">
  <span class="selection-count">0 items selected</span>
  <button class="button button--primary" disabled>Delete</button>
  <button class="button" disabled>Archive</button>
  <button class="button button--link">Clear Selection</button>
</div>

<!-- Example of an item with a checkbox -->
<div class="list-item">
  <input type="checkbox" id="item1" name="item1">
  <label for="item1">Item 1 Name</label>
  <!-- ... other item content -->
</div>
```

## Spacing/Sizing
No specific spacing or sizing guidelines were provided for this section in the input. If present, this section would detail measurements like:
*   Minimum height of the bulk action bar.
*   Padding around elements within the action bar.
*   Size of selection checkboxes.

## Related Components
No specific related components or guidelines were mentioned in the input. Common related components might include:
*   **[Checkbox](link-to-checkbox-guidelines)**: For item selection.
*   **[Button](link-to-button-guidelines)**: For triggering actions.
*   **[Table](link-to-table-guidelines)** or **[List](link-to-list-guidelines)**: Components where bulk actions are typically applied.
*   **[Confirmation Dialog](link-to-confirmation-dialog-guidelines)**: For confirming destructive actions.