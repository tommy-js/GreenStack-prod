import React, { useEffect } from "react";
const likeFilled = require("../../../../public/like_filled.png");
import styles from "./styles.module.scss";
import Link from "next/link";

type Reference = {
  postId: string;
  text: string;
  username: string;
  profileImage: string;
};

interface Props {
  username: string;
  profileImage: string;
  text: string;
  reference: Reference;
  currentIndex: number;
  view: number;
  loadMore: (val: number) => void;
}

export const FeedLike: React.FC<Props> = (props) => {
  useEffect(() => {
    let postElement = document.getElementById(`id_${props.reference.postId}`);
    if (postElement) {
      const rect = postElement.getBoundingClientRect();
      if (rect.top >= 0) props.loadMore(props.currentIndex);
    }
  }, [props.view]);

  return (
    <div className={styles.feed_comment_header}>
      <Link href={`/home/post/${props.reference.postId}`}>
        <a>{props.reference.username}</a>
      </Link>
      <div className={styles.feed_comment_base}>
        <div className={styles.posted_by_info}>
          <div className={styles.feed_comment_image_block}>
            <img
              src={props.reference.profileImage}
              className={styles.feed_comment_image}
            />
          </div>
          <p className={styles.posted_by_username}>
            {props.reference.username}
          </p>
        </div>
        <span className={styles.feed_comment_base_reference_text}>
          {props.reference.text}
        </span>
      </div>
      <div className={styles.feed_top_block}>
        <div className={styles.feed_comment_image_block}>
          <img src={props.profileImage} className={styles.feed_comment_image} />
        </div>
        <p className={styles.feed_comment_header_username}>{props.username}</p>
      </div>
      <div className={styles.liked_image_block}>
        <img src={likeFilled} className={styles.liked_image} />
      </div>
      <p className={styles.feed_comment_header_text}>{props.text}</p>
    </div>
  );
};
