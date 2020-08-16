import MyEditor from './Editor'

import React from 'react';
import ReactDOM from 'react-dom';

console.log("hello world!")

ReactDOM.render(<><MyEditor/></>,document.getElementById("container"))

export const sum
= (...a: number[]) =>
  a.reduce((acc, val) => acc + val, 0);
