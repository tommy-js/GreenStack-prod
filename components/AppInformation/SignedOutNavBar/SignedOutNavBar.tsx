import React from "react";
import Link from "next/link";
const logo = require("../../../public/logo.png");
import styles from "./styles.module.scss";

export const SignedOutNavBar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.nav_el}>
        <Link href="/">
          <a className={styles.link}>GreenStack</a>
        </Link>
      </div>
      <div className={styles.nav_el}>
        <Link href="information">
          <a className={styles.link}>About</a>
        </Link>
      </div>
      <Link href="/" passHref>
        <HomeLink />
      </Link>
    </div>
  );
};

const HomeLink = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a className={styles.link} href={href} onClick={onClick} ref={ref}>
      <div className={styles.logo}>
        <div className={styles.image_block}>
          <img className={styles.image} src={logo} />
        </div>
        <div className={styles.text}>
          <span>GreenStack</span>
        </div>
      </div>
    </a>
  );
});
