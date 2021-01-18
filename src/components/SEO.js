import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        description
        image
        siteUrl
        title
        twitterUsername
      }
    }
  }
`;

const SEO = () => {
  
  const { site } = useStaticQuery( query );

  const { description, image, siteUrl, title, twitterUsername } = site.siteMetadata;

  return <Helmet htmlAttributes={{lang: "en"}} title={title}>
    <meta name="description" content={ description } />
    <meta name="image" content={ image } />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content={twitterUsername} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={`${siteUrl}${image}`} />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300&display=swap" rel="stylesheet"></link>
  </Helmet>
}

export default SEO