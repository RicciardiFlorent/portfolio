import {React , useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ItemProject from "./ItemProject";

const project1 = {
  title : "Linkedin clone",
  description : "The goal of this project was to build a replica of the Linkedin front-end. The site allows you to create an account, authenticate yourself and post messages. It has been entirely realized with Next.js, Redux and Firebase.",
  technologies : ["Next.js","Redux", "Firebase"],
  githubLink : "https://github.com/RicciardiFlorent/linkedin-clone-react",
  websiteLink : "https://linkedin-clone-c8607.web.app/"
}

const project2 = {
  title : "MERN Social Network",
  description : "This site allows to share memories. Users can create an account, authenticate themselves, post photos, like and comment, filter searches for memories. It was developed with the MERN stack.",
  technologies : ["React","Redux", "MongoDB", "Express", "Node", "Tailwind CSS", "JWT"],
  githubLink : "https://github.com/RicciardiFlorent/linkedin-clone-react",
  websiteLink : ""
}

const project3 = {
  title : "Incomm Front",
  description : "This site was created for the company InEvent to allow young people to search for jobs. Companies can directly post job offers on the site and people can apply for them. The front-end was developed in Angular.",
  technologies : ["Angular","Typescript"],
  githubLink : "https://github.com/Luciegaire/inCom",
}

const project4 = {
  title : "Incomm Back",
  description : "This API has been developed to manage the users, companies and job offers of the Incomm application that connects young people with companies. The backend was made with Node, Express and MySQL.",
  technologies : ["Node","Express", "MySQL"],
  githubLink : "https://github.com/RicciardiFlorent/incomm-api-node",
}

const project5 = {
  title : "BeNFit",
  description : "This project is a mobile application made in Kotlin. It allows a user to create his own workouts and share them with other users.",
  technologies : ["Kotlin","Firebase"],
  githubLink : "https://github.com/cedriccosson83/BeNFit",
}

const project6 = {
  title : "My Portfolio",
  description : "This portfolio was entirely designed and created by me. It allows me to present myself and my background. It also gives an overview of my skills and my projects that I have done. This site was built with React , Tailwind CSS and GSAP for animations",
  technologies : ["React","TailwindCSS", "GSAP"],
  githubLink : "https://github.com/RicciardiFlorent/portfolio",
}

function Projects() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      "#projects",
      {
        opacity: 1,
        x: -300
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: "#projects",
          start:"top bottom",
          end: "top center",
          scrub: true
        }
      }
    );
  }, []);

  return (
    <section id="projects" className="py-10 gs_reveal gs_reveal_fromLeft">
      <div className="max-w-4xl mx-auto px-6 lg:px-0 ">
        <div className="flex items-center">
          <p className="text-3xl text-red-500">04.</p>
          <p className="text-xl sm:text-4xl sm:w-1/2 ml-5 font-bold text-gray-100">
            Some Things I've Built
          </p>
        </div>
        <div
        className="flex overflow-x-scroll pb-10 hide-scroll-bar"
      >
        <div
          className="flex flex-nowrap mt-10 sm:opacity-50 sm:hover:opacity-100 group   "
        >
          <div className="hidden sm:block animate-pulse sm:group-hover:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 text-red-500 font-bold text-5xl">
             <div className="flex ">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
</svg>
             You can scroll 
             <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>
             </div>
             
          </div>
            <ItemProject project={project1}/>
            <ItemProject project={project2}/>
            <ItemProject project={project6}/>

            <ItemProject project={project5}/>
            <ItemProject project={project3}/>
            <ItemProject project={project4}/>

        </div>
      </div>
      </div>
    </section>
  );
}

export default Projects;
