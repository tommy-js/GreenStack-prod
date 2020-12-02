import React from "react";
const history = require("../../../public/nothing_found.png");
import styles from "./styles.module.scss";

export const VoidAlert: React.FC = () => {
  return (
    <React.Fragment>
      <h3 className={styles.void_text}>Nothing found!</h3>
      <div className={styles.void_img}>
        <img className={styles.history_void_img} src={history} />
      </div>
    </React.Fragment>
  );
};
