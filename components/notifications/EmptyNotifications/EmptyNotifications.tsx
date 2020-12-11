import React from "react";
import styles from "./styles.module.scss";
const no_messages = require("../../../public/no_messages.png");

export const EmptyNotifications: React.FC = () => {
  return (
    <div className={styles.notifications_icon}>
      <div className={styles.image_block}>
        <img className={styles.image} src={no_messages} />
      </div>
      <p className={styles.notification}>There's nothing new :(</p>
    </div>
  );
};
