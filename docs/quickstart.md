---
sidebar_position: 1
id: quickstart
title: Quickstart
---

This guide shows you the fastest way to install and try the EPOS Platform. Once you are familiar, you can explore other installation options.

## Requirements

- Linux or macOS with at least 4GB RAM, 2 CPU cores, and 10GB free storage
- [Docker](https://docs.docker.com/get-started/get-docker/) installed and running
- Internet connection

---

## Installation

### Step 1: Install the CLI

```bash
curl -fsSL https://raw.githubusercontent.com/epos-eu/epos-opensource/main/install.sh | bash
```

### Step 2: Verify installation

```bash
epos-opensource --version
```

Expected output (version may vary):

```text
epos-opensource version v0.2.4
```

### Step 3: Deploy the system

> \[!NOTE]
> Make sure Docker is running before you continue.

Run the following command, replacing `my-test-environment` with any name you prefer:

```bash
epos-opensource docker deploy my-test-environment
```

This will start an EPOS Platform environment locally using Docker Compose. At the end, you will see the access URLs.

### Step 4: Populate with sample data

Once the environment is running, populate it with example metadata:

```bash
# TODO: add exact command
```

---

## Access the web interface

Open the `Data Portal` URL shown after the population step in your browser. Usually [http://locahost:32000/](http://locahost:32000/)
