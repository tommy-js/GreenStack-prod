import React from "react";
import { Buttons } from "../Buttons/Buttons";
import styles from "./styles.module.scss";

interface Props {
  post: any;
}

export const EditPage: React.FC<Props> = (props) => {
  return (
    <div className={styles.edit_page}>
      <input className={styles.title_input} value={props.post.title} />
      <textarea className={styles.text_input} value={props.post.text} />
      <Buttons postId={props.post.postId} />
    </div>
  );
};
