---
title: Services Overview
---

# EPOS Platform Services Overview

The EPOS Platform is built as a collection of interconnected microservices, each designed to perform a specific function within the system. This document provides a high-level overview of these core services, explaining their roles and how they contribute to the overall functionality of the platform.

For a broader understanding of how these services fit into the overall system, please refer to the [Architecture Overview](../architecture.md).

## Core Services

*   **EPOS API Gateway:** This service acts as the central entry point for all client requests, routing them to the appropriate backend microservice, handles authentication, and provides a unified API for the entire platform.
    {/* TODO: Add link to dedicated API Gateway documentation page when available. */}

*   **External Access Service:** Responsible for managing interactions with external geospatial data providers. It handles data retrieval from various external sources and prepares it for further processing within the EPOS Platform.
    {/* TODO: Add link to dedicated External Access Service documentation page when available. */}

*   **[Converter Service](./converter/index.md):** This service is crucial for data interoperability. It transforms data payloads from external services into formats compatible with the EPOS GUI, ensuring that diverse data sources can be visualized and utilized within the platform.
    {/* TODO: Add more details about the Converter Service's role and capabilities. */}

*   **Ingestor Service:** Manages the process of ingesting metadata into the EPOS Platform. It handles the parsing and storage of metadata (from `.ttl` files) into the system's Metadata Catalogue.
    {/* TODO: Add link to dedicated Ingestor Service documentation page when available. */}

*   **[Backoffice Service](./backoffice.md):** A web-based interface and its supporting backend service designed to provide intuitive, graphical management of metadata. It allows users to create, edit, and delete service descriptions, streamlining metadata curation and overcoming the complexities of manual file editing. It also includes robust user and group management for secure operations.
    {/* TODO: Add link to dedicated Backoffice Service documentation page when available. */}

*   **Resources Service:** This service is responsible for managing the descriptions and catalogue information of all available data products and services within the EPOS Platform. It acts as the central registry for discoverable resources.
    {/* TODO: Add link to dedicated Resources Service documentation page when available. */}

*   **Queueing System:** (e.g., RabbitMQ) Facilitates asynchronous communication and task processing between the various microservices. This ensures efficient and reliable operation, especially for long-running tasks like data ingestion or conversion.
    {/* TODO: Add more details about the Queueing System's implementation and role. */}

*   **Metadata Catalogue:** The central repository where all metadata about data products and services is stored. It's the backbone for data discovery and management within the EPOS Platform.
    {/* TODO: Add more details about the Metadata Catalogue's structure and how it's managed. */}
