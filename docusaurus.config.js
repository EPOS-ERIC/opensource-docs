

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EPOS',
  favicon: 'img/favicon.ico',
  projectName: 'opensource-docs', // Usually your repo name.
  organizationName: 'epos-eu', // Usually your GitHub org/user name.
  trailingSlash:false, // URLs without trailing slashes
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://epos-eu.github.io',

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/opensource-docs/',

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
      image: 'img/epos-logo.svg',
      navbar: {
        logo: {
          alt: 'EPOS Logo',
          src: 'img/epos-logo.svg',
        },
        items: [
          {//to add to the navbar
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            docpluginId: 'default', // match the plugin id
            position: 'left',
            label: 'Documentation',
          },
           {
            href: 'https://github.com/epos-eu',
            label: 'GitHub',
            position: 'right',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'light',
         logo: {
            alt: 'EPOS Logo',
            src: 'img/epos-logo.svg',
            
          },
        links: [
         
          {
            title: 'EPOS ERIC',
          
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
                label: 'GitHub Repository',
                href: 'https://github.com/epos-eu/epos-open-source',
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
                            Via di Vigna Murata, 605,<br/>00143 Rome, Italy
                        </a>`,
              },
              { 
                 html: `Email: <a href="mailto: info@epos-eric.eu"> info@epos-eric.eu</a>`,
              },
              { 
                 html: `Phone: <a href="tel:(+39) 06 518601"> (+39) 06 518601</a>`,
              },
              {
                  html: `VAT: IT 12851871007`,
              }
            ],
          },
        {
  title: 'Social',
  items: [
    {//social icons with links at the end of the page
      html: `
        <a href="https://www.facebook.com/EPOSeu" target="_blank" rel="noopener noreferrer">
          <img src="img/facebook-logo.svg" alt="Facebook" style="height:55px; margin-right:0.5rem"/> 
        </a> 
        <a href="https://www.linkedin.com/company/eposeu" target="_blank" rel="noopener noreferrer">
            <img src="img/linkedin.svg" alt="LinkedIn" style="height:55px;margin-right:0.5rem"/>
          </a>
        <a href="https://www.youtube.com/c/EposProjectEu" target="_blank" rel="noopener noreferrer">
            <img src="img/YouTube.svg" alt="YouTube" style="height:55px;margin-right:0.5rem"/>
          </a>
         <a href="https://www.flickr.com/photos/eposeu/" target="_blank" rel="noopener noreferrer">
            <img src="img/Flickr.svg" alt="YouTube" style="height:55px;"/>
          </a>
          `,
    },
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
