---
sidebar_position: 5
title: EPOS Data Formats
---

# EPOS Data Formats

The EPOS Platform is designed to integrate and visualize a wide variety of geospatial data. To achieve this, it supports several standard and extended data formats. Understanding these formats is crucial for both data providers and users, as they dictate how data is structured, exchanged, and ultimately presented within the platform.

This section provides an overview of the data formats supported by the EPOS Platform and links to detailed guides for each.

## Supported Data Formats

The EPOS Platform natively supports or extends the following key data formats:

*   **[GeoJSON](./geojson.md):** A widely used open standard for encoding geographic data structures using JSON. The EPOS Platform extends GeoJSON to include additional properties for enhanced visualization.
*   **[CoverageJSON (CovJSON)](./coveragejson/index.md):** A format for encoding spatiotemporal data, such as grids and time series, using JSON. The EPOS Platform extends CovJSON to support specific geophysical data visualization needs.
*   **WMS (Web Map Service):** An OGC standard for requesting geo-registered map images from distributed geospatial databases.
*   **WFS (Web Feature Service):** An OGC standard that defines a web interface for querying and editing vector geographic features.

## Importance of Data Formats in EPOS

*   **Interoperability:** Standardized formats ensure that data can be seamlessly exchanged and understood across different systems and applications.
*   **Visualization:** The structure of the data format directly influences how it can be visualized in the EPOS Data Portal, enabling interactive maps, charts, and tables.
*   **Data Integration:** Understanding the supported formats helps data providers prepare their data for optimal integration into the EPOS ecosystem.
*   **Extensibility:** The platform's converter service allows for the integration of even more formats through custom plugins, further enhancing its flexibility.