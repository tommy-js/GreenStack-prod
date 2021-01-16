import React, { useState, useEffect } from "react";
import Link from "next/link";
import { returnDate } from "./index";
import styles from "./styles.module.scss";
const page = require("../../../public/blank_post.png");
const like = require("../../../public/like.png");
const dislike = require("../../../public/dislike.png");

interface Props {
  text: string;
  timestamp: number;
  postId: string;
  reference?: any;
}

export const HistoryElement: React.FC<Props> = (props) => {
  const [link, setLink] = useState(props.postId);

  useEffect(() => {
    if (props.reference) {
      setLink(props.reference.postId);
    }
  }, []);

  return (
    <Link href={`/post/${link}`} passHref>
      <HistoryLink
        postId={props.postId}
        text={props.text}
        timestamp={props.timestamp}
      />
    </Link>
  );
};

const HistoryLink = React.forwardRef(
  ({ onClick, href, postId, text, timestamp }, ref) => {
    function returnImg() {
      return <img className={styles.history_img} src={page} />;
    }

    return (
      <a href={href} className={styles.link} onClick={onClick} ref={ref}>
        <div className={`${styles.profile_trade} ${styles.notifications_link}`}>
          <div className={styles.history_icon}>{returnImg()}</div>
          <div className={styles.history_text_block}>
            <p className={styles.history_text}>{text}</p>
            <p className={styles.history_text}>{returnDate(timestamp)}</p>
          </div>
        </div>
      </a>
    );
  }
);
