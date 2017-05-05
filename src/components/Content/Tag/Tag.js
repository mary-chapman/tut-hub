import React, { Component } from 'react';
import { Label } from 'react-bootstrap';


class Tag extends Component {
  render() {

    return (
        <Label bsStyle="info">
          {this.props.data}
        </Label>
    );
  }
}

export default Tag;
