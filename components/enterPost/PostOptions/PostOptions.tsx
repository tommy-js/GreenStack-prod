import React from "react";
import styles from "./styles.module.scss";

interface Props {
  allowComments: boolean;
  allowLikes: boolean;
  optionHeight: string;
  modAllowComments: () => void;
  modAllowLikes: () => void;
  valueOpacity: number;
}

export const PostOptions: React.FC<Props> = (props) => {
  return (
    <div
      className={styles.post_options}
      style={{ height: props.optionHeight, opacity: props.valueOpacity }}
    >
      <label>Allow Comments</label>
      <input
        type="checkbox"
        onChange={() => props.modAllowComments()}
        checked={props.allowComments}
      />
      <label>Allow Likes</label>
      <input
        type="checkbox"
        onChange={() => props.modAllowLikes()}
        checked={props.allowLikes}
      />
    </div>
  );
};
