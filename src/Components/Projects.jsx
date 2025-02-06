import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

function Projects({lightmode, setlightmode}){
    return(
       <div className="border-b border-neutral-900 pb-4 ">
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{y:-100, opacity:0}}
        transition={{duratiion:0.5}}
        className="my-20 text-center text-4xl">
            Pro<span className={lightmode?"text-yellow-800":"text-neutral-500"}>jects</span>
        </motion.h1>
        <div>
            {PROJECTS.map((Projects,index)=>(
               <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                  <motion.div whileInView={{opacity:1, x:0}}
                  initial={{x:-100, opacity:0}}
                  transition={{duratiion:1}} className="w-full lg:w-1/4">
                     <img src={Projects.image} width={200} height={200} alt={Projects.title} className="mb-6 rounded border-2"/>
                  </motion.div>
                  <motion.div whileInView={{opacity:1, x:0}}
                  initial={{x:100, opacity:0}}
                  transition={{duratiion:1}} className="w-full max-w-xl lg:w-3/4">
                     <h6 className="mb-5 text-2xl font-semibold">{Projects.title}</h6>
                     <p className={lightmode?"mb-4 text-yellow-800":"mb-4 text-neutral-400"}>{Projects.description}</p>
                     {Projects.technologies.map((tech,index)=>(
                        <span key={index} className={lightmode?"mr-2 bg-neutral-900 px-2 py-1 rounded text-sm font-medium text-amber-800":"mr-2 bg-neutral-900 px-2 py-1 rounded text-sm font-medium text-purple-900"}>
                            {tech}
                        </span>
                     ))}
                  </motion.div>
                  
                </div>
            ))}
        </div>
       </div>
    )
}

export default Projects;