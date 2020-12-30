import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import styles from "./styles.module.scss";

interface Redux {
  username: string;
  profileImage: string;
}

const SidebarUsernameRender: React.FC<Redux> = (props) => {
  return (
    <Link href="/profile" passHref>
      <UserLink username={props.username} profileImage={props.profileImage} />
    </Link>
  );
};

const UserLink = React.forwardRef(
  ({ onClick, href, username, profileImage }, ref) => {
    return (
      <a className={styles.user_link} href={href} onClick={onClick} ref={ref}>
        <div className={`${styles.image_block} ${styles.link_spec}`}>
          <img className={styles.image} src={profileImage} />
        </div>
        <div className={styles.username}>{username}</div>
      </a>
    );
  }
);

export const SidebarUsername = connect(mapStateToProps)(SidebarUsernameRender);
