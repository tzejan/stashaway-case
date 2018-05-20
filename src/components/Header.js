import React from "react";

const Header = () => (
  <div className="app-header">
    <div className="d-flex justify-content-between">
      <a class="navbar-brand" href="#">
        <img src="logo.svg" alt="StashAway Logo" />
      </a>
      <nav class="navbar navbar-expand-lg navbar-dark ">
        <div class="navbar-nav">
          <a class="nav-item nav-link" href="#">
            Support <span class="sr-only">(current)</span>
          </a>
          <a class="nav-item nav-link" href="#">
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
