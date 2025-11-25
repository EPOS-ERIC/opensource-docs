---
id: changelog
title: Changelog
---



# Changelog

All notable changes to this project will be documented in this file.

## [1.0.48] - 2025-11-24
- fix: keep data from simple panel view to detached mode. (related issue: https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/20045)
- fix: allow vertical resize of detached Table and Graph view (related issue: https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/20044)
- Store UID of Distribution into local storage to allow easy retrieval of Sharing Link from BE side.
- fix: Restructure and Optimizie SPARQL query for DetailsDialog (related issue: https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/19443)
- fix: Spatial Coverage in DetailsDialog not showing properly. (related issue: https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/20070)
- chore: adding new Monitoring Link added to main menu. (related issue: https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/20072)
- Feature: alphabetically reorder parameters. New Search Bar added to select-option parameters to allow easier navigation (related issue: https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/19504)
- fix: toggle on Map from Table view (related issue: https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/20080)
- Enable ServiceProvider in result cards.

## [1.0.47] - 2025-10-30
- New Leaflet Control "Measure Distance on Map": allows users to measure distance between points on map.(related issue: https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/12881)
- Expansion of "Arctic Polar Projection" feature: "graticule" layers added to show as overlay when in map polar projection from layerControl 
- WMTS Implementation: WMTS layer implementation both for "Map" and "Table" visualization (related issue: https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/6240)
  

## [1.0.46] - 2025-09-11
- FAIR Assessment Buttons: added new buttons, both in the main menu and in the Details dialog pertaining to each service, in order to open the related EPOS FAIR Assessment page.


## [1.0.45] - 2025-09-02
- Matomo statistics: added the possibility to define a time window when searching statistics.
- Map View: added a reset zoom button to focus on Europe; modified the default initial zoom.
- Graph Panel: improved logic so that the trace selector automatically expands when new distributions with new traces are selected, avoiding the impression of empty or unloaded data. (related issue https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/19300)
- UI Update: added the central label “This Platform is Powered By EPOS ERIC”.
- Sharing: fixed sharing link functionality. (related issue https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/19401)
- **Arctic Polar Projection (EPSG:3995):** introduced as a new functionality, allowing the map to use the Arctic projection (EPSG:3995) via **Proj4Leaflet**. (related issue https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/19404)
- Codebase (not enabled):  
  - **Measure distance tool:** implemented in the codebase but currently **NOT ENABLED**. (related issue https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/12881)

## [1.0.43] - 2025-06-05
-  DOI Citation: changed logic and new endpoint to retrieve citation informations inside of informations dialog. (related issue: https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/16537).
- Updated Link Citation Guide (GUI dropdown menu).
- Graph selecting at least one trace
- Welcome Popup changes
- Export the Map View as Image (related issue: https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/13074).
- Matomo statistics dialog: removal of unused widget and addition of dialog title.
- Disabling of Metadata Preview Area


## [1.0.42] - 2025-03-11
- Fix Graph Panel.
- Fix 'Clear All' button (not recentering map and not resetting zoomLevel).
- Update the layout to welcome Menu.
- New welcome pop window added for a guide tour.

## [1.0.41] - 2025-03-04
- Feature: new dialog created in order to show the real cases of scientific examples (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/19388).
- Fix: Sharing link URL does not populate favorites if is already populated (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/19401).
- Fix: Graph panel view not updated when new services is selected (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/19402).
- Fix: Adjust ImageOverlay Blur when Zooming (crisp pixels) (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/19409).
- Fix: BeachBalls anchoring to center (related to: https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/3889#note_49745).
- Fix: Analysis tab: "OpenInBrowser" button fix (enable as soon as 'Status' is 'Ready').
- Fix: "Quality Assurance" property has to be always visible (when no value, shows 'Undefined').
- Fix: Zoom for timeseries services ('Coverage' type)
- Fix: fixed Layout for Overlapping Parameters Fields Text in Results Cards.

## [1.0.40] - 2025-01-27
- Fix: new Covjson format for 'only on Graph' visibility.
- Feature: Scatter plots data visualization added on Graph ('Coverage' type, not 'CoverageCollection').

## [1.0.39] - 2024-11-28
- Fix: converted payload has wrong labels (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/19294)
- Fix: removing unwanted matomo tracking on closing card events
- Fix: details query for keywords made case-insensitive, now returning all available definitions correctly (tmp solution for 502 error: splitting call into multiple calls)
- Feature: added new Base Maps
- Fix: making check case-insensitive when checking for 'covjson' type (marker was not showing for ORIGINAL (aka not converted) type). This fix      solves the issue on GUI side: lat and long in right range values need to be provided in order to show marker on map.
- Fix: Details window - frame resizing allowed only for horizontal direction (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/19281).
- Chore: Details window - categories layout modified to show all the available categories in the same line without need to click the button .
- Chore: space added between information icon and item result name .
- Fix: restructured Keywords query
- Feature: modify the graph representation to accept parameterGroup data type inside current covJson data to show error bars (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/149)
- Feature: implementing CoverageCollection visualization on 'Graph' view.
- Feature: implementing MultiStyle Markers.
- Feature: Zoom on actual data
- Feature: Matomo statistics
- Feature: Update driver.js from 0.9.8 version to 1.3.1 version . 

## [1.0.35] - 2024-09-02 - ICS-TCS Meeting Sep 2024
- Feature: switch distribution dialog
- Feature: zoom on spatial filter
- Feature: hiding advanced search filters from results items when no filters available
- Feature: appended country code to the Service Providers names
- Chore: add new `npm run dev` to start the application with the correct baseHref
- Feature: add notification when selecting a service showing the Service Provider
- Test: add/fix cypress tests
- Bug: fix clicking on marker not always working on big markers
- Bug: fix deselecting a service not always working
- Chore: changing text based on context when no data/equipment available
- Chore: update link for Configuration and Visualization of services video

## [1.0.34-dev]

- Feature: Shared Data Portal

## [1.0.33] - 2024-06-26

- Feature: new menu component (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/19186)

## [1.0.32] - 2024-06-19

- Registry module enabled in staging and production environments

## [1.0.31] - 2024-05-31 - ICS-TCS Meeting Jun 2024

- Feature: detach panels
- Feature: added matomo track events
- Feature: citations tool on details popup and download behavior
- Chore: improved management of environment variables
- Fix: added Open Street Map basemap layer

## [1.0.30] - 2024-04-17

- Fix issue (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/18329)
- Fix issue (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/17796)

## [1.0.29-dev]

- Feature: WMTS Layer
- Update: plotly library
- Feature: Selected graph traces saved to local storage
- Fix: trace selector with same trace id (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/16552)

## [1.0.29] - 2024-03-20

- Feature: vocabulary tool enabled

## [1.0.28] - 2024-03-05

- Fix: CovJson popup

## [1.0.27] - 2024-03-01

- Feature: images slideshow gallery
- Feature: new Data and Service providers filter
- Feature: vocabulary Tool (hidden)
- Feature: toggle map information on table panel
- Chore: added code documentation
- Chore: update videos guide
- General refactoring
- Fix: facetDropdown issues

## [1.0.26] - 2024-01-23

- Fix: issue on image overlay (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/17559)

## [1.0.25] - 2023-11-21

- Fix: format disabled for "@epos\_" properties in popup view
- Fix: removed "Expand filter button" on parameter dialog form

## [1.0.24] - 2023-11-13 - Hackathon Rome

- Feature: spatial filter bounding box customization (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/16484)
- Feature: export table data as csv
- Feature: general error popup
- Fix: opening marker popup from table on overlay image layer
- Fix: map popup for overlay image layer (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/12933)
- Fix: shown nested elements on popup (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/13991)
- Fix: anchor point on center position in X axis (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/12838)
- Chore: Name of service missing in category list (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/16553)
- Chore: code cleaning and local storage variable normalization
- Chore: Ux improvements

## [1.0.23] - 2023-10-17

-Fix: switch login mode from implicit to code flow

## [1.0.22] - 2023-10-10

- Fix: check if production env for message alert on "Contact Us" form

## [1.0.21] - 2023-10-02

- Chore: the time limit on policy check has been increased to 6 months

## [1.0.20] - 2023-09-15 - ICS-TCS Meeting Sept 2023

- Fix: "Further information" value on details

## [1.0.19] - 2023-09-14

- Chore: facet dropdown improvements
- Chore: table panel improvements (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/16380)

## [1.0.18] - 2023-09-07 - Staging env

- Chore: update to Angular 14
- Chore: update leaflet library
- Feature: Marker highlight when user click on table row. (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/16366)
- Feature: Graph timeseries visualization from external url on popup (WMS layer)
- Feature: Contact form for dataset
- Chore: Ux improvements

## [1.0.17] - 2023-06-13 ICS-TCS Meeting June 2023

- Feature: Added covjson point on map
- Chore: Ux improvements

## [1.0.16] - 2023-04-18 - Official Launch Release

- Chore: reset order layers timeout
- Chore: warning message on empty result of covjson

## [1.0.15] - 2023-04-11

- Chore: right extension download file from payload. (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/16251)

## [1.0.14] - 2023-03-31

- Feature: Leaflet CircleMarker on geojson without "@epos_style"
- Feature: Added cluster on point marker
- Feature: Open Sans font locally
- Feature: Added Video Guide on menu
- Feature: Added About link on menu (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/16025)
- Feature: Added disclaimer popup for mobile device (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/14718)
- Bugfix: disabled cluster when only one point on map (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/15918)
- Bugfix: set "false" to the boolean field without a defaultValue property (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/15946)
- Bugfix: download select all on filtered files (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/16238)
- Bugfix: managed empty response (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/16239)
- Bugfix: general bugfixes by hackathon
- Chore: managed Object property with @href and @title (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/6241)
- Chore: changed filename for service download (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/44)

## [1.0.13] - 2023-03-13

- Bugfix: spatial service parameters initialization

## [1.0.12] - 2023-03-09 ICS-TCS Meeting March 2023

- Bugfix: general bugfixes

## [1.0.11]

- Bugfix: Tour more stable and resolved issues related to GUI updates.
- Feature: Downloading multiple payloads by selecting formats.
- Feature: added extra informations on service details popup.
- Feature: filter services by type representation (table, map, graph).
- Feature: added "Select all" option on multivalue fields.
- Feature: added external link and subinformation on Data and Service Provider(s) field (detail pop).
- Bugfix: general bugfixes

## [1.0.10] - 2023-02-14

- Bugfix: styles and text
- Chore: added redirect old data/search page

## [1.0.9] - 2023-01-27

- Improvement: The guided tour now caches all user filters and restores them on tour completion or exit.
- Refactor: Refactored the guided tour favourite cache functionality to use the persistor service.
- Refactor: Data Providers visualization on service details
- Feature: Last basemap selection from localStorage
- Bugfix: general bugfixes

## [1.0.8] - 2022-12-08

- Improvement: Provide user with an indication of how many table columns are available to select / have been selected.
- Bugfix: When a user clicks on filter by categories dropdown it is not always visible.
- Bugfix: When using pagination, the user is returned to the bottom of the page results.
- Bugfix: user opens table from 'Visible On' component causing strange behavior

## [1.0.7] - 2022-12-02 ICS-TCS Meeting December 2022

- Feature: Implementation of GUI Tour functionality.
- Feature: Toggle for marker clustering on map.
- Improvement: Notifications update, now using angular snackbar with bespoke EPOS styling and clearer messaging.

## [1.0.6] - 2022-11-24 - Hackathon Rome

- Bugfix: general bugfixes raised during hackathon

## [1.0.5] - 2022-11-18

- Feature: link marker popup to table panel
- Feature: link table panel row to map
- Feature: map zoom, map position, status of panels saved on localStorage
- Feature: on service detail, the DOI field as multiple links
- Chore: removed map shift when searching with spatial bbox
- Chore: on service detail, DOI's label has been changed
- Bugfix: table sorting on datetime value
- Bugfix: field with default "Invalid date" on firefox

## [1.0.4] - 2022-10-27

- code refactoring and scaffolding
- custom layer component improvements
- Feature: filters persistence on local storage
- Feature: added scale feature on map
- Feature: added Service documentation link
- Chore: feedback form changes
- Bugfix: select input width on dataConfiguration component. (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/10283)
- Bugfix: title popup and tooltip on map marker. (https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues/12921)
- Bugfix: apply button on SEIS Bibliography. (https://epos-ci.brgm.fr/epos-public/issuetracker/-/12931)
- Bugfix: float type field. (https://epos-ci.brgm.fr/epos-public/issuetracker/-/12929)
- Bugfix: layer order in map. (https://epos-ci.brgm.fr/epos-public/issuetracker/-/12940)
- Bugfix: scroll on graph trace selector. (https://epos-ci.brgm.fr/epos-public/issuetracker/-/12786)
- Bugfix: avoid many localStorage writes. (https://epos-ci.brgm.fr/epos-public/issuetracker/-/13272)
- Bugfix: scroll marker popup on Firefox. (https://epos-ci.brgm.fr/epos-public/issuetracker/-/10442)

## [1.0.3] - 2022-09-02 - ICS-TCS Meeting September 2022

- Feature: unique custom layer, legend and basemap control.
- Feature: Added timestamp on service status informations
- Bugfix: General bug fixes.

## [1.0.2] - 2022-05-26 - ICS-TCS Meeting June 2022 - New Architecture WebAPI v1.3

- Feature: Hierarchical facet selection.
- Feature: Updated map projection from WGS-84 to Mercator.
- Feature: Multiple map layer selection.
- Improvement: Added feedback form.
- Improvement: Login and AAAI.
- Improvement: General UX improvments.
- Bugfix: General bug fixes.

## [1.0.1] - 2022-05-11 - None - New Architecture WebAPI v1.3

- UX improvements

## [1.0.0] - 2022-04-19 - None - New Architecture WebAPI v1.3

- New GUI on new architecture

## [0.22.2]

- Bugfix: Empty number parameter value now gets converted to an empty string rather than "null" in callout url
- Feature: Map feature popups now contain the name of the layer that they originated from.
- Feature: Make top map layer popups appear at the start of the paginated popups.

## [0.22.1] - 2021-11-01 - None - WebAPI v1.3

- Feature: removed splash page, moved consent banner routing logic in search page.
- Bugfix: Date-range picker local timezone fix.
- Bugfix: Table column data is not lost on column removal and re-addition.

## [0.22.0] - 2021-10-05 - None - WebAPI v1.3

- Fix: fixed bug where a selected/pasted in date could shift a few hours due to time-zone differences. Dates are now always displayed and entered in UTC.
- Feature: FAQ dialog component, selectable from the help dropdown menu, populated from the [EPOS FAQ project repo](https://epos-ci.brgm.fr/epos-public/faq) utilizing the GitLab API.
- Feature: Set default column number on table to 8, Implemented multi selection dropdown to select additional columns on table.
- Chore: update to Angular 12, migration from tslint to eslint, and switching on of strict type checking
- Chore: update to bgs-leaflet 12
- Feature: clicking even on the edge of a circle marker now displays feature details
- Feature: image layer clicks now allow details of multiple (overlapping) features to be shown

## [0.21.2] - 2021-07-16 - None - WebAPI v1.3

- Feature: Addition of temporary "Pilot Operational Testing" labels

## [0.21.1] - 2021-07-01 - None - WebAPI v1.3

- Test: Fix e2e tests - broken by distribution details format changes.
- Bugfix: Fix map point clustering always being applied as evaluation wasn't done at correct time.
- Bugfix: a javascript reference error introduced recently that was affecting image overlay layers.
- Bugfix: handling of the badly formed geoJSON features that we use for image overlays
- Improvement: improves consistency of image overlay map layer popups
- Improvement: updates bgs-leaflet which contains updates that include:
  - Improvement: Improve and simplify the popup display code and fix a race conditions issue that lead to a popup showing with the close header
  - Feature: allow ad-hoc displaying of feature popups via the click manager and use this to simplify/standardize marker and clustered marker popups
  - Bugfix: geojson point feature identify - They were being ignored due to the assumption that points would always be displayed as markers
- Bugfix: fix table error when empty feature collection received.

## [0.21.0] - 2021-06-09 - ICS-TCS Meeting June 2021 - WebAPI v1.3

- Test: Swap protractor e2e tests for cypress.
- Bugfix: Fix the deployment of documentation.
- Chore: Updated text on help menu tooltips.
- Feature: wms feature identification enabled and configured.
- Improvement: wms legends more likely to be retrieved.
- Improvement: Enabled map popups to display info for geojson non-point feature types.
- Improvement: adds consistent map popup scrolling for single popups, inline with paginated popups.
- Improvement: Advanced table sorting capabilities, table now sorts on date, number and string values.
- Improvement: Further SonarQube suggested fixes as part of Technical Debt pitch efforts.

## [0.20.6] - 2021-05-24 - None - WebAPI v1.3

- Feature: Added T&Cs, Privacy and Cookie policy consent feature.
- Feature: Added new help menu options for written tutorials.
- Feature: Added temporary button linking users to feedback form.

## [0.20.5] - 2021-04-28 - None - WebAPI v1.3

- Chore: Added Apache-2.0 license text to the top of every project file.

## [0.20.4] - 2021-04-13 - None - WebAPI v1.3

- Bugfix: (Partial) fix for table sorting. Currently sorts everything as a string, so will not work well for numbers, dates, boolean, etc.

## [0.20.3] - 2021-03-23 - None - WebAPI v1.3

- Bugfix: Remove internal filtering of null and empty string parameter values for service configuration, so that these are sent to the execution API.
- Bugfix: Ensure execution api call parameters are not encoded twice, making then difficult to use in debugging.

## [0.20.2] - 2021-03-08 - ICS-TCS Meeting March 2021 - WebAPI v1.3

- Improvement: Added support to show multiple data providers in Detail pane.
- Improvement: Rotated chevrons on help menu and added click animation.
- Bugfix: Added styling that had been deleted, which had caused the GRDB icon to disappear on the splash page.

## [0.20.1] - 2021-02-24 - ICS-TCS Meeting March 2021 - WebAPI v1.3

- Bugfix: Fix to not allow deletion of the only existing workspace (introduced in 0.20.0).
- Improvement: Implemented 'Help' menu, contains more comprehensive guides, with updated annotated diagram of GUI - (https://epos-ci.brgm.fr/ics-tcs/pitches-2020-cycle-4/-/wikis/PITCH-::-ICS-GUI-::-HELP).

## [0.20.0] - 2021-02-18 - ICS-TCS Meeting March 2021 - WebAPI v1.3

- Refactor: Many older components re-implemented using current practices in order to remove bgs-lib2 library from codebase. Areas affected:
  - Workspace selector.
  - Dialog service.
  - Clear pinned items dialog.
  - Add/edit workspace dialog.
  - Workspace manager dialog.
  - Disclaimer dialog.
  - Loading indicator.
  - Distribution details tab.
  - Workspace items table (workspace page left panel).
  - Distribution parameter configuration tab.
  - Pre-visualization Map.
- Improvement: Convert parameter configuration date/time display format to ISO 8601 (seconds excluded for the time being).
- Improvement: Updated Angular version from 7 to 10. Also updated some other imported packages.
- Improvement: Efficiency improvements, swapping function call binding for variable binding and pipe usage, as recommended when using Angular. Affected areas:
  - Data search results panel.
  - Graph trace selector.
  - Pre-visualization table.
- Bugfix: Pre-visualization table filtering fixed.
- Bugfix: Pre-visualization table loading indicator showing after receipt of empty geojson response.
- Improvement: Minor visualization table improvements to display messages when there is no data to display.
- Improvement: SonarQube suggested fixes as part of Technical Debt pitch efforts.

## [0.19.0] - 2020-09-16 - ICS-TCS Meeting December 2020 - WebAPI v1.3

- Improvement: DOI metadata display improved to be more data driven and flexible.
- Bugfix: issuetracker#227 - Search result ordering fix.
- Improvement: Search results tree structure display improvement.
- Feature: COVjson timeseries display now accepts short data form (start, stop, num).
- Bugfix: Fixed bug where the data search configuration spatial control showed when it shouldn't.
- Bugfix: issuetracker#172 - Ensure map legend refreshed when map layer is.
- Bugfix: issuetracker#57 - Fix being able to deselect an optional value of a configuration "select" parameter.
- Bugfix: Ensure that all configuration changes trigger the enabling of the "Apply" button.
- Bugfix: Fixes mime-type evaluation of distribution formats in visualisation components that are no longer case sensitive.

## [0.18.0] - 2020-09-16 - ICS-TCS Meeting September 2020 - WebAPI v1.3

- Feature: Authenticated download functionality added for specific services, from download buttons.
- Feature: Authenticated download functionality added in visualization map popups and table (requires "AuthenticatedDownload" flag to be set in Epos Geojson to trigger).
- Documentation: Updates to EPOS GeoJson specification with respect to "AuthenticatedDownload" flag used for Authenticated download.
- Feature: Data Provider Visibility info added. Modal triggered from button in the Details table.
- Improvement: Timeseries graph update to ensure display reacts to configuration updates.
- Improvement: Timeseries graph display update to make trace selector pop out and make better use of space.
- Improvement: User Feedback Form updates to add/change the labels that are added to the created gitlab issue (see https://epos-ci.brgm.fr/epos/epos-gui/-/issues/267).
- Improvement: Removal of "session id" http request header.
- Chore: Some housekeeping carried out to remove dead code and try to prepare for future angular update etc.
- Known Issue: Authenticated download functionality activates for certain services, based on hard-coded selection parameters. Needs to be data driven.

## [0.17.0] - 2020-06-02 - ICS-TCS Meeting June 2020 - WebAPI v1.3

- Feature: Time-series visualization initial development added.
- Feature: Table data visualization initial development added.
- Update: Hotjar icon appearance update.
- Update: Additional documentation added.

## [0.16.3] - 2020-05-04 - Feedback Form Updates - WebAPI v1.3

- Improvement: We no longer show the form if the initial API request for TCS labels fails, displaying a message stating that we are "Unable to contact feedback API. Please try again."
- Bugfix: Added a pagination parameter to the TCS labels API call that requests 100 results (instead of default 20) per page.
- Bugfix: Fixed a bug that caused a JavaScript error when the submitted form had no TCS selected, on the live deployment.

## [0.16.2] - 2020-04-29 - Live Domain Name Change (2) - WebAPI v1.3

- Update: Updated test for whether app is deployed live as the live domain has changed.

## [0.16.1] - 2020-04-29 - WebAPI v1.3

- Update: Updated test for whether app is deployed live as the live domain has changed.

## [0.16.0] - 2020-03-27 - Orleans 2020 - WebAPI v1.3

- Feature: Added "Matomo" user metrics tracking.
- Feature: Added a feedback form that creates issues in "issuetracker" gitlab project.

## [0.15.1] - 2019-12-03 - Change to kube deployment methodology

- Improvement: Change to kube deployment methodology

## [0.15.0] - 2019-09-24 - Madrid 2019 - WebAPI v1.3

- Feature: Copy fully formed URL for a configuration
- Improvement: Workspace page updated to work with new version of API
- Improvement: Parameter override toggles work in unison with default parameter values
- Improvement: Free text search responds to 'enter' key
- Improvement: Support for standard GeoJSON
- Improvement: Updated login dialogs (login button + T&Cs)
- Improvement: Updated GRDb link on splash screen
- Improvement: License field will display as hyperlink if appropriate
- Improvement: DOI field will display as hyperlink if appropriate
- Improvement: Document link will be disabled if no link not available
- Improvement: Integration with AAAI improved (refresh, timeout, logout)
- Improvement: Removed authentication assumptions
- Improvement: Help button on title bar displays basic GUI overview
- Improvement: Help buttons with descriptive tooltips
- Improvement: Minor textual updates
- Improvement: Moved 'behaviour' icons to results/selected panels
- Improvement: Additional logging when downloading
- Improvement: Allow date-pickers to have a greater range
- Improvement: Message 'toasts' restyled
- Bugfix: Remove unnecessary map layer reloads
- Bugfix: Fix style update for pinned items
- Known Issue: Map clustering only supported if all styles in a layer request clustering

## [0.14.1] - 2019-09-17 - Prague 2019 - WebAPI v1.3

- Improvement: Multiple fixes from Prague ICS-TCS Workshop

## [0.14.0] - 2019-09-06 - Prague 2019 - WebAPI v1.3

- Feature: Consumes WebAPI v1.3
- Feature: Distribution coverage can be displayed on map (where supported by metadata)
- Feature: Distributions auto-assigned colour swatch
- Feature: EPOS GeoJSON styling
- Feature: EPOS GeoJSON image overlays
- Feature: Console panel & log messages
- Feature: Advanced search (free text, facets)
- Feature: Selected (pinned) results, Pin & Unpin search results within the search page
- Feature: Download, Add to Workspace and Pin options avalaible on search results
- Feature: Distribution configuration can override global spatial-temporal parameters
- Feature: Cluster map marker pagination of details
- Feature: Hotjar user feedback widget added
- Improvement: Auto-creation of legend from geoJson data
- Improvement: Manual input of spatial parameters avalaible
- Improvement: Re-organised the layout of the spatial-temporal input controls
- Improvement: Removed client side filtering of DDSS results (uses API v1.3)
- Improvement: Support for multiple download format (where supported by metadata)
- Improvement: Details pane (inc. spatial and temporal bounds, documentation link)
- Improvement: Cluster map markers match the colour of individual markers.
- Improvement: Removed API selector
- Improvement: Removed Linked Items tab
- Known Issue: Authentication token is not refreshed, meaning the user is logged out after 1h even if they are using the GUI
- Known Issue: Execution API is called multiple times by map visualization component
- Known Issue: Add to workspace
- Known Issue: Workspace page to adopt API v1.3 changes
- Known Issue: Revoking authentication token on logout

## [0.13.0] - 2019-05-31 - Prague 2019 - WebAPI v1.1.1

- Improvement: Extend download functionality to more data types.
- Bugfix: Trigger map visualization reload on temporal range change.
- Improvement: Updated auth provider url and re-enabled logging in functionality.
- Improvement: Improved spatial filtering of search results taking into account spatial info defined at the ddss level.
- Improvement: Re-organized the details tab for services and added additional rows to provide a richer description of each service to the user.
- Bugfix: Fix javascript error causing issue displaying geojson data if details not simple key-value pairs.
- Bugfix: Potentially fixed issue where some people have seen tables extend out of their containers.
- Improvement: Landing page update - added links to tcs thumbnails and added panel to view info on hover.
- Improvement: Placeholders added to details area for when no services have been added to workspace.
- Improvement: Updated date controls on Temporal controls.
- Feature: Basic logging functionality put in for workspace api calls.
- Bugfix: Ensure map legend stays in its container.
- Improvement: Workspace configurations now have name rather than just ids.
- Improvement: Re-position map controls.
- Bugfix: Execution Api calls are now made with correct temporal and spatial bounds parameters.

## [0.12.0] - 2019-04-25 - Amsterdam 2019 - WebAPI v1.1.1

- Feature: Consumes WebAPI v1.1.1
- Feature: Map projection to EPSG 4326 and updating of basemaps
- Feature: Merged data discovery and workspace pages
- Feature: Introduce a lower tabbed pane, panes: details, configurations, console
- Feature: Populated lower tab configuration pane with configuration view/edit details, previously in modal
- Feature: Populated lower tab details pane with item details, previously in modal
- Feature: Search results take into account spatial and temporal ranges
- Feature: Call out to execution endpoints with spatial and temporal range parameters
- Improvement: DDSS headings removed from search results table
- Improvement: Duplicate results removed from search results table
- Improvement: Usability of date pickers improved
- Improvement: Adopted new version of lib2
- Improvement: Introduced 'last visited' page redirection - ready for new authentication system
- Improvement: Show facet loading message when call takes a little time
- Bugfix: Fix showing of login dialogue
- Bugfix: Fix workspace selection inconsistencies when adding and removing workspaces

## [0.11.1] - 2019-02-07 - Bergen 2019 - WebAPI v1.1

- Feature: Consumes WebAPI v1.1

## [0.11.0] - 2019-02-07 - Bergen 2019

- Feature: Temporal filtering of DDSS results
- Feature: Override distribution execution to include temporal range
- Feature: Draw spatial range (further functionality not yet implemented)
- Feature: Use Spatial range for non-basemap WMS tile service calls
- Feature: Context menu for DDSS result item on Data Search page
- Feature: On the workspace context menu the word "Edit" has been changed for "Customise"
- Feature: Mouse position control added to Data Search page map
- Feature: TCS Portal links added to Landing page
- Improvement: Merge workspace pages into one
- Improvement: Map layer controls
- Improvement: Adopted new version of lib2
- Improvement: Fully migrate GUI to BRGM gitlab by packaging up "lib2" dependency and packaging it up and including it in codebase
- Improvement: Replaced edge panels with split panes
- Improvement: Performance improvements to facet tree rendering
- Improvement: Upgraded Angular to v7
- Improvement: Code re-organisation to help others join development
- Bugfix: Map wrapping

## [0.10.1] - 2018-10-07 - Bug Fixes

- Feature: TNA link
- Feature: Include build date
- Feature: Central model for workspaces
- Feature: Support for more formats
- Bugfix: Improved WMS calls
- Bugfix: Fix popup bar positioning
- Bugfix: Update copyright
- Bugfix: Improvements to workspace configuration modal

## [0.10.0] - 2018-10-04 - Major UI overhaul to allow pre-visualisation (initial visualisation of webservices)

- Feature: New landing page.
- Feature: Separated data and infrastructure search into their own pages.
- Feature: Refactor the layout of all pages.
- Feature: Faceted search, linked to DDSS & distributions.
- Feature: DDSS & distributions results table.
- Feature: Pre-visualisation of (supported) distributions on facet search page.
- Feature: add items including webservice configurations to the current workspace directly from the search results.
- Feature: floating side bars for displaying additional information.
- Changed: Adopt web API v1.
- Changed: API endpoints for authenticating and non-authenticating APIs to new v0 ones.

## [0.9.1] - 2018-07-13 - Bugfix

- Bugfix: fixed version number issue

## [0.9.0] - 2018-07-13 - Performance improvements

- Feature: Deployment to external kubernetes cluster added to gitlab-ci pipeline (using BRGM beta url)
- Bugfix: Replaced hardcoded docker registry URL in kubernetes deployment file
- Feature: Update external lib2 library to improve popout functionality and table functionality.
- Feature: Remove lazy loading to improve user experience and performance when navigating.
- Feature: Add hooks and better support for non-lazy loading functionality, to enable page navigation triggers.
- Feature: Add model with optional persistence to improve feel when navigating between workspaces etc. Persistence currently uses local storage to "remember" user's currently selected workspace, but this could be persisted remotely in the future.

## [0.8.0] - 2018-06-07 - Application wide workspace and major UI overhaul

- Feature: Version Number and hash in the footer automatically added at build time using angular environment variables.
- Feature: Improve the display of the main search results table to proportion columns more appropriately for content.
- Feature: Reset search button now also clears table results
- Feature: UI improvements for mobile devices (e.g. menu collapses, content resizes, removed double header)
- Feature: Added action buttons and action menu to workspace items (user feedback required then will implement throughout the application)
- Feature: Added placeholder actions on workspace items
- Feature: Added placeholder iFrame for processing environments
- Feature: Added disclaimer page in the footer
- Feature: Improved tab design in 'Item Details' dialog
- Feature: Create, manage and select workspaces from headerbar
- Feature: Improved workspace state management throughout the application
- Feature: UI Improvements (reduce height of header, removing whitespace throughout the application)
- Feature: Improved notification animation and display to make it more obvious
- Feature: Removed tabbed views from workspace (now using side nav pages)
- Feature: API version selector now in footer bar
- Feature: Refactored authentication oauth client code
- Bugfix: Removed 'Feedback' and 'Alerts' icons from header bar
- Bugfix: Changed search table text from 'Show in map' to 'Highlight on map'
- Bugfix: Removed legacy css associated with AdminLTE
- Bugfix: Remove from workspace now asks for confirmation and updates table
- Bugfix: Webservice download url is now generated by execution API
- Bugfix: Remove "Add to map" action, as every spatial layer in the workspace is now shown on the map
- Bugfix: Map bounding box textbox now updates on new selection

## [0.7.1] - 2018-05-11 - UI Navigation Improvements

- Remove avatar from the top of navigation
- Remove section breaks between white buttons
- Remove pop-up menu on each icon as it is unnecessary for now
- Bugfix clicks are only registered on the icon and not on the white space around it
- Bugfix hovering are only registered on the icon and not on the white space around it
- Bugfix on hover icon colour change is too subtle
- Bugfix show selected pages in navigation
- Bugfix EPOS login button on splashscreen is offset

## [0.7.0] - 2018-05-03 - Priliminary processing environments work

- Preliminary redesign of navigation sidebar to maximise space for the main user interface
- Preliminary component development for showing processing environments
- Preliminary API calling code to interact with processing environments
- Research on JupyterLabs user interface and integration
- Webservice configuration parameter modal now honour API defined datatypes (e.g. datetime, string, number)
- Added gazetter location search to the map on the main search page
- Automatically push git commits/branches to external BRGM Gitlab instance as part of BGS CI pipeline
- Bugfix table column offset from table data on MacOS by using custom scroll bar
- Bugfix search criteria for domains and keywords is now honoured
- Bugfix AAAI redirection malformed url

## [0.6.1] - 2018-03-13 - Lisbon demo bugfixes

- Bugfix lat/lon issue with API data
- Bugfix with select component from lib2

## [0.6.0] - 2018-03-12 - Lisbon demo

- added support for authentication.
  - user can login via unity system.
  - make calls to the "authenticating" EPOS web API.
  - proxy changes to support authentication.
- (for development) switch between versions of the EPOS web API.
- removed unused framework dependencies.
- refactored css to use the BEM convention.
- extracted GUI elements into reusable components (map, table, search).
  - updates to CI pipeline at BGS and BRGM to support dependency repos.
- updated to support standard JSON structure return be the EPOS web API.
- updates to the CI pipeline.
  - now using docker images throughout the pipeline (better performance and production testing).
  - internal deployment to kubernetes cluster (this will eventually be preferred external deployment method).
  - external deployment using docker image to BRGM.
  - external deployment to BGS using build artifacts.
  - docker build now downloads private git/npm dependencies with authentication.
  - building angular project in production mode by default.
  - updated end-to-end tests.

## [0.5.0] - 2018-01-26 - ESFRI demo

- migrate the UI API calling code to work with updated webapi, in particular the workspaces, items and configuration.
  - refactored internal structure of the API calling code.
  - modify API calling code to handle varying webapi responses.
  - improved error handling & notifications.
- updated the workspace UI to work with updated data structures returned by the webapi.
  - ensure ‘add to workspace’ popup correctly populated.
- support for following web-service response types has been updated:
  - wms via direct call can be visualised.
  - xml transformed to GeoJson can be visualised, via execution api.
  - xml not transformed to GeoJson can be downloaded.
  - xml not transformed to GeoJson, if determined to be from wfs, can be visualised.
- map component updates
  - support for GeoJson layers.
  - refactored map component to separate map and map-layers and isolate dependencies.
  - map layer toggle.
  - improved state management.
  - fix bounding box control.
  - fix Leaflet bug, by use icons from leaflet-extra-markers.
  - tooltips for markers that have identifiable labels to display.
  - map/layers loading progress bar.
- ensure dependencies modules are not overridden in HTML scripts.
- development environment proxy updates.

## [0.4.0] - 2017-12-08 - Keyworth Review

- migrating the API code to work with webapi-dev endpoint
- added automatic login as test user to enable calling new API with user token
- New landing page.
- Layer management added to map visualisation.
- Notification when wms added to map, with ability to navigate directly to map visualisation.
- Duplicate subdomains bug fixed.
- (branch) migrating the API code to work with webapi-dev endpoint.
- (branch) added automatic login as test user to enable calling new API with user token.

## [0.3.0]

## [0.2.0] - 2017-09-08 - Rome Review

### Refactored

- Refactored code to use Angular4
- Single page application for better user experience, code structure, shared data, modules and state.
- Data driven, user interface bound to data changes.
- Created reusable, loosely coupled components
- Created internal data model
- Created internal services for reusable functionality
- Can switch to different input data sources (Web API / JSON files)
- Used TypeScript to for improved object-oriented programming and fully typed objects
- Continuous linting of code
- End to end tests
- Performance tests
- Unit tests on some key modules
- Continuous integration pipelines with automated integration tests to ensure code quality and improving merging and prevent regressions.

### Development Workflow Established

- identify issue/feature
- create branch
- code
- lint
- test
- deploy to dev
- performance test
- independent review
- integrate to master
- test
- deploy live
- check performance

### Deployment

- Automated publishing to development environment
- Manual push to live environment BGS hosted
- Manual push to live docker image and BRGM hosting

### Search

- Search tabs removed in favour of generic search pane
- Resource types now using toggle switch instead of drop down box?
- Domains, datatypes and keywords are populated from the API
- Added keywords dropbox box selector
- Added progress spinner on search

### Search Results Table

- Remove DataTables dependency
- Table item actions are dynamically created from data attributes
- Removed internal scrollbars from table?
- Table data populated from the API data
- 'View information' action displays summary information, description, any web service parameters and the raw data.
- 'Add to workspace' action allows the user to add the item to a new or existing workspace and provide web service parameters

### Search Results Mini Map

Map data populated from the API search data
Added map bounding box extent selector
Changed base map to aerial photograph layer
Map extent also synchronised with spatial visualisation page

### Workspaces

- Removed previous workspaces page, can now change active workspace in the workspace content page
- Workspace content currently only stored temporarily (session state not stored)

### Not fully implemented

Spatial visualisation showing example data
Temporal and Processing model pages not implemented
