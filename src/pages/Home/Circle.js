import React from 'react'
import { motion } from 'framer-motion';

export default function Curicle() {
  return (
    <motion.div className='relative flex 
    
    justify-center items-center' 
    initial= {{ opacity:0}}
    animate={{
        scale:[1,1.2,1] ,
        opacity:[0.1 ,0.2, 0.4, 0.8,0.1 , 1.0],
    }}
    transition={{
        duration:2.5,
    }}>
        {/* <div className='absolute border border-[#333333] rounded-full
         h-[350px] w-[350px] animate-ping mt-52'></div> */}
        {/* <div className='absolute border border-[#333333] rounded-full
         h-[430px] w-[430px] -ping mt-52'></div> */}
        <motion.div className='absolute border border-[#333333] rounded-full
        h-[270px] w-[270px] md:h-[500px] md:w-[500px] -ping mt-52 md:mr-[55px]'  
         initial= {{ opacity:0}}
         animate={{
             scale:[1,1.2,1] ,
             opacity:[0.1 ,0.2, 0.4, 0.8,0.1 , 1.0 ,0],
         }}
         transition={{
             duration:2.5,
         }}></motion.div>
        {/* <motion.div
           initial= {{ opacity:0}}
           animate={{
               opacity:[0.1 ,0.2, 0.4, 0.8,0.1 , 1.0 ,0],
           }}
           transition={{
               duration:2.5,
           }}
            className='absolute border border-yellow-500  sm:block  rounded-full
         h-[450px] w-[450px] animate-pulse mt-56 opacity-20'></motion.div> */}

    </motion.div>
  )
}
