---
title: Troubleshooting
---

# Troubleshooting

This page covers common issues with the EPOS CLI and environment management.

## CLI Basics

### TUI vs CLI Commands

- Run `epos-opensource` to launch the interactive TUI
- Run `epos-opensource --help` to see CLI syntax
- Press `Esc` or `Ctrl+C` to exit the TUI

### `update` vs `docker update` vs `k8s update`

- `epos-opensource update`: updates the CLI binary itself
- `epos-opensource docker update <env-name>`: updates a Docker environment
- `epos-opensource k8s update <env-name>`: updates a K8s environment

## v2 Migration Issues

### Environments Disappeared After Updating to `v2.0.0`

- **Issue:** previously deployed environments no longer appear in `docker list` or `k8s list`.
- **Cause:** `v2.0.0` includes a breaking change that resets local CLI database state.
- **Solution:** this is expected behavior. Existing Docker/Kubernetes resources are not automatically removed. Clean old resources manually if needed and redeploy/import using v2 workflows.

## Command and Flag Changes in v2

### Old Syntax No Longer Works

- **Issue:** commands like `epos-opensource kubernetes ...` fail.
- **Solution:** use `epos-opensource k8s ...`.

### Deprecated Flags No Longer Work

- **Issue:** flags such as `--env-file`, `--compose-file`, `--manifests-dir`, `--secure`, or `--host` are rejected.
- **Solution:** use config files with `--config`:
  - Docker: `docker-config.yaml`
  - K8s: `k8s-config.yaml`

## Runtime and Environment Issues

### Docker or kubectl Not Found

- **Issue:** the CLI cannot run Docker or K8s operations.
- **Solution:** ensure Docker is installed/running for Docker commands, and `kubectl` is installed/configured for K8s commands.

### Wrong K8s Context

- **Issue:** K8s commands target the wrong cluster or return no environments.
- **Solution:** check current context with `kubectl config current-context`, or pass `--context <name>` explicitly.

### Environment Already Exists

- **Issue:** deploy fails because name is already used.
- **Solution:** choose another environment name or delete the existing environment first.

### Environment Not Found

- **Issue:** update/clean/populate/delete reports missing environment.
- **Solution:**
  - First, list available environments to confirm the exact environment name:
    - Docker: `epos-opensource docker list`
    - K8s: `epos-opensource k8s list` (or `epos-opensource k8s list --context <name>`)
  - Docker: run commands as the same user profile used to create the environment
  - K8s: verify cluster context and release name

## Data Population Issues

### Problems with `.ttl` Files

- **Issue:** populate fails.
- **Solution:** verify paths exist, files use `.ttl` extension, and data is valid.

### Populated Data Not Visible Immediately

- **Issue:** metadata does not appear right after populate.
- **Solution:** wait briefly for background refresh. For Docker, you can restart resources-service:

```bash
docker restart <your-environment-name>-resources-service
```

## Reporting Issues

If the problem persists, open a GitHub issue with:

- CLI version (`epos-opensource --version`)
- Full command used
- Full error output
- OS and runtime details (Docker/K8s context)

[**Open an Issue on GitHub**](https://github.com/EPOS-ERIC/epos-opensource/issues)
