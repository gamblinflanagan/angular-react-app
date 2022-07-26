import * as React from 'react';
import { useState, useRef } from 'react';


export const ReactComponent2 = () => {

  const [label, setLabel] = useState("default");
  
  function Change(event: any) {
    setLabel(event.target.value);
  }

  const inputRef = useRef(null);
  const [label2, setLabel2] = useState("default");

  function Change2() {
    if (inputRef != null) {
      //setLabel2(inputRef.current.value);
      //console.log(inputRef.current.value);
      console.log();
    }
  }

  return (
    <div className='main'>
      <h1>{label}</h1>
      <input id={"in"} placeholder={"input"} onChange={Change} value={label}></input>
      <br />
      <h1>{label2}</h1>
      <input ref={inputRef} type="text" id={"in2"} placeholder={"input"}></input>
      <button onClick={Change2}>Change text</button>
    </div>
  )
};