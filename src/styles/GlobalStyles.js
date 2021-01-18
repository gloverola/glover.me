import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: 'Montserrat', sans-serif;
      scroll-behavior: smooth;
 }

 body {
   background: #152747;
    

 }
`;

export const MainContainer = styled.div`
  padding: 0 calc((100vw - 1200px) / 2);
`;
