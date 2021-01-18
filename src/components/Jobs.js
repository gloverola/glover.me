import React, {useState, useEffect} from "react";
import { FiExternalLink } from "react-icons/fi";
import { graphql, useStaticQuery } from "gatsby";
import styled from 'styled-components';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const query = graphql`
  {
    allStrapiJobs(sort: { fields: id, order: DESC }) {
      nodes {
        desc {
          id
          name
        }
        id
        company
        date
        url
        position
      }
    }
  }
`;

const Jobs = () => {

  const animation = useAnimation();
  const [jobsRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-200px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  const data = useStaticQuery( query );
  
  const { allStrapiJobs: { nodes: jobs } } = data;

  const [ value, setValue ] = useState( 0 );

  const { company, position, date, desc, url } = jobs[ value ];

  return (
    <JobsContainer
      id='job'
      ref={jobsRef}
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
      <Headline>
        <div></div>
        <h1>Experience</h1>
      </Headline>
      <JobsContent>
        <ButtonContainer>
          {jobs.map((item, index) => {
            return (
              <Button
                key={index}
                className={`${index === value && "active-btn"}`}
                onClick={() => setValue(index)}
              >
                {item.company}
              </Button>
            );
          })}
        </ButtonContainer>
        <InfoContainer>
          <h3>{position}</h3>
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
          >
            @{company}
          </a>
          <p>{date}</p>
          {desc.map((item) => {
            return (
              <Description key={item.id}>
                <span>
                  <FiExternalLink />
                </span>

                <p>{item.name}</p>
              </Description>
            );
          })}
        </InfoContainer>
      </JobsContent>
    </JobsContainer>
  );
};

export default Jobs;

const JobsContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  padding: 0 8rem;
  height: 100%;
  justify-content: center;
  margin: 200px 0;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    margin-top: 200px;
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

const JobsContent = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;

@media screen and (max-width: 500px) {
  flex-direction: column;
}
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;

  @media screen and (max-width: 500px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

const Button = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  padding: 10px;
  width: 100%;
  font-size: 1rem;
  text-align: start;
  background: transparent;
  border-left: 2px solid rgba(255, 255, 255, 0.4);
  color: rgba(255, 255, 255, 0.4);
  transition: 0.5s ease;

  @media screen and (max-width: 500px) {
    border-left: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.263);
    text-align: center;
  }

  &:hover {
    background: #15415d;
  }

  &.active-btn {
    background: #15415d;
    border-color: #08f7fe;
    animation-delay: 0.7s;
  }
`;

const InfoContainer = styled.article`
  margin-left: 40px;
  width: 60%;
  transition: 0.9s ease-in;

  @media screen and (max-width: 500px) {
    width: 100%;
    margin-left: 0;

    h3 {
      margin-top: 20px;
    }
  }

  h3 {
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    color: #08f7fe;
    margin-bottom: 10px;
  }

  p {
    color: rgba(223, 219, 219, 0.6);
    font-size: 1rem;
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

const Description = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  span {
    color: #08f7fe;
    font-size: .8rem;
    
  }

  p {
    color: rgba(223, 219, 219, 0.6);
    font-size: 1rem;
    margin-left: 20px;
  }
`;