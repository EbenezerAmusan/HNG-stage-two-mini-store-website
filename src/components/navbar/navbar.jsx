import React, { Profiler } from "react";
import { Link } from "react-router-dom";
import { FileSearch, ShoppingCart } from "phosphor-react";
import "./navbar.css";
import searchIcon from "../../assets/Search_alt.svg";
import cartIcon from "../../assets/Basket_alt_3.svg";
import profileIcon from "../../assets/User_cicrle.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <p className="logo-el">YT Bridal</p>
      </div>

      <div className="nav-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dress">Dress</Link>
          </li>
          <li>
            <Link to="/shoes">Shoes</Link>
          </li>
          <li>
            <Link to="/headgears">Headgears</Link>
          </li>
          <li>
            <Link to="/bouquet">Bouquet</Link>
          </li>
          <li>
            <Link to="/fan">Fan</Link>
          </li>
        </ul>
      </div>
      <div className="nav-icons">
        <img src={searchIcon}></img>
        <Link to="/cart">
          <img src={cartIcon}></img>
        </Link>
        <img src={profileIcon}></img>
      </div>
    </div>
  );
};

export default Navbar;
