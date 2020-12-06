import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
const logo = require("../../../public/logo.png");

export const NavBarHeader: React.FC = () => {
  return (
    <Link href="/" passHref>
      <HomeLink />
    </Link>
  );
};

const HomeLink = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <div className={styles.navbar_header}>
      <a href={href} onClick={onClick} ref={ref}>
        <div className={styles.image_container}>
          <img src={logo} className={styles.image} />
        </div>
        <div className={styles.text_block}>
          <span className={styles.text}>GreenStack</span>
        </div>
      </a>
    </div>
  );
});
