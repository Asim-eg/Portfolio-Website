import React from 'react'
import {motion} from 'framer-motion'

const HeroContent = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >


    </motion.div>
  )
}

export default HeroContent