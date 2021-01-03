import React, { useEffect, useState } from "react";
import { NotificationButton } from "../NotificationButton/NotificationButton";
import { Notification } from "../Notification/Notification";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import { NotificationItem } from "../../types/types";
import { returnNotifyNew } from "./index";
import styles from "./styles.module.scss";

interface Redux {
  notifications: NotificationItem[];
}

interface Props extends Redux {
  zeroTabOut: boolean;
  triggerDisplay: string;
  modDisplay: () => void;
}

const NotifIcon: React.FC<Props> = (props) => {
  const [notifyNew, setNotifyNew] = useState(false);
  const [height, setHeight] = useState("40px");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    modNotificationColor(props.notifications);
  }, []);

  useEffect(() => {
    if (open === true) setHeight("250px");
    else setHeight("40px");
  }, [open]);

  function modNotificationColor(notifications: NotificationItem[]) {
    let returnViewed = returnNotifyNew(notifications);
    setNotifyNew(returnViewed);
  }

  function modHeight() {
    props.modDisplay();
    setOpen(!open);
  }

  return (
    <div className={styles.notification_icon} style={{ height: height }}>
      <NotificationButton notifyNew={notifyNew} triggerDropdown={modHeight} />
      <div style={{ display: props.triggerDisplay }}>
        <Notification
          zeroTabOut={props.zeroTabOut}
          modNotificationColor={modNotificationColor}
        />
      </div>
    </div>
  );
};

export const NotificationIcon = connect(mapStateToProps)(NotifIcon);
