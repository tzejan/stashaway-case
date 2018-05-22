import React from "react";
import round1dp from "../utils/round1dp";

const getWeightedAssets = (assets, totalAssetValue) => {
  return assets.map(asset => {
    return {
      asset_name: asset.asset_name,
      ticker: asset.ticker,
      weight: getWeight(asset.exposure, totalAssetValue)
    };
  });
};

const getWeight = (exposure, totalAssetValue) => {
  return round1dp(exposure * 100 / totalAssetValue);
};

const AssetAllocationGroup = props => {
  const weightedAssets = getWeightedAssets(
    props.asset_group.assets,
    props.totalAssetValue
  );
  return (
    <React.Fragment>
      <tr className="table-active">
        <th scope="row">{props.asset_group.asset_group_name}</th>
        <td />
        <td />
      </tr>
      {weightedAssets.map((asset, idx) => (
        <tr key={idx}>
          <th scope="row">{asset.asset_name}</th>
          <td>{asset.ticker}</td>
          <td>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: asset.weight + "%"
                }}
                aria-valuenow={asset.weight}
                aria-valuemin="0"
                aria-valuemax="100"
              />
              <span className="asset-weight-value">{asset.weight}%</span>
            </div>
          </td>
        </tr>
      ))}
    </React.Fragment>
  );
};

export default AssetAllocationGroup;
