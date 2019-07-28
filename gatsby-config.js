module.exports = {
  siteMetadata: {
    title: `UIT`,
    description: `Experimental Redesign for UIT`,
    author: `@frencojobs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
