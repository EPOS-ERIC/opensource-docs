---
title: Data Model
---

import MermaidFullscreen from '@site/src/components/MermaidFullScreen';

# EPOS Data Model

The EPOS Data Model defines the fundamental structure of information managed and presented by the EPOS Platform. It serves as a crucial guideline for defining the inputs and outputs of various system components and ensures consistency across all data interactions. Understanding this model is key to comprehending how data is organized and utilized within the EPOS ecosystem.

## Data Model Diagram

The following class diagram provides a comprehensive overview of the EPOS Data Model, illustrating the key entities and their relationships.

<MermaidFullscreen
title="EPOS Data Model Overview"
maxPreviewHeight={400}
chart={`classDiagram
direction LR
class Distribution {
+UID string
+Title string
+Description string
+Issued DateTime
+Modified DateTime
+Format string
+License string
+AccessURL URL
+DownloadURL URL
}
class WebService {
+UID string
+Title string
+Category string
+Description string
+Issued DateTime
+Modified DateTime
+Documentation URL
+Endpoint URL
+License string
+Keywords string
+TemporalExtent PeriodOfTime
}
class Operation {
+Method string
+Returns string
+Name string
+Template string
}
class Mapping {
+Variable string
+Source string
+Range string
+MappingRef string
+MappingValue string
+MappingUnit string
+Property string
+ValueOrPattern string
}
class DataProduct {
+UID string
+Title string
+Description string
+Identifier string
+Created DateTime
+Issued DateTime
+Modified DateTime
+Version string
+Type string
+Keyword string
+AccessRight string
+Provenance string
+Relation string
}
class Software {
+Identifier string
+Name string
+Description string
+Version string
+License string
+SourceRepository URL
+Documentation URL
+ProgrammingLanguage string
+RuntimePlatform string
}
class Publication {
+Identifier string
+Title string
+Author string
+Issued DateTime
+Abstract string
+Keyword string
+License string
+Category string
}
class Person {
+Identifier string
+GivenName string
+FamilyName string
+Email string
+ORCID string
+Telephone string
+CVURL URL
}
class Organization {
+Identifier string
+LegalName string
+Acronym string
+Address string
+Email string
+URL URL
+Telephone string
}
class Facility {
+UID string
+Title string
+Description string
+Category string
+Type string
+SpatialExtent string
}
class Equipment {
+UID string
+Title string
+Description string
+Name string
+Type string
+Manufacturer string
+SerialNumber string
+SpatialExtent string
+TemporalExtent PeriodOfTime
}
class Service {
+Identifier string
+Title string
+Description string
+Category string
+Type string
+SpatialExtent string
+TemporalExtent PeriodOfTime
+PageURL URL
}
Distribution "many" <-- "many" WebService : Access Service
WebService "1" --> "many" Operation : Supported Operations
Operation "1" --> "many" Mapping : Mapping
DataProduct "1" --> "many" Distribution : Distribution
DataProduct "many" --> "many" Publication : Publisher
DataProduct "many" --> "many" Person : Contact Point
Organization "1" --> "many" DataProduct : Provider
Software "many" --> "many" Person : Contact Point
Publication "many" --> "many" Person : Author
Person "many" --> "many" Organization : Affiliation / Member Of
Organization "many" --> "many" Person : Contact Point / Owns
Organization "1" --> "many" Facility : Is Part Of
Facility "1" --> "many" Equipment : Is Part Of
Organization "1" --> "many" Service : Provider
Equipment "many" --> "many" Person : Contact Point
Service "many" --> "many" Person : Contact Point
style Distribution fill:#d9f2d9,stroke:#006600,stroke-width:2px
style WebService fill:#d9f2d9,stroke:#006600,stroke-width:2px
style Operation fill:#d9f2d9,stroke:#006600,stroke-width:2px
style Mapping fill:#d9f2d9,stroke:#006600,stroke-width:2px
style DataProduct fill:#fff7b2,stroke:#d4aa00,stroke-width:2px
style Software fill:#f2f2f2,stroke:#333,stroke-width:1px
style Publication fill:#f2f2f2,stroke:#333,stroke-width:1px
style Person fill:#f2f2f2,stroke:#333,stroke-width:1px
style Organization fill:#fff7b2,stroke:#d4aa00,stroke-width:2px
style Facility fill:#fff7b2,stroke:#d4aa00,stroke-width:2px
style Equipment fill:#fff7b2,stroke:#d4aa00,stroke-width:2px
style Service fill:#fff7b2,stroke:#d4aa00,stroke-width:2px
class Distribution:::functional
class WebService:::functional
class Operation:::functional
class Mapping:::functional
class DataProduct:::baseline
class Software:::neutral
class Publication:::neutral
class Person:::neutral
class Organization:::baseline
class Facility:::baseline
class Equipment:::baseline
class Service:::baseline`}
/>

## Core Concepts

The EPOS Data Model is built around several core concepts, each represented as a class in the diagram above:

- **DataProduct:** Represents the fundamental unit of scientific data within the EPOS ecosystem. It includes metadata such as title, description, identifier, and version.
- **Distribution:** Describes how a `DataProduct` can be accessed, including its format, license, and access URLs. A `DataProduct` can have multiple `Distributions`.
- **WebService:** Represents a web service that provides access to `DataProduct`s. It includes information about its endpoint, documentation, and supported operations.
- **Operation:** Defines a specific action or query that can be performed on a `WebService`.
- **Mapping:** Describes how data fields from an `Operation` are mapped to the EPOS Data Model.
- **Person:** Represents individuals involved in the EPOS ecosystem, such as authors, contact points, or data providers.
- **Organization:** Represents institutions or groups associated with data products, services, or facilities.
- **Facility:** Describes a research facility or infrastructure.
- **Equipment:** Represents scientific equipment used in data collection.
- **Service:** A generic representation of a service provided by an `Organization`.
- **Software:** Describes software components related to data processing or analysis.
- **Publication:** Represents scientific publications associated with data products.

## Usage within the EPOS Platform

The EPOS Data Model is central to the platform's functionality:

- **Metadata Ingestion:** All metadata ingested into the platform (e.g., via `.ttl` files) must conform to this data model.
- **Data Discovery:** The EPOS Platform GUI uses this model to enable comprehensive search and filtering of available data products and services.
- **Service Integration:** The model guides how external web services are integrated and how their data is mapped for consistent presentation.
- **Data Visualization:** The structure defined by the model informs how data is visualized in the GUI, ensuring that relevant information is displayed effectively.

## Download the Full Data Model

For a more in-depth understanding, you can download the complete EPOS Data Model specification:

<a href="/opensource-docs/documents/epos_data_model.pdf" download="EPOS_DATA_MODEL.pdf">**Download EPOS Data Model PDF**</a>
