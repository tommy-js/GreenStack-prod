import React, { useState } from "react";
import { EditPage } from "../EditPage/EditPage";
import { FeedSidebar } from "../../sidebar/FeedSidebar/FeedSidebar";
import { NavBar } from "../../navigation/NavBar/NavBar";
import { PortfolioValuePostModal } from "../../sidebar/PortfolioValuePostModal/PortfolioValuePostModal";
import styles from "./styles.module.scss";

interface Props {
  post: any;
}

export const EditPostPage: React.FC<Props> = (props) => {
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
      {renderShowPostOptions()}
      <NavBar />
      <div className={styles.green_block_left}></div>
      <div className={styles.homepage}>
        <FeedSidebar setPostingToFeed={() => setPostingToFeed(true)} />
      </div>
      <EditPage post={props.post} />
    </div>
  );
};
