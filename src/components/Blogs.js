import React, {useEffect} from "react";
import styled from 'styled-components';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { graphql, useStaticQuery } from "gatsby";
import { BsArrowRight } from "react-icons/bs";

 


export const Blogs = () => {

  const data = useStaticQuery(graphql`
    {
      allHashNodePost(limit: 5) {
        nodes {
          cuid
          dateAdded(formatString: "D - MM - YYYY", locale: "en")
          slug
          title
        }
      }
    }
  `);

  const { allHashNodePost: {nodes: posts} } = data;

  

  const animation = useAnimation();
  const [blogsRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-200px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [ animation, inView ] );
  
  return (
    <BlogContainer
      id='blogs'
      ref={blogsRef}
      animate={animation}
      initial='hidden'
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: [0.6, 0.05, -0.01, 0.9],
          },
        },
        hidden: {
          opacity: 0,
          y: 72,
        },
      }}
    >
      <Title>
        <div></div>
        <h1>Blog</h1>
      </Title>

      <BlogContent>
        <Headline>
          <h2>What's new?</h2>
          <h3>My blog and news.</h3>
        </Headline>

        <Articles>
          {posts.map((item) => {
            return (
              <Article key={item.cuid}>
                <span>{item.dateAdded}</span>
                <h2>{item.title}</h2>
                <a
                  href={`https://glover.hashnode.dev/${item.slug}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <BsArrowRight />
                </a>
              </Article>
            );
          })}
        </Articles>
      </BlogContent>
    </BlogContainer>
  );
};

export default Blogs;

const BlogContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  padding: 0 8rem;
  height: 100vh;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  div {
    width: 4px;
    height: 30px;
    margin: 0 1rem 0 0;
    background-color: #08f7fe;
  }

  h1 {
    color: #fff;
  }
`;

const BlogContent = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: space-between;

@media screen and (max-width: 500px) {
  display: block;
}
`

const Articles = styled.div`
  display: block;
  width: 70%;
  justify-content: center;
  align-items: flex-start;
  grid-gap: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Headline = styled.div`
  display: block;
  width: 30%;
  align-self: flex-start;

  @media screen and (max-width: 500px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h2 {
    color: rgba(255, 255, 255, 0.646);
    font-size: 1.3rem;
  }

  h3 {
    color: rgba(255, 255, 255, 0.646);
    font-size: 1.3rem;
  }
`;

const Article = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding: 2rem 0;

  @media screen and (max-width: 500px) {
    display: block;
    padding: 1rem 0;
  }

  &:last-child {
    border-bottom: none;
  }
  &:first-child {
    padding-top: 0;
  }

  span {
    color: rgba(255, 255, 255, 0.50);
    font-size: 0.8rem;
    width: 100px;

    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }

  h2 {
    color: rgba(255, 255, 255, 0.80);
    font-size: 1.2rem;
    text-align: left;
    width: 300px;

    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }

  a {
    color: #08f7fe;
    font-weight: bold;
    font-size: 2rem;
    transition: all .3s ease;

    &:hover {
      transform: scale(1.2);
    }
    
     @media screen and (max-width: 500px) {
      width: 100%;
    }
  }
`;


