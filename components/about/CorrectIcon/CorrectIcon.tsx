import React from "react";
const correct = require("../../../public/checkmark.png");
import styles from "./styles.module.scss";

export const CorrectIcon: React.FC = () => {
  return (
    <div className={styles.indicator_icon}>
      <img className={styles.icon_img} src={correct} />
    </div>
  );
};
