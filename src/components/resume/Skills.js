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
  const designSkills = [
    { title: "Web Development", percentage: "95%" },
    { title: "Web Design", percentage: "95%" },
    { title: "Mobile Application", percentage: "95%" },
    { title: "UI Design", percentage: "95%" },
  ];

  const languageSkills = [
    { title: "English", percentage: "95%" },
    { title: "Pashto", percentage: "95%" },
    { title: "Farsi", percentage: "95%" },
  ];

  return (
    <div className="w-full grid grid-cols-9 px-6">
      <SkillsColumn
        title="Design"
        icon={<SiArtstation />}
        skills={designSkills}
      />
      <div className="w-full h-full flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <SkillsColumn
        title="Knowledge"
        icon={<FaFlag />}
        skills={languageSkills}
      />
      <SkillsColumn
        title="Coding"
        icon={<SiArtstation />}
        skills={designSkills}
      />
      <div className="w-full h-full flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <SkillsColumn
        title="Languages"
        icon={<FaFlag />}
        skills={languageSkills}
      />
    </div>
  );
};

export default Skills;
