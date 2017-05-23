import React, { Component } from 'react';
import Post from './Post/Post';
//var posts = require('./../../../../api/post.js');

class AllPosts extends Component {
  constructor(){
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    //var usersArr = []
    fetch('/api/posts')
      .then(res => res.json())
      .then(posts => this.setState({ posts }));
  }


  render() {

    return (
      <div className="AllPosts">
        // <h1>Users:</h1>
        {this.state.posts.map(post =>
          <div key={post.id}>
            {post.content}
            <br />
          </div>
        )}
      </div>
    );
  }
}

export default AllPosts;
