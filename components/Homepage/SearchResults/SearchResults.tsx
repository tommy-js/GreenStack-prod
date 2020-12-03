import React, { useState, useEffect } from "react";
import { QueryUserResult, QueryStockResult } from "../QueryResult/QueryResult";
import { PortfolioValuePostModal } from "../../../components/Homepage/PortfolioValuePostModal/PortfolioValuePostModal";
import { FeedSidebar } from "../../../components/Homepage/sidebar/FeedSidebar/FeedSidebar";
import { NavBar } from "../../../components/navigation/NavBar/NavBar";
import { searchQuery } from "../../queries/queries";
import { useQuery } from "react-apollo";
import styles from "./styles.module.scss";

interface Props {
  res: string;
}

export const SearchResults: React.FC<Props> = (props) => {
  const [loaded, setLoaded] = useState(false);
  const { data } = useQuery(searchQuery, {
    variables: { argument: props.res },
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      setLoaded(true);
    }
  }, [data]);

  function returnQuery() {
    if (loaded === true) {
      if (data.searchUser) {
        return (
          <QueryUserResult
            username={data.searchUser.username}
            profileImage={data.searchUser.profileImage}
            userId={data.searchUser.userId}
            bio={data.searchUser.bio}
          />
        );
      } else if (data.searchStock) {
        return (
          <QueryStockResult
            title={data.searchStock.title}
            ticker={data.searchStock.ticker}
            description={data.searchStock.description}
            country={data.searchStock.country}
            stockId={data.searchStock.stockId}
          />
        );
      } else return <h2>Loading...</h2>;
    } else return <h2>Nothing Found</h2>;
  }

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
      <FeedSidebar setPostingToFeed={() => setPostingToFeed(true)} />
      <div className={styles.feed}>
        {returnQuery()}
        {renderShowPostOptions()}
      </div>
    </div>
  );
};
