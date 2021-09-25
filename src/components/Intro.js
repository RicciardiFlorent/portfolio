import {React, useEffect, useRef} from "react";
import { gsap } from "gsap";
function Intro() {
  const boxRef = useRef(null);
  useEffect(() => {      
    gsap.from('#intro', {opacity: 0, y: -200, duration: 1, delay:2.0})
  }, []);

  return (
    <section  id="intro" class="py-20">
      <div class="max-w-5xl mx-auto px-6 lg:px-0">
        <h4 class="test mb-3 text-yellow-200">Hi, my name is</h4>
        <h1 class=" mb-3 text-2xl sm:text-6xl font-black text-gray-200">Florent Ricciardi.</h1>
        <h1  class=" mb-8 text-2xl sm:text-6xl  font-black text-gray-400">
          I am a Software Engineer.
        </h1>
        <div class="w-full sm:w-1/2 mb-12">
          <p class=" leading-relaxed text-gray-300">
            Lorem ipsum dolor sit amet, elit. Assumenda aut commodi culpa
            debitis dolores ducimus, ea eos inventore nostrum officia provident
            voluptatem voluptates. Deleniti, error.
          </p>
        </div>
        <a href="#contact" class="btn getTouch inline-block  font-bold hover:bg-red-500 hover:bg-opacity-10  px-6 py-4 border text-yellow-200 border-yellow-200 rounded">
          Get In Touch
        </a>
      </div>
    </section>
  );
}

export default Intro;
