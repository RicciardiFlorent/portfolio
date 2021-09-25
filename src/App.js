import {React, useEffect} from "react";
import { gsap } from "gsap";

import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Works from "./components/Works";

function App() {

  const loading = true;
  const color = "#FDE68A";
  useEffect(() => {      
    gsap.fromTo('.loader1 ', {opacity: 1}, {opacity: 1, y:-1000, duration: 0.5, delay:1.6})
    gsap.fromTo('.loader2 ', {opacity: 1}, {opacity: 1, y:-1000, duration: 0.5, delay:1.8})
    gsap.fromTo('.loader3 ', {opacity: 1}, {opacity: 1, y:-1000, duration: 0.5, delay:2.0})
    gsap.fromTo('.socials ', {opacity: 1 , y:400}, {opacity: 1, y:0, duration: 0.5, delay:2.0})
    gsap.fromTo('.mail ', {opacity: 1 , y:400}, {opacity: 1, y:0, duration: 0.5, delay:2.0})

  }, []);

  
  return (
    <div className=" app w-full h-full bg-gray-900 ">
      <div className="hidden loader1 bg-gray-800 opacity-50 fixed sm:flex justify-center items-center w-1/3 h-full z-40">
      </div>
      <div className=" loader2 bg-gray-800 opacity-50 fixed sm:left-1/3 flex justify-center items-center sm:w-1/3 w-full h-full z-40">
      <ClimbingBoxLoader className="align-middle" color={color} loading={loading} size={20} />
      </div>
      <div className="hidden loader3 bg-gray-800 opacity-50 fixed left-2/3 sm:flex justify-center items-center w-1/3 h-full z-40">
      </div>

      <Navbar />
      <Intro />
      <AboutMe />
      <Education />
      <Works />
      <Projects />
      <Contact/>

      <div className="socials hidden lg:flex flex-col items-center fixed left-9 bottom-0 space-y-4">
        <a
          href="https://github.com/RicciardiFlorent?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className="w-7 h-7 fill-current text-yellow-200 transform hover:text-red-500 transition duration-500 ease-in-out  hover:-translate-y-2"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
          >
            <path d="M10.07 20.503a1 1 0 0 0-1.18-.983c-1.31.24-2.963.276-3.402-.958a5.708 5.708 0 0 0-1.837-2.415 1.2 1.2 0 0 1-.167-.11 1 1 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.004.815.81 1.338 1.141 1.514a4.44 4.44 0 0 1 .924 1.36c.365 1.023 1.423 2.576 4.466 2.376l.003.098.004.268a1 1 0 0 0 2 0l-.005-.318c-.005-.19-.012-.464-.012-1.182ZM20.737 5.377c.032-.125.063-.264.09-.42a6.278 6.278 0 0 0-.408-3.293 1.002 1.002 0 0 0-.615-.58c-.356-.12-1.67-.357-4.184 1.25a13.87 13.87 0 0 0-6.354 0C6.762.75 5.455.966 5.102 1.079a.997.997 0 0 0-.631.584 6.3 6.3 0 0 0-.404 3.357c.025.127.051.246.079.354a6.27 6.27 0 0 0-1.256 3.83 8.422 8.422 0 0 0 .043.921c.334 4.603 3.334 5.984 5.424 6.459a4.591 4.591 0 0 0-.118.4 1 1 0 0 0 1.942.479 1.678 1.678 0 0 1 .468-.878 1 1 0 0 0-.546-1.745c-3.454-.395-4.954-1.802-5.18-4.899a6.61 6.61 0 0 1-.033-.738 4.258 4.258 0 0 1 .92-2.713 3.022 3.022 0 0 1 .195-.231 1 1 0 0 0 .188-1.025 3.388 3.388 0 0 1-.155-.555 4.094 4.094 0 0 1 .079-1.616 7.543 7.543 0 0 1 2.415 1.18 1.009 1.009 0 0 0 .827.133 11.777 11.777 0 0 1 6.173.001 1.005 1.005 0 0 0 .83-.138 7.572 7.572 0 0 1 2.406-1.19 4.04 4.04 0 0 1 .087 1.578 3.205 3.205 0 0 1-.169.607 1 1 0 0 0 .188 1.025c.078.087.155.18.224.268A4.122 4.122 0 0 1 20 9.203a7.039 7.039 0 0 1-.038.777c-.22 3.056-1.725 4.464-5.195 4.86a1 1 0 0 0-.546 1.746 1.63 1.63 0 0 1 .466.908 3.06 3.06 0 0 1 .093.82v2.333c-.01.648-.01 1.133-.01 1.356a1 1 0 1 0 2 0c0-.217 0-.692.01-1.34v-2.35a4.881 4.881 0 0 0-.155-1.311 4.256 4.256 0 0 0-.116-.416 6.513 6.513 0 0 0 5.445-6.424A8.697 8.697 0 0 0 22 9.203a6.13 6.13 0 0 0-1.263-3.826Z" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/florent-ricciardi/" rel="noreferrer" target="_blank"> 

        <svg
          className="w-7 h-7 fill-current text-yellow-200 transform hover:text-red-500 transition duration-500 ease-in-out  hover:-translate-y-2"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M160.007812 423h-70V197h70zm6.984376-298.003906C166.992188 102.367188 148.632812 84 126.015625 84 103.3125 84 85 102.367188 85 124.996094 85 147.632812 103.3125 166 126.015625 166c22.617187 0 40.976563-18.367188 40.976563-41.003906zM422 298.664062C422 237.996094 409.183594 193 338.3125 193c-34.054688 0-56.914062 17.03125-66.246094 34.742188H272V197h-68v226h68V310.789062c0-29.386718 7.480469-57.855468 43.90625-57.855468 35.929688 0 37.09375 33.605468 37.09375 59.722656V423h69zM512 452V60c0-33.085938-26.914062-60-60-60H60C26.914062 0 0 26.914062 0 60v392c0 33.085938 26.914062 60 60 60h392c33.085938 0 60-26.914062 60-60zM452 40c11.027344 0 20 8.972656 20 20v392c0 11.027344-8.972656 20-20 20H60c-11.027344 0-20-8.972656-20-20V60c0-11.027344 8.972656-20 20-20zm0 0" />
        </svg> </a>
        <div className="w-1 h-28  border-l-2 border-yellow-200"></div>
      </div>

      <div className="mail hidden lg:flex flex-col items-center fixed -right-9 bottom-0 space-y-4">
        <a
          className="transform  rotate-90 mb-20 	text-yellow-200 hover:text-red-500 transition duration-500 ease-in-out  hover:-translate-y-2"
          href="mailto: florentricciardi@gmail.com"
        >
          florentricciardi@gmail.com
        </a>
        <div className="w-1 h-28  border-l-2 border-yellow-200"></div>
      </div>

      <div className="text-center leading-none  sm:mt-24 pb-2">
        <p className="font-light text-sm text-gray-100">
          Designed and Built by Florent Ricciardi
        </p>
      </div>
    </div>
  );
}

export default App;
