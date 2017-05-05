import React, { Component } from 'react';
import {Row, Col, DropdownButton} from 'react-bootstrap'
import './Content.css';


import AllPosts from './AllPosts/AllPosts';
import SideBar from './SideBar/SideBar';

class Content extends Component {
  render() {
    return (
      <Row>
        <Col xsHidden sm={2}>
          <SideBar />
        </Col>
        <Col xs={1} smHidden mdHidden lgHidden>
          <DropdownButton bsStyle="primary" title="Top Tags" id="tags-dropdown">
            <SideBar />
          </DropdownButton>
        </Col>
        <Col sm={10} xs={11}>
          <AllPosts />
        </Col>
        {/* <div className="col-md-3 col-lg-2">
          <div className="vertical-nav">
            <button className="btn btn-primary hidden-md-up" type="button" data-toggle="collapse" data-target="#collapseVerticalNav" aria-expanded="false" aria-controls="collapseExample">
              <span className="">Menu</span>
            </button>
            <div className="collapse" id="collapseVerticalNav">
              <SideBar />
            </div>
          </div>
        </div>
        <div className="col-md-9 col-lg-10">
          <AllPosts />
        </div> */}
      </Row>
    )
  }
}

export default Content;
