import React from 'react';
import { openLink } from '../utils/common';

const Nav = () => {
  return (
    <div className="flex flex-row space-x-4">
      <div className="cursor-pointer" onClick={openLink('/')} >
        <a>Home</a>
      </div>
      <div className="cursor-pointer" onClick={openLink('/about')} >
        <a>About</a>
      </div>
    </div>
  );
};

export default Nav;
