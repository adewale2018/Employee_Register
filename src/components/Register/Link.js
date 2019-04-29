import React, { Component } from 'react';
import './Link.css';

class Link extends Component {
  render() {
    return(
      <div className="Link">
        <a href="" >{this.props.link}</a>
      </div>
    )
  }
}
export default Link;
