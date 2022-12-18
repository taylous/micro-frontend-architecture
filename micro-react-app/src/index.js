import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

window.renderReactApp = (containerId, history) => {
  ReactDOM.createRoot(document.getElementById(containerId)).render(
    <App history={history} />
  );
};

window.unmountReactApp = (containerId) => {
  const root = document.getElementById(containerId);

  if (root) {
    root.remove();
  }
};

if (!document.getElementById("ReactApp-container")) {
  ReactDOM.createRoot(document.getElementById("ReactApp-container")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
