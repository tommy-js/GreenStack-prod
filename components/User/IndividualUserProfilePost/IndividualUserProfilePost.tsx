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
        postImage={post.postImage}
        username={post.username}
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
      postImage,
      username,
    },
    ref
  ) => {
    function returnImage() {
      if (postImage != "null") {
        return (
          <div className={styles.image_block}>
            <img className={styles.image} src={postImage} />
          </div>
        );
      } else return null;
    }

    return (
      <a className={styles.link} href={href} onClick={onClick} ref={ref}>
        <div className={styles.user_profile_post}>
          <h2 className={styles.title}>{title}</h2>
          {returnImage()}
          <p className={styles.text}>{text}</p>
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
