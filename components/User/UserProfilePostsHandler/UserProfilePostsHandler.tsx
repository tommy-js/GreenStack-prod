import React, { useState } from "react";
import { FeedSidebar } from "../../../components/Homepage/sidebar/FeedSidebar/FeedSidebar";
import { NavBar } from "../../../components/navigation/NavBar/NavBar";
import { PortfolioValuePostModal } from "../../../components/Homepage/PortfolioValuePostModal/PortfolioValuePostModal";
import { UserProfilePosts } from "../UserProfilePosts/UserProfilePosts";
import { YourPosts } from "../YourPosts/YourPosts";
import { PostItem } from "../../types/types";
import styles from "./styles.module.scss";

interface Props {
  username: string;
  posts: PostItem[];
}

export const UserProfilePostsHandler: React.FC<Props> = (props) => {
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

  return (
    <div>
      <NavBar />
      <div className={styles.green_block_left}></div>
      <div className={styles.homepage}>
        <FeedSidebar setPostingToFeed={() => setPostingToFeed(true)} />
        <div className={styles.container}>
          <YourPosts />
          <UserProfilePosts posts={props.posts} />
        </div>
        {renderShowPostOptions()}
      </div>
    </div>
  );
};
