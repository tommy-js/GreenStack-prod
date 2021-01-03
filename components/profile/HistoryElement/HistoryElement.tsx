import React from "react";
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
  typename: string;
  modPostLoad: (postId: string) => void;
}

export const HistoryElement: React.FC<Props> = (props) => {
  return (
    <Link href={`/post/${props.postId}`} passHref>
      <HistoryLink
        typename={props.typename}
        postId={props.postId}
        text={props.text}
        timestamp={props.timestamp}
      />
    </Link>
  );
};

const HistoryLink = React.forwardRef(
  ({ onClick, href, typename, postId, text, timestamp }, ref) => {
    function returnImg() {
      if (typename === "Post") {
        return <img className={styles.history_img} src={page} />;
      } else if (typename === "Like") {
        return <img className={styles.history_img} src={like} />;
      } else if (typename === "Dislike") {
        return <img className={styles.history_img} src={dislike} />;
      } else return null;
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
