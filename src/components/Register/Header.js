import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return(
      <div className="Header">
        <h1>{this.props.compName}</h1>
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

export default Header;
