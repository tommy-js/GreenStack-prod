import React, { useState, useEffect } from "react";
import UserLoginAuthSubresolver from "../../components/resolvers/UserLoginAuthSubresolver";
import { SearchResults } from "../../components/Homepage/SearchResults/SearchResults";
import { connect } from "react-redux";
import { mapStateToProps } from "../../components/actions/actions";
import { useRouter } from "next/router";

interface Redux {
  status: boolean;
}

const SearchPage: React.FC<Redux> = (props) => {
  const router = useRouter();
  const [loadingInUser, setLoadingInUser] = useState(true);

  useEffect(() => {
    if (props.status === false) setLoadingInUser(true);
    else setLoadingInUser(false);
  }, [props.status]);

  useEffect(() => {
    if (router.query.res) {
      console.log(router.query.res);
    }
  });

  function checkReturn() {
    if (loadingInUser === true) {
      return (
        <UserLoginAuthSubresolver loggedIn={() => setLoadingInUser(false)} />
      );
    } else return <SearchResults res={router.query.res} />;
  }

  return checkReturn();
};

export default connect(mapStateToProps)(SearchPage);
