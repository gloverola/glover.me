import React from "react";
import styled from 'styled-components';
import { motion } from "framer-motion";
import { useStaticQuery, graphql } from "gatsby";
// ...GatsbyImageSharpFluid

const Hero = () => {

  const data = useStaticQuery(graphql`
    {
      allFile(filter: { ext: { eq: ".pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);

  const container = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 3,
        staggerChildren: 0.3,
      },
    },
  };
  const item = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 5,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  return (
    <HeroContainer id='hero'>
      <Introduction variants={container} initial='initial' animate='animate'>
        <motion.span variants={item}>Hello, I'm</motion.span>
        <motion.h1 variants={item}>Glover.</motion.h1>
        <motion.h2 variants={item}>Software Developer</motion.h2>
        <motion.p variants={item}>
          I'm a software engineer based in Lagos, Nigeria specializing in
          developing high-quality web and mobile applications. I help clients
          solve business problems by fusing creativity, innovation, strategy and
          craft.
        </motion.p>
        {data.allFile.edges.map((file, index) => {
          return (
            <motion.a
              variants={item}
              key={`pdf-${index}`}
              href={file.node.publicURL}
              
              target='_blank'
              rel='noopener noreferrer'
            >
              resume
            </motion.a>
          );
        })}
      </Introduction>

      <HeroWrapper
        animate={{
          x: 0,
          opacity: 1,
        }}
        initial={{
          x: 400,
          opacity: 0,
        }}
        transition={{
          duration: 3,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
      >
        <div className='table'></div>
        <div className='pc'></div>
        <div className='cup'></div>
        <div className='cup-cover'></div>
        <div className='clock'>
          <div className='marker-top'></div>
          <div className='marker-right'></div>
          <div className='marker-bottom'></div>
          <div className='marker-left'></div>
          <div className='pointer-min'></div>
          <div className='pointer-hour'></div>
          <div className='pointer'></div>
        </div>
        <div className='guy'>
          <div className='hat'>
            <div className='hat-hair'></div>
            <div className='hat-close'></div>
          </div>
          <div className='hair-left'></div>
          <div className='hair-middle'></div>
          <div className='hair-right'></div>
          <div className='ear-left'></div>
          <div className='ear-right'></div>
          <div className='face'>
            <div className='eye'></div>
            <div className='eye'></div>
            <div className='nose'></div>
            <div className='mouth'></div>
          </div>
          <div className='neck'></div>
          <div className='body'></div>
        </div>
        <div className='book one'></div>
        <div className='book two'></div>
        <div className='book three'></div>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.section`
  height: 100vh;
  overflow: hidden;
`;

const Introduction = styled(motion.div)`
  padding: 0 8rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  @media screen and (max-width: 600px) {
    padding: 1rem;
    margin-top: 50px;
    justify-content: flex-start;
  }

  a {
    color: #08f7fe;
    text-decoration: none;
    border: 1px solid #08f7fe;
    padding: 10px;
    font-size: 1rem;
    transition: 0.4s ease;
    text-transform: capitalize;
    width: 10%;
    text-align: center;

    @media screen and (max-width: 600px) {
      width: 25%;
    }

    &:hover {
      background: rgba(8, 246, 254, 0.297);
    }
  }

  span {
    color: #08f7fe;
  }

  h1 {
    color: #ffffff;
    font-size: clamp(3rem, 7vw, 5rem);
  }

  h2 {
    color: rgba(255, 255, 255, 0.6);
    font-size: clamp(2rem, 5vw, 3rem);
  }

  p {
    margin-top: 2rem;
    color: rgba(255, 255, 255, 0.4);
    font-size: clamp(1rem, 3vw, 1.3rem);
    line-height: 1.5;
    max-width: 500px;
    margin-bottom: 50px;
  }
`;

const HeroWrapper = styled(motion.div)`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background-color: rgba(8, 246, 254, 0.098);
  position: absolute;
  bottom: 0;
  right: 0;

  &:after {
    background-color: #182c4e;
    height: 100px;
    width: 100%;
    position: absolute;
    content: "";
    bottom: 0;
  }

  @media screen and (max-width: 500px) {
    width: 300px;
    height: 300px;
  }

  .table {
    position: absolute;
    bottom: 92px;
    width: 100%;
    height: 8px;
    background-color: #08f7fe;
    z-index: 1;
  }

  .pc {
    z-index: 2;
    position: absolute;
    bottom: 100px;
    width: 142px;
    height: 98px;
    background-color: #08f7fe;
    border-radius: 5px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);

    &:after {
      content: "";
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: #33595a;
      position: absolute;
      top: 51%;
      left: 50%;
      -webkit-transform: translateX(-50%) translateY(-50%);
      transform: translateX(-50%) translateY(-50%);
    }

    &:before {
      content: "";
      position: absolute;
      top: 4px;
      left: 0;
      right: 0;
      height: calc(100% - 4px);
      background-color: rgba(8, 246, 254, 0.201);
      border-radius: 2px;
    }
  }

  .guy {
    width: 174px;
    height: 130px;
    position: absolute;
    left: 50%;
    background: transparent;
    -webkit-transform: translateX(-50%) translateY(0) translateZ(0);
    transform: translateX(-50%) translateY(0) translateZ(0);
    bottom: 198px;
    -webkit-animation: guyMove 3500ms cubic-bezier(0.4, 0, 1, 1) infinite
      alternate;
    animation: guyMove 3500ms cubic-bezier(0.4, 0, 1, 1) infinite alternate;
  }

  @-webkit-keyframes guyMove {
    0% {
      -webkit-transform: translateX(-50%) translateY(45px) translateZ(0);
    }
    15% {
      -webkit-transform: translateX(-50%) translateY(50px) translateZ(0);
    }
    30% {
      -webkit-transform: translateX(-50%) translateY(45px) translateZ(0);
    }
    45% {
      -webkit-transform: translateX(-50%) translateY(50px) translateZ(0);
    }
    60% {
      -webkit-transform: translateX(-50%) translateY(0px) translateZ(0);
    }
    100% {
      -webkit-transform: translateX(-50%) translateY(0px) translateZ(0);
    }
  }

  @keyframes guyMove {
    0% {
      transform: translateX(-50%) translateY(45px) translateZ(0);
    }
    15% {
      transform: translateX(-50%) translateY(50px) translateZ(0);
    }
    30% {
      transform: translateX(-50%) translateY(45px) translateZ(0);
    }
    45% {
      transform: translateX(-50%) translateY(50px) translateZ(0);
    }
    60% {
      transform: translateX(-50%) translateY(0px) translateZ(0);
    }
    100% {
      transform: translateX(-50%) translateY(0px) translateZ(0);
    }
  }

  .body {
    width: 70px;
    height: 40px;
    position: absolute;
    bottom: -14px;
    z-index: 1;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    border-radius: 50px 50px 0 0;
    background-color: #36508a;

    &:after {
      content: "";
      position: absolute;
      width: 60px;
      height: 30px;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      left: 50%;
      border-radius: 50px 50px 0 0;
      background-color: #4563a5;
      bottom: 5px;
    }
  }

  .neck {
    width: 26px;
    height: 26px;
    background-color: #302f2f;
    border-radius: 0 0 50px 50px;
    bottom: 4px;
    z-index: 4;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  .face {
    background-color: #302f2f;
    width: 78px;
    border-radius: 0 0 50px 50px;
    height: 58px;
    position: absolute;
    bottom: 26px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);

    &:after {
      background-color: #302f2f;
      width: 68px;
      border-radius: 0 0 50px 50px;
      height: 52px;
      content: "";
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      position: absolute;
    }
  }

  .eye {
    width: 12px;
    height: 12px;
    background-color: #5c463e;
    position: absolute;
    left: 15px;
    top: 14px;
    z-index: 5;
    border-radius: 50px;

    &:nth-child(2) {
      left: auto;
      right: 15px;
    }

    &:after {
      content: "";
      width: 16px;
      left: -2px;
      height: 14px;
      background-color: #302f2f;
      border-radius: 50%;
      position: absolute;
      -webkit-animation: eyeMove 3500ms cubic-bezier(0.4, 0, 1, 1) infinite
        alternate;
      animation: eyeMove 3500ms cubic-bezier(0.4, 0, 1, 1) infinite alternate;
    }

    @-webkit-keyframes eyeMove {
      0% {
        -webkit-transform: translateY(16px) translateZ(0);
      }
      15% {
        -webkit-transform: translateY(16px) translateZ(0);
      }
      30% {
        -webkit-transform: translateY(16px) translateZ(0);
      }
      45% {
        -webkit-transform: translateY(16px) translateZ(0);
      }
      60% {
        -webkit-transform: translateY(4px) translateZ(0);
      }
      100% {
        -webkit-transform: translateY(4px) translateZ(0);
      }
    }

    @keyframes eyeMove {
      0% {
        transform: translateY(16px) translateZ(0);
      }
      15% {
        transform: translateY(16px) translateZ(0);
      }
      30% {
        transform: translateY(16px) translateZ(0);
      }
      45% {
        transform: translateY(16px) translateZ(0);
      }
      60% {
        transform: translateY(4px) translateZ(0);
      }
      100% {
        transform: translateY(4px) translateZ(0);
      }
    }
  }

  .nose {
    background-color: #444342;
    position: absolute;
    top: 20px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 6px;
    height: 14px;
    z-index: 5;
    border-radius: 20px;
  }

  .hat {
    background-color: #4563a5;
    height: 42px;
    width: 78px;
    top: 4px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    border-radius: 50px 50px 0 0;
    position: absolute;
    z-index: 5;

    &:before {
      height: 6px;
      width: 10px;
      background-color: #4563a5;
      position: absolute;
      content: "";
      border-radius: 50px 50px 0 0;
      top: -3px;
      left: 50%;
      margin-left: -5px;
    }

    &:after {
      height: 8px;
      width: 42px;
      background-color: #4563a5;
      position: absolute;
      content: "";
      border-radius: 50px 0 0 50px;
      bottom: 0;
      left: -38px;
    }
  }

  .hat-close {
    position: absolute;
    bottom: 0;
    right: 2px;
    width: 28px;
    height: 10px;
    border-radius: 0 100px 100px 0;
    background-color: #879ed0;
  }

  .mouth {
    width: 18px;
    height: 8px;
    border-radius: 0 0 50px 50px;
    background-color: #fff;
    position: absolute;
    bottom: 11px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: 12;
  }

  .ear-left {
    position: absolute;
    top: 50px;
    left: 40px;
    border-radius: 50px 0 0 50px;
    width: 16px;
    height: 24px;
    background-color: #292928;
  }

  .ear-right {
    position: absolute;
    top: 50px;
    right: 40px;
    border-radius: 0 50px 50px 0;
    width: 16px;
    height: 24px;
    background-color: #292928;
  }

  .clock {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #08f7fe;
    position: absolute;
    right: 16px;
    top: 24px;

    &:before {
      content: "";
      width: 66px;
      height: 66px;
      background-color: #15415d;
      border-radius: 50%;
      position: absolute;
      top: 7px;
      left: 7px;
      z-index: 2;
    }
  }

  .pointer-min {
    height: 22px;
    width: 4px;
    border-radius: 0 0 50px 50px;
    background-color: #e0dddb;
    position: absolute;
    left: 50%;
    top: calc(50% + 10px);
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(-30deg);
    transform: translateX(-50%) translateY(-50%) rotate(-30deg);
    z-index: 20;
    transform-origin: top;
    -webkit-animation: min 30s linear infinite;
    animation: min 30s linear infinite;

    @-webkit-keyframes min {
      0% {
        -webkit-transform: translateX(-50%) translateY(-50%) rotate(-30deg);
      }
      100% {
        -webkit-transform: translateX(-50%) translateY(-50%) rotate(330deg);
      }
    }

    @keyframes min {
      0% {
        transform: translateX(-50%) translateY(-50%) rotate(-30deg);
      }
      100% {
        transform: translateX(-50%) translateY(-50%) rotate(330deg);
      }
    }
  }

  .pointer-hour {
    width: 14px;
    height: 4px;
    border-radius: 50px 0 0 50px;
    background-color: #e0dddb;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: 20;
    left: 22px;
  }

  .pointer {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    width: 10px;
    height: 10px;
    border: 3px solid #e0dddb;
    background-color: #f6f7f8;
    border-radius: 50%;
    z-index: 30;
  }

  .marker-top {
    width: 6px;
    height: 6px;
    background-color: #e0dddb;
    position: absolute;
    top: 10px;
    left: 50%;
    z-index: 20;
    border-radius: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  .marker-right {
    width: 6px;
    height: 6px;
    background-color: #e0dddb;
    position: absolute;
    right: 10px;
    top: 50%;
    z-index: 20;
    border-radius: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .marker-bottom {
    width: 6px;
    height: 6px;
    background-color: #e0dddb;
    position: absolute;
    bottom: 10px;
    left: 50%;
    z-index: 20;
    border-radius: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  .marker-left {
    width: 6px;
    height: 6px;
    background-color: #e0dddb;
    position: absolute;
    left: 10px;
    top: 50%;
    z-index: 20;
    border-radius: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .cup {
    width: 36px;
    height: 60px;
    position: absolute;
    bottom: 92px;
    z-index: 20;
    right: 56px;
    border-top: 50px solid #fff;
    background: #08f7fe;

    &:after {
      content: "";
      position: absolute;
      right: -1px;
      top: -46px;
      width: 4px;
    }
  }

  .cup-cover {
    width: 44px;
    right: 52px;
    position: absolute;
    bottom: 150px;
    z-index: 21;
    border-bottom: 6px solid #ce4646;
    border-left: 2px solid transparent;
    border-right: 2px solid transparent;

    &:after {
      content: "";
      width: 32px;
      right: 2px;
      position: absolute;
      bottom: 0;
      z-index: 21;
      border-bottom: 4px solid #af4242;
    }
  }

  .book.one {
    position: absolute;
    bottom: 100px;
    width: 64px;
    height: 16px;
    left: 46px;
    background-color: #fff;
    border-top: 3px solid #fb904d;
    border-right: 6px solid #fb904d;
    border-bottom: 3px solid #fb904d;
    border-radius: 0 4px 4px 0;
  }

  .book.two {
    position: absolute;
    bottom: 116px;
    width: 70px;
    height: 20px;
    left: 44px;
    background-color: #fff;
    border-top: 3px solid #45a58b;
    border-right: 11px solid #45a58b;
    border-bottom: 3px solid #45a58b;
    border-radius: 0 7px 8px 0;
  }

  .book.three {
    position: absolute;
    bottom: 136px;
    width: 62px;
    height: 20px;
    left: 48px;
    background-color: #ff443d;

    &:after {
      content: "";
      position: absolute;
      top: 5px;
      left: 5px;
      width: 8px;
      height: 8px;
      background-color: #fff;
      border-radius: 50%;
    }
  }
`;