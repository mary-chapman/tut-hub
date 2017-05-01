import React, { Component } from 'react';

class MobileToggleBtn extends Component {
  render() {
    return (
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    );
  }
}

export default MobileToggleBtn;
