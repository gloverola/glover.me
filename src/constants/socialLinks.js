import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import {SiHashnode} from 'react-icons/si'
export const data = [
  {
    id: 1,
    icon: <FaGithub className='social-icon'></FaGithub>,
    url: "https://github.com/gloverola",
  },
  {
    id: 2,
    icon: <FaLinkedin className='social-icon'></FaLinkedin>,
    url: "https://www.linkedin.com/in/ola-glover-638755127/",
  },
  {
    id: 3,
    icon: <FaInstagram className='social-icon'></FaInstagram>,
    url: "https://www.instagram.com/_itsglover/",
  },

  {
    id: 4,
    icon: <FaTwitter className='social-icon'></FaTwitter>,
    url: "https://twitter.com/_itsglover",
  },
  {
    id: 5,
    icon: <SiHashnode className='social-icon'></SiHashnode>,
    url: "https://glover.hashnode.dev/",
  },
];
