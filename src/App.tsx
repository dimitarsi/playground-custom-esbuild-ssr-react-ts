import React from "react";
import { useState } from "react";
import { loadable } from "./loadable";

let Component;

if (SERVER) {
  Component = require("./DeferredComponent").default;
} else {
  Component = loadable(
    import("./DeferredComponent").then((component) => {
      return component.default;
    })
  );
}

export default function App() {
  const [text, setText] = useState("Foobar");

  console.log(Component);

  return (
    <>
      <div onClick={() => setText("Hello World")}>{text}</div>;
      <Component />
    </>
  );
}
