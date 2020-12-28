import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const CommunicationBody: React.FC = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.header}>Communication</h1>
      <p className={styles.subheader}>
        The development and proliferation of technology to assist in
        communication.
      </p>
      <p className={styles.text}>
        Companies in this sector aim to develop and market technologies to help
        with communication. Due to infrastructure costs, most of the
        corporations operating in this space are large conglomerates.
      </p>
      <p className={styles.text}>
        Examples of companies include{" "}
        <Link href="/stock/235ec0df-c2de-4f9d-97d5-905f69c6b68e">
          <a className={styles.link}>AT&T</a>
        </Link>{" "}
        and{" "}
        <Link href="/stock/27794ca7-5b26-4bca-accf-a6ad8106ae2a">
          <a className={styles.link}>Verizon</a>
        </Link>
        . It is worth noting that many newer companies providing communication
        services, such as{" "}
        <Link href="/stock/520293c4-f772-41d4-8dee-0515bb42d884">
          <a className={styles.link}>Zoom</a>
        </Link>
        , fall more into the technology sector, and so are not categorized as
        communications.
      </p>
    </div>
  );
};
