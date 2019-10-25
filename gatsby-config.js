const path = require('path');

module.exports = {
  siteMetadata: {
    title: `ROW DTLA`,
    description: `ROW DTLA’s entrepreneurial innovators who are pushing LA culture forward with concepts designed to make a global impact.`,
    author: `YOUR_NAME`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': path.join(__dirname, 'src/'),
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `v5y5potka9e9`,
        accessToken: `U4Qe0URgCsIQHgoRvVnjwLRAc5auF9sC-GSidrRi86Y`,
        environment: `develop`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
