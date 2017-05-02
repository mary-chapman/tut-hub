import React, { Component } from 'react';
import './NavBar.css';
import $ from "jquery";

/*
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
*/

class NavBar extends Component {


  render() {
    return (
      <div id="wrapper">

  <div id="sidebar-wrapper">
      <ul className="sidebar-nav">
          <li className="sidebar-brand">
              <a href="#">
                  Start Bootstrap
              </a>
          </li>
          <li>
              <a href="#">Dashboard</a>
          </li>
          <li>
              <a href="#">Shortcuts</a>
          </li>
          <li>
              <a href="#">Overview</a>
          </li>
          <li>
              <a href="#">Events</a>
          </li>
          <li>
              <a href="#">About</a>
          </li>
          <li>
              <a href="#">Services</a>
          </li>
          <li>
              <a href="#">Contact</a>
          </li>
      </ul>
  </div>


  <div id="page-content-wrapper">
      <div className="container-fluid">
          <div className="row">
              <div className="col-lg-12">
                  <h1>Simple Sidebar</h1>
                  <p>This template has a responsive menu toggling system. The menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will appear/disappear. On small screens, the page content will be pushed off canvas.</p>
                  <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>.</p>
                  <a href="#menu-toggle" className="btn btn-default toggled" id="menu-toggle">Toggle Menu</a>
              </div>
          </div>
      </div>
  </div>

</div>
    );
  }
}

export default NavBar;
