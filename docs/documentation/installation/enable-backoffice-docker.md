---
title: Enable Backoffice with a Custom Docker Config
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Enable Backoffice with a Custom Docker Config

By default, the Backoffice is disabled in new deployments. To enable it, deploy an environment with a custom configuration.

This page provides:

- a full reference config you can copy as a baseline
- a quick explanation of what changed compared to defaults
- deployment steps for both TUI and CLI flows

## Full Reference Config

This is the custom configuration needed for a minimal deployment with the Backoffice enabled. For K8s deployments you can look at what changed in the config and apply the same changes to the k8s config.

```yaml
# Shared hostname/IP where all services are accessible (e.g., epos.example.com)
domain: "localhost"

# Protocol for accessing services. Must be http or https
protocol: "http"

components:
  platform_gui:
    # URL path prefix for accessing the platform GUI interface. Must end with a /
    base_url: "/"
    # Port number where the platform GUI will be accessible
    port: 32000

  gateway:
    # Port number where the API gateway will be accessible
    port: 33000

    aai:
      # Enable/disable AAI (Authentication and Authorization Infrastructure) integration in the gateway.
      # When enabled, the gateway will call the configured userinfo endpoint to validate authenticated requests.
      # This can point to the embedded aai_service below or to an external provider.
      enabled: true
      # Userinfo endpoint used by the gateway when AAI is enabled.
      # Use the embedded service default below for local auth, or replace it with an external provider endpoint.
      service_endpoint: "http://aai-service:8080/oauth2/userinfo"

    # Base URL path for the API gateway. Must start with / and end with /api/v1
    base_url: "/api/v1"

    swagger_page:
      # Title displayed on the API Gateway Swagger documentation page
      tile: "EPOS API Gateway"
      # API version shown in Swagger documentation
      version: "2.0.0"
      # Contact email displayed in Swagger documentation
      contact_email: ""

  backoffice:
    # Enable/disable the backoffice module
    enabled: true

    gui:
      # URL path prefix for accessing the backoffice interface
      base_url: "/backoffice"
      # Port number where the backoffice GUI will be accessible
      port: 34000

    service:
      auth:
        # Enable/disable authentication for the backoffice service
        enabled: true
        # Restrict backoffice access to admin users only
        only_admin: false

  converter:
    # Enable/disable the converter service
    enabled: false
    auth:
      # Enable/disable authentication for the converter service
      enabled: false
      # Restrict converter api access to admin users only
      only_admin: false

  resources_service:
    auth:
      # Enable/disable authentication for the resources service
      enabled: false
      # Restrict resources service access to admin users only
      only_admin: false
    # Cache TTL in milliseconds for database data when making searches
    cache_ttl: 50000
    cache_facets: 5000

  ingestor_service:
    auth:
      # Enable/disable authentication for the ingestor service
      enabled: false
      # Restrict ingestor service access to admin users only
      only_admin: false
    # Validation hash for the ingestor service
    hash: "FA9BEB99E4029AD5A6615399E7BBAE21356086B3"

  external_access_service:
    auth:
      # Enable/disable authentication for the external access service
      enabled: false
      # Restrict external access service to admin users only
      only_admin: false

  sharing_service:
    # Enable/disable the sharing service (allows sharing user configurations via URL)
    enabled: false
    auth:
      # Enable/disable authentication for the sharing service
      enabled: false
      # Restrict sharing service access to admin users only
      only_admin: false

  rabbitmq:
    # RabbitMQ server hostname or IP address
    host: "rabbitmq"
    # RabbitMQ authentication username
    username: "rabbitmq-user"
    # RabbitMQ authentication password
    password: "changeme"
    # RabbitMQ virtual host for message isolation
    vhost: "changeme"

  metadata_database:
    # Database user for authentication
    user: "metadatauser"
    # Database password for authentication
    password: "changeme"
    # Database server hostname or IP address
    host: "metadata-database"
    # Database server port number
    port: 5432
    # Host port to publish the metadata database on. Optional. Omit or set 0 to keep it internal-only
    published_port: 0
    # Name of the database to connect to
    db_name: "cerif"
    # Initial size of the database connection pool
    connection_pool_init_size: 5
    # Minimum number of connections to maintain in the pool
    connection_pool_min_size: 5
    # Maximum number of connections allowed in the pool
    connection_pool_max_size: 15

  email_sender_service:
    # Enable/disable the email sender service
    enabled: false
    auth:
      # Enable/disable authentication for the email sender service
      enabled: false
      # Restrict email sender service access to admin users only
      only_admin: false
    # Environment type. Must be development, production, or staging
    environment_type: "development"
    # Identifier for the email sender
    sender: "data-portal"
    # Display name for the email sender
    sender_name: "EPOS Platform Opensource"
    # Email delivery method. Must be API
    mail_type: "API"
    # Domain used for sending emails
    sender_domain: "your.domain.com"
    # Mail server hostname (for SMTP-based delivery)
    mail_host: "mail.domain.com"
    # Mail server authentication username
    mail_user: "user@email.com"
    # Mail server authentication password
    mail_password: "changeme"
    # Semicolon-separated list of email addresses to receive notifications in development
    dev_emails: "foo.bar@somewhere.com;change.me@somewhere.com"
    # API endpoint URL for email service
    mail_api_url: "https://api.example.email/"
    # API key for authenticating with the email service
    mail_api_key: "changeme"

  aai_service:
    # Enable/disable the embedded local AAI service container.
    # This is optional: the gateway can use an external AAI provider with this disabled.
    # If you enable this service, gateway.aai.enabled must also be enabled.
    enabled: true
    # Host port used to expose the embedded AAI service locally
    port: 35000
    # Initial admin user seeded into the embedded AAI service on first startup
    name: "John"
    surname: "Doe"
    email: "your@email.com"
    password: "changeme"

monitoring:
  # Enable/disable monitoring integration
  enabled: false
  # Monitoring service URL
  url: ""
  # Monitoring service authentication username
  user: ""
  # Monitoring service authentication password
  password: ""
  # Security key for AAI authentication
  security_key: ""

# Container images used by EPOS services and supporting components.
# Override tags/repositories to pin versions or use private registries.
images:
  rabbitmq_image: "rabbitmq:3.13.7-management"
  dataportal_image: "ghcr.io/epos-eric/epos-gui:latest"
  gateway_image: "ghcr.io/epos-eric/epos-api-gateway:latest"
  metadata_database_image: "ghcr.io/epos-eric/metadata-database/deploy:latest"
  resources_service_image: "ghcr.io/epos-eric/resources-service:latest"
  ingestor_service_image: "ghcr.io/epos-eric/ingestor-service:latest"
  external_access_image: "ghcr.io/epos-eric/external-access-service:latest"
  converter_service_image: "ghcr.io/epos-eric/converter-service-go:latest"
  converter_routine_image: "ghcr.io/epos-eric/converter-routine-go:latest"
  backoffice_service_image: "ghcr.io/epos-eric/backoffice-service:latest"
  backoffice_ui_image: "ghcr.io/epos-eric/epos-backoffice-gui:latest"
  email_sender_service_image: "ghcr.io/epos-eric/email-sender-service:latest"
  sharing_service_image: "ghcr.io/epos-eric/sharing-service:latest"
  aai_service_image: "ghcr.io/epos-eric/oss-aai-service:latest"
```

## What Changes Compared to the Default Docker Config

The example above keeps most defaults and only changes the fields needed to activate Backoffice with local authentication.

| Field                                        | Default        | This guide       | Why                                                       |
| -------------------------------------------- | -------------- | ---------------- | --------------------------------------------------------- |
| `components.backoffice.enabled`              | `false`        | `true`           | Starts Backoffice GUI and service.                        |
| `components.backoffice.service.auth.enabled` | `false`        | `true`           | Requires authentication for Backoffice service endpoints. |
| `components.gateway.aai.enabled`             | `false`        | `true`           | Enables token validation in the API gateway.              |
| `components.aai_service.enabled`             | `false`        | `true`           | Starts the embedded local AAI service container.          |
| `components.aai_service.name`                | `EPOS`         | `John`           | Seeds the initial embedded AAI admin user.                |
| `components.aai_service.surname`             | `User`         | `Doe`            | Seeds the initial embedded AAI admin user.                |
| `components.aai_service.email`               | `epos@epos.eu` | `your@email.com` | Seeds the initial embedded AAI admin user.                |
| `components.aai_service.password`            | `epos`         | `changeme`       | Seeds the initial embedded AAI admin user.                |

## Deploy with TUI or CLI

<Tabs defaultValue="tui">
  <TabItem value="tui" label="Interactive TUI">

1. Start the TUI:

   ```bash
   epos-opensource
   ```

2. In `Docker Environments`, select `Create New Environment`.
3. Enter the environment name (for example `my-backoffice-platform`).
4. Select `Edit Config`. It will open an editor with the default config.
5. Paste the full custom configuration provided in this page and save.
6. Go back to the terminal and select `Deploy`.

  </TabItem>
  <TabItem value="cli" label="Command Line">

1. Save the config from this page to a file like `./my-backoffice-config/docker-config.yaml`.
2. Optionally render runtime files before deploying to inspect what will be deployed:

   ```bash
   epos-opensource docker render my-backoffice-platform --config ./my-backoffice-config/docker-config.yaml --output ./rendered-backoffice
   ```

3. Deploy with your custom config:

   ```bash
   epos-opensource docker deploy my-backoffice-platform --config ./my-backoffice-config/docker-config.yaml
   ```

  </TabItem>
</Tabs>

## Verify the Deployment

<Tabs defaultValue="tui">
  <TabItem value="tui" label="Interactive TUI">

1. Open the TUI:

   ```bash
   epos-opensource
   ```

2. In the left `Docker Environments` panel, select the environment you just created.
3. In `Environment Details`, check the `Environment URLs` section.
4. Use the `Open` buttons for `GUI`, `Backoffice`, and `API` to open each endpoint directly.

  </TabItem>
  <TabItem value="cli" label="Command Line">

1. List Docker environments:

   ```bash
   epos-opensource docker list
   ```

2. Locate your environment and open the printed URLs in your browser.

   Local default ports are:

   - GUI: `http://localhost:32000`
   - Backoffice: `http://localhost:34000/home`
   - API docs: `http://localhost:33000/api/v1/ui`

  </TabItem>
</Tabs>

:::danger Embedded AAI Security Notice

This configuration enables the embedded `aai_service` and is intended for local development and testing.

Do not expose this setup directly to the public internet and do not use it as-is in production. The embedded AAI flow is not presented as production-hardened and may contain security weaknesses.

For production, use a hardened external identity provider, enforce TLS, and replace all placeholder credentials/secrets.

:::

## Related Pages

- [Managing Docker Deployments](./docker.md)
- [Using a Reverse Proxy with Docker Deployments](./reverse-proxy.md)
- [How to use the Backoffice](../guides/backoffice-user-guide.md)
