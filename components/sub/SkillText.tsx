"use client";
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div
    className='w-full h-auto flex flex-col items-center justify-center'
    >
      <motion.div
        className='Welcome-box py-[8px] px-[8px] border border-[#7042f88b] opacity-[0.9]'
        variants={slideInFromTop}
        >
          <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
          <h1 className='Welcome-text text-[13px]'>Go Lang Developer</h1>
        </motion.div>

        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
          Crafting Scalable Solutions with Modern Technologies 
        </motion.div>

        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
        >
          I'm a Go Lang developer with a passion for building web applications and APIs. I'm currently looking for a full-time position as a Go Lang developer.
        </motion.div>

    </div>
  )
}

export default SkillText