
module.exports = {
  siteMetadata: {
    title: `ERU Gatsby Stripe Checkout`,
    description: `Playing around with Stripe Checkout for Ecommerce websites`,
    author: `Shayaan Ahmed Farooqi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-stripe",
      options: {
        objects: ["Price"],
        secretKey: process.env.GATSBY_STRIPE_SECRET_KEY,
        downloadFiles: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
