import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
const technology = require("../../../../public/technology.jpg");

export const TechnologyBody: React.FC = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.header}>Technology</h1>
      <p className={styles.subheader}>
        The technology sector is centered around the creation and proliferation
        of new tech.
      </p>
      <p className={styles.text}>
        Since the early 2000s the technology sector has been exploding in
        prominance within the world economy. Brands such as{" "}
        <Link href="/stock/d09a46e3-9edf-4c15-a9c6-fcabca281146">
          <a className={styles.link}>Apple</a>
        </Link>
        ,{" "}
        <Link href="/stock/e879e35a-9a81-48d7-8a71-423ef48d6820">
          <a className={styles.link}>Microsoft</a>
        </Link>
        , and{" "}
        <Link href="/stock/850b742f-2716-4710-b7d1-be8923ee7f12">
          <a className={styles.link}>Slack</a>
        </Link>{" "}
        have become household names. Because of the high growth these companies
        often maintain, investing in a new up and coming tech company can be
        highly lucrative. At the same time, it can be extremely risky, as their
        success hinges entirely on their target market actually using their
        product.
      </p>
      <div className={styles.image_block}>
        <img src={technology} className={styles.image} />
      </div>
      <p className={styles.text}>
        In general, more established brands can be a very good addition to any
        portfolio. Startups in this scene should be examined with great
        scrutiny, however.
      </p>
    </div>
  );
};
