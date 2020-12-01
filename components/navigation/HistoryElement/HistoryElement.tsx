import React from "react";
import Link from "next/link";
import { returnDate } from "./index";
const page = require("../images/post_img.png");
const like = require("../images/like.png");
const dislike = require("../images/dislike.png");
import styles from "./styles.module.scss";

interface Hist {
  style: string;
  text: string;
  timestamp: number;
}

export const HistoryElement: React.FC<Hist> = (props) => {
  function returnImg() {
    if (props.style === "Post") {
      return <img className={styles.history_img} src={page} />;
    } else if (props.style === "Like") {
      return <img className={styles.history_img} src={like} />;
    } else if (props.style === "Dislike") {
      return <img className={styles.history_img} src={dislike} />;
    } else return null;
  }

  return (
    <React.Fragment>
      <Link to="/home/profile">
        <a className={`${styles.link_style} ${styles.notifications_link}`}>
          {props.text}
        </a>
      </Link>
      <div className={styles.history_icon}>{returnImg()}</div>
      <div className={styles.history_text_block}>
        <p className={styles.history_text}>{props.text}</p>
        <p className={styles.history_text}>{returnDate(props.timestamp)}</p>
      </div>
    </React.Fragment>
  );
};
