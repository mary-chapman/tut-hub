import React, { Component } from 'react';

import Search from './Search/Search';
import Logo from './Logo/Logo';
import Links from './Links/Links';
import MobileToggleBtn from './MobileToggleBtn/MobileToggleBtn'
import LoginSignup from './LoginSignup/LoginSignup';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <Logo />
          <MobileToggleBtn />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Links />
            <Search />
            <LoginSignup />
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
