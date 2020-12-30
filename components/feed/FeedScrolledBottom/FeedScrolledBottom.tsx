import React from "react";
import styles from "./styles.module.scss";

export const FeedScrolledBottom: React.FC = () => {
  return (
    <div className={styles.feed_scrolled_bottom}>
      <p className={styles.feed_scrolled_bottom_text}>End Of The Line...</p>
      <p className={styles.feed_scrolled_bottom_subtext}>Reload for more!</p>
    </div>
  );
};
