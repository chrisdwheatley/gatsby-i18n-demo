module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    // this would all be coming from a different source but in the interest of testing quickly and easily sticking some dummy data in the siteMetadata object is quick and easy
    locales: [
      {
        default: true,
        path: `en`,
        locale: `en-US`,
        title: 'English'
      },
      {
        path: `de`,
        locale: `de-DE`,
        title: 'German'
      }
    ],
    en: {
      articles: [
        {
          id: 123,
          slug: 'article-slug',
          title: 'Article Title'
        }, {
          id: 456,
          slug: 'article-slug-2',
          title: 'Article Title 2'
        }
      ]
    },
    de: {
      articles: [
        {
          id: 123,
          slug: 'artikel-schnecke',
          title: 'Artikelüberschrift'
        }, {
          id: 456,
          slug: 'artikel-schnecke-2',
          title: 'Artikelüberschrift 2'
        }
      ]
    }
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
