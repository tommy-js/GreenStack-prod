import React, { useState, useEffect } from "react";
import UserLoginAuthSubresolver from "../../../../components/resolvers/UserLoginAuthSubresolver";
import { LearnBasicsPage } from "../../../../components/about/LearnBasicsPage/LearnBasicsPage";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../../components/actions/actions";

interface Redux {
  status: boolean;
}

const General: React.FC<Redux> = (props) => {
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
    } else return <LearnBasicsPage />;
  }

  return checkReturn();
};

export default connect(mapStateToProps)(General);
