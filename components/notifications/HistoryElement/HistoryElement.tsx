import React, { useState } from "react";
import Link from "next/link";
import { returnDate } from "./index";
const page = require("../../../public/blank_post.png");
const like = require("../../../public/like.png");
const dislike = require("../../../public/dislike.png");
import styles from "./styles.module.scss";

interface Hist {
  style: string;
  text: string;
  timestamp: number;
}

export const HistoryElement: React.FC<Hist> = (props) => {
  const [text] = useState(props.text.slice(0, 150));

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
    <div key={props.timestamp}>
      <Link href="/profile" passHref>
        <HistoryLink text={text} timestamp={props.timestamp} />
      </Link>
    </div>
  );
};

const HistoryLink = React.forwardRef(
  ({ onClick, href, text, timestamp }, ref) => {
    return (
      <a
        href={href}
        onClick={onClick}
        ref={ref}
        className={styles.history_element}
      >
        <div className={styles.history_icon}>
          <img className={styles.history_img} src={page} />
        </div>
        <div className={styles.history_text_block}>
          <p className={styles.text}>{text}</p>
          <p className={styles.timestamp}>{returnDate(timestamp)}</p>
        </div>
      </a>
    );
  }
);
