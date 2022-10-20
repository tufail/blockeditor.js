import React, { useState } from 'react';
import Frame from 'react-frame-component';
import { useSelector, useDispatch } from 'react-redux';

import {
  changeDevice,
  selectSettingsList,
} from 'editor/redux/reducers/settings';
import TopBar from '../TopBar';
import SideBar from '../SideBar';
import Spacer from '../../components/spacer';

const Editor = () => {
  const { activeDevice } = useSelector(selectSettingsList);
  const dispatch = useDispatch();

  const deviceSwitcher = (type = 'lg') => {
    dispatch(changeDevice(type));
  };

  return (
    <React.Fragment>
      <TopBar deviceSwitcherHanlder={deviceSwitcher} />
      <SideBar />
      <div className="be__page-editor">
        <Frame
          className={`be__frm${
            activeDevice === 'lg' ? ' be__frm--desktop' : ''
          }${activeDevice === 'md' ? ' be__frm--tablet' : ''}${
            activeDevice === 'sm' ? ' be__frm--mobile' : ''
          }`}
          initialContent='<!DOCTYPE html><html><head><link href="./block-editor.css" rel="stylesheet" /></head><body><h1>i wont be changed</h1><div id="renderPage"></div></body></html>'
          mountTarget="#renderPage"
        >
          <div className="be__red">
            <Spacer />
          </div>
        </Frame>
      </div>
    </React.Fragment>
  );
};

export default Editor;
