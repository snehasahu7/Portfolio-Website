import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

function Contact({lightmode, setlightmode}){
    return(
        <div className="border-b pb-20 border-neutral-900">
             <motion.h1 whileInView={{opacity:1, y:0}}
                  initial={{y:-100, opacity:0}}
                  transition={{duratiion:0.5}}
                  className="my-10 text-center text-4xl">
                 Get In <span className={lightmode?"text-yellow-800":"text-neutral-500"}>Touch</span>
             </motion.h1>
             <div className="text-center tracking-tighter">
                <motion.p 
                   whileInView={{opacity:1, x:0}}
                   initial={{x:-100, opacity:0}}
                   transition={{duratiion:1}}
                   className="my-4">
                    {CONTACT.address}
                </motion.p>
                <motion.p whileInView={{opacity:1, x:0}}
                  initial={{x:-100, opacity:0}}
                  transition={{duratiion:1}}
                  className="my-4">
                    {CONTACT.phoneNo}
                </motion.p>
                <a href="mailto:snehasahu990@gmail.com" className="border-b">{CONTACT.email}</a>
               
             </div>
        </div>
        
    )
}

export default Contact;