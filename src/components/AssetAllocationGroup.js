import React from "react";
import round1dp from "../utils/round1dp";

const getWeight = (exposure, totalAssetValue) => {
  return round1dp(exposure * 100 / totalAssetValue);
};

const AssetAllocationGroup = props => (
  <React.Fragment>
    <tr className="table-active">
      <th scope="row">{props.asset_group.asset_group_name}</th>
      <td />
      <td />
    </tr>
    {props.asset_group.assets.map((asset, idx) => (
      <tr key={idx}>
        <th scope="row">{asset.asset_name}</th>
        <td>{asset.ticker}</td>
        <td>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: getWeight(asset.exposure, props.totalAssetValue) + "%"
              }}
              aria-valuenow={getWeight(asset.exposure, props.totalAssetValue)}
              aria-valuemin="0"
              aria-valuemax="100"
            />
            <span className="asset-weight-value">
              {getWeight(asset.exposure, props.totalAssetValue)}%{" "}
            </span>
          </div>
        </td>
      </tr>
    ))}
  </React.Fragment>
);

export default AssetAllocationGroup;
