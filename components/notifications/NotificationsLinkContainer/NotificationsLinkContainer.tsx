import React from "react";
import { NotificationsLink } from "../NotificationsLink/NotificationsLink";
import { NotificationsHeader } from "../NotificationsHeader/NotificationsHeader";

interface LocalLink {
  changeTab: (tab: number) => void;
}

export const NotificationsLinkContainer: React.FC<LocalLink> = (props) => {
  return (
    <React.Fragment>
      <NotificationsHeader />
      <NotificationsLink
        title="Notifications"
        tab={1}
        changeTab={props.changeTab}
      />
      <NotificationsLink title="History" tab={2} changeTab={props.changeTab} />
      <NotificationsLink title="Settings" tab={3} changeTab={props.changeTab} />
    </React.Fragment>
  );
};
