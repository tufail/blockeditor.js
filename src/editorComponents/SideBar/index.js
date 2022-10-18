import React from 'react';

import PlusIcon from 'editor/icons/PlusIcon';

const SideBar = () => {
  return (
    <div className="be__sidebar">
      <div className="be__sidebar__item" title="Add Elements">
        <PlusIcon />
      </div>
    </div>
  );
};

export default SideBar;
