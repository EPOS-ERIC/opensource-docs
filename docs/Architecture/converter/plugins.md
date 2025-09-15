---
sidebar_position: 2
id: plugins
title: Converter Plugins
---

# Converter Plugins

Converter plugins are the core mechanism that enables EPOS Platform to transform data from external services into formats that can be visualized by the GUI. These plugins provide the flexibility to integrate any data format without requiring changes to the core platform.

## What are Converter Plugins?

Converter plugins are standalone programs that:

- **Transform Data**: Convert data from one format to another
- **Handle Custom Formats**: Support proprietary or non-standard data formats
- **Enable Integration**: Allow external services to work with EPOS Platform
- **Maintain Flexibility**: Keep the platform extensible without core modifications

## Plugin Architecture

### Execution Model

Plugins are executed as separate processes with a standardized interface:

```bash
./plugin-executable [custom-arguments] input-file output-file
```

### Supported Runtimes

- **Java/Kotlin**: Precompiled JAR files
- **Python**: Source files with optional requirements.txt
- **Binary**: Self-contained executables for Linux x86

### Plugin Interface

All plugins must conform to a simple command-line interface:

1. **Custom Arguments**: Plugin-specific parameters (e.g., main class for Java)
2. **Input File**: Path to file containing original payload
3. **Output File**: Path where converted result should be written

## Official EPOS Plugins

The EPOS project maintains a collection of official converter plugins:

**GitLab Repository**: [https://gitlab.com/epos-eric/epos/converter-plugins](https://gitlab.com/epos-eric/epos/converter-plugins)

### Using Official Plugins

You can use these plugins in several ways:

1. **Direct Use**: Deploy plugins as-is for your specific data formats
2. **Template Reference**: Study the code to understand plugin development patterns
3. **Customization**: Modify existing plugins for your specific requirements
4. **Learning Resource**: Use as examples for developing your own plugins

## Developing Custom Plugins

### Plugin Requirements

#### Java/Kotlin Plugins

```java
TODO
```

#### Python Plugins

```python
TODO
```

#### Binary Plugins

```go
TODO
```

### Plugin Development Guidelines

#### Input/Output Handling

- **Read Only**: Plugins should only read from the input file
- **Create Output**: Plugins must create the output file if it doesn't exist
- **Error Handling**: Provide meaningful error messages for failures
- **Clean Exit**: Use appropriate exit codes (0 for success, non-zero for errors)

#### Performance Considerations

- **Efficiency**: Optimize for reasonable execution times
- **Memory Usage**: Avoid excessive memory consumption
- **Resource Cleanup**: Clean up temporary resources
- **Timeout Handling**: Complete within reasonable time limits. By default a 30 seconds timeout is set for every plugin execution.

## Plugin Registration

### Metadata Model

Plugins are registered using a JSON metadata structure:

```json
{
  "name": "my-data-converter",
  "description": "Converts MyData format to GeoJSON",
  "repository": "https://github.com/myorg/my-converter",
  "version": "v1.0.0",
  "version_type": "tag",
  "runtime": "python",
  "executable": "convert.py",
  "arguments": "--format geojson",
  "enabled": true
}
```

### Distribution Association

Plugins are associated with specific distributions (web services):

```json
{
  "input_format": "application/xml",
  "output_format": "application/geo+json",
  "plugin_id": "my-data-converter",
  "relation_id": "distribution-service-001"
}
```

## Plugin Management

### Version Control

- **Git Integration**: Plugins are stored in Git repositories
- **Version Support**: Both branch and tag-based versioning
- **Automatic Updates**: Plugin populator can update plugin versions
- **Rollback**: Ability to revert to previous plugin versions

### Monitoring and Maintenance

- **Execution Logs**: Monitor plugin execution and performance
- **Error Tracking**: Track conversion failures and issues
- **Performance Metrics**: Monitor conversion times and resource usage
- **Update Management**: Keep plugins updated with latest versions

---

> **Related**: Learn about [Plugin Populator](./plugin-populator) for bulk plugin management or explore the [Converter System Overview](./overview) for the complete architecture.
