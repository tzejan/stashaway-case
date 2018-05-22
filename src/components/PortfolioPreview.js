import React, { Component } from "react";
import PortfolioDescription from "./PortfolioDescription";
import PortfolioComposition from "./PortfolioComposition";

class PortfolioPreview extends Component {
  constructor() {
    super();
    this.state = {
      portfolio_description: {
        expected_annual_returns: 0,
        VaR: 0,
        optimised_currency: ""
      },
      global_currency_exposure: [],
      asset_allocation: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/portfolio")
      .then(response => response.json())
      .then(jsondata => this.setState(jsondata))
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
