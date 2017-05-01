import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';

import UserLogin from './components/UserLogin/UserLogin';

import { BrowserRouter } from 'react-router-dom';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('root')
);

/******FOR TESTING**********/
// ReactDOM.render(
//   <UserLogin />,
//   document.getElementById('root')
// )
