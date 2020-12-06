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
    <div className={styles.header}>
      <Link href={`/post/${props.reference.postId}`} passHref>
        <PostLink
          profileImage={props.reference.profileImage}
          username={props.reference.username}
          text={props.reference.text}
        />
      </Link>
      <div className={styles.feed_top_block}>
        <div className={styles.profile_image_container}>
          <img src={props.profileImage} className={styles.profile_image} />
        </div>
        <p className={styles.header_username}>{props.username}</p>
      </div>
      <div className={styles.liked_image_block}>
        <img src={likeFilled} className={styles.liked_image} />
      </div>
      <p className={styles.header_text}>{props.text}</p>
    </div>
  );
};

const PostLink = React.forwardRef(
  ({ onClick, href, profileImage, username, text }, ref) => {
    return (
      <a className={styles.link} href={href} onClick={onClick} ref={ref}>
        <div className={styles.post_link}>
          <div className={styles.posted_by_info}>
            <div className={styles.image_block}>
              <img src={profileImage} className={styles.image} />
            </div>
            <p className={styles.posted_by_username}>{username}</p>
          </div>
          <span className={styles.reference_text}>{text}</span>
        </div>
      </a>
    );
  }
);
