module.exports = {
  siteMetadata: {
    title: `Spoti`,
    siteUrl: `https://spoti.vercel.app`,
    description: `Poznaj platformę e-learningową Spoti`,
    facebook: `@spoti.elearning`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-remove-trailing-slashes`,

    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `https://spoti.com.pl/graphql`,
        verbose: true,
        develop: {
          hardCacheMediaFiles: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Montserrat:300,400,500,600,700,900'],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
  ],
}
