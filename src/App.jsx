import React , {useState, useEffect} from "react";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Education from "./Components/Education";

function App(){
  const [lightmode, setlightmode]=useState(false);
     
    useEffect(()=>{
      if(lightmode){
          document.body.classList.add("light");
          document.body.classList.remove("dark");
      }
      else{
        document.body.classList.add("dark");
        document.body.classList.remove("light");
      }
    },[lightmode])

  return(
    
      <div className={lightmode? "bg-yellow-200 text:black" :"overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900" }>
      <div className="fixed top-0 -z-10 h-full w-full">
         <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] "></div>
      </div>

     
      <div className="container mx-auto px-10">
           <Navbar lightmode={lightmode} setlightmode={setlightmode}/>
           <Intro lightmode={lightmode} setlightmode={setlightmode}/>
           <About lightmode={lightmode} setlightmode={setlightmode}/>
           <Education lightmode={lightmode} setlightmode={setlightmode}/>
           <Technologies lightmode={lightmode} setlightmode={setlightmode}/>
           <Projects lightmode={lightmode} setlightmode={setlightmode}/>
           <Contact lightmode={lightmode} setlightmode={setlightmode}/>
      </div>
       
    </div>
    
    
  )
}

export default App;