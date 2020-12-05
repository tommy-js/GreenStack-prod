import React from "react";
const logo = require("../../../public/logo.png");
import styles from "./styles.module.scss";

export const LoginLogo: React.FC = () => {
  return (
    <div className={styles.login_logo}>
      <div className={styles.logo_box}>
        <div className={styles.logo_circle}>
          <div className={styles.logo_image_container}>
            <img className={styles.logo} src={logo} />
          </div>
        </div>
        <p className={styles.text}>GreenStack</p>
      </div>
    </div>
  );
};
