import React, { useEffect, useState } from "react";
import { IndividualUserPost } from "../IndividualUserPost/IndividualUserPost";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../actions/actions";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { FeedItem, PostItem } from "../../../types/types";
import styles from "./styles.module.scss";

interface Redux {
  posts: Posts[];
  feed: FeedItem[];
}

interface Posts {
  key: number;
  postId: string;
  title: string;
  text: string;
  timestamp: number;
  likes: number;
  dislikes: number;
}

interface Props extends Redux {
  modRoutes?: (arr: Posts[]) => void;
}

const UserPostsRender: React.FC<Props> = (props) => {
  const [sortedArr, setSortedArr] = useState(props.posts);
  const [postRendered, setPostRendered] = useState(false);
  const [postInfo, setPostInfo] = useState();

  useEffect(() => {
    let arr = props.posts.sort(function (a: any, b: any) {
      return b.timestamp - a.timestamp;
    });
    setSortedArr(arr);

    if (props.modRoutes) props.modRoutes(arr);
  }, []);

  function modPostLoad(postId: string) {
    const feed = document.getElementById("feed")!;
    if (postRendered === true) {
      setPostRendered(false);
      enableBodyScroll(feed);
    } else {
      setPostRendered(true);
      disableBodyScroll(feed);
    }
    triggerPostLoad(postId);
  }

  function triggerPostLoad(postId: string) {
    let foundId = props.feed.find((el: any) => el.postId === postId);
    if (foundId) {
      let foundIndex = props.feed.indexOf(foundId);
      setPostInfo(props.feed[foundIndex]);
    }
  }

  return (
    <div className={styles.feed}>
      <h2 className={styles.list_header}>Your Posts</h2>
      <React.Fragment>
        {sortedArr.map((el: Posts) => (
          <IndividualUserPost
            key={el.timestamp}
            postId={el.postId}
            title={el.title}
            text={el.text}
            timestamp={el.timestamp}
            likes={el.likes}
            dislikes={el.dislikes}
            modPostLoad={modPostLoad}
          />
        ))}
      </React.Fragment>
    </div>
  );
};

export const UserPosts = connect(mapStateToProps)(UserPostsRender);
