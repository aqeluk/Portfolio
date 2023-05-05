import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { TbServerCog } from 'react-icons/tb'
import { SiTestcafe } from 'react-icons/si'
import ServiceCard from "./ServiceCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-2">
      <ServiceCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="Crafting engaging web experiences for marketing, apps, e-commerce, and documentation"
      />
      <ServiceCard
        icons={<MdOutlineSettingsApplications />}
        title="Full-Stack Development"
        subTitle="Bespoke full-stack solutions, tailored to fulfill your unique vision"
      />
      <ServiceCard
        icons={<TbServerCog />}
        title="Backend Development"
        subTitle="Robust and scalable backend solutions for seamless web and app functionality"
      />
      <ServiceCard
        icons={<SiTestcafe />}
        title="Testing & Documentation"
        subTitle="Ensuring quality and clarity with thorough testing and comprehensive documentation"
      />
    </div>
  );
};

export default MyServices;
