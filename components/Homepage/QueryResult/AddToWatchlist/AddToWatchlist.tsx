import React from "react";
import { pushStockToWatchlistMutation } from "../../../queries/queries";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import styles from "./styles.module.scss";

interface Props {
  stockId: string;
  ticker: string;
  title: string;
  modInWatchlist: () => void;
  pushStockToWatchlistMutation: (variables: object) => any;
}

const AddToWatchlistMutation: React.FC<Props> = (props) => {
  function submit() {
    let token = sessionStorage.getItem("Token");
    if (token) {
      props
        .pushStockToWatchlistMutation({
          variables: {
            stockId: props.stockId,
            ticker: props.ticker,
            title: props.title,
            token: token,
          },
        })
        .catch((err: any) => console.log(err))
        .then((res: any) => {
          props.modInWatchlist();
          console.log(res);
        });
    }
  }

  return (
    <button className={styles.add_to_watchlist} onClick={() => submit()}>
      +Watchlist
    </button>
  );
};

export const AddToWatchlist = compose(
  graphql(pushStockToWatchlistMutation, {
    name: "pushStockToWatchlistMutation",
  })
)(AddToWatchlistMutation);
