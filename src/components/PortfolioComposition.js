import React from "react";
import CurrencyExposure from './CurrencyExposure';
import PortfolioAssetAllocation from './PortfolioAssetAllocation';

const PortfolioComposition = () => (
  <div className="card m-4">
    <div className="card-body">
      <h4>Portfolio Composition</h4>

      <CurrencyExposure/>
      <PortfolioAssetAllocation/>
    </div>
  </div>
);

export default PortfolioComposition;
