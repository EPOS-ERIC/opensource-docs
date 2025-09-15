---
sidebar_position: 4
id: installation
title: Installation
---

# Installation

EPOS Platform can be installed locally or on a server using our command-line interface (CLI) tool. The CLI supports deployment using Docker or Kubernetes, making it easy to get started regardless of your infrastructure preferences.

## Installation Methods

The EPOS Platform installer supports multiple deployment scenarios:

- **Docker Compose**: Recommended for development, testing, and small-scale deployments
- **Kubernetes**: Production-ready container orchestration for scalable deployments

## Quick Installation

For the fastest way to get started, see our [Quickstart Guide](./quickstart) which will have you running EPOS Platform in minutes.

## Detailed Installation

For comprehensive installation instructions covering all deployment options, system requirements, and configuration details, see our [Docker Installation](./docker) guide.

## Source Repository

TODO:

**CLI GitHub Repository**: [https://github.com/epos-eu/epos-opensource](https://github.com/epos-eu/epos-opensource)

## Prerequisites

Before installing EPOS Platform, ensure you have:

- **Docker**: Version 20.10+ (for containerized deployments)
- **Docker Compose**: Version 2.0+ (for multi-container deployments)
- **Kubernetes**: Version 1.20+ (for orchestrated deployments)
- **System Resources**: Minimum 4GB RAM, 2 CPU cores, 20GB storage

For detailed system requirements and platform-specific instructions, refer to the [Docker Installation](./docker) guide.

## Next Steps

Once you have EPOS Platform installed:

1. **[Getting Started](./user-guide/getting-started)** - Learn how to use the platform
2. **[System Architecture](./architecture/overview)** - Understand the system design
3. **[Data Format Documentation](./data-formats/geojson-extensions)** - Learn about supported data formats

---

> **Need help with installation?** Check our [Docker Installation](./docker) for detailed instructions and troubleshooting tips.
