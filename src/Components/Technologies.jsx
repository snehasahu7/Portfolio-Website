import React from "react";
import { RiReactjsLine } from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa"
import { SiNumpy } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";
import { animate, motion } from "framer-motion";

const iconVar=(duration)=>({
   initial: {y:-10},
   animate:{
     y: [10,-10],
     transition:{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse"
     }
   }
})

function Technologies({lightmode, setlightmode}){
    return(
        <div className="borber-b border-neutral-800 pb-24">
            <motion.h2 
            whileInView={{opacity:1, y:0}}
            initial={{y:-100, opacity:0}}
            transition={{duratiion:1.5}}
            className="text-4xl text-center my-20">
                Tech<span className={lightmode?"text-yellow-800":"text-neutral-500"}>nologies</span>
            </motion.h2>
            <motion.div whileInView={{opacity:1, x:0}}
                  initial={{x:-100, opacity:0}}
                  transition={{duratiion:1.5}} className="flex flex-wrap items-center justify-center gap-4"> 
                <motion.div 
                    variants={iconVar(2.5)}
                    animate="animate"
                    initial="initial"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                     <RiReactjsLine className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div 
                    variants={iconVar(3)}
                    animate="animate"
                    initial="initial"className="rounded-2xl border-4 border-neutral-800 p-4">
                     <FaNodeJs className="text-7xl text-green-600"/>
                </motion.div>
                <motion.div 
                    variants={iconVar(6)}
                    animate="animate"
                    initial="initial"className="rounded-2xl border-4 border-neutral-800 p-4">
                     < SiNumpy className="text-7xl text-cyan-700"/>
                </motion.div>
                <motion.div 
                    variants={iconVar(4)}
                    animate="animate"
                    initial="initial" className="rounded-2xl border-4 border-neutral-800 p-4">
                     <SiCss3 className="text-7xl text-purple-900"/>
                </motion.div>
                <motion.div 
                    variants={iconVar(1.8)}
                    animate="animate"
                    initial="initial"className="rounded-2xl border-4 border-neutral-800 p-4">
                     <BiLogoPostgresql className="text-7xl text-sky-700"/>
                </motion.div>
                <motion.div 
                    variants={iconVar(5)}
                    animate="animate"
                    initial="initial"className="rounded-2xl border-4 border-neutral-800 p-4">
                     <BiLogoMongodb className="text-7xl text-green-500"/>
                </motion.div>

            </motion.div>
        </div>
    )
}

export default Technologies;