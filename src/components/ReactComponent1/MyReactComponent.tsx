//https://thalava.com/how-to-use-react-web-components-in-angular
//https://github.com/zackypick/react-in-angular
//https://www.youtube.com/watch?v=95VZBqWljsw

import * as React from 'react';
import { FunctionComponent, useEffect, useRef, useState } from 'react';

export interface IMyComponentProps {
  counter: number;
  onClick?: () => void;
}

export const MyReactComponent: FunctionComponent<IMyComponentProps> = (props: IMyComponentProps) => {

  const timerHandle = useRef<number | null>(null);
  const [stateCounter, setStateCounter] = useState(0);

  useEffect(() => {
    timerHandle.current = +setInterval(() => {
      setStateCounter(stateCounter + 1);
    }, 1000);

    return () => {
      if (timerHandle.current) {
        clearInterval(timerHandle.current);
        timerHandle.current = null;
      }
    };
  });

  const {counter: propsCounter, onClick} = props;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return <div className={`my-graph-component`}>
    <div className={'comp-props'}>Props counter: {propsCounter}
      <span onClick={handleClick} className={'increase-button'}>click to increase</span>
    </div>
    <div className={'comp-state'}>State counter: {stateCounter}</div>
  </div>;
};