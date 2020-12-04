import React, { useState } from "react";
import { IndividualUserProfilePost } from "../IndividualUserProfilePost/IndividualUserProfilePost";
import { FeedSidebar } from "../../../components/Homepage/sidebar/FeedSidebar/FeedSidebar";
import { PortfolioValuePostModal } from "../../../components/Homepage/PortfolioValuePostModal/PortfolioValuePostModal";
import { NavBar } from "../../../components/navigation/NavBar/NavBar";
import { PostItem } from "../../types/types";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import styles from "./styles.module.scss";

interface Redux {
  posts: PostItem[];
}

const UserProfilePostsRedux: React.FC<Redux> = (props) => {
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

  function renderPosts() {
    if (props.posts.length > 0) {
      return (
        <div className={styles.feed}>
          {props.posts.map((el: PostItem) => (
            <IndividualUserProfilePost post={el} />
          ))}
        </div>
      );
    } else return <h2 className={styles.feed}>No posts so far...</h2>;
  }

  return (
    <div>
      <NavBar />
      <div className={styles.homepage}>
        <p>text</p>
        {renderShowPostOptions()}
        {renderPosts()}
        <FeedSidebar setPostingToFeed={() => setPostingToFeed(true)} />
      </div>
    </div>
  );
};

export const UserProfilePosts = connect(mapStateToProps)(UserProfilePostsRedux);
