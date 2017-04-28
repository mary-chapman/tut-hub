import React, { Component } from 'react';
import NavBar from './'
import './Main.css';
import Footer from '../Footer/Footer';

class Main extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">Tutorial Thingy</h1>
            <p className="lead">Amir's line--- don't touch this line --</p>
          </div>
        </div>

        <Footer />

      </div>
    );
  }
}



export default Main;
