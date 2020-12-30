import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import styles from "./styles.module.scss";

interface Redux {
  money: number;
  setPostingToFeed: () => void;
}

const SidebarPortfolioValueRender: React.FC<Redux> = (props) => {
  return (
    <div
      className={`${styles.sidebar_element} ${styles.portfolio_value}`}
      onClick={() => props.setPostingToFeed()}
    >
      <p className={styles.sidebar_element_text}>${props.money}</p>
      <div className={styles.sidebar_element_hover}>
        <p className={styles.sidebar_element_hover_text}>Portfolio Value</p>
      </div>
    </div>
  );
};

export const SidebarPortfolioValue = connect(mapStateToProps)(
  SidebarPortfolioValueRender
);
