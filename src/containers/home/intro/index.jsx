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
  cardHover,
  
} from "../../../components/Animation";
import {useInView} from 'react-intersection-observer';

export default function Intro() {
  const controls = useAnimation();
  const [element, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show")
    }
  }, [controls, inView]);
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
              initial="hidden"
              animate={'show'}
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
                initial={"hidden"}
                animate="show"
              >
                {timerComponents.length ? (
                  timerComponents
                ) : (
                  <div>no time left</div>
                )}
              
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
        <div className="absolute-cards container">
          <div className="cards-wrapper ">
            <div className="cards">
              <motion.div 
              ref={element}
              variants={cardHover}
              whileHover={'whileHover'}
              whileTap='whileTap'
              className="content">
                <img src={LearnMore1} alt={"LearnMore"} />

                <h4>Own Machine Learning</h4>
                <p>
                  Melior has already developed its own Machine Learning, Neural
                  Network and Deep Learning models
                </p>
                <div className="learn-more">Learn more</div>
              </motion.div>
              <motion.div className="content"
              className="content">
               <img src={LearnMore2} alt={"LearnMore"} />
                <h4>Own Machine Learning</h4>
                <p>
                  Melior has already developed its own Machine Learning, Neural
                  Network and Deep Learning models
                </p>
                <div className="learn-more">Learn more</div>
              </motion.div>
              <motion.div className="content"
              ref={element}
              variants={cardHover}
              whileHover={'whileHover'}
              whileTap='whileTap'
              className="content">
              
                <img src={LearnMore2} alt={"LearnMore"} />

                <h4>Own Machine Learning</h4>
                <p>
                  Melior has already developed its own Machine Learning, Neural
                  Network and Deep Learning models
                </p>
                <div className="learn-more">Learn more</div>
              </motion.div>
            </div>
          </div>
        </div>
      </IntroWrap>
    </motion.div>
  );
}
