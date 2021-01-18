import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import scrollTo from "gatsby-plugin-smoothscroll";

const NavbarLinks = ( { opened } ) => {
  
  return (
    <>
      <NavItem to='#home' onClick={(() => scrollTo("#hero"))}>
        Home
      </NavItem>
      <NavItem to='#services' onClick={(() => scrollTo("#services"), opened)}>
        Services
      </NavItem>
      <NavItem to='#experience' onClick={(() => scrollTo("#job"))}>
        Experience
      </NavItem>
      <NavItem to='#projects' onClick={(() => scrollTo("#projects"), opened)}>
        Projects
      </NavItem>
      <NavItem to='#blogs' onClick={(() => scrollTo("#blogs"), opened)}>
        Blog
      </NavItem>
    </>
  );
};

export default NavbarLinks;

const NavItem = styled(Link)`
  text-decoration: none;
  color: #f1f1f1;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-family: 'Montserrat', sans-serif;
  text-transform: capitalize;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #08f7fe;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #08f7fe;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`;
