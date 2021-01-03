import React from "react";
import { NotificationsLink } from "../NotificationsLink/NotificationsLink";
import { NotificationsHeader } from "../NotificationsHeader/NotificationsHeader";
import styles from "./styles.module.scss";

interface LocalLink {
  changeTab: (tab: number) => void;
}

export const NotificationsLinkContainer: React.FC<LocalLink> = (props) => {
  return (
    <div className={styles.notifications_link_container}>
      <NotificationsHeader />
      <NotificationsLink
        title="Notifications"
        tab={1}
        changeTab={props.changeTab}
      />
      <NotificationsLink title="History" tab={2} changeTab={props.changeTab} />
      <NotificationsLink title="Settings" tab={3} changeTab={props.changeTab} />
    </div>
  );
};
