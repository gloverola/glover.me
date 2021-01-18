import React, { useState } from "react";
import NavbarLinks from './NavbarLinks'
import styled from 'styled-components'
import { motion } from "framer-motion";


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const opened = () => {
setNavbarOpen(!navbarOpen);
  }

  return (
    <Navigation
      animate={{
        y: 0,
        opacity: 1,
      }}
      initial={{
        y: -80,
        opacity: 0,
      }}
      transition={{
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      }}
    >
      <h2>G</h2>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <Hamburger open={navbarOpen} />
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks opened={opened} />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  );
};

export default Navbar;

const Navigation = styled(motion.div)`
  width: 100vw;
  height: 80px;
  display: flex;
  background-color: #152747;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 3rem;
  z-index: 1000;
  align-self: center;
  box-shadow: 0px 1px 5px 0px rgba(21, 65, 92, 0.27);

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    height: 60px;
  }

  h2 {
    color: #08f7fe;
    font-family: "Major Mono Display", monospace;
    text-align: center;
    font-size: 4rem;
    font-weight: bolder;

    @media screen and (max-width: 768px) {
      font-size: 3rem;
    }
  }

  @media (max-width: 768px) {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`;

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 80%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #152747;
    transition: all 0.3s ease-in;
    top: 59px;
    left: ${(props) => (props.open ? "-100%" : "0")};
  }
`;

const Hamburger = styled.div`
  background-color: #08f7fe;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #08f7fe;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${(props) =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${(props) => (props.open ? "0" : "1")};
    transform: ${(props) => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`;

