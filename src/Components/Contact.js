import React from 'react'
import linkedin from "../images/linkedin.png"
import github from "../images/github.png"
import behance from "../images/behance.png"

function Contact() {
  return (
    <div className="flex flex-col font-rubik text-lg self-center lg:mt-40 mt-20" id='contact'>
      <h1 className="font-rubik tracking-wider text-4xl flex self-center mt-28">Contact</h1>
      <div className="flex flex-row gap-10 mt-20 self-center">
        <div className="w-8"><a href="https://www.linkedin.com/in/seymademir/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin"/></a></div>
        <div className="w-8"><a href="https://github.com/symys" target="_blank" rel="noreferrer"><img src={github} alt="linkedin"/></a></div>
        <div className="w-8"><a href="https://www.behance.net/seymademir" target="_blank" rel="noreferrer"><img src={behance} alt="linkedin"/></a></div>
      </div>
      <h3 className='flex self-center mt-10'>OR</h3>
        <div className="text-xl mt-6 flex self-center mb-40">seymademir35@gmail.com</div>

      {/* <div className="basis-1/4 mr-36">seymademir35@gmail.com</div> */}
    </div>
  )
}

export default Contact