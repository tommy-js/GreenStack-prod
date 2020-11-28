import React from "react";
import "./styles.module.scss";

interface Props {
  text: string;
}

export const PortfolioHeader: React.FC<Props> = (props) => {
  return <h2 className="portfolio_header">{props.text}</h2>;
};
