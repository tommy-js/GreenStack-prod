import React, { useState, useEffect } from "react";
import UserLoginAuthSubresolver from "../../../../components/resolvers/UserLoginAuthSubresolver";
import { LearnOptionsPage } from "../../../../components/about/LearnOptionsPage/LearnOptionsPage";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../../components/actions/actions";

interface Redux {
  status: boolean;
}

const Options: React.FC<Redux> = (props) => {
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
    } else return <LearnOptionsPage />;
  }

  return checkReturn();
};

export default connect(mapStateToProps)(Options);
