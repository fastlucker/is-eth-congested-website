const path = require("path")
const config = require("./src/config")
module.exports = {
  flags: { DEV_SSR: true, FAST_REFRESH: true },
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-material-ui`,
    {
      resolve: "@builder.io/gatsby",
      options: {
        // public API Key
        publicAPIKey: config.builderAPIKey,
        // optional
        // mapping model names to template files, the plugin will create a page for each entry of the model at its specified url
        custom404Dev: path.resolve("src/pages/404.js"),
        templates: {
          // Render every `page` model as a new page using the /page.tsx template
          // based on the URL provided in Builder.io
          page: path.resolve("src/templates/layout.js"),
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
