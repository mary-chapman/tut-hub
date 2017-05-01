import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Logo extends Component {
  render() {
    return (
      <Link to="/">
        <div className="Logo">
          <div className="navbar-brand" href="#">LOGO</div>
        </div>
      </Link>
    );
  }
}

export default Logo;
