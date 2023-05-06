import React from "react";
import Title from "../home/Title";
import ProjectCard from "./ProjectCard";
import aStar from "../../../public/astar.png";
import ecefgLogo from "../../../public/ecefglogo.png";
import ecefg from "../../../public/ecefg.png";
import littleHands from "../../../public/littleHandsLogo.png";
import thynkLogo from "../../../public/thynk.png";
import thynkApp from "../../../public/thynkapplication.png";
import thynkDocs from "../../../public/thynkdocs.png";
import thynk from "../../../public/thynkunlimited.png";
import virtualCafe from "../../../public/virtualCafe.png";
import PySciCalc from "../../../public/PySciCalc.png";
import thynkAPI from "../../../public/thynkapi.png"

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-2 gap-10">
        <div className="px-6">
          <ProjectCard
            title="Sustainable-Energy Website"
            category="Web Development"
            image="/ecefg.png"
            href="https://comeandfindme.vercel.app/"
          />
          <ProjectCard
            title="Java VirtualCafe"
            category="Backend Development"
            image="/virtualCafe.png"
            href="https://github.com/aqeluk/virtualCafe"
          />
          <ProjectCard
            title="Childminding Website"
            category="Web Development"
            image="/astar.png"
            href="https://astarchildminding.vercel.app/"
          />
          <ProjectCard
            title="Python Scientific Calculator"
            category="Backend XP Development"
            image="/PySciCalc.png"
            href="https://github.com/aqeluk/PythonSciCalc"
          />
          <ProjectCard
            title="Little Wonders"
            category="Logos and Marketing"
            image="/littleHandsLogo.png"
            href="/littleHandsLogo.png"
          />
          <ProjectCard
            title="ECEFG"
            category="Logos and Marketing"
            image="/ecefgLogo.png"
            href="/ecefgLogo.png"
          />
        </div>
        <div className="px-6">
          <Title title='THYNK' subTitle='Unlimited' />
          <ProjectCard
            title="Marketing Website"
            category="Web Development"
            image="/thynkunlimited.png"
            href="https://thynk.vercel.app/"
          />
          <ProjectCard
            title="Web Application"
            category="Full-Stack Development"
            image="/thynkapplication.png"
            href="https://thynk.vercel.app/dashboard"
          />
          <ProjectCard
            title="Application API"
            category="Backend Development"
            image="/thynkapi.png"
            href="https://thynkunlimited.herokuapp.com"
          />
          <ProjectCard
            title="Documentation Website"
            category="Full-Stack Development"
            image="/thynkdocs.png"
            href="https://thynk-docs.vercel.app/"
          />
          <ProjectCard
            title="THYNK"
            category="Logos and Marketing"
            image="/thynk.png"
            href="/thynk.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
