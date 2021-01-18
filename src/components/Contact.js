import React, {useState} from "react";
import styled from 'styled-components';
import { MdChatBubble } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {

    const [ showModal, setShowModal ] = useState( false );

    const toggleModal = () => {
        setShowModal( !showModal );
    }

  const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 }
 };
  const containerVariant = {
    initial: { top: "-50%", transition: { type: "spring" } },
    isOpen: { top: "50%" },
    exit: { top: "-50%" }
  }

  return (
    <AnimatePresence>
      <ContactContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {!showModal ? (
          <MdChatBubble onClick={toggleModal} className='icon' />
        ) : (
          <RiArrowDownSLine className='icon' onClick={toggleModal} />
        )}
        <ContactWrapper
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1,
            ease: [0.6, 0.05, -0.01, 0.9],
          }}
          variants={modalVariant}
        >
          {showModal ? (
            <>
              <div className='header'>
                <h2>G</h2>
                <h3>
                  Hi there{" "}
                  <span role='img' aria-label='Hi'>
                    👋
                  </span>
                </h3>
              </div>

              <div className='form-wrapper'>
                <motion.form
                  action='https://formspree.io/f/xbjppbpb'
                  method='post'
                  onSubmit={(e) => e.preventDefault}
                  variants={containerVariant}
                >
                  <input type='text' name='name' placeholder='Name' />
                  <input type='text' name='email' placeholder='Email' />
                  <textarea
                    name='message'
                    id=''
                    cols='30'
                    rows='5'
                    placeholder='Message'
                  ></textarea>
                  <button type='submit'>Message Me</button>
                </motion.form>
              </div>
            </>
          ) : null}
        </ContactWrapper>
      </ContactContainer>
    </AnimatePresence>
  );
};

export default Contact;

const ContactContainer = styled(motion.section)`
  display: block;
  position: relative;
  transition: all 0.3s ease-in;

  background: none;
  z-index: 1000;

  .icon {
    font-size: 2rem;
    cursor: pointer;
    position: fixed;
    right: 3rem;
    bottom: 20px;
    background: #08f7fe;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding: 0.4rem;
    color: #182c4e;
    transition: 0.3s ease;

    &:hover {
      background: rgba(8, 246, 254, 0.571);
    }

    @media screen and (max-width: 768px) {
      right: 1rem;
    }
  }
`;

const ContactWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 100px;
  right: 3rem;
  width: 400px;
  border-radius: 7px;
  background: #152747;
  transition: all 0.3s ease-in;
  box-shadow: 1px 2px 100px 0px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 768px) {
    right: 1rem;
    width: 340px;
  }

  .header {
    width: 100%;
    background: rgb(21, 39, 71);
    background: linear-gradient(
      101deg,
      rgba(21, 39, 71, 1) 0%,
      rgba(8, 247, 254, 1) 100%
    );
    padding: 1rem;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }

  .form-wrapper {
    background: #152747;
    position: relative;
    width: 90%;
  }

  h2 {
    color: #08f7fe;
    font-family: "Major Mono Display", monospace;
    font-size: 4rem;
    font-weight: bolder;

    @media screen and (max-width: 768px) {
      font-size: 3rem;
    }
  }

  h3 {
    margin-top: 1rem;
    font-size: 1.3rem;
    color: #fff;
    margin-bottom: 2rem;

    span {
      font-size: 2rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    padding: 1rem;
    background: #152747;
    position: relative;
    top: -60px;
    border-radius: 7px;
    box-shadow: 1px 2px 100px 0px rgba(0, 0, 0, 0.2);

    input,
    textarea {
      width: 100%;
      padding: 10px;
      background: transparent;
      border: none;
      outline: none;
      margin-bottom: 1rem;
      color: #fff;
      border: 1px solid #08f7fe;
      border-radius: 5px;
    }

    button {
      color: #182c4e;
      padding: 0.8rem;
      border: none;
      outline: none;
      border-radius: 5px;
      background: #08f7fe;
      font-size: 1rem;
      font-weight: 900;
      cursor: pointer;
      transition: 0.3s ease-in-out;

      &:hover {
        background: rgba(8, 246, 254, 0.592);
        color: #182c4e;
      }
    }
  }
`;


