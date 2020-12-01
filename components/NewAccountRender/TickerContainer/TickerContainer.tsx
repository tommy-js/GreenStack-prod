import React from "react";
import styles from "./styles.module.scss";

interface Props {
  ticker: string;
  title: string;
  img: string;
}

export const TickerContainer: React.FC<Props> = (props) => {
  return (
    <div className={styles.ticker_container}>
      <p className={styles.ticker_id}>
        {props.title} #{props.ticker}
      </p>
      <div className={styles.small_image_container}>
        <img
          className={`${styles.initial_login_image} ${styles.small_color_img}`}
          src={props.img}
        />
      </div>
    </div>
  );
};
