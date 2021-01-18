import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Jobs from "../components/Jobs";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import Services from "../components/MyServices";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SEO from '../components/SEO';
 
export default ( { data, blogPost } ) => {

  
  const { allStrapiProjects: { nodes: projects } } = data;
  return (
    <Layout>
      <SEO title="Glover | Software Developer" />
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={ projects } />
      <Blogs />
      <Contact />
      <Footer />
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        description
        github
        image
        title
        url
        id
        name {
          id
          title
        }
      }
    }
  }
`;
