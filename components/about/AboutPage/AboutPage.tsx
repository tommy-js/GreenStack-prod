import React from "react";
import { AboutUs } from "../AboutUs/AboutUs";
import { Learn } from "../Learn/Learn";
import { NavBar } from "../../navigation/NavBar/NavBar";
import {
  PostItem,
  FollowerItem,
  FollowingItem,
  NotificationItem,
  WatchListItem,
} from "../../types/types";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../actions/actions";
import styles from "./styles.module.scss";

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
  return (
    <React.Fragment>
      <NavBar />
      <div className={styles.under}>
        <AboutUs />
        <Learn progress={props.progress} />
      </div>
    </React.Fragment>
  );
};

export const AboutPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutPageRender);
