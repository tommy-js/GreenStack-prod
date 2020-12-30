import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
  text: string;
  path: string;
}

export const SidebarElement: React.FC<Props> = (props) => {
  return (
    <Link href={props.path}>
      <a className={`${styles.sidebar_element_text} ${styles.sidebar_element}`}>
        {props.text}
      </a>
    </Link>
  );
};
