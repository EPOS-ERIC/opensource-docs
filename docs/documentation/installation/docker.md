---
title: Docker Commands
---

# Docker Commands

This page provides a detailed reference for the `docker` subcommands of the `epos-opensource` CLI. These commands are used to manage platform deployments on a single machine using Docker Compose.

## `deploy`

Creates and starts a new EPOS Platform environment using Docker Compose.

```bash
epos-opensource docker deploy <your-platform-name>
```

**Arguments:**

*   `<your-platform-name>`: (Required) A unique name for your new environment.

**Options:**

*   `--host <hostname>`: Sets a specific IP address or hostname for the services (default: `localhost`).
*   `--path <directory-path>`: Specifies a custom directory for the deployment files.
*   `--update-images`: Pulls the latest Docker images before starting the services.
*   `--compose-file <path>`: Uses a custom `docker-compose.yaml` file for deployment.
*   `--env-file <path>`: Uses a custom `.env` file for deployment.

## `populate`

Ingests metadata into a running environment from `.ttl` files.

```bash
epos-opensource docker populate <your-platform-name> /path/to/your/data
```

**Arguments:**

*   `<your-platform-name>`: (Required) The name of the environment to populate.
*   `<path/to/data>`: (Required) The path to a directory containing `.ttl` files or a single `.ttl` file.

**Options:**

*   `--example`: Populates the environment with a small set of sample data provided with the platform.

## `clean`

Resets all the data in an environment (e.g., metadata, converter plugins) without deleting the deployment itself.

```bash
epos-opensource docker clean <your-platform-name>
```

## `delete`

Stops and completely removes a Docker Compose environment, including all containers, volumes, and networks.

**Warning:** This action is irreversible and will delete all your data.

```bash
epos-opensource docker delete <your-platform-name>
```

## `export`

Exports the default `docker-compose.yaml` and `.env` files to a directory. This is useful for creating customized deployments.

```bash
epos-opensource docker export ./my-custom-config
```

## `list`

Lists all installed Docker environments, showing their status, access URLs, and file paths.

```bash
epos-opensource docker list
```

## `update`

Re-deploys an existing environment. This can be used to update Docker images or apply changes from a custom configuration file.

```bash
epos-opensource docker update <your-platform-name>
```

**Options:**

*   `--update-images`: Pulls the latest Docker images.
*   `--compose-file <path>`: Applies changes from a custom `docker-compose.yaml` file.
*   `--force`: Performs a full reset of the environment.