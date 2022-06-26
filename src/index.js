import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// React.StrictMode: 개발모드에서의 이슈로 인해 주석처리(2번실행)
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
