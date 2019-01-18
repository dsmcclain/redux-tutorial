import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { createStore } from 'redux';
import todoApp from './reducers';

const store = createStore(todoApp);

ReactDOM.render(<App />, document.getElementById("root"));