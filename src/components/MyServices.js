import React, {useEffect} from "react";
import styled from "styled-components";
import { data, stack } from "../constants/Services";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    partialVisibilityGutter: 20,
  },
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 4,
    partialVisibilityGutter: 20,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    partialVisibilityGutter: 20,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    partialVisibilityGutter: 20,
  },
};

const About = () => {

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
      y: 72,
    },
  };
  const Item = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
      duration: 0.7
    },
    hidden: {
      opacity: 0,
      x: 100,
    },
  };

  const animation = useAnimation();
  const [servicesRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-250px",
  } );

   useEffect(() => {
     if (inView) {
       animation.start("visible");
     }
   }, [animation, inView]);
  
  return (
    <AboutContainer
      id='services'
      ref={servicesRef}
      animate={animation}
      initial='hidden'
      variants={Wrapper}
    >
      <Title>
        <div></div>
        <h1>My services</h1>
      </Title>

      <Services>
        <Carousel
          responsive={responsive}
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={100}
          centerMode={false}
          containerClass='container-with-dots'
          customTransition='all 3s ease-in-out'
          dotListClass=''
          draggable
          focusOnSelect={false}
          infinite
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          slidesToSlide={2}
          swipeable
          transitionDuration={4000}
        >
          {data.map((item) => {
            return (
              <Service key={item.id} variants={Item}>
                <div>{item.icon}</div>
                <span>{item.title}</span>
              </Service>
            );
          })}
        </Carousel>
      </Services>

      <Services>
        <Carousel
          responsive={responsive}
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={500}
          centerMode={false}
          containerClass='container-with-dots'
          customTransition='all 3s ease-in-out'
          dotListClass=''
          draggable
          focusOnSelect={false}
          infinite
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          slidesToSlide={2}
          swipeable
          transitionDuration={4000}
        >
          {stack.map((item) => {
            return (
              <Stack key={item.id} variants={Item}>
                <div>{item.icon}</div>
                <span>{item.title}</span>
              </Stack>
            );
          })}
        </Carousel>
      </Services>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 100px;
`;

const Title = styled.div`
  display: flex;
  align-items: left;
  margin-bottom: 50px;
  padding: 0 8rem;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
  
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

const Services = styled.div`
  width: 100vw;
  align-items: center;
  

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Service = styled.div`
  background: #15415d;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  border-radius: 5px;
  height: 100%;
  margin-left: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 1rem;
    align-items: flex-start;
    height: 100%;
  }

  &:hover {
    transform: scale(1.05);
    background: #2b6184;
  }

  div {
    font-size: 4rem;
    color: #08f7fe;
    background: none;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }

  span {
    text-align: center;
    color: #ffffff;
    font-size: .8rem;
    margin-bottom: 10px;
    text-transform: uppercase;

    @media screen and (max-width: 768px) {
      text-align: left;
    }
  }
`;

const Stack = styled.div`
  background: #15415d;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  border-radius: 5px;
  height: 100%;
  margin-left: 20px;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 1rem;
    align-items: flex-start;
    height: 100%;
  }

  &:hover {
    transform: scale(1.05);
    background: #2b6184;
  }

  div {
    font-size: 3rem;
    color: #08f7fe;
    background: none;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }

  span {
    text-align: center;
    color: #ffffff;
    font-size: .8rem;
    margin-bottom: 10px;
    text-transform: uppercase;

    @media screen and (max-width: 768px) {
      text-align: left;
    }
  }
`;
