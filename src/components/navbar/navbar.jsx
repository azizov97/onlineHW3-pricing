import React, { Component } from "react";
import "./navbar.scss";

class Navbar extends Component {
  render() {
    const { links } = this.props;
    return (
      <div className="container-fluid navbar-wrapper">
        <div className="navbar-logo">
          <h3>Company name</h3>
        </div>
        <ul className="navbar-links">
          {links.map((item, idx) => (
            <li key={idx}>
              <span>{item}</span>
            </li>
          ))}
          <li>
            <button className="btn btn-outline-primary">Sign Up</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
