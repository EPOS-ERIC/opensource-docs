import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'EPOS',
	favicon: 'img/favicon.ico',
	projectName: 'opensource-docs',
	organizationName: 'EPOS-ERIC',
	trailingSlash: false,
	markdown: {
		mermaid: true,
	},
	themes: ['@docusaurus/theme-mermaid'],
	future: {
		v4: true,
	},
	url: 'https://epos-eric.github.io',
	baseUrl: '/opensource-docs/',
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: './sidebars.js',
					routeBasePath: '/',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			}),
		],
	],

	plugins: [
		[
			require.resolve("@easyops-cn/docusaurus-search-local"),
			{
				hashed: true,
				indexDocs: true,
				indexPages: true,
				docsRouteBasePath: '/',
			},
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			mermaid: {
				theme: { light: 'neutral', dark: 'neutral' },
			},
			image: 'img/epos-logo.svg',
			navbar: {
				logo: {
					alt: 'EPOS Logo',
					src: 'img/epos-logo.svg',
				},
				items: [
					{
						type: 'docSidebar',
						sidebarId: 'tutorialSidebar',
						position: 'left',
						label: 'Documentation',
					},
					{
						type: 'doc',
						docId: 'citation/index',
						position: 'right',
						label: 'How to Cite',
					},
					{
						type: 'doc',
						docId: 'contributors/index',
						position: 'right',
						label: 'Contributors',
					},
					{
						href: 'https://www.epos-eu.org/',
						label: 'EPOS EU',
						position: 'right',
					},
					{
						href: 'https://github.com/EPOS-ERIC',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'light',
				links: [
					{
						title: ' ',
						items: [
							{
								html: `
           					<div class="firstcolumn">
                			<img src="/opensource-docs/img/epos-logo.svg" alt="EPOS Logo" style="height:100px;"/>
            				</div>`,
							},
						],
					},
					{
						title: 'EPOS',
						items: [
							{
								label: 'About',
								href: 'https://www.epos-eu.org/about-epos',
							},
							{
								label: 'EPOS Platform',
								href: 'https://www.epos-eu.org/dataportal',
							},
							{
								label: 'Privacy & Policy',
								href: 'https://www.epos-eu.org/epos-eric-privacy-policy',
							},
							{
								label: 'Careers & Culture',
								href: 'https://www.epos-eu.org/epos-eric/careers',
							},
						],
					},
					{
						title: 'Useful Links',
						items: [
							{
								label: 'GitHub',
								href: 'https://github.com/EPOS-ERIC',
							},
							{
								label: 'Issue Tracker',
								href: 'https://epos-ci.brgm.fr/epos-public/issuetracker/-/issues',
							},
						],
					},
					{
						title: 'Contact',
						items: [
							{
								html: `Address: <a href="https://www.google.com/maps/place/Via+di+Vigna+Murata,+605,+00143+Roma+RM,+Italia/@41.8280015,12.5125637,802m/data=!3m2!1e3!4b1!4m6!3m5!1s0x13258a330330f5fd:0x66d9979de69f7f8b!8m2!3d41.8280015!4d12.515218!16s%2Fg%2F11c3q1z4v7?entry=ttu&g_ep=EgoyMDI1MDkwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                            <br> Via di Vigna Murata, 605, 00143 Rome, Italy
                        </a>`,
							},
							{
								html: `Email: <a href="mailto: info@epos-eric.eu"> info@epos-eric.eu</a>`,
							},
							{
								html: `Phone: <a href="tel:(+39) 06 518601"> (+39) 06 518601</a>`,
							},
							{
								html: `VAT: IT15152381008`,
							}
						],
					},
					{
						title: 'Social',
						items: [
							{
								html: `
        <a href="https://www.facebook.com/EPOSeu" target="_blank" rel="noopener noreferrer">
          <img src="/opensource-docs/img/facebook-logo.svg" alt="Facebook" style="height:30px; margin-right:0.5rem"/> 
        </a> 
        <a href="https://www.linkedin.com/company/eposeu" target="_blank" rel="noopener noreferrer">
            <img src="/opensource-docs/img/linkedin.svg" alt="LinkedIn" style="height:30px;margin-right:0.5rem"/>
          </a>
        <a href="https://www.youtube.com/c/EposProjectEu" target="_blank" rel="noopener noreferrer">
            <img src="/opensource-docs/img/YouTube.svg" alt="YouTube" style="height:30px;margin-right:0.5rem"/>
          </a>
         <a href="https://www.flickr.com/photos/eposeu/" target="_blank" rel="noopener noreferrer">
            <img src="/opensource-docs/img/Flickr.svg" alt="YouTube" style="height:30px;"/>
          </a>
          `,
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} EPOS Open Source. Released under the <a href="/opensource-docs/documentation/license">GPLv3 license</a>.`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
				additionalLanguages: ['turtle']
			},
		}),
};

export default config;
