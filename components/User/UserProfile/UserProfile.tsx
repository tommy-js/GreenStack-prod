import React, { useState, useEffect } from "react";
import { FeedSidebar } from "../../sidebar/FeedSidebar/FeedSidebar";
import { NavBar } from "../../../components/navigation/NavBar/NavBar";
import { PortfolioValuePostModal } from "../../sidebar/PortfolioValuePostModal/PortfolioValuePostModal";
import { RenderSearchRes } from "../RenderSearchRes/RenderSearchRes";
import {
  FollowingItem,
  FollowerItem,
  UserRoute,
  PostItem,
} from "../../types/types";
import styles from "./styles.module.scss";

interface Props {
  inspectUsername: string;
  inspectProfileImage: string;
  inspectUserId: string;
  inspectBio: string;
  inspectTimestamp: number;
  inspectFollowers: FollowerItem[];
  inspectFollowing: FollowingItem[];
  inspectPosts: PostItem[];
  modRoutes?: (route: UserRoute) => void;
}

export const UserProfile: React.FC<Props> = (props) => {
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
        <FeedSidebar setPostingToFeed={() => setPostingToFeed(true)} />
        <RenderSearchRes
          inspectUsername={props.inspectUsername}
          inspectUserId={props.inspectUserId}
          inspectBio={props.inspectBio}
          inspectTimestamp={props.inspectTimestamp}
          inspectProfileImage={props.inspectProfileImage}
          inspectFollowers={props.inspectFollowers}
          inspectFollowing={props.inspectFollowing}
          inspectPosts={props.inspectPosts}
        />
        {renderShowPostOptions()}
      </div>
    </div>
  );
};
