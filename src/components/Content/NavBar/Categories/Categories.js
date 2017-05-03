import React, { Component } from 'react';


class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {show: false}

    this.showDetail = this.showDetail.bind(this)
  }
  showDetail() {
    console.log(this.state.show)
    this.setState({show:!this.state.show})
  }

  render() {
    return (
      <div className="Categories">
      <li onClick={this.showDetail} className="main">
        {this.props.categoryName}</li>
        {this.state.show === true ?
          <div style={{backgroundColor: '#4c4f51', fontStyle: 'italic'}}>
            <li>Top tag #1</li>
            <li>Top tag #2</li>
            <li>Top tag #3</li>
            <li>Top tag #4</li>
            <li>Top tag #5</li>
          </div>
          : ''}


      </div>
    );
  }
}

export default Categories;
