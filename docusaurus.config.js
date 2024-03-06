import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Prague Trails',
  tagline: 'Cross Country Bike Trails In and Around Prague',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://praguetrails.cz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'josefpihrt', // Usually your GitHub org/user name.
  projectName: 'praguetrails', // Usually your repo name.

  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/josefpihrt/praguetrails/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/prague-trails-social-card.jpg',
      // colorMode: {
      //   defaultMode: 'dark',
      // },
      navbar: {
        logo: {
          alt: 'Prague Trails Logo',
          src: 'img/prague-trails-logo-large.png',
        },
        items: [
          {to: '/introduction', label: 'Introduction', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'trailsSidebar',
            position: 'left',
            label: 'Trails',
          },
          {
            type: 'docSidebar',
            sidebarId: 'transportationSidebar',
            position: 'left',
            label: 'Transportation',
          },
          {to: '/news', label: 'News', position: 'left'},
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Trails',
            items: [
              {
                label: "Barre",
                to: 'trails/barre',
              },
              {
                label: "Hokun",
                to: 'trails/hokun',
              },
              {
                label: "Kokomo",
                to: 'trails/kokomo',
              },
              {
                label: "Laadchee",
                to: 'trails/laadchee',
              },
              {
                label: "Semmering",
                to: 'trails/semmering',
              },
              {
                label: "Rockyt",
                to: 'trails/rockyt',
              },
              {
                label: "Shark-A",
                to: 'trails/shark-a',
              },
              {
                label: "Sunrose",
                to: 'trails/sunrose',
              },
            ],
          },
          {
            title: 'Transportation',
            items: [
              {
                label: 'Trains Timetables',
                to: 'transportation/trains-timetables',
              },
              {
                label: 'Prague Public Transport Map',
                href: 'https://pid.cz/wp-content/uploads/mapy/ostatni/a5_cyklo_doprava.png',
              },
              {
                label: 'Trains Map',
                href: 'https://pid.cz/wp-content/uploads/mapy/schemata-trvala/Esko-schema.pdf',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/josefpihrt/praguetrails',
              },
            ],
          },
        ],
        // copyright: `Copyright © 2023-${new Date().getFullYear()} Prague Trails Team`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    }),
};

module.exports = config;
