/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  trailsSidebar: [
    // { type: "doc", id: "trails/index", label: "Introduction" },
    {
      type: 'autogenerated',
      dirName: 'trails',
    },

    // {
    //   // type: 'category',
    //   // label: 'Prague Trails',
    //   // collapsed: false,
    //   // link: { type: 'doc', id: 'trails/prague' },
    //   items: [
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: 'Central Bohemia Trails',
    //   link: { type: 'doc', id: 'trails/central-bohemia' },
    //   items: [
    //     {
    //       type: 'autogenerated',
    //       dirName:   'trails/central-bohemia',
    //     },
    //   ],
    // },
  ],
  transportationSidebar: [
    { type: "doc", id: "transportation/overview", label: "Overview" },
    { type: "doc", id: "transportation/trains-timetables", label: "Trains Timetables" },
    {
      type: 'category',
      label: 'Maps',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Maps',
        slug: '/transportation/maps',
      },
      items: [
        'transportation/maps/prague-public-transport',
        'transportation/maps/prague-trains',
        'transportation/maps/trains',
      ],
    },
  ],
};

module.exports = sidebars;
