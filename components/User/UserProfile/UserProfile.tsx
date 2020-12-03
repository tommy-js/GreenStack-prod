import React, { useState, useEffect } from "react";
import { FollowUser } from "../FollowUser/FollowUser";
import { UserProfilePosts } from "../UserProfilePosts/UserProfilePosts";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import {
  FollowingItem,
  FollowerItem,
  UserRoute,
  PostItem,
} from "../../types/types";
import { returnFoundUser } from "./index";
import styles from "./styles.module.scss";

interface Redux {
  userId: string;
  username: string;
  following: FollowingItem[];
}

interface Props extends Redux {
  inspectUsername: string;
  inspectProfileImage: string;
  inspectUserId: string;
  inspectBio: string;
  inspectFollowers: FollowerItem[];
  inspectFollowing: FollowingItem[];
  inspectPosts: PostItem[];
  modRoutes?: (route: UserRoute) => void;
}

const UserProf: React.FC<Props> = (props) => {
  const [alreadyAdded, setAlreadyAdded] = useState(false);

  useEffect(() => {
    let foundUser = returnFoundUser(props.inspectUserId, props.following);
    setAlreadyAdded(foundUser);
  }, []);

  function modAlreadyAdded() {
    setAlreadyAdded(true);
  }

  function returnFollow() {
    if (props.inspectUserId !== props.userId) {
      if (alreadyAdded === true) {
        return null;
      } else {
        return (
          <FollowUser
            followId={props.inspectUserId}
            followName={props.inspectUsername}
            modAlreadyAdded={modAlreadyAdded}
          />
        );
      }
    }
  }

  return (
    <div key={props.userId} className={styles.feed}>
      <React.Fragment>
        <h1>{props.inspectUsername}</h1>
        <img src={props.inspectProfileImage} />
        {returnFollow()}
        <p>{props.inspectBio}</p>
        <h2>Followers: {props.inspectFollowers.length}</h2>
        <h2>Following: {props.inspectFollowing.length}</h2>
        <UserProfilePosts posts={props.inspectPosts} />
      </React.Fragment>
    </div>
  );
};

export const UserProfile = connect(mapStateToProps)(UserProf);
