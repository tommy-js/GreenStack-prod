import React from "react";
import { PortfolioValuePostModalContent } from "../PortfolioValuePostModalContent/PortfolioValuePostModalContent";
import styles from "./styles.module.scss";

interface Props {
  setPostingToFeed: () => void;
}

export const PortfolioValuePostModal: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <div className={styles.portfolio_value_post_modal}>
        <div
          className={styles.toggle}
          onClick={() => props.setPostingToFeed()}
        ></div>
        <div className={styles.body}>
          <PortfolioValuePostModalContent
            setPostingToFeed={props.setPostingToFeed}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
