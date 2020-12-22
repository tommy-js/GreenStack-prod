import React, { useState } from "react";
import { FeedSidebar } from "../../sidebar/FeedSidebar/FeedSidebar";
import { NavBar } from "../../../navigation/NavBar/NavBar";
import { PortfolioValuePostModal } from "../../PortfolioValuePostModal/PortfolioValuePostModal";
import { ImageModal } from "../../feedRenderDir/ImageModal/ImageModal";
import {
  PostInterface,
  RenderModal,
} from "../../feedRenderDir/RenderModal/RenderModal";
import styles from "./styles.module.scss";

interface Props {
  post: PostInterface;
}

export const PostHandler: React.FC<Props> = (props) => {
  const [modal, setModal] = useState(false);
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

  function updateModal(view: boolean) {
    setModal(view);
  }

  function returnModal() {
    if (props.post.postImage == "null") return null;
    else {
      if (modal === false) {
        return null;
      } else
        return (
          <ImageModal
            postImage={props.post.postImage}
            updateModal={updateModal}
          />
        );
    }
  }

  return (
    <div>
      <div>{returnModal()}</div>
      <NavBar />
      <div className={styles.green_block_left}></div>
      <div className={styles.homepage}>
        {renderShowPostOptions()}
        <FeedSidebar setPostingToFeed={() => setPostingToFeed(true)} />
      </div>
      <div className={styles.post}>
        <RenderModal post={props.post} updateModal={updateModal} />
      </div>
    </div>
  );
};
