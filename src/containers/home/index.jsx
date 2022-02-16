import React, { useState, useEffect } from "react";
import Footer from "../footer";
import Intro from "./intro";
import LearnMore from "./learn-more";
import Products from "./products";
import ProductMedium from "./products-medium";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import {
  preLoaderAnimation,
  bodyAnimation,
  introSub1,
  introSub2,
  introSub3,
  brandIntro,
} from "../../components/Animation";
export default function Home() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 5000);

  return (
    <>
      {loading ? (
        <AnimatePresence >
          <motion.div
            key={'loader'}
            variants={preLoaderAnimation}
            initial={false}
            exit="exit"
            className="animated-intro"
          >
            <motion.div
              variants={introSub1}
              initial="hidden"
              animate="show"
              className="animated-sub"
            >
              <motion.div
                className="animated-sub1"
                variants={introSub2}
                initial="hidden"
                animate="show"
              >
                <motion.div
                  className="animated-sub2"
                  variants={introSub3}
                  initial="hidden"
                  animate="show"
                >
                  <motion.a
                    className="brand"
                    variants={brandIntro}
                    initial="hidden"
                    animate="show"
                  >
                    DUDEY.AI
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <motion.div
        
        >
          
            <Intro />
            <LearnMore />
            <Products />
            <ProductMedium />
            <Footer />
         
        </motion.div>
      )}
    </>
  );
}
