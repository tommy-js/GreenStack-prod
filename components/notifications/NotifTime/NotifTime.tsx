import React from "react";
import { returnDate } from "./index";
import styles from "./styles.module.scss";

interface Props {
  timestamp: number;
}

export const NotifTime: React.FC<Props> = (props) => {
  return (
    <div className={styles.submitted_notif_time}>
      Received {returnDate(props.timestamp)}
    </div>
  );
};
