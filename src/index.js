import React from "react";
import ReactDOM from "react-dom";
import Board from "./views/Board";
// import '@atlaskit/css-reset';
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase";

import { firebaseConfig } from './config.js'

// console.log(firebaseConfig)
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>,
  document.getElementById("root")
);