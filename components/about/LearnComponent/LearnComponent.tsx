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
  return (
    <Link href={props.path} passHref>
      <LearnComponentLink props={props} />
    </Link>
  );
};

const LearnComponentLink: React.FC<Props> = React.forwardRef(
  ({ onClick, href, props }, ref) => {
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
      <a href={href} onClick={onClick} ref={ref}>
        <div
          key={props.title}
          className={`${styles.learn_component_link} ${styles.learn_individual_div}`}
          onMouseOver={() => setRenderOpac(1)}
          onMouseOut={() => setRenderOpac(0)}
        >
          <div className={styles.learn_link}>
            <div>
              <h3>{props.title}</h3>
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
      </a>
    );
  }
);
