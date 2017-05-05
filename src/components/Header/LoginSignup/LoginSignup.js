import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuItem, Image, NavDropdown} from 'react-bootstrap';

class LoginSignUp extends Component {

  render() {
    //change this to true to view logged in version
    var isLoggedIn = true;

    var display;
     if(isLoggedIn){
      display = <NavDropdown
        id="navDropdown"
        title={<span><Image src="http://placehold.it/50x50" circle /></span>}
      >
        <MenuItem header>Username</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.1}>
          Setting?
        </MenuItem>
        <MenuItem eventKey={3.2}>
            Log out
        </MenuItem>
      </NavDropdown>
    }else{
    display =   <NavDropdown
      id="navDropdown"
      title={<span><i className="fa fa-user-circle-o"></i></span>}
    >
        <MenuItem eventKey={3.1}>
          <Link to="/login">Log In</Link>
        </MenuItem>
        <MenuItem eventKey={3.2}>
          <Link to="/register">Sign Up</Link>
        </MenuItem>
      </NavDropdown>
    }


    return (
      <div className="LoginSignUp">
        {display}
      </div>
    );
  }
}

export default LoginSignUp;
