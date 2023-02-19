import React from "react";
import adviceImg from "../images/advice.JPG";
import todoImg from "../images/todo.JPG";
import healingImg from "../images/healing.JPG";
import movieImg from "../images/movie.JPG";
import madlibsImg from "../images/madlibs.JPG";
import minionsImg from "../images/minions.JPG";
import homebtn from "../images/homebutton.png"

const projects = [
  {
    title: "Online Therapist",
    imgSrc: healingImg,
    description:
      "This project is the capstone project of Recoded bootcamp and it was developed with a group of 5 people. The draft of the project was given in Figma and consisted of 30 pages. We created a responsive online therapist site in 7 weeks using React, Firebase, Redux, JEST, Tailwind and necessary technologies. The project can be experienced live on Netlify.",
    demoLink: "https://main--jocular-kitsune-979dd9.netlify.app/",
    codeLink: "https://github.com/Recoded-Spark-Turkey-2022/RE-Minded",
  },
  {
    title: "To-Do App",
    imgSrc: todoImg,
    description:
      "I aimed to learn React and Redux usage in depth with this project. Used technologies are React, Redux and Tailwind. The tasks are kept in 4 different categories. categories are taken from Eisenhover matrix and users can filter tasks by categories. They can add a new task or delete a task. For those who want to learn the Eisenhover matrix in detail, there is a See Groups button on the main page and it leads to a page describing the matrix. In addition, summary information has been added to the category filtering buttons in the section where the tasks are added.",
    demoLink: "https://effervescent-longma-4868ea.netlify.app/",
    codeLink: "https://github.com/symys/todoapp",
  },
  {
    title: "Random Advice App",
    imgSrc: adviceImg,
    description:
      "A challenge from Frontend Mentor is to build out this advice generator app using the Advice Slip API and get it looking as close to the design as possible. Used technologies are HTML, CSS and JavaScript. It gets random advice from the API with fetch, and the advice changes every time when users click the dice. It was designed to make it compatible with different devices by making a responsive design.",
    demoLink: "https://nimble-wisp-86e992.netlify.app/",
    codeLink: "https://github.com/symys/advice-app",
  },
  {
    title: "Movie Project",
    imgSrc: movieImg,
    description:
      "It is a Re:Coded group project with 4 people. It aims to teach DOM manipulation deeply and get data with fetching in JS. Used technologies are JS, HTML, CSS. There is a welcome page at the entrance. In the home page users can see popular films from The Movie Database API. Films can be listed according to their genres, popularity, rated. In addition to these users can list actors. Every actor has an actor detail page which displays biography and films of actor. Like actor detail page, every film has film detail page which contains film details, overview, production companies, actors, trailer and similar films.",
    demoLink:
      "https://recoded-spark-turkey-2022.github.io/movie-project-playing-our-way/",
    codeLink:
      "https://github.com/Recoded-Spark-Turkey-2022/movie-project-playing-our-way",
  },
  {
    title: "Mad Libs Game",
    imgSrc: madlibsImg,
    description:
      "It is a Re:Coded group project. Used technologies are HTML, CSS and JS. The logic is to complete the given story with filling the blanks to your imagination. When you open the project page you will see 2 same stories with blanks. You can write your own story with editing left paragraph. During editing proccess you will see the changes in the right paragraph synchronously. If you want to reset the game you should just click the “Reset” button top of the editing part.",
    demoLink:
      "https://recoded-spark-turkey-2022.github.io/mad-libs-los-galacticos/",
    codeLink:
      "https://github.com/Recoded-Spark-Turkey-2022/mad-libs-los-galacticos",
  },
  {
    title: "Minion Toys Shop",
    imgSrc: minionsImg,
    description: "*Currently I'm working on this project using Angular",
    demoLink: "https://roaring-khapse-667b6e.netlify.app/",
    codeLink: "https://github.com/symys/minions",
  },
];

function Projects() {
  return (
    <div className="pt-20 font-rubik" id="latestprojects">
      <h1 className="tracking-wider lg:text-4xl text-2xl flex justify-center mt-10">
        Latest Projects
      </h1>
      <div className="mt-10 flex lg:flex-row flex-col flex-wrap justify-evenly">
        {projects.map((project) => (
          <div className="flex  pl-6 pr-6">
            <div className=" flex flex-col rounded-lg shadow-lg bg-white max-w-sm mt-10">
              <div className="basis-1/3">
                <img
                  className="rounded-t-lg"
                  src={project.imgSrc}
                  alt={project.title}
                />
              </div>

              <div className="p-6 basis-3/4">
                <h5 className="text-gray-900 text-xl font-medium mb-2 justify-center flex">
                  {project.title}
                </h5>
                <div className="flex text-gray-700 text-base mb-4 text-sm">
                  {project.description}
                </div>
              </div>

              <div className="flex flex-row place-content-evenly pb-10 ">
                <a href={project.demoLink}>
                  <button
                    type="button"
                    className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    DEMO
                  </button>
                </a>
                <a href={project.codeLink}>
                  <button
                    type="button"
                    className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    CODE
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex items-center flex-col">
      <a title="GO HOME PAGE" href="#homepage"><img src={homebtn} alt="homebtn" className="w-10 opacity-50 hover:opacity-100 hover:cursor-pointer mt-10 "/></a>
      <div className="flex mt-4 text-gray-400 font-bold tracking-wider">GO HOME</div> 
      </div>*/}
    </div>
  );
}

export default Projects;
