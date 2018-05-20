import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import PortfolioPreview from "./components/PortfolioPreview";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PortfolioPreview />
      </div>
    );
  }
}

export default App;
