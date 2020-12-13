import React, { useState, useEffect } from "react";
import { QueryUserResult, QueryStockResult } from "../QueryResult/QueryResult";
import { PortfolioValuePostModal } from "../../../components/Homepage/PortfolioValuePostModal/PortfolioValuePostModal";
import { FeedSidebar } from "../../../components/Homepage/sidebar/FeedSidebar/FeedSidebar";
import { NavBar } from "../../../components/navigation/NavBar/NavBar";
import { LoadingGeneral } from "../../login/Loading/Loading";
import { NoResults } from "../NoResults/NoResults";
import { LoadMoreStocks } from "../LoadMoreStocks/LoadMoreStocks";
import { searchQuery } from "../../queries/queries";
import { useLazyQuery } from "react-apollo";
import { findStocks } from "./index";
import styles from "./styles.module.scss";

interface Props {
  res: string;
}

export const SearchResults: React.FC<Props> = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [stocks, setStocks] = useState([] as any);
  const [users, setUsers] = useState([] as any);
  const [callQuery, { data }] = useLazyQuery(searchQuery, {
    variables: { argument: props.res },
  });

  useEffect(() => {
    callQuery();
    setLoaded(false);
  }, [props.res]);

  useEffect(() => {
    if (data) {
      setStocks(findStocks(props.res));
      if (data.searchUser) setUsers([data.searchUser]);
      if (data.searchStock || data.searchUser) setLoaded(true);
    }
  }, [data]);

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

  function renderUsers() {
    if (loaded === true) {
      if (data.searchUser) {
        return (
          <div>
            <h2 className={styles.user_header}>
              Your User Results for {props.res}
            </h2>
            {users.map((el: any) => (
              <QueryUserResult
                username={el.username}
                profileImage={el.profileImage}
                userId={el.userId}
                bio={el.bio}
              />
            ))}
          </div>
        );
      } else return null;
    } else return null;
  }

  function renderStocks() {
    if (stocks.length > 0) {
      return (
        <div>
          <h2 className={styles.stocks_header}>
            Your Stock Results for{" "}
            <span className={styles.res_header}>{props.res}</span>
          </h2>
          {stocks.map((el: any) => (
            <QueryStockResult
              title={el.title}
              ticker={el.ticker}
              description={el.description}
              country={el.country}
              countryCode={el.countryCode}
              date={el.date}
              stockId={el.stockId}
              sector={el.sector}
            />
          ))}
          <LoadMoreStocks />
        </div>
      );
    } else return null;
  }

  return (
    <div>
      <NavBar />
      <div className={styles.green_block_left}></div>
      <div className={styles.main_body}>
        <FeedSidebar setPostingToFeed={() => setPostingToFeed(true)} />
        <div className={styles.feed}>
          {renderShowPostOptions()}
          {renderStocks()}
          {renderUsers()}
        </div>
      </div>
    </div>
  );
};
