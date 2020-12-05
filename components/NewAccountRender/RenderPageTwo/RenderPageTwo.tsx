import React, { useState } from "react";
import { TickerList } from "../TickerList/TickerList";
import { pushStockToWatchlistMutation } from "../../queries/queries";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import styles from "./styles.module.scss";

interface Props {
  id: number;
  nextPage: (id: number) => void;
  backPage: (id: number) => void;
  pushStockToWatchlistMutation: (variables: object) => void;
}

const RenderPageTwoMutation: React.FC<Props> = (props) => {
  const [selected, setSelected] = useState([]);

  function modSelected(stockId: string) {
    let stockArray = [...selected];
    let searchArr = stockArray.find((el: string) => el === stockId);
    if (searchArr) {
      let searchArrIndex = stockArray.indexOf(searchArr);
      stockArray.splice(searchArrIndex, 1);
      setSelected(stockArray);
    } else {
      stockArray.push(stockId);
      setSelected(stockArray);
    }
    console.log(stockArray);
  }

  function save() {}

  return (
    <React.Fragment>
      <p className={styles.user_init_questions}>
        Which stocks here interest you?
      </p>
      <TickerList modSelected={modSelected} />
      <button className={styles.button} onClick={() => save()}>
        Save
      </button>
    </React.Fragment>
  );
};

export const RenderPageTwo = compose(
  graphql(pushStockToWatchlistMutation, {
    name: "pushStockToWatchlistMutation",
  })
)(RenderPageTwoMutation);
