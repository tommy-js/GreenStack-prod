import React from "react";
import { NotificationsPortfolioValue } from "../NotificationsPortfolioValue/NotificationsPortfolioValue";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Redux {
  username: string;
}

const NotificationsHead: React.FC<Redux> = (props) => {
  return (
    <div className={styles.notifications_header}>
      <div className={styles.notifications_link_text}>
        <Link href="/profile">
          <a className={styles.no_style}>{props.username}</a>
        </Link>
      </div>
      <NotificationsPortfolioValue />
    </div>
  );
};

export const NotificationsHeader = connect(mapStateToProps)(NotificationsHead);
