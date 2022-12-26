import React from "react";
import "animate.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/global";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
reportWebVitals();
