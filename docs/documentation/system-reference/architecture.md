---
title: Architecture
---

import MermaidFullscreen from '@site/src/components/MermaidFullScreen';

# EPOS Platform Architecture

The EPOS Platform is built as a robust, scalable, and modular microservice-based architecture. This design allows for independent development, deployment, and scaling of individual components, ensuring flexibility and resilience.

This document provides a high-level overview of the platform's architecture, illustrating how its various services interact to provide a unified geospatial data integration system.

<MermaidFullscreen
title="EPOS Platform Architecture Overview"
useElkLayout={true} 
maxPreviewHeight={450}
chart={`
flowchart LR
 subgraph Clients["Clients"]
        GUI["EPOS Platform GUI"]
        Other["Any other client"]
        BackofficeGUI["GUI Backoffice"]
  end
 subgraph subGraph1["External Entities"]
    direction TB
        Clients
        AAAI["AAAI Manager"]
        TCS["TCS Services"]
  end
 subgraph Entrypoint["Entrypoint"]
    direction TB
        APIGW["EPOS API Gateway"]
  end
 subgraph Services["Services"]
        ExternalAccess["External Access Service"]
        Ingestor["Ingestor Service"]
        Backoffice@{ label: "<a href=\"./services/backoffice\"> Backoffice Service </a>" }
        Resources["Resources Service"]
        EmailSender["Email Sender Service"]
        Sharing["Sharing Service"]
        Routine["Routine Service"]
        Converter@{ label: "<a href=\"./services/converter\"> Converter Service </a>" }
  end
 subgraph subGraph4["Shared Infrastructure"]
        Queue["RabbitMQ"]
        SharedVol["Shared Volume"]
  end
 subgraph subGraph5["Application Layer"]
    direction TB
        Services
        subGraph4
  end
 subgraph subGraph6["Data Layer"]
    direction TB
        MDB["Database (MDB)"]
  end
 subgraph subGraph7["EPOS Core System"]
    direction LR
        Entrypoint
        subGraph5
        subGraph6
  end
    Clients --> APIGW
    AAAI --> APIGW
    TCS --> ExternalAccess
    APIGW --> ExternalAccess & Converter & Ingestor & Backoffice & Resources & EmailSender & Sharing & Routine
    Converter --> Queue
    Resources --> Queue & MDB
    ExternalAccess --> Queue & MDB
    Routine --- SharedVol
    SharedVol --- Converter
    Ingestor --> MDB
    Backoffice --> MDB
    EmailSender --> MDB
    Sharing --> MDB
    Routine --> MDB
    Backoffice@{ shape: rect}
    Converter@{ shape: rect}
     GUI:::client
     Other:::client
     BackofficeGUI:::client
     Clients:::client
     APIGW:::gateway
     ExternalAccess:::external
     Ingestor:::ingestor
     Backoffice:::backoffice
     Resources:::resources
     EmailSender:::emailsender
     Sharing:::sharing
     Routine:::routine
     Converter:::converter
     Queue:::queue
     MDB:::metadata
    classDef gateway fill:#fff7b2,stroke:#d4aa00,stroke-width:2px
    classDef external fill:#cce5ff,stroke:#004085,stroke-width:2px
    classDef converter fill:#ffe0cc,stroke:#cc5200,stroke-width:2px
    classDef ingestor fill:#f2d9f2,stroke:#660066,stroke-width:2px
    classDef backoffice fill:#e6ffe6,stroke:#006600,stroke-width:2px
    classDef resources fill:#d9f2f2,stroke:#006666,stroke-width:2px
    classDef emailsender fill:#fff0e6,stroke:#cc6600,stroke-width:2px
    classDef sharing fill:#e6f0ff,stroke:#0066cc,stroke-width:2px
    classDef routine fill:#fffbe6,stroke:#ccb300,stroke-width:2px
    classDef client fill:#ffe6e6,stroke:#990000,stroke-width:2px
    classDef queue fill:#f2f2f2,stroke:#333,stroke-width:1px
    classDef metadata fill:#fff,stroke:#333,stroke-width:1px
`
}/>

## Core Components Overview

The EPOS Platform is composed of several interconnected microservices, each responsible for a specific set of functionalities:

*   **EPOS API Gateway:** The central entry point for all client requests, routing them to the appropriate backend services.
*   **External Access Service:** Handles interactions with external geospatial services, including data retrieval and initial processing.
*   **[Converter Service](./services/converter/index.md):** Responsible for transforming data payloads from external services into formats compatible with the EPOS GUI.
*   **Ingestor Service:** Manages the ingestion of metadata (e.g., from `.ttl` files) into the system's metadata catalogue.
*   **[Backoffice Service](./services/backoffice.md):** Provides administrative functionalities, including metadata management and system configuration.
*   **Resources Service:** Manages service descriptions and catalogue information.
*   **RabbitMQ:** Facilitates asynchronous communication between services, ensuring efficient and reliable data processing.
*   **Metadata Catalogue:** The central repository for all service descriptions and catalogue information.

## Key Architectural Principles

The platform's design adheres to several key architectural principles:

*   **Microservices Design:** Each service is loosely coupled and focuses on a single responsibility, enhancing maintainability and scalability.
*   **Extensibility:** The plugin-based Converter Service allows for easy integration of new or custom data formats.
*   **Scalability:** Services can be scaled independently to handle varying loads, ensuring high availability and performance.
*   **Standards Compliance:** Built upon open standards (e.g., OGC, DCAT-AP) to ensure interoperability and broad compatibility.

## Data Flow (High-Level)

{/* TODO: Add a brief explanation of the typical data flow. */}
