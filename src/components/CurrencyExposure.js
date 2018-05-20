import React from "react";

const CurrencyExposure = () => (
  <div className="card-body">
    <h5 className="card-title">Global Currency Exposure</h5>

    <div>
      <div className="d-flex justify-content-between currency-exposure my-2">
        <div>
          <div className="currency-colorbox" style={{ background: "teal" }} />
          USD
        </div>
        <div>30%</div>
      </div>

      <div className="d-flex justify-content-between currency-exposure my-2">
        <div>
          <div className="currency-colorbox" style={{ background: "orange" }} />
          SGD
        </div>
        <div>30%</div>
      </div>

    </div>
  </div>
);

export default CurrencyExposure;
