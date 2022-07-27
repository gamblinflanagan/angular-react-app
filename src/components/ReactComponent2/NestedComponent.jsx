import * as React from 'react';
import { useState, useRef } from 'react';

const Test = () => {

    const inputRef = useRef(null);
    const [label2, setLabel2] = useState("default");

    function Change2() {
        if (inputRef != null) {
            setLabel2(inputRef.current.value);
            //console.log(inputRef.current.value);
            console.log();
        }
    }

    return (
        <div>
            <h1 className='secondary'>{label2}</h1>
            <input ref={inputRef} type="text" id={"in2"} placeholder={"input"}></input>
            <button onClick={Change2}>Change text</button>   
        </div>
    );
};

export default Test;