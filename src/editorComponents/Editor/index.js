import React from 'react';
import Frame from 'react-frame-component';

import TopBar from '../TopBar';
import SideBar from '../SideBar';

const Editor = () => {
  const tri = () => {
    alert();
  };
  return (
    <React.Fragment>
      <TopBar />
      <SideBar />
      <Frame
        className={`be__frm ${'be__frm__desktop'} ${'be__frm__tablet'} ${'be__frm__mobile'}`}
        initialContent='<!DOCTYPE html><html><head><link href="./block-editor.css" rel="stylesheet" /></head><body><h1>i wont be changed</h1><div id="renderPage"></div></body></html>'
        mountTarget="#renderPage"
      >
        <div className="be__red" onClick={tri}>
          asdad
        </div>
      </Frame>
    </React.Fragment>
  );
};

export default Editor;
