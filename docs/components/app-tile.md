---
title: App Tile
category: Components
url: https://design.ignitionapp.com/25ddf264c/p/5461386
scraped: 2025-11-16T03:14:15.601Z
---

# App Tile
```markdown
## Overview

The `App Tile` component provides a standardized visual representation for individual applications within the system. It is designed to display essential app information and facilitate interaction, such as connecting to, importing from, or managing an app.

```
App Tiles
```

## Anatomy

An App Tile is composed of the following visual elements:

*   **Container**: The primary bounding box for the tile.
*   **App logo**: The visual identifier of the application.
*   **App name**: The name of the application.
*   **Description**: Optional text, often displaying an associated account name or additional context.
*   **Badge (optional)**: Used to indicate the app's connection status (e.g., connected, has error).
*   **Icon (optional)**: Used to indicate the app's availability status (e.g., feature gated, unavailable while another app is connected).

## Usage Guidelines

App Tiles are used in specific contexts to present and interact with applications.

```
App tile
```

**Where to use App Tiles:**

*   On the "Apps" page.
*   Within the "NPE > Client select dropdown" when syncing from an app.
*   In "Select an app" modals:
    *   During NPE (New Partner Experience): Client select dropdown.
    *   On the Clients page: 'Import' functionality.

## Behaviour

### States

App Tiles can exist in various states, driven by their connection status, authorization, and availability.

| Property              | Description                                                                 |
| :-------------------- | :-------------------------------------------------------------------------- |
| **Default**           | The standard appearance when no specific state is active.                   |
| **Hover**             | The appearance when a user's cursor is over the tile.                       |
| `isAuthorised`        | Indicates the app can be connected.                                         |
| `isAuthorised, showDescription` | Indicates the app can be connected and displays a description (e.g., account name). |
| `isAvailable=no`      | Indicates the app cannot be connected. A tooltip should appear on hover to explain the reason. |
| `isEnabled`           | Indicates the app is currently connected.                                   |
| `isError`             | Indicates a connection error (i.e., the app was previously connected but now has an issue). |
| `showPremiumBanner`   | Indicates the app is feature-gated (not available for connection until the user subscribes to a higher plan). |

### Interactions

*   **On Hover**: The tile should display a shadow/elevation effect.
*   **Click/Select**: Triggers the opening of a related drawer, providing more details or actions for the app.

### Styling

App Tiles inherit styles from the `Card` component with the following modifications:

*   **Width/Height**: Fixed, in an (N*N) aspect ratio (e.g., square).
*   **Justify Content**: Centered within the tile.
*   **On Hover**: Shadow/elevation effect as described in Interactions.

## Variants

### Zapier Workflow App Tiles

*   **Size**: Smaller than default App Tiles.
*   **Content**: Do not include a description or app status/availability information (badges/icons).
*   **Usage**: Currently only displayed on the "Apps" page in a separate section dedicated to Zapier workflow apps.

### "Request App" Tile

*   **Purpose**: Allows users to request a new app they would like Ignition to add to its ecosystem.
*   **Interaction**: Rather than triggering a drawer, clicking this tile triggers the Intercom widget for user feedback.

## Spacing and Sizing

*   **Width/Height**: Fixed, square dimensions (N*N).

## Related Components

*   **Card**: The `App Tile` component uses `Card` as its base component and inherits its styles with specific modifications.
```