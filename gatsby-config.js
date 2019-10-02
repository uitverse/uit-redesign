module.exports = {
  siteMetadata: {
    title: `UIT`,
    siteUrl: `https://uit.projects.frenco.codes`,
    description: `Experimental Redesign for UIT`,
    author: `@frencojobs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-145101623-1",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `UIT Redesign`,
        short_name: `UIT`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `static/images/logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
