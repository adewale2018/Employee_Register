import React from 'react';
import './Header.css';

const Header = (props) => {
  return(
    <div className="Header">
      <h1>{props.compName}</h1>
      <h2>{props.title}</h2>
    </div>
  );
}

export default Header;
