import React from "react";
import { PortfolioValuePostModalContent } from "../PortfolioValuePostModalContent/PortfolioValuePostModalContent";
import "./styles.module.scss";

interface Props {
  setPostingToFeed: () => void;
}

export const PortfolioValuePostModal: React.FC<Props> = (props) => {
  return (
    <div id="posting_modal">
      <div id="posting_portfolio_central_modal">
        <PortfolioValuePostModalContent
          setPostingToFeed={props.setPostingToFeed}
        />
      </div>
      <div
        id="posting_portfolio_value_feed"
        onClick={() => props.setPostingToFeed()}
      ></div>
    </div>
  );
};
