import React from "react";
import PropTypes from "prop-types";

const PortfolioDescription = props => (
  <div className="card m-4">
    <div className="card-body">
      <h3>StashAway's standard portfolios:</h3>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="descHeader">Expected annual returns:</div>{" "}
            <div className="descValue">
              <h2>{props.portfolio_description.expected_annual_returns}</h2>
            </div>
          </div>
          <div className="col-sm">
            <div className="descHeader">VaR:</div>
            <div className="descValue">
              <h2>{props.portfolio_description.VaR}%</h2>
            </div>
          </div>
          <div className="col-sm">
            <div className="descHeader">Optimised for:</div>
            <div className="descValue">
              <h2>{props.portfolio_description.optimised_currency}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

PortfolioDescription.propTypes = {
  portfolio_description: PropTypes.shape(
    {
      expected_annual_returns: PropTypes.number.isRequired,
      VaR: PropTypes.number.isRequired,
      optimised_currency: PropTypes.string.isRequired
    }.isRequired
  ).isRequired
};

export default PortfolioDescription;
