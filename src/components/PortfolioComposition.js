import React from "react";
import CurrencyExposure from './CurrencyExposure';
import PortfolioAssetAllocation from './PortfolioAssetAllocation';

const PortfolioComposition = (props) => (
  <div className="card m-4">
    <div className="card-body">
      <h4>Portfolio Composition</h4>

      <CurrencyExposure global_currency_exposure={props.global_currency_exposure}/>
      <PortfolioAssetAllocation asset_allocation={props.asset_allocation}/>
    </div>
  </div>
);

export default PortfolioComposition;
