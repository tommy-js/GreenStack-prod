import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  subtitle: string;
  path: string;
  percent: number;
}

export const LearnComponent: React.FC<Props> = (props) => {
  const [renderOpac, setRenderOpac] = useState(0);

  function renderProgress() {
    if (props.percent < 25)
      return <p className={styles.progress_flare}>Just started!</p>;
    else if (props.percent >= 25 && props.percent < 75)
      return <p className={styles.progress_flare}>Getting there!</p>;
    else if (props.percent >= 75)
      return <p className={styles.progress_flare}>Almost there!</p>;
  }

  return (
    <div
      key={props.title}
      className={`${styles.learn_component_link} ${styles.learn_individual_div}`}
      onMouseOver={() => setRenderOpac(1)}
      onMouseOut={() => setRenderOpac(0)}
    >
      <div className={styles.learn_link}>
        <div>
          <Link href={props.path}>
            <h3>{props.title}</h3>
          </Link>
          <p>{props.subtitle}</p>
        </div>
      </div>
      <div className={styles.learn_individual_progress_div}>
        <p className={styles.progress_percent}>{props.percent}/100</p>
        <div
          className={styles.render_learn_flare}
          style={{ opacity: renderOpac }}
        >
          {renderProgress()}
        </div>
      </div>
    </div>
  );
};
