import React from "react";
import styles from "./styles.module.scss";

interface Props {
  highlightProfileImage: string;
  highlightUsername: string;
  highlightBio: string;
}

export const UserIndexHoverOver: React.FC<Props> = (props) => {
  return (
    <div className={styles.transparent_outer}>
      <div className={styles.user_index_hover_block}>
        <div className={styles.user_index_hover_img_block}>
          <img
            className={styles.user_index_hover_img}
            src={props.highlightProfileImage}
          />
        </div>
        <p className={styles.user_index_hover_username}>
          {props.highlightUsername}
        </p>
        <p className={styles.user_index_hover_bio}>{props.highlightBio}</p>
      </div>
    </div>
  );
};
