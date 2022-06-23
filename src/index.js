import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// react application은 하나의 component만 rendering할 수 있음.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
