import React from "react";
import { FollowingElement } from "../FollowingElement/FollowingElement";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import { FollowingItem } from "../../types/types";
import styles from "./styles.module.scss";

interface Redux {
  following: FollowingItem[];
  userId: string;
}

interface Array {
  userId: string;
}

const FollowingRender: React.FC<Redux> = (props) => {
  return (
    <div className={styles.following}>
      <h2 className={styles.header}>Following({props.following.length})</h2>
      {props.following.map((el: FollowingItem) => (
        <FollowingElement
          userId={el.userId}
          username={el.username}
          bio={el.bio}
        />
      ))}
    </div>
  );
};

export const Following = connect(mapStateToProps)(FollowingRender);
