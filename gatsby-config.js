module.exports = {
  pathPrefix: "/gloverola.github.io",
  siteMetadata: {
    title: "Glover | Software Developer",
    description:
      "I'm a software engineer based in Lagos, Nigeria specializing in developing high-quality web and mobile applications. I help clients solve business problems by fusing creativity, innovation, strategy and craft.",
    author: "Glover Olaoluwa",
    twitterUsername: "@_itsglover",
    image: "/static/twitter-img.png",
    siteUrl: "https://olaglover.netlify.app",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    `gatsby-plugin-smoothscroll`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "files",
        path: "./static/OLAOLUWA_GLOVER_RESUME.pdf",
      },
      __key: "files",
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://my-portfolio-api-v1.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`jobs`, `projects`],
      },
    },
    {
      resolve: "gatsby-source-hashnode",
      options: {
        username: "glover",
      },
    },
  ],
};


