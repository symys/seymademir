import React from "react";
import seymaImg from "../Seyma Demir_Turkey_2022.jpg";

function HomePage() {
  return (
    <>
      <div className="flex lg:flex-row flex-col font-rubik justify-evenly lg:mt-20 mt-10">
        <div className=" flex flex-col self-center justify-center tracking-wider lg:ml-0 ml-4 mr-4">
          <div className="lg:text-6xl text-3xl tracking-widest lg:mt-0 mt-10">
            Hi! I'm <strong>Şeyma Demir</strong>
          </div>
          <div className="lg:text-3xl text-xl mt-6">Frontend Developer</div>
          <div className="flex flex-row gap-16 mt-10 font-rubik lg:text-lg">
            <a href="#latestprojects">
              <div>Projects</div>
            </a>
            <a href="#contact">
              {" "}
              <div>Contact</div>
            </a>
          </div>
        </div>
        <div className="self-center flex">
          <img
            src={seymaImg}
            alt="personal_img"
            className="lg:w-[30em] w-[15em] rounded-full lg:ml-0 lg:ml-16 lg:mt-0 mt-10"
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
