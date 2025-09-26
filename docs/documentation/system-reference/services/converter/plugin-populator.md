---
title: Plugin Populator
---

# Plugin Populator

The **Plugin Populator** is an essential tool designed to streamline the initial setup of EPOS Platform deployments by registering a foundational set of converter plugins. While the Backoffice service handles ongoing plugin management in a live environment, the Plugin Populator addresses the need for a robust mechanism to include necessary plugins during the platform's initial deployment and database creation.

## Why Use the Plugin Populator?

The EPOS Platform is designed with a live service model where the Backoffice manages plugins dynamically. However, during the initial deployment, the database is empty, and there's no direct way to include plugins. The Plugin Populator fills this gap by:

*   **Bootstrapping New Deployments:** Ensuring fresh EPOS Platform installations are equipped with essential converter plugins from the start.
*   **Bulk Registration:** Facilitating the registration of multiple plugins efficiently using structured JSON configuration files.
*   **Pre-production Setup:** Preparing the system with critical conversion capabilities before it goes live.
*   **Environment Replication:** Enabling consistent plugin setups across various environments (e.g., development, staging, production).

While the Plugin Populator is ideal for initial setup, all plugins (including those registered by the Populator) can be fully managed through the Converter Service's APIs, which are also exposed via the Backoffice. The Populator itself leverages these same APIs internally. This means you can use the Backoffice for ongoing creation, modification, and deletion of plugins after the initial deployment.

## How It Works

The Plugin Populator operates as a standalone Docker container that integrates with your deployed EPOS Platform:

1.  **Environment Analysis:** It connects to the deployed EPOS Platform environment to identify all available distributions.
2.  **Configuration Processing:** It reads plugin definitions from a JSON configuration file provided by the user.
3.  **API Integration:** It leverages the Converter Service's APIs to register these plugins and their associated relations within the platform's database.
4.  **Validation:** It ensures that plugins are properly registered and correctly associated with the relevant distributions.

## Usage

The Plugin Populator is executed as a Docker container, connecting to your running EPOS Platform.

### Option 1: Via API Gateway (Default)

This is the standard way to run the populator, using the platform's API Gateway.

```bash
docker run --rm --network host -v /path/to/your/populate.json:/populate.json epos/epos-plugin-populator populate /populate.json --gateway http://localhost:33000/api/v1
```

**Command Breakdown:**

*   `docker run --rm`: Runs the container and removes it automatically after execution.
*   `--network host`: Allows the container to connect to services running on the host machine (e.g., your EPOS Platform gateway).
*   `-v /path/to/your/populate.json:/populate.json`: Mounts your local plugin configuration file into the container. Replace `/path/to/your/populate.json` with the actual path to your JSON file.
*   `epos/epos-plugin-populator`: The Docker image for the Plugin Populator.
*   `populate /populate.json`: The command executed inside the container, telling the populator to use the mounted JSON file.
*   `--gateway http://localhost:33000/api/v1`: Specifies the URL of your EPOS Platform's API Gateway. Adjust `http://localhost:33000/api/v1` if your gateway is exposed on a different address or port.

### Option 2: Bypassing the API Gateway

This option allows the Plugin Populator to communicate directly with the `resources` and `converter` services, bypassing the API Gateway. This can be useful in development or testing scenarios where the gateway might have authorization enabled, or for debugging purposes.

```bash
docker run --rm --network host -v /path/to/your/populate.json:/populate.json epos/epos-plugin-populator populate /populate.json --resources http://resources:8080/api/v1 --converter http://converter:8080/api/v1
```

**Note:** When bypassing the gateway, ensure that the `resources` and `converter` services are directly accessible from the Plugin Populator container. The URLs `http://resources:8080/api/v1` and `http://converter:8080/api/v1` assume these services are running within the same Docker network and are resolvable by their service names.

## Configuration File

Plugin definitions are provided in a JSON array format. Each object in the array represents a single plugin to be registered.

```json
[
  {
    "version": "main",                     // Version of the plugin (e.g., Git branch or tag)
    "name": "plugin1",                     // Unique name for the plugin
    "description": "plugin description",   // Description of the plugin's functionality
    "version_type": "branch",              // Git versioning strategy: "branch" or "tag"
    "repository": "https://github.com/somerepository/plugin", // Git URL of the plugin's repository
    "runtime": "java",                     // Runtime environment: "java", "python", or "binary"
    "executable": "plugin.jar",            // Entry point for the plugin (e.g., JAR file, Python script)
    "arguments": "org.example.com.plugin1",// Custom arguments passed to the plugin executable
    "enabled": true,                       // Whether the plugin is active upon registration
    "inputFormat": "application/json",     // MIME type of the input data the plugin expects
    "outputFormat": "application/epos.geo+json", // MIME type of the output data the plugin produces
    "relations": [                         // Array of relations to distributions
      {
        "relationId": "operation/uid/of/distribution1" // UID of the distribution to associate with
      },
      {
        "relationId": "operation/uid/of/distribution2"
      }
    ]
  },
  {
    "version": "main",
    "name": "plugin2",
    "description": "plugin description",
    "version_type": "branch",
    "repository": "https://github.com/somerepository/plugin2",
    "runtime": "binary",
    "executable": "/build/plugin",
    "arguments": "",
    "enabled": true,
    "inputFormat": "application/json",
    "outputFormat": "application/epos.geo+json",
    "relations": [
      {
        "relationId": "operation/uid/of/distribution1"
      }
    ]
  }
]
```

## Repository

The source code and further documentation for the Plugin Populator can be found on its GitHub repository:

*   **GitHub Repository**: [https://github.com/epos-eu/epos-plugin-populator](https://github.com/epos-eu/epos-plugin-populator)
