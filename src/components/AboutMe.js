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
                <p className="leading-relaxed text-gray-300">Lorem ipsum dolor sit amet, elit. Assumenda aut commodi culpa debitis dolores ducimus, ea eos inventore nostrum officia provident voluptatem voluptates. Deleniti, error.
                Lorem ipsum dolor sit amet, elit. Assumenda aut commodi culpa debitis dolores ducimus, ea eos inventore nostrum officia provident voluptatem voluptates. Deleniti, error.
                Lorem ipsum dolor sit amet, elit. Assumenda aut commodi culpa debitis dolores ducimus, ea eos inventore nostrum officia provident voluptatem voluptates. Deleniti, error.
                Lorem ipsum dolor sit amet, elit. Assumenda aut commodi culpa debitis dolores ducimus, ea eos inventore nostrum officia provident voluptatem voluptates. Deleniti, error.
                 </p>
            </div>
            <img src={photo} className="w-2/3 mx-auto sm:w-60 sm:h-60 md:w-80 md:h-80 md:ml-20 rounded-bl-3xl rounded-tr-3xl shadow-lg  transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl " alt="fireSpot"/>
        
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
