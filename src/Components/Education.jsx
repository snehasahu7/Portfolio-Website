import React from "react";
import { motion } from "framer-motion";

function Education({lightmode, setlightmode}){
    return(
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1 whileInView={{opacity:1, y:0}}
            initial={{y:-100, opacity:0}}
            transition={{duratiion:1.5}} className="my-20 text-center text-4xl">Edu<span className={lightmode?"text-yellow-800":"text-neutral-500"}>cation</span></motion.h1>
            <div className="relative flex justify-center">

                 <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-400 "></div>
            <div className="flex flex-col lg:justify-center w-full">
                <div className="flex justify-start ">
                    <motion.div whileInView={{opacity:1, x:0}}
                    initial={{x:-100, opacity:0}}
                    transition={{duratiion:1.5}} 
                    className="lg:h-64 w-1/2 bg-slate-400 rounded-xl text-black shadow-xl shadow-gray-800 my-5 border-5 border-neutral-500 h-72">
                    <p className="px-5 my-10 text-left lg:text-2xl text-xs md:text-l ">Bishop Westcott Girls'School Doranda, Ranchi</p>
                    <h1 className="lg:text-lg font-bold px-5 text-left text-xs md:text-md sm:text-sm ">Class 10 : 91.8%</h1>
                    <h1 className="lg:text-lg font-bold px-5 text-left text-xs py-8 md:text-md sm:text-sm ">April 2007-March 2020</h1>
                    </motion.div>
                </div>
               
                <div className="flex justify-end ml-5px">
                <motion.div 
                     whileInView={{opacity:1, x:0}}
                     initial={{x:100, opacity:0}}
                     transition={{duratiion:1.5}} 
                    className="lg:h-64 w-1/2 bg-slate-400 rounded-xl text-black shadow-xl my-5 shadow-gray-800 border-5 border-neutral-500 h-72 ">
                    <p className="px-5 my-10 text-left text-xs lg:text-2xl md:text-l ">Jawahar Vidya Mandir Shyamali, Ranchi</p>
                    <h1 className="lg:text-lg font-bold px-5 text-left sm:text-sm text-xs md:text-md ">Class 12 : 88.8%</h1>
                    <h1 className="lg:text-lg font-bold px-5 text-left sm:text-sm text-xs py-8 md:text-md ">June 2020-March 2022</h1>
                </motion.div>
                </div>
                <motion.div 
                     whileInView={{opacity:1, x:0}}
                     initial={{x:-100, opacity:0}}
                     transition={{duratiion:1.5}} 
                    className="lg:h-64 w-1/2 bg-slate-400 rounded-xl text-black shadow-xl my-5 shadow-gray-800 border-5 border-neutral-500 h-72">
                    <p className="px-5 my-10 text-left text-sm text-xs lg:text-2xl md:text-l  ">Birla Institute of Technology Mesra, Ranchi</p>
                    <h1 className="lg:text-lg font-bold px-5 text-left sm:text-sm text-xs md:text-md ">B.Tech in CSE, CGPA: 8.98</h1>
                    <h1 className="lg:text-lg font-bold px-5 text-left sm:text-sm py-8 text-xs md:text-md ">November 2022-Present</h1>
                </motion.div>

            </div>
           
            </div>
        </div>
    )
}

export default Education;