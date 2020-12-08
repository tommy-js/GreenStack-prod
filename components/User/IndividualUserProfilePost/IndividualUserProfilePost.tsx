import React from "react";
import { PostStatus } from "../PostStatus/PostStatus";
import Link from "next/link";
import { PostItem } from "../../types/types";
import styles from "./styles.module.scss";

interface Props {
  post: PostItem;
}

export const IndividualUserProfilePost: React.FC<Props> = ({ post }: Props) => {
  return (
    <Link href={`/post/${post.postId}`} passHref>
      <PostLink
        postId={post.postId}
        title={post.title}
        text={post.text}
        likes={post.likes}
        dislikes={post.dislikes}
        timestamp={post.timestamp}
        comments={post.comments}
      />
    </Link>
  );
};

const PostLink = React.forwardRef(
  (
    {
      onClick,
      href,
      postId,
      title,
      text,
      likes,
      dislikes,
      timestamp,
      comments,
    },
    ref
  ) => {
    return (
      <a className={styles.link} href={href} onClick={onClick} ref={ref}>
        <div className={styles.user_profile_post}>
          <h2 className={styles.user_profile_title}>{title}</h2>
          <p className={styles.user_profile_text}>{text}</p>
          <PostStatus
            likes={likes}
            dislikes={dislikes}
            timestamp={timestamp}
            commentCount={comments.length}
          />
        </div>
      </a>
    );
  }
);
