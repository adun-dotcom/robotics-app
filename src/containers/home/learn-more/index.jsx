import React from "react";
import { LearnWrap } from "./learn.style";
import LearnMore3 from "../../../assets/learn-more3.svg";
import GreenSlant from '../../../assets/green-slant.svg';
import BlueSlant from '../../../assets/blue-slant.svg';
import GreySlant from '../../../assets/grey-slant.svg';
import SlantGrey from "../../../assets/slant-grey-2.svg";
import {motion} from 'framer-motion';
import {useScroll} from '../../../components/useScroll'
import { buttonAnimation, h1Animation, inputAnimation, investAnimation, investImage, investSubAnimation, latestContainer, textAnimation } from "../../../components/Animation";
import HomeButton from "../../../components/button";
export default function LearnMore() {
  const [element, controls] =  useScroll();
  return (
    <LearnWrap >
      <div className="skewed-div">
        <div className="container">
          <div className="content-div" >
            <div className="content-div1">
              <h3>Why Invest?</h3>
              <p>
                Our Main Mission: To provide affordable groundbreaking AI
                products that give businesses of all sizes a way to take
                advantage of the AI revolution.
              </p>
              <HomeButton blue text="buy coins now"/>
            </div>
            <motion.div 
            ref={element}
            variants={investAnimation}
            animate={controls}
            className="content-div2">
              <motion.div 
              variants={investSubAnimation}
              className="content-sub">
                <motion.img 
                variants={investImage}
                src={LearnMore3} alt={"LearnMore"} />
                <div className=''>
                  <h4>Mellor marketplace</h4>
                  <p>
                    They will have the option to either buy tokens on the market
                    or pay dudey in flat so we can take care of the conversation
                    behind the scenes. Melior will undertake to do all flat to
                    token transaction.
                  </p>
                </div>
              </motion.div>
              <motion.div 
              variants={investSubAnimation}
              className="content-sub">
                <motion.img 
                variants={investImage}
                src={LearnMore3} alt={"LearnMore"} />
                <div className=''>
                  <h4>Mellor marketplace</h4>
                  <p>
                    They will have the option to either buy tokens on the market
                    or pay dudey in flat so we can take care of the conversation
                    behind the scenes. Melior will undertake to do all flat to
                    token transaction.
                  </p>
                </div>
              </motion.div>
              <motion.div 
              variants={investSubAnimation}
              className="content-sub">
                <motion.img 
                variants={investImage}
                src={LearnMore3} alt={"LearnMore"} />
                <div className=''>
                  <h4>Mellor marketplace</h4>
                  <p>
                    They will have the option to either buy tokens on the market
                    or pay dudey in flat so we can take care of the conversation
                    behind the scenes. Melior will undertake to do all flat to
                    token transaction.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <motion.div 
          variants={latestContainer}
          initial='hidden'
          whileInView={'show'}
          className="absolute-latest">
              <div className="div-relative">
              <img src={GreenSlant} className="absolute green-slant"/>
              <img src={BlueSlant} className="absolute blue-slant"/>
              <img src={GreySlant} className="absolute grey-slant"/>
              <img src={SlantGrey} className="absolute grey2-slant"/>

                <motion.h4
                variants={h1Animation}
                >Get the latest from Dudey</motion.h4>
                <motion.p variants={h1Animation}>Receive news, announcement, and reports</motion.p>
                <div>
                    <motion.input 
                    variants={inputAnimation}
                    placeholder="Your Email"/>
                    <motion.span variants={buttonAnimation}>
                    <motion.button
                    variants={buttonAnimation}
                    whileHover='hover'
                    >subscribe</motion.button>
                    </motion.span>
                   
                </div>
              </div>
              
          </motion.div>
        </div>
      </div>
    </LearnWrap>
  );
}
