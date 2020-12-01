import React from "react";
const notif = require("../../../public/notification.png");
import styles from "./styles.module.scss";

interface Props {
  notifyNew: boolean;
}

export const NewNotification: React.FC<Props> = (props) => {
  function renderNotif() {
    if (props.notifyNew === true) return <img id="notif_icon" src={notif} />;
    else return null;
  }

  return <div className={styles.notification_icon_block}>{renderNotif()}</div>;
};
