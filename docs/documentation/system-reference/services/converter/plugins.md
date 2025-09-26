---
sidebar_position: 2
id: plugins
title: Converter Plugins
---

# Converter Plugins

Converter plugins are the core mechanism that enables the EPOS Platform to transform data from external services into formats that can be visualized by the GUI. These plugins provide the flexibility to integrate any data format without requiring changes to the core platform.

## What are Converter Plugins?

Converter plugins are standalone programs designed to act as intermediaries between external data services and the EPOS GUI. They perform the crucial task of data transformation, allowing the platform to support a wide array of data formats, including proprietary or non-standard ones. This design ensures the platform remains highly extensible without requiring modifications to its core codebase.

## Plugin Architecture

### Execution Model

Plugins are executed as separate processes with a standardized command-line interface. The Converter Service invokes each plugin with specific arguments:

```bash
./plugin-executable [custom-arguments] input-file output-file
```

*   **`plugin-executable`**: The path to the plugin's executable file (e.g., a compiled binary, a Java JAR, or a Python script).
*   **`custom-arguments`**: Optional, plugin-specific parameters defined in the plugin's metadata.
*   **`input-file`**: The absolute path to a temporary file containing the original data payload from the external service. Plugins must read their input from this file.
*   **`output-file`**: The absolute path to a temporary file where the plugin must write the converted data. Plugins are responsible for creating this file if it doesn't exist.

### Supported Runtimes

The Converter system supports plugins developed in various technologies:

*   **Java/Kotlin**: Packaged as precompiled JAR files.
*   **Python**: Provided as source files, with dependencies managed via a `requirements.txt` file.
*   **Binary**: Any self-contained executable compiled for Linux x86.

### Plugin Interface Guidelines

All plugins, regardless of their runtime, must adhere to the following command-line interface guidelines:

*   **Input Handling:** Read the original data payload from the specified `input-file` path.
*   **Output Handling:** Write the converted data to the specified `output-file` path.
*   **Error Handling:** Provide meaningful error messages to `stderr` and exit with a non-zero status code for failures.
*   **Clean Exit:** Exit with a zero status code (`0`) upon successful completion.

## Developing Custom Plugins

Developing a custom converter plugin involves creating a standalone program that adheres to the Plugin Interface Guidelines described above. The choice of programming language or runtime is flexible, as long as the plugin can be executed via the command line and respects the input/output file contract.

{/* TODO: Add a simple example plugin in a common language (e.g., Python) to illustrate the interface. */}

### Plugin Development Guidelines

*   **Input/Output Handling:**
    *   Plugins should only read from the provided input file.
    *   Plugins must create the output file if it doesn't exist and write the converted result to it.
*   **Performance Considerations:**
    *   Optimize for reasonable execution times, as plugins are executed dynamically at request time.
    *   Avoid excessive memory consumption.
    *   Ensure proper resource cleanup (e.g., closing file handles).
    *   Plugins have a default timeout of 30 seconds; ensure your plugin completes within this limit.
*   **Error Handling:**
    *   Implement robust error handling within your plugin.
    *   Return appropriate exit codes (0 for success, non-zero for failure).
    *   Log detailed error messages to `stderr` for easier debugging.

## Plugin Management

Plugins are managed through a centralized catalogue, defined by a metadata model, and can be associated with specific data distributions.

### Plugin Metadata Model

To register a new plugin, its metadata is described using the following JSON structure. This metadata is used by the `converter-routine` for provisioning and by the `converter-service` for execution.

```json
{
  "arguments": "string",       // Custom execution arguments (excluding input/output paths)
  "description": "string",     // Plugin description
  "enabled": true,             // Whether the plugin is active
  "executable": "string",      // Entry point: JAR file, Python main script, or binary name
  "name": "string",            // Unique name for the plugin
  "repository": "string",      // Git URL hosting the plugin's source code
  "runtime": "binary",         // Runtime environment: "java", "python", or "binary"
  "version_type": "branch",    // Git versioning strategy: "branch" or "tag"
  "version": "string"          // Git branch or tag name (e.g., "main" or "v1.0.0")
}
```

### Plugin-Distribution Relation Model

Once registered, a plugin can be associated with one or more **distributions** (web services) that require its conversion capabilities. This association is defined by the following relation model:

```json
{
  "input_format": "string",    // MIME type of the original payload the plugin expects
  "output_format": "string",   // MIME type of the converted payload the plugin produces
  "plugin_id": "string",       // The unique ID of the plugin from the catalogue
  "relation_id": "string"      // The unique ID of the distribution instance to associate with
}
```

## Official EPOS Plugins

The EPOS project maintains a collection of official converter plugins that serve as examples and ready-to-use solutions:

*   **GitLab Repository**: [https://gitlab.com/epos-eric/epos/converter-plugins](https://gitlab.com/epos-eric/epos/converter-plugins)

These official plugins can be used in several ways:

*   **Direct Use**: Deploy them as-is for your specific data formats.
*   **Template Reference**: Study their code to understand plugin development patterns.
*   **Customization**: Modify existing plugins to fit your unique requirements.
*   **Learning Resource**: Use them as practical examples for developing your own custom plugins.