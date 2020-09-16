import React from 'react';
import '../landing.css';
const Navbar = () => {
  return  <nav className="nav">
      <a className="brand_name navlink" href="#">Meraki</a>
      
      <a className="navlink" style={{paddingRight:"6vh"}} href="#">FAQ</a>
      <a className="navlink" href="#contact">CONTACT</a>
      <a className="navlink" href="#">OUR TEAM</a>
      
  </nav>
};
export default Navbar;