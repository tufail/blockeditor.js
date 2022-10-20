import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import store from '../redux';
import Editor from '../editorComponents/Editor';

import 'editor/sass/block-editor.scss';
const editorDiv = document.querySelector('#be-js-root');

(async function main() {
  const root = createRoot(editorDiv);

  try {
    if (!editorDiv) {
      throw new PageError('could not find #be-js-root');
    }
    root.render(
      <Provider store={store}>
        <Editor />
      </Provider>,
    );
    // ReactDOM.render(<Editor />, editorDiv);
  } catch (e) {
    const message = 'Something went wrong';
    console.log(message);
  }
})();
