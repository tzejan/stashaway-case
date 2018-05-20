import React from "react";

const Header = () => (
  <div className="app-header">
    <div className="d-flex justify-content-between">
      <a className="navbar-brand" href="#">
        <img src="logo.svg" alt="StashAway Logo" />
      </a>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="#">
            Support <span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link" href="#">
            Logout
          </a>
        </div>
      </nav>
    </div>
    <h4>Preview your portfolio</h4>
    <p>You can always change this later</p>
  </div>
);

export default Header;
