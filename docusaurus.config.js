import {themes as prismThemes} from 'prism-react-renderer';

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
                label: "Hokun",
                to: 'trails/hokun',
              },
              {
                label: "Kokomo",
                to: 'trails/kokomo',
              },
              {
                label: "Semmering",
                to: 'trails/semmering',
              },
              {
                label: "Rockyt",
                to: 'trails/rockyt',
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
                href: 'https://github.com/josefpihrt/bohemiantrails',
              },
              // {
              //   label: 'X',
              //   href: 'https://www.twitter.com/bohemian_trails',
              // },
              // {
              //   label: 'Facebook',
              //   href: 'https://www.facebook.com/people/Bohemian-Trails/61552066348228',
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Josef Pihrt.`,
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
