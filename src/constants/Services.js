import React from 'react';
import { FaLaptopCode, FaHubspot } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import { GiBubblingFlask } from 'react-icons/gi'
import { GoCircuitBoard } from 'react-icons/go'
import {
  FaBusinessTime,
  FaHtml5,
  FaReact,
  FaSass,
  FaNode,
} from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { RiGatsbyFill } from 'react-icons/ri';
import { SiNextDotJs, SiMongodb, SiJest } from "react-icons/si";

export const data = [
  {
    id: 1,
    title: "Web Design",
    icon: <FaLaptopCode></FaLaptopCode>
  },
  {
    id: 2,
    title: "Web Application",
    icon: <FaHubspot></FaHubspot>
  },
  {
    id: 3,
    title: "Mobile Application",
    icon: <FiSmartphone></FiSmartphone>
  },
  {
    id: 4,
    title: "Automated Testing",
    icon: <GiBubblingFlask></GiBubblingFlask>
  },
  {
    id: 5,
    title: "Headless Development",
    icon: <GoCircuitBoard></GoCircuitBoard>
  },
  {
    id: 6,
    title: "Business Strategy and Support",
    icon: <FaBusinessTime></FaBusinessTime> 
  },
];
export const stack = [
  {
    id: 1,
    title: "Html5",
    icon: <FaHtml5></FaHtml5>
  },
  {
    id: 2,
    title: "Css3",
    icon: <IoLogoCss3></IoLogoCss3>
  },
  {
    id: 3,
    title: "Javascript",
    icon: <IoLogoJavascript></IoLogoJavascript>
  },
  {
    id: 4,
    title: "React",
    icon: <FaReact></FaReact>
  },
  {
    id: 5,
    title: "Gatsby",
    icon: <RiGatsbyFill></RiGatsbyFill>
  },
  {
    id: 6,
    title: "Next",
    icon: <SiNextDotJs></SiNextDotJs> 
  },
  {
    id: 7,
    title: "Scss",
    icon: <FaSass></FaSass> 
  },
  {
    id: 8,
    title: "Node",
    icon: <FaNode></FaNode> 
  },
  {
    id: 9,
    title: "MongoDB",
    icon: <SiMongodb></SiMongodb> 
  },
  {
    id: 10,
    title: "Jest",
    icon: <SiJest></SiJest> 
  },
];