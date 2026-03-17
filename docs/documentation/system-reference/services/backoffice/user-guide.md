---
sidebar_position: 2
id: user-guide
title: How to use the Backoffice Service
---

# How to use the Backoffice

This guide will walk you through the process of modifying an existing service distribution or creating a completely new one using the Back Office Service. 

:::info[Note]
This guide follows the current EPOS Backoffice Service implementation.
:::

Starting from the **Home Page**, you will find an overview of your current workspace where you can safely manage and oversee your data products and their distributions.

![Home Page](/img/backoffice.png)

**1.**  To begin, navigate to the **Distribution** section by pressing the associated **Distribution** button.

    ![Distribution Button](/img/backoffice-UserGuide/Distribution-homepage.png)

     This section provides a comprehensive list of all the services that are currently available in the system.

     ![Distribution List](/img/backoffice-UserGuide/distribution-allServices.png)

    These services are visible on the EPOS Platform, where each row in the table is represented by a corresponding service card which contains all its details.

     ![distribution in platform](/img/backoffice-UserGuide/backoffice-dataPortalService.jpeg)


**2.**  From the distribution list, you have two options depending on your end goal:
    *   **Modify an existing service:** Simply look through the list provided and select the specific service that you wish to update or refine.
    *   **Create a new service:** If you need to set up a brand new distribution instead, locate and click on the **Add data product** button on this page.

    ![Add Data Product](/img/backoffice-UserGuide/chooseModifyorCreate.png)


**3.**  After selecting a service or choosing to create a new one, you will be taken to its details page. Here, you will find various distinct sections containing all the specific information and metadata related to the data product. 

    ![Data Product Sections](/img/backoffice-UserGuide/BO-DI-GeneralInformation.png)

    :::warning[NOTE]
    > To prevent accidental changes, these informational sections are initially set to **Viewer Mode**. This means all fields are meant to be read-only, and you cannot edit the information directly while in this view.
   :::

**4.**  To unlock the fields and start making your intended changes, you must initiate a new editing session. You can do this by pressing the **Create a draft** button. The interface will immediately switch into **Editor Mode**, making the corresponding fields editable.

    ![Create a Draft](/img/backoffice-UserGuide/createdraft.png)

**5.**  Now that you are in Editor Mode, you are free to insert new information or modify any existing parameters of the data product according to your requirements.
    :::danger[IMPORTANT]
    > **Saving your work is critical, especially when updating Section.** 
    > Whenever you change a section, you **must** explicitly save those specific changes. Look for and click the **Save DataProduct** button, as well as any other specific save buttons that might appear within the sections you are editing, to safely ensure no progress or modifications are lost.
    :::
    ![Saving Changes 1](/img/backoffice-UserGuide/savebuttons.jpg)


**6.**  After saving your changes, you can preview them on the **Data Platform** by activating the **Metadata Preview** button(only for logged in users). By clicking on the service you may see all of your changes.
![draft on portal](/img/backoffice-UserGuide/dataportal-metadatapreview.png)


**7.**  Once you have reviewed your work and ensured that every change has been fully saved, the final step is to submit your draft for formal review. Click the **Submit** button to finalize your editing session and send it off.

![Submit Button](/img/backoffice-UserGuide/submitButton.png)


**8.**  Upon submission, a formal request will be dispatched to our **Metadata Team**. They will carefully inspect all your proposed changes to maintain strict data quality standards. After their review, they will decide whether to make the changes public or to reject them.

    ![Submit Changes](/img/backoffice-UserGuide/Request-email.png)
    