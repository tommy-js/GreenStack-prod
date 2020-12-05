import React from "react";
import styles from "./styles.module.scss";

interface Props {
  postImage: string;
}

export const PostImage: React.FC<Props> = (props) => {
  return (
    <div className={styles.post_image}>
      <img className={styles.image} src={props.postImage} />
    </div>
  );
};
