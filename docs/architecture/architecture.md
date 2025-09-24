---
sidebar_position: 1
id: architecture
title: Architecture
---

import MermaidFullscreen from '@site/src/components/MermaidFullscreen';

TODO: explain how the architecture works. point to the individual services pages

<MermaidFullscreen
title="nome del modal"
chart={`    
flowchart TB
    %% Esterni
    AAAI[AAAI Manager]
    TCS[TCS Services]
    subgraph EPOS[EPOS System]
        subgraph Clients[ ]
            GUI[GUI Epos Data PoR]
            Other[Any other client]
            BackofficeGUI[GUI Backoffice]
        end
        APIGW[EPOS API Gateway]
        subgraph ExternalAccess[External Access Service]
            EAAPI[RESTful APIs]
            EADB[DB API]
        end
        subgraph Converter[ <a href='/opensource-docs/documentation/services/converter'> Converter Service </a>]
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
    classDef client fill:#ffe6e6,stroke:#990000,stroke-width:2px;
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
    class MC,MDB metadata`}
/>
