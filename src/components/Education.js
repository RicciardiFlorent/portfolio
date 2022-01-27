import {React , useEffect} from "react";
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
        <section id="education" className="py-10 ">
      <div className="max-w-3xl mx-auto px-6 lg:px-0 ">
        <div className="flex items-center">
          <p className="text-3xl text-red-500">02.</p>
          <p className="text-xl sm:text-4xl sm:w-1/2 ml-5 font-bold text-gray-100">Where I studied</p>
        </div>

        <div className="my-10">
        <div
            className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50"
          >
            <div className="flex flex-row-reverse md:contents">
              <div
                className="bg-gray-800  bg-opacity-50 border-2 border-yellow-200 border-dashed col-start-1 col-end-5 p-4  my-4 ml-auto  rounded-br-xl rounded-tl-xl transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <p className="font-semibold leading-tight text-left sm:text-right text-red-500 ">
                  2018 - 2021
                </p>
                <h3 className="font-bold text-lg mb-1 text-yellow-200 ">ISEN Engineering School</h3>
                <p className="font-semibold leading-tight text-left text-gray-100 ">
                  Toulon, France
                </p>

                <p className="leading-tight text-left text-gray-100">
                Master BIG DATA and Software Development
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-yellow-200 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-yellow-200 shadow"
                ></div>
              </div>
            </div>
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-yellow-200 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-yellow-200 shadow"
                ></div>
              </div>
              <div
                className="bg-gray-800  bg-opacity-50 border-2 border-yellow-200 border-dashed col-start-6 col-end-10 p-4 my-4 mr-auto shadow-md rounded-bl-xl rounded-tr-xl transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl"
              >
                           
                <p className="font-semibold leading-tight text-left  text-red-500 ">
                  Sept 2019 - Février 2020
                </p>
                <h3 className="font-bold text-lg text-left sm:text-right mb-1 text-yellow-200 ">ITMO University</h3>

                <p className="leading-tight sm:text-justify  text-gray-100">
                Exchange program "Technology and Innovation Business in Russia"
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse md:contents">
              <div
                className="bg-gray-800  bg-opacity-50 border-2 border-yellow-200 border-dashed col-start-1 col-end-5 p-4  my-4 ml-auto shadow-md rounded-br-xl rounded-tl-xl transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl"
              >
                
                <p className="font-semibold leading-tight text-left sm:text-right text-red-500 ">
                  2017 - 2018
                </p>
                <h3 className="font-bold text-lg mb-1 text-yellow-200 ">Faculté des Sciences de Luminy</h3>
                <p className="leading-tight sm:text-justify text-gray-100">
                Bachelor's degree in computer science

                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center text-gray-900 ">
                  <div className="h-full w-1 bg-yellow-200 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-yellow-200 shadow"
                ></div>
              </div>
            </div>
           
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-yellow-200 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-yellow-200 shadow"
                ></div>
              </div>
              
              <div
                className="bg-gray-800  bg-opacity-50 border-2 border-yellow-200 border-dashed col-start-6 col-end-10 p-4  my-4 mr-auto shadow-md rounded-bl-xl rounded-tr-xl transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl"
              >
                           
                <p className="font-semibold leading-tight text-left  text-red-500 ">
                  2015 - 2017
                </p>
                <h3 className="font-bold text-lg mb-1 text-left sm:text-right text-yellow-200 ">IUT Aix-Marseille</h3>

                <p className="leading-tight sm:text-justify text-gray-100">
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
