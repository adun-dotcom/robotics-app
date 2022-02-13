import React from "react";
import { ProductsMediumWrap } from "./medium.style";
import MediumImage from "../../../assets/medium-man.svg";
import Medium from "../../../assets/medium.svg";
import Facebook from "../../../assets/facebook.svg";
import Twitter from "../../../assets/twitter.svg";
import SlantGrey from "../../../assets/slant-grey-2.svg";
import SlantGrey1 from "../../../assets/grey-slant.svg";
import SlantGreen from "../../../assets/slant-green.svg";
import WhiteOval from "../../../assets/white-oval.svg";
import { useScroll } from "../../../components/useScroll";
import {
  buttonAnimation,
  h1Animation,
  imageAnimation,
  latestContainer,
  readyContainer,
  textAnimation,
} from "../../../components/Animation";
import { motion } from "framer-motion";
import HomeButton from "../../../components/button";
export default function Channels() {
  const [element, controls] = useScroll();

  return (
      <div className="channels">
        <div className="container">
            <div className="heading">
              <h3>Melior Official Communication Channels</h3>
              <p>
                We are happy to answer any of your question - below are Melior’s
                official communication channels
              </p>
            </div>

            <div className="channels-flex">
              <div className="card">
                <div className="circle">
                  <img src={Medium} />
                </div>
                <p>Medium account is:</p>
                <a href="/">medium.com/dudey-ai</a>
              </div>

              <div className="card">
                <div className="circle">
                  <img src={Facebook} />
                </div>
                <p>Facebook account is:</p>
                <a href="/">facebook.com/dudey-ai</a>
              </div>

              <div className="card">
                <div className="circle">
                  <img src={Twitter} />
                </div>
                <p>Twitter account is:</p>
                <a href="/">twitter.com/dudey-ai</a>
              </div>
            </div>
          
            <motion.div 
            
            variants={readyContainer}
            initial='hidden'
            whileInView={'show'}
            className="absolute-div">
              <div className="absolute-sub">
                <img src={SlantGreen} className="absolute green" />
                <img src={SlantGrey} className="absolute grey" />
                <img src={SlantGrey1} className="absolute grey1" />

                <div className="wrap">
                  <motion.h4 variants={h1Animation} whileInView='show'>
                    Ready to get started?
                  </motion.h4>
                  <motion.p variants={textAnimation} whileInView='show'>
                    Get in touch or create account
                  </motion.p>

                  <motion.div variants={buttonAnimation} className="btn-div">
                    <HomeButton green text="get whitelisted" />
                    <HomeButton blue text="buy coin now" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
    
          </div>
      </div>

  );
}
