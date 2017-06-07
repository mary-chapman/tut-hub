import React, { Component } from 'react';
import './Post.scss';
import {Row, Col} from 'react-bootstrap';
import Vote from './Vote/Vote';
import Tag from './../../Tag/Tag';

class Post extends Component {

  handleClick(){
    // debugger;
    this.props.updateTarget(this.props.postIndex)
  }



  render() {
    var numStars = parseInt(this.props.data.difficulty, 10);
    var difficulty =[];
    var tags =[];
    var i;
    //for loop difficulty
    for (i = 1; i < 6; i++) {
      i <= numStars ?
      difficulty.push(<i key={i} className="fa fa-star" aria-hidden="true"></i>)
      :
      difficulty.push(<i key={i} className="fa fa-star-o" aria-hidden="true"></i>)
    }
    //for loop tags
    for (i = 0; i < this.props.data.tags.length; i++) {
      tags.push(<Tag key={(i+1)*1000} data={this.props.data.tags[i]} />)
    }


    return (
      <Row className="post">
      {/* <div className="post"> */}
        <Col sm={1} xsHidden className="postVote">
          <Vote votes={this.props.data.voteTotal}/>
        </Col>

        <Col sm={11} xs={12} className="postBlock" onClick={this.handleClick.bind(this)}>
            <Row className="postHeader">
              <Col sm={9} xs={12}>
                <span className="postTitle">{this.props.data.title}</span>
                <span className="creator">by {this.props.data.user}</span>
              </Col>
              <Col sm={3} xsHidden>
                <span className="difficulty">{difficulty}</span>
              </Col>
            </Row>

                {this.props.isTarget?
                  <Row className="postContent">
                    {this.props.data.content}
                  </Row>
                  :null}

            <Row className="postFooter">
              <Col sm={11} className="postTags">
                {tags}
              </Col>
            </Row>

        </Col>
      </Row>
    );
  }
}

export default Post;
