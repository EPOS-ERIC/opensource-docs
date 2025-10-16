---
id: describing-data
title: "Describing Your Data"
---

This guide walks you through the process of describing your datasets and web services using the [EPOS-DCAT-AP](../system-reference/data-formats/dcat-ap.md) metadata specification. By understanding how to structure this metadata, you can integrate your own resources into the EPOS Platform, making them discoverable through the interface.

We will dissect a real-world example: a metadata file for an OGC Web Map Service (WMS). This is one of the examples loaded when you run the `epos-opensource docker populate --example` command from the [Quickstart Guide](../quickstart.md).

## The Anatomy of a Metadata File

A metadata file, written in the Turtle (TTL) format, tells the EPOS Platform everything it needs to know about a resource: who provided it, what it contains, and how to access and display it.

Let's break down the `ogc-wms.ttl` example section by section.

### Prefixes

The file begins with a list of `@prefix` declarations. These are simply shortcuts to make the file easier to read.

```turtle
@prefix dct: <http://purl.org/dc/terms/> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .
@prefix schema: <http://schema.org/> .
...
```

Each prefix defines a shorthand for a long URI. For example, instead of writing `<http://www.w3.org/ns/dcat#Dataset>`, we can just use `dcat:Dataset`.

### Categorization

This section defines how your dataset is grouped and displayed in the graphical user interface. It uses the [SKOS](https://www.w3.org/2004/02/skos/) vocabulary to create a hierarchy.

```turtle
<category:ogcexample> a skos:ConceptScheme;
 skos:prefLabel "OGC Example" ;
 foaf:logo ".../Open_Geospatial_Consortium_logo.png" ;
 schema:color "#2e3486";
 schema:orderItemNumber "2";
.

<category:ogcexamplewms> a skos:Concept;
 skos:prefLabel "OGC WMS Example";
 skos:inScheme <category:ogcexample>;
.
```

- **`skos:ConceptScheme`**: Think of this as a top-level category or a "folder" for your datasets. It maps directly to a collapsible section in the GUI's results list.
  - `skos:prefLabel`: The display name for this category (e.g., "OGC Example").
  - `foaf:logo`: A URL for an icon to display next to the category name.
  - `schema:color`: A hex color code used to highlight results within this category.
  - `schema:orderItemNumber`: A number that dictates the display order of categories in the GUI.
- **`skos:Concept`**: This is a sub-category. A `dcat:Dataset` is linked to a `skos:Concept` to place it within the correct group.

<!-- TODO add screenshot -->

### The Organization

This block defines the institution or entity that provides the data.

```turtle
<PIC:999844476> a schema:Organization;
  schema:legalName "Fondazione EUCENTRE";
  schema:logo ".../logo_eucentre_100px.png"^^xsd:anyURI;
  schema:url "http://www.eucentre.it/"^^xsd:anyURI;
.
```

An `Organization` block on its own is just a definition. It becomes useful when a `dcat:Dataset` or `epos:WebService` links to it using a property like `dct:publisher`. This allows the GUI to display provider information in the pop-up details for a search result.

<!-- TODO is this also used in the "connecting to" popup? add screenshot -->

### The Dataset

This block represents the high-level, conceptual description of your resource. Think of it as a container for one or more specific ways to access the data.

**Snippet:**

```turtle

<...> a dcat:Dataset;
    dct:title "European Seismic Risk Index (ESRM20)";
	dct:description "A map of the European Seismic Risk Index...";
	dcat:keyword "seismic risk", "buildings", "map";
	dcat:theme <category:ogcexamplewms>;
	dct:publisher <PIC:999844476>;
	dcat:distribution <...>;
.
```

- `dct:title` & `dct:description`: These fields describe the conceptual dataset. While important for cataloguing, they are **not** what users directly see in the interface.
- `dcat:keyword`: These keywords are used by the search functionality to help users find relevant datasets.
- `dcat:theme`: **This is a mandatory field.** It links the dataset to a `skos:Concept` defined earlier, ensuring it appears in the correct category in the GUI.
- `dcat:distribution`: This crucial property links the conceptual dataset to one or more `dcat:Distribution` instances, which define the concrete, user-facing ways to access the data.

### The Distribution

This is the most important section for user interaction. The `Distribution` defines a specific, accessible form of the dataset, and its properties are what users will see and search for in the Platform.

**Snippet:**

```turtle
<...> a dcat:Distribution;
	dct:title "European Seismic Risk Index (ESRM20)";
    dct:description "The OGC WMS web service providing a raster layer...";
	dct:license "https://creativecommons.org/licenses/by/4.0/";
	dct:format ".../PNG";
	dcat:accessURL <.../Operation>;
.
```

- `dct:title` & `dct:description`: **This is the primary information displayed in the GUI.** The title is the main heading for your resource in the search results, and this description is what users read. The Platform's search functionality operates on these fields.
- `dct:license` & `dct:format`: Describes the license and specific data format.
- `dcat:accessURL`: This is the critical link that points to the `hydra:Operation`, which contains the technical details for fetching the data.

<!-- TODO add screenshot -->

### The Web Service

This block describes the service that delivers the data and provides a link to its human-readable documentation.

```turtle
<...> a epos:WebService;
	schema:name "European Seismic Risk Index (ESRM20)";
	hydra:entrypoint "https://maps.eu-risk.eucentre.it/mapproxy/.../ows?";
	hydra:supportedOperation <.../Operation>;
	dct:conformsTo <.../APIDocumentation> ;
.

<.../APIDocumentation> a hydra:ApiDocumentation ;
      hydra:title "European Seismic Risk Model - API Documentation" ;
      hydra:entrypoint "https://eu-risk.eucentre.it/esrm20/" ;
.
```

- `hydra:entrypoint`: The base URL for the web service endpoint.
- `hydra:supportedOperation`: Links to the machine-readable `hydra:Operation`.
- `dct:conformsTo`: Links to a `hydra:ApiDocumentation` block, which provides a title and URL for human-friendly API docs.

### The Web Service Operation

This is the most technical part of the file. It gives the EPOS Platform the exact instructions needed to automatically query a web service and display its data.

```turtle
<...> a hydra:Operation;
	hydra:method "GET";
	hydra:returns "image/png";
	hydra:property[ a hydra:IriTemplate;
		hydra:template "https://.../ows?{?service,version,request,...}&bbox={...}";
		hydra:mapping [ ... ];
	];
.
```

- `hydra:method`: The HTTP method to use. Currently, only `GET` is supported.
- `hydra:returns`: The expected MIME type of the response.
- `hydra:IriTemplate`: This is the core of the operation.
  - `hydra:template`: Defines the full URL structure for making an API request.
  - `hydra:mapping`: **This is where the magic happens.** Each `mapping` block defines a variable from the template (e.g., `bbox`, `layers`, `crs`). The GUI uses these mappings to dynamically build interactive controls for the user.

For example, a mapping for a variable of type `xsd:string` will create a text input box. A `xsd:boolean` will create a checkbox, and a date-related type will create a calendar picker. The descriptions and default values you provide here directly configure the UI widgets that allow users to customize the API request before sending it.

:::tip[Key Takeaway]
The `hydra:Operation` block is what makes a dataset interactive. By carefully defining your API's parameters here, you enable the EPOS Platform to build a user interface for it automatically.
:::

## Full Sample

```turtle

@prefix adms: <http://www.w3.org/ns/adms#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix epos: <https://www.epos-eu.org/epos-dcat-ap#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dct: <http://purl.org/dc/terms/> .
@prefix vcard: <http://www.w3.org/2006/vcard/ns#> .
@prefix hydra: <http://www.w3.org/ns/hydra/core#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix schema: <http://schema.org/> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .
@prefix cnt: <http://www.w3.org/2011/content#> .
@prefix locn: <http://www.w3.org/ns/locn#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix http: <http://www.w3.org/2006/http#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix gsp: <http://www.opengis.net/ont/geosparql#> .
@prefix dqv: <http://www.w3.org/ns/dqv#> .
@prefix oa: <http://www.w3.org/ns/oa#> .
@prefix foaf: <http://xmlns.com/foaf/spec/#term_> .


#########
# Dataset Top Concept Scheme
#########
<category:facets/dataset-theme> a skos:Concept ;
       skos:definition  "Dataset" ;
       skos:prefLabel   "Dataset"
 .


#########
# Concept Scheme
#########

<category:ogcexample> a skos:ConceptScheme;
 skos:prefLabel "OGC Example" ;
 dct:title "OGC Example" ;
 dct:description "Some OGC example" ;
 foaf:logo "https://raw.githubusercontent.com/epos-eu/platform-gui-icons/refs/heads/main/Open_Geospatial_Consortium_logo.png" ;
 #foaf:homepage "" ;
 schema:color "#2e3486";
 schema:orderItemNumber "2";
 skos:hasTopConcept <category:facets/dataset-theme>;
.


#########
# Concepts
#########

<category:ogcexamplewms> a skos:Concept;
 skos:prefLabel "OGC WMS Example"; #GUI
 skos:definition "This is an example";
 skos:inScheme <category:ogcexample>;
.


###############################################################################
### Organisations ###
###############################################################################

<PIC:999844476> a schema:Organization;
  schema:identifier [ a schema:PropertyValue;
    schema:propertyID "PIC";
    schema:value "999844476";
  ];
  schema:legalName "Fondazione EUCENTRE";
  schema:address [ a schema:PostalAddress;
    schema:streetAddress "Via Ferrata, 1";
    schema:addressLocality "Pavia";
    schema:postalCode "27100";
    schema:addressCountry "IT";
  ];
  schema:logo "https://www.eucentre.it/wp-content/uploads/2018/03/logo_eucentre_100px.png"^^xsd:anyURI;
  schema:url "http://www.eucentre.it/"^^xsd:anyURI;
  schema:email "info@eucentre.it";
.


###############################################################################
### Dataset ###
###############################################################################

<https://www.epos-eu.org/epos-dcat-ap/Seismology/Dataset/EFEHR/EU_SeismicRiskIndex> a dcat:Dataset;
	dct:identifier "https://www.epos-eu.org/epos-dcat-ap/Seismology/Dataset/EFEHR/EU_SeismicRiskIndex";
    	adms:identifier [ a adms:Identifier;
		adms:schemeAgency "DOI";
		skos:notation "10.7414/EUC-ESRM20-RISK-INDEX-VIEWER";
	];
    dct:title "European Seismic Risk Index (ESRM20)";
	dct:description "A map of the European Seismic Risk Index calculated using the European Seismic Risk Model (ESRM20). The index is calculated by dividing the average annual loss by the GDP per capita. Two types of loss are considered: economic loss (in Euros) and loss of life.";
	dct:type "http://purl.org/dc/dcmitype/Dataset"^^xsd:anyURI;
    dct:accrualPeriodicity "http://purl.org/cld/freq/irregular"^^xsd:anyURI ;
	dct:spatial [ a dct:Location;
		locn:geometry "POLYGON((-32.5 73.5,45.0 73.5,45.0 32.5,-32.5 32.5,-32.5 73.5))"^^gsp:wktLiteral;
	];
	dcat:theme <category:ogcexamplewms>;
	dcat:keyword "seismic risk", "buildings", "population", "map", "earthquake";
	dct:publisher <PIC:999844476>;
	dcat:distribution <https://www.epos-eu.org/epos-dcat-ap/Seismology/Distribution/EFEHR/OGC/WMS/EU_SeismicRiskIndex>;
	dqv:hasQualityAnnotation [ a oa:Annotation ;
       		oa:hasBody "http://risk.efehr.org/qa"^^xsd:anyURI  ;
        ];
.


###############################################################################
### Distribution ###
###############################################################################

<https://www.epos-eu.org/epos-dcat-ap/Seismology/Distribution/EFEHR/OGC/WMS/EU_SeismicRiskIndex> a dcat:Distribution;
	dct:identifier "https://www.epos-eu.org/epos-dcat-ap/Seismology/Distribution/EFEHR/OGC/WMS/EU_SeismicRiskIndex";
	dct:description "The OGC WMS web service providing a raster layer presenting the geographical distribution of the European seismic risk index calculated with the European Seismic Risk Model (ESRM20).";
	dct:title "European Seismic Risk Index (ESRM20)";
	dct:type "http://publications.europa.eu/resource/authority/distribution-type/WEB_SERVICE"^^xsd:anyURI;
	dct:conformsTo <https://www.epos-eu.org/epos-dcat-ap/Seismology/WebService/EFEHR/OGC/WMS/EU_SeismicRiskIndex>;
	dcat:accessURL <https://www.epos-eu.org/epos-dcat-ap/Seismology/WebService/EFEHR/OGC/WMS/EU_SeismicRiskIndex/Operation>;
	dct:license "https://creativecommons.org/licenses/by/4.0/"^^xsd:anyURI;
	dct:format "http://publications.europa.eu/resource/authority/file-type/PNG"^^xsd:anyURI;
.


###############################################################################
### Web service ###
###############################################################################

<https://www.epos-eu.org/epos-dcat-ap/Seismology/WebService/EFEHR/OGC/WMS/EU_SeismicRiskIndex> a epos:WebService;
	schema:identifier "https://www.epos-eu.org/epos-dcat-ap/Seismology/WebService/EFEHR/OGC/WMS/EU_SeismicRiskIndex";
	schema:description "The OGC WMS web service providing a raster layer presenting the geographical distribution of the European seismic risk index calculated with the European Seismic Risk Model (ESRM20).";
	schema:name "European Seismic Risk Index (ESRM20)";
	hydra:entrypoint "https://maps.eu-risk.eucentre.it/mapproxy/European_Risk_Index_Gridded/ows?"^^xsd:anyURI;
	schema:provider <PIC:999844476>;
	hydra:supportedOperation <https://www.epos-eu.org/epos-dcat-ap/Seismology/WebService/EFEHR/OGC/WMS/EU_SeismicRiskIndex/Operation>;
	schema:keywords "seismic risk", "buildings", "population", "map", "earthquake";
	dct:license "https://creativecommons.org/licenses/by/4.0/"^^xsd:anyURI;
	dct:conformsTo <https://www.epos-eu.org/epos-dcat-ap/Seismology/WebService/EFEHR/APIDocumentation> ;
.


###############################################################################
###  Web service documentation ###
###############################################################################

<https://www.epos-eu.org/epos-dcat-ap/Seismology/WebService/EFEHR/APIDocumentation> a hydra:ApiDocumentation ;
      hydra:title "European Seismic Risk Model - API Documentation" ;
      hydra:description "European Seismic Risk Model - API Documentation" ;
      hydra:entrypoint "https://eu-risk.eucentre.it/esrm20/"^^xsd:anyURI ;
.


###############################################################################
### Web service operations ###
###############################################################################

<https://www.epos-eu.org/epos-dcat-ap/Seismology/WebService/EFEHR/OGC/WMS/EU_SeismicRiskIndex/Operation> a hydra:Operation;
	hydra:method "GET"^^xsd:string;
	hydra:returns "image/png";
	hydra:property[ a hydra:IriTemplate;
		hydra:template "https://maps.eu-risk.eucentre.it/mapproxy/European_Risk_Index_Gridded/ows?{?service, version, request, layers, crs, format, width, height}&styles&bbox={minlatitude,minlongitude,maxlatitude,maxlongitude}"^^xsd:string;

            # WMS 1.3.0 bbox format is "minlatitude,minlongitude,maxlatitude,maxlongitude"
			# bbox calculated by geoserver for this layer is
			# minlatitude 32.39747
			# minlongitude -31.26575
			# maxlatitude 71.18811
			# maxlongitude 44.83499

			hydra:mapping[ a hydra:IriTemplateMapping;
				hydra:variable "service"^^xsd:string;
				rdfs:range "xsd:string";
				rdfs:label "Service";
				http:paramValue "WMS";
				schema:defaultValue "WMS";
				hydra:required "true"^^xsd:boolean;
				schema:readonlyValue "true"^^xsd:boolean ; # true = hidden
			];
			hydra:mapping[ a hydra:IriTemplateMapping;
				hydra:variable "version"^^xsd:string;
				rdfs:range "xsd:string";
				rdfs:label "WMS version";
				http:paramValue "1.1.1";
				http:paramValue "1.3.0";
				schema:defaultValue "1.3.0";
				hydra:required "true"^^xsd:boolean;
			];
			hydra:mapping[ a hydra:IriTemplateMapping;
				hydra:variable "request"^^xsd:string;
				rdfs:range "xsd:string";
				rdfs:label "Request type";
				http:paramValue "GetCapabilities";
				http:paramValue "GetFeatureInfo";
				http:paramValue "GetLegendGraphic";
				http:paramValue "GetMap";
				schema:defaultValue "GetMap";
				schema:readonlyValue "true"^^xsd:boolean ; # true = hidden
				hydra:required "true"^^xsd:boolean;
			];
			hydra:mapping[ a hydra:IriTemplateMapping;
				hydra:variable "layers"^^xsd:string;
				rdfs:range "xsd:string";
				rdfs:label "Layers";
				http:paramValue "seismic-risk";
				schema:defaultValue "seismic-risk";
				schema:readonlyValue "true"^^xsd:boolean ; # true = hidden
				hydra:required "true"^^xsd:boolean;
			];
			hydra:mapping[ a hydra:IriTemplateMapping;
				hydra:variable "crs"^^xsd:string;
				rdfs:range "xsd:string";
				rdfs:label "Spatial Reference System";
				http:paramValue "CRS:84";
				http:paramValue "EPSG:4326";
				http:paramValue "EPSG:5837";
				schema:defaultValue "EPSG:4326";
				hydra:required "true"^^xsd:boolean;
			];
			hydra:mapping[ a hydra:IriTemplateMapping;
				hydra:variable "format"^^xsd:string;
				rdfs:range "xsd:string";
				rdfs:label "Output format";
				http:paramValue "text/plain";
				http:paramValue "text/xml";
				http:paramValue "text/html";
				http:paramValue "image/jpeg";
				http:paramValue "image/png";
				schema:defaultValue "image/png";
				hydra:required "true"^^xsd:boolean;
				hydra:property "schema:encodingFormat";
			];
			hydra:mapping[ a hydra:IriTemplateMapping;
				hydra:variable "width"^^xsd:string;
				rdfs:range "xsd:string";
				rdfs:label "Width of the output map";
				http:paramValue "1536";
				schema:defaultValue "1536";
				schema:readonlyValue "true"^^xsd:boolean ; # true = hidden
				hydra:required "true"^^xsd:boolean;
			];
			hydra:mapping[ a hydra:IriTemplateMapping;
				hydra:variable "height"^^xsd:string;
				rdfs:range "xsd:string";
				rdfs:label "Height of the output map";
				http:paramValue "811";
				schema:defaultValue "811";
				schema:readonlyValue "true"^^xsd:boolean ; # true = hidden
				hydra:required "true"^^xsd:boolean;
			];
			hydra:mapping[ a hydra:IriTemplateMapping;
				hydra:variable "minlatitude"^^xsd:string;
				hydra:property "epos:southernmostLatitude";
				rdfs:range "xsd:float";
				rdfs:label "Minimum latitude";
				schema:minValue "32.5000";
				schema:maxValue "73.5000";
				schema:defaultValue "32.5000";
				hydra:required "true"^^xsd:boolean;
			];
			hydra:mapping[ a hydra:IriTemplateMapping;
				hydra:variable "maxlatitude"^^xsd:string;
				hydra:property "epos:northernmostLatitude";
				rdfs:range "xsd:float";
				rdfs:label "Maximum latitude";
				schema:minValue "32.5000";
				schema:maxValue "73.5000";
				schema:defaultValue "73.5000";
				hydra:required "true"^^xsd:boolean;
			];
			hydra:mapping[ a hydra:IriTemplateMapping;
				hydra:variable "minlongitude"^^xsd:string;
				hydra:property "epos:westernmostLongitude";
				rdfs:range "xsd:float";
				rdfs:label "Minimum longitude";
				schema:minValue "-32.5000";
				schema:maxValue "45.0000";
				schema:defaultValue "-32.5000";
				hydra:required "true"^^xsd:boolean;
			];
			hydra:mapping[ a hydra:IriTemplateMapping;
				hydra:variable "maxlongitude"^^xsd:string;
				hydra:property "epos:easternmostLongitude";
				rdfs:range "xsd:float";
				rdfs:label "Maximum longitude";
				schema:minValue "-32.5000";
				schema:maxValue "45.0000";
				schema:defaultValue "45.0000";
				hydra:required "true"^^xsd:boolean;
			];
	];
.
```

## Other Examples

The `--example` population includes metadata for other types of services as well. You can explore them in the [here](https://github.com/EPOS-ERIC/opensource-docs/tree/main/static/examples) to see how different kinds of data and access methods are described:

- **OGC WFS:** `ogc-wfs.ttl`
- **EPOS GeoJSON:** `example-geojson.ttl`
- **CoverageJSON:** `example-covjson.ttl`
- **Generic Downloadable File:** `example-downloadablefile.ttl`
