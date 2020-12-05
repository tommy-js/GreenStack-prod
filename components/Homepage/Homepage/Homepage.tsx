import React, { useState, useEffect } from "react";
import { FeedSidebar } from "../../../components/Homepage/sidebar/FeedSidebar/FeedSidebar";
import { NavBar } from "../../../components/navigation/NavBar/NavBar";
import { PortfolioValuePostModal } from "../../../components/Homepage/PortfolioValuePostModal/PortfolioValuePostModal";
import { Feed } from "../feed/Feed/Feed";
import { NewAccountRender } from "../../NewAccountRender/NewAccountRender/NewAccountRender";
import { useLazyQuery } from "react-apollo";
import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../../components/actions/actions";
import { nonTokenModifyUserQuery } from "../../../components/queries/queries";
import {
  PostItem,
  FeedItem,
  FollowerItem,
  FollowingItem,
  WatchListItem,
} from "../../../components/types/types";
import styles from "./styles.module.scss";

interface Redux {
  userId: string;
  username: string;
  posts: PostItem[];
  feed: FeedItem[];
  userRoutes: any;
  money: number;
  status: boolean;
  newaccount: boolean;
  onNewAccountSet: (newacc: boolean) => void;
  onInitialPostsSet: (posts: any) => void;
  onInitialFollowerSet: (followers: FollowerItem[]) => void;
  onInitialFollowingSet: (following: FollowingItem[]) => void;
  onInitialNotificationsSet: (notifications: any) => void;
  onWatchlistSet: (watchlist: WatchListItem[]) => void;
  onUserRouteSet: (userRoutes: any) => void;
}

const HomepageRender: React.FC<Redux> = (props) => {
  const [getUser, { data: getUserData }] = useLazyQuery(
    nonTokenModifyUserQuery,
    {
      pollInterval: 500,
    }
  );

  useEffect(() => {
    if (getUserData) {
      props.onInitialPostsSet(getUserData.noTokenMod.posts);
      props.onInitialFollowerSet(getUserData.noTokenMod.followers);
      props.onInitialFollowingSet(getUserData.noTokenMod.following);
      props.onInitialNotificationsSet(getUserData.noTokenMod.notifications);
      props.onWatchlistSet(getUserData.noTokenMod.watchlist);
    }
  }, [getUserData]);

  useEffect(() => {
    console.log("new account: " + props.newaccount);
  }, []);

  const [postingToFeed, setPostingToFeed] = useState(false);

  function submit() {
    props.onNewAccountSet(false);
  }

  function renderShowPostOptions() {
    if (postingToFeed === true)
      return (
        <PortfolioValuePostModal
          setPostingToFeed={() => setPostingToFeed(false)}
        />
      );
    else return null;
  }

  function returnIfNewUser() {
    if (props.newaccount === true) {
      return <NewAccountRender submit={submit} />;
    } else {
      return (
        <div>
          <NavBar />
          <div className={styles.homepage}>
            {renderShowPostOptions()}
            <FeedSidebar setPostingToFeed={() => setPostingToFeed(true)} />
          </div>
          <Feed />
        </div>
      );
    }
  }

  return returnIfNewUser();
};

export const Homepage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomepageRender);
