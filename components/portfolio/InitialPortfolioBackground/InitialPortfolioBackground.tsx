import React from "react";
import portfolio_background from "../../images/portfolio_background.png";
import "./styles.module.scss";

export const InitialPortfolioBackground: React.FC = () => {
  return (
    <div className="portfolio_background_container">
      <img id="portfolio_background" src={portfolio_background} />
    </div>
  );
};
