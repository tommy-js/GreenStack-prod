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
  const [type, setType] = useState(0);
  const [text, setText] = useState(props.text);

  useEffect(() => {
    if (props.reference) {
      setLink(props.reference.postId);
      setType(1);
    }
    if (props.text.length > 100) {
      let splitText = props.text.slice(0, 100);
      let finalText = `${splitText}...`;
      setText(finalText);
    }
  }, []);

  return (
    <Link href={`/post/${link}`} passHref>
      <HistoryLink
        postId={props.postId}
        text={text}
        timestamp={props.timestamp}
        type={type}
      />
    </Link>
  );
};

const HistoryLink = React.forwardRef(
  ({ onClick, href, postId, text, timestamp, type }, ref) => {
    function returnImg() {
      if (type === 0) return <img className={styles.image} src={page} />;
      else if (type === 1) {
        return <img className={styles.image} src={like} />;
      }
    }

    return (
      <a href={href} className={styles.link} onClick={onClick} ref={ref}>
        <div className={`${styles.profile_trade} ${styles.notifications_link}`}>
          <div className={styles.icon}>{returnImg()}</div>
          <div className={styles.text_block}>
            <p className={styles.text}>{text}</p>
            <p className={styles.timestamp}>{returnDate(timestamp)}</p>
          </div>
        </div>
      </a>
    );
  }
);
