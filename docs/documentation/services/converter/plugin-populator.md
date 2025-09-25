---
sidebar_position: 3
id: plugin-populator
title: Plugin Populator
---

# Plugin Populator

The Plugin Populator is a specialized tool designed to bootstrap EPOS Platform deployments with initial converter plugins. Since the system is designed as a live service where the Backoffice handles ongoing plugin management, there's no direct way to include plugins during the initial database creation.

## Purpose

The Plugin Populator serves as a one-time initialization tool that:

- **Bootstraps New Deployments**: Populates a fresh EPOS Platform installation with essential converter plugins
- **Reads Environment State**: Analyzes deployed distributions and their data formats
- **Bulk Plugin Registration**: Registers multiple plugins at once using JSON configuration files
- **Pre-production Setup**: Prepares the system for production use with necessary conversion capabilities

## How It Works

The Plugin Populator operates as a separate Docker container that:

1. **Environment Analysis**: Scans the deployed EPOS Platform environment to identify all available distributions
2. **Plugin Configuration**: Reads plugin definitions from JSON configuration files
3. **API Integration**: Uses the converter service APIs to register plugins in the database
4. **Validation**: Ensures plugins are properly registered and associated with distributions

## Usage

### Docker Deployment

```bash
# Run the plugin populator
docker run --rm --network host -v ./populate.json:/populate.json epos/epos-plugin-populator populate /populate.json --gateway http://localhost:33000/api/v1
```

### Configuration File

The plugin configuration is defined in JSON format:

```json

[
  {
    "version": "main",
    "name": "plugin1",
    "description": "plugin description",
    "version_type": "branch",
    "repository": "https://github.com/somerepository/plugin",
    "runtime": "java",
    "executable": "plugin.jar",
    "arguments": "org.example.com.plugin1",
    "enabled": true,
    "inputFormat": "application/json",
    "outputFormat": "application/epos.geo+json",
    "relations": [
      {
        "relationId": "operation/uid/of/distribution1"
      },
      {
        "relationId": "operation/uid/of/distribution2"
      }
    ]
  },
```

## When to Use

### Initial Deployment

- **Fresh Installation**: Use when deploying a new EPOS Platform instance
- **Plugin Setup**: Register essential converter plugins before going live
- **Testing Environment**: Populate test environments with sample plugins

### Migration Scenarios

- **System Migration**: When migrating from one EPOS Platform instance to another
- **Plugin Updates**: Bulk updates to plugin configurations
- **Environment Replication**: Replicating plugin setup across multiple environments

## Repository and Documentation

**GitHub Repository**: [https://github.com/epos-eu/epos-plugin-populator](https://github.com/epos-eu/epos-plugin-populator)
