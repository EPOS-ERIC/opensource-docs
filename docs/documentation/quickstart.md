---
sidebar_position: 2
id: quickstart
title: Quickstart
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide will get you up and running with a local instance of the EPOS Platform in just a few minutes. By the end, you'll have a fully functional data catalogue populated with sample data.

## Prerequisites

Before you begin, make sure you have the following installed and running:

- **Docker:** The EPOS Platform runs in containers, so you'll need Docker. [Learn how to install Docker](https://docs.docker.com/get-started/get-docker/).
- **System Requirements:** At least 4GB of RAM, 2 CPU cores, and 10GB of free storage.
- **A command-line terminal:** The installation is done via the command line.

---

## 1. Install the EPOS CLI

First, you need to install the `epos-opensource` command-line interface (CLI). This tool will handle the deployment and management of your platform. Choose the tab for your operating system below.

<Tabs>
  <TabItem value="linux-macos" label="Linux / macOS">
        You can install the CLI with a single command in your terminal:
        ```bash
        curl -fsSL https://raw.githubusercontent.com/EPOS-ERIC/epos-opensource/main/install.sh | bash
        ```
  </TabItem>
  <TabItem value="windows" label="Windows">
    <p>For Windows, you'll download the command-line tool directly:</p>
    <ol>
      <li>Go to the <a href="https://github.com/EPOS-ERIC/epos-opensource/releases">EPOS Open-Source Releases page</a>.</li>
      <li>Download the latest file named <code>epos-opensource-windows-amd64.exe</code>.</li>
      <li>Rename the downloaded file to <code>epos-opensource.exe</code>.</li>
      <li>Move this file to a memorable location, for example, <code>C:\epos</code>.</li>
    </ol>
    <p>To use the CLI, you will need to open a terminal (like Command Prompt or PowerShell) and navigate to the folder where you saved <code>epos-opensource.exe</code>. For example:</p>
        ```
cd C:\epos
        ```
    <p>All subsequent <code>epos-opensource</code> commands in this guide should be run from that terminal session.</p>
  </TabItem>
</Tabs>

To make sure it's installed correctly, open a new terminal and run:

```bash
epos-opensource --version
```

You should see an output like `epos-opensource version v0.2.4` (the version number may vary).

## 2. Deploy the Platform

Now, with Docker running, you can deploy the entire EPOS Platform with a single command.

Choose a name for your platform instance (e.g., `my-epos-platform`) and run:

```bash
epos-opensource docker deploy my-epos-platform
```

This command will download all the necessary Docker images and start the services. It might take a few minutes depending on your internet connection.

When it's done, you'll see a confirmation message with the access URLs for your new platform.

![EPOS Platform Deployment](/img/epos_deploy.png)

## 3. Populate with Sample Data

To see your platform in action, you can populate it with some sample metadata. This will create a few example entries in your data catalogue.

```bash
epos-opensource docker populate my-epos-platform ./my_sample_data
```

![Populating with sample data](/img/docker_populate_ingestion.png)
![Population complete](/img/docker_populate.png)

## 4. Explore Your New Platform

Congratulations, your EPOS Platform is live!

Open your web browser and go to the **EPOS Platform GUI** provided at the end of the deployment step. The default URL is [http://localhost:32000/](http://localhost:32000/).

![The EPOS Platform](/img/dataportal_after_populate.png)

You should see the main interface for browsing and searching for geospatial services. The sample metadata will appear on the top-left side of the interface.

:::warning
There is a known issue with the system where sometimes populated data might not show up immediatly. We are aware of this and currently working on a fix. In the meantime you can easily fix it by simply restarting the `resources-service` container.

Try running:

```bash
docker restart my-epos-platform-resources-service
```

Remember to change `my-epos-platform` with the name you used when deploying the environment.

If that doesn't work feel free to open an issue on [GitHub](https://github.com/EPOS-ERIC/epos-opensource/issues).
:::

You can also explore the **API Documentation** at `http://localhost:33000/api/v1/ui`.

## Next Steps

Now that you have a running instance, you can:

- **[Learn how to use the platform](./guides/user-guide.md)** with our User Guide.
- **[Explore advanced deployment options](./installation/index.md)** in the Installation Guide.
- **[Understand the system design](./system-reference/architecture.md)** by reading about the architecture.
