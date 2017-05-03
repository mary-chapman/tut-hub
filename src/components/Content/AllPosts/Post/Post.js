import React, { Component } from 'react';
import Tag from './../../Tag/Tag';

class Post extends Component {

  handleClick(){
    // debugger;
    this.props.updateTarget(this.props.postIndex)
  }



  render() {
    var numStars = parseInt(this.props.data.difficulty);
    var difficulty =[];
    var tags =[];
    //for loop difficulty
    for (var i = 1; i < 6; i++) {
      i <= numStars ?
      difficulty.push(<div key={i} className="fill-star">Y</div>)
      :
      difficulty.push(<div key={i} className="empty-star">N</div>)
    }
    //for loop tags
    for (var i = 0; i < this.props.data.tags.length; i++) {
      tags.push(<Tag key={i} data={this.props.data.tags[i]} />)
    }


    return (
      <div className="Post" onClick={this.handleClick.bind(this)}>
        {this.props.isTarget?
        <div className="expanded">
          Expanded post
        </div>
        :
        <div className="closed">
          <div className="postHeader">
            <title>{this.props.data.title}</title><div className="creator">{this.props.data.user}</div>
            <div className="difficulty">{difficulty}</div>
          </div>
          {tags}
        </div>
        }

      </div>
    );
  }
}

export default Post;
