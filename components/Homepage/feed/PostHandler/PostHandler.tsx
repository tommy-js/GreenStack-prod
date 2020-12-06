import React, { useState } from "react";
import { FeedSidebar } from "../../sidebar/FeedSidebar/FeedSidebar";
import { NavBar } from "../../../navigation/NavBar/NavBar";
import { PortfolioValuePostModal } from "../../PortfolioValuePostModal/PortfolioValuePostModal";
import {
  PostInterface,
  RenderModal,
} from "../../feedRenderDir/RenderModal/RenderModal";
import styles from "./styles.module.scss";

interface Props {
  post: PostInterface;
}

export const PostHandler: React.FC<Props> = (props) => {
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
      <div className={styles.post}>
        <RenderModal post={props.post} />
      </div>
    </div>
  );
};
