import React from "react";
import ProductImage from "../../../assets/product-image.svg";
import { ProductWrap } from "./product.style";
import Girl1 from "../../../assets/girl-1.svg";
import Girl2 from "../../../assets/girl-2.svg";
import Girl3 from "../../../assets/girl-3.svg";
import { motion } from "framer-motion";
import { useScroll } from "../../../components/useScroll";
import {
  buttonAnimation,
  imageAnimation,
  investImage,
  learnMoreAnimation,
  learnMoreContentAnimation,
} from "../../../components/Animation";
import HomeButton from "../../../components/button";

export default function Products() {
  const [element, controls] = useScroll();
  return (
    <ProductWrap ref={element}>
      <div className="skewed-div">
        <div className="container">
          <div className="content">
            <motion.img
              variants={imageAnimation}
              whileInView={"show"}
              initial="hidden"
              src={ProductImage}
            />
            <div className="content-text1">
              <h3>Our Products Are</h3>
              <p>
                As the benefits of this amazing technology should be shared by
                all, we are currently well advanced in developing a
                pay-as-you-go-system.
              </p>
              <small>
                Catering specifically for the massive small business market,
                that would offer the sophisticated functionality of our
                technology at an economical cost. Our MINNIE product with
                maximal impact
              </small>

              <HomeButton blue text="buy coin now" />
            </div>
          </div>
        </div>

        <motion.div className="content2">
          <div className="container">
            <div className="heading">
              <h3>The Advisore And The Team</h3>
              <p>
                Our Main Mission: To provide affordable groundbreaking AI
                products that give businesses of all sizes
              </p>
            </div>
          </div>

          <div className="container">
            <div className="cards-wrapper ">
              <motion.div
                variants={learnMoreAnimation}
                initial={"hidden"}
                whileInView={"show"}
                className="cards"
              >
                <motion.div
                  variants={learnMoreContentAnimation}
                  className="card"
                >
                  <motion.img variants={investImage} src={Girl1} alt={"girl"} />
                  <div className="text">
                    <h4>Shafiq Rayhan Joty</h4>
                    <h5>Technical & AI Advisors</h5>
                    <p>
                      Assistant professor at Nanyang Technological University
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={learnMoreContentAnimation}
                  className="card"
                >
                  <motion.img variants={investImage} src={Girl2} alt={"girl"} />
                  <div className="text">
                    <h4>Shafiq Rayhan Joty</h4>
                    <h5>Technical & AI Advisors</h5>
                    <p>
                      Assistant professor at Nanyang Technological University
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={learnMoreContentAnimation}
                  className="card"
                >
                  <motion.img variants={investImage} src={Girl2} alt={"girl"} />
                  <div className="text">
                    <h4>Shafiq Rayhan Joty</h4>
                    <h5>Technical & AI Advisors</h5>
                    <p>
                      Assistant professor at Nanyang Technological University
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </ProductWrap>
  );
}
