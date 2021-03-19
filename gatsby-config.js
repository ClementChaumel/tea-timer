module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Raleway\: 500`],
        display: "swap",
      },
    },
    { resolve: `gatsby-plugin-fontawesome-css` },
    { resolve: `gatsby-plugin-react-helmet` },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Simplicitea`,
        short_name: `Simplicitea`,
        start_url: `/`,
        background_color: `#d9dfce`,
        theme_color: `#51544d`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
};
