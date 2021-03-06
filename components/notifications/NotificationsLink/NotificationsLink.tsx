import React from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  tab: number;
  changeTab: (tab: number) => void;
}

export const NotificationsLink: React.FC<Props> = (props) => {
  return (
    <div
      className={styles.notifications_link}
      onClick={() => props.changeTab(props.tab)}
    >
      <p className={styles.notifications_link_text}>{props.title}</p>
    </div>
  );
};
