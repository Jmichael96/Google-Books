import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavItem
} from 'mdbreact';

import './nav.css';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  }

  return (
    <MDBNavbar id="navbar" dark expand="md">
      <MDBNavbarBrand>
        <h1 id="navTitle">GOOGLE BOOKS</h1>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleNav} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav right>
          <MDBNavItem>
            <Link
              onClick={toggleNav}
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link "}
              to="/"
            >
              <span className="navLink">
                HOME
              </span>
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link
              onClick={toggleNav}
              className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
              to="/saved"
            >
              <span className="navLink">
                SAVED
            </span>

            </Link>
          </MDBNavItem>
        </MDBNavbarNav>

      </MDBCollapse>
    </MDBNavbar>
  )
}
export default Navbar;