import React, { Component } from 'react';
import './NavBar.css';
import Categories from './Categories/Categories';

class NavBar extends Component {

  render() {
    return (
      <div id="wrapper">
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav"><br />
            <Categories categoryName="JAVASCRIPT" />
            <Categories categoryName="RUBY" />
            <Categories categoryName="JAVA" />
            <Categories categoryName="PHP" />
            <Categories categoryName="PYTHON" />
            <Categories categoryName="CSS" />
            <Categories categoryName="HTML" />
            <Categories categoryName="C#" />
            <Categories categoryName="C++" />
            <Categories categoryName="C" />
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
