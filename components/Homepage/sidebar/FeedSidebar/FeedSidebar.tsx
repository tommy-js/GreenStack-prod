import React, { useState, useEffect } from "react";
import { SidebarUsername } from "../SidebarUsername/SidebarUsername";
import { SidebarSearch } from "../SidebarSearch/SidebarSearch";
import { SidebarElement } from "../SidebarElement/SidebarElement";
import { SidebarPortfolioValue } from "../SidebarPortfolioValue/SidebarPortfolioValue";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

interface Props {
  setPostingToFeed: () => void;
}

export const FeedSidebar: React.FC<Props> = (props) => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function modSearch(input: string) {
    setSearch(input);
  }

  function submitSearch(res: string) {
    router.push(`/search/${res}`);
  }

  return (
    <div className={styles.feed_sidebar}>
      <SidebarUsername />
      <SidebarSearch
        search={search}
        modSearch={modSearch}
        submitSearch={submitSearch}
      />
      <SidebarPortfolioValue setPostingToFeed={props.setPostingToFeed} />
      <SidebarElement text="User Feed" path="/home" />
      <SidebarElement text="Explore" path="/home/explore" />
      <SidebarElement text="Your Posts" path="/home/posts" />
      <SidebarElement text="Followers" path="/home/followers" />
      <SidebarElement text="Following" path="/home/following" />
    </div>
  );
};
