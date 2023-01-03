import { motion } from 'framer-motion'

const animations = {
    initial: {opacity: 0, y: 100},
    animate: {opacity: 1, y: 0},
    exit: {opacity: 0, y: -100},
    transition: {duration: 1}
}

const AnimatedPage = ({children}) => {
    return (
        <motion.div variants={animations} initial="initial" animate="animate" exit="exit" transition="transition">
            {children}
        </motion.div>
    )
}

export default AnimatedPage