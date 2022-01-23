import React from "react";
import "./NavBar.css";
import logo from "../../Assets/logo.svg"

const NavBar = () => {
  return (
    <>
      <nav>
          <a href="#"><img src={logo} alt="logo" /></a>
          <div className="nav-links">
            <ul>
              <li><a href="#">Search</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Account</a></li>
              <li><a href="#"><i className="ri-shopping-cart-line"></i></a></li>
            </ul>
          </div>
      </nav>
    </>
  );
};

export default NavBar;
