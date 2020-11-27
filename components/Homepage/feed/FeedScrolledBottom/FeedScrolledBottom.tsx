import React from "react";
import "./styles.module.scss";

export const FeedScrolledBottom: React.FC = () => {
  return (
    <div className="feed_scrolled_bottom">
      <p className="feed_scrolled_bottom_text">End Of The Line...</p>
      <p className="feed_scrolled_bottom_subtext">Reload for more!</p>
    </div>
  );
};
