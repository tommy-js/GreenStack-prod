import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const SignedOutNavBar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a className={styles.nav_el}>TIKR</a>
      </Link>
      <Link href="information">
        <a className={styles.nav_el}>About</a>
      </Link>
    </div>
  );
};
