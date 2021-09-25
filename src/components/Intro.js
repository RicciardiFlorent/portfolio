import {React, useEffect} from "react";
import { gsap } from "gsap";
function Intro() {
  useEffect(() => {      
    gsap.from('#intro', {opacity: 0, y: -200, duration: 1, delay:2.0})
  }, []);

  return (
    <section  id="intro" className="py-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-0">
        <h4 className="test mb-3 text-yellow-200">Hi, my name is</h4>
        <h1 className=" mb-3 text-2xl sm:text-6xl font-black text-gray-200">Florent Ricciardi.</h1>
        <h1  className=" mb-8 text-2xl sm:text-6xl  font-black text-gray-400">
          I am a Software Engineer.
        </h1>
        <div className="w-full sm:w-1/2 mb-12">
          <p className=" leading-relaxed text-gray-300">
          Inventive and determined, I constantly try to get out of the box and go where I am not expected. Passionate about technologies, I decided to become a Software Engineer in order to be closer to the innovations that will constitute the world of tomorrow.
          </p>
        </div>
        <a href="#contact" className="btn getTouch inline-block  font-bold hover:bg-red-500 hover:bg-opacity-10  px-6 py-4 border text-yellow-200 border-yellow-200 rounded">
          Get In Touch
        </a>
      </div>
    </section>
  );
}

export default Intro;
