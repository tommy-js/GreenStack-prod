import React, { useState } from "react";
import { ProfileHeader } from "../ProfileHeader/ProfileHeader";
import { Settings } from "../Settings/Settings";
import { PersonalHistory } from "../PersonalHistory/PersonalHistory";
import { FeedSidebar } from "../../sidebar/FeedSidebar/FeedSidebar";
import styles from "./styles.module.scss";

export const Profile: React.FC = () => {
  const [postingToFeed, setPostingToFeed] = useState(false);

  return (
    <div>
      <FeedSidebar setPostingToFeed={() => setPostingToFeed(true)} />
      <div className={styles.feed}>
        <ProfileHeader />
        <Settings />
        <PersonalHistory />
      </div>
    </div>
  );
};
