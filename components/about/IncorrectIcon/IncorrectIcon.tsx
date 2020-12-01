import React from "react";
const incorrect = require("../../../public/x_mark.png");
import styles from "./styles.module.scss";

export const IncorrectIcon: React.FC = () => {
  return (
    <div className={styles.indicator_icon}>
      <img className={styles.icon_img} src={incorrect} />
    </div>
  );
};
