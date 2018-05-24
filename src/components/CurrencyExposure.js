import React from "react";
import CurrencyExposureDisplay from "./CurrencyExposureDisplay";
import generateRandomColor from "../utils/randomColorGenerator";
import round1dp from "../utils/round1dp";
import PropTypes from "prop-types";

const LOWER_LIMIT = 10;

const processCurrencyExposureData = data => {
  const totalExposure = data.reduce((acc, data) => acc + data.exposure, 0);

  const sortedData = data.sort((a, b) => b.exposure - a.exposure);

  const percentData = sortedData.map(data => {
    return {
      currency: data.currency,
      percent: round1dp(data.exposure * 100 / totalExposure)
    };
  });

  let processedData = percentData.filter(data => data.percent >= LOWER_LIMIT);
  if (percentData.some(data => data.percent < LOWER_LIMIT)) {
    let otherWeightage = percentData
      .filter(data => data.percent < LOWER_LIMIT)
      .reduce((acc, data) => acc + data.percent, 0);
    processedData.push({ currency: "Others", percent: otherWeightage });
  }

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

CurrencyExposure.propTypes = {
  global_currency_exposure: PropTypes.arrayOf(
    PropTypes.shape(
      {
        currency: PropTypes.string.isRequired,
        exposure: PropTypes.number.isRequired
      }.isRequired
    ).isRequired
  ).isRequired
};

export default CurrencyExposure;
