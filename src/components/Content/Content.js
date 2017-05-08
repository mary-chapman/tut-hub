import React, { Component } from 'react';
import {Row, Col, DropdownButton} from 'react-bootstrap'
import './Content.css';

import AllPosts from './AllPosts/AllPosts';
import SideBar from './SideBar/SideBar';

class Content extends Component {
  render() {
    var postTags=[];
    this.props.match.params.tagOne ? postTags.push(this.props.match.params.tagOne) : null
    this.props.match.params.tagTwo ? postTags.push(this.props.match.params.tagTwo) : null
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
          <AllPosts postTags={postTags}/>
        </Col>
      </Row>
    )
  }
}

export default Content;
