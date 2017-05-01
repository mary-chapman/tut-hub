import React, { Component } from 'react';
import './Main.css';

import { Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Content from '../Content/Content'
import Footer from '../Footer/Footer';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Route path='/' component={Header}/>
        <Switch>
          <Route exact path='/' component={Content}/>
          <Route path='/footer' component={Footer}/>
        </Switch>
      </div>
    );
  }
}

export default Main;