import React from "react";
import styles from "./styles.module.scss";

interface Props {
  modWidth: () => void;
}

export const MobileSidebarOpen: React.FC<Props> = (props) => {
  return (
    <div className={styles.mobile_sidebar_open}>
      <button onClick={() => props.modWidth()}>Open</button>
    </div>
  );
};
