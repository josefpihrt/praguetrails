// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bohemian Trails',
  tagline: 'Cross Country Bike Trails In and Around Prague',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.bohemiantrails.cz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

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
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      image: 'img/bohemian-trails-social-card.jpg',
      // colorMode: {
      //   defaultMode: 'dark',
      // },
      navbar: {
        // title: 'Bohemian Trails',
        // hideOnScroll: true,
        logo: {
          alt: 'Bohemian Trails Logo',
          src: 'img/bohemian-trails-logo-large.png',
        },
        items: [
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
          {to: '/faq', label: 'FAQ', position: 'left'},
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Trails',
            items: [
              {
                label: 'Prague Trails',
                to: 'trails/prague',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/josefpihrt/bohemiantrails',
              },
              {
                label: 'X',
                href: 'https://www.twitter.com/bohemian_trails',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Josef Pihrt. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    }),
};

module.exports = config;
