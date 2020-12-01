import React from "react";
// ONLY FOR TEST
const profileImage = require("../../../public/generic_icon.png");
import styles from "./styles.module.scss";

export const ProfileImage: React.FC = () => {
  return (
    <div className={styles.profile_image_block}>
      <img className={styles.profile_image} src={profileImage} />
    </div>
  );
};
