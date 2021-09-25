import {React , useEffect, useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Education() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      "#education",
      {
        opacity: 1,
        x: -300
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: "#education",
          start:"top bottom",
          end: "top center",
          scrub: true
        }
      }
    );
  }, []);
    return (
        <section id="education" class="py-10 ">
      <div class="max-w-3xl mx-auto px-6 lg:px-0 ">
        <div className="flex items-center">
          <p className="text-3xl text-red-500">02.</p>
          <p className="text-xl sm:text-4xl sm:w-1/2 ml-5 font-bold text-gray-100">Where I studied</p>
        </div>

        <div className="my-10">
        <div
            class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50"
          >
            <div class="flex flex-row-reverse md:contents">
              <div
                class="bg-gray-800  bg-opacity-50 border-2 border-yellow-200 border-dashed col-start-1 col-end-5 p-4  my-4 ml-auto  rounded-br-xl rounded-tl-xl transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <p class="font-semibold leading-tight text-left sm:text-right text-red-500 ">
                  2018 - 2021
                </p>
                <h3 class="font-bold text-lg mb-1 text-yellow-200 ">ISEN Engineering School</h3>
                <p class="font-semibold leading-tight text-left text-gray-100 ">
                  Toulon, France
                </p>

                <p class="leading-tight text-left text-gray-100">
                Master BIG DATA and Software Development
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-yellow-200 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-yellow-200 shadow"
                ></div>
              </div>
            </div>
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-yellow-200 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-yellow-200 shadow"
                ></div>
              </div>
              <div
                class="bg-gray-800  bg-opacity-50 border-2 border-yellow-200 border-dashed col-start-6 col-end-10 p-4 my-4 mr-auto shadow-md rounded-bl-xl rounded-tr-xl transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl"
              >
                           
                <p class="font-semibold leading-tight text-left  text-red-500 ">
                  2018 - 2021
                </p>
                <h3 class="font-bold text-lg text-left sm:text-right mb-1 text-yellow-200 ">ITMO University</h3>

                <p class="leading-tight sm:text-justify  text-gray-100">
                Exchange program "Technology and Innovation Business in Russia"
                </p>
              </div>
            </div>
            <div class="flex flex-row-reverse md:contents">
              <div
                class="bg-gray-800  bg-opacity-50 border-2 border-yellow-200 border-dashed col-start-1 col-end-5 p-4  my-4 ml-auto shadow-md rounded-br-xl rounded-tl-xl transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl"
              >
                
                <p class="font-semibold leading-tight text-left sm:text-right text-red-500 ">
                  2018 - 2021
                </p>
                <h3 class="font-bold text-lg mb-1 text-yellow-200 ">Faculté des Sciences de Luminy</h3>
                <p class="leading-tight sm:text-justify text-gray-100">
                Bachelor's degree in computer science

                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center text-gray-900 ">
                  <div class="h-full w-1 bg-yellow-200 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-yellow-200 shadow"
                ></div>
              </div>
            </div>
           
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-yellow-200 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-yellow-200 shadow"
                ></div>
              </div>
              
              <div
                class="bg-gray-800  bg-opacity-50 border-2 border-yellow-200 border-dashed col-start-6 col-end-10 p-4  my-4 mr-auto shadow-md rounded-bl-xl rounded-tr-xl transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl"
              >
                           
                <p class="font-semibold leading-tight text-left  text-red-500 ">
                  2018 - 2021
                </p>
                <h3 class="font-bold text-lg mb-1 text-left sm:text-right text-yellow-200 ">IUT Aix-Marseille</h3>

                <p class="leading-tight sm:text-justify text-gray-100">
                    DUT in Computer Science (technology degree)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Education
