import * as React from 'react';
import { useState } from 'react';


export const ReactComponent2 = () => {

  const [label, setLabel] = useState("default");
  
  function Change() {
    if (label === "default") {
      setLabel("clicked");
    }
    else {
      setLabel("default");
    }
  }

  return (
    <div className='main'>
      <span>
        <h1>{label}</h1>
        <button onClick={Change}>Change text</button>
      </span>
    </div>
  )
};