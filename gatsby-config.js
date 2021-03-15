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
  ],
};
