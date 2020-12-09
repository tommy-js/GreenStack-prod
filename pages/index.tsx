import React, { useState, useEffect } from "react";
import UserLoginAuthSubresolver from "../components/resolvers/UserLoginAuthSubresolver";
import { Homepage } from "../components/Homepage/Homepage/Homepage";
import { connect } from "react-redux";
import { mapStateToProps } from "../components/actions/actions";

interface Redux {
  status: boolean;
}

const MainPage: React.FC<Redux> = (props) => {
  const [loadingInUser, setLoadingInUser] = useState(true);

  useEffect(() => {
    if (props.status === false) setLoadingInUser(true);
    else setLoadingInUser(false);
  }, []);

  function checkReturn() {
    if (loadingInUser === true) {
      return (
        <UserLoginAuthSubresolver loggedIn={() => setLoadingInUser(false)} />
      );
    } else return <Homepage />;
  }

  return checkReturn();
};

export default connect(mapStateToProps)(MainPage);
