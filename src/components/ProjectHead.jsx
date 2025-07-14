import React from 'react'
import transitionBlock from '../assets/elements/transition-blocks.png'

import { motion, useScroll, useTransform } from 'framer-motion'
const ScrollSlider = () => {
  const { scrollYProgress } = useScroll();
  const a = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);
  const b = useTransform(scrollYProgress, [0, 1], ['-160%', '-40%']);
  return (<>
    <div className="h-[50vh] w-[200vw] bg-black flex flex-col justify-between overflow-x-hidden whitespace-nowrap scrollbar-hide">
      <div className="h-[15vh]  absolute z-20 -left-20  rotate-0 republica w- z-60  bg-white text-black text-7xl">
        <motion.div
          className="h-full w-auto  gap-2 flex-nowrap items-center flex"
          style={{ x: a }}
        >
          <span>PROJECTS | </span>
          <span>PROJECTS | </span>
          <span>PROJECTS | </span>
          <span>PROJECTS | </span>
          <span>PROJECTS | </span>
          <span>PROJECTS | </span>
          <span>PROJECTS | </span>
          <span>PROJECTS | </span>
          <span>PROJECTS | </span>
          <span>PROJECTS | </span>
          <span>PROJECTS | </span>
          <span>PROJECTS | </span>
          <span>PROJECTS | </span>
          <span>PROJECTS | </span>
          <span>PROJECTS | </span>
        </motion.div>
      </div>
      <div className="h-[15vh] -rotate-12 -top-20 absolute republica -left-12 bg-white text-black text-7xl z-10 w-full">
        <motion.div
          className="h-full  w-auto gap-2 flex-nowrap items-center flex"
          style={{ x: b }}
        >
          <span>PROJECTS | </span>
          <span>PROJECTS | </span>
          <span>PROJECTS | </span>
          <span>PROJECTS | </span>
          <span>PROJECTS | </span>
          <span>PROJECTS | </span>
          <span>PROJECTS | </span>
          <span>PROJECTS | </span>
          <span>PROJECTS | </span>
          <span>PROJECTS | </span>
          <span>PROJECTS | </span>
          <span>PROJECTS | </span>
          <span>PROJECTS | </span>
          <span>PROJECTS | </span>
        </motion.div>
      </div>
      
    </div>
    </>
  )
}

export default ScrollSlider