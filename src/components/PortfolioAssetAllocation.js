import React from "react";

const PortfolioAssetAllocation = () => (
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
        <tr className="table-active">
          <th scope="row">US EQUITIES</th>
          <td />
          <td />
        </tr>
        <tr>
          <th scope="row">US Equities (Total)</th>
          <td>VTI</td>
          <td>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              />
              <span className="asset-weight-value"> 25% </span>
            </div>
          </td>
        </tr>

        <tr className="table-active">
          <th scope="row">International Equities</th>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">US Equities (Total)</th>
          <td>VIG</td>
          <td><div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "40%" }}
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
              />
              <span className="asset-weight-value"> 40% </span>
            </div></td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default PortfolioAssetAllocation;
