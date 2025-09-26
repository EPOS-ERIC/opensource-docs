---
title: Docker Installation
---

# Docker Installation Guide

This guide provides detailed instructions for deploying and managing the EPOS Platform using Docker Compose. This is the recommended method for local development, testing, and small-scale deployments.

For a faster, more streamlined introduction, see the [Quickstart Guide](../quickstart.md). This guide provides more detail on the available commands and options for a Docker-based deployment.

## Prerequisites

*   You have installed the **[EPOS Open-Source CLI (`epos-opensource`)](../quickstart.md)**.
*   **Docker and Docker Compose** are installed and running on your system.
*   Your system meets the minimum requirements: At least 4GB of RAM, 2 CPU cores, and 20GB of free storage.

## Deploying a New Platform

The `epos-opensource docker deploy` command creates a complete EPOS Platform environment on your local machine.

1.  **Choose a name** for your platform instance. This will be used as a prefix for all the Docker containers and resources.
2.  **Run the deploy command**:

    ```bash
    epos-opensource docker deploy <your-platform-name>
    ```
    For example:
    ```bash
    epos-opensource docker deploy my-epos-platform
    ```

The CLI will pull the necessary Docker images and start the services. When the process is complete, it will display the URLs for accessing the different parts of your platform.

![EPOS Platform Deployment](/img/epos_deploy.png)

### Deployment Options

You can customize the deployment with the following flags:

*   `--host <hostname>`: By default, services are accessible at `localhost`. If you are deploying on a server, you can use this flag to set a specific IP address or hostname.
*   `--path <directory-path>`: By default, the deployment files are stored in a directory managed by the CLI. You can use this flag to specify a custom directory for these files.
*   `--update-images`: This will ensure you are pulling the very latest Docker images before starting the services.

## Managing Your Deployment

The EPOS CLI provides several commands to manage your Docker-based deployment:

### Listing Deployments

If you have multiple deployments, you can use the `list` command to see all of them, along with their status, access URLs, and file paths.

```bash
epos-opensource docker list
```

### Populating with Data

You can populate your platform with metadata to explore its features. The `populate` command ingests `.ttl` files.

```bash
epos-opensource docker populate <your-platform-name> /path/to/your/data
```
![Populating with sample data](/img/docker_populate_ingestion.png)

### Cleaning Data

The `clean` command resets all the data in an environment (e.g., metadata, converter plugins) without deleting the deployment itself. This is useful for testing data ingestion from a clean slate.

```bash
epos-opensource docker clean <your-platform-name>
```

### Updating a Deployment

The `update` command re-deploys an existing environment. This is useful for two main reasons:

1.  **To update the Docker images** to their latest versions:
    ```bash
    epos-opensource docker update <your-platform-name> --update-images
    ```
2.  **To apply changes** from a custom compose or environment file (see Advanced Usage below).
    ```bash
    epos-opensource docker update <your-platform-name> --compose-file /path/to/your/custom-compose.yml
    ```

You can also use the `--force` flag to perform a full reset, which is equivalent to running `delete` and then `deploy` again.

### Deleting a Deployment

To completely remove a platform and all its associated Docker resources (containers, volumes, networks), use the `delete` command.

**Warning:** This action is irreversible and will delete all your data.

```bash
epos-opensource docker delete <your-platform-name>
```

## Advanced Usage: Customizing Your Deployment

For more advanced use cases, you may want to customize the Docker Compose configuration. The `export` command allows you to extract the default `docker-compose.yaml` and `.env` files that the CLI uses.

1.  **Export the default files** to a directory of your choice:
    ```bash
    epos-opensource docker export ./my-custom-config
    ```
2.  **Modify the files**: Make your desired changes to the `docker-compose.yaml` and `.env` files in the `my-custom-config` directory. For example, you could change port mappings or add new services.
3.  **Deploy with your custom files**: Use the `--compose-file` and `--env-file` flags with the `deploy` command to create a new deployment based on your customized setup.
    ```bash
    epos-opensource docker deploy my-custom-platform --compose-file ./my-custom-config/docker-compose.yaml --env-file ./my-custom-config/.env
    ```

## Accessing Your Platform

Once deployed, you can access the different parts of the platform via your web browser:

*   **Data Portal:** The main user interface for searching and visualizing data.
    *   Default URL: `http://localhost:32000/`
*   **API Documentation:** An interactive Swagger UI for the platform's REST API.
    *   Default URL: `http://localhost:33000/api/v1/ui`

![The EPOS Data Portal](/img/dataportal_after_populate.png)
![The EPOS APIs](/img/swagger_page.png)
![The EPOS Backoffice](/img/backoffice.png)
