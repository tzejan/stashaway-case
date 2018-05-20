import React from 'react';
import PortfolioDescription from './PortfolioDescription';
import PortfolioComposition from './PortfolioComposition';

const PortfolioPreview = () => (
    <div className="portfolio-preview">
        <PortfolioDescription/>
        <PortfolioComposition/>
    </div>
);

export default PortfolioPreview;
