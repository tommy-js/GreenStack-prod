import React, { useState } from "react";
import { ProfileHeader } from "../ProfileHeader/ProfileHeader";
import { Settings } from "../Settings/Settings";
import { PersonalHistory } from "../PersonalHistory/PersonalHistory";
import { FeedSidebar } from "../../sidebar/FeedSidebar/FeedSidebar";
import { NavBar } from "../../navigation/NavBar/NavBar";
import styles from "./styles.module.scss";

export const Profile: React.FC = () => {
  const [postingToFeed, setPostingToFeed] = useState(false);
  const [widthModified, setWidthModified] = useState(false);
  const [width, setWidth] = useState("30%");

  function modWidth() {
    if (widthModified === true) setWidth("30%");
    else setWidth("0px");
    setWidthModified(!widthModified);
  }

  return (
    <div>
      <NavBar modWidth={modWidth} />
      <div style={{ width }} className={styles.green_block_left}></div>
      <div className={styles.homepage}>
        <FeedSidebar
          width={width}
          setPostingToFeed={() => setPostingToFeed(true)}
        />
        <div className={`${styles.profile} ${styles.martop}`}>
          <ProfileHeader />
          <Settings />
          <PersonalHistory />
        </div>
      </div>
    </div>
  );
};
