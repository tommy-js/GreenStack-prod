import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../actions/actions";
import styles from "./styles.module.scss";

interface Redux {
  username: string;
  profileImage: string;
}

const SidebarUsernameRender: React.FC<Redux> = (props) => {
  return (
    <React.Fragment>
      <Link href="/home/profile">
        <a>{props.username}</a>
      </Link>
      <div
        className={`${styles.feed_profile_image_block} ${styles.sidebar_username_link_spec} ${styles.sidebar_username}`}
      >
        <img className={styles.feed_profile_image} src={props.profileImage} />
      </div>
      <div id={styles.sidebar_username_link}>{props.username}</div>
    </React.Fragment>
  );
};

export const SidebarUsername = connect(mapStateToProps)(SidebarUsernameRender);
