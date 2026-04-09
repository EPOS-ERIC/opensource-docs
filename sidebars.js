// @ts-check

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.
 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
		documentationSidebar: [
			'documentation/index',
			'documentation/quickstart/index',
		{
			type: 'category',
			label: 'CLI Tool',
			link: {
				type: 'doc',
				id: 'documentation/installation/index',
			},
			items: [
				'documentation/installation/tui',
				'documentation/installation/docker',
				'documentation/installation/kubernetes',
				'documentation/installation/enable-backoffice-docker',
				'documentation/installation/reverse-proxy',
				'documentation/installation/troubleshooting',
			],
		},
		{
			type: 'category',
			label: 'Guides',
			items: [
				{
					type: 'category',
					label: 'Platform Usage Guides',
					link: {
						type: 'doc',
						id: 'documentation/guides/platform-usage/index',
					},
					items: [
						'documentation/guides/platform-usage/explore-platform-interface',
						'documentation/guides/platform-usage/use-jupyter-notebooks-vre',
					],
				},
				'documentation/guides/backoffice-user-guide',
				'documentation/guides/describing-data',
			],
		},
		{
			type: 'category',
			label: 'System Reference',
			items: [
				'documentation/system-reference/architecture',
				{
					type: 'category',
					label: 'Services',
					link: {
						type: 'doc',
						id: 'documentation/system-reference/services/index',
					},
					items: [
						'documentation/system-reference/services/backoffice',
						{
							type: 'category',
							label: 'Converter',
							link: {
								type: 'doc',
								id: 'documentation/system-reference/services/converter/index',
							},
							items: [
								'documentation/system-reference/services/converter/plugins',
								'documentation/system-reference/services/converter/plugin-populator',
							],
						},
					],
				},
				'documentation/system-reference/data-model',
				{
					type: 'category',
					label: 'Data Formats',
					link: {
						type: 'doc',
						id: 'documentation/system-reference/data-formats/index',
					},
					items: [
						'documentation/system-reference/data-formats/dcat-ap',
						'documentation/system-reference/data-formats/geojson',
						{
							type: 'category',
							label: 'CoverageJSON',
							link: {
								type: 'doc',
								id: 'documentation/system-reference/data-formats/coveragejson/index',
							},
							items: [
								'documentation/system-reference/data-formats/coveragejson/error-bars',
								'documentation/system-reference/data-formats/coveragejson/scatter-plot-guide',
							],
						},
					],
				},
				'documentation/system-reference/repositories',
				'documentation/system-reference/glossary'
			],
		},
			'documentation/license/index',
		],
};

export default sidebars;
