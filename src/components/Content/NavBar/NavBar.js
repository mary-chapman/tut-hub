import React, { Component } from 'react';
import './NavBar.css';
import Categories from './Categories/Categories';

class NavBar extends Component {

  render() {
    return (
      <ul className="nav flex-column">
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
    );
  }
}

export default NavBar;
