import React, {useEffect} from "react";
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";



const Projects = ( { projects } ) => {

  const Wrapper = {
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
      y: 100,
    },
  };
  const Item = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
      duration: 1,
    },
    hidden: {
      opacity: 0,
      y: 90,
    },
  };
  
  const animation = useAnimation();
  const [projectsRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-200px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [ animation, inView ] )
  
  return (
    <ProjectContainer
      id='projects'
      ref={projectsRef}
      animate={animation}
      initial='hidden'
      variants={Wrapper}
    >
      <Headline>
        <div></div>
        <h1>Featured Projects</h1>
      </Headline>
      <ProjectContent>
        {projects.map((project, index) => {
          const { description, title, github, name, url, image } = project;
          return (
            <Project key={index} variants={Item} bgImg={image}>
              {/* <img
                src={ image }
                alt="featured projects"
                className='project-img'
              /> */}
              <ProjectDesc>
                <h2>{title}</h2>
                <p>{description}</p>
                <ProjectInfo>
                  <div>
                    {name.map((item) => (
                      <span key={item.id}>{item.title}</span>
                    ))}
                  </div>
                  <div>
                    <a href={url} target='_blank' rel='noopener noreferrer'>
                      <FiExternalLink />
                    </a>
                    <a href={github} target='_blank' rel='noopener noreferrer'>
                      <FaGithub />
                    </a>
                  </div>
                </ProjectInfo>
              </ProjectDesc>
            </Project>
          );
        })}
      </ProjectContent>
    </ProjectContainer>
  );
};

export default Projects;

const ProjectContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  padding: 0 8rem;
  height: 100%;
  justify-content: center;
  margin-top: 100px;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Headline = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  div {
    width: 4px;
    height: 30px;
    margin: 0 1rem 0 0;
    background-color: #a9f2f5;
  }

  h1 {
    color: #fff;
  }
`;

const ProjectContent = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 40px;
width: 100%;
height: 100%;
margin-bottom: 2rem;

@media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
}

`;

const Project = styled.div`
  width: 100%;
  border-radius: 7px;
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer;
  background: url(${(props) => props.bgImg});
  height: 400px;
  filter: grayscale(10);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: all 0.4s ease;

  @media screen and (max-width: 768px) {
    background-size: cover;
    filter: grayscale(0);
  }

  &:hover {
    transform: scale(1.04);
    filter: grayscale(0);
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    padding: 0 1rem 0 0;
    color: #08f7fe;
    font-size: .8rem;
  }

  a {
    text-decoration: none;
    color: #08f7fe;
    padding: 0 0 0 1rem;
    font-size: 1.2rem;
    transition: 0.3s ease;

    :hover {
      color: #08f7fe;
    }
  }
`;

const ProjectDesc = styled.div`
  padding: 1rem;
  position: absolute;
  width: 100%;
  height: 100px;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 99;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: all 3s ease;

  h2 {
    color: #08f7fe;
    font-size: 1.2rem;
    margin-bottom: 5px;
  }

  p {
    color: rgba(255, 255, 255, 0.65);
    font-size: .8rem;
  }
`;
