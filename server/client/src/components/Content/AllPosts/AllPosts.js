import React, { Component } from 'react';
import Post from './Post/Post';
//var posts = require('./../../../../api/post.js');

class AllPosts extends Component {
  constructor(){
    super();
    this.state = {
      posts: [],
      users: []
    }
    this.renderUsers = this.renderUsers.bind(this);
  }

  componentDidMount() {
    //var usersArr = []
    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  renderUsers() {
    if (this.state.users.length < 1) {
      return (
        <div>loading</div>
      )
    } else {
      this.state.users.map(function(user) {
        return (
          <h1>User: {user.username}</h1>
        )
      })
    }
  }

  render() {
    console.log(this.state.users)

    return (
      <div className="AllPosts">
        <h1>Users:</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}

export default AllPosts;
