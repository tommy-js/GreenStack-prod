import React, { useState, useEffect } from "react";
import { Profile } from "../../components/Homepage/profile/Profile/Profile";
import UserLoginAuthSubresolver from "../../components/resolvers/UserLoginAuthSubresolver";
import { connect } from "react-redux";
import { mapStateToProps } from "../../components/actions/actions";

interface Redux {
  status: boolean;
}

const ProfilePage: React.FC<Redux> = (props) => {
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
    } else return <Profile />;
  }

  return checkReturn();
};

export default connect(mapStateToProps)(ProfilePage);
