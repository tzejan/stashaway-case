import React, { Component } from "react";
import PortfolioDescription from "./PortfolioDescription";
import PortfolioComposition from "./PortfolioComposition";

class PortfolioPreview extends Component {
  constructor() {
    super();
    this.state = {
      portfolio_description: {
        expected_annual_returns: 6.4,
        VaR: 3.4,
        optimised_currency: "USD"
      },
      global_currency_exposure: [
        {
          currency: "USD",
          exposure: 30
        },
        {
          currency: "SGD",
          exposure: 30
        },
        {
          currency: "EUR",
          exposure: 20
        },
        {
          currency: "JPY",
          exposure: 10
        },
        {
          currency: "MYR",
          exposure: 1
        },
        {
          currency: "CNY",
          exposure: 1
        }
      ],
      asset_allocation: [
        {
          asset_group_name: "US EQUITIES",
          assets: [
            {
              asset_name: "US Equities (Total)",
              ticker: "VTI",
              exposure: 5
            },
            {
              asset_name: "US Equities (Dividends)",
              ticker: "VIG",
              exposure: 6
            },
            {
              asset_name: "US Equities (Small-Cap, Growth)",
              ticker: "VBK",
              exposure: 1.2
            }
          ]
        },
        {
          asset_group_name: "International EQUITIES",
          assets: [
            {
              asset_name: "Asia ex-Japan Equities",
              ticker: "VTI",
              exposure: 12.3
            },
            {
              asset_name: "China Equities",
              ticker: "PGJ",
              exposure: 0.2
            },
            {
              asset_name: "US Total Stock",
              ticker: "VBK",
              exposure: 23.7
            }
          ]
        }
      ]
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/portfolio")
      .then(response => response.json())
      .then(jsondata => console.log(jsondata))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="portfolio-preview">
        <PortfolioDescription
          portfolio_description={this.state.portfolio_description}
        />
        <PortfolioComposition
          global_currency_exposure={this.state.global_currency_exposure}
          asset_allocation={this.state.asset_allocation}
        />
      </div>
    );
  }
}

export default PortfolioPreview;
