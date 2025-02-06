import React, { useEffect, useState } from "react";
import logo from "../assets/kevinRushLogo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { MdOutlineNightlight } from "react-icons/md";


function Navbar({lightmode, setlightmode}){
  
  
    return (
        <nav className=" mb-20 flex items-center justify-between py-6">
          <div className="flex flex-shrink-0 items-center">
            
            <a href="App.jsx"><h1 className={lightmode?"mx-2 text-4xl text-amber-950 cursor-pointer":"mx-2 text-4xl text-neutral-300 cursor-pointer"}>Ss</h1></a>

          </div>
          <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <button onClick={()=>setlightmode(!lightmode)} className="cursor-pointer">{lightmode?<MdOutlineNightlight/>:<CiLight/>}</button>
            <a href="https://www.linkedin.com/in/sneha-sahu-889352287/"><FaLinkedin/></a>
            <a href="https://github.com/snehasahu7"><FaGithub/></a>
            <a href="https://www.instagram.com/_.this.is.sneha._/?next=%2F"><FaInstagram/></a>
            
          </div>
        </nav>
    )
    
}

export default Navbar;