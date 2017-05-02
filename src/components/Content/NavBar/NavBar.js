import React, { Component } from 'react';
import './NavBar.css';
import $ from "jquery";

class NavBar extends Component {
  render() {
    return (
      <div id="wrapper">
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
          <li><a href="#">JAVASCRIPT</a></li>
          <li><a href="#">RUBY</a></li>
          <li><a href="#">HTML</a></li>
          <li><a href="#">CSS</a></li>
          <li><a href="#">JAVA</a></li>
          <li><a href="#">PHP</a></li>
          <li><a href="#">PYTHON</a></li>
          <li><a href="#">C++</a></li>
          <li><a href="#">C#</a></li>
          <li><a href="#">C</a></li>
      </ul>
  </div>



</div>
    );
  }
}

export default NavBar;
