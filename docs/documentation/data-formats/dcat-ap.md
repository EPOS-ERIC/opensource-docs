# EPOS-DCAT-AP

EPOS-DCAT-AP is a metadata standard specifically designed for the EPOS Platform. It extends the DCAT-AP (Data Catalog Application Profile) specification to provide comprehensive metadata descriptions for geospatial web services and data resources.

## What is EPOS-DCAT-AP?

EPOS-DCAT-AP is a specialized metadata profile that:

- **Extends DCAT-AP**: Builds upon the European Commission's DCAT-AP standard
- **Geospatial Focus**: Adds specific properties for geographic and geophysical data
- **Service-Oriented**: Designed to describe web services rather than just datasets
- **EPOS-Specific**: Includes properties specific to the EPOS ecosystem

## How it Relates to EPOS Platform

EPOS-DCAT-AP is fundamental to the EPOS Platform architecture:

### Metadata Management

- **Service Descriptions**: All web services in EPOS Platform are described using EPOS-DCAT-AP
- **Catalog Structure**: The metadata standard defines how services are organized and discovered
- **Search Capabilities**: Enables sophisticated search and filtering of geospatial services

### Data Integration

- **Standardized Descriptions**: Ensures consistent metadata across all integrated services
- **Interoperability**: Facilitates integration with other DCAT-AP compliant systems
- **Quality Assurance**: Provides validation rules for metadata completeness and accuracy

### User Experience

- **Rich Descriptions**: Enables detailed service information display in the web interface
- **Advanced Search**: Supports complex search queries based on metadata properties
- **Service Discovery**: Helps users find relevant geospatial services

## Key Features

### Extended Properties

EPOS-DCAT-AP adds several properties beyond standard DCAT-AP:

- **Spatial Coverage**: Detailed geographic extent information
- **Temporal Coverage**: Time period and update frequency
- **Service Types**: Specific geospatial service types (WMS, WFS, etc.)
- **Data Formats**: Supported output formats and encodings
- **Quality Information**: Data quality and reliability metrics

### Geospatial Enhancements

- **Coordinate Systems**: Spatial reference system information
- **Bounding Boxes**: Geographic extent definitions
- **Administrative Areas**: Country and region coverage
- **Elevation Information**: Vertical extent and elevation ranges

### Service-Specific Properties

- **Endpoint URLs**: Service access points and capabilities
- **Authentication**: Access control and authentication requirements
- **Rate Limits**: Usage restrictions and quotas
- **Documentation**: Links to service documentation and examples

## Official References

### Current Version

- **Official Documentation**: [https://epos-eu.github.io/EPOS-DCAT-AP/](https://epos-eu.github.io/EPOS-DCAT-AP/)
- **GitHub Repository**: [https://github.com/epos-eu/EPOS-DCAT-AP](https://github.com/epos-eu/EPOS-DCAT-AP)

### Version 1 Documentation

- **Legacy Documentation**: [https://github.com/epos-eu/EPOS-DCAT-AP/tree/EPOS-DCAT-AP-shapes/docs](https://github.com/epos-eu/EPOS-DCAT-AP/tree/EPOS-DCAT-AP-shapes/docs)

## Usage in EPOS Platform

### Metadata Creation

When adding services to EPOS Platform, metadata must conform to EPOS-DCAT-AP:

1. **Service Registration**: Services are registered with EPOS-DCAT-AP compliant metadata
2. **Validation**: Metadata is validated against EPOS-DCAT-AP schemas
3. **Storage**: Validated metadata is stored in the platform's metadata database
4. **Discovery**: Services become discoverable through the platform's search interface

### Metadata Formats

EPOS-DCAT-AP supports multiple serialization formats:

- **Turtle (TTL)**: Primary format for human-readable metadata
- **JSON-LD**: Machine-readable format for API integration
- **RDF/XML**: Alternative XML serialization

### Example Usage

```turtle
@prefix dcat: <http://www.w3.org/ns/dcat#> .
@prefix dct: <http://purl.org/dc/terms/> .
@prefix epos: <http://www.epos-eu.org/epos-dcat-ap#> .

<http://example.com/seismic-service>
    a dcat:DataService ;
    dct:title "Seismic Data Service" ;
    dct:description "Real-time seismic data from monitoring stations" ;
    dct:keyword "seismic", "earthquake", "monitoring" ;
    dcat:endpointURL <http://example.com/seismic/api> ;
    epos:serviceType "REST API" ;
    epos:dataFormat "application/json" ;
    epos:spatialCoverage [
        a epos:SpatialCoverage ;
        epos:boundingBox [
            a epos:BoundingBox ;
            epos:westBoundLongitude -180.0 ;
            epos:eastBoundLongitude 180.0 ;
            epos:southBoundLatitude -90.0 ;
            epos:northBoundLatitude 90.0
        ]
    ] .
```

## Integration with Other Standards

EPOS-DCAT-AP is designed to work with:

- **OGC Standards**: Web Map Service (WMS), Web Feature Service (WFS)
- **ISO Standards**: ISO 19115 for geographic metadata
- **W3C Standards**: DCAT, PROV for provenance tracking
- **INSPIRE**: European spatial data infrastructure standards

## Future Development

EPOS-DCAT-AP continues to evolve:

- **Version Updates**: Regular updates to align with DCAT-AP evolution
- **New Properties**: Additional properties for emerging use cases
- **Tool Support**: Enhanced validation and editing tools
- **Community Input**: Feedback from EPOS Platform users and contributors

