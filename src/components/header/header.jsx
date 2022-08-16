import React, { Component } from "react";
import "./header.scss";

class Header extends Component {
  render() {
    return (
      <div className="container-fluid header-wrapper">
        <div className="header-title">
          <h1>Pricing</h1>
          <p>
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It's built with default
            Bootstrap components and utilities with little customization.
          </p>
        </div>
        <div className="cards">
          <div className="card text-center">
            <h2 className="card-header">Free</h2>
            <div className="card-body">
              <h1 className="card-title">
                $0 <sub>/ mo</sub>
              </h1>
              <p className="card-text">10 users included</p>
              <p className="card-text">2 GB of storage</p>
              <p className="card-text">Email support</p>
              <p className="card-text">Help center access</p>
              <span className="btn btn-outline-primary">Go somewhere</span>
            </div>
          </div>
          <div className="card text-center">
            <h2 className="card-header">Pro</h2>
            <div className="card-body">
              <h1 className="card-title">
                $15 <sub>/ mo</sub>
              </h1>
              <p className="card-text">10 users included</p>
              <p className="card-text">2 GB of storage</p>
              <p className="card-text">Email support</p>
              <p className="card-text">Help center access</p>
              <span className="btn btn-primary">Go somewhere</span>
            </div>
          </div>
          <div className="card text-center">
            <h2 className="card-header">Enterprice</h2>
            <div className="card-body">
              <h1 className="card-title">
                $29 <sub>/ mo</sub>
              </h1>
              <p className="card-text">10 users included</p>
              <p className="card-text">2 GB of storage</p>
              <p className="card-text">Email support</p>
              <p className="card-text">Help center access</p>
              <span className="btn btn-primary">
                Go somewhere
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
