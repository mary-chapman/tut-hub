import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom';
//import './normalize.css';
import './index.scss';

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('root')
);

/******FOR TESTING**********/
// ReactDOM.render(
//   <NavBar />,
//   document.getElementById('root')
// )
