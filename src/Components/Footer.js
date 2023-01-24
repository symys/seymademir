import React from "react";
import linkedin from "../images/linkedin.png"
import github from "../images/github.png"
import behance from "../images/behance.png"


function Footer() {
  return (
    <div className="flex flex-row font-rubik text-lg ml-40 mt-6">
      <div className="flex flex-row gap-10 basis-3/4">
        <div className="w-8"><a href="https://www.linkedin.com/in/seymademir/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin"/></a></div>
        <div className="w-8"><a href="https://github.com/symys" target="_blank" rel="noreferrer"><img src={github} alt="linkedin"/></a></div>
        <div className="w-8"><a href="https://www.behance.net/seymademir" target="_blank" rel="noreferrer"><img src={behance} alt="linkedin"/></a></div>
      </div>

      {/* <div className="basis-1/4 mr-36">seymademir35@gmail.com</div> */}
    </div>
  );
}

export default Footer;
