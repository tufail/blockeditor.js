import React from 'react';

const TopBar = ({ deviceSwitcherHanlder }) => {
  return (
    <div className="be__topbar" onClick={() => deviceSwitcherHanlder('md')}>
      top bar
    </div>
  );
};

export default TopBar;
