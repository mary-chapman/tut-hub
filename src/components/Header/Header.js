import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';
import Search from './Search/Search';
import LoginSignUp from './LoginSignup/LoginSignup';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/"><span><img className="logo" src="" alt="TutHub"></img>TutHub</span></Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullLeft>
              <Search />
            </Navbar.Form>
            <Nav pullRight>
              <LoginSignUp />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
