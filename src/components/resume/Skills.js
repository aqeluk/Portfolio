import React from "react";
import ResumeTitle from "./ResumeTitle";
import { SiArtstation } from "react-icons/si";
import { FaFlag } from "react-icons/fa";

const SkillItem = ({ title, percentage }) => (
  <div className="py-3 border-b-[1px] border-zinc-800">
    <p className="text-base text-textColor -mb-1.5">{title}</p>
    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
      <span
        className="w-[95%] h-full absolute top-0 left-0 bg-designColor"
        style={{ width: percentage }}
      ></span>
    </span>
  </div>
);

const SkillsColumn = ({ title, icon, skills }) => (
  <div className="col-span-4">
    <ResumeTitle title={title} icon={icon} />
    <div className="py-4">
      {skills.map((skill) => (
        <SkillItem key={skill.title} {...skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const codingSkills = [
    { title: "Python", percentage: "85%" },
    { title: "Java", percentage: "75%" },
    { title: "Go", percentage: "80%" },
    { title: "React/NextJS", percentage: "80%" },
    { title: "Tailwind-CSS", percentage: "85%" },
  ];

  const backendSkills = [
    { title: "Gin", percentage: "65%" },
    { title: "FastAPI", percentage: "85%" },
    { title: "Node.js", percentage: "55%" },
  ];

  const toolsSkills = [
    { title: "Docker", percentage: "75%" },
    { title: "MySQL", percentage: "80%" },
    { title: "PostgreSQL", percentage: "90%" },
    { title: "MongoDB", percentage: "70%" },
  ];
  
  const methodologiesSkills = [
    { title: "Jira", percentage: "85%" },
    { title: "Trac", percentage: "70%" },
    { title: "Git", percentage: "90%" },
    { title: "SVN", percentage: "75%" },
    { title: "Scrum", percentage: "80%" },
    { title: "Kanban", percentage: "95%" },
  ];


  return (
    <div className="w-full grid grid-cols-9 px-6">
      <SkillsColumn
        title="Coding"
        icon={<SiArtstation />}
        skills={codingSkills}
      />
      <div className="w-full h-full flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <SkillsColumn
        title="API Development"
        icon={<FaFlag />}
        skills={backendSkills}
      />
      <SkillsColumn
        title="Project Management"
        icon={<FaFlag />}
        skills={methodologiesSkills}
      />
      <div className="w-full h-full flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <SkillsColumn
        title="Tools"
        icon={<SiArtstation />}
        skills={toolsSkills}
      />
    </div>
  );
};

export default Skills;
