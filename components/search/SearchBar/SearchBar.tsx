import React from "react";
import styles from "./styles.module.scss";
const magnifying_glass = require("../../../public/search_icon.png");

export const SearchBar: React.FC = () => {
  return (
    <div className={styles.search_bar}>
      <input className={styles.search_input} placeholder="Search" />
      <h2 className={styles.text}>What are you looking for?</h2>
      <div className={styles.image_block}>
        <img className={styles.img} src={magnifying_glass} />
      </div>
    </div>
  );
};
