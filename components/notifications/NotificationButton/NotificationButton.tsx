import React from "react";
import { ProfileImage } from "../../navigation/ProfileImage/ProfileImage";
import { NewNotification } from "../NewNotification/NewNotification";
import styles from "./styles.module.scss";

interface Props {
  notifyNew: boolean;
  triggerDropdown: () => void;
}

export const NotificationButton: React.FC<Props> = (props) => {
  return (
    <div
      className={styles.notification_button}
      onClick={() => props.triggerDropdown()}
    >
      <ProfileImage />
      <NewNotification notifyNew={props.notifyNew} />
    </div>
  );
};
