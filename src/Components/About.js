import React from "react";
import Photo from "../Assets/photo.png";
import Resume from "../Assets/Resume.pdf";
import { Styles } from "../Utils/Style";
import { TiArrowDownOutline } from "react-icons/ti";
import "../App.css";

const About = () => {
  return (
    <div
      className="flex flex-wrap justify-center items-center mt-10 p-10"
      id="Home"
    >
      <div className="flex-1 py-4">
        <span className={Styles.heroHeadText}>
          Hi, I'm <span className="text-orange-600">Mohan</span>
          <br />
          <span className={Styles.heroSubText}>
            I am a Full Stack Developer & <br /> Web Developer & Backend
            Developer
          </span>
        </span>
        <br />
        <div className="w-[14rem] mt-2">
          <a href={Resume} download="Resume" target="blank" rel="noreferrer">
            <div className="p-4 mt-2 w-[13rem] rounded-xl text-orange-500 flex justify-center border-2 border-orange-500 hover:border-violet-500 shadow-lg hover:shadow-pink-500">
              <TiArrowDownOutline className="text-lg mr-3 mt-1 text-orange-500"></TiArrowDownOutline>
              Resume
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap">
        <img src={Photo} alt="Photo" className="element object-contain p-4" />
      </div>
    </div>
  );
};

export default About;
