import React from 'react';
import { openLink } from '../utils/common';

const Nav = () => {
  return (
    <div className='max-w-6xl mx-auto px-8 w-full pb-2 pt-4'>
      <div className="flex flex-row justify-between md:space-x-8 lg:space-x-16 text-sm xs:text-lg md:text-2xl font-normal">
        <div className="cursor-pointer nav-item" onClick={openLink('/')} >
          About
        </div>
        <div className="cursor-pointer nav-item" onClick={openLink('/')} >
          Food
        </div>
        <div className="cursor-pointer nav-item" onClick={openLink('/')} >
          Music
        </div>
        <div className="cursor-pointer nav-item" onClick={openLink('/')} >
          Gallery
        </div>
        <div className="cursor-pointer nav-item" onClick={openLink('/')} >
          School
        </div>
        <div className="cursor-pointer nav-item" onClick={openLink('/')} >
          Work
        </div>
      </div>
    </div>
  );
};

export default Nav;
