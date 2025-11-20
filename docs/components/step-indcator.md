---
title: Step indcator
category: Components
url: https://design.ignitionapp.com/25ddf264c/p/7015518
scraped: 2025-11-16T03:09:19.599Z
---

# Step indcator
This document outlines the guidelines for using the **Step Indicator** component within the design system.

---

## Overview

The Step Indicator component visually guides users through a multi-step process, displaying their progress and the current step within a defined sequence. It helps users understand where they are in a journey, which steps they have completed, and what remains.

## Anatomy/Structure

A Step Indicator typically consists of:

*   **Step Indicator**: The primary visual element representing an individual step (e.g., a numbered circle, a distinct icon).
*   **Step Title**: Descriptive text accompanying the indicator, providing a concise explanation of the step's content or purpose.

## Variants/States

The Step Indicator component offers different variants based on the application context, and various states to reflect the user's progress through a sequence.

### In-app Variant

This variant is designed for general application interfaces. It supports the following states:

*   **Active**: Denotes the current step the user is on or interacting with.
*   **Completed**: Indicates a step that has been successfully finished or passed.
*   **Inactive**: Represents a future step that has not yet been started.
*   **Warning**: Highlights a step that requires immediate attention, has encountered an issue, or needs review.

### Client Portal Variant

This variant is specifically tailored for client portal interfaces. (Specific states for this variant are not detailed in the provided content but would typically align with similar progress tracking needs.)

## Usage Guidelines

Step Indicators are employed to break down complex processes into manageable parts, providing clear feedback on user progress. Use the Step Indicator in the following contexts:

*   **Onboarding tasks**: To guide new users through initial setup processes or introductory tours.
*   **Payments set up**: To illustrate the sequential stages involved in configuring payment methods or billing information.
*   **NPE (New Product Experience)**: To walk users through the introduction of new features, products, or significant updates.
*   **Client portal - proposal**: To track the status or various stages of a proposal within a client-facing portal, from drafting to approval.

## Properties/Options

The appearance and behavior of the Step Indicator are primarily determined by its variant and the current state of each step.

| Property    | Type     | Description                                                         | Default      |
| :---------- | :------- | :------------------------------------------------------------------ | :----------- |
| `variant`   | `string` | Defines the overall visual styling and context for the indicator.   | `in-app`     |
| `state`     | `string` | Represents the current status of an individual step.                | `inactive`   |
| `stepTitle` | `string` | The descriptive text displayed alongside the indicator for each step. | (Required)   |

#### Available `variant` values:

*   `in-app`
*   `client-portal`

#### Available `state` values (primarily for the `in-app` variant):

*   `active`
*   `completed`
*   `inactive`
*   `warning`

## Best Practices

(No explicit best practices were provided in the source content. However, general best practices for step indicators include ensuring clear and concise step titles, maintaining visual consistency, providing obvious feedback for the active step, and ensuring a logical progression.)

## Accessibility

(No specific accessibility considerations were provided in the source content. For robust accessibility, step indicators should typically leverage ARIA attributes to convey progress to assistive technologies, ensure sufficient color contrast, and support keyboard navigation.)

## Code Examples

(No code examples were provided in the source content.)

## Spacing/Sizing

(No specific spacing or sizing guidelines were provided in the source content.)

## Related Components

(No related components were explicitly mentioned in the source content.)