import React, { Component } from 'react';
import './Vote.scss';


class Vote extends Component {
  render() {
    return (
      <div className="Vote circle">
        <div className="voteUp hoverlight"><i className="fa fa-caret-up" aria-hidden="true"></i></div>
          <div className="voteCount">{this.props.votes}</div>
        <div className="voteDown hoverlight"><i className="fa fa-caret-down" aria-hidden="true"></i></div>
      </div>
    );
  }
}

export default Vote;
