import React, { useState, useEffect } from "react";
import { AboutUs } from "../AboutUs/AboutUs";
import { Learn } from "../Learn/Learn";
import { NavBar } from "../../navigation/NavBar/NavBar";
import UserLoginAuthSubresolver from "../../resolvers/UserLoginAuthSubresolver";
import {
  PostItem,
  FollowerItem,
  FollowingItem,
  NotificationItem,
  WatchListItem,
} from "../../types/types";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../actions/actions";
import { nonTokenModifyUserQuery } from "../../queries/queries";
import { useLazyQuery } from "react-apollo";
import "./styles.module.scss";

interface Redux {
  status: boolean;
  progress: any;
  onInitialPostsSet: (posts: PostItem[]) => void;
  onInitialFollowerSet: (followers: FollowerItem[]) => void;
  onInitialFollowingSet: (following: FollowingItem[]) => void;
  onInitialNotificationsSet: (notifications: NotificationItem[]) => void;
  onWatchlistSet: (watchlist: WatchListItem[]) => void;
}

const AboutPageRender: React.FC<Redux> = (props) => {
  const [loadingInUser, setLoadingInUser] = useState(true);
  // const [getUser, { data }] = useLazyQuery(nonTokenModifyUserQuery, {
  //   pollInterval: 500,
  // });

  useEffect(() => {
    if (props.status === false) setLoadingInUser(true);
  }, [props.status]);

  // useEffect(() => {
  //   if (data) {
  //     props.onInitialPostsSet(data.noTokenMod.posts);
  //     props.onInitialFollowerSet(data.noTokenMod.followers);
  //     props.onInitialFollowingSet(data.noTokenMod.following);
  //     props.onInitialNotificationsSet(data.noTokenMod.notifications);
  //     props.onWatchlistSet(data.noTokenMod.watchlist);
  //     setProgress(data.noTokenMod.progress);
  //   }
  // }, [data]);

  // useEffect(() => {
  //   if (props.status === false) {
  //     if (data && data.token) setLoadingInUser(true);
  //   }
  // }, data);

  function loggedIn() {
    setLoadingInUser(false);
  }

  function returnLoadingInUser() {
    if (loadingInUser === true) {
      return (
        <div className="render_loading drop_loading_block">
          <UserLoginAuthSubresolver loggedIn={loggedIn} />
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <NavBar />
          <AboutUs />
          <Learn progress={props.progress} />
        </React.Fragment>
      );
    }
  }

  return <React.Fragment>{returnLoadingInUser()}</React.Fragment>;
};

export const AboutPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutPageRender);
