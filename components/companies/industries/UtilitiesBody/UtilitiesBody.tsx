import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
const utilities = require("../../../../public/utilities.jpg");

export const UtilitiesBody: React.FC = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.header}>Utilities</h1>
      <p className={styles.subheader}>
        Focused on providing essential services
      </p>
      <p className={styles.text}>
        The utilities sector of the economy is somewhat shielded from economic
        downturn by the essential nature of what it provides. Companies such as{" "}
        <Link href="/stock/b96a99d2-628e-4ebd-9bbb-9fbca0da6a49">
          <a className={styles.link}>Comcast</a>
        </Link>{" "}
        and{" "}
        <Link href="/stock/f279bd90-cbd1-44b1-896f-87f479497f7b">
          <a className={styles.link}>General Electric</a>
        </Link>{" "}
        are necessary within our society for most people.
      </p>
      <div className={styles.image_block}>
        <img src={utilities} className={styles.image} />
      </div>
    </div>
  );
};
