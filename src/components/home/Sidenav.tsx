import React from 'react'
import SidenavTitle from './SidenavTitle'

const Sidenav = () => {
  return (
    <div className='px-7 py-4'>
        <SidenavTitle title='M' subtitle='enu' />
        <ul>
            <li className='sidenavLi'>Blog Page</li>
            <li className='sidenavLi'>Portfolio Page</li>
        </ul>
        <SidenavTitle title='P' subtitle='rojects' />
        <ul>
            <li className='sidenavLi'>Product Analytics Web-Application</li>
            <li className='sidenavLi'>Sustainable-Energy Website</li>
            <li className='sidenavLi'>Java Virtual Cafe</li>
            <li className='sidenavLi'>Childminding Website</li>
            <li className='sidenavLi'>Python Scientific Calculatr</li>
        </ul>
        <SidenavTitle title='B' subtitle='logs' />
        <ul>
            <li className='sidenavLi'>AI, IT and Finance</li>
            <li className='sidenavLi'>Natural Language Syntax</li>
            <li className='sidenavLi'>Challenges of Building Real Solutions</li>
        </ul>
    </div>
  )
}

export default Sidenav