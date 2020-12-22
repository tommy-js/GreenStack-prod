import React, { useState } from "react";
import { Buttons } from "../Buttons/Buttons";
import styles from "./styles.module.scss";

interface Props {
  post: any;
}

export const EditPage: React.FC<Props> = (props) => {
  const [title, setTitle] = useState(props.post.title);
  const [text, setText] = useState(props.post.text);

  return (
    <div className={styles.edit_page}>
      <input
        className={styles.title_input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className={styles.text_input}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Buttons postId={props.post.postId} title={title} text={text} />
    </div>
  );
};
