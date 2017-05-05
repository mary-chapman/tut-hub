import React, { Component } from 'react';
import './Content.css';


import AllPosts from './AllPosts/AllPosts';
import NavBar from './NavBar/NavBar';

class Content extends Component {
  debugger;
  render() {
    return (
      <div className="row">
        <div className="col-md-3 col-lg-2">
          <div className="vertical-nav">
            <button className="btn btn-primary hidden-md-up" type="button" data-toggle="collapse" data-target="#collapseVerticalNav" aria-expanded="false" aria-controls="collapseExample">
              <span className="">Menu</span>
            </button>
            <div className="collapse" id="collapseVerticalNav">
              <NavBar />
            </div>
          </div>
        </div>
        <div className="col-md-9 col-lg-10">
          <AllPosts />
        </div>
      </div>
    )
  }
}

export default Content;
