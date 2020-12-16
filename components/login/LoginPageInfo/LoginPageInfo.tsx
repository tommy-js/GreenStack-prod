import React from "react";
import styles from "./styles.module.scss";
const explore = require("../../../public/explore.png");
const discussion = require("../../../public/discussion.png");
const learn = require("../../../public/learn.png");
const news = require("../../../public/news.png");

export const LoginPageFeedInfo: React.FC = () => {
  return (
    <div className={styles.login_page_info}>
      <div className={styles.image_container}>
        <img className={styles.image} src={explore} />
      </div>
      <div className={styles.text_box}>
        <p className={styles.header}>Explore Over 500 Companies</p>
        <p className={styles.text}>
          Easily find new companies to invest in. Add stocks to your portfolio
          and use our advanced tools to help you make the best choices
          long-term.
        </p>
      </div>
    </div>
  );
};

export const LoginPageCommunityInfo: React.FC = () => {
  return (
    <div className={styles.login_page_info}>
      <div className={styles.image_container}>
        <img className={styles.image} src={news} />
      </div>
      <div className={styles.text_box}>
        <p className={styles.header}>Stay Informed</p>
        <p className={styles.text}>
          Receive live updates, recent news, and discussions about companies and
          their stocks. Engage with those you follow and those who follow you in
          real-time.
        </p>
      </div>
    </div>
  );
};

export const LoginPageLearnInfo: React.FC = () => {
  return (
    <div className={styles.login_page_info}>
      <div className={styles.image_container}>
        <img className={styles.image} src={learn} />
      </div>
      <div className={styles.text_box}>
        <p className={styles.header}>Gather Knowledge</p>
        <p className={styles.text}>
          Learn from our dozens of in-depth, interactive tutorials. Become an
          expert on everything from the very basics of market investing to the
          Greeks and how you can use them to your advantage.
        </p>
      </div>
    </div>
  );
};
