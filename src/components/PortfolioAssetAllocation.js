import React from "react";
import AssetAllocationGroup from "./AssetAllocationGroup";

const PortfolioAssetAllocation = props => {
  const totalAssetValue = props.asset_allocation.reduce(
    (acc, asset_group) =>
      acc + asset_group.assets.reduce((exp, asset) => exp + asset.exposure, 0),
    0
  );

  return (
    <div className="card-body">
      <h5 className="card-title">Asset Allocation</h5>

      <table className="table asset-allocation">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Asset Name</th>
            <th scope="col">Ticker</th>
            <th scope="col">Weight</th>
          </tr>
        </thead>
        <tbody>
          {props.asset_allocation.map((asset_group, idx) => (
            <AssetAllocationGroup
              key={idx}
              asset_group={asset_group}
              totalAssetValue={totalAssetValue}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioAssetAllocation;
