import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import { FiMail, FiSend } from "react-icons/fi";
import Image from "next/image";

const Left = ({ handleMenuClick }) => {
  const [roles] = useTypewriter({
    words: [
      "Full-Stack Web Developer",
      "UI/UX Web Design Developer",
      "Backend Software Developer",
      "Software Engineer",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShadow z-10 flex flex-col justify-between overflow-hidden">
      <div className="w-full h-3/5">
        <Image
          className="w-full h-full object-cover rounded-2xl"
          src="/bannerImg.png"
          alt="bannerImage"
          loading="eager"
          width={400}
          height={500}
        />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">
            Uzair A. Popalzai
          </h1>
          <p className="test-base text-designColor tracking-wide">
            {roles} <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-8 mt-2">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <a target="_blank" href="https://github.com/aqeluk">
                <FaGithub />
              </a>
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/uzair-aqel-popalzai-9a213324/"
              >
                <FaLinkedin />
              </a>
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <a href="mailto:uzairpopalzai@hotmail.com">
                <FiMail />
              </a>
            </span>
          </div>
        </div>
        <div className="flex h-14">
          <a
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase gap-2 hover:text-designColor duration-300"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center borderRight items-center gap-2">
              Download CV <BsCloudLightningFill />
            </button>
          </a>
          <button
            onClick={() => handleMenuClick(false, false, false, false, true)}
            className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300"
          >
            Contact Me <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
