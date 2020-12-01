import React from "react";
import { Notif } from "../Notif/Notif";
import { NavBar } from "../../navigation/NavBar/NavBar";
import { mapStateToProps } from "../../actions/actions";
import { connect } from "react-redux";
import { NotificationItem } from "../../types/types";
import "./styles.module.scss";

interface Redux {
  notifications: NotificationItem[];
}

const NotifPage: React.FC<Redux> = ({ notifications }) => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="notifications_page">
        <h2 className="notification_header">Your Notifications</h2>
        {notifications.map((el: any) => (
          <Notif content={el.content} timestamp={el.timestamp} id={el.id} />
        ))}
      </div>
    </React.Fragment>
  );
};

export const NotificationsPage = connect(mapStateToProps)(NotifPage);
