import React, { Component } from 'react';
import './Post.css';
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

      <div className="post" onClick={this.handleClick.bind(this)}>
        <div className="postHeader">
          <span className="postTitle">{this.props.data.title}</span>
          <span className="creator">by {this.props.data.user}</span>
          <span className="difficulty">{difficulty}</span>
        </div>
        <div className="postContent">
        {this.props.isTarget? this.props.data.content:null}
      </div>
          <div className="postTags">
            {tags}
          </div>







      </div>
    );
  }
}

export default Post;
