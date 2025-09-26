---
sidebar_position: 4
title: Installation
---

# Installation

The EPOS Platform is designed to be installed on your own infrastructure. This section provides a comprehensive overview of the different ways you can deploy and manage your instance.

All installation and management operations are handled by the **EPOS Open-Source CLI (`epos-opensource`)**. This command-line tool simplifies the process of deploying, populating, and managing your platform, whether you're running a small local instance or a large-scale production deployment.

If you haven't installed the CLI yet, please see the [Quickstart Guide](../quickstart.md) for platform-specific instructions.

## Deployment Methods

The EPOS Platform supports two primary deployment methods:

*   **[Docker Compose](./docker.md):** This is the recommended method for local development, testing, and small-scale deployments. It's the easiest way to get a complete EPOS environment running on a single machine.
*   **Kubernetes:** For production environments that require high availability, scalability, and fault tolerance, the EPOS Platform can be deployed to a Kubernetes cluster. (Documentation for this is forthcoming).

## Prerequisites

The system requirements depend on the deployment method you choose. As a general guideline, you will need:

*   A Linux, macOS, or Windows environment.
*   At least 4GB of RAM, 2 CPU cores, and 20GB of free storage for a basic installation.
*   Docker (for Docker Compose deployments) or a running Kubernetes cluster.

For detailed requirements, please refer to the specific installation guide for your chosen deployment method.

## Installation Guides

*   **[Docker Installation Guide](./docker.md):** A step-by-step guide to deploying the EPOS Platform using Docker Compose.