import React from "react";
import seymaImg from "../Seyma Demir_Turkey_2022.jpg";

function HomePage() {
  return (
    <>
      <div className="flex flex-row font-rubik justify-around mt-20">
        <div className="self-center tracking-wider">
          <div className="text-6xl tracking-widest">
            I'm <strong>Şeyma Demir</strong>
          </div>
          <div className="text-3xl mt-6">Frontend Developer</div>
          <div className="flex flex-row gap-6 mt-10 self-center font-rubik text-lg">
            <div>Projects</div>
            <div>Contact</div>
          </div>
        </div>
        <div>
          <img
            src={seymaImg}
            alt="personal_img"
            className="w-[30em] rounded-full"
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
