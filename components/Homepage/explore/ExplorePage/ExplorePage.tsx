import React, { useEffect, useState } from "react";
import { Explore } from "../Explore/Explore";
import { FeedSidebar } from "../../sidebar/FeedSidebar/FeedSidebar";
import { NavBar } from "../../../navigation/NavBar/NavBar";
import { PortfolioValuePostModal } from "../../PortfolioValuePostModal/PortfolioValuePostModal";
import styles from "./styles.module.scss";

export const ExplorePage: React.FC = () => {
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
        <Explore />
      </div>
    </div>
  );
};
