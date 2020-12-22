import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

type Reference = {
  postId: string;
  text: string;
  postUsername: string;
};

interface Props {
  postUsername: string;
  profileImage: string;
  text: string;
  reference: Reference;
  currentIndex: number;
  view: number;
  loadMore: (val: number) => void;
}

export const FeedComment: React.FC<Props> = (props) => {
  useEffect(() => {
    let postElement = document.getElementById(`id_${props.reference.postId}`);
    if (postElement) {
      const rect = postElement.getBoundingClientRect();
      if (rect.top >= 0) props.loadMore(props.currentIndex);
    }
  }, [props.view]);

  return (
    <Link href={`/post/${props.reference.postId}`}>
      <CommentLink
        profileImage={props.profileImage}
        postUsername={props.postUsername}
        text={props.text}
        referenceText={props.reference.text}
        referenceUsername={props.reference.username}
      />
    </Link>
  );
};

const CommentLink = React.forwardRef(
  (
    {
      onClick,
      href,
      profileImage,
      postUsername,
      text,
      referenceText,
      referenceUsername,
    },
    ref
  ) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        <div className={styles.feed_comment_header}>
          <div className={styles.feed_top_block}>
            <div className={styles.feed_comment_image_block}>
              <img src={profileImage} className={styles.feed_comment_image} />
            </div>
            <p className={styles.feed_comment_header_username}>
              {postUsername}
            </p>
            <p className={styles.sub_text}>
              commented on a post by {referenceUsername}
            </p>
          </div>
          <p className={styles.feed_comment_header_text}>{text}</p>
        </div>
        <div className={styles.feed_comment_base}>
          <p>{referenceUsername}</p>
          <span className={styles.feed_comment_base_reference_text}>
            {referenceText}
          </span>
        </div>
      </a>
    );
  }
);
