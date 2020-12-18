import React from "react";

export const AgriculturePage: React.FC = () => {
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
