import React, { Component } from 'react';
import Tag from './../../Tag/Tag';

class Post extends Component {

  handleClick(){
    this.props.updateTarget(this.props.postIndex)
  }



  render() {
    var numStars = parseInt(this.props.data.difficulty);
    var difficulty =[];
    var tags =[];
    //for loop difficulty
    for (var i = 1; i < 5; i++) {
      i <= numStars ?
      difficulty.push(<div className="fill-star"></div>)
      :
      difficulty.push(<div className="empty-star"></div>)
    }
    //for loop tags
    for (var i = 0; i < this.props.data.tags.length; i++) {
      tags.push(<Tag key={i} data={this.props.data.tags[i]} />)
    }


    return (
      <div className="Post" onClick={this.handleClick}>
        {this.props.isTarget?
        <div info="expanded">
          Expanded post
        </div>
        :
        <div info="closed">
          <div className="postHeader">
            <title>{this.props.data.title}</title><div className="creator">{this.props.data.user}</div>
            <div className="difficulty">
            {difficulty}

        }
          </div>
          </div>
          {tags}
        </div>
        }

      </div>
    );
  }
}

export default Post;
