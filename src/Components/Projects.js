import React from "react";
import adviceImg from "../images/advice.JPG";
import todoImg from "../images/todo.JPG";
import healingImg from "../images/healing.JPG";
import movieImg from "../images/movie.JPG";
import madlibsImg from "../images/madlibs.JPG";
import minionsImg from "../images/minions.JPG"

function Projects() {
  return (
    <div className="pt-20 font-rubik" id="latestprojects">
      <h1 className="tracking-wider lg:text-4xl text-2xl flex justify-center mt-16">
        Latest Projects
      </h1>
      <div className="flex flex-col mt-16">
        <div className="flex lg:flex-row flex-col justify-between pl-20 pr-20">
          <div class="flex lg:pr-0 pr-10">
            <div class="rounded-lg shadow-lg bg-white max-w-sm ">
              <img
                class="rounded-t-lg"
                src={healingImg}
                alt="adviceProject_image"
              />

              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2 justify-center flex">
                  Online Therapist
                </h5>
                <p class="text-gray-700 text-base mb-4 text-sm">
                This project is the capstone project of Recoded bootcamp and it was developed with a group of 5 people. The draft of the project was given in Figma and consisted of 30 pages. We created a responsive online therapist site in 7 weeks using React, Firebase, Redux, JEST, Tailwind and necessary technologies. The project can be experienced live on Netlify.
                </p> 
                <div className="flex flex-row justify-between pl-16 pr-16 pt-28">
                <a href="https://main--jocular-kitsune-979dd9.netlify.app/">
                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    DEMO
                  </button>
                </a>
                <a href="https://github.com/Recoded-Spark-Turkey-2022/RE-Minded">
                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    CODE
                  </button>
                </a></div>
              </div>
            </div>
          </div>
          <div class="flex lg:pr-0 pr-10 lg:pt-0 pt-10">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <img class="rounded-t-lg" src={todoImg} alt="" />

              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2 justify-center flex">
                  To-Do App
                </h5>
                <p class="text-gray-700 text-base mb-4 text-sm">
                I aimed to learn React and Redux usage in depth with this project. Used technologies are React, Redux and Tailwind. The tasks are kept in 4 different categories. categories are taken from Eisenhover matrix and users can filter tasks by categories. They can add a new task or delete a task. For those who want to learn the Eisenhover matrix in detail, there is a "See Groups" button on the main page and it leads to a page describing the matrix. In addition, summary information has been added to the category filtering buttons in the section where the tasks are added.
                </p> 
                <div className="flex flex-row justify-between pl-16 pr-16 pt-12">
                <a href="https://effervescent-longma-4868ea.netlify.app/">
                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    DEMO
                  </button>
                </a>
                <a href="https://github.com/symys/todoapp">
                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    CODE
                  </button>
                </a></div>
              </div>
            </div>
          </div>
          <div class="flex  lg:pt-0 pt-10 ">
            <div class="rounded-lg shadow-lg bg-white  max-w-sm">
              <img class="rounded-t-lg" src={adviceImg} alt="" />

              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2 justify-center flex">
                  Random Advice App
                </h5>
                 <p class="text-gray-700 text-base mb-4 text-sm">
                 A challenge from Frontend Mentor is to build out this advice generator app using the Advice Slip API and get it looking as close to the design as possible. Used technologies are HTML, CSS and JavaScript. It gets random advice from the API with fetch, and the advice changes every time when users click the dice. It was designed to make it compatible with different devices by making a responsive design. 
                </p> 
                <div className="flex flex-row justify-between pl-16 pr-16 pt-28">
                <a href="https://nimble-wisp-86e992.netlify.app/">
                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    DEMO
                  </button>
                </a>
                <a href="https://github.com/symys/advice-app">
                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    CODE
                  </button>
                </a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between pl-20 pr-20 pt-16">
          <div class="flex lg:pt-0 pt-10">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <img class="rounded-t-lg" src={movieImg} alt="" />

              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2 justify-center flex">
                  Movie Project
                </h5>
                 <p class="text-gray-700 text-base mb-4 text-sm">
                 It is a Re:Coded group project with 4 people. It aims to teach DOM manipulation deeply and get data with fetching in JS. Used technologies are JS, HTML, CSS. There is a welcome page at the entrance. In the home page users can see popular films from The Movie Database API. Films can be listed according to their genres, popularity, rated. In addition to these users can list actors. Every actor has an actor detail page which displays biography and films of actor. Like actor detail page, every film has film detail page which contains film details, overview, production companies, actors, trailer and similar films.
                </p> 
                <div className="flex flex-row justify-between pl-16 pr-16 pt-12">
                <a href="https://recoded-spark-turkey-2022.github.io/movie-project-playing-our-way/">
                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    DEMO
                  </button>
                  
                </a>
                <a href="https://github.com/Recoded-Spark-Turkey-2022/movie-project-playing-our-way">
                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    CODE
                  </button>
                  
                </a></div>
              </div>
            </div>
          </div>
          <div class="flex lg:pt-0 pt-10">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <img class="rounded-t-lg" src={madlibsImg} alt="" />

              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2 justify-center flex">
                  Mad Libs Game
                </h5>
                 <p class="text-gray-700 text-base mb-4 text-sm">
                  It is a Re:Coded group project. Used technologies are HTML, CSS and JS. The logic is to complete the given story with filling the blanks to your imagination. When you open the project page you will see 2 same stories with blanks. You can write your own story with editing left paragraph. During editing proccess you will see the changes in the right paragraph synchronously. If you want to reset the game you should just click the “Reset” button top of the editing part.
                </p> 
                <div className="flex flex-row justify-between pl-16 pr-16 pt-28">
                  <a href="https://recoded-spark-turkey-2022.github.io/mad-libs-los-galacticos/">
                    <button
                      type="button"
                      class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      DEMO
                    </button>
                  </a>
                  <a href="https://github.com/Recoded-Spark-Turkey-2022/mad-libs-los-galacticos">
                    <button
                      type="button"
                      class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      CODE
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="flex lg:pt-0 pt-10">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <img class="rounded-t-lg" src={minionsImg} alt="" />

              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2 justify-center flex">
                  Minion Toys Shop
                </h5>
                <p class="text-gray-700 text-base mb-4 justify-center flex text-sm">
                  *Currently I'm working on this project using Angular
                </p> 
                <div className="flex flex-row justify-between pl-16 pr-16 pt-72">
                  <a href="https://roaring-khapse-667b6e.netlify.app/">
                    <button
                      type="button"
                      class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      DEMO
                    </button>
                  </a>
                  <a href="https://github.com/symys/minions">
                    <button
                      type="button"
                      class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      CODE
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
