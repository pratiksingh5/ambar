import React from "react";
import "./Nav.css"
// import "./NavBar.css";
import logo from "../../Assets/logo.svg"
import { Navbar, Container, Nav, N } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
 <Navbar bg="transparent"  expand="lg" variant="dark" >
    <a href="#"><img src={logo} alt="logo" /></a>
    <div className="mobile-icons">
    <i className="ri-shopping-cart-line mobile-icon"></i>
    <i className="ri-shopping-cart-line mobile-icon"></i>
    </div>
   
    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:"white"}} />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav style={{ marginLeft:"auto"}}>
         <Nav.Link className="nav-link"  href="#home">Search</Nav.Link>
         <Nav.Link className="nav-link" href="#link">Help</Nav.Link>
         <Nav.Link className="nav-link"  href="#link">Account</Nav.Link>
        <Nav.Link className="nav-link" href="#link"> <i className="ri-shopping-cart-line"></i></Nav.Link>
      </Nav>
    </Navbar.Collapse>
</Navbar>
  
    </>
  );
};

export default NavBar;
