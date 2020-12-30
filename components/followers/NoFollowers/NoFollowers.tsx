import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
const following = require("../../../public/following.png");
const following_filled = require("../../../public/following_filled.png");

export const NoFollowers: React.FC = () => {
  return (
    <div className={styles.no_followers}>
      <h1 className={styles.header}>You Don't Have Any Followers Yet...</h1>
      <Link href="/" passHref>
        <HomeLink />
      </Link>
    </div>
  );
};

const HomeLink = React.forwardRef(({ onClick, href }, ref) => {
  const [image, setImage] = useState(following);

  function onHoverOver() {
    setImage(following_filled);
  }

  function onHoverOut() {
    setImage(following);
  }

  return (
    <div
      className={styles.action_box}
      onMouseEnter={() => onHoverOver()}
      onMouseLeave={() => onHoverOut()}
    >
      <a className={styles.link} href={href} onClick={onClick} ref={ref}>
        <div className={styles.image_container}>
          <img className={styles.image} src={image} />
        </div>
        <h2 className={styles.subheader}>
          Start posting to draw in some people
        </h2>
      </a>
    </div>
  );
});
