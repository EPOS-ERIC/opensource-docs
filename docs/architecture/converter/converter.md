# Converter System

### Overview

The **Converter** is a key architectural component responsible for transforming payloads retrieved from external services into formats interpretable by the EPOS GUI. Given that EPOS neither controls these external services nor enforces a fixed payload format, the Converter ensures flexibility by enabling on-the-fly conversion of data before it reaches the GUI layer.
This conversion is handled dynamically at request time, allowing the frontend to visualize data regardless of the original payload structure. The Converter achieves this by using a plugin-based system where each plugin encapsulates the logic required to transform a specific data format.

---

### Converter Applicability

A converter plugin is only necessary for services whose payloads are not natively supported by the EPOS GUI. As of now, the GUI fully supports the following formats or service types:

- **WMS (Web Map Service)**
- **WFS (Web Feature Service)**
- **GeoJSON**
- **CoverageJSON (CovJSON)**
- **Extended GeoJSON (EPOS GeoJSON)**: a custom extension of the GeoJSON format that adds specific properties to enhance data visualization in the EPOS GUI.
- **Extended CovJSON (EPOS CovJSON)**: a custom extension of the OGC's CovJSON format that adds specific properties to enhance data visualization in the EPOS GUI.

  If a service returns data in any of the supported formats listed above, **no conversion is required**. The converter system is specifically intended to make external services interoperable with the EPOS ecosystem **without enforcing any data standard**. It acts as a bridge for integrating services that provide payloads in alternative or proprietary formats by converting them into a format the GUI can handle.

---

### Architecture

The Converter system is composed of two microservices:

- **converter-routine**
- **converter-service**

  These services work together to manage plugin lifecycle, execution, and integration with the broader EPOS system.

---

### converter-routine

The `converter-routine` service is focused on plugin provisioning. It ensures that plugin code is available and up-to-date in the execution environment by interacting with remote Git repositories. It adheres to the microservice principle of single responsibility and performs the following tasks:

- **Plugin Retrieval and Sync**:
  Every 5 minutes, a scheduled cron job iterates through the list of registered plugins. For each plugin:
  - If the plugin is not already present, it is cloned from its Git repository.
  - If it is already present, a `git pull` operation is performed to update it.
  - For Python plugins, dependencies are resolved and installed based on a `requirements.txt` file.
- **Versioning Support**:
  The routine supports two Git versioning strategies:
  - **Branch**: The plugin version is interpreted as a branch name.
  - **Tag**: The version corresponds to a Git tag.
- **Supported Plugin Types**:
  - **Java/Kotlin**: Precompiled JAR files.
  - **Python**: Source files with a `requirements.txt` if needed.
  - **Binary**: Any self-contained executable compiled for Linux x86.
- **Exposed APIs**:
  The converter-routine provides endpoints for plugin management at the file system level:
  - Clean
  - Reinstall
  - Sync

---

### converter-service

The `converter-service` handles the actual execution of conversion plugins when triggered by a request to an external service. It integrates with a RabbitMQ message queue to process conversion tasks asynchronously.

- **Workflow**:
  1. The `external access service` receives a request that requires payload conversion.
  2. The service fetches the original payload and publishes a message to RabbitMQ, including the payload and the ID of the plugin to be used.
  3. The `converter-service` consumes the message, invokes the appropriate plugin on the payload, and sends the converted result back to the access service via RabbitMQ.
- **Plugin Execution Interface**:
  - Each plugin must be executable from the command line and conform to a simple interface.
  - The service invokes the plugin with the following arguments:
    1. **Custom arguments**: As defined in the plugin's metadata (e.g., main class for Java).
    2. **Input file path**: Path to a file containing the original payload.
    3. **Output file path**: Path where the plugin must write the converted result.
       Example execution:
  ```bash
  ./my-plugin --main-class MyClass input.json output.json
  ```
- **Temporary File Handling**:
  The service is responsible for creating the input file and cleaning it up post-execution. Plugins should only read from the input file and write the result to the output file path provided creating it if it does not exist.
- **Exposed APIs**:
  The converter-service also exposes a set of administrative APIs to:
  - Perform CRUD operations on plugins.
  - Manage plugin-to-distribution relationships.
  - These APIs are currently used manually but are fully compatible with future backoffice integration.

---

### Plugin Management

Plugins are described via a metadata model and stored in a centralized plugin catalogue as a separate schema in the main `metadata-database`. The following API can be used to register a new plugin:

```json
{
  "arguments": "string", // Custom execution arguments (excluding input/output paths)
  "description": "string", // Plugin description
  "enabled": true, // Whether the plugin is active
  "executable": "string", // Entry point: JAR file, Python main script, or binary name
  "name": "string", // Plugin name
  "repository": "string", // Git URL hosting the plugin
  "runtime": "binary", // One of: 'java', 'python', 'binary'
  "version_type": "branch", // 'branch' or 'tag'
  "version": "string" // Git branch or tag name
}
```

Once a plugin is registered, it can be associated with one or more **distributions** (a web service) using the following relation model:

```json
{
  "input_format": "string", // MIME type of the original payload
  "output_format": "string", // MIME type of the converted payload
  "plugin_id": "string", // Plugin ID from the catalogue
  "relation_id": "string" // Distribution instance ID
}
```
