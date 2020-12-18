import React, { useState } from "react";
import { MedicalBody } from "../MedicalBody/MedicalBody";
import { FeedSidebar } from "../../../Homepage/sidebar/FeedSidebar/FeedSidebar";
import { NavBar } from "../../../navigation/NavBar/NavBar";
import { PortfolioValuePostModal } from "../../../Homepage/PortfolioValuePostModal/PortfolioValuePostModal";
import styles from "./styles.module.scss";

export const MedicalPage: React.FC = () => {
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
        <MedicalBody />
      </div>
    </div>
  );
};
