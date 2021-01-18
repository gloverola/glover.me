import React from "react";
import {data} from "../constants/socialLinks";
import styled from 'styled-components';

const Footer = () => {


  return (
    <FooterContainer>
      <FooterContent>
        <FooterIcons>
          {data.map((link) => {
            return (
              <Items key={link.id} to={link.url}>
                {link.icon}
              </Items>
            );
          })}
        </FooterIcons>
        <a
          href='https://github.com/gloverola'
          target='_blank'
          rel='noopener noreferrer'
        >
          &copy; {`Glover Olaoluwa ${new Date().getFullYear()}`}
        </a>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.section`
display: flex;
  width: 100vw;
  height: 100px;
  background: #020c1b;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.338);
    transition: 0.3s ease-in-out;
    margin-top: 1rem;

    &:hover {
      color: #08f7fe;
    }
  }
`;

const FooterIcons = styled.div`
display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    
  }
`;

const Items = styled.div`
  padding: 0 0.8rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.233);
  transition: 0.3s ease-in-out;

  &:hover {
    color: #08f7fe;
  }

  
`;
