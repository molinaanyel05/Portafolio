import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SexyNavBar from './SexyNavBar';
import Home from './Vistas/Home';
import About from './Vistas/About';
import MySkills from './Vistas/MySkills';
import Work from './Vistas/Work';
import Contact from './Vistas/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <Router>
      <SexyNavBar/>
      <App/>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
