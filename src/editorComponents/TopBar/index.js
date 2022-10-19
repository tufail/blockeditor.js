import React from 'react';

import DesktopIcon from '../../icons/DeskTopIcon';

const TopBar = ({ deviceSwitcherHanlder }) => {
  return (
    <div className="be__topbar">
      <div className="be__topbar__toolbar">
        <span onClick={() => deviceSwitcherHanlder('lg')}>
          <DesktopIcon />
        </span>
        <span onClick={() => deviceSwitcherHanlder('md')}>
          <DesktopIcon />
        </span>
        <span onClick={() => deviceSwitcherHanlder('sm')}>
          <DesktopIcon />
        </span>
      </div>
    </div>
  );
};

export default TopBar;
