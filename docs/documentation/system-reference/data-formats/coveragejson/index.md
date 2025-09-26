---
sidebar_position: 2
---

# EPOS CoverageJSON

EPOS Platform extends the standard CoverageJSON format to support additional functionality required for geophysical and geological data visualization. These extensions maintain compatibility with the base CoverageJSON specification while adding EPOS-specific capabilities.

## What is CoverageJSON?

CoverageJSON is a format for publishing coverage data on the web. It's designed to be:

- **Web-friendly**: Optimized for web-based data exchange
- **Self-describing**: Contains metadata about the data structure
- **Efficient**: Compact representation suitable for network transmission
- **Standards-based**: Built on established web standards

## EPOS Extensions

Similar to the EPOS GeoJSON extensions, the EPOS Platform extends the standard CoverageJSON format to incorporate functionalities not natively supported, particularly for geophysical data visualization and analysis. These extensions address specific needs such as representing data uncertainty and enabling advanced plotting capabilities.

### Key Extensions

EPOS CoverageJSON introduces extensions primarily in two areas:

- **Visualization Enhancements**: To support advanced graphical representations beyond the standard, such as custom color mapping, scaling, and display preferences. This includes capabilities for visualizing data with specific plotting types like scatter plots.
- **Error Handling**: To integrate crucial scientific information like data uncertainties and quality indicators, which are vital for robust data interpretation. This enables features like displaying error bars directly on time series.

For detailed information on how to implement these extensions, please refer to the [Error Bars Guide](./error_bars.md) and the [Scatter Plot Guide](./scatter_plot_guide.md).

## Usage in the EPOS Platform

The EPOS CoverageJSON extensions are integral to how the EPOS Platform visualizes and processes Earth science data, providing a seamless and enriched user experience.

### Data Visualization

These extensions enable sophisticated data visualization capabilities within the EPOS GUI, allowing for dynamic and interactive exploration of coverage data. This includes features like interactive maps, time series analysis, statistical plots (such as scatter plots), and 3D visualizations.

## Example Usage

EPOS extensions for CoverageJSON are typically found within the `parameters` object, where they define specific behaviors for visualization (e.g., `plotType` for scatter plots) or data interpretation (e.g., `observedProperty.id` for error bar bounds). For concrete JSON examples demonstrating these extensions, please refer to the dedicated guides:

- **[Error Bars Guide](./error_bars.md)**
- **[Scatter Plot Guide](./scatter_plot_guide.md)**

## Related Documentation

For more information about CoverageJSON extensions:

- **[Error Bars Guide](./error_bars.md)** - Detailed information about error bar implementation
- **[Scatter Plot Guide](./scatter_plot_guide.md)** - Scatter plot visualization with CoverageJSON

## Standards Compliance

EPOS CoverageJSON extensions maintain compatibility with:

- **CoverageJSON Specification**: Base format compliance
- **OGC Standards**: Open Geospatial Consortium standards
- **W3C Standards**: Web standards for data exchange
- **EPOS Data Model**: EPOS-specific data requirements
