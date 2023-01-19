import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
        <div>
      <img
        src="https://www.rubixe.com/assets/img/logo/white-rubixe-logo.png"
        alt=""
      /></div>
      <div className="navbar">
        <div>HOME</div> 
        <div>SERVICES</div> 
        <div>PRODUCTS</div>
        <div>AI INTERNSHIP</div>
        <div>CAREER</div> 
        <div>BLOG</div> 
        <div>ABOUT</div> 
        <div>CONTACT US</div>
      </div>
    </div>
  );
}

export default Header;
