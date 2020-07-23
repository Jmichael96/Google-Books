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

import './style.css';

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  }

  return (
    <MDBNavbar dark expand="md">
      <MDBNavbarBrand>
        <h1>GOOGLE BOOKS</h1>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleNav} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav right>
          <MDBNavItem>
            <Link
              onClick={toggleNav}
              id="button"
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link "}
              to="/"
            >
              <button>
                Home
      </button>
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link
              onClick={toggleNav}
              id="button"
              className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
              to="/saved"
            >
              <button>
                Saved
            </button>

            </Link>
          </MDBNavItem>
        </MDBNavbarNav>

      </MDBCollapse>
    </MDBNavbar>
  )
}
export default Navbar;