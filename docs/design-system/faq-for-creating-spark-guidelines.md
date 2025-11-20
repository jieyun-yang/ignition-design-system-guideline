---
title: FAQ for creating Spark guidelines 
category: Design system
url: https://design.ignitionapp.com/25ddf264c/p/4612642
scraped: 2025-11-16T03:07:18.690Z
---

# FAQ for creating Spark guidelines 
Here is the well-structured, comprehensive markdown documentation, optimized for LLM consumption:

## Overview

This document provides a set of frequently asked questions (FAQs) and guidelines for creating and updating design system documentation within Spark. It outlines the processes for contributing, key considerations for documenting components, and collaborative efforts between design and frontend engineering teams.

## Contributing Guidelines

### Process for Updating Guidelines

The following steps outline the process for updating existing design system guidelines:

1.  **Track**: Indicate which component you are currently working on in the Design System (DS) audit.
2.  **Create**: Utilize the provided component template to draft the initial version of the guidelines.
3.  **Get Feedback**:
    *   Gather asynchronous and in-person design feedback via the `#design` channel and Friday DS sparring sessions.
    *   Obtain input and feedback from Frontend (FE) engineers via the `#devsigners` channel.
4.  **Finalise**:
    *   Achieve alignment on critical anatomy, usage, and behavioral guidelines.
    *   Update relevant documentation in Spark and Figma.
    *   Secure final design and FE approval ("thumbs up") on the updated guidelines.
5.  **Communicate**: Publish the updates to live documentation and announce them in both `#design` and `#devsigners` channels.

### How Frontend Engineers Can Help Designers Document

Frontend Engineers play a crucial role in ensuring the accuracy and completeness of design system documentation:

*   **Document What Is**: Ensure that the documentation reflects the current state of components, not proposed or future behavior.
*   **Correct Inaccuracies**: Inform designers if any documented information is incorrect or misleading.
*   **Identify Missing Information**: Highlight any important details or considerations that have been overlooked in the documentation.
*   **Share FE Use Cases/Considerations**: Provide insights into use cases or technical considerations from an FE perspective (e.g., "Use `Load more` variant when the API returns an entire list").

### What Frontend Engineers Don't Have to Worry About

Content not provided in the original extract.

## Documentation Principles & Considerations

### What Should Be Documented?

Content not provided in the original extract.

### Should I Document Future State Behaviour?

Content not provided in the original extract.

### Should I Document Inconsistencies?

Content not provided in the original extract.

### When Should I Stop Documenting?

Content not provided in the original extract.

### Key Considerations for Component Updates

When making changes to existing components or documenting their behavior, consider the following scenarios and requirements:

*   **Multiline Text**: How does the component handle multiline text within its elements?
*   **Simultaneous Prop/Content Visibility**: What is the layout and behavior when all properties and contents are visible at once?
    *   *Example*: For an accordion component, what does the layout look like if the title, subtitle, badge, and stepper are all visible simultaneously?
*   **Responsiveness for Large Components**: How does a very large component behave and adapt in smaller screen spaces or constrained layouts?
*   **Consistent Focus Style**: Ensure the component utilizes a consistent focus style across the system, avoiding standalone or custom focus styling.

## Best Practices & Accessibility

### Consistent Focus Style

All components must use a consistent focus style as defined by the design system. Avoid applying standalone or custom styling for focus states to ensure predictability and accessibility across the product.