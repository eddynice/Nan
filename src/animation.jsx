import {motion} from "framer-motion"

const animation={
    initial:{opacity:0},
    animate:{opacity:1},
    exit:{opacity:0},
}
const Animate=({Children})=>{


    return(
        <motion.div
            variants={animation}
            initial = "inital"
            animate = "animate"
            exit="exit"
            transition={{duration:3}}
            >
            {Children}
        </motion.div>
    )
}
export default Animate