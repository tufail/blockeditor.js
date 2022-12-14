import React from 'react';
const TabletIcon = ({ width = 24, height = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M21.75,25H3.25A1.25,1.25,0,0,1,2,23.75V1.25A1.25,1.25,0,0,1,3.25,0h18.5A1.25,1.25,0,0,1,23,1.25v22.5A1.25,1.25,0,0,1,21.75,25ZM3.25,1A.25.25,0,0,0,3,1.25v22.5a.25.25,0,0,0,.25.25h18.5a.25.25,0,0,0,.25-.25V1.25A.25.25,0,0,0,21.75,1ZM20.5,20H4.5a.5.5,0,0,1-.5-.5V2.5A.5.5,0,0,1,4.5,2h16a.5.5,0,0,1,.5.5v17A.5.5,0,0,1,20.5,20ZM5,19H20V3H5Zm9,3.5v-1a.5.5,0,0,0-.5-.5h-2a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h2A.5.5,0,0,0,14,22.5Z"
      />
    </svg>
  );
};
export default TabletIcon;
