//https://thalava.com/how-to-use-react-web-components-in-angular
//https://www.youtube.com/watch?v=95VZBqWljsw

import * as React from 'react';
import { useState } from 'react';

//import './app.component.css';

const MyReactComponent = () => {
    
    const [text, setText] = useState("Before");

    function Change() {
        if (text === "Before") {
            setText("After");
        }
        else {
            setText("Before");
        }
    }
    
    return (
        <div className='main'>
            <h1>{text}</h1>
            <button onClick={Change}>click me</button>
        </div>
    )
}

export default MyReactComponent;