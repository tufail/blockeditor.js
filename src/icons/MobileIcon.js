import React from 'react';
const MobileIcon = ({ width = 24, height = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          fill="currentColor"
          d="M21,2H11A5,5,0,0,0,6,7V25a5,5,0,0,0,5,5H21a5,5,0,0,0,5-5V7A5,5,0,0,0,21,2ZM19,4a1,1,0,0,1-1,1H14a1,1,0,0,1-1-1Zm5,21a3,3,0,0,1-3,3H11a3,3,0,0,1-3-3V7a3,3,0,0,1,3-3,3,3,0,0,0,3,3h4a3,3,0,0,0,3-3,3,3,0,0,1,3,3Z"
        />
        <path
          fill="currentColor"
          d="M17,25H15a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"
        />
      </g>
    </svg>
  );
};
export default MobileIcon;
