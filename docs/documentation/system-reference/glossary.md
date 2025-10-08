---
title: Glossary
sidebar_position: 100
---

# Glossary

This page defines key terms and concepts used throughout the EPOS Platform documentation.

## Environment

An "environment" is a named, isolated instance of the EPOS Platform, with its own configuration and data. You can have multiple environments for testing, development, or different production use cases.

## TTL File

A TTL file is a metadata file written in the [Turtle format](https://www.w3.org/TR/turtle/). These files are used to describe datasets and services so they can be discovered and used by the EPOS Platform. You can find or create these files to load your own data and visualize it in the GUI.

## Backoffice

A web-based interface for managing the platform's metadata, users, and configurations. It provides a graphical way to create, edit, and publish service descriptions without needing to manually edit files. For more information, see the [Backoffice Service documentation](./services/backoffice.md).

## Converter Service

A core service that transforms data from various external formats into a structure that the EPOS GUI can display. It uses a plugin-based system to support a wide range of data formats. For more information, see the [Converter Service documentation](./services/converter/index.md).

## Data Catalogue

A centralized collection of metadata that describes the data services and products available in the EPOS Platform. It is the core component for data discovery.

## Distribution

A specific representation of a data product, detailing how it can be accessed. A single data product can have multiple distributions, such as different data formats (e.g., GeoJSON, CSV) or access methods (e.g., API endpoint, direct download).

## EPOS-DCAT-AP

A metadata standard based on DCAT-AP, tailored for the solid-Earth sciences. It provides a common vocabulary for describing datasets, services, and other resources within the EPOS ecosystem. For more information, see the [EPOS-DCAT-AP documentation](./data-formats/dcat-ap.md).

## Metadata

Data that provides information about other data. In EPOS, this typically refers to the descriptive information about a data service or product, such as its title, creator, format, and access methods. This information is what populates the Data Catalogue.

## Plugin

A standalone program that can be added to the Converter Service to transform a specific data format into a format that the EPOS GUI can understand. This allows the platform to be extended to support new or custom data formats. For more information, see the [Converter Plugins documentation](./services/converter/plugins.md).

## CoverageJSON (CovJSON)

A data format for publishing multi-dimensional data, such as grids and time series, to the web. The EPOS Platform extends this format to support enhanced visualizations like error bars and scatter plots. For more information, see the [CoverageJSON documentation](./data-formats/coveragejson/index.md).

## GeoJSON

An open standard format for encoding geographic data structures, such as points, lines, and polygons, using JSON. The EPOS Platform extends this format to allow for richer styling and visualization of map features. For more information, see the [GeoJSON documentation](./data-formats/geojson.md).

## OGC (Open Geospatial Consortium)

An international standards organization that develops and promotes open standards for geospatial data and services. Many of the standards supported by the EPOS Platform, such as WMS and WFS, are defined by the OGC. More information can be found at the [OGC website](https://www.ogc.org/).

## WFS (Web Feature Service)

An OGC standard that provides an interface for requesting vector geographic features from a web server. It allows for querying and retrieving feature data, which can then be used in maps and spatial analysis. More information can be found on the [OGC website](https://www.ogc.org/standards/wfs).

## WMS (Web Map Service)

An OGC standard that provides an interface for requesting geo-registered map images from a web server. Unlike WFS, which provides feature data, WMS provides rendered images of map layers. More information can be found on the [OGC website](https://www.ogc.org/standards/wms).

## API Gateway

A component that acts as a single entry point for all client requests to the platform's backend services. It routes requests, handles authentication, and can provide other cross-cutting concerns like rate limiting and logging. For more information, see the [Wikipedia article on API Gateway](https://en.wikipedia.org/wiki/API_gateway).

## Docker Compose

A tool for defining and running multi-container Docker applications. It uses a YAML file to configure the application's services, networks, and volumes. In EPOS, it is used for local development and small-scale deployments. More information can be found in the [official Docker documentation](https://docs.docker.com/compose/).

## Kubernetes

An open-source container orchestration platform for automating the deployment, scaling, and management of containerized applications. It is the recommended deployment method for production environments of the EPOS Platform. More information can be found on the [official Kubernetes website](https://kubernetes.io/).

## Microservice

An architectural style that structures an application as a collection of loosely coupled services. Each service is self-contained, focuses on a single business capability, and can be deployed independently. The EPOS Platform is built using a microservice architecture. For more information, see the [Wikipedia article on Microservices](https://en.wikipedia.org/wiki/Microservices).

## Namespace

In Kubernetes, a namespace provides a mechanism for isolating groups of resources within a single cluster. When deploying the EPOS Platform to Kubernetes, each environment is created in its own dedicated namespace to prevent naming conflicts and provide a degree of isolation. For more information, see the [Kubernetes documentation on Namespaces](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/).
