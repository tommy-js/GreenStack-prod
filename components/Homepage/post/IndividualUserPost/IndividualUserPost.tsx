import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

interface Props {
  postId: string;
  title: string;
  text: string;
  timestamp: number;
  likes: number;
  dislikes: number;
  modPostLoad: (postId: string) => void;
}

export const IndividualUserPost: React.FC<Props> = (props) => {
  return (
    <div>
      <Link href={`/home/post/[${props.postId}]`}>
        <a>{props.title}</a>
      </Link>
      <div
        className={`${styles.standard_link} ${styles.homepage_block_component}`}
      >
        <h2 className={styles.individual_user_post_title}>{props.title}</h2>
        <p className={styles.individual_user_post_textblock}>{props.text}</p>
        <div className={styles.individual_user_post_infoblock}>
          <p className={styles.individual_user_post_inline}>
            {props.timestamp}
          </p>
          <p className={styles.individual_user_post_inline}>
            likes: {props.likes}
          </p>
          <p className={styles.individual_user_post_inline}>
            dislikes: {props.dislikes}
          </p>
        </div>
      </div>
    </div>
  );
};
