import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import searchIcon from "../../assets/Search_alt.svg";
import cartIcon from "../../assets/Basket_alt_3.svg";
import profileIcon from "../../assets/User_cicrle.svg";
import hamburgerIcon from "../../assets/Sort.svg";
import closeIcon from "../../assets/Close_square.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <p className="logo-el">YT Bridal</p>
      </div>

      <div className={`nav-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/dress" onClick={toggleMenu}>Dress</Link>
          </li>
          <li>
            <Link to="/shoes" onClick={toggleMenu}>Shoes</Link>
          </li>
          <li>
            <Link to="/headgears" onClick={toggleMenu}>Headgears</Link>
          </li>
          <li>
            <Link to="/bouquet" onClick={toggleMenu}>Bouquet</Link>
          </li>
          <li>
            <Link to="/fan" onClick={toggleMenu}>Fan</Link>
          </li>
        </ul>
      </div>

      <div className="nav-icons">
        <img src={searchIcon} alt="search" />
        <Link to="/cart">
          <img src={cartIcon} alt="cart" />
        </Link>
        <img src={profileIcon} alt="profile" />
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <img src={isOpen ? closeIcon : hamburgerIcon} alt="menu icon" />
      </div>
    </div>
  );
};

export default Navbar;