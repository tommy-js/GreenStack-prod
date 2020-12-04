import React, { useEffect } from "react";
import { FollowerElement } from "../FollowerElement/FollowerElement";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import { FollowerItem } from "../../types/types";
import styles from "./styles.module.scss";

interface Redux {
  followers: FollowerItem[];
}

interface Array {
  userId: string;
}

const FollowersRender: React.FC<Redux> = (props) => {
  return (
    <div className={styles.feed}>
      <h2 className={styles.list_header}>
        Your Followers({props.followers.length})
      </h2>
      {props.followers.map((el: FollowerItem) => (
        <FollowerElement
          key={el.followerId}
          userId={el.followerId}
          username={el.followerName}
        />
      ))}
    </div>
  );
};

export const Followers = connect(mapStateToProps)(FollowersRender);
