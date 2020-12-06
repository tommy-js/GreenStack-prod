import React, { useState } from "react";
import { FeedSidebar } from "../../../components/Homepage/sidebar/FeedSidebar/FeedSidebar";
import { NavBar } from "../../../components/navigation/NavBar/NavBar";
import { PortfolioValuePostModal } from "../../../components/Homepage/PortfolioValuePostModal/PortfolioValuePostModal";
import { Followers } from "../Followers/Followers";
import styles from "./styles.module.scss";

export const FollowersPage: React.FC = () => {
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
        {renderShowPostOptions()}
        <FeedSidebar setPostingToFeed={() => setPostingToFeed(true)} />
      </div>
      <Followers />
    </div>
  );
};
