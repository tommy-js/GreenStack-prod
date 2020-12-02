import React, { useState, useEffect } from "react";
import { RenderModal } from "../../components/Homepage/feed/RenderModal/RenderModal";
import { useQuery } from "react-apollo";
import { individualPostQuery } from "../../components/queries/queries";
import { useRouter } from "next/router";

const Post: React.FC = () => {
  const router = useRouter();
  const { data } = useQuery(individualPostQuery, {
    variables: { postId: router.query.postId },
  });
  const [showRender, setShowRender] = useState(false);

  useEffect(() => {
    console.log(router.query.postId);
  }, []);

  useEffect(() => {
    if (data) {
      setShowRender(true);
      console.log(data);
    }
  }, [data]);

  function renderPost() {
    if (showRender === true) {
      return <RenderModal post={data.post} />;
    } else return null;
  }

  return <React.Fragment>{renderPost()}</React.Fragment>;
};

export default Post;
