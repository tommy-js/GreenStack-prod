import React from "react";
import styles from "./styles.module.scss";

interface Props {
  headline: string;
  res: string | null;
}

export const KnowledgeCheckHeadline: React.FC<Props> = (props) => {
  return (
    <h2 id={styles.knowledge_check_headline}>
      {props.headline}{" "}
      <span className={`${styles.render_ans} ${styles.correct_ans}`}>
        {props.res}
      </span>
    </h2>
  );
};
