import React, { useEffect } from "react";
import { FollowerElement } from "../FollowerElement/FollowerElement";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import { FollowerItem } from "../../types/types";
import { NoFollowers } from "../NoFollowers/NoFollowers";
import styles from "./styles.module.scss";

interface Redux {
  followers: FollowerItem[];
}

interface Array {
  userId: string;
}

const FollowersRender: React.FC<Redux> = (props) => {
  function returnFollowers() {
    if (props.followers.length > 0) {
      return (
        <React.Fragment>
          <h2 className={styles.header}>
            Your Followers({props.followers.length})
          </h2>
          {props.followers.map((el: FollowerItem) => (
            <FollowerElement
              key={el.followerId}
              userId={el.followerId}
              username={el.followerName}
            />
          ))}
        </React.Fragment>
      );
    } else {
      return <NoFollowers />;
    }
  }

  return <div className={styles.followers}>{returnFollowers()}</div>;
};

export const Followers = connect(mapStateToProps)(FollowersRender);
