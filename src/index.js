import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./js/components/App.jsx";
import { StoreProvider } from "./js/store";

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
