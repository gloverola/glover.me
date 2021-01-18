import React, {useState} from "react";
// import "../css/main.css"
import Navbar from "./Navbar";
//import Footer from "./Footer";
import { GlobalStyle } from "../styles/GlobalStyles";
import SideLinks from "./SideLinks";

const Layout = ( { children } ) => {
  
  const [isOpened, setIsOpened] = useState(true);

  const openSidebar = () => {
    setIsOpened(!isOpened);
  };


  
  return (
    <>
      <GlobalStyle />
      <Navbar openSidebar={openSidebar} />

      <main>{children}</main>
      <SideLinks />
    </>
  );
};

export default Layout;
