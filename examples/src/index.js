/***  examples/src/index.js ***/
import React from 'react';
import { render} from 'react-dom';
import Todo from '../../src';
const App = () => (
    <Todo />
);
render(<App />, document.getElementById("root"));