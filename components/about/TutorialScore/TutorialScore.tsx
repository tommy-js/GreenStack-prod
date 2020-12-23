import React from "react";
import { Score } from "../Score/Score";
import styles from "./styles.module.scss";

export const TutorialScore: React.FC = () => {
  return (
    <div>
      <h3 className={styles.header}>How Would You Rate This Tutorial?</h3>
      <Score />
    </div>
  );
};
