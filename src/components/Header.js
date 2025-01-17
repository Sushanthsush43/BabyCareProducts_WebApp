import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
        <Link to="/" className="logo-link">
       <div className="logo">BABYCARE</div>
        </Link>
     
      
      <div className="actions">
        <Link to="/cart">
          <i className="fas fa-cart-arrow-down"></i>
        </Link>
        <i className="fas fa-user profile-icon"></i>
        <input type="text" placeholder="Search" className="search-bar" />
      </div>
    </header>
  );
}

export default Header;
