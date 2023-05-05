import React from 'react';

const AboutMe = () => {
  return (
    <div className="flex pb-6">
      <div className="w-1/2 text-zinc-400 p-6 borderRight flex flex-col">
        <div className="py-6">
          <h2 className="font-semibold mb-1 text-lg">Welcome!</h2>
          <p className="text-base leading-6">
            {"I'm Uzair, your go-to UK-based Full-Stack Developer, adept in React/NextJS, Python, Java, and Go. Dive into my portfolio, and let's transform intricate concepts into seamless solutions."}
          </p>
        </div>
      </div>
      <div className="w-1/2 p-6">
        <ul>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>23
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>London/Essex
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Availability:</span>Moderate
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>London, UK
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
