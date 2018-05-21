import React from 'react';

const CurrencyExposureDisplay = (props) => (
    <div className="d-flex justify-content-between currency-exposure my-2">
        <div>
          <div className="currency-colorbox" style={{ background: props.color }} />
          {props.currency}
        </div>
        <div>{props.percent}%</div>
      </div>
);

export default CurrencyExposureDisplay;
