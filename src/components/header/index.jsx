import React, { useState } from "react";
import { HeaderWrap } from "./home.style";
import Hamburger from "hamburger-react";
import HomeButton from "../button";
import { useScroll } from "../useScroll";
import { headerAnimation, mobileContent, mobileNav } from "../Animation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { element, controls } = useScroll();

  return (
    <>
    <HeaderWrap>
      <div className="container">
        <motion.div
          variants={headerAnimation}
          initial="hidden"
          animate='show'
          className="content-div"
        >
          <a className="brand">DUDEY.AI</a>
          <div className="sub-div">
            <ul>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Why invest</a>
              </li>
              <li>
                <a>whitepaper</a>
              </li>
              <li>
                <a>token sales</a>
              </li>
              <li>
                <a>faq</a>
              </li>
            </ul>
            <div className="web-btn">
              <HomeButton text="get whitelisted" />
            </div>
            <div className="hamburger">
              <Hamburger
                size={30}
                duration={0.8}
                label="Show menu"
                onToggle={(toggled) => {
                  if (toggled) {
                    setMobileMenu(true);
                  } else {
                    setMobileMenu(false);
                  }
                }}
              />
            </div>
          </div>
        </motion.div>
    
      </div>
      <AnimatePresence>
        {mobileMenu && (
          
          <motion.div 
          variants={mobileNav}
          initial='hidden'
          animate='show'
          exit='exit'
          className="mobile-menu">
            <motion.div 
            variants={mobileContent}
        
            className="sub-div">
              <ul>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Why invest</a>
                </li>
                <li>
                  <a>whitepaper</a>
                </li>
                <li>
                  <a>token sales</a>
                </li>
                <li>
                  <a>faq</a>
                </li>
              </ul>
             
                <HomeButton blue text="get whitelisted" />
             
            </motion.div>
          </motion.div>
          
        )}
        </AnimatePresence>
    </HeaderWrap>
  
    </>
  );
}
