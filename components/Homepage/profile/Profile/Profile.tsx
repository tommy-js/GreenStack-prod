import React from "react";
import { ProfileHeader } from "../ProfileHeader/ProfileHeader";
import { Settings } from "../Settings/Settings";
import { PersonalHistory } from "../PersonalHistory/PersonalHistory";
import styles from "./styles.module.scss";

export const Profile: React.FC = () => {
  return (
    <div className={styles.feed}>
      <ProfileHeader />
      <Settings />
      <PersonalHistory />
    </div>
  );
};
