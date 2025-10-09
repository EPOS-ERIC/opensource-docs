---
title: Managing Deployments with Kubernetes
---

# Managing Deployments with Kubernetes

This guide provides real-world examples of how to use the `epos-opensource kubernetes` commands to manage your EPOS Platform deployments on a Kubernetes cluster.

## Prerequisites

Before you begin, you should have a Kubernetes cluster up and running. You should also have an Nginx Ingress Controller installed and configured on your cluster. The `epos-opensource` CLI assumes that you have an Ingress Controller that can handle Ingress resources.

By default, the `INGRESS_CLASS` variable in the `.env` file is set to `nginx`. If you are using a different Ingress Controller, you will need to change this variable to match the ingress class of your controller.

## Common Workflow

This section walks you through a typical workflow for creating, populating, and managing a new EPOS Platform environment on Kubernetes.

### 1. Deploy a New Platform

First, you need to deploy a new environment. This command will create a new namespace and all the necessary Kubernetes resources for a fully functional EPOS Platform instance.

```bash
epos-opensource kubernetes deploy my-kube-platform
```

**When to use it:** Use this command when you want to create a new, clean instance of the EPOS Platform on your Kubernetes cluster.

### 2. Populate with Sample Data

Once your platform is running, you can populate it with some sample data to see it in action.

```bash
epos-opensource kubernetes populate my-kube-platform --example
```

**When to use it:** Use this command to quickly add some sample data to your platform for testing or demonstration purposes. You can also use it to populate your platform with your own data by providing a path to your `.ttl` files instead of the `--example` flag.

### 3. Check the Status

You can check the status of your deployed environments at any time.

```bash
epos-opensource kubernetes list
```

This command will show you a list of all your Kubernetes environments and their status.

**When to use it:** Use this command to get an overview of your deployed environments on Kubernetes.

### 4. Delete the Environment

When you're finished with an environment, you can delete it completely.

```bash
epos-opensource kubernetes delete my-kube-platform
```

:::warning

This action is irreversible and will delete the entire namespace and all its resources, including all your data, metadata, and any data added through the Backoffice.

:::

## Advanced Usage

This section covers some more advanced scenarios for managing your EPOS Platform deployments on Kubernetes.

### Enabling SSL

You can deploy your platform with SSL enabled using the `-s` or `--secure` flag. This will create Ingress resources with a TLS section, which requires you to provide a TLS secret.

1.  Create a TLS secret in your Kubernetes cluster containing your SSL certificate and key.

2.  Export the default environment file:

    ```bash
    epos-opensource kubernetes export ./my-custom-manifests
    ```

3.  Edit the `.env` file in the `my-custom-manifests` directory and set the `TLS_SECRET_NAME` to the name of your TLS secret.

    ```
    TLS_SECRET_NAME=your-tls-secret-name
    ```

4.  Deploy your platform using the `--secure` flag and your custom environment file:

    ```bash
    epos-opensource kubernetes deploy my-secure-platform -s -e ./my-custom-manifests/.env
    ```

This will create Ingress resources similar to the following, with the `tls` section configured to use your secret:

import RemoteCodeBlock from '@site/src/components/RemoteCodeBlock';

<RemoteCodeBlock url="https://raw.githubusercontent.com/EPOS-ERIC/epos-opensource/refs/heads/main/cmd/k8s/k8score/static/manifests/ingresses-secure.yaml" language="yaml" />

### Using an External Database

By default, the EPOS Platform uses a container for its PostgreSQL database. However, you can configure it to use an external PostgreSQL database instead.

1.  Export the default environment file:

    ```bash
    epos-opensource kubernetes export ./my-custom-manifests
    ```

2.  Edit the `.env` file in the `my-custom-manifests` directory and modify the `POSTGRESQL_CONNECTION_STRING` to point to your external database.

    ```
    POSTGRESQL_CONNECTION_STRING="jdbc:postgresql://your-external-db-host:5432/your-db-name?user=your-user&password=your-password"
    ```

3.  Deploy your platform using the custom environment file:

    ```bash
    epos-opensource kubernetes deploy my-custom-db-platform -e ./my-custom-manifests/.env
    ```

Here is an example of the `.env` file for Kubernetes.

<RemoteCodeBlock url="https://raw.githubusercontent.com/EPOS-ERIC/epos-opensource/refs/heads/main/cmd/k8s/k8score/static/.env" language="env" />
