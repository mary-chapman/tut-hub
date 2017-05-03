import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginSignUp extends Component {
  render() {
    return (
      <div className="LoginSignUp">
        <Link to="/login"><button className="btn btn-outline-success user" type="submit">Log In</button></Link>
        <Link to="/register"><button className="btn btn-outline-success user" type="submit">Sign Up</button></Link>
      </div>
    );
  }
}

export default LoginSignUp;
