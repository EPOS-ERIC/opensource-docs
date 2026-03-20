---
title: Using a Reverse Proxy with Docker Deployments
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Using a Reverse Proxy with Docker Deployments

This guide explains how to expose a Docker-based EPOS environment behind a reverse proxy.

In this setup, EPOS services continue running on local Docker ports, while the reverse proxy handles the public domain, path routing, and optional TLS termination.

## Prerequisites

- A running Docker deployment (see [Managing Docker Deployments](docker.md))
- A reverse proxy (for example Nginx, Traefik, Apache)
- A domain name pointing to your host
- TLS certificates if you want HTTPS

## How Routing Works

Your `docker-config.yaml` and proxy rules should match each other:

- `components.platform_gui.base_url` matches the public GUI route (usually `/`)
- `components.gateway.base_url` matches the public API route (usually `/api/v1`)
- `components.backoffice.gui.base_url` matches the public Backoffice route (if enabled)

For the API, `gateway.base_url` must start with `/` and end with `/api/v1`.

## Step-by-Step

Choose the workflow that matches your case.

<Tabs defaultValue="new-environment">
  <TabItem value="new-environment" label="New Environment">

#### 1. Export Docker Config

```bash
epos-opensource docker export ./my-reverse-proxy-config
```

This creates `./my-reverse-proxy-config/docker-config.yaml`.

#### 2. Configure Domain, Protocol, Paths, and Ports

Edit `docker-config.yaml`.

For the full default template, see [Default Docker Config](./docker.md#default-docker-config).

Use `protocol: "https"` if your public endpoint is HTTPS.

Example:

```yaml
domain: "your-domain.com"
protocol: "https"

components:
  platform_gui:
    base_url: "/"
    port: 32000

  gateway:
    base_url: "/api/v1"
    port: 33000

  backoffice:
    enabled: true
    gui:
      base_url: "/backoffice"
      port: 34000
```

#### 3. Render Runtime Files (Optional)

```bash
epos-opensource docker render my-reverse-proxy-platform --config ./my-reverse-proxy-config/docker-config.yaml --output ./rendered-reverse-proxy
```

This lets you inspect generated `.env` and `docker-compose.yaml` before applying changes.

#### 4. Deploy with Custom Config

```bash
epos-opensource docker deploy my-reverse-proxy-platform --config ./my-reverse-proxy-config/docker-config.yaml
```

  </TabItem>
  <TabItem value="existing-environment" label="Existing Environment">

#### 1. Export Applied Config from Your Existing Environment

```bash
epos-opensource docker get my-reverse-proxy-platform --output ./docker-config.yaml
```

This gives you the currently applied config, so you can update reverse-proxy settings without losing existing customizations.

#### 2. Configure Domain, Protocol, Paths, and Ports

Edit `./my-reverse-proxy-config/docker-config.yaml`.

For the full default template, see [Default Docker Config](./docker.md#default-docker-config).

Use `protocol: "https"` if your public endpoint is HTTPS.

Example fields to review:

```yaml
domain: "your-domain.com"
protocol: "https"

components:
  platform_gui:
    base_url: "/"

  gateway:
    base_url: "/api/v1"

  backoffice:
    enabled: true
    gui:
      base_url: "/backoffice"
```

Keep existing ports unless you have a specific reason to change them.

#### 3. Render Runtime Files (Optional)

```bash
epos-opensource docker render my-reverse-proxy-platform --config ./my-reverse-proxy-config/docker-config.yaml --output ./rendered-reverse-proxy
```

#### 4. Update Existing Environment with Custom Config

```bash
epos-opensource docker update my-reverse-proxy-platform --config ./my-reverse-proxy-config/docker-config.yaml
```

  </TabItem>
</Tabs>

## Configure Proxy Routes

Map public routes to local Docker ports:

- `/` -> `http://localhost:32000`
- `/api/v1` -> `http://localhost:33000/api/v1`
- `/backoffice` -> `http://localhost:34000` (if enabled)

Nginx example:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:32000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /api/v1 {
        proxy_pass http://localhost:33000/api/v1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /backoffice {
        proxy_pass http://localhost:34000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Verify the Setup

```bash
epos-opensource docker list
epos-opensource docker get my-reverse-proxy-platform --output ./applied-docker-config.yaml
```

Then verify:

- GUI at `https://your-domain.com/` (or your configured GUI route)
- API docs at `https://your-domain.com/api/v1/ui`
- Backoffice at `https://your-domain.com/backoffice` (if enabled)

## Populate Data

```bash
epos-opensource docker populate my-reverse-proxy-platform --example
```

If you already have your own `.ttl` data, use it instead:

```bash
epos-opensource docker populate my-reverse-proxy-platform ./metadata ./more-data/file.ttl
```

## Troubleshooting

- Confirm reverse proxy routes match `docker-config.yaml` base paths and ports
- If API routes fail, verify `components.gateway.base_url` still ends with `/api/v1`
- If expected ports are not reachable, inspect the applied config from `docker get` and update proxy upstreams accordingly
- If Backoffice returns 404, verify `components.backoffice.enabled: true` and proxy route `/backoffice`
