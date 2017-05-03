import React, { Component } from 'react';

import AllPosts from './AllPosts/AllPosts';
import NavBar from './NavBar/NavBar';

class Content extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div id="page-content-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                      <AllPosts />
                      {/* <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                          <h1 className="display-3">Tutorial Thingy</h1>
                          <p className="lead">Amir's line--- don't touch this line --</p>
                        </div>
                      </div> */}
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Content;
