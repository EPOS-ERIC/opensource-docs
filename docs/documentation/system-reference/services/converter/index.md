---
title: Converter Service
---

# Converter Service

The **Converter Service** is a critical architectural component within the EPOS Platform, designed to ensure seamless data interoperability. Its primary role is to transform data payloads retrieved from diverse external services into formats that the EPOS Graphical User Interface (GUI) can readily interpret and visualize.

Given that the EPOS Platform integrates with a wide array of external services, many of which may not adhere to a fixed or natively supported data format, the Converter provides essential flexibility. It enables on-the-fly data conversion at request time, allowing the frontend to display data regardless of its original structure. This is achieved through a robust plugin-based system, where each plugin encapsulates the specific logic required to transform a particular data format.

## Why the Converter?

A converter plugin becomes necessary when a service's data payload is not natively supported by the EPOS GUI. The GUI currently offers full support for the following formats and service types:

*   **[WMS (Web Map Service)](https://www.ogc.org/standards/wms)**
*   **[WFS (Web Feature Service)](https://www.ogc.org/standards/wfs)**
*   **[GeoJSON](https://geojson.org/)**
*   **[CoverageJSON (CovJSON)](https://covjson.org/)**
*   **[Extended GeoJSON (EPOS GeoJSON)](../../data-formats/geojson.md):** A custom extension of GeoJSON with EPOS-specific visualization enhancements.
*   **[Extended CovJSON (EPOS CovJSON)](../../data-formats/coveragejson/index.md):** A custom extension of CoverageJSON with EPOS-specific visualization enhancements.

If a service provides data in any of the above supported formats, **no conversion is required**. The Converter Service's core purpose is to act as an interoperability bridge, enabling the integration of external services that use alternative or proprietary data formats by converting them into a format the GUI can handle, without enforcing any single data standard.

## Converter Architecture

The Converter system is composed of two distinct microservices that work in tandem to manage the plugin lifecycle, execution, and integration within the broader EPOS system:

### Converter Routine (`converter-routine`)

The `converter-routine` service is dedicated to plugin provisioning and maintenance. It ensures that plugin code is always available and up-to-date within the execution environment. Adhering to the microservice principle of single responsibility, it performs the following key tasks:

*   **Plugin Retrieval and Synchronization:** Periodically (e.g., every 5 minutes via a scheduled cron job), it iterates through registered plugins. If a plugin is not present, it clones it from its Git repository. If present, it performs a `git pull` to update it.
*   **Dependency Management:** For Python plugins, it resolves and installs dependencies based on a `requirements.txt` file.
*   **Versioning Support:** Supports Git versioning strategies, interpreting the plugin version as either a branch name or a tag.
*   **Supported Plugin Types:** Handles Java/Kotlin (precompiled JARs), Python (source files with `requirements.txt`), and Binary (self-contained Linux x86 executables).
*   **Exposed APIs:** Provides endpoints for file system-level plugin management (Clean, Reinstall, Sync).

### Converter Service (`converter-service`)

The `converter-service` is responsible for the actual execution of conversion plugins. It is triggered when a request to an external service requires payload transformation and integrates with a RabbitMQ message queue for asynchronous processing.

*   **Workflow:**
    1.  The External Access Service receives a request requiring payload conversion.
    2.  It publishes a message to RabbitMQ containing the original payload and the ID of the plugin to use.
    3.  The `converter-service` consumes this message, invokes the specified plugin on the payload, and sends the converted result back to the access service via RabbitMQ.
*   **Plugin Execution Interface:** Each plugin must be an executable command-line tool. The service invokes the plugin with custom arguments (from plugin metadata), an input file path (for the original payload), and an output file path (where the plugin writes the converted result).
    ```bash
    ./my-plugin --main-class MyClass input.json output.json
    ```
*   **Temporary File Handling:** The service manages the creation and cleanup of temporary input files. Plugins are expected to read from the provided input path and write to the provided output path.
*   **Exposed APIs:** Offers administrative APIs for CRUD operations on plugins and managing plugin-to-distribution relationships. For detailed information on plugin management, refer to the [Converter Plugins guide](./plugins.md).
