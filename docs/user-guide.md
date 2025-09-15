---
sidebar_position: 3
id: user-guide
title: Getting Started
---

# User Guide

This guide will help you get the most out of EPOS Platform once it's installed and running. Learn how to navigate the interface, discover data, manage metadata, and integrate your own services.

## Getting Started

### Accessing the Platform

Once EPOS Platform is deployed, you can access it through your web browser:

- **Data Portal**: `http://localhost:32000` (or your configured domain)
- **API Documentation**: `http://localhost:33000/api/v1/ui`

## Data Discovery

### Browsing the Catalog

The EPOS Platform provides several ways to discover geospatial data:

#### Catalog Overview

TODO

#### Search Functionality

**Basic Search:**

- Use the search bar at the top of the page
- Search by service name, description, or keywords

**Advanced Search:**

TODO

### Data Preview

#### Interactive Maps

- **Zoom and pan** to explore geographic data
- **Layer controls** to show/hide different data layers
- **Feature information** by clicking on map elements
- **Time controls** for temporal data visualization

## Metadata Management

### Understanding Metadata

EPOS Platform uses the **EPOS-DCAT-AP** standard for metadata, which extends the DCAT-AP specification for geospatial data.

#### Key Metadata Fields

TODO

### Adding Your Own Data

#### Method 1: Using the Backoffice (Recommended)

The Backoffice provides a user-friendly interface for metadata management:

TODO

#### Method 2: Manual Metadata Files

TODO

**Example Turtle file:**

```turtle
TODO
```

### Metadata Validation

TODO

## Service Integration

### Supported Service Types

EPOS Platform supports various geospatial service types:

#### Web Map Service (WMS)

- **Standard**: OGC WMS 1.3.0
- **Use case**: Raster map images
- **Integration**: Automatic layer detection and preview

#### Web Feature Service (WFS)

- **Standard**: OGC WFS 2.0
- **Use case**: Vector data access
- **Integration**: Feature preview and download

#### REST APIs

- **Format**: JSON/XML responses
- **Use case**: Custom data services
- **Integration**: Through converter plugins

#### File-based Services

- **Formats**: GeoJSON, CoverageJSON, Shapefile
- **Use case**: Static data files
- **Integration**: Direct visualization

### Adding Custom Services

#### Step 1: Prepare Your Service

Ensure your service meets basic requirements:

- **Accessible URL**: Service must be publicly accessible
- **CORS enabled**: For web-based access
- **Documentation**: Clear API documentation
- **Error handling**: Proper HTTP status codes

#### Step 2: Create Metadata

Use the Backoffice or create Turtle files with:

TODO

- **Service endpoint**: URL to your service
- **Service type**: WMS, WFS, REST API, etc.
- **Data format**: Supported output formats
- **Geographic coverage**: Bounding box or regions
- **Temporal coverage**: Time period of data

#### Step 3: Submit for Integration

**Via Backoffice:**

1. Log into the Backoffice interface
2. Create new service entry
3. Fill in metadata form
4. Preview and submit

**Via File Upload:**

1. Create validated Turtle file
2. Upload to platform
3. Wait for ingestion process

#### Step 4: Test Integration

After submission:

1. **Search for your service** in the catalog
2. **Preview data** using the web interface
3. **Test API access** through the platform
4. **Verify metadata** accuracy

### Custom Data Formats

If your service uses non-standard data formats:

#### Using Converter Plugins

1. **Identify conversion needs**: What format do you need to convert to?
2. **Find existing plugins**: Check the plugin catalog
3. **Develop custom plugin**: If none exists
4. **Register plugin**: Add to the converter system
5. **Associate with service**: Link plugin to your service

#### Plugin Development

TODO: point to relevant page

## User Management

TODO: whole backoffice user management guide

## API Usage

### REST API Access

EPOS Platform provides a comprehensive REST API for programmatic access:

TODO

## Best Practices

### Data Quality

#### Metadata Quality

- **Complete information**: Fill in all relevant metadata fields
- **Accurate descriptions**: Provide clear, detailed descriptions
- **Proper keywords**: Use relevant, searchable keywords
- **Geographic accuracy**: Ensure bounding boxes are correct
- **Temporal accuracy**: Provide accurate time coverage

#### Service Reliability

- **Stable URLs**: Use permanent, stable service URLs
- **Error handling**: Implement proper error responses
- **Performance**: Optimize for reasonable response times
- **Documentation**: Provide clear API documentation
- **Versioning**: Use versioned APIs for stability

## Troubleshooting

### Common Issues

#### Service Not Appearing

TODO

#### Data Preview Issues

TODO

#### API Access Problems

TODO

### Getting Help

#### Documentation

- **API Documentation**: Check the interactive API docs
- **User Guide**: Refer to this guide for common tasks
- **Architecture Guide**: Understand system components

#### Community Support

- **GitHub Issues**: Report bugs and ask questions
- **Documentation**: Contribute to improving documentation

---

> **Next**: Explore [System Architecture](../architecture/overview) to understand how EPOS Platform works, or check out [Installation Overview](../installation/overview) for deployment guidance.
