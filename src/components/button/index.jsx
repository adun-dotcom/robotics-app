import React from "react";
import { ButtonDiv } from "./button.style";
import {motion} from 'framer-motion'
import { buttonAnimation } from "../Animation";
export default function HomeButton({text, onclick, blue, green}){
    return(
        <ButtonDiv  onClick={onclick} blue={blue} green={green}>
             <motion.button
             className="btn"
                    variants={buttonAnimation}
                    whileHover='hover'
                    >{text}</motion.button>
        </ButtonDiv>
    )
}