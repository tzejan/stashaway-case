import React from "react";
import CurrencyExposure from './CurrencyExposure';
import PortfolioAssetAllocation from './PortfolioAssetAllocation';

const PortfolioComposition = (props) => {
    let newAllocationBtnClass = "btn btn-primary";
    let currentAllocationBtnClass = "btn btn-light";
    if (props.current_display === "current"){
        newAllocationBtnClass = "btn btn-light";
        currentAllocationBtnClass = "btn btn-primary";
    }


return (
  <div className="card m-4">
    <div className="card-body">
      <h4>Portfolio Composition</h4>
      <button type="button" className={newAllocationBtnClass} onClick={props.toggleAllocation}>New Allocation</button>
      <button type="button" className={currentAllocationBtnClass} onClick={props.toggleAllocation}>Current Allocation</button>

      <CurrencyExposure global_currency_exposure={props.global_currency_exposure}/>
      <PortfolioAssetAllocation asset_allocation={props.asset_allocation}/>
    </div>
  </div>
)};

export default PortfolioComposition;
