import React, { useState } from 'react';
import Frame from 'react-frame-component';

import TopBar from '../TopBar';
import SideBar from '../SideBar';

const Editor = () => {
  const [deviceSize, setDeviceSize] = useState('lg');

  const deviceSwitcher = (type = 'lg') => {
    setDeviceSize(type);
  };

  return (
    <React.Fragment>
      <TopBar deviceSwitcherHanlder={deviceSwitcher} />
      <SideBar />
      <div className="be__page-editor">
        <Frame
          className={`be__frm${deviceSize === 'lg' ? ' be__frm--desktop' : ''}${
            deviceSize === 'md' ? ' be__frm--tablet' : ''
          }${deviceSize === 'sm' ? ' be__frm--mobile' : ''}`}
          initialContent='<!DOCTYPE html><html><head><link href="./block-editor.css" rel="stylesheet" /></head><body><h1>i wont be changed</h1><div id="renderPage"></div></body></html>'
          mountTarget="#renderPage"
        >
          <div className="be__red">asdad</div>
        </Frame>
      </div>
    </React.Fragment>
  );
};

export default Editor;
