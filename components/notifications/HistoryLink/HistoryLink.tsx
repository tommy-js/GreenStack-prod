import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const HistoryLink: React.FC = () => {
  return (
    <Link href="/profile">
      <a className={styles.history_link}>More</a>
    </Link>
  );
};
