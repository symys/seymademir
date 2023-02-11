import React from "react";
import adviceImg from "../images/advice.JPG";
import todoImg from "../images/todo.JPG";
import healingImg from "../images/healing.JPG";
import movieImg from "../images/movie.JPG";
import madlibsImg from "../images/madlibs.JPG";

function Projects() {
  return (
    <div className="pt-20 font-rubik" id="latestprojects">
      <h1 className="tracking-wider text-4xl flex justify-center mt-16">
        Latest Projects
      </h1>
      <div className="flex flex-col mt-16">
        <div className="flex flex-row justify-between pl-20 pr-20">
          <div class="flex ">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <img
                class="rounded-t-lg"
                src={healingImg}
                alt="adviceProject_image"
              />

              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  Online Therapist
                </h5>
                <p class="text-gray-700 text-base mb-4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="flex flex-row justify-between pl-16 pr-16">
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
          <div class="flex ">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <img class="rounded-t-lg" src={todoImg} alt="" />

              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  To-Do App
                </h5>
                <p class="text-gray-700 text-base mb-4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="flex flex-row justify-between pl-16 pr-16">
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
          <div class="flex ">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <img class="rounded-t-lg" src={adviceImg} alt="" />

              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  Random Advice App
                </h5>
                <p class="text-gray-700 text-base mb-4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="flex flex-row justify-between pl-16 pr-16">
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
        <div className="flex flex-row justify-between pl-20 pr-20 pt-16">
          <div class="flex ">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <img class="rounded-t-lg" src={movieImg} alt="" />

              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  Movie Project
                </h5>
                <p class="text-gray-700 text-base mb-4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="flex flex-row justify-between pl-16 pr-16">
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
          <div class="flex ">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <img class="rounded-t-lg" src={madlibsImg} alt="" />

              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  Mad Libs Game
                </h5>
                <p class="text-gray-700 text-base mb-4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="flex flex-row justify-between pl-16 pr-16">
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
          <div class="flex ">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <img class="rounded-t-lg" src={madlibsImg} alt="" />

              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  Mad Libs Game
                </h5>
                <p class="text-gray-700 text-base mb-4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="flex flex-row justify-between pl-16 pr-16">
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
        </div>
      </div>
    </div>
  );
}

export default Projects;
