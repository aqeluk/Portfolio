import React from 'react'
import FunCard from './FunCard'
import { FaUniversity } from 'react-icons/fa'
import { AiOutlineFundProjectionScreen, AiFillCode } from 'react-icons/ai'
import { MdBusinessCenter } from 'react-icons/md'

const FunFact = () => {
  return (
    <div className='px-0 grid grid-cols-4 pb-10'>
        <FunCard icon={<FaUniversity />} des="BSc First Class Honours" />
        <FunCard icon={<AiOutlineFundProjectionScreen />} des="5 Finished Projects" />
        <FunCard icon={<AiFillCode />} des="Over 1000 hours of coding" />
        <FunCard icon={<MdBusinessCenter />} des="Director of AQEL UK" />
    </div>
  )
} 

export default FunFact