---
sidebar_position: 4
title: CLI Tool
---

# EPOS Open Source CLI

The EPOS Open-Source CLI (`epos-opensource`) is a command-line tool that simplifies the process of deploying, populating, and managing your platform, whether you're running a small local instance or a large-scale production deployment.

![Image](/img/docker_deploy_urls.png)

## Why a CLI?

The `epos-opensource` CLI is designed to be the primary way to interact with your EPOS Platform instances. It provides a simple and consistent interface for managing the entire lifecycle of your deployments, from initial setup to ongoing maintenance.

Here are some of the benefits of using the CLI:

- **Simplicity:** A single command can deploy the entire platform, including all its microservices and dependencies.
- **Consistency:** The same commands are used to manage both Docker and Kubernetes deployments, making it easy to switch between them.
- **Automation:** The CLI can be easily integrated into scripts and automated workflows.
- **Reproducibility:** The CLI ensures that your deployments are reproducible and consistent across different environments.

## Core Concepts

### Environments

An "environment" is a named, isolated instance of the EPOS Platform, with its own configuration and data. You can have multiple environments for testing, development, or different production use cases. The CLI manages these environments for you, keeping track of their configuration and status.

## Getting Help

The CLI has a built-in help system that provides detailed information about each command and its options. To get help, you can use the `--help` flag.

```shell
epos-opensource --help
epos-opensource docker --help
epos-opensource kubernetes deploy --help
```

## Installation

### Using the Installation Script (Linux/macOS)

The easiest way to install or update the CLI on Linux, macOS, or Windows Subsystem for Linux (WSL) is with the following script. This script should be used for both the initial installation and for updating an existing version to the latest one.

```bash
curl -fsSL https://raw.githubusercontent.com/EPOS-ERIC/epos-opensource/main/install.sh | bash
```

:::caution

For security, we recommend you inspect the installation script before running it. You can view the script's source code [here](https://raw.githubusercontent.com/EPOS-ERIC/epos-opensource/main/install.sh).

:::

### Pre-built Binaries (Windows, Linux, macOS)

You can also install the CLI by downloading a pre-built binary for your operating system.

1. Download the appropriate archive from the [releases page](https://github.com/epos-eu/epos-opensource/releases).
2. Make the binary executable and move it to a directory in your system's `$PATH`.

   ```shell
   # For Linux/macOS
   chmod +x epos-opensource-{your-version}
   mv epos-opensource-{your-version} /usr/local/bin/epos-opensource
   ```

   For Windows, you can place the `.exe` file in a folder and add that folder to the `Path` environment variable.

### Build from Source

If you have Go installed (version 1.24.4 or later), you can build the CLI from source.

```shell
go install github.com/epos-eu/epos-opensource@latest
```

Make sure `$GOPATH/bin` or `$HOME/go/bin` is in your system's `$PATH`.

## Verify Installation

To make sure the CLI is installed correctly, run:

```bash
epos-opensource --version
```

## Getting Help & Reporting Issues

If you encounter any issues while using the `epos-opensource` CLI, or if you have any suggestions for improvement, we encourage you to open an issue on our GitHub repository.

[**Open an Issue on GitHub**](https://github.com/epos-eu/epos-opensource/issues)

## Troubleshooting & Tips

- **Docker/Kubernetes not found:** Make sure Docker and/or kubectl are installed and running.
- **Environment/Directory already exists:** Use a new name, or delete the old environment first.
- **Problems with `.ttl` files:** Make sure the directory exists and contains valid `.ttl` files and that their path are valid (no spaces, weird symbols, ...).
- **Environment not found/Does not exists:** Make sure to be running the commands as the same user, the cli uses an user level sqlite database to store the environment information.
