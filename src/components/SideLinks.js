import React from 'react';
import { data } from '../constants/socialLinks'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const SideLinks = () => {
    return (
      <Container
        animate={{
          y: 0,
          opacity: 1,
        }}
        initial={{
          y: 150,
          opacity: 0,
        }}
        transition={{
          duration: 1,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
      >
        <Wrapper>
          {data.map((link) => {
            return (
              <Items
                key={link.id}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                {link.icon}
              </Items>
            );
          })}
        </Wrapper>
      </Container>
    );
}

export default SideLinks


const Container = styled(motion.div)`
position: fixed;
bottom: 0;
left: 0;

@media screen and (max-width:600px) {
    display: none;
}
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 3.5rem;
    background-color: rgb(168, 178, 209);
  }
`;
 
const Items = styled.a`
  color: #fff;
  font-size: 1.3rem;
  padding: 0.8rem;
  padding-left: 3rem;
  transition: .6s ease-in-out;

  &:hover {
    color: #08f7fe;
  }
`;