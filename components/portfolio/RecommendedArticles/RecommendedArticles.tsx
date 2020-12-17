import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
const diversification = require("../../../public/diversification.png");
const option = require("../../../public/option.png");
const dividend = require("../../../public/dividend.png");

export const RecommendedArticles: React.FC = () => {
  return (
    <div className={styles.recommended_articles}>
      <h1 className={styles.header}>Your Recommended Tutorials</h1>
      <div className={styles.recommended_block}>
        <div className={styles.recommended}>
          <Link href="/about/learn/protection">
            <div className={styles.recommended_inner}>
              <div className={styles.img_block}>
                <img src={diversification} className={styles.img} />
              </div>
              <p className={styles.tutorial_text}>Diversification</p>
            </div>
          </Link>
        </div>
        <div className={styles.recommended}>
          <Link href="/about/learn/options">
            <div className={styles.recommended_inner}>
              <div className={styles.img_block}>
                <img src={option} className={styles.img} />
              </div>
              <p className={styles.tutorial_text}>Options</p>
            </div>
          </Link>
        </div>
        <div className={styles.recommended}>
          <Link href="/about/learn/dividends">
            <div className={styles.recommended_inner}>
              <div className={styles.img_block}>
                <img src={dividend} className={styles.img} />
              </div>
              <p className={styles.tutorial_text}>Dividends</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
