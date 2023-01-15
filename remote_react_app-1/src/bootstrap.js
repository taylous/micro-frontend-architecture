import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const isDev = process.env.NODE_ENV === 'development';

const mount = (rootElement, prefix) => {
  if (rootElement) {
    ReactDOM.render(<App prefix={prefix} />, rootElement);
  }
};

const unmount = (root) => {
  if (root) {
    root.unmount();
  }
};

if (isDev) {
  const rootElement = document.getElementById('marketing-root');
  if (rootElement) {
    mount(devRoot, prefix);
  }
}

export { mount, unmount };
