import React from "react";
import { GrLinkedinOption, GrMail, GrGithub } from "react-icons/gr";
import { BiSolidPhoneCall } from "react-icons/bi";

function Footer() {
  return (
    <div>
      <div className="w-[screen] bg-black flex flex-row justify-around flex flex-wrap p-3">
        <div className="flex flex-row flex-wrap justify-around p-2">
          <a
            href="https://www.linkedin.com/in/mohan-kandukoori"
            target="blank"
            className="text-lg flex flex-row text-violet-300"
          >
            <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400">
              <GrLinkedinOption className="text-white"></GrLinkedinOption>
            </div>
            <span className="text-white ml-1 mt-[0.1rem]">Linkedin</span>
          </a>
        </div>

        <div className="flex flex-row flex-wrap justify-around p-2">
          <a
            href="//"
            target="blank"
            className="text-lg flex flex-row text-violet-300"
          >
            <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400">
              <GrMail className="text-white"></GrMail>
            </div>
            <span className="text-white ml-1 mt-[0.1rem]">
              mohankandukoori23@gmail.com
            </span>
          </a>
        </div>

        <div className="flex flex-row flex-wrap justify-around p-2">
          <a
            href="//"
            target="blank"
            className="text-lg flex flex-row text-violet-300"
          >
            <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400">
              <BiSolidPhoneCall className="text-white"></BiSolidPhoneCall>
            </div>
            <span className="text-white ml-1 mt-[0.1rem]">+91 9177901774</span>
          </a>
        </div>

        <div className="flex flex-row flex-wrap justify-around p-2">
          <a
            href="https://github.com/mohan-23"
            target="blank"
            className="text-lg flex flex-row text-violet-300"
          >
            <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400">
              <GrGithub className="text-white"></GrGithub>
            </div>
            <span className="text-white ml-1 mt-[0.1rem]">Github</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
