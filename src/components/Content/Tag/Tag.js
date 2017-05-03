import React, { Component } from 'react';



class Tag extends Component {
  render() {
    
    return (
      <div className="Tag">
        {this.props.data}
      </div>
    );
  }
}

export default Tag;
