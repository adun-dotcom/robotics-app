import React, { useState, useEffect } from "react";
import Header from "../../../components/header";
import { IntroWrap } from "./intro.style";
import Image from "../../../assets/intro-img.svg";
import GreenDot from "../../../assets/green-dot.svg";
import SkewedGreen from "../../../assets/skewed-green.svg";
import LearnMore1 from "../../../assets/learn-more1.svg";
import LearnMore2 from "../../../assets/learn-more2.svg";
import Interval from "../../../assets/interval.svg";
import { motion, useAnimation } from "framer-motion";
import {
  parentTextAnimation,
  h1Animation,
  textAnimation,
  timeAnimation,
  imageAnimation,
  preLoaderAnimation,
  learnMoreAnimation,
  learnMoreContentAnimation,
  investImage,
  
} from "../../../components/Animation";
import {useInView} from 'react-intersection-observer';
import { useScroll } from "../../../components/useScroll";
import HomeButton from "../../../components/button";

export default function Intro() {
  const [element, controls] = useScroll();

 
  const calcTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`07/21/${year}`) - +new Date();

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calcTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const [timeLeft, setTimeLeft] = useState(calcTimeLeft());

  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div className="time" key={interval}>
        <span className="integer" >{timeLeft[interval]}</span>
        <span className="hour">
          {(interval === "minutes" && "Min") ||
            (interval === "hours" && "Hours") ||
            (interval === "seconds" && "Sec") ||
            (interval === "days" && "Days")}
        </span>
      </div>
    );
  });

  return (
    <motion.div 
    variants={preLoaderAnimation}
    initial={"hidden"}
    whileInView={"show"}
    className="section"
   >
      <Header />
      <IntroWrap>
        <div className="skewed-div"></div>
        <img src={SkewedGreen} className="absolute skewed-green" />
        <div className="container">
          <motion.div
            className="content-div"
            
          >
            <motion.div
              variants={parentTextAnimation}
              
              className="content-text"
            >
              <motion.h1
                variants={h1Animation}
              >
                meet our ai chabot solution
              </motion.h1>
              <motion.p
                variants={textAnimation}
              >
                Is a research, development and solutions provider company with a
                vibrant research and development pipeline
              </motion.p>
              <motion.div 
              className="count-down"
              variants={timeAnimation}
               
              >
                {timerComponents.length ? (
                  timerComponents
                ) : (
                  <div>no time left</div>
                )}


              
              </motion.div>
              <motion.div
              variants={textAnimation}
              className="whitelist"
              >
                <HomeButton green text="join whitelist"/>
                <span className='border'></span>
                <motion.div>
                  <p>1330 participants</p>
                  <small>In whitelist</small>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div 
            variants={imageAnimation}
           
            className="content-image">
              <img src={Image} className="img" />
              <img src={GreenDot} className="absolute skewed-dot" />
            </motion.div>
          </motion.div>
        </div>
        <div className="skewed-div2"></div>
        <div className="absolute-cards container"  >
          <div className="cards-wrapper ">
            <motion.div 
            variants={learnMoreAnimation}
            initial={'hidden'}
            whileInView={'show'}
            className="cards">
              <motion.div
              variants={learnMoreContentAnimation}
              
              className="content">
                <motion.img 
                variants={investImage}
                src={LearnMore1} alt={"LearnMore"} />

                <h4>Own Machine Learning</h4>
                <p>
                  Melior has already developed its own Machine Learning, Neural
                  Network and Deep Learning models
                </p>
                <div className="learn-more-div">
                <button className="learn-more">Learn more</button>
                </div>
              </motion.div>
              <motion.div
              variants={learnMoreContentAnimation}
              className="content">
               <motion.img 
                variants={investImage}
                 src={LearnMore2} alt={"LearnMore"} />
                <h4>Own Machine Learning</h4>
                <p>
                  Melior has already developed its own Machine Learning, Neural
                  Network and Deep Learning models
                </p>
                <div className="learn-more-div">
                <button className="learn-more">Learn more</button>
                </div>
              </motion.div>
              <motion.div
              variants={learnMoreContentAnimation}
            
              className="content">
              
              <motion.img 
                variants={investImage} src={LearnMore2} alt={"LearnMore"} />

                <h4>Own Machine Learning</h4>
                <p>
                  Melior has already developed its own Machine Learning, Neural
                  Network and Deep Learning models
                </p>
                <div className="learn-more-div">
                <button className="learn-more">Learn more</button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </IntroWrap>
    </motion.div>
  );
}
