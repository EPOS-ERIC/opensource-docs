---
title: Managing Kubernetes Deployments
---

import RemoteCodeBlock from '@site/src/components/RemoteCodeBlock';

# Managing Kubernetes Deployments

This guide covers the `epos-opensource k8s` commands for deploying and managing EPOS on Kubernetes.

Starting from `v2.x`, K8s deployments are managed through an embedded [Helm](https://helm.sh/) chart and YAML values.

## Prerequisites

- A running Kubernetes cluster
- `kubectl` installed and configured
- An ingress controller using class `nginx`

:::info

You do **not** need to install Helm CLI separately. Helm logic is embedded in the `epos-opensource` cli.

:::

## Common Workflow

### 1. Deploy a New Environment

```bash
epos-opensource k8s deploy my-kube-platform
```

`k8s deploy` creates a namespace and deploys EPOS services using the embedded Helm chart and config values. Use it for first-time creation of a new environment in the cluster. If you want to inspect generated manifests first, run `k8s render` (optionally providing a custom config file); if the environment already exists, use `k8s update` instead.

Useful options:

- `--config <path>`: use a custom `k8s-config.yaml`
- `--context <name>`: choose kubectl context
- `--timeout <duration>`: override default timeout (`5m`)

### 2. Populate with Example Data

```bash
epos-opensource k8s populate my-kube-platform --example
```

`k8s populate` loads metadata into the running environment using bundled examples (`--example`) or your `.ttl` files. Use it after deployment or after a reset when you need fresh metadata ingestion. If old populated data must be removed first, run `k8s clean` before populating.

If you are ingesting custom metadata instead of bundled examples, pass one or more `.ttl` file or directory paths:

```bash
epos-opensource k8s populate my-kube-platform ./metadata ./more-data/file.ttl
```

### 3. List Environments

```bash
epos-opensource k8s list
```

`k8s list` discovers EPOS environments and shows their context and endpoint URLs. Use it as a quick inventory of what is deployed and where it is reachable, then continue with whichever command fits your next step (for example `k8s get`, `k8s update`, `k8s populate`, `k8s clean`, or `k8s delete`).

By default, this checks all available kubectl contexts. Use `--context` to scope to one context.

### 4. Update an Environment

```bash
epos-opensource k8s update my-kube-platform
```

`k8s update` updates an existing environment using its applied config or a file passed with `--config`. Use it for iterative changes without redeploying an environment. A safe workflow is to export current values with `k8s get`, edit them, and apply with `k8s update --config`; use `k8s deploy` for new environment.

Useful options:

- `--config <path>`: apply custom YAML config
- `--reset`: reset to embedded default config (see [Default K8s Config](#default-k8s-config))
- `--force`: reinstall from scratch (delete namespace + reinstall)

### 5. Clean Environment Data

```bash
epos-opensource k8s clean my-kube-platform
```

`k8s clean` runs cleanup jobs to remove populated data without a full redeploy. Use it when you want to reset data but keep the same namespace and deployment. After cleaning, run `k8s populate` to ingest data again; use `k8s delete` if you need complete removal of all resources.

### 6. Delete an Environment

```bash
epos-opensource k8s delete my-kube-platform
```

`k8s delete` deletes the environment namespace and associated resources. Use it for permanent cleanup of one or more environments. It is good practice to check names and contexts with `k8s list` first; if you only need a data reset, use `k8s clean` instead.

:::warning

`delete` removes the namespace and all associated resources.

:::

Use `--force` to skip confirmation.

## Config-First Workflow

### 1. Export the Default K8s Template

```bash
epos-opensource k8s export ./my-k8s-config
```

`k8s export` writes the default `k8s-config.yaml` template to the target directory. Use it to begin customization from a valid default config, then edit the file and continue with `k8s render`, `k8s deploy --config` or `k8s update --config`.

This creates `./my-k8s-config/k8s-config.yaml`.

Default template: see [Default K8s Config](#default-k8s-config).

### 2. Render Manifests Locally

```bash
epos-opensource k8s render my-kube-platform --config ./my-k8s-config/k8s-config.yaml --output ./rendered-k8s
```

`k8s render` renders Kubernetes manifests from config without deploying to a cluster. Use it for review, diff, or CI validation before applying changes. After review, apply the same config with `k8s deploy --config` for new environments or `k8s update --config` for existing ones.

### 3. Deploy or Update with Config

```bash
epos-opensource k8s deploy my-kube-platform --config ./my-k8s-config/k8s-config.yaml
epos-opensource k8s update my-kube-platform --config ./my-k8s-config/k8s-config.yaml
```

These commands apply your custom config for creation (`deploy`) or modification (`update`). Use this path for repeatable, version-controlled environment changes. For updates, you can start with `k8s get`, edit the exported config, and apply it back with `--config`.

### 4. Inspect Applied Config

```bash
epos-opensource k8s get my-kube-platform --output ./applied-k8s-config.yaml
```

`k8s get` prints the configuration currently applied to an environment (or writes it to `--output`). Use it for audit, backup, and as a safe baseline for updates. A common flow is to export with `k8s get`, edit the YAML, and apply it with `k8s update --config`.

If `--output` is omitted, YAML is printed to stdout.

## Default K8s Config

<RemoteCodeBlock url="https://raw.githubusercontent.com/EPOS-ERIC/epos-opensource/refs/heads/main/pkg/k8s/config/helm/values.yaml" language="yaml" />
