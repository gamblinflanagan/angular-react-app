//https://thalava.com/how-to-use-react-web-components-in-angular
//https://github.com/zackypick/react-in-angular
//https://www.youtube.com/watch?v=95VZBqWljsw

import * as React from 'react';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
// import * as Bootstrap from 'react-bootstrap';
// import { Button, Form, Row, Col } from 'react-bootstrap';


export interface IMyComponentProps {
  counter: number;
  onClick?: () => void;
}

export const ReactComponent1: FunctionComponent<IMyComponentProps> = (props: IMyComponentProps) => {

  // const timerHandle = useRef<number | null>(null);
  const [stateCounter, setStateCounter] = useState(0);

  useEffect(() => {
    const timerHandle = setInterval(() => {
      setStateCounter(stateCounter + 1);
    }, 1000);
    return () => {
        clearInterval(timerHandle);
    };
  });

  const {counter: propsCounter, onClick} = props;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={`my-graph-component`}>
      <div className={'comp-props'}>Props counter: {propsCounter}
        <button type="button" onClick={handleClick} className={'increase-button'}>click to increase</button>
      </div>
      <div className={'comp-state'}>State counter: {stateCounter}</div>
    </div>
  );
};
