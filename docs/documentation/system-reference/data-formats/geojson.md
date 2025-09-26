---
sidebar_position: 1
id: geojson
---

import MermaidFullscreen from '@site/src/components/MermaidFullScreen';

# EPOS GeoJSON

## Purpose

The EPOS Platform extends the standard GeoJSON format to support additional features required for enhanced visualization and functionality within the EPOS GUI. These EPOS-specific extensions allow for richer representation of geographic data, enabling capabilities beyond the standard GeoJSON specification without introducing entirely new data formats.

## @epos JSON Objects

All new root JSON objects introduced to support EPOS functionality will be accessible via attribute names that start with `@epos_`. This is to avoid name clashes and false positives parsing the GeoJSON for EPOS specific information. All EPOS specific JSON objects are optional; if any are missing, sensible default behaviour will be followed, ensuring the raw GeoJSON can still be rendered.

```json
{
    "type": "FeatureCollection",
    "@epos_style": {
        ...
    },
    ...
}
```

## Styling: Map Markers and Legends

The EPOS GeoJSON extensions allow for detailed control over the styling and behavior of map markers and the generation of associated legends. This is primarily managed through the `@epos_style` object, which defines styling rules based on the `@epos_type` attribute found within the `properties` of GeoJSON features.

### Example

For instance, if a feature has `@epos_type = station`, it will match the `station` attribute within the `@epos_style` object. This would render stations on the map as pins with an 'S'.

![Font Awesome marker with pin](/img/fontAwesomeMarkerWithPin.png)

A corresponding legend would be generated, looking something like:

![Font Awesome marker with pin and legend](/img/fontAwesomeMarkerWithPinAndLegend.png)

**feature:**

```json
"features": [
    {
        "type": "Feature",
        "properties": {
            "@epos_type": "station",//used to lookup @epos_style attributes
            ...
        }
    }
]
```

### style:

```json
"type": "FeatureCollection",
    "@epos_style": {
        //attribute names to match with @epos_type values
        "station": {
            "label": "This is a station", //use for legend
            "marker": {
                "character": "S", //character type value
                "pin": true, //true|false
                "clustering": true  //true|false
                //"anchor":"C"  not needed when pin=true
            }
        },
        ...
```

## Style Attributes

Each @epos_type defined in the @epos_style object defines the following:

| Attribute           | Description                                                                                                                               |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `label`             | If provided, this is used as the text to associate with the map marker in the legend; else the `@epos_type` is used as the legend text.   |
| `marker (object)`   | If provided, attributes of this object define the marker for the `@epos_style`; else a default point marker will be used.                 |
| `marker.pin`        | Defaults to `true` if absent; if true, the map symbol will be drawn with a pin.                                                           |
| `marker.clustering` | Defaults to `true` if absent; if true, map markers in close proximity to each other will be "clustered".                                  |
| `marker.anchor`     | If `pin` = `false`, the anchor point for the symbol can be defined using the eight points of the compass (N, NE, E, SE, S, SW, W, NW, C). |

## Symbols

The EPOS GeoJSON extensions support three distinct types of map markers, configured by setting the appropriate attribute within the `marker` object of your `@epos_style` definition. Only one symbol type should be specified per marker.

| Type                       | Example                   | pin = false                                                              | pin = true                                                           |
| -------------------------- | ------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| `marker.href`              | `www.thing.com/thing.png` | ![Marker href without pin](/img/markerHrefWithoutPin.png)                | ![Marker href with pin](/img/markerHrefWithPin.png)                  |
| `marker.fontawesome_class` | `fas fa-star`             | ![Font Awesome marker without pin](/img/fontAwesomeMarkerWithoutPin.png) | ![Font Awesome marker with pin](/img/fontAwesomeMarkerWithStar.png)  |
| `marker.character`         | `S`                       | ![Character marker without pin](/img/markerCharacter.png)                | ![Character marker with pin](/img/fontAwesomeMarkerWithPinSmall.png) |

### Image Example

```json
"thing": {
    "label": "This is a thing", //use for legend
    "marker": {
        "href": "www.thing.com/thing.png", //image url type value
        "pin": false, //true|false
        "clustering": false, //true|false
        "anchor": "C" // N|NE|E|SE|S|SW|W|NW|C (default: C) used when pin=false
    }
}
```

### Font Awesome Example

```json
"event": {
    "label": "This is an event", //use for legend
    "marker": {
        "fontawesome_class": "fas fa-star", //fontawesome-class type value
        "pin": false, //true|false
        "clustering": false, //true|false
        "anchor": "C" // N|NE|E|SE|S|SW|W|NW|C (default: C) used when pin=false
    }
},
```

### Character Example

```json
"station": {
    "label": "This is a station", //use for legend
    "marker": {
        "character": "S", //character type value
        "pin": true, //true|false
        "clustering": true //true|false
        //"anchor":"C"  not needed when pin=true
    }
},
```

### Symbol Logic

![Font Awesome marker with pin](/img/markerFlow.png)

### Colour

A note on color, to prevent accidental reuse of the same color by multiple map layers in the EPOS GUI, colors will be automatically assigned.

### Legends

Legends are constructed by combining the map marker and label from the corresponding @epos_type within the the @epos_style object.

![Character marker without pin](/img/fontAwesomeMarkerWithPinAndLegend.png)

### Legend Logic

<MermaidFullscreen
title="Legend logic"
maxPreviewHeight={600}
chart={`
flowchart TD
A([Start]) --> B{Feature properties\nhas @epos.type?}
B -->|no| C[❌ Not in Legend]
B -->|yes| D{ @epos.type in\n @epos.style?}
D -->|no| E[✅ Legend use @epos.type]
D -->|yes| F{label in @epos.style\n@epos.type?}
F -->|no| E
F -->|yes| G{label is\nValid?}
G -->|no| E
G -->|yes| H[✅ Legend uses label from\n @epos.style@epos.type]

    style A fill:#d81b60,color:#fff,stroke:#ad1457,stroke-width:3px
    style B fill:#e91e63,color:#fff,stroke:#c2185b,stroke-width:2px
    style D fill:#e91e63,color:#fff,stroke:#c2185b,stroke-width:2px
    style F fill:#e91e63,color:#fff,stroke:#c2185b,stroke-width:2px
    style G fill:#e91e63,color:#fff,stroke:#c2185b,stroke-width:2px
    style C fill:#43a047,color:#fff,stroke:#2e7d32,stroke-width:2px
    style E fill:#43a047,color:#fff,stroke:#2e7d32,stroke-width:2px
    style H fill:#43a047,color:#fff,stroke:#2e7d32,stroke-width:2px

    linkStyle 0 stroke:#666,stroke-width:3px
    linkStyle 1 stroke:#f44336,stroke-width:2px
    linkStyle 2 stroke:#4caf50,stroke-width:2px
    linkStyle 3 stroke:#f44336,stroke-width:2px
    linkStyle 4 stroke:#4caf50,stroke-width:2px
    linkStyle 5 stroke:#f44336,stroke-width:2px
    linkStyle 6 stroke:#4caf50,stroke-width:2px
    linkStyle 7 stroke:#f44336,stroke-width:2px
    linkStyle 8 stroke:#4caf50,stroke-width:2px

`}
/>

## Image Overlays

The EPOS GeoJSON extensions provide robust support for image overlays, allowing you to display geo-referenced images directly on the map. This is achieved by adding an `@epos_image_overlay` object to a GeoJSON feature, establishing a direct link between the feature's properties and the overlay's characteristics.

### Example

```json
{
    "type": "Feature",
    "properties": {
        "@epos_type": "overlay",
        ...
    },
    "@epos_image_overlay": {
        "href": "https://sandbox.zenodo.org/2017062703_sd_era_4rlks.unw.png",
        "bbox": [
            -4.5184,
            36.4027,
            -3.2463,
            37.7806
        ],
        "legend": {
            "href": "www.abc.com/legend-image.png"
        }
    },
    "geometry": null //NO GEOMETRY FOR OVERLAY
}
```

## Image Overlay Attributes

Each @epos_image_overlay object defined should have the following:

| Attribute   | Description                                                                                                        |
| ----------- | ------------------------------------------------------------------------------------------------------------------ |
| href        | The URL to the image to display on the map                                                                         |
| bbox        | The bounding box (rectangular region) in which to place the image, the order is [lat1, lon1, lat2, lon2]           |
| legend      | A legend object can be include to provide a legend appropriate for the image overlay                               |
| legend.href | The only property of the legend object currently supported is a image URL to be used as the legend for the overlay |

### Image Types

The EPOS GUI supports common image types that are typically rendered by web browsers (e.g., PNG, JPEG, GIF), **including GeoTIFF for image overlays**.

### Geometry

For image overlays, the geometry defined in the GeoJSON feature will be ignored. This is because image overlays require rectangular geographic bounds, which are explicitly defined by the `bbox` attribute within the `@epos_image_overlay` object. Therefore, it is recommended to set the feature's `geometry` to `null` when using image overlays.

### bbox

The spatial reference for the bbox is assumed to match the spatial reference for the containing GeoJSON object(s).

The order of the values is [lat1, lon1, lat2, lon2].

Caution: if the area crosses the antimeridian (often confused with the International Date Line), you must specify corners outside the [-180, 180] degrees longitude range.

### Leaflet `LatLngBounds` Reference

For more details on bounding box definitions, refer to the [Leaflet `LatLngBounds` documentation](https://leafletjs.com/reference-1.5.0.html#latlngbounds).

## Feature Properties: Controlling Map Popups, Data Visualization, and Links

The EPOS GeoJSON extensions enhance the standard GeoJSON `properties` object by providing mechanisms for data authors to control how feature metadata is presented in the EPOS GUI. This includes defining content for map popups, specifying columns for data visualization tables, and embedding rich links.

This is achieved by introducing `@epos_xxx` attributes that reference other true properties of the feature, thereby:

- Preventing duplication of metadata solely for EPOS GUI requirements.
- Maintaining the integrity of true GeoJSON properties for other contexts.

### @epos_label_key

The value for the @epos_label_key attribute should be the name of one true attribute of the properties object that is to be used when ever a label, title, tool-tip etc. is needed within the EPOS GUI.

```json
"features": [
    {
        "type": "Feature",
        "properties": {
            ...
            "@epos_label_key": "Title", //used for things like tooltips
            ...
            "Title": "adasdasdd",
            ...
```

### @epos_map_keys

The value for the @epos_map_keys attribute should be the ordered names of one or more true attributes of the properties object that are to be used in the map context within the EPOS GUI, for example to define the properties display in the map popup.

```json
"features": [
    {
        "type": "Feature",
        "properties": {
            ...
            "@epos_map_keys": [ //typically used for map popups
                "Title",
                "Description",
                "Summary",
                "@epos_links"
            ],
           ...
            "Title": "adasdasdd",
            "Description": "Hellenic Seismic Network",
            "Summary": "Properties can contain HTML <img src=\"smiley.gif\">",
            "@epos_links": [...]
```

### @epos_data_keys

The value for the @epos_data_keys attribute should be the ordered names of one or more true attributes of the properties object that are to be used in the data-visualisation context within the EPOS GUI, for example to define the columns to display in the data table.

```json
"features": [
    {
        "type": "Feature",
        "properties": {
            ...
            "@epos_data_keys": [ //typically used for data visualisation columns
                "Title",
                "Elevation",
                "Description"
            ],
            "Title": "my title",
            "Elevation": "122",
            "Description": "Hellenic Seismic Network",
            ...
```

## Default Behaviour

If the relevant @epos\_ attribute for the context is missing or empty the EPOS GUI will revert to a default behaviour:

| Context            | Missing/Empty   | Default Behaviour                                                                                                                                                                                                                    |
| ------------------ | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Labelling          | @epos_label_key | All (non @epos\_) primitive (strings) property names will be searched (case-insensitive) for the following: name, title, label, description in that order. If no property is found then there will be no labelling for that feature. |
| Map                | @epos_map_keys  | All (non @epos\_) primitive (numbers, strings, booleans, primitive-arrays) properties will be used in an arbitrary order, for example to populate the content of a map popup.                                                        |
| Data Visualisation | @epos_data_keys | All (non@epos\_) primitive (numbers, strings, booleans, primitive-arrays) properties will be used in an arbitrary order, for example to populate the columns of the data visualisation.                                              |

### Types of Properties

As mentioned above, in general the only properties that the EPOS GUI will support are those with primitive (numbers, strings, booleans, primitive-arrays) values

### Links

@epos_links is a special type of property introduced to support the addition of (hyper)links that require an individual object per link to capture the href, label, type and authenticatedDownload (whether the link should be called with authentication headers set, including the EPOS authentication token)

**properties:**

```json
"features": [
{
"type": "Feature",
"properties": {
...
"@epos_map_keys": [ //typically used for map popups
    "Title",
    "@epos_links"
],
"@epos_data_keys": [ //typically used for data visualisation columns
    "Title",
    "@epos_links"
],
"Title": "my title",
"@epos_links": [
    {
        "href": "http://volobsis.ipgp.fr/volcano-bullexcep.pdf",
        "label": "Download",
        "type": "application/pdf",
        "authenticatedDownload": true
    },
    {
        "href": "https://sandbox.zenodo.org/20170703.unw.png",
        "label": "Preview",
        "type": "image/x-icon",
        "authenticatedDownload": false
    },
    {
        "href": "https://creativecommons.org/licenses/by-sa/4.0/",
        "label": "License",
        "type": "text/html",
        "authenticatedDownload": false
    }
]
```

## Full Sample

```json
{
  "type": "FeatureCollection",
  "@epos_style": {
    //attribute names to match with @epos_type values
    "station": {
      "label": "This is a station", //use for legend
      "marker": {
        "character": "S", //character type value
        "pin": "true", //true|false"
        "clustering": "true" //true|false"
        //"anchor":"C"  not needed when pin=true
      }
    },
    "event": {
      "label": "This is an event", //use for legend
      "marker": {
        "fontawesome_class": "fas fa-star", //fontawesome-class type value
        "pin": "false", //true|false"
        "clustering": "false", //true|false"
        "anchor": "C" // N|NE|E|SE|S|SW|W|NW|C (default: C) used when pin=false
      }
    },
    "thing": {
      "label": "This is a thing", //use for legend
      "marker": {
        "href": "www.thing.com/thing.png", //image url type value
        "pin": "false", //true|false"
        "clustering": "false", //true|false"
        "anchor": "C" // N|NE|E|SE|S|SW|W|NW|C (default: C) used when pin=false
      }
    }
  },
  "features": [
    {
      "type": "Feature",
      "properties": {
        "@epos_type": "event", //used to lookup @epos_style attributes
        "@epos_label_key": "Title", //used for things like tooltips
        "@epos_map_keys": [
          //typically used for map popups
          "Title",
          "Description",
          "Summary",
          "@epos_links"
        ],
        "@epos_data_keys": [
          //typically used for data visualisation columns
          "Title",
          "Description",
          "@epos_links"
        ],
        "Title": "my title",
        "Institutions": [
          // array of primitives
          "Insitution 1",
          "Insitution 2",
          "Insitution 3"
        ],
        "Elevation": "122",
        "Description": "Hellenic Seismic Network",
        "Summary": "Properties can contain HTML <img src=\"smiley.gif\">",
        "@epos_links": [
          {
            "href": "http://volobsis.ipgp.fr/volcano-bullexcep.pdf",
            "label": "Download",
            "type": "application/pdf",
            "authenticatedDownload": true
          },
          {
            "href": "https://sandbox.zenodo.org/20170703.unw.png",
            "label": "Preview",
            "type": "image/x-icon",
            "authenticatedDownload": false
          },
          {
            "href": "https://creativecommons.org/licenses/by-sa/4.0/",
            "label": "License",
            "type": "text/html",
            "authenticatedDownload": false
          }
        ]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [24.38591, 40.93704]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "@epos_type": "overlay",

        // for image overlays, used as label on sub layer & legend & tooltip
        "@epos_label_key": "Name",
        "@epos_map_keys": ["Name", "Description", "Elevation", "Preview"],
        "@epos_data_keys": ["Name", "Description", "Elevation"],
        "Name": "My layer Label",
        "Elevation": "500",
        "Description": "Hellenic Seismic Network",
        "Preview": "some HTML <img src=\"smiley.png\">"
      },
      // not supporting GeoTIFF - normal images only
      "@epos_image_overlay": {
        "href": "https://sandbox.zenodo.org/2017062703_sd_era_4rlks.unw.png",
        "bbox": [
          // position on map
          -4.5184, // spatial reference for the bbox
          36.4027, // is assumed to match the spatial
          -3.2463, // reference for the GeoJSON object
          37.7806 // the order is lat1, lon1, lat2, lon2
        ],
        "legend ": {
          "href": "www.abc.com/legend-image.png" //legend image
        }
      },
      "geometry": null //NO GEOMETRY FOR OVERLAY
    }
  ]
}
```
