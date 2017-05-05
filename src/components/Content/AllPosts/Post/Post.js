import React, { Component } from 'react';
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
      difficulty.push(<div key={i} className="fill-star">Y</div>)
      :
      difficulty.push(<div key={i} className="empty-star">N</div>)
    }
    //for loop tags
    for (i = 0; i < this.props.data.tags.length; i++) {
      tags.push(<Tag key={(i+1)*1000} data={this.props.data.tags[i]} />)
    }


    return (

      <div className="Post" onClick={this.handleClick.bind(this)}>
        {this.props.isTarget?
        <div className="expanded">
          Expanded post
        </div>
        :
        <div className="closed">
          <div className="postHeader offset-sm-1 col-sm-10">
            <div className="postTitle">{this.props.data.title}<div className="creator">{this.props.data.user}</div></div>
            <div className="difficulty">{difficulty}</div>
          </div>
          <div className="postContent"></div>
          <div className="postTags">
            {tags}
          </div>
        </div>
        }

      </div>
    );
  }
}

export default Post;
