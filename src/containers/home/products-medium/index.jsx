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
import Channels from "./channels";
export default function ProductMedium() {
  const [element, controls] = useScroll();

  return (
    <ProductsMediumWrap >
      <div className="skewed-container">
        <div className="container">
          <div className="flexed-content" >
            <div className="text">
              <h3>Our Products Are</h3>
              <p>
                As the benefits of this amazing technology should be shared by
                all, we are currently well advanced in developing a pay system.
              </p>
              <p className="small">
                Catering specifically for the massive small business market,
                that would offer the sophisticated functionality of our
                technology at an economical cost. Our MINNIE product with
                maximal impact
              </p>
            </div>
            <div className="image" >
              <motion.img
                variants={imageAnimation}
                initial={"hidden"}
              whileInView='show'
                className="image-oval"
                src={MediumImage}
              />
              <img className="" src={WhiteOval} />
            </div>
          </div>
        <Channels/>

         
        </div>
      </div>
    </ProductsMediumWrap>
  );
}
