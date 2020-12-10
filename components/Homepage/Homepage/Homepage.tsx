import React, { useState } from "react";
import { FeedSidebar } from "../../../components/Homepage/sidebar/FeedSidebar/FeedSidebar";
import { NavBar } from "../../../components/navigation/NavBar/NavBar";
import { PortfolioValuePostModal } from "../../../components/Homepage/PortfolioValuePostModal/PortfolioValuePostModal";
import { Feed } from "../feed/Feed/Feed";
import { NewAccountRender } from "../../NewAccountRender/NewAccountRender/NewAccountRender";
import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../../components/actions/actions";
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
  const [postingToFeed, setPostingToFeed] = useState(false);

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
      return <NewAccountRender />;
    } else if (props.newaccount === false) {
      return (
        <div>
          {renderShowPostOptions()}
          <NavBar />
          <div className={styles.green_block_left}></div>
          <div className={styles.homepage}>
            <FeedSidebar setPostingToFeed={() => setPostingToFeed(true)} />
          </div>
          <Feed />
        </div>
      );
    } else return null;
  }

  return returnIfNewUser();
};

export const Homepage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomepageRender);
