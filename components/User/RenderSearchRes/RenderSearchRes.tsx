import React, { useState, useEffect } from "react";
import { FollowUser } from "../FollowUser/FollowUser";
import { UserProfilePosts } from "../UserProfilePosts/UserProfilePosts";
import { FollowingItem, FollowerItem, PostItem } from "../../types/types";
import { returnFoundUser, returnDate } from "./index";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import styles from "./styles.module.scss";

interface Redux {
  userId: string;
  username: string;
  following: FollowingItem[];
}

interface Props extends Redux {
  inspectUsername: string;
  inspectUserId: string;
  inspectProfileImage: string;
  inspectTimestamp: number;
  inspectBio: string;
  inspectFollowers: FollowerItem[];
  inspectFollowing: FollowingItem[];
  inspectPosts: PostItem[];
}

const RenderSearchResRedux: React.FC<Props> = (props) => {
  const [alreadyAdded, setAlreadyAdded] = useState(false);

  useEffect(() => {
    let foundUser = returnFoundUser(props.inspectUserId, props.following);
    setAlreadyAdded(foundUser);
    console.log(props.inspectPosts);
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
    <div className={styles.container}>
      <div className={styles.header_container}>
        <h1 className={styles.header}>{props.inspectUsername}</h1>
        <div className={styles.image_container}>
          <img className={styles.image} src={props.inspectProfileImage} />
        </div>
        {returnFollow()}
      </div>
      <p className={styles.bio}>{props.inspectBio}</p>
      <h2 className={styles.followers_number}>
        {props.inspectFollowers.length} Followers
      </h2>
      <h2 className={styles.following_number}>
        {props.inspectFollowing.length} Following
      </h2>
      <p className={styles.timestamp}>
        Member since {returnDate(props.inspectTimestamp)}
      </p>
      <UserProfilePosts posts={props.inspectPosts} />
    </div>
  );
};

export const RenderSearchRes = connect(mapStateToProps)(RenderSearchResRedux);
