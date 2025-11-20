---
title: Product vocabulary
category: CONTENT
url: https://design.ignitionapp.com/25ddf264c/p/2945260
scraped: 2025-11-16T03:48:34.447Z
---

# Product vocabulary
## Overview
This document outlines the standard product vocabulary and terminology to be used across all product interfaces and documentation. Consistent language ensures clarity, reduces ambiguity, and provides a unified experience for users, making the product easier to understand and use.

## Usage Guidelines

### Action Language

This section defines the standard verbs and phrases to describe user actions within the product.

#### Add Actions

| Term        | Meaning                                                     | Example                                   |
| :---------- | :---------------------------------------------------------- | :---------------------------------------- |
| Add \*      | Add something existing to a container or record.            | Add service (to a proposal)               |
| Create \*   | Create something from scratch. Like an item or record.      | Create proposal<br>Create template        |
| Duplicate   | Create a copy of something existing.                        | Duplicate proposal                        |
| New (adjective) | Use in place of "Create" on index pages when the action creates a new record. Use as an adjective and follow with a noun. Include a `+` symbol to imply creating. | `+ New proposal`<br>`+ New client`<br>`+ New template` |

#### Modify Actions

| Term      | Meaning                                                     | Example                          |
| :-------- | :---------------------------------------------------------- | :------------------------------- |
| Change    | Change from one thing to another                            | Change payment method            |
| Edit      | Modify an existing item or record                           | Edit service                     |
| Mark as... | Change the status of something                              | Mark as lost                     |
| Save      | Keep the changes made to an existing item, record or setting. | Save changes (to settings)       |

#### Delete Actions

| Term    | Meaning                                                                 | Example                           |
| :------ | :---------------------------------------------------------------------- | :-------------------------------- |
| Archive | Move an item from an active state to an inactive state. The record still exists in the system. | Archive client                    |
| Cancel  | Don't continue                                                          | Cancel subscription               |
| Delete  | Permanently erase an item or record. It can no longer be accessed by the customer. | Delete proposal                   |
| Discard | Exit and don't save.                                                    | Discard changes                   |
| Revoke  | Cancel a proposal or contract, take back                                | Revoke proposal                   |
| Remove  | Erase an item or record from a container, but not from the database.    | Remove service (from a proposal)  |

#### Other Actions

| Term      | Meaning                                                                 | Example                                    |
| :-------- | :---------------------------------------------------------------------- | :----------------------------------------- |
| Import    | Transfer data from one software into another. Import is typically one-off and requires a user to initiate. | Import clients                             |
| Sync      | Make data in two locations the same. Sync typically happens on a regular basis and can be automatic. | Sync clients                               |
| Export    | Extract data from the software and convert it into a data file of a different format. | Export CSV                                 |
| Download  | Save a file from the web to your computer.                              | Download PDF                               |
| View      | Navigate to somewhere. No action required.                              | View billing schedule                      |
| Schedule  | Arrange for an action to automatically take place at a set time in the future. | Schedule payment collection<br>Schedule invoice |

### Payments

This section defines terminology related to payments, including collections, payouts, and payment methods.

#### Collections and Payouts Terminology

| Term        | Part of speech   | Meaning                                                                     |
| :---------- | :--------------- | :-------------------------------------------------------------------------- |
| Collection  | Noun             | Payment that has been taken from a client's bank account.                   |
| Collecting  | Verb present     | Used to describe a payment that is in the process of being taken from a client's bank account. |
| Collected   | Verb past        | The payment has been successfully taken from a client's bank account.       |
| Payouts     | Noun             | Money we've paid to the customer after collecting it from their clients.    |
| Paying out  | Verb present     | Money in the process of being sent to the customer's bank account           |
| Paid out    | Verb past        | We've successfully sent the collected amount to the customer's bank account. |

#### Payment Details Format

This defines the standardized format for displaying payment methods in the user interface.

| Payment method                    | Format                                            | Example               |
| :-------------------------------- | :------------------------------------------------ | :-------------------- |
| Credit/debit card                 | `[CARD PROVIDER] •••• [Last 4 digits of card no.]` | VISA •••• 4242        |
| Direct debit<br>ACH transfer<br>Pre-authorized debit | `[BANK NAME] •••• [Last 4 digits of account no.]` | UNITED BANK •••• 5004 |

#### Payment Methods by Country

This table lists the common payment methods available per country.

| Country     | Payment method          |
| :---------- | :---------------------- |
| ALL         | Credit/debit card       |
| Australia   | Direct Debit            |
| New Zealand | Direct Debit            |
| UK          | Bacs Direct Debit       |
| Canada      | Pre-Authorized Debit (PAD) |
| US          | ACH Transfer            |

### Products and Features

This section defines specific terminology related to product features.

#### Renewal Terminology

| Term            | Type        | Definition                                                                  |
| :-------------- | :---------- | :-------------------------------------------------------------------------- |
| Renew           | Verb, present | To create a proposal with renewal services                                  |
| Renewed         | Verb, past  | A proposal with renewal services has been created.                          |
| Renewal         | Noun        | A proposal that contains renewal services                                   |
| Renewal service | Adjective, noun | A service that is continuing beyond the original proposal and has been included in a renewal. |

## Best Practices

### People Terminology: Client vs. Customer

This guidance helps distinguish between "client" and "customer" in product messaging.

| Do                                                                       | Don't                                                                                                                                   |
| :----------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| You’re about to cancel this payment collection.                          | The customer is about to cancel this payment collection. If the customer changes their mind, they'll need to reschedule it.           |
| Ignition customers save on average over 18 hours per week.               | Ignition clients save on average over 18 hours per week.                                                                                |

### Ignition Payments Terminology

| Do                                                                             | Don't                                                                                       |
| :----------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------ |
| Collect payments automatically when you set up payments in Ignition            | Collect payments automatically with Ignition Payments                                       |
| When you collect payments through Ignition, we'll automatically reconcile payment for you. | When you enable Ignition Payment, we'll automatically reconcile payment for you.            |

### Billing vs. Invoicing

Use this guidance to differentiate between "billing" and "invoicing" consistently to ensure clear communication regarding financial processes.

*   Use **invoicing** to describe the task of creating and sending invoices.
*   Use **billing** when referring to the broader process of managing money the customer is owed.
*   Use **invoice (noun)** when referring to the document you send to a client to request payment.
*   Use **bill (noun)** when referring to the document showing what the customer owes.

#### Specific Usage Guidelines

| Do                                                                                                                                     | Don't                                                                                                                                                                                          |
| :------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Use "invoice" if the money is owed to the customer (income).                                                                           | Don't use "bill" and "invoice" (noun) interchangeably.                                                                                                                                        |
| Use specific, descriptive actions like “Create invoice” or “Send invoice” so users immediately understand what will happen.            | Avoid "Bill" and "Invoice" in verb-form (e.g., "Bill client" or "Invoice now"). The best practice for button labels is to clearly communicate what will happen next.                           |
| Use "Billing" for pre-invoice setup and configurations. For example: Billing mode, Billing rule, Billable job, Billing item.             | Use "bill" for money the customer owes (expense).                                                                                                                                              |
| Use the same format for payment details in activity logs as defined in the [Payment Details Format](#payment-details-format) section. |                                                                                                                                                                                                |

## Related Components

*   **Buttons**: Refer to guidelines for action labels, especially for `Cancel`, in the [Buttons](link-to-buttons-guideline) documentation.