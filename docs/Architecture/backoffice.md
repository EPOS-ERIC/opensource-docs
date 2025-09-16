---
# sidebar_position: 1
id: backoffice
title: Backoffice
---

In the current release of the open-source EPOS Platform, the metadata description of web services is managed manually through Turtle files. Contributors are required to modify service descriptions using the EPOS-DCAT-AP extension of DCAT-AP. These metadata files are then ingested into the internal metadata database via the ingestor service, which provides an endpoint to add new metadata entries to the catalog.

This manual process presents several limitations that hinder both service integration and platform evolution:

- The ingestor service currently supports only the addition of metadata. It does not allow editing or deletion of existing records. As a result, modifying metadata requires a full redeployment of the application.

- Users must manually edit the EPOS-DCAT-AP descriptions. This task is complex due to the learning curve associated with the Turtle syntax, and it is prone to human error despite the availability of validation tools.

- Any modification to the metadata necessitates the deletion and reinitialization of the metadata database.

- Metadata management is conducted through a private GitLab repository. Users must submit changes via pull requests, which are reviewed manually by Metadata Curators. These curators test the updates in custom environments before approving them. Once accepted, changes are queued for inclusion in the next platform redeployment cycle.

To overcome these challenges, we have initiated the development of a new component within the EPOS Platform called the Backoffice. This web-based interface works in conjunction with a new backend service to enable direct manipulation of the metadata deployed in any given environment. The system incorporates a robust model of groups, users, and objects to ensure secure and structured metadata management.

Through the Backoffice interface, users can create, edit, and delete service descriptions using an intuitive graphical interface specifically designed for this purpose. This eliminates the need to interact directly with Turtle files or the EPOS-DCAT-AP specification. Once changes are made, they appear in a dedicated preview section of the portal, accessible only to authorized users. After verifying that the updates function correctly, users can submit them for review. Upon approval by a Metadata Curator, the changes are immediately reflected in the main portal without requiring a new ingestion cycle.

The development of the Backoffice and its supporting services is currently ongoing and in an advanced stage. We expect to deliver a first version in the staging environment by the end of June, allowing for testing and feedback from early users. A production release is planned for December, pending successful completion of the testing and review phases. When the service is deployed in production, we also plan to release the open-source version of the new application, which will include the full implementation of the Backoffice.

This modernized approach significantly simplifies metadata management for users and enables administrators to track changes in a continuous and streamlined manner. It removes the need for manual redeployments and supports a more agile and collaborative development process.
