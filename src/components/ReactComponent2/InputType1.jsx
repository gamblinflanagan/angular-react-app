import * as React from "react";
import { useState } from "react";

const InputType1 = () => {
  const [label, setLabel] = useState("default");

  function Change(event) {
    setLabel(event.target.value);
  }

  return (
    <div className="main">
      <h1>{label}</h1>
      <input id={"in"} placeholder={"input"} onChange={Change}></input>
    </div>
  );
};

export default InputType1;
