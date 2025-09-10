

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EPOS',
  favicon: 'img/favicon.ico',
  projectName: 'epos-documentation', // Usually your repo name.
  organizationName: 'AleCrocetta', // Usually your GitHub org/user name.
  trailingSlash:false, // URLs without trailing slashes
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://AleCrocetta.github.io',

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/epos-documentation/',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          routeBasePath: '/', // Serve the docs at the site's root
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
      indexPages: false, // docs-only search
      docsRouteBasePath: '/',
    },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/epos-logo.svg',
      navbar: {
        logo: {
          alt: 'EPOS Logo',
          src: 'img/epos-logo.svg',
          href: 'https://epos-eu.github.io/epos-open-source/#/', target: '_self',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
         
          {
            title: 'Community',
            items: [
              // TODO add links for a possible community
            ],
          },
          
        ],
        copyright: `Copyright © ${new Date().getFullYear()} EPOS Open Source`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
