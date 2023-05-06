import React, { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaUser } from "react-icons/fa";
import Left from "../components/home/Left";
import { IoIosPaper } from "react-icons/io";
import { MdOutlineClose, MdWork } from "react-icons/md";
import { SiGooglechat } from "react-icons/si";
import About from "../components/about/About";
import Resume from "../components/resume/Resume";
import { motion } from "framer-motion";
import Projects from "@/components/projects/Projects";
import Blog from "@/components/blog/Blog";
import Contact from "@/components/contact/Contact";
import Head from "next/head";
import Sidenav from "@/components/home/Sidenav";

const Home = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [projects, setProjects] = useState(false);
  const [blog, setBlog] = useState(false);
  const [contact, setContact] = useState(false);
  const [sidenav, setSidenav] = useState(false);
  const [blogRef, setBlogRef] = useState<React.RefObject<HTMLDivElement>>(
    React.createRef()
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node) &&
        !ref.current.isEqualNode(e.target as Node)
      ) {
        setSidenav(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMenuClick = (
    about: boolean | ((prevState: boolean) => boolean),
    resume: boolean | ((prevState: boolean) => boolean),
    projects: boolean | ((prevState: boolean) => boolean),
    blog: boolean | ((prevState: boolean) => boolean),
    contact: boolean | ((prevState: boolean) => boolean),
    postIndex?: number
  ) => {
    setAbout(about);
    setResume(resume);
    setProjects(projects);
    setBlog(blog);
    setContact(contact);
    if (postIndex !== undefined && blogRef.current) {
      const blogComponent = blogRef.current.querySelector("div");
      if (blogComponent) {
        const handlePostClick = (blogComponent as any).handlePostClick;
        if (handlePostClick) {
          handlePostClick(postIndex);
        }
      }
    }
  };

  return (
    <div className="w-[85%] h-[85%] bg-transparent text-white z-50 flex items-start justify-between">
      <Head>
        <title>Uzair Aqel - Portfolio</title>
        <link rel="icon" href="/online-resume.ico" />
      </Head>
      <div className="w-16 h-96 bg-transparent flex flex-col grap-4">
        <div className="w-full h-20 bg-bodyColor rounded-3xl flex justify-center items-center cursor-pointer group">
          <div
            ref={ref}
            onClick={() => setSidenav(true)}
            className="flex flex-col gap-1.5 overflow-hidden"
          >
            <span className="w-8 h-[2px] bg-textColor inline-block -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor"></span>
            <span className="w-8 h-[2px] bg-textColor inline-block group-hover:bg-designColor duration-300"></span>
            <span className="w-8 h-[2px] bg-textColor inline-block -translate-x-3.5 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor"></span>
          </div>
        </div>
        {sidenav && (
          <div className="w-full h-screen fixed top-0 left-0  bg-black bg-opacity-50 z-50">
            <div className="w-96 h-full relative">
              <motion.div
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full bg-bodyColor overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]"
              >
                <Sidenav
                  handleMenuClick={handleMenuClick}
                  handleBlogClick={(postIndex) =>
                    handleMenuClick(false, false, false, true, false, postIndex)
                  }
                />
                <span
                  onClick={() => setSidenav(false)}
                  className="absolute top-0 -right-16 w-12 h-12 bg-bodyColor text-2xl text-textColor hover:text-designColor duration-300 cursor-pointer flex items-center justify-center z-50"
                >
                  <MdOutlineClose />
                </span>
              </motion.div>
            </div>
          </div>
        )}
        <div className="w-full h-80 bg-bodyColor rounded-3xl py-6 flex flex-col items-center justify-between">
          <span
            onClick={() => handleMenuClick(true, false, false, false, false)}
            className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
          >
            <FaUser />
            <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
              About
            </span>
          </span>
          <span
            onClick={() => handleMenuClick(false, true, false, false, false)}
            className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
          >
            <IoIosPaper />
            <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
              Resume
            </span>
          </span>
          <span
            onClick={() => handleMenuClick(false, false, true, false, false)}
            className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
          >
            <MdWork />
            <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
              Projects
            </span>
          </span>
          <span
            onClick={() => handleMenuClick(false, false, false, true, false)}
            className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
          >
            <SiGooglechat />
            <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
              Blogs
            </span>
          </span>
          <span
            onClick={() => handleMenuClick(false, false, false, false, true)}
            className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
          >
            <FaEnvelope />
            <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
              Contact
            </span>
          </span>
        </div>
      </div>
      <div className="w-[94%] h-full bg-transparent flex items-center">
        <Left handleMenuClick={handleMenuClick} />
        <div className="w-8/12 h-[95%] bg-bodyColor">
          <div className="w-full h-[96%] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]">
            {about && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            )}
            {resume && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Resume />
              </motion.div>
            )}
            {projects && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Projects />
              </motion.div>
            )}
            {blog && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Blog />
              </motion.div>
            )}
            {contact && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
