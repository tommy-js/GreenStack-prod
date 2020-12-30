import React from "react";
import { UnfollowUser } from "../UnfollowUser/UnfollowUser";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
  userId: string;
  username: string;
  bio: string;
}

export const FollowingElement: React.FC<Props> = (props) => {
  return (
    <div className={styles.homepage_block_component}>
      <Link href={`/user/${props.userId}`} passHref>
        <UserLink
          userId={props.userId}
          username={props.username}
          bio={props.bio}
        />
      </Link>
      <UnfollowUser userId={props.userId} />
    </div>
  );
};

const UserLink = React.forwardRef(
  ({ onClick, href, userId, username, bio }, ref) => {
    return (
      <a className={styles.link} href={href} onClick={onClick} ref={ref}>
        <div className={`${styles.block_link} ${styles.element_username}`}>
          {username}
        </div>
        <p className={styles.bio}>{bio}</p>
      </a>
    );
  }
);
