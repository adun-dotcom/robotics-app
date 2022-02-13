import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion';

export const useScroll =()=>{
    const [element, view] = useInView();
    const controls = useAnimation();

    if(view){
        controls.start("show")
    } else{
        controls.start("hidden")
    }

    return [element, controls]
}