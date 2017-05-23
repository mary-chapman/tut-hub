import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//import './UserRegister.css';

class UserRegister extends Component {
  render() {
    return (
      <div className="container">
      <div className="row justify-content-center">
        <form className="col-md-4">
            <br />
            <h1>Sign Up</h1>
            <div className="form-group">
                <input type="text" className="form-control input-lg" placeholder="Name" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control input-lg" placeholder="Email" />
            </div>
            <div className="form-group">
                <input type="password" className="form-control input-lg" placeholder="Password" />
            </div>
            <div className="form-group">
                <input type="password" className="form-control input-lg" placeholder="Confirm Password" />
            </div>
            <div className="form-group">
                <button className="btn btn-primary btn-lg btn-block">Sign Up</button>
                <Link to="/login"><span><div>Already a member? Sign in here.</div></span></Link>
            </div>
        </form>
      </div>

      </div>
    );
  }
}

export default UserRegister;
