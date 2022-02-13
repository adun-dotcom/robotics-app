import React from "react";
import { FooterWrapper } from "./footer.style";
import Medium from '../../assets/medium.svg';
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import CopyRight from "../../assets/copy-right.svg";
import SlantGrey from "../../assets/slant-grey-2.svg";
import SlantGrey1 from "../../assets/grey-slant.svg";
import SlantGreen from "../../assets/slant-green.svg";
import { buttonAnimation, h1Animation, readyContainer, textAnimation } from "../../components/Animation";
import {motion} from 'framer-motion'
import { useScroll } from "../../components/useScroll";
import HomeButton from "../../components/button";
export default function Footer() {
  const [element, controls] = useScroll();
  return (
    <FooterWrapper ref={element}>
      <div className="skewed-container">
 
        <div className="container">
          <div className="content">
            <a className="brand">DUDEY.AI</a>
            <ul className="footer-menu">
             
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
            <div className='bottom'>
                <div className='copyright-div'>
                <img src={CopyRight}/>
               
                <div className='support'>  2020 DUBEY.AI</div>
                </div>
               
                <div className='mediums'>
                <img src={Medium}/>
                <img src={Facebook}/>
                <img src={Twitter}/>
                </div>
                <div className='support'>Support@dudey.ai</div>
                
            </div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
}
