import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnMount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <nav className="navbar mb-2">
               
              <button ><Link
                onClick={this.toggleNav}
                id="button"
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link "}
                to="/"
              >
                Search
              </Link>
              </button>
              <button>
              <Link
                onClick={this.toggleNav}
                id="button"
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                to="/saved"
              >
                Saved
              </Link>
              </button>
      </nav>
    );
  }
}

export default Nav;