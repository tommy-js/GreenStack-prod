import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const LearnMore: React.FC = () => {
  return (
    <h3 className={styles.learn_more}>
      Still have questions? Check out our{" "}
      <Link href="/information">
        <a className={styles.link}>FAQ</a>
      </Link>
    </h3>
  );
};
