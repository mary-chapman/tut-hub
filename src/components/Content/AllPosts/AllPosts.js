import React, { Component } from 'react';
import Post from './Post/Post';


class AllPosts extends Component {
  constructor(){
    super();
    this.state = {
      posts: [],
      targetPost: null
    }
    this.updateTarget = this.updateTarget.bind(this);
  }
  componentDidMount(){
    // fetch('./../../../../api/post.json')
    // .then(function(response){debugger; return response.json();})
    // .then(function(result){
    //   debugger;
    //     console.log(result);
    //     this.setState({posts: result.posts})
    // });
  }

  updateTarget(i){
    this.setState({targetPost: i})
  }

  render() {
    var isTarget = false;
    var posts = []
    for (var i = 0; i < this.state.posts.length; i++) {
        if (this.state.targetPost == i) {isTarget = true}
        posts.push(<Post key={i} data={this.state.posts[i]} isTarget={isTarget} postIndex={i} updateTarget={this.updateTarget} />)
        }

    return (
      <div className="AllPosts">
        {posts}
      </div>
    );
  }
}

export default AllPosts;
