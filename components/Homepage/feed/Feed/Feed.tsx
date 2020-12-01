import React, { useState, useEffect } from "react";
import { FeedElement } from "../FeedElement/FeedElement";
import { Suggested } from "../../Suggested/Suggested";
import { PostRender } from "../../PostRender/PostRender";
import { FeedScrolledBottom } from "../FeedScrolledBottom/FeedScrolledBottom";
import { LoadingGeneral } from "../../../login/Loading/Loading";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useLazyQuery } from "react-apollo";
import { returnFeedQuery } from "../../../queries/queries";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../../actions/actions";
import { PostItem, FeedItem } from "../../../types/types";
import styles from "./styles.module.scss";

interface Props {
  posts: PostItem[];
  onFeedSet: (feed: FeedItem[]) => void;
}

const FeedRender: React.FC<Props> = (props) => {
  const [callFeed, { data }] = useLazyQuery(returnFeedQuery, {
    pollInterval: 200,
  });
  const [feed, setFeed] = useState([] as any);
  const [maxFeed, setMaxFeed] = useState([] as any);
  const [view, setView] = useState(0);

  useEffect(() => {
    callFeed({
      variables: { token: sessionStorage.getItem("Token") },
    });
  }, []);

  useEffect(() => {
    if (data) {
      setFeed(data.returnFollowerFeed.posts);
      console.log(data);

      let arr = [
        ...data.returnFollowerFeed.posts,
        ...data.returnFollowerFeed.likes,
        ...data.returnFollowerFeed.comments,
      ];
      arr.sort(function (a, b) {
        return b.timestamp - a.timestamp;
      });
      setMaxFeed(arr);
      let shortenedFeed = arr.slice(0, 10);
      setFeed(shortenedFeed);
    }
  }, [data]);

  function setToFeed(
    title: string,
    text: string,
    username: string,
    timestamp: number
  ) {
    let arr = [...feed];
    let obj = {
      title: title,
      text: text,
      user: username,
      timestamp: timestamp,
    };
    arr.push(obj);
    arr.sort(function (a, b) {
      return b.timestamp - a.timestamp;
    });
    setMaxFeed(arr);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setView(window.scrollY);
    });
  }, []);

  function loadMore(index: number) {
    let maximumRendered = 5;
    if (index > feed.length - maximumRendered) {
      if (feed.length + maximumRendered < maxFeed.length) {
        let shortenedFeed = maxFeed.slice(0, feed.length + maximumRendered + 5);
        setFeed(shortenedFeed);
      }
    }
  }

  function renderFeed() {
    if (feed) {
      props.onFeedSet(feed);
      return (
        <div>
          {feed.map((el: any) => (
            <div className={styles.feed_component}>
              <FeedElement
                title={el.title}
                text={el.text}
                postProfileImage={el.profileImage}
                postImage={el.postImage}
                postUserId={el.userId}
                postUsername={el.username}
                timestamp={el.timestamp}
                likes={el.likes}
                dislikes={el.dislikes}
                comments={el.comments}
                postId={el.postId}
                allowComments={el.allowComments}
                allowLikes={el.allowLikes}
                type={el.__typename}
                reference={el.reference}
                view={view}
                currentIndex={feed.indexOf(el)}
                loadMore={loadMore}
              />
            </div>
          ))}
          <FeedScrolledBottom />
        </div>
      );
    } else return <LoadingGeneral />;
  }

  return (
    <div className={styles.feed}>
      <PostRender setToFeed={setToFeed} />
      <Suggested />
      {renderFeed()}
    </div>
  );
};

export const Feed = connect(mapStateToProps, mapDispatchToProps)(FeedRender);
