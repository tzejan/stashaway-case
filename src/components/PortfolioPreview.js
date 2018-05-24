import React, { Component } from "react";
import PortfolioDescription from "./PortfolioDescription";
import PortfolioComposition from "./PortfolioComposition";

class PortfolioPreview extends Component {
  constructor() {
    super();
    this.state = {
      new_allocation: {
        portfolio_description: {
          expected_annual_returns: 0,
          VaR: 0,
          optimised_currency: ""
        },
        global_currency_exposure: [],
        asset_allocation: []
      },
      current_allocation: {
        portfolio_description: {
          expected_annual_returns: 0,
          VaR: 0,
          optimised_currency: ""
        },
        global_currency_exposure: [],
        asset_allocation: []
      },
      current_display: "current"
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/portfolio")
      .then(response => response.json())
      .then(jsondata => this.setState(jsondata))
      .catch(err => console.log(err));
  }

  toggleAllocationButton = () => {
    if (this.state.current_display === "current") {
      this.setState({ current_display: "new" });
    } else {
      this.setState({ current_display: "current" });
    }
  }

  render() {
    const allocationToDisplay = this.state.current_display === "new"? this.state.new_allocation : this.state.current_allocation;
    return (
      <div className="portfolio-preview">
        <PortfolioDescription
          portfolio_description={allocationToDisplay.portfolio_description}
        />
        <PortfolioComposition
          global_currency_exposure={
            allocationToDisplay.global_currency_exposure
          }
          asset_allocation={allocationToDisplay.asset_allocation}
          current_display={this.state.current_display}
          toggleAllocation={this.toggleAllocationButton}
        />
      </div>
    );
  }
}

export default PortfolioPreview;
