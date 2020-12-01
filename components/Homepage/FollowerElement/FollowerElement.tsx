import React from "react";
import { BlockUser } from "../BlockUser/BlockUser";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
  userId: string;
  username: string;
}

export const FollowerElement: React.FC<Props> = (props) => {
  return (
    <div className={styles.homepage_block_component}>
      <Link href={`/home/user/${props.userId}`}>
        <a className={`${styles.block_link} ${styles.element_username}`}>
          {props.username}
        </a>
      </Link>
      <p className={styles.follower_element_descriptor}>props.descriptor</p>
      <BlockUser followerId={props.userId} />
    </div>
  );
};
