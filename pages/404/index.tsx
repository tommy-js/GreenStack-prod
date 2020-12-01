import React, { useState, useEffect } from "react";
import UserLoginAuthSubresolver from "../../components/resolvers/UserLoginAuthSubresolver";
import { connect } from "react-redux";
import { mapStateToProps } from "../../components/actions/actions";

interface Redux {
  status: boolean;
}

const Page404: React.FC<Redux> = (props) => {
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
    } else return <h1>Oops! Wrong turn! 404</h1>;
  }

  return checkReturn();
};

export default connect(mapStateToProps)(Page404);
