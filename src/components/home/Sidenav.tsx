import React from 'react';
import SidenavTitle from './SidenavTitle';

type HandleMenuClickType = (arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean) => void;

interface SidenavProps {
  handleMenuClick: HandleMenuClickType;
  handleBlogClick: (postIndex: number) => void;
}

const Sidenav: React.FC<SidenavProps> = ({ handleMenuClick, handleBlogClick }) => {
  return (
    <div className='px-7 py-4'>
      <SidenavTitle title='M' subtitle='enu' />
      <ul>
        <li className='sidenavLi' onClick={() => handleMenuClick(false, false, false, true, false)}>
          Blog Page
        </li>
        <li className='sidenavLi' onClick={() => handleMenuClick(false, false, true, false, false)}>
          Portfolio Page
        </li>
      </ul>
      <SidenavTitle title='P' subtitle='rojects' />
      <ul>
        <a target='_blank' href="https://thynk.vercel.app">
        <li className='sidenavLi'>Product Analytics Web-Application</li>
        </a>
        <a target='_blank' href="https://comeandfindme.vercel.app">
        <li className='sidenavLi' id="sustainable-energy-website">Sustainable-Energy Website</li>
        </a>
        <a target='_blank' href="https://astarchildminding.vercel.app/">
        <li className='sidenavLi' id="childminding-website">Childminding Website</li>
        </a>
        <a target='_blank' href="https://github.com/aqeluk/virtualCafe">
        <li className='sidenavLi' id="java-virtual-cafe">Java Virtual Cafe</li>
        </a>
        <a target='_blank' href="https://github.com/aqeluk/PythonSciCalc">
        <li className='sidenavLi' id="python-scientific-calculator">Python Scientific Calculator</li>
        </a>
      </ul>
      <SidenavTitle title='B' subtitle='logs' />
      <ul>
        <li className='sidenavLi' onClick={() => handleBlogClick(0)}>
          AI, IT and Finance
        </li>
        <li className='sidenavLi' onClick={() => handleBlogClick(1)}>
          Natural Language Syntax
        </li>
        <li className='sidenavLi' onClick={() => handleBlogClick(2)}>
          Challenges of Building Real Solutions
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
