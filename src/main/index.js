import React from 'react';
import { createRoot } from 'react-dom/client';

import Editor from '../editorComponents/Editor';

import 'editor/sass/block-editor.scss';
const editorDiv = document.querySelector('#be-js-root');

(async function main() {
  const root = createRoot(editorDiv);

  try {
    if (!editorDiv) {
      throw new PageError('could not find #be-js-root');
    }
    root.render(<Editor />);
    // ReactDOM.render(<Editor />, editorDiv);
  } catch (e) {
    const message = 'Something went wrong';
    console.log(message);
  }
})();
