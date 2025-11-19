---
title: Using a Reverse Proxy with Docker Deployments
---

# Using a Reverse Proxy with Docker Deployments

This guide explains how to set up a reverse proxy for your EPOS Platform Docker deployments. A reverse proxy allows you to expose your deployment behind a single domain with SSL termination, load balancing, and custom routing. This guide has been tested and works for some users, though individual configurations may vary.

:::warning

Native support for reverse proxies in the EPOS Platform is not yet available but is actively being developed. This guide provides a workaround for current deployments.

:::

## Prerequisites

- A running EPOS Platform Docker deployment (see [Managing Docker Deployments](docker.md)).
- A reverse proxy server (e.g., Nginx, Traefik, or Apache).
- A domain name pointing to your server.
- SSL certificates (e.g., from Let's Encrypt).

## Step-by-Step Guide

### 1. Export the Configuration

First, export the default Docker configuration to a custom directory:

```bash
epos-opensource docker export ./my-reverse-proxy-config
```

This creates a directory with the necessary files, including `docker-compose.yml` and `.env`.

### 2. Modify the Environment Variables

When using a custom `.env` file (as in the deployment command with `--env-file`), you need to manually set certain port variables because the CLI cannot guess them. These variables are already present in the `.env` file but commented out.

Uncomment the following lines in `./my-reverse-proxy-config/.env`:

```bash
DATAPORTAL_PORT=32000
GATEWAY_PORT=33000
BACKOFFICE_PORT=34000
```

These ports correspond to the GUI, API, and Backoffice services respectively. If you want to use different ports, modify these values accordingly. Note that if you change these ports, you may need to update the reverse proxy configuration accordingly. It is recommended to use the default values unless necessary.

### 3. Modify the Docker Compose Configuration

Edit the `docker-compose.yml` file in your exported config directory. Change the `APIHOST` environment variable to your domain name:

```yaml
# In docker-compose.yml, under the resource-service component
environment:
  - APIHOST=https://your-domain.com
```

:::tip

Replace `your-domain.com` with your actual domain. Ensure the protocol is `https` if using SSL.

:::

### 4. Deploy with Custom Configuration

Deploy the platform using your modified configuration:

```bash
epos-opensource docker deploy my-reverse-proxy-platform --env-file ./my-reverse-proxy-config/.env --compose-file ./my-reverse-proxy-config/docker-compose.yml
```

:::tip

Do not use the `--host` flag when setting up a reverse proxy, as it changes the exposed host but keeps the ports. The `--host` flag is intended for deployments where you want to expose the platform on a different hostname or IP without a reverse proxy, e.g., `http://somehost.com:32000/`.

:::

### 5. Configure Reverse Proxy Mappings

Set up your reverse proxy to route traffic to the appropriate services. Here are the typical mappings:

- **GUI**: Route `/` to the GUI service (port 3200 by default).
- **API**: Route `/api/v1` to the API service (port 3300 by default).
- **Backoffice**: Route `/backoffice` to the Backoffice service (port 3400 by default).

Working example Nginx configuration snippet:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:32000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location /api/v1 {
        proxy_pass http://localhost:33000/api/v1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location /backoffice {
        proxy_pass http://localhost:34000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

:::warning

The provided example is designed to work with the default configuration. Modifying paths or routing rules may break functionality, so follow the example as closely as possible unless you are experienced with reverse proxy configurations. Adjust the ports and proxy settings based on your actual deployment. Ensure your reverse proxy handles SSL if needed.

:::

## Populating Your Environment

Once your deployment is running behind the reverse proxy, you can populate it with data using the standard populate commands:

```bash
epos-opensource docker populate my-reverse-proxy-platform --example
```

This adds sample data for testing or demonstration purposes. You can also populate with your own data by providing paths to `.ttl` files instead of using the `--example` flag.

For more details on populate commands, see [Managing Docker Deployments](docker.md).

## Troubleshooting

If you encounter issues, check the following:

- Verify that your domain DNS points to your server.
- Ensure the `APIHOST` is correctly set in the Docker Compose file.
- Check reverse proxy logs for routing errors.
- Confirm that the EPOS Platform services are running and accessible on their internal ports.

For any problems, please open a GitHub issue at [EPOS-ERIC/epos-opensource](https://github.com/EPOS-ERIC/epos-opensource/issues).
