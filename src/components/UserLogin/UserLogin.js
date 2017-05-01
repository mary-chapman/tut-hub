import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//import './UserLogin.css';

class UserLogin extends Component {
  render() {
    return (
      <div className="container">
      <div className="row justify-content-center">
        <form className="col-md-4">
            <br />
            <h1>Log In</h1>
            <div className="form-group">
                <input type="text" className="form-control input-lg" placeholder="Email" />
            </div>
            <div className="form-group">
                <input type="password" className="form-control input-lg" placeholder="Password" />
            </div>
            <div className="form-group">
                <button className="btn btn-primary btn-lg btn-block">Sign In</button>
                <Link to="/register"><span><div>Not a member? Sign up for free</div></span></Link>
            </div>
        </form>
      </div>

      </div>
    );
  }
}

export default UserLogin;
