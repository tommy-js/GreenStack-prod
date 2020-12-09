import React, { useState } from "react";
import { IndividualUserProfilePost } from "../IndividualUserProfilePost/IndividualUserProfilePost";
import { FeedSidebar } from "../../../components/Homepage/sidebar/FeedSidebar/FeedSidebar";
import { PortfolioValuePostModal } from "../../../components/Homepage/PortfolioValuePostModal/PortfolioValuePostModal";
import { NavBar } from "../../../components/navigation/NavBar/NavBar";
import { PostItem } from "../../types/types";
import { NoPosts } from "../NoPosts/NoPosts";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import styles from "./styles.module.scss";

interface Redux {
  posts: PostItem[];
}

const UserProfilePostsRedux: React.FC<Redux> = (props) => {
  function renderPosts() {
    if (props.posts.length > 0) {
      return (
        <div className={styles.profile_posts}>
          {props.posts.map((el: PostItem) => (
            <IndividualUserProfilePost post={el} />
          ))}
        </div>
      );
    } else return <NoPosts />;
  }

  return <div>{renderPosts()}</div>;
};

export const UserProfilePosts = connect(mapStateToProps)(UserProfilePostsRedux);
