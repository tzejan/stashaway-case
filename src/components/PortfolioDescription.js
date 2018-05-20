import React from "react";

const PortfolioDescription = () => (
  <div className="card m-4">
    <div className="card-body">
      <h3>StashAway's standard portfolios:</h3>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="descHeader">Expected annual returns:</div>{" "}
            <div className="descValue">
              <h2>6.4%</h2>
            </div>
          </div>
          <div className="col-sm">
            <div className="descHeader">VaR:</div>
            <div className="descValue">
              <h2>3.4%</h2>
            </div>
          </div>
          <div className="col-sm">
            <div className="descHeader">Optimised for:</div>
            <div className="descValue">
              <h2>USD</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PortfolioDescription;
