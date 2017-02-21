import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "../public/styles/style.css";
import { Router, hashHistory } from 'react-router'; // react-router
import routes from "./routes";

ReactDOM.render(
  <Router history={hashHistory} routes={routes} />,
  document.getElementById('root')
);
