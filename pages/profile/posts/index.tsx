import React, { useState, useEffect } from "react";
import { UserProfilePostsHandler } from "../../../components/User/UserProfilePostsHandler/UserProfilePostsHandler";
import UserLoginAuthSubresolver from "../../../components/resolvers/UserLoginAuthSubresolver";
import { PostItem } from "../../../components/types/types";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../components/actions/actions";

interface Redux {
  status: boolean;
  username: string;
  posts: PostItem[];
}

const ProfilePosts: React.FC<Redux> = (props) => {
  const [loadingInUser, setLoadingInUser] = useState(true);

  useEffect(() => {
    if (props.status === false) setLoadingInUser(true);
    else setLoadingInUser(false);
  }, [props.status]);

  function checkReturn() {
    if (loadingInUser === true) {
      return (
        <UserLoginAuthSubresolver loggedIn={() => setLoadingInUser(false)} />
      );
    } else
      return (
        <UserProfilePostsHandler
          username={props.username}
          posts={props.posts}
        />
      );
  }

  return checkReturn();
};

export default connect(mapStateToProps)(ProfilePosts);
