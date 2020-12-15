import React from "react";
import { removeStockFromWatchlistMutation } from "../../../queries/queries";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import styles from "./styles.module.scss";

interface Props {
  stockId: string;
  modInWatchlist: () => void;
  removeStockFromWatchlistMutation: (variables: object) => any;
}

const RemoveFromWatchlistWatchlist: React.FC<Props> = (props) => {
  function submit() {
    let token = sessionStorage.getItem("Token");
    if (token) {
      props
        .removeStockFromWatchlistMutation({
          variables: {
            stockId: props.stockId,
            token: token,
          },
        })
        .catch((err: any) => console.log(err))
        .then((res: any) => {
          console.log(res);
          props.modInWatchlist();
        });
    }
  }

  return (
    <button className={styles.remove_from_watchlist} onClick={() => submit()}>
      -Watchlist
    </button>
  );
};

export const RemoveFromWatchlist = compose(
  graphql(removeStockFromWatchlistMutation, {
    name: "removeStockFromWatchlistMutation",
  })
)(RemoveFromWatchlistWatchlist);
