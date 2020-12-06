import React from "react";
import styles from "./styles.module.scss";

export const PostHeader: React.FC = () => {
  return (
    <div className={styles.post_header}>
      <h1 className={styles.text}>Share Your Thoughts</h1>
    </div>
  );
};
