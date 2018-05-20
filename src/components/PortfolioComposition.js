import React from "react";
import CurrencyExposure from './CurrencyExposure';

const PortfolioComposition = () => (
  <div className="card m-4">
    <div className="card-body">
      <h4>Portfolio Composition</h4>

      <CurrencyExposure/>
    </div>
  </div>
);

export default PortfolioComposition;
