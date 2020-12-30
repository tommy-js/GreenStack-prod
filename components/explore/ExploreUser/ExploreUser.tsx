import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

interface User {
  id: number;
  username: string;
  description: string;
}

export const ExploreUser: React.FC<User> = (props) => {
  return (
    <div className={styles.explore_component}>
      <Link href={`/home/user/${props.id}`}>
        <a>{props.username}</a>
      </Link>
      <p>{props.username}</p>
      <p>{props.description}</p>
    </div>
  );
};
