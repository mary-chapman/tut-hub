import React, { Component } from 'react';
import './Main.css';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Content from '../Content/Content'
import UserLogin from '../UserLogin/UserLogin'
import UserRegister from '../UserRegister/UserRegister';
import Footer from '../Footer/Footer';

class Main extends Component {
  render() {
    return (

      <div className="Main">
        <Route path='/' component={Header}/>
        <Switch>
          <Route exact path='/' component={Content}/>
          <Route path='/login' component={UserLogin} />
          <Route path='/register' component={UserRegister} />
          <Route path='/footer' component={Footer}/>
          <Route path='/tags/:tagOne/:tagTwo' component={Content} />
          <Route path='/tags/:tagOne' component={Content} />
        </Switch>

      </div>
    );
  }
}



export default Main;
