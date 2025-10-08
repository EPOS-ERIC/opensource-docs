---
title: Kubernetes Commands
---

# Kubernetes Commands

This page provides a detailed reference for the `kubernetes` subcommands of the `epos-opensource` CLI. These commands are used to manage platform deployments on a Kubernetes cluster.

## `deploy`

Creates and deploys a new Kubernetes environment in a dedicated namespace.

```bash
epos-opensource kubernetes deploy <your-platform-name>
```

## `populate`

Ingests metadata into a running environment from `.ttl` files.

```bash
epos-opensource kubernetes populate <your-platform-name> /path/to/your/data
```

## `delete`

Removes a Kubernetes environment and all its associated resources, including the namespace.

```bash
epos-opensource kubernetes delete <your-platform-name>
```

## `export`

Exports the default Kubernetes manifest files to a directory.

```bash
epos-opensource kubernetes export ./my-kube-config
```

## `list`

Lists all installed Kubernetes environments.

```bash
epos-opensource kubernetes list
```

## `update`

Updates and redeploys an existing Kubernetes environment.

```bash
epos-opensource kubernetes update <your-platform-name>
```
