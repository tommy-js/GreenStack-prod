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
      <div className={`${styles.image_block} ${styles.link_spec}`}>
        <img className={styles.image} src={props.profileImage} />
      </div>
      <Link href="/profile">
        <a className={styles.username}>{props.username}</a>
      </Link>
    </React.Fragment>
  );
};

export const SidebarUsername = connect(mapStateToProps)(SidebarUsernameRender);
