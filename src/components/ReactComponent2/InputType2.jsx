import * as React from "react";
import { useState, useRef } from "react";
import * as Bootstrap from "react-bootstrap";
import { Button, Form, Row, Col } from "react-bootstrap";

const InputType2 = () => {
  const inputRef = useRef(null);
  const [label2, setLabel2] = useState("default");

  function Change2() {
    if (inputRef != null) {
      setLabel2(inputRef.current.value);
    }
  }

  return (
    <div>
      <h1 className="secondary">{label2}</h1>
      {/* <input ref={inputRef} type="text" id={"in2"} placeholder={"input"}></input> */}
      {/* <button id={"submit"} variant="outline-primary" size="sm" onClick={Change2}>Change text</button>  */}
      <Form className="input">
        <Form.Control
          ref={inputRef}
          type="text"
          id={"in2"}
          placeholder="input"
        />
        <Button id={"submit"} variant="outline-primary" onClick={Change2}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default InputType2;
