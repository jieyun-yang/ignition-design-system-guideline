---
title: Icons
category: Foundations
url: https://design.ignitionapp.com/25ddf264c/p/2946201
scraped: 2025-11-16T03:43:29.721Z
---

# Icons
## Overview

Icons are fundamental visual elements used to represent actions, features, statuses, and navigation within the design system. This guideline provides principles for consistent icon selection, appropriate usage based on context and visual weight, and specific recommendations for various categories of interactive elements and data representation to ensure clarity and user recognition across all product interfaces.

## Usage Guidelines

Icons serve as intuitive visual cues, enhancing user comprehension and interaction. Their application should be deliberate, aligning with established patterns for actions, states, and navigational elements.

### Icon Weight

The visual weight of an icon refers to the thickness of its strokes, which should be selected based on its context and size to maintain visual hierarchy and balance.

| Weight   | Description                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Regular  | Our default icon weight.                                                                                                                                                                                                                                                                                                                                                                                                              |
| Light    | Light icons are used for menu items, or when the icon size is > 14pt.                                                                                                                                                                                                                                                                                                                                                                 |
| Solid    | Used for prominence when on white, specifically with Toasts.                                                                                                                                                                                                                                                                                                                                                                          |

### Icon Selection by Context

Icons are categorized by the type of action, concept, or data they represent to ensure a consistent and recognizable visual language across the product.

#### Content Management

| Concept/Action            | Description                                                               | Recommended Icon       |
| :------------------------ | :------------------------------------------------------------------------ | :--------------------- |
| Add                       | Create a new item, or add an existing item to a set or grouping e.g. add service to proposal | Plus                   |
| Edit                      | Modify details an existing item e.g. edit client details                  | Pencil                 |
| Remove                    | Remove an existing item from a set or grouping without destroying it e.g. remove service from a proposal. | Minus                  |
| Delete                    | Deleting an existing item making it unavailable to the user               | Trash                  |
| Approve                   | Approve an item                                                           | square-check           |
| Request via Comment/note  | Request action, leave a note                                              | comment-lines          |
| Set as a positive state/Accept | Set an item as positive tag (e.g Default, Paid etc) or accept a process   | Check                  |
| Cancel/End/Lost           | Officially cancel a process or set item as negative tag                   | circle-xmark           |
| Revoke/Undo               | Undo an action or process                                                 | rotate-left            |
| Schedule/Reschedule       | Set a time for an action to happen                                        | calendar-lines-pen     |
| Reassign                  | Reassign                                                                  | arrow-turn-down-right  |
| Re-do a process           | Refresh, Retry etc.                                                       | rotate-right           |
| Move                      | Move items or or statuses (Move to awaiting)                              | arrow-right-long       |

#### Progressive Disclosure

| Concept/Action | Description                       | Recommended Icon | Notes                                                |
| :------------- | :-------------------------------- | :--------------- | :--------------------------------------------------- |
| Close          | Dismiss or exit a UI element      | xmark            |                                                      |
| Expand         | Show additional content.          | Chevron-down     | Currently also uses '+' and needs to be replaced.    |
| Contract       | Hide content e.g. using an accordion. | Chevron-up       | Currently also uses '-' and needs to be replaced.    |

#### Connectivity

| Concept/Action | Description                                                               | Recommended Icon                   | Notes              |
| :------------- | :------------------------------------------------------------------------ | :--------------------------------- | :----------------- |
| Import         | Add items or data from an external source e.g. import clients from ledger | arrow-down-to-line                 |                    |
| Export         | Share items or data with an external source                               | arrow-up-from-line                 |                    |
| Connect        | Integrate an external system for ongoing data sharing                     | plug                               | Not currently used. |
| Map to         | Finds an existing item can be added to from an external system            | arrow-down-left-and-arrow-up-right-to-center |                    |
| Convert to     | Adds an item to the system                                                | plus                               |                    |

#### Content Manipulation

| Concept/Action  | Description                                                               | Recommended Icon       |
| :-------------- | :------------------------------------------------------------------------ | :--------------------- |
| Search          | Enter a keyword to retrieve relevant results                              | magnifying-glass       |
| Filter          | Refine and narrow content based on specific criteria e.g. filter proposals by status | bars-filter            |
| Sort up         | Order content based on a specific attribute e.g. Sort clients alphabetically | sort-up                |
| Sort down       | Order content based on a specific attribute e.g. Sort clients alphabetically | sort-down              |
| Copy/Duplicate  | Copy selected content to clipboard e.g. share URL, or copy and create item e.g. duplicate proposal template | copy                   |
| Move            | Reorder an item within a list to a different position                     | grip-dots-vertical     |
| Save or use     | Save the current state of an item or dataset or use/select and item in a process | check                  |
| Recommended     | Mark as recommended e.g. proposal option                                  | star                   |

#### Preview and Sharing

| Concept/Action  | Description                                                               | Recommended Icon         |
| :-------------- | :------------------------------------------------------------------------ | :----------------------- |
| Preview/View    | View content before it is finalised or go to an area                      | arrow-up-right-from-square |
| Send/Resend/Request | Deliver content to a client                                               | paper-plane              |
| Share           | Provide a way for the user to send content to someone                     | share-nodes              |
| Share link      | Create a link to share an item with someone                               | link                     |

#### Archive and Restoration

| Concept/Action | Description                                   | Recommended Icon | Notes              |
| :------------- | :-------------------------------------------- | :--------------- | :----------------- |
| Archive        | Put away an item or object without destroying it | box-archive      |                    |
| Restore        | Return an archived item or object             | rotate-left      | Not currently used. |

#### Primary Navigation

| Concept/Action | Description                       | Recommended Icon |
| :------------- | :-------------------------------- | :--------------- |
| Get started    | Onboarding task list              | Spark            |
| Dashboard      | Overview performance metrics      | chart-simple     |
| Pipeline       | Pre and post acceptance proposals | diagram-cells    |
| Clients        | Client management                 | user-group       |
| Payments       | Collections and customer payouts  | credit-card      |
| Services       | Inventory of services             | list             |
| Templates      | Proposal and component templates  | files            |
| Apps           | 3rd party apps                    | grid-2           |
| Settings       | Genera settings, user permissions and feature flags | gear             |
| Help           | Support centre, opened in new tab | circle-question  |
| Mobile menu    | Show menu on tap                  | bars             |

#### Navigation Actions

| Concept/Action | Description                       | Recommended Icon |
| :------------- | :-------------------------------- | :--------------- |
| Next           | Go to next view or page in a sequence | chevron-right    |
| Previous       | Go to previous view/page in a sequence | chevron-left     |
| First          | Go to first view/page in a sequence | chevrons-left    |
| Last           | Go to last view/page in a sequence | chevrons-right   |
| Go to          | Navigate to a separate page       | arrow-up-right   |

#### Alerts

| Concept/Action | Description                                   | Recommended Icon    |
| :------------- | :-------------------------------------------- | :------------------ |
| Success        | Confirm a task or action was successful       | check-circle        |
| Warning        | Proceeding may have potentially destructive consequences | triangle-exclamation |
| Error          | User needs to take action to resolve an issue | square-exclamation  |
| Information    | Alert the user to important contextual information | info-circle         |

#### Status Indicators

| Concept/Action | Description                                                               | Recommended Icon   | Notes                                                               |
| :------------- | :------------------------------------------------------------------------ | :----------------- | :------------------------------------------------------------------ |
| In progress    | Task has begun but not yet complete.                                      | spinner            | Chakra spinner component used instead of a spinner icon in production. |
| Completed      | Task has been done                                                        | check-circle       | Same as Success alert icon.                                         |
| Failed         | Task was unsuccessful                                                     | square-exclamation |                                                                     |
| Disabled       | User cannot access task                                                   | ban                |                                                                     |

#### Tags | Proposal and Payments

| Concept/Action    | Description                           | Recommended Icon |
| :---------------- | :------------------------------------ | :--------------- |
| Renewal           | Proposal renewing a prior agreement   | arrows-retweet   |
| Payment not scheduled | Proposal renewing a prior agreement   | calendar-plus    |

#### Service Types

| Concept/Action | Description                 | Recommended Icon |
| :------------- | :-------------------------- | :--------------- |
| Recurring      | Services billed regularly   | calendar-clock   |
| One-off        | Services billed once        | calendar-day     |
| Deposit        | Services billed in two instalments | calendar-range   |

#### Payment Types

| Concept/Action | Description                     | Recommended Icon |
| :------------- | :------------------------------ | :--------------- |
| Credit card    | Credit card as a payment method | credit-card      |
| Direct debit   | Direct debit as a payment method | building-columns |

#### Feature Types

| Concept/Action                 | Description | Recommended Icon      |
| :----------------------------- | :---------- | :-------------------- |
| Service edits                  |             | list                  |
| Bulk proposal renewals         |             | timer                 |
| Integration with practice management |             | magic-wand-sparkles   |
| Multiple e-signatures          |             | user-group            |
| Business insights dashboard    |             | arrow-trend-up        |
| Branded emails                 |             | envelope              |

#### Activity Log

| Concept/Action    | Description                                       | Recommended Icon | Notes                                                 |
| :---------------- | :------------------------------------------------ | :--------------- | :---------------------------------------------------- |
| Creation          | Additive activity log record e.g. Invoice created manually | circle-plus      |                                                       |
| Proposal accepted | Proposal automatically accepted as signatories signed | circle-check     |                                                       |
| Failed or Warning | Activity has failed                               | circle-exclamation | Currently uses circle-x and needs to be updated for consistency. |

## Variants/States

Different icon variants are used in specific contexts, often influencing their size and weight to ensure visual harmony and functional clarity.

| Variant       | Description                                                                                                                                                                                                                                                                                                                       | Notes                                                                   |
| :------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------- |
| Card buttons  | Used when the icon is larger than the Body font size (14pt), where using anything heavier becomes too dominating on the page. Icons used at this size and weight typically provide visual affordance for Ignition-related concepts or actions, such as specific areas of the app or in-app functions.                                  |                                                                         |
| Refer button  | At the bottom of the app side-nav.                                                                                                                                                                                                                                                                                                | For consistency with other buttons, this icon should be updated to Regular weight. |

## Properties/Options

### Spacing/Sizing

*   **Light Icons:** Used when the icon size is greater than `14pt`.
*   **Card Buttons:** Icons are typically larger than the `14pt` body font size.

## Best Practices

To maintain consistency and usability, adhere to the following guidelines when using icons:

*   **Do:**
    *   Use icons that are widely recognizable to users based on common patterns in other products (e.g., a magnifying glass for 'Search').
*   **Don't:**
    *   Avoid using multiple different icons to represent variations of the same underlying concept (e.g., using different icons for 'Expand').
    *   Avoid icons that are visually unbalanced, as they can inadvertently draw too much attention or weighting to certain elements over others.
    *   Avoid using obscure or unfamiliar icons that may lead to user confusion or comprehension issues.