---
sidebar_position: 1
id: backoffice
title: Backoffice Service
---

import MermaidFullscreen from '@site/src/components/MermaidFullScreen';

# Backoffice Service

![Backoffice Interface](/img/backoffice.png)

The Backoffice Service is a web-based interface designed to provide intuitive and comprehensive management of the EPOS Platform's metadata. It works in conjunction with a dedicated backend service to streamline the process of curating and maintaining service descriptions within your data catalogue.

## Why the Backoffice?

Previously, managing metadata involved manual editing of complex Turtle files, a process prone to errors and requiring significant technical expertise. The Backoffice was developed to overcome these challenges by:

*   **Simplifying Metadata Management:** Eliminating the need for direct interaction with Turtle files or the EPOS-DCAT-AP specification.
*   **Enabling Direct Manipulation:** Allowing users to create, edit, and publish EPOS Data Model Entities (service descriptions) directly through a user-friendly graphical interface.
*   **Streamlining Updates:** Facilitating immediate reflection of approved changes in the main Platform GUI, without requiring full application redeployments.
*   **Ensuring Data Integrity:** Reducing human error through an intuitive interface and built-in validation, while exploiting Git version control for tracking changes.

## Key Features

The Backoffice provides a robust set of features for metadata administration:

*   **Graphical Metadata Editor:** Create, edit, and delete service descriptions using an intuitive web interface.
*   **Metadata Versioning:** Leverage Git-like version control to track all changes to metadata entities.
*   **Secure Access Control:** Implement a robust model of groups, users, and roles to manage permissions for metadata operations.
*   **Metadata Workflow:** Manage metadata through a defined lifecycle (Draft, Submitted, Discarded, Published, Archived) with review and approval processes.
*   **Metadata Preview:** Review changes in a dedicated preview section before they are published to the main Platform GUI.

## Metadata Workflow and Entity Lifecycle

The Backoffice introduces a structured workflow for managing metadata entities, ensuring quality control and traceability. Each metadata instance progresses through a defined lifecycle:

### Possible Statuses

*   **Draft:** The instance has been edited but not yet submitted for review. It can be freely edited or removed.
*   **Submitted:** The instance has been submitted and is awaiting approval to be published.
*   **Discarded:** The instance has not been approved by a reviewer and needs further editing. An editor can create a new draft from this state.
*   **Published:** The instance is public and visible in the production EPOS Platform.
*   **Archived:** The instance is no longer actively used but is retained for historical purposes, allowing for potential rollbacks.

### Life Cycle of an Entity

<MermaidFullscreen
title="Entity Lifecycle"
chart={`
flowchart LR
    A[DRAFT] --> B[SUBMITTED] --> C[PUBLISHED] --> D[ARCHIVED]
    
    classDef draft fill:#FFD700,stroke:#333,stroke-width:2px,color:#000
    classDef submitted fill:#FF8C00,stroke:#333,stroke-width:2px,color:#000
    classDef published fill:#228B22,stroke:#333,stroke-width:2px,color:#fff
    classDef archived fill:#A9A9A9,stroke:#333,stroke-width:2px,color:#000
    
    class A draft
    class B submitted
    class C published
    class D archived
`}
/>

1.  **Drafting:** An editor drafts a new entity or edits an existing one. (DRAFT state)
2.  **Submission:** When the editor is satisfied, they submit the entity for review. (SUBMITTED state)
3.  **Review and Publication:** A reviewer checks the submitted instance. If approved, the changes are published (PUBLISHED state), and the previously published version is moved to ARCHIVED state.
4.  **Discarding:** If the reviewer disapproves, the changes are discarded (DISCARDED state). An editor can then create a new draft from this discarded version.

<MermaidFullscreen
title="Metadata Approval Flow"
chart={`
flowchart TD
    A[DRAFT] --> |The editor submit the draft| B[SUBMITTED]
    B --> |The reviewer approve a submitted instance| C[PUBLISHED]
    B --> |The reviewer discard a submitted instance| D[DISCARDED]
    D --> |The editor decide to edit again a discarded instance| A
    C --> |The old published instance is archived| E[ARCHIVED]
`}
/>

## Access Control and Roles

The Backoffice implements a granular access control system based on users, roles, and user groups to ensure secure and structured metadata management.

### Roles

Every user interacting with the system is assigned a role, defining their permissions:

*   **Viewer:** Can only view information without modification rights. Allowed to see drafted, submitted, discarded, and archived data within their assigned groups.
*   **Editor:** Can edit metadata, create new drafts, and remove their own drafts. Operations are restricted to data within their assigned user groups.
*   **Reviewer:** Can approve or disapprove submitted instances. Allowed to make changes only to data within their assigned user groups.
*   **Admin:** Has full administrative privileges, capable of performing all actions across the system.

### User Groups

Roles define *what* a user can do, while user groups define *on which data* a user can operate with a specific role.

*   Each metadata instance belongs to at least one user group.
*   Only users who belong to the same user group as an instance can operate on it. For example, a user group can correspond to a TCS (Thematic Core Service), allowing only users from that TCS to modify its entities.

### Permission Matrix

| External User | View | Draft | Submit | Publish | Discard |
|---------------|------|-------|--------|---------|---------|
| Viewer        | ✓ |   |        |         |         |
| Editor        | ✓ | ✓ | ✓      |         |         |
| Reviewer      | ✓ |   |        | ✓       | ✓       |
| Admin         | ✓ | ✓ | ✓      | ✓       | ✓       |

{/* TODO: Add a detailed permission matrix table here, outlining which roles can perform which actions on entities in different states. */}

## Accessing the Backoffice

{/* TODO: Provide instructions on how to access the Backoffice interface, including the URL and any login procedures. */}

## Benefits

By centralizing and simplifying metadata management, the Backoffice significantly enhances the usability and maintainability of the EPOS Platform for both data providers and administrators. It promotes a more agile and collaborative approach to data curation, ensuring that your data catalogue remains accurate and up-to-date with minimal effort.
