import React from 'react';
import { CounterControls } from './Counter.styled';

const Controls = ({ OnIncrement, OnDicrement }) => {
    return (
    <CounterControls>
    <button type="button" onClick={OnIncrement}>
      Increment by +1
    </button>
    <button type="button" onClick={OnDicrement}>
      Decrement by +1
    </button>
  </CounterControls>
)}
  

export default Controls;
  

