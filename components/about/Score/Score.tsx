import React from "react";
import styles from "./styles.module.scss";
const ecstatic = require("../../../public/very_happy.png");
const happy = require("../../../public/happy.png");
const neutral = require("../../../public/neutral.png");
const unhappy = require("../../../public/unhappy.png");
const mad = require("../../../public/mad.png");

export const Score: React.FC = () => {
  return (
    <div className={styles.score}>
      <div className={styles.image_container}>
        <img className={styles.image} src={ecstatic} />
      </div>
      <div className={styles.image_container}>
        <img className={styles.image} src={happy} />
      </div>
      <div className={styles.image_container}>
        <img className={styles.image} src={neutral} />
      </div>
      <div className={styles.image_container}>
        <img className={styles.image} src={unhappy} />
      </div>
      <div className={styles.image_container}>
        <img className={styles.image} src={mad} />
      </div>
    </div>
  );
};
