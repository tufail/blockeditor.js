import React from 'react';

import useEditor from '../../hooks/editor/useEditor';

const Spacer = () => {
  const { isEdit } = useEditor();

  if (isEdit) return <div>Spacer</div>;

  return <div>Normal Spacer</div>;
};

export default Spacer;
