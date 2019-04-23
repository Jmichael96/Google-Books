import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBNavItem } from "mdbreact";

class Nav extends Component {

  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };


  render() {

    return (
      <MDBNavbar dark expand="md">
        <MDBNavbarBrand>
          <h1 id="googleBooks">Google Books</h1>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <Link
                onClick={this.toggleNav}
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
                onClick={this.toggleNav}
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
    );
  }
}

export default Nav;