import React from 'react';

import DesktopIcon from '../../icons/DeskTopIcon';
import MobileIcon from '../../icons/MobileIcon';
import TabletIcon from '../../icons/TabletIcon';

const TopBar = ({ deviceSwitcherHanlder }) => {
  return (
    <div className="be__topbar">
      <div>Logo</div>
      <div className="be__topbar__toolbar">
        <span onClick={() => deviceSwitcherHanlder('lg')} title="Desktop view">
          <DesktopIcon />
        </span>
        <span onClick={() => deviceSwitcherHanlder('md')} title="Tablet view">
          <TabletIcon />
        </span>
        <span
          onClick={() => deviceSwitcherHanlder('sm')}
          title="Smart phone view"
        >
          <MobileIcon />
        </span>
      </div>
      <div>Logo</div>
    </div>
  );
};

export default TopBar;
