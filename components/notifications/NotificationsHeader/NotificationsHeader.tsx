import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Redux {
  username: string;
}

const NotificationsHead: React.FC<Redux> = (props) => {
  return (
    <Link href="/home/profile">
      <a className={`${styles.no_style} ${styles.notifications_link_text}`}>
        {props.username}
      </a>
    </Link>
  );
};

export const NotificationsHeader = connect(mapStateToProps)(NotificationsHead);
