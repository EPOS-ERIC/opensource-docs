---
id: backoffice-user-guide
title: How to use the Backoffice
---

# EPOS Backoffice

Use the Backoffice to create, update, review, and publish metadata in an EPOS Platform instance without editing TTL files by hand. This guide focuses on the day-to-day editing process for editors and other content managers. For lifecycle diagrams, roles, and the full permission model, see the [Backoffice Service](../system-reference/services/backoffice.md) reference.

## What the Backoffice is

The Backoffice is the metadata management interface for your EPOS Platform instance. It is tightly integrated with the Platform and lets authorized users manage catalogue entries through a graphical interface instead of manually maintaining [EPOS-DCAT-AP](../system-reference/data-formats/dcat-ap.md) metadata files.

If you want more background on the underlying metadata model, see:

- [Describing Your Data](./describing-data.md) for the manual TTL approach
- [Data Model](../system-reference/data-model.md) for how entities relate to each other
- [Glossary](../system-reference/glossary.md) for short definitions of EPOS terms

## Before you begin

- The Backoffice is usually available at `/backoffice/home` on your deployed EPOS Platform instance. For example: `https://www.ics-c.epos-eu.org/backoffice/home`.
- You need a deployed environment, a valid user account, and permission to work on the records you want to manage.
- If you still need a local or test deployment, start from the [Quickstart](../quickstart/index.md).

## Get access to edit

Logging in is required, but logging in alone does not automatically give you editing rights. In the Backoffice, your access depends on:

- your role, which defines what actions you can perform
- your group membership, which defines which records you can work on

If you can log in but cannot edit anything, open the **Groups** page from the sidebar and request access to the relevant group.

![Groups Page](/img/backoffice-user-guide/groups.png)

After an administrator accepts your request, your role will determine what you can do inside that group. In practice:

- **Editor** users create and update drafts, then submit them for review
- **Reviewer** users approve or discard submitted drafts
- **Admin** users can manage all data and users

For the complete role and permission matrix, see the [Backoffice Service](../system-reference/services/backoffice.md) page.

## Understand the main sections

The left sidebar groups the main entity types you can manage:

- **Data Products**
- **Distribution**
- **Software Applications**
- **Software Source Codes**

For first-time users, the two most important terms are:

- **Data Product**: A conceptual entity that represents the information published.
- **Distribution**: A physical embodiment of the Data Product in a particular format.

A Data Product can be made available by one or more Distributions. On the Platform, the Distribution is often the part users notice most, because it is what appears as the service entry they open and interact with.

![Distribution on the Platform](/img/backoffice-user-guide/data-portal-distribution-card.jpeg)

This guide uses the Distribution editing process as the main example because it is one of the most common editing tasks.

## Update an existing service

### 1. Open the Distribution list

From the Backoffice home page, open the **Distribution** section.

![Distribution Button](/img/backoffice-user-guide/backoffice-homepage-distribution-button.png)

### 2. Find the record you want to update

The list shows the Distributions you are allowed to access based on your groups and role. It typically includes information such as the **Title**, **Last Change**, **Status** and **Author**.

![Distribution List](/img/backoffice-user-guide/distribution-list-all-services.png)

The status tells you where the record is in the publication process:

| Status      | What it means for you            |
| ----------- | -------------------------------- |
| `DRAFT`     | Editable working copy            |
| `SUBMITTED` | Waiting for review               |
| `PUBLISHED` | Publicly visible on the Platform |
| `DISCARDED` | Sent back for changes            |
| `ARCHIVED`  | Older version kept for history   |

### 3. Open the record and create a draft if needed

Select the record from the table that you want to edit.

![Data Product Sections](/img/backoffice-user-guide/data-product-general-information.png)

:::info
When you click a Distribution record from the table, the Backoffice may first open the parent Data Product page. This is expected: the Distribution belongs to that Data Product. Use the internal sidebar to move between the general Data Product sections and the specific Distribution sections.
:::

If the selected record is already published, create a new draft before editing. This copies the current published Data Product and its Distributions into an editable working version.

![Create a Draft](/img/backoffice-user-guide/create-new-draft-button.png)

### 4. Edit the draft

Use the page sidebar on the left to move through the available sections and update the fields you need.

- Update **Data Product** fields when you are changing the main catalogue information for the record.
- Update **Distribution** fields when you are changing the concrete service details that users interact with in the Platform.

To see which fields in the Backoffice interface map to which EPOS-DCAT-AP entity, you can reference the [Data Model](../system-reference/data-model.md) and [EPOS-DCAT-AP](../system-reference/data-formats/dcat-ap.md) references.

### 5. Save every section you change

:::danger[Save after each change]
**Pay attention**: saving is one of the most important parts of the Backoffice editing process. When you edit a section, make sure you click the relevant save button for that section. Depending on where you are working, you may need to save both the Data Product and the Distribution changes separately.

If you move away from a section without saving, your latest edits may not be stored.

**When in doubt, save everything you can before moving on.**
:::

![Save Buttons](/img/backoffice-user-guide/save-data-product-and-distribution-buttons.jpg)

### 6. Preview your changes on the Platform

After saving, go to the main Platform interface and log in with the same account. When you log in with your Backoffice account you should see a dialog come up asking you if you want to enable the **Metadata Preview** mode. Turn it on to inspect your drafts before they are published.

![Draft on the Platform](/img/backoffice-user-guide/data-portal-metadata-preview-draft.png)

This mode lets you see the records you have permission to access, including drafts, instead of only the currently published catalogue entries. It is the fastest way to check whether your title, description, and service details look right in the user-facing interface.

![Platform Backoffice Mapping](/img/backoffice-user-guide/backoffice-gui-mapping.png)

For more context on the main Platform interface, see [How to explore the Platform interface](./platform-usage/explore-platform-interface.md).


### 7. Submit the draft for review

When you are satisfied with the result, return to the Backoffice and click **Submit**.

![Submit Button](/img/backoffice-user-guide/submit-button.png)

Submitting does not publish the record immediately. It sends the draft to the users responsible for review in your deployment, often reviewers or metadata curators.

![Review Request Email](/img/backoffice-user-guide/review-request-email.png)

If the draft is approved, it becomes the new published version. If it is discarded, you can update it again and submit a new revision.

## Create a new entry instead of updating an existing one

To create a new Data Product from scratch you can use the **Add New Data Product** button in both the **Distributions** or **Data Product** sections. You only have to start from scratch if you want to create a new **Data Product**, if you just want to create a new **Distribution** but not a new **Data Product** you can just select an existing **Data Product** and add the new **Distribution** there.

![Create or Modify from the Distribution List](/img/backoffice-user-guide/distribution-list-create-or-modify.png)

If you are creating a new **Data Product** from scratch, the same process applies after the draft exists:

1. fill in the **Data Product** details
2. add and complete the related **Distribution** details
3. save each section you changed
4. preview the result on the Platform
5. submit the draft for review

## Common mistakes

- Forgetting to save the current section before moving on
- Editing Data Product fields when you meant to change Distribution fields, or the other way around
- Expecting a draft to become public before it has been reviewed and published
- Having the right role but not belonging to the group that owns the record
- Trying to understand a field only from its domain-specific name instead of checking the linked reference pages

## Need the technical details?

Use this guide for the day-to-day editing process, then switch to the technical pages when you need deeper background:

- [Backoffice Service](../system-reference/services/backoffice.md) for lifecycle, permissions, and service behavior
- [Data Model](../system-reference/data-model.md) for entity relationships
- [EPOS-DCAT-AP](../system-reference/data-formats/dcat-ap.md) for the metadata standard behind the interface
