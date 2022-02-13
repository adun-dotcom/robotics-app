export const preLoaderAnimation = {
  hidden:{opacity:0, },
 
  show: {
    x:0,
    opacity: 1,
    transition: {  
      duration: 1,
      ease: 'easeOut',
      
    },
  },
  exit: {
    x:'-100vw',
    transition: {
      
      duration: 0.7,
      ease: 'easeInOut',
    },
  },
};

export const introSub1 = {
  hidden: { opacity: 0, x: "-90vw" },
  show: {
    opacity: 1,
    x:0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 2,
      delay:1,
      type: "tween",
      when: "beforeChildren",
    },
  },
};

export const introSub2 = {
  hidden: { x: "-70vw" },
  show: {
    x: 0,
    transition: {
      type: "tween",
      when: "beforeChildren",
      delay:1.5,
      duration:1.4
    },
  },
};

export const introSub3 = {
  hidden: { x: "-100vw" },
  show: {
    x: 0,
    transition: {
      type: "tween",
      when: "beforeChildren",
      delay: 1.6,
      duration:1.4
    },
  },
};


export const brandIntro = {
  hidden: {opacity:0, y:30},
  show: {opacity:1, y:-2, transition: {
    duration:1.6, delay:2.6
  }}

}


export const bodyAnimation = {
  // hidden:{opacity:0.1},
  show: {x:'100vw',transition: {type:'spring',duration:0.8, ease:[0.17, 0.67, 0.83, 0.67], 
    
    // delayChildren: 0.5,
    // staggerDirection: -1,
   } },
};

export const topIntroAnimation = {
  hidden:{opacity:0},
  show:{opacity:1,  }
}

export const headerAnimation = {
  hidden: { x: 100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", duration: 3, },
  },
};

export const parentTextAnimation = {
  initial:{ opacity:0},
  show: {
    opacity:1,
    transition:{
      type: "spring",
      mass:0.4,
      damping:8,
      when:'beforeChildren',
      staggerChildren:6
    }
  }
}
export const h1Animation = {
  hidden:{opacity:0, y:100},
  show:{opacity:1,y:0, transition:{
    duration:1,
    
     ease:'easeInOut'
  }}
}

export const textAnimation = {
  hidden:{opacity:0, y:100},
  show:{opacity:1,y:0, transition:{
    duration:0.6,
    delay:0.4,
     ease:'easeInOut'
  }}
}

export const timeAnimation = {
  hidden:{opacity:0, y:100},
  show:{opacity:1,y:0, transition:{
    duration:0.6,
    delay:0.6,
     ease:'easeInOut'
  }}
}

export const imageAnimation = {
  hidden:{opacity:0, x:100, y:100},
 
  show:{opacity:1,x:0, y:0,  transition:{
    x:{
      type: 'tween',
      duration:1,
    },
    y:{
      type: 'tween',
      duration:2,
    },
    
     ease:'easeIn'
  }}
}

export const cardHover =  {
  whileHover:{
    scale: 1.2,
    transition: { duration: 1 },
  },
  whileTap:{ scale: 0.9 }
}

export const container = {
  hidden: { opacity: 0, },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerDirection: -1
    }
  }
}

export const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

export const mobileNav = {
  hidden: { opacity:0, x:500,  y:20,},
  show:{opacity:1, x:0, transition:{
    duration:1, ease:'easeInOut',
    delayChildren:2
  }},
  exit:{opacity:0, x:500, transition:{
    duration:1, ease:'easeOut'
  }},
}

export const mobileContent = {
  hidden: { opacity:0, y:100 },
  show:{opacity:1,y:0, transition:{
    duration:1, delay:1.2, ease:'easeInOut'
  }},

}

export const latestContainer = {
  hidden:{x:-500, opacity:0},
  show:{opacity:1, x:0,  transition:{
    duration:2, ease:'easeInOut',
    when:'beforeChildren',
  }}
}

export const inputAnimation = {
  hidden:{x:-50, opacity:0},
  show:{opacity:1, x:0,  transition:{
    duration:1, ease:'linear',
  }}
}

export const buttonAnimation = {
  hover: {
    scale: 1.3,
    textShadow:'rgba(0, 0, 0, 0.2) 0px 3px 6px 4px ',
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 3px 6px 4px",
    transition: {
      yoyo: Infinity,
      duration: 0.6,
    },
  },
  hidden:{x:-200, opacity:0},
  show:{opacity:1, x:0,  transition:{
    duration:1, ease:'linear',
  }},

}


export const readyContainer = {
  hidden:{x:-500, opacity:0},
  show:{opacity:1, x:0,  transition:{
    duration:2, ease:'easeInOut',
    when:'beforeChildren',
  }}
}