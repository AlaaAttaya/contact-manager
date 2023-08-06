import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/utilities.css";
import App from "./App";

const rootDiv = document.getElementById("root");

const root = ReactDOM.createRoot(rootDiv);

root.render(<App />);
