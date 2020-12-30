import React, { useState, useEffect } from "react";
import { PostHandler } from "../../components/feed/PostHandler/PostHandler";
import UserLoginAuthSubresolver from "../../components/resolvers/UserLoginAuthSubresolver";
import { useLazyQuery } from "react-apollo";
import { individualPostQuery } from "../../components/queries/queries";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { mapStateToProps } from "../../components/actions/actions";

interface Redux {
  status: boolean;
}

const Post: React.FC<Redux> = (props) => {
  const router = useRouter();
  const [callPost, { data }] = useLazyQuery(individualPostQuery, {
    variables: { postId: router.query.postId },
    pollInterval: 5000,
  });
  const [showRender, setShowRender] = useState(false);

  useEffect(() => {
    if (data) setShowRender(true);
  }, [data]);

  const [loadingInUser, setLoadingInUser] = useState(true);

  useEffect(() => {
    if (props.status === false) setLoadingInUser(true);
    else {
      setLoadingInUser(false);
      callPost();
    }
  }, [props.status]);

  function checkReturn() {
    if (loadingInUser === true) {
      return (
        <UserLoginAuthSubresolver loggedIn={() => setLoadingInUser(false)} />
      );
    } else {
      if (showRender === true) {
        return <PostHandler post={data.post} />;
      } else return null;
    }
  }

  return <React.Fragment>{checkReturn()}</React.Fragment>;
};

export default connect(mapStateToProps)(Post);
