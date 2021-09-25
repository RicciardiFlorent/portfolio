import { React, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Contact() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      "#contact",
      {
        opacity: 1,
        x: -300,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: "#contact",
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <section id="contact" class="py-10">
      <div class="max-w-xl mx-auto px-6 lg:px-0 ">
        <div className="flex items-center ">
          <p className="text-3xl text-red-500">05.</p>
          <p className="text-xl sm:text-4xl sm:w-1/2 ml-5 font-bold text-gray-100">
            Get In Touch
          </p>
        </div>

        <div className="text-center sm:items-center sm:flex flex-col">
          <div className="sm:w-full my-8 text-justify sm:text-center ">
            <p className="leading-relaxed text-gray-300">
              Have a question or want to work together? Feel free to contact me
              via email at <b>florentricciardi@gmail.com</b> or click on the button
              below!
            </p>
          </div>
          <a
            href="mailto: florentricciardi@gmail.com"
            class="btn inline-block  font-bold hover:bg-red-500 hover:bg-opacity-10  px-6 py-4 border text-yellow-200 border-yellow-200 rounded"
          >
            Contact Me!
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
