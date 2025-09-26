# Installation Guide

This comprehensive guide covers different deployment scenarios for EPOS Platform, from local development to production environments. Choose the deployment method that best fits your needs and infrastructure.

## Deployment Options

EPOS Platform supports multiple deployment strategies:

- **[Docker Compose](#docker-compose-deployment)** - Recommended for development and testing
- **[Kubernetes](#kubernetes-deployment)** - Production-ready container orchestration

## Prerequisites

### System Requirements

TODO

### Software Requirements

TODO

## Docker Compose Deployment

Docker Compose is the recommended method for development, testing, and small-scale production deployments.

### Step 1: Install EPOS CLI

```bash
# Download and install the EPOS CLI
curl -fsSL https://raw.githubusercontent.com/epos-eu/epos-opensource/main/install.sh | bash

# Verify installation
epos-opensource --version
```

### Step 2: Deploy Platform

```bash
# Deploy a complete EPOS Platform instance
epos-opensource docker deploy my-epos-platform
```
![Epos_Deploy](/img/epos_deploy.png)
TODO: more deployment info

### Configuration Options

TODO: config options
### Step 3: Populate with sample data

Once the environment is running, populate it with example metadata:

```bash
epos-opensource docker populate my-epos-platform ./my_sample_data   
```

![Epos_ingestion](/img/docker_populate_ingestion.png)
![Epos_ingestion](/img/docker_populate.png)

---

## Access the web interface

Open the `Data Portal` URL shown after the deployment step in your browser. The default URL is [http://localhost:32000/](http://localhost:32000/)
![Epos_Dataportal](/img/dataportal_after_populate.png)
The Example Metadata is on the top-left side of the `Data Portal`, it might take a few seconds to show.
In the case that the data does not show try stopping and restarting the ingestor-service

```bash
docker stop my-epos-platform-ingestor-service
docker start my-epos-platform-ingestor-service
```
Give it a few seconds and refresh the page

### What you'll see

- **Data Portal**: Main interface for browsing and searching geospatial services
- **Service Catalog**: View available web services and their metadata
- **Interactive Maps**: Preview geospatial data on interactive maps
- **API Documentation**: Access the REST API documentation at `http://localhost:33000/api/v1/ui`

## API Documentation
To access the API Documentation go at: `http://localhost:33000/api/v1/ui`

![API_Documentation](/img/swagger_page.png)

In this page you can see all the endpoints of the API and also have a chance to try out the end poins
directly from the swagger page

## Delete the Platform

```bash
epos-opensource docker delete my-epos-platfor  
```



## Kubernetes Deployment

For production environments requiring high availability and scalability.

TODO: add more info

## Configuration

### Environment Variables

Key configuration options:

TODO: env config

## Monitoring and Logging

TODO: log monitoring & observability

## Troubleshooting

### Common Issues

TODO: add common issues
