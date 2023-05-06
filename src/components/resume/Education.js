import React from 'react'
import { MdWork } from 'react-icons/md'
import ResumeCard from './ResumeCard'
import ResumeTitle from "./ResumeTitle"
import { GiGraduateCap } from 'react-icons/gi'

const Education = () => {
  const parseDescription = (description) => {
    return description.split('\n').map((item, index) => (
      <React.Fragment key={index}>
        {item}
        <br />
      </React.Fragment>
    ));
  };
  return (
    <div className='w-full grid grid-cols-9 px-6'>
        <div className='col-span-4'>
            <ResumeTitle title="Experience" icon={<MdWork />} />
            <ResumeCard
            badge="2022-Present"
            title="Product Sourcing Manager"
            subTitle="Incommercial UK Ltd"
            des={parseDescription("• Successfully sourced and negotiated with suppliers to obtain high-quality products at competitive prices for Incommercial's e-commerce store \n • Established and maintained strong relationships with suppliers, ensuring timely delivery and effective communication \n • Managed inventory levels to optimize stock availability and prevent stockouts, contributing to a seamless customer experience")}
            />
            <ResumeCard
            badge="2021 - 2023"
            title="Supervisor/Delivery Driver"
            subTitle="Multiple Stores between London, Colchester and Bury St. Edmunds"
            des={parseDescription("•	Engaged clients to create rapport and establish long-term customer relationships through prompt and courteous service \n •	Promoted to Supervisor within 6 months due to exceptional performance and leadership across the stores \n •	Managed daily operations, including opening the restaurant, overseeing stock, and delegating tasks to staff")}
            />
            <ResumeCard
             badge="2020 - 2021"
             title="Assistant Store Manager"
             subTitle="Dough&co/Burger Amour"
             des={parseDescription("Progressed from supervisor at Dough&Co/Burger Amour Colchester to BA Bury St. Edmunds \n • Successfully kept service disruption at a minimal while increasing revenue by 10% throughout the exit of the pandemic and in line with government regulations \n • Developed an effective training program for team members to thrive for optimal satisfaction in service")}
             />
        </div>
        <div className='w-full h-full flex justify-center items-center'>
          <span className='w-[1px] h-full bg-zinc-800 inline-flex'></span>
        </div>
        <div className='col-span-4'>
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
            <ResumeCard
            badge="2019-Present"
            title="Computer Science BSc"
            subTitle="University of Essex"
            des="Final-Year Undergraduate expecting a First Class Honours"
            />
            <ResumeCard
             badge="2016 - 2018"
             title="A Levels"
             subTitle="Woodhouse College"
             des="BBB in Mathematics w/ Statistics, Psychology, and Chemistry; B in AS Biology"
             />
             <ResumeCard
             badge="2011 - 2016"
             title="GCSE"
             subTitle="Hendon School"
             des="10A*-A with A* in Maths (achieved in 2015) and A in English"
             />
        </div>
    </div>
  )
}

export default Education