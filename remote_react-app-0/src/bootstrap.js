// react
import React from 'react';

// react-router, react-router-dom
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// custom components
import App from './App';

// global css
import './index.css';

// check mode
const isDev = process.env.NODE_ENV === 'development';

const mount = (rootElement, prefix) => {
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <BrowserRouter basename={prefix}>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );
    return root;
  }
  return null;
};

const unmount = (root) => {
  console.log('unmount: ', root);
  if (root) {
    root.unmount();
  }
};

const rootElement = document.getElementById('remote-react-0_root');
if (isDev && rootElement && !rootElement.hasChildNodes()) {
  console.log('mount');
  if (rootElement) {
    mount(rootElement, undefined);
  }
}

export { mount, unmount };
