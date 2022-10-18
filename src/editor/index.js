import React from 'react';
import ReactDOM from 'react-dom';

const editorDiv = document.querySelector('#be-js-root');

(async function main() {
  debugger;
  try {
    if (!editorDiv) {
      throw new PageError('could not find #be-js-root');
    }
    ReactDOM.render(<div>Hello World!</div>, editorDiv);
  } catch (e) {
    const message = 'Something went wrong';
    console.log(message);
  }
})();
