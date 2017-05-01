import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Links extends Component {
  render() {
    return (
      <ul className="navbar-nav mr-auto">

        <li className="nav-item active">
          <Link to="/">
            <div className="nav-link">Home <span className="sr-only">(current)</span></div>
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    );
  }
}

export default Links;
