import React from "react";
import { Notif } from "../Notif/Notif";
import { NavBar } from "../../navigation/NavBar/NavBar";
import { EmptyNotifications } from "../EmptyNotifications/EmptyNotifications";
import { NotificationItem } from "../../types/types";
import { mapStateToProps } from "../../actions/actions";
import { connect } from "react-redux";
import styles from "./styles.module.scss";

interface Redux {
  notifications: NotificationItem[];
}

const NotifPage: React.FC<Redux> = ({ notifications }) => {
  function returnNotification() {
    if (notifications.length > 0) {
      return (
        <div>
          {notifications.map((el: any) => (
            <Notif content={el.content} timestamp={el.timestamp} id={el.id} />
          ))}
        </div>
      );
    } else return <EmptyNotifications />;
  }

  return (
    <React.Fragment>
      <NavBar />
      <div className={styles.notifications_page}>
        <h2 className={styles.notification_header}>Your Notifications</h2>
        {returnNotification()}
      </div>
    </React.Fragment>
  );
};

export const NotificationsPage = connect(mapStateToProps)(NotifPage);
