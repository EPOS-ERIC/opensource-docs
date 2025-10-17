---
title: Managing Docker Deployments
---

# Managing Docker Deployments

This guide provides real-world examples of how to use the `epos-opensource docker` commands to manage your EPOS Platform deployments on a single machine using Docker Compose.

## Common Workflow

This section walks you through a typical workflow for creating, populating, and managing a new EPOS Platform environment.

### 1. Deploy a New Platform

First, you need to deploy a new environment. This command will create all the necessary Docker containers, networks, and volumes for a fully functional EPOS Platform instance.

```bash
epos-opensource docker deploy my-epos-platform
```

**When to use it:** Use this command when you want to create a new, clean instance of the EPOS Platform.

### 2. Populate with Sample Data

Once your platform is running, you can populate it with some sample data to see it in action.

```bash
epos-opensource docker populate my-epos-platform --example
```

**When to use it:** Use this command to quickly add some sample data to your platform for testing or demonstration purposes. You can also use it to populate your platform with your own data by providing a path to your `.ttl` files instead of the `--example` flag.

### 3. Check the Status

You can check the status of your deployed environments at any time.

```bash
epos-opensource docker list
```

This command will show you a list of all your environments, their status, and the URLs to access them.

**When to use it:** Use this command to get an overview of your deployed environments and their access URLs.

### 4. Clean the Data

If you want to reset the data in your environment without deleting the entire deployment, you can use the `clean` command.

```bash
epos-opensource docker clean my-epos-platform
```

:::warning

This action is irreversible and will delete all your data, including metadata, converter plugins, and any data added through the Backoffice.

:::

:::tip

This command will prompt for confirmation before proceeding. Use the `--force` (`-f`) flag to bypass the prompt, which is useful for scripts or CI/CD pipelines.

:::

**When to use it:** Use this command when you want to clear all the data from an environment and start over with a clean slate.

### 5. Update the Environment

If you need to update an existing environment with new configuration settings, such as changing environment variables or using a different Docker Compose file, you can use the `update` command.

```bash
epos-opensource docker update my-epos-platform --env-file ./my-updated-config/.env
```

**When to use it:** Use this command when you want to apply configuration changes to an existing environment without deleting and recreating it from scratch. You can update the environment variables, Docker Compose file, force recreation of containers, update Docker images, or change the host settings.

### 6. Delete the Environment

When you're finished with an environment, you can delete it completely.

```bash
epos-opensource docker delete my-epos-platform
```

:::warning

This action is irreversible and will delete all your data and the entire deployment, including all containers, volumes, and networks.

:::

:::tip

This command will prompt for confirmation before proceeding. Use the `--force` (`-f`) flag to bypass the prompt, which is useful for scripts or CI/CD pipelines.

:::

**When to use it:** Use this command when you want to completely remove an environment and all its associated resources.

## Advanced Usage

This section covers some more advanced scenarios for managing your EPOS Platform deployments.

### Using a Reverse Proxy for SSL

For production environments, we recommend using a reverse proxy (like Nginx or Traefik) in front of your EPOS Platform deployment to handle SSL encryption. The Docker deployment does not handle SSL out of the box.

Here is a conceptual example of how this would work:

1.  Deploy your EPOS Platform instance using the `epos-opensource docker deploy` command.
2.  Configure your reverse proxy to listen on port 443 (HTTPS) and forward traffic to the EPOS Platform's services on their respective ports (e.g., `http://localhost:32000` for the GUI).
3.  Your reverse proxy would handle the SSL certificates and encrypt the traffic between the client and the proxy.

This setup provides a secure and flexible way to expose your EPOS Platform instance to the internet.

### Using an External Database

By default, the EPOS Platform uses a Docker container for its PostgreSQL database. However, you can configure it to use an external PostgreSQL database instead.

1.  Export the default environment file:

    ```bash
    epos-opensource docker export ./my-custom-config
    ```

2.  Edit the `.env` file in the `my-custom-config` directory and modify the `POSTGRESQL_CONNECTION_STRING` to point to your external database.

    ```
    POSTGRESQL_CONNECTION_STRING="jdbc:postgresql://your-external-db-host:5432/your-db-name?user=your-user&password=your-password"
    ```

3.  Deploy your platform using the custom environment file:

    ```bash
    epos-opensource docker deploy my-custom-db-platform --env-file ./my-custom-config/.env
    ```

Here is an example of the `.env` file for Docker. Note that this might be outdated, but the overall structure should be the same.

import RemoteCodeBlock from '@site/src/components/RemoteCodeBlock';

<RemoteCodeBlock url="https://raw.githubusercontent.com/EPOS-ERIC/epos-opensource/refs/heads/main/cmd/docker/dockercore/static/.env" language="env" />
