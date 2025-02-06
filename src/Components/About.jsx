import React from "react";
import aboutimg from "../assets/IMG20221231133523_01.jpg"
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

function About({lightmode,setlightmode}){
    return(
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="text-center my-20 text-4xl">About 
                <span className={lightmode?"text-yellow-800":"text-neutral-500"}> Me</span>
            </h1>
            <div className="flex flex-wrap">
                <motion.div 
                  whileInView={{opacity:1, x:0}}
                  initial={{x:-100, opacity:0}}
                  transition={{duratiion:0.5}}
                  className="w-full lg:p-8 lg:w-1/2">
                   <div className="flex items-center justify-center">
                       <img className=" h-120 w-120 rounded-2xl" src={aboutimg} alt="about"/>
                   </div>
                     
                </motion.div>
                <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{x:100, opacity:0}}
                    transition={{duratiion:0.7}}  
                    className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}
export default About;