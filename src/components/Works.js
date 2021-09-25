import {React ,useState, useEffect, useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";import BoutonWorkMenu from "./BoutonWorkMenu";
import Work from './Work';


const workCapgemini = {
  company: "Capgemini",
  position: "Software Developer",
  date:"Oct. 2020 - Oct. 2021",
  missions: [
    "IA Division: development of models to analyze texts to predict labels, emotions, subjects",
    "Innovation Division: development of an application to retrieve posts on forums and analyze them",
    "IT-CE (bank): Test automation: creation, maintenance, execution of tests"
  ]
}

const workLBI= {
  company: "La Boîte Immo",
  position: "Software Developer ",
  date:"July 2020 - Oct. 2020",
  missions: [
    "gfdgfdgfdgfdg",
    "dsfdsffds",
    "fdsfdsfdsf"
  ]
}

const workIGA = {
  company: "Capgemini",
  position: "Software Developer",
  date:"April 2017 - June 2017",
  missions: [
    "gfdgfdgfdgfdg",
    "dsfdsffds",
    "fdsfdsfdsf"
  ]
}
function Works() {
  const [state, setState] = useState('capgemini')

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      "#works",
      {
        opacity: 1,
        x: -300
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: "#works",
          start:"top bottom",
          end: "top center",
          scrub: true
        }
      }
    );
  }, []);

  return (
    <section id="works" class="py-10">
      <div class="max-w-4xl mx-auto px-6 lg:px-0 ">
        <div className="flex items-center">
          <p className="text-3xl text-red-500">03.</p>
          <p className="text-xl sm:text-4xl sm:w-1/2 ml-5 font-bold text-gray-100">Where I worked</p>
        </div>
        <div className="flex flex-col sm:flex sm:flex-row my-10 sm:items-start">
          <div className="flex sm:flex sm:flex-col   overflow-x-auto  flex-none ">
            <BoutonWorkMenu onClick={ () => setState("capgemini")} companyName="CapGemini" />
            <BoutonWorkMenu onClick={ () => setState("laboiteimmo")} companyName="La Boîte Immo" />
            <BoutonWorkMenu onClick={ () => setState("iga")} companyName="IGA Voyage" />
          </div>
          {state === "capgemini" && <Work work={workCapgemini}/>}
          {state === "laboiteimmo" && <Work work={workLBI}/> }

        {state === "iga" && <Work work={workIGA}/>} 

       
          </div>

      </div>
    </section>
  );
}

export default Works;
