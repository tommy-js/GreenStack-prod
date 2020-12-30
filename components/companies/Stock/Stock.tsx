import React, { useState } from "react";
import { FeedSidebar } from "../../sidebar/FeedSidebar/FeedSidebar";
import { NavBar } from "../../../components/navigation/NavBar/NavBar";
import { PortfolioValuePostModal } from "../../sidebar/PortfolioValuePostModal/PortfolioValuePostModal";
import { StockPage } from "../StockPage/StockPage";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  ticker: string;
  description: string;
  stockId: string;
  sector: string;
  country: string;
  comments: any;
}

export const Stock: React.FC<Props> = (props) => {
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
      <StockPage {...props} />
    </div>
  );
};
