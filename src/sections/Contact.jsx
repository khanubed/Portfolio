
import React from 'react'
import ContactForm from '../components/ContactForm'
import { useRef } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import spiral from "../assets/elements/spiral.png"
import hologram from "../assets/elements/hologram.png"

const Contact = () => {

    const parentRef = useRef(null);

    {/* Graphics elements */}
    const spiralRef = useRef(null);
      const { scrollYProgress: spiralScrollY } = useScroll({
          target: parentRef,
          offset: ["start 60%", "start 25%"]
      });
      const spiralX = useTransform(spiralScrollY, [0, 1], [-200, 15]);

    const hologramRef = useRef(null);
      const { scrollYProgress: hologramScrollY } = useScroll({
          target: parentRef,
          offset: ["start 60%", "start start"]
      });
      const hologramX = useTransform(hologramScrollY, [0, 1], [1400, 1000]);
      const hologramRotate = useTransform(hologramScrollY, [0, 1], [0, 180]);

    {/* TEXT REVEAL */ }
    
    const { scrollYProgress : textScrollY } = useScroll({
    target: parentRef,
    offset: ['start 60% ', 'start 25%'],
  });

  // Slide in the mask from right to left
  const maskX = useTransform(textScrollY, [0, 1], ['100%', '0%']);

      //  const parallaxRef = useRef(null);
      const { scrollYProgress: parallaxScroll } = useScroll({
        target: parentRef ,
        offset: ['start end', 'end start'],
    });
      const parallaxY = useTransform(parallaxScroll, [0, 1], [0, -100 * (1.2)]);
    

    // RANDOM REPEL EFFECT 
    const getRandomRepel = () => {
        const angle = Math.random() * 2 * Math.PI;
        const distance = 15 + Math.random() * 15; // 15px to 30px (less movement)
        return {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        };
    };  

  return (
    <>    
    <section id='contact' ref={parentRef} className='h-[95vh] relative bg-white w-screen'>

        {/* Graphics elements */}
        <div className='relative  top-[23%]' >
              <motion.img
                              ref={spiralRef}
                              src={spiral}
                              alt="spiral"
                              transition={{ duration: 0.6, ease: "easeOut" }}

                              className="absolute z-50 opacity-100  left-50 w-[200px] h-[200px] md:w-[250px] md:h-[250px] m-4 pointer-events-none select-none"
                              style={{ x: spiralX , y: parallaxY }}
                          /></div>
        <div className='relative  top-[10%]'>
              <motion.img
                              ref={hologramRef}
                              src={hologram}
                              alt="hologram"
                              transition={{ duration: 0.6, ease: "easeOut"  }}
                              className="absolute opacity-100  right-50 w-[200px] h-[200px] md:w-[250px] md:h-[250px] m-4 pointer-events-none select-none"
                              style={{ x: hologramX , y: parallaxY , rotate: hologramRotate }}
                          /></div>

        {/* CENTER CONTENT */}


        <div className='h-[95vh] w-screen flex  justify-center items-center'>
            <div className='w-full h-[600px] items-center  flex gap-8 justify-center'>
                <div className='flex  items-center relative overflow-hidden h-[500px] w-[500px]  max-w-[500px] '>
                    <motion.div className=' bg-white absolute   right-0 z-10 h-[50dvh] w-[500px] max-w-[500px]'
                    style={{ width: maskX }}></motion.div>
                    <div className='flex flex-col  absolute  right-0 gap-6 h-[50dvh] w-[500px] justify-center items-end'>                    
                        <span className='republica text-5xl'>LET'S BUILD</span>
                        <span className='republica text-5xl'>SOMETHING</span>
                        <span className='republica text-5xl'>COOL TOGETHER</span>
                        <span className=' text-3xl'>ubedkhan7529@gmail.com</span>
                    </div>
                </div>
                <div>
                        <ContactForm></ContactForm>
                </div>  
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact