import React from 'react';
import Nav from './Nav';

const Header = props => (
  <div>
    <div className="bar">
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </div>
);

export default Header;
