---
title: Drop zone
category: Components
url: https://design.ignitionapp.com/25ddf264c/p/4963959
scraped: 2025-11-16T03:32:29.586Z
---

# Drop zone
```markdown
## Overview
The Drop zone component provides an interactive area for users to upload files. It supports both drag-and-drop functionality and traditional file selection via a button. This component clearly communicates various states, from empty to uploaded, and provides feedback on file type and size validation.

## Usage Guidelines

### When to Use
The Drop zone is suitable for scenarios requiring file uploads, adapting its display based on the file type and whether a visual representation of the uploaded file is needed.

*   **Uploading Images (Displaying Image):** Use when the uploaded image needs to be immediately visible within the component after selection.
*   **Uploading Images (Not Displaying Image):** Use when the image upload is primarily for data processing or backend storage, and a visual preview is not required within the component itself.
*   **Uploading CSVs:** Ideal for bulk data import scenarios where users need to upload structured data files.

## Anatomy

The Drop zone component comprises several key visual elements:

*   **Select File Button:** An interactive element that, when clicked, opens the system's file browser to allow users to select files.
*   **Empty State:** The default appearance of the drop zone when no file has been uploaded or is currently being processed.
*   **Uploaded File Display:** An area within the component dedicated to displaying a representation of the uploaded file, such as an image thumbnail or a file icon with its name.
*   **Drop Zone Area:** The primary interactive region where users can drag and drop files to initiate an upload.

## Variants

The Drop zone can have specific visual or behavioral modifications depending on its context.

*   **Avatar Upload:** In this variant, the drop zone does not display an empty state. It typically implies a default avatar or a placeholder is present, which is replaced upon file selection.

## States

The Drop zone component transitions through various states to communicate its status to the user.

*   **Default:** The standard, inactive state of the component before any interaction or file upload.
*   **Hover with item to drop:** The state activated when a user drags a file over the drop zone area, indicating that the file can be dropped to initiate an upload.
*   **Uploaded:** The state displayed after a file has been successfully uploaded and is ready for further action or review.

## Interactions

The component provides clear feedback in response to user actions and system processes.

*   **Dragging and Dropping a File:** When a file is successfully dragged and dropped into the zone, the component should display the actual size or a preview of the file.
*   **Choosing File:** The action of selecting a file via the "Select file" button and the subsequent file browser dialog.
*   **Error:** Feedback displayed to the user when an attempt is made to upload an unsupported file type or a file that exceeds size limits.
*   **Success Feedback:** A visual confirmation or message indicating that a file has been successfully uploaded.

## Properties

The functionality of the Drop zone can be configured through several properties, often related to validation and acceptance criteria.

| Property          | Type       | Description                                                                 | Default |
| :---------------- | :--------- | :-------------------------------------------------------------------------- | :------ |
| `acceptedFileTypes` | `string[]` | An array of file extensions (e.g., `['.jpg', '.png']`) or MIME types (e.g., `['image/jpeg', 'image/png']`) that are permitted for upload. | `null`    |
| `maxFileSize`     | `number`   | The maximum allowable size for an uploaded file, typically specified in bytes. | `null`    |

## Best Practices

### Do's
*   **File Removal:** Always provide a clear and accessible way for users to remove an uploaded file from the drop zone. This could be a delete icon, a "remove" button, or an option to replace.

### Don'ts
*   **Omission of File Details:** Do not forget to clearly list the accepted file types and the maximum file size that are permitted for upload. This prevents user frustration from failed uploads.
```