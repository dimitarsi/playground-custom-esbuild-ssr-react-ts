import React, { useState } from "react";

export default function DeferComponent() {
  const [text, setText] = useState("Hello from a promise");
  return (
    <>
      <div>{text}</div>
      <button onClick={() => setText("Hello World")}>
        Click to set the text
      </button>
    </>
  );
}
