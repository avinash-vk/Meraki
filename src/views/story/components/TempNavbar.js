import React from 'react';
import '../storyview.css';
const TempNavbar = () => {
  return  <nav className="tempnav">
      <a className="brand_name navlink" href="#">Meraki</a>
      
      <a className="navlink" style={{paddingRight:"6vh"}} href="#">LINK 1</a>
      <a className="navlink" href="#contact">LINK 2</a>
      <a className="navlink" href="#">LINK 3</a>
      
  </nav>
};
export default TempNavbar;