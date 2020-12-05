import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

interface Props {
  ticker: string;
  title: string;
  img: string;
  filledImg: string;
  stockId: string;
  modSelected: (stockId: string) => void;
}

export const TickerContainer: React.FC<Props> = (props) => {
  const [selected, setSelected] = useState(false);
  const [color, setColor] = useState("#2f2f2f");
  const [usedImg, setUsedImg] = useState(props.img);

  useEffect(() => {
    if (selected === true) {
      setColor("#57a773");
      setUsedImg(props.filledImg);
    } else {
      setColor("#2f2f2f");
      setUsedImg(props.img);
    }
  }, [selected]);

  function selectCompany() {
    setSelected(!selected);
    props.modSelected(props.stockId);
  }

  return (
    <div className={styles.ticker_container} onClick={() => selectCompany()}>
      <p className={styles.ticker_id} style={{ color: color }}>
        <span className={styles.ticker_title}>{props.title}</span>{" "}
        <span className={styles.ticker}>#{props.ticker}</span>
      </p>
      <div className={styles.small_image_container}>
        <img
          className={`${styles.initial_login_image} ${styles.small_color_img}`}
          src={usedImg}
        />
      </div>
    </div>
  );
};
