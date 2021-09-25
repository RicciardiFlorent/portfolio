import {React , useEffect, useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import photo from '../photo.png';

function AboutMe() {

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      "#aboutme",
      {
        opacity: 1,
        x: -300
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: "#aboutme",
          start:"top bottom",
          end: "top center",
          scrub: true
        }
      }
    );
  }, []);
  return (
    <section id="aboutme" class="py-12 " >
      <div class="max-w-4xl mx-auto px-6 lg:px-0 ">
        <div className="title flex items-center">
          <p className="text-3xl text-red-500">01.</p>
          <p className="text-xl sm:text-4xl sm:w-1/2 ml-5 font-bold text-gray-100 ">About Me</p>
        </div>

        <div className="sm:flex sm:items-center">
            <div className="sm:w-full my-8 text-justify">
                <p className="leading-relaxed text-gray-300"> Hello! My name is Florent, I am a freshly graduated software development engineer living in the South of France.<br/><br/>  
                My interest in programming started in 2014 in High School where I had an introduction to programming class during which I was able to develop my first program in Python.
                 It was a Space Invader! Crazy right?<br/><br/>  
                 After this first experience, I knew that I wanted to make a career out of it and I decided to continue my studies in computer science.<br/>
                Fast-forward to today, after many years of study and multiple internships, I have had the opportunity to acquire a wide range of skills.<br/><br/>
                Here are some of the skills I have acquired:
                 </p>
               
 

            </div>
            <img src={photo} className="w-2/3 mx-auto sm:w-60 sm:h-60 md:w-80 md:h-80 md:ml-20 rounded-bl-3xl rounded-tr-3xl shadow-lg  transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl " alt="fireSpot"/>
            
        </div>
        <div className=" ml-4 text-gray-300 space-y-2">

        <div className="flex text-sm"><p className="font-medium text-yellow-200 mr-2">Software programming:</p> <p>Java (Springboot), C, C++, Python, VB.NET</p></div>
        <div className="flex text-sm"><p className="font-medium text-yellow-200 mr-2">Web/Mobile programming:</p><p> JS, Angular, React, Node, PHP, Symfony, Kotlin</p></div>
        <div className="flex text-sm"><p className="font-medium text-yellow-200 mr-2">Databases:</p><p> SQL, Firebase, MongoDB</p></div>
        <div className="flex text-sm"><p className="font-medium text-yellow-200 mr-2">Others:</p><p>Git, ELK, Testing(UFT), Docker, AWS, IBM Cloud </p></div>




        </div>
      </div>
    </section>
  );
}

export default AboutMe;
