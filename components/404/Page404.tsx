import React from "react";
import styles from "./styles.module.scss";
const error404 = require("../../public/404.png");
const background = require("../../public/background.jpg");

export const Imp404: React.FC = () => {
  return (
    <div>
      <img className={styles.background} src={background} />
      <div className={styles.page}>
        <div className={styles.img_block}>
          <img src={error404} className={styles.img} />
        </div>
        <p className={styles.text}>404</p>
        <p className={styles.subtext}>Seems You've Gotten Lost!</p>
      </div>
    </div>
  );
};
