import React from "react";
import { HERO_CONTENT }  from "../constants"
import profilepic from "../assets/intropic3.png"
import { motion } from "motion/react"

const Container =(Delay)=>({
  hidden: {x:-100, opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{delay:Delay, duration:0.5}
  }

});
const iconVar=(duration)=>({
  initial: {y:-15},
  animate:{
    y: [18,-18],
    transition:{
         duration: duration,
         ease: "linear",
         repeat: Infinity,
         repeatType: "reverse"
    }
  }
})

function Intro({lightmode, setlightmode}){
    return(
        <div className="border-b pb-4 border-neutral-900 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                       <motion.span variants={Container(0)} initial="hidden" animate="visible"  className={lightmode?"bg-gradient-to-r  from-neutral-600 via-yellow-800 to-amber-950 bg-clip-text text-5xl tracking-tight text-transparent":"bg-gradient-to-r  from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent "}>
                            Namaste,It's
                        </motion.span>
                        <motion.h1 variants={Container(0.5)} initial="hidden" animate="visible" className="pb-16 text-6xl font-thin tracking-tight lg:mt-5 lg:text-8xl">Sneha Sahu</motion.h1>
                        <motion.span variants={Container(1)} initial="hidden" animate="visible"  className={lightmode?"bg-gradient-to-r  from-neutral-600 via-yellow-800 to-amber-950 bg-clip-text text-3xl tracking-tight text-transparent":"bg-gradient-to-r  from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"}>
                            Full Stack Developer
                        </motion.span>
                        <motion.p variants={Container(1)} initial="hidden" animate="visible" className="my-2 max-w-xl py-6 font-lighter tracking- tighter">{HERO_CONTENT}</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-0">
                <div className="flex justify-center">
                <motion.div variants={iconVar(2.5)} initial="initial" animate="animate">
                  <motion.img initial={{x:100, opacity:0 }} animate={{x:0,opacity:1}} transition={{duration:1, delay:1.2}} className="w-125 rounded-2xl" src={profilepic} alt="Sneha Sahu"/>
                </motion.div>
                
                </div>

                </div>
            </div>
        </div>
    )
}
 export default Intro;