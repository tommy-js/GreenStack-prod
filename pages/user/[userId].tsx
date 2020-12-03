import React, { useState, useEffect } from "react";
import { UserProfile } from "../../components/User/UserProfile/UserProfile";
import { useLazyQuery } from "react-apollo";
import { otherUserQuery } from "../../components/queries/queries";
import { useRouter } from "next/router";

const Post: React.FC = () => {
  const router = useRouter();
  const [callQuery, { data }] = useLazyQuery(otherUserQuery);
  const [showRender, setShowRender] = useState(false);

  useEffect(() => {
    if (router.query.userId) {
      callQuery({ variables: { userId: router.query.userId } });
    }
  }, [router.query.userId]);

  useEffect(() => {
    console.log(data);
    if (data) setShowRender(true);
  }, [data]);

  // useEffect(() => {
  //   if (router.query.userId) console.log(router.query.userId);
  // }, [router.query.userId]);

  function renderPost() {
    if (showRender === true && data) {
      return (
        <UserProfile
          inspectUsername={data.altUser.username}
          inspectUserId={data.altUser.userId}
          inspectBio={data.altUser.bio}
          inspectProfileImage={data.altUser.profileImage}
          inspectFollowers={data.altUser.followers}
          inspectFollowing={data.altUser.following}
          inspectPosts={data.altUser.posts}
        />
      );
    } else return null;
  }

  return <React.Fragment>{renderPost()}</React.Fragment>;
};

export default Post;
