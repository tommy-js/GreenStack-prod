import React, { useState } from "react";
import { ProfileHeader } from "../ProfileHeader/ProfileHeader";
import { Settings } from "../Settings/Settings";
import { PersonalHistory } from "../PersonalHistory/PersonalHistory";
import { FeedSidebar } from "../../sidebar/FeedSidebar/FeedSidebar";
import { NavBar } from "../../../../components/navigation/NavBar/NavBar";
import styles from "./styles.module.scss";

export const Profile: React.FC = () => {
  const [postingToFeed, setPostingToFeed] = useState(false);

  return (
    <div>
      <NavBar />
      <div className={styles.homepage}>
        <FeedSidebar setPostingToFeed={() => setPostingToFeed(true)} />
        <div className={`${styles.feed} ${styles.martop}`}>
          <ProfileHeader />
          <Settings />
          <PersonalHistory />
        </div>
      </div>
    </div>
  );
};
