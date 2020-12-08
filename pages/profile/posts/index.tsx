import React, { useState, useEffect } from "react";
import { UserProfilePostsHandler } from "../../../components/User/UserProfilePostsHandler/UserProfilePostsHandler";
import UserLoginAuthSubresolver from "../../../components/resolvers/UserLoginAuthSubresolver";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../components/actions/actions";

interface Redux {
  status: boolean;
  username: string;
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
    } else return <UserProfilePostsHandler username={props.username} />;
  }

  return checkReturn();
};

export default connect(mapStateToProps)(ProfilePosts);
