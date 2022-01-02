import React from "react";
import { useState } from "react";

import Component from "./DeferredComponent";

export default function App() {
  const [text, setText] = useState("Foobar");

  return (
    <>
      <div onClick={() => setText("Hello World")}>{text}</div>;
      <Component />
    </>
  );
}
