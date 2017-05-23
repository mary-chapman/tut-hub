import React, { Component } from 'react';
import './Post.css';
import {Row, Col} from 'react-bootstrap';
import Vote from './Vote/Vote';
import Tag from './../../Tag/Tag';

class Post extends Component {
  constructor(){
    super();
    this.state = {
      isTarget: false
    }
  }
  handleClick() {
    this.setState({isTarget: !this.state.target})
  }

  render() {

    return (
      <Row className="post">

        <Col sm={11} xs={12} className="postBlock">
            <Row className="postHeader">
            <Col sm={9} xs={12}>
              <span className="postTitle">{this.props.data.title}</span>
              <span className="creator">by {this.props.data.url}</span>
            </Col>
            </Row>
            <Row classname="url">

            </Row>


            <Row className="postContent" onClick={this.handleClick.bind(this)}>
              {this.props.data.content}
            </Row> :
            null
          }
        </Col>
      </Row>
    );
  }
}

export default Post;
