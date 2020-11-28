import React from "react";
const portfolio_background = require("../../../public/portfolio_background.png");
import "./styles.module.scss";

export const InitialPortfolioBackground: React.FC = () => {
  return (
    <div className="portfolio_background_container">
      <img id="portfolio_background" src={portfolio_background} />
    </div>
  );
};
