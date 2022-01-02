import React from "react";
import { hydrate } from "react-dom";
import App from "./src/App";

const container = document.getElementById("app");

window.addEventListener("componentsReady", () => {
  hydrate(<App />, container);
});
