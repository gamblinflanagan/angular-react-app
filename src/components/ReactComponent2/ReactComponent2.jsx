import * as React from 'react';
import { useState, useRef } from 'react';

import Test from "./NestedComponent.jsx";


const ReactComponent2 = () => {

  const [label, setLabel] = useState("default");
  
  function Change(event) {
    setLabel(event.target.value);
  }

  return (
    <div className='main'>
      <h1>{label}</h1>
      <input id={"in"} placeholder={"input"} onChange={Change} value={label}></input>
      <br />
      <Test />
    </div>
  )
};

export default ReactComponent2;