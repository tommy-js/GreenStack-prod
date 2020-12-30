import React, { useState, useEffect } from "react";
import UserLoginAuthSubresolver from "../../components/resolvers/UserLoginAuthSubresolver";
import { UserProfile } from "../../components/User/UserProfile/UserProfile";
import { useLazyQuery } from "react-apollo";
import { otherUserQuery } from "../../components/queries/queries";
import { useRouter } from "next/router";

const Post: React.FC = () => {
  const router = useRouter();
  const [callQuery, { data }] = useLazyQuery(otherUserQuery);
  const [showRender, setShowRender] = useState(false);
  const [loadingInUser, setLoadingInUser] = useState(true);

  useEffect(() => {
    if (router.query.userId) {
      callQuery({ variables: { userId: router.query.userId } });
    }
  }, [router.query.userId]);

  useEffect(() => {
    if (data && data.altUser) {
      console.log(data);
      console.log(data.altUser.posts);
      setShowRender(true);
    }
  }, [data]);

  function renderPost() {
    if (showRender === true && data) {
      return (
        <UserProfile
          inspectUsername={data.altUser.username}
          inspectUserId={data.altUser.userId}
          inspectTimestamp={data.altUser.timestamp}
          inspectBio={data.altUser.bio}
          inspectProfileImage={data.altUser.profileImage}
          inspectFollowers={data.altUser.followers}
          inspectFollowing={data.altUser.following}
          inspectPosts={data.altUser.posts}
        />
      );
    } else return null;
  }

  function checkReturn() {
    if (loadingInUser === true) {
      return (
        <UserLoginAuthSubresolver loggedIn={() => setLoadingInUser(false)} />
      );
    } else return renderPost();
  }

  return checkReturn();
};

export default Post;
