import React, { useState } from "react";
import { NewsCompOptions } from "../NewsCompOptions/NewsCompOptions";
import styles from "./styles.module.scss";
const externalLink = require("../../../public/external_link.png");

interface Props {
  title: string;
  author: string;
  description: string;
  url: string;
}

export const NewsComponent: React.FC<Props> = (props) => {
  const [postOpacity, setPostOpacity] = useState(0);

  return (
    <div
      className={styles.news_block}
      onMouseEnter={() => setPostOpacity(1)}
      onMouseLeave={() => setPostOpacity(0)}
      key={props.url}
    >
      <a className={styles.standard_link} href={props.url}>
        <div className={styles.title_container}>
          <h3 className={styles.title}>{props.title}</h3>
          <div className={styles.image_block}>
            <img src={externalLink} className={styles.image} />
          </div>
        </div>
        <p className={styles.author}>{props.author}</p>
        <p className={styles.description}>{props.description}</p>
      </a>
      <NewsCompOptions
        title={props.title}
        text={props.description}
        accompaniedURL={props.url}
        postOpacity={postOpacity}
      />
    </div>
  );
};
