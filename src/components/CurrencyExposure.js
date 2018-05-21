import React from "react";
import CurrencyExposureDisplay from "./CurrencyExposureDisplay";
import generateRandomColor from "../utils/randomColorGenerator";
import round1dp from '../utils/round1dp';

const LOWER_LIMIT = 10;

const processCurrencyExposureData = data => {
  const sortedData = data.sort(function(a, b) {
    return b.exposure - a.exposure;
  });
  let groupedData = sortedData.filter(data => data.exposure >= LOWER_LIMIT);
  let otherWeightage = sortedData
    .filter(data => data.exposure < LOWER_LIMIT)
    .reduce((acc, data) => acc + data.exposure, 0);
  groupedData.push({ currency: "Others", exposure: otherWeightage });
  const totalExposure = groupedData.reduce(
    (acc, data) => acc + data.exposure,
    0
  );
  const processedData = groupedData.map(data => {
    return {
      currency: data.currency,
      percent: round1dp(data.exposure * 100 / totalExposure)
    };
  });

  return processedData;
};

const CurrencyExposure = props => {
  const processedData = processCurrencyExposureData(
    props.global_currency_exposure
  );

  return (
    <div className="card-body">
      <h5 className="card-title">Global Currency Exposure</h5>

      <div className="currency-container">
        {processedData.map((data, idx) => (
          <CurrencyExposureDisplay
            key={idx}
            color={generateRandomColor()}
            currency={data.currency}
            percent={data.percent}
          />
        ))}
      </div>
    </div>
  );
};

export default CurrencyExposure;
