import React from 'react'
import transitionBlock from '../assets/elements/transition-blocks.png'

import { motion, useScroll, useTransform } from 'framer-motion'
const ScrollSlider = () => {
  const { scrollYProgress } = useScroll();
  const a = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);
  const b = useTransform(scrollYProgress, [0, 1], ['-100%', '-20%']);
  return (<>
    <div className="h-[75vh] p-4 w-full bg-black overflow-x-hidden whitespace-nowrap scrollbar-hide">
      <div className="h-[33vh] w-full">
        <motion.div
          className="h-full w-auto gap-2 flex-nowrap flex"
          style={{ x: a }}
        >
          <div  className='h-full block1 rounded-xl bg-slate-100 w-[350px] flex-grow-0 flex-shrink-0'></div>
          <div  className='h-full block2 rounded-xl bg-slate-100 w-[350px] flex-grow-0 flex-shrink-0'></div>
          <div  className='h-full block3 rounded-xl bg-slate-100 w-[350px] flex-grow-0 flex-shrink-0'></div>
          <div  className='h-full block4 rounded-xl bg-slate-100 w-[350px] flex-grow-0 flex-shrink-0'></div>
          <div  className='h-full block5 rounded-xl bg-slate-100 w-[350px] flex-grow-0 flex-shrink-0'></div>
          <div  className='h-full block6 rounded-xl bg-slate-100 w-[350px] flex-grow-0 flex-shrink-0'></div>
          <div  className='h-full block7 rounded-xl bg-slate-100 w-[350px] flex-grow-0 flex-shrink-0'></div>
          <div  className='h-full block8 rounded-xl bg-slate-100 w-[350px] flex-grow-0 flex-shrink-0'></div>
          <div  className='h-full block9 rounded-xl bg-slate-100 w-[350px] flex-grow-0 flex-shrink-0'></div>
          <div  className='h-full block10 rounded-xl bg-slate-100 w-[350px] flex-grow-0 flex-shrink-0'></div>
        </motion.div>
      </div>
      <div className="h-[33vh] w-full">
        <motion.div
          className="h-full mt-3 w-auto gap-2 flex-nowrap flex"
          style={{ x: b }}
        >
          <div className='h-full block1 rounded-xl bg-slate-100 w-[350px] flex-grow-0 flex-shrink-0'></div>
          <div className='h-full block2 rounded-xl bg-slate-100 w-[350px] flex-grow-0 flex-shrink-0'></div>
          <div className='h-full block3 rounded-xl bg-slate-100 w-[350px] flex-grow-0 flex-shrink-0'></div>
          <div className='h-full block4 rounded-xl bg-slate-100 w-[350px] flex-grow-0 flex-shrink-0'></div>
          <div className='h-full block5 rounded-xl bg-slate-100 w-[350px] flex-grow-0 flex-shrink-0'></div>
          <div className='h-full block6 rounded-xl bg-slate-100 w-[350px] flex-grow-0 flex-shrink-0'></div>
          <div className='h-full block7 rounded-xl bg-slate-100 w-[350px] flex-grow-0 flex-shrink-0'></div>
          <div className='h-full block8 rounded-xl bg-slate-100 w-[350px] flex-grow-0 flex-shrink-0'></div>
          <div className='h-full block9 rounded-xl bg-slate-100 w-[350px] flex-grow-0 flex-shrink-0'></div>
          <div className='h-full block10 rounded-xl bg-slate-100 w-[350px] flex-grow-0 flex-shrink-0'></div>
        </motion.div>
      </div>
      
    </div>
    </>
  )
}

export default ScrollSlider