import React from "react";
import styles from "./styles.module.scss";

interface Props {
  postImage: string;
  updateModal: (view: boolean) => void;
}

export const ImageModal: React.FC<Props> = (props) => {
  return (
    <div className={styles.image_modal}>
      <div
        className={styles.grey_overlay}
        onClick={() => props.updateModal(false)}
      ></div>
      <div className={styles.post_image}>
        <img className={styles.image} src={props.postImage} />
      </div>
    </div>
  );
};
