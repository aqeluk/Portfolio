import React from 'react'
import { MdWork } from 'react-icons/md'
import ResumeCard from './ResumeCard'
import ResumeTitle from "./ResumeTitle"
import { GiGraduateCap } from 'react-icons/gi'

const Education = () => {
  return (
    <div className='w-full grid grid-cols-9 px-6'>
        <div className='col-span-4'>
            <ResumeTitle title="Experience" icon={<MdWork />} />
            <ResumeCard
            badge=""
            title="Senior Back-End Developer"
            subTitle="Aqel UK"
            des="Running a team of junior developers"
            />
            <ResumeCard
             badge="2009 - 2010"
             title="Supervisor"
             subTitle="Maemes Piri Piri"
             des="Supervised the store"
             />
        </div>
        <div className='w-full h-full flex justify-center items-center'>
          <span className='w-[1px] h-full bg-zinc-800 inline-flex'></span>
        </div>
        <div className='col-span-4'>
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
            <ResumeCard
            badge=""
            title="Computer Science BSc"
            subTitle="University of Essex"
            des="Final-Year Undergraduate"
            />
            <ResumeCard
             badge="2016 - 2018"
             title="A Levels"
             subTitle="Woodhouse College"
             des="Biology, Chemistry, Mathematics, Psychology"
             />
        </div>
    </div>
  )
}

export default Education