import React from "react";
import { watchlistArray } from "./index";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../actions/actions";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { updateNewPortfolioMutation } from "../../queries/queries";
import styles from "./styles.module.scss";

type WatchListItem = {
  stockId: string;
  title: string;
  ticker: string;
  sector: string;
  timestamp: number;
};

interface Redux {
  watchlist: WatchListItem[];
  onNewPortfolioSet: (newPortfolio: boolean) => void;
  onWatchlistSet: (watchlist: WatchListItem[]) => void;
}

interface Props extends Redux {
  stockId: string;
  title: string;
  ticker: string;
  sector: string;
  updateNewPortfolioMutation: (variables: object) => any;
}

const IndividualStockDropdown: React.FC<Props> = (props) => {
  function resolve() {
    props.onNewPortfolioSet(false);
    let token = sessionStorage.getItem("Token");
    let returnedWatchList = watchlistArray(
      props.stockId,
      props.title,
      props.ticker,
      props.sector,
      props.watchlist
    );
    props
      .updateNewPortfolioMutation({
        variables: {
          token: token,
          stockId: props.stockId,
          title: props.title,
          ticker: props.ticker,
          sector: props.sector,
        },
      })
      .catch((err: any) => console.log(err))
      .then(() => {
        props.onWatchlistSet(returnedWatchList);
      });
  }

  return (
    <div className={styles.individual_stock_dropdown} onClick={() => resolve()}>
      <p className={styles.individual_stock_dropdown_text}>{props.title}</p>
    </div>
  );
};

const IndividualStockDropdownRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualStockDropdown);

export const IndividualWatchlistStockDropdown = compose(
  graphql(updateNewPortfolioMutation, {
    name: "updateNewPortfolioMutation",
  })
)(IndividualStockDropdownRedux);
