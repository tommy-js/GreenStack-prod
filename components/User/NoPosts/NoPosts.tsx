import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
const blank_post = require("../../../public/blank_post.png");

export const NoPosts: React.FC = () => {
  return (
    <div className={styles.no_posts}>
      <h1 className={styles.text}>Looks Like You Haven't Posted Anything...</h1>
      <Link href="/" passHref>
        <HomeLink />
      </Link>
    </div>
  );
};

const HomeLink = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <div className={styles.highlight_container}>
      <a className={styles.link} href={href} onClick={onClick} ref={ref}>
        <div className={styles.image_container}>
          <img className={styles.image} src={blank_post} />
        </div>
        <h2 className={styles.subtext}>Post something to your feed</h2>
      </a>
    </div>
  );
});
