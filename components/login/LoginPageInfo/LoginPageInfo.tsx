import React from "react";
import styles from "./styles.module.scss";
const discussion = require("../../../public/discussion.png");
const learn = require("../../../public/learn.png");
const news = require("../../../public/news.png");

export const LoginPageFeedInfo: React.FC = () => {
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

export const LoginPageCommunityInfo: React.FC = () => {
  return (
    <div className={styles.login_page_info}>
      <div className={styles.image_container}>
        <img className={styles.image} src={discussion} />
      </div>
      <div className={styles.text_box}>
        <p className={styles.header}>Be Social</p>
        <p className={styles.text}>
          Follow and be followed, engage in discussion and make bets with others
          on where the stocks are going to go. Comment on companies and posts
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
