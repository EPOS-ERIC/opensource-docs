# EPOS GeoJSON Schema

This document describes the **JSON Schema** for **EPOS-specific extensions** to the **GeoJSON** format. These extensions allow for richer visualization and interaction within the EPOS GUI.

## Global Styling

The `@epos_style` object allows you to define reusable styles for map markers. Features reference these styles via their `@epos_type` property.

### EPOS Style

```json
{
  "@epos_style": {
    "type": "object",
    "patternProperties": {
      "^.*$": { "$ref": "#/definitions/style_definition" }
    }
  }
}
```

## Style Definition

Defines a reusable style used by map markers and legends.

```json
{
  "style_definition": {
    "type": "object",
    "properties": {
      "label": { "type": "string" },
      "Label": { "type": "string" },
      "marker": { "$ref": "#/definitions/marker_definition" },
      "Marker": { "$ref": "#/definitions/marker_definition" }
    },
    "additionalProperties": false
  }
}
```

## Marker Definition

Specifies the appearance (icon, character, or image) and behavior (clustering, pinning) of a marker.

```json
{
  "marker_definition": {
    "type": "object",
    "properties": {
      "pin": { "$ref": "#/definitions/flexible_boolean" },
      "clustering": { "$ref": "#/definitions/flexible_boolean" },
      "anchor": {
        "type": "string",
        "enum": ["C", "N", "S", "E", "W", "NE", "NW", "SE", "SW"]
      },
      "fontawesome_class": { "type": "string" },
      "character": { "type": "string" },
      "href": { "type": "string", "format": "uri" },
      "raw": { "type": "string" }
    },
    "additionalProperties": false
  }
}
```

## Flexible Boolean

Helper type that handles both standard booleans and string-based booleans (e.g., `"true"`, `"False"`).

```json
{
  "flexible_boolean": {
    "anyOf": [
      { "type": "boolean" },
      {
        "type": "string",
        "enum": ["true", "false", "True", "False"]
      }
    ]
  }
}
```

---

## Feature Properties

EPOS-specific fields within a feature's `properties` object control how information is displayed in popups and data tables.

| Property | Description |
| :--- | :--- |
| `@epos_type` | References a key in `@epos_style` to apply that style to the feature. |
| `@epos_label_key` | Property name used for tooltips and labels. |
| `@epos_map_keys` | Ordered list of properties to display in map popups. |
| `@epos_data_keys` | Ordered list of properties to display in the data table. |
| `@epos_links` | Array of external links associated with the feature. |

```json
{
  "features": {
    "type": "array",
    "items": {
      "type": "object",
      "properties": {
        "properties": {
          "type": "object",
          "properties": {
            "@epos_type": { "type": "string" },
            "@epos_label_key": { "type": "string" },
            "@epos_map_keys": {
              "type": "array",
              "items": { "type": "string" }
            },
            "@epos_data_keys": {
              "type": "array",
              "items": { "type": "string" }
            },
            "@epos_links": {
              "type": "array",
              "items": { "$ref": "#/definitions/link_definition" }
            }
          }
        }
      }
    }
  }
}
```

---

## Actionable Links

The `@epos_links` property uses the `link_definition` to provide downloadable resources or external references.

### Link Definition

```json
{
  "link_definition": {
    "type": "object",
    "properties": {
      "href": { "type": "string", "format": "uri" },
      "label": { "type": "string" },
      "type": { "type": "string" },
      "group": { "type": "string" },
      "authenticatedDownload": { "type": "boolean" }
    },
    "required": ["href", "label"],
    "additionalProperties": false
  }
}
```

---

## Georeferenced Overlays

Used to place static images (like PNGs) directly onto the map.

### @epos_image_overlay

```json
{
  "@epos_image_overlay": {
    "$ref": "#/definitions/image_overlay_definition"
  }
}
```

### Image Overlay Definition

```json
{
  "image_overlay_definition": {
    "type": "object",
    "properties": {
      "href": { "type": "string", "format": "uri" },
      "bbox": {
        "type": "array",
        "items": { "type": "number" },
        "minItems": 4,
        "maxItems": 4,
        "description": "[lat1, lon1, lat2, lon2]"
      },
      "legend": {
        "type": "object",
        "properties": {
          "href": { "type": "string", "format": "uri" }
        },
        "additionalProperties": false
      }
    },
    "required": ["href", "bbox"],
    "additionalProperties": false
  }
}
```

---

## Complete JSON Schema

<details>
<summary>Click to view the full schema </summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://epos-eric.eu/schemas/epos_geojson.schema.json",
  "title": "EPOS GeoJSON Extensions Schema",
  "description": "Schema for EPOS-specific extensions to the GeoJSON format.",
  "definitions": {
    "style_definition": {
      "type": "object",
      "properties": {
        "label": { "type": "string" },
        "Label": { "type": "string" },
        "marker": { "$ref": "#/definitions/marker_definition" },
        "Marker": { "$ref": "#/definitions/marker_definition" }
      },
      "additionalProperties": false
    },
    "marker_definition": {
      "type": "object",
      "properties": {
        "pin": { "$ref": "#/definitions/flexible_boolean" },
        "clustering": { "$ref": "#/definitions/flexible_boolean" },
        "anchor": {
          "type": "string",
          "enum": ["C", "N", "S", "E", "W", "NE", "NW", "SE", "SW"]
        },
        "fontawesome_class": { "type": "string" },
        "character": { "type": "string" },
        "href": { "type": "string", "format": "uri" },
        "raw": { "type": "string" }
      },
      "additionalProperties": false
    },
    "flexible_boolean": {
      "anyOf": [
        { "type": "boolean" },
        {
          "type": "string",
          "enum": ["true", "false", "True", "False"]
        }
      ]
    },
    "link_definition": {
      "type": "object",
      "properties": {
        "href": { "type": "string", "format": "uri" },
        "label": { "type": "string" },
        "type": { "type": "string" },
        "group": { "type": "string" },
        "authenticatedDownload": { "type": "boolean" }
      },
      "required": ["href", "label"],
      "additionalProperties": false
    },
    "image_overlay_definition": {
      "type": "object",
      "properties": {
        "href": { "type": "string", "format": "uri" },
        "bbox": {
          "type": "array",
          "items": { "type": "number" },
          "minItems": 4,
          "maxItems": 4,
          "description": "[lat1, lon1, lat2, lon2]"
        },
        "legend": {
          "type": "object",
          "properties": {
            "href": { "type": "string", "format": "uri" }
          },
          "additionalProperties": false
        },
        "legend ": {
          "$ref": "#/definitions/image_overlay_definition/properties/legend"
        }
      },
      "required": ["href", "bbox"],
      "additionalProperties": false
    }
  },
  "type": "object",
  "properties": {
    "@epos_style": {
      "type": "object",
      "patternProperties": {
        "^.*$": { "$ref": "#/definitions/style_definition" }
      }
    },
    "features": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "@epos_image_overlay": {
            "$ref": "#/definitions/image_overlay_definition"
          },
          "properties": {
            "type": "object",
            "properties": {
              "@epos_type": { "type": "string" },
              "@epos_label_key": { "type": "string" },
              "@epos_map_keys": {
                "type": "array",
                "items": { "type": "string" }
              },
              "@epos_data_keys": {
                "type": "array",
                "items": { "type": "string" }
              },
              "@epos_links": {
                "type": "array",
                "items": { "$ref": "#/definitions/link_definition" }
              }
            }
          }
        }
      }
    }
  }
}
```
</details>
```
