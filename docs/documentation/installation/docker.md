---
title: Managing Docker Deployments
---

import RemoteCodeBlock from '@site/src/components/RemoteCodeBlock';

# Managing Docker Deployments

This guide covers the `epos-opensource docker` commands for deploying and managing EPOS locally with Docker Compose.

Starting from `v2.x`, Docker deployments are managed through YAML config and rendered [Docker Compose](https://docs.docker.com/compose/) runtime files.

## Common Workflow

### 1. Deploy a New Environment

```bash
epos-opensource docker deploy my-epos-platform
```

`docker deploy` creates a new Docker Compose EPOS environment from the embedded defaults or a file passed with `--config`. Use it for first-time creation of a new environment. If you want to inspect generated runtime files first, run `docker render` (optionally providing a custom config file); if the environment already exists, use `docker update` instead.

### 2. Populate with Example Data

```bash
epos-opensource docker populate my-epos-platform --example
```

`docker populate` loads metadata into the environment from bundled examples (`--example`) or from your `.ttl` files. Use it right after deployment or after a reset when you need fresh data. If you want to clear existing populated data first, run `docker clean` before it.

If you are ingesting custom metadata instead of bundled examples, pass one or more `.ttl` file or directory paths:

```bash
epos-opensource docker populate my-epos-platform ./metadata ./more-data/file.ttl
```

### 3. List Environments

```bash
epos-opensource docker list
```

`docker list` shows all Docker environments tracked by the CLI, together with GUI, API, and Backoffice URLs. Use it as a quick inventory of what is deployed and where it is reachable, then continue with whichever command fits your next step (for example `docker get`, `docker update`, `docker populate`, `docker clean`, or `docker delete`).

### 4. Update an Environment

```bash
epos-opensource docker update my-epos-platform
```

`docker update` updates an existing environment using its applied config or a custom one passed with `--config`. Use it for iterative changes without redeploying an environment. A safe workflow is to export current values with `docker get`, edit them, and apply with `docker update --config`; use `docker deploy` for a new environment.

Useful options:

- `--config <path>`: apply a custom YAML config
- `--update-images`: pull images before starting
- `--force`: recreate containers from scratch
- `--reset`: reset to embedded default config (see [Default Docker Config](#default-docker-config))

### 5. Clean Environment Data

```bash
epos-opensource docker clean my-epos-platform
```

`docker clean` removes populated data and ingestion records, then restarts services and restores base ontologies while keeping the same deployment. Use it when you need a data reset without tearing the environment down. After cleaning, run `docker populate` to load data again; use `docker delete` if you need complete removal of all resources.

:::warning

`clean` permanently removes populated environment data.

:::

Use `--force` to skip confirmation.

### 6. Delete an Environment

```bash
epos-opensource docker delete my-epos-platform
```

`docker delete` permanently removes the Docker environment, including containers, volumes, and tracked metadata. Use it for full removal of one or more environments. It is best to confirm targets with `docker list` first; if you only need a data reset, use `docker clean` instead.

:::warning

`delete` permanently removes the full Docker environment (containers, volumes, and metadata).

:::

Use `--force` to skip confirmation.

## Config-First Workflow

### 1. Export the Default Docker Template

```bash
epos-opensource docker export ./my-docker-config
```

`docker export` writes the default `docker-config.yaml` template to the target directory. Use it to begin customization from a valid default config, then edit the file and continue with `docker render`, `docker deploy --config` or `docker update --config`.

This creates `./my-docker-config/docker-config.yaml`.

### 2. Edit `docker-config.yaml`

Default template: see [Default Docker Config](#default-docker-config).

Example: enable the Backoffice module by setting `enabled` to `true`:

```yaml
components:
  backoffice:
    enabled: true
```

### 3. Render Runtime Files (optional)

```bash
epos-opensource docker render my-epos-platform --config ./my-docker-config/docker-config.yaml --output ./rendered-docker
```

`docker render` generates `.env` and `docker-compose.yaml` locally from the default config or a file passed with `--config`, without deploying anything. Use it to validate runtime output before making changes to running environments. After review, apply the same config with `docker deploy --config` for new environments or `docker update --config` for existing ones.

### 4. Deploy or Update with Config

```bash
epos-opensource docker deploy my-epos-platform --config ./my-docker-config/docker-config.yaml
epos-opensource docker update my-epos-platform --config ./my-docker-config/docker-config.yaml
```

These commands apply your customized config during creation (`deploy`) or modification (`update`). This is the recommended path for reproducible, version-controlled environment changes. For updates, you can start from `docker get`, edit that config, and apply it back with `--config`.

### 5. Inspect Applied Config

```bash
epos-opensource docker get my-epos-platform --output ./applied-docker-config.yaml
```

`docker get` reads the config currently stored for a deployed environment and prints YAML to stdout (or writes it to `--output`). Use it for backup, audit, and as a safe baseline for updates. A common flow is to export with `docker get`, edit the file, then apply it with `docker update --config`.

If `--output` is omitted, YAML is printed to stdout.

:::info

In `v2.x`, Docker commands are config-driven. Use `--config` instead of older `.env`/compose-file flags.

:::

## Default Docker Config

<RemoteCodeBlock url="https://raw.githubusercontent.com/EPOS-ERIC/epos-opensource/refs/heads/main/pkg/docker/config/default.yaml" language="yaml" />
