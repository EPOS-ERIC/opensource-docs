---
title: Architecture
---

import MermaidFullscreen from '@site/src/components/MermaidFullScreen';

# EPOS Platform Architecture

The EPOS Platform is built as a robust, scalable, and modular microservice-based architecture. This design allows for independent development, deployment, and scaling of individual components, ensuring flexibility and resilience.

This document provides a high-level overview of the platform's architecture, illustrating how its various services interact to provide a unified geospatial data integration system.

<MermaidFullscreen
title="EPOS Platform Architecture Overview"
chart={`
flowchart TB
    %% Esterni
    AAAI[AAAI Manager]
    TCS[TCS Services]
    subgraph EPOS[EPOS System]
        subgraph Clients[ ]
            GUI[GUI Epos Data Portal]
            Other[Any other client]
            BackofficeGUI[GUI Backoffice]
        end
        APIGW[EPOS API Gateway]
        subgraph ExternalAccess[External Access Service]
            EAAPI[RESTful APIs]
            EADB[DB API]
        end
        subgraph Converter[ <a href='../services/converter/index.md'> Converter Service </a>]
            CAPI[RESTful APIs]
            CDB[DB API]
        end
        subgraph Ingestor[Ingestor Service]
            IAPI[RESTful APIs]
            IDB[DB API]
        end
        subgraph Backoffice[Backoffice Service]
            BAPI[RESTful APIs]
            BDB[DB API]
        end
        subgraph Resources[Resources Service]
            RAPI[RESTful APIs]
            RDB[DB API]
        end
        Queue[Queueing System]
        subgraph Metadata[ ]
            MC[Metadata Catalogue]
            MDB[DB API]
        end
    end

    %% Connessioni
    AAAI --> ExternalAccess
    TCS --> ExternalAccess
    GUI --> APIGW
    Other --> APIGW
    BackofficeGUI --> APIGW
    APIGW --> ExternalAccess
    APIGW --> Converter
    APIGW --> Ingestor
    APIGW --> Backoffice
    APIGW --> Resources
    ExternalAccess --> Queue
    Converter --> Queue
    Ingestor --> Queue
    Backoffice --> Queue
    Resources --> Queue
    Queue --> MC
    MDB --> MC
    %% Definizione colori
    classDef gateway fill:#fff7b2,stroke:#d4aa00,stroke-width:2px;
    classDef external fill:#cce5ff,stroke:#004085,stroke-width:2px;
    classDef converter fill:#ffe0cc,stroke:#cc5200,stroke-width:2px;
    classDef ingestor fill:#f2d9f2,stroke:#660066,stroke-width:2px;
    classDef backoffice fill:#e6ffe6,stroke:#006600,stroke-width:2px;
    classDef resources fill:#d9f2f2,stroke:#006666,stroke-width:2px;
    classDef client fill:#ffe6e6,stroke:#ffe6e6,stroke:#990000,stroke-width:2px;
    classDef queue fill:#f2f2f2,stroke:#333,stroke-width:1px;
    classDef metadata fill:#fff,stroke:#333,stroke-width:1px;
    %% Assegnazione classi
    class APIGW gateway
    class EAAPI,EADB,ExternalAccess external
    class CAPI,CDB,Converter converter
    class IAPI,IDB,Ingestor ingestor
    class BAPI,BDB,Backoffice backoffice
    class RAPI,RDB,Resources resources
    class GUI,Other,BackofficeGUI client
    class Queue queue
    class MC,MDB metadata
`}
/>

## Core Components Overview

The EPOS Platform is composed of several interconnected microservices, each responsible for a specific set of functionalities:

*   **EPOS API Gateway:** The central entry point for all client requests, routing them to the appropriate backend services.
*   **External Access Service:** Handles interactions with external geospatial services, including data retrieval and initial processing.
*   **[Converter Service](./services/converter/index.md):** Responsible for transforming data payloads from external services into formats compatible with the EPOS GUI.
*   **Ingestor Service:** Manages the ingestion of metadata (e.g., from `.ttl` files) into the system's metadata catalogue.
*   **[Backoffice Service](./services/backoffice.md):** Provides administrative functionalities, including metadata management and system configuration.
*   **Resources Service:** Manages service descriptions and catalogue information.
*   **Queueing System:** Facilitates asynchronous communication between services, ensuring efficient and reliable data processing.
*   **Metadata Catalogue:** The central repository for all service descriptions and catalogue information.

## Key Architectural Principles

The platform's design adheres to several key architectural principles:

*   **Microservices Design:** Each service is loosely coupled and focuses on a single responsibility, enhancing maintainability and scalability.
*   **Extensibility:** The plugin-based Converter Service allows for easy integration of new or custom data formats.
*   **Scalability:** Services can be scaled independently to handle varying loads, ensuring high availability and performance.
*   **Standards Compliance:** Built upon open standards (e.g., OGC, DCAT-AP) to ensure interoperability and broad compatibility.

## Data Flow (High-Level)

{/* TODO: Add a brief explanation of the typical data flow. */}
