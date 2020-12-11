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
    <Link href="/profile">
      <NotificationLink username={props.username} />
    </Link>
  );
};

const NotificationLink = React.forwardRef(
  ({ onClick, href, username }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        <div className={styles.notifications_header}>
          <div className={styles.notifications_link_text}>
            <a className={styles.no_style}>{username}</a>
          </div>
        </div>
      </a>
    );
  }
);

export const NotificationsHeader = connect(mapStateToProps)(NotificationsHead);
