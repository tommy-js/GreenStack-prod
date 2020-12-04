import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Redux {
  money: number;
}

const NotifPortfolioValue: React.FC<Redux> = (props) => {
  return (
    <div className={styles.notifications_link_text}>
      <Link href="/portfolio">
        <a className={`${styles.no_style} ${styles.notifications_link}`}>
          (${props.money})
        </a>
      </Link>
    </div>
  );
};

export const NotificationsPortfolioValue = connect(mapStateToProps)(
  NotifPortfolioValue
);
