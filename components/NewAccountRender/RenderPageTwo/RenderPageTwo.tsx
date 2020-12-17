import React, { useState } from "react";
import { TickerList } from "../TickerList/TickerList";
import { addStocksInitialUserMutation } from "../../queries/queries";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../actions/actions";
import styles from "./styles.module.scss";

interface Redux {
  newaccount: boolean;
  onNewAccountSet: (newacct: boolean) => void;
}

interface Props extends Redux {
  id: number;
  nextPage: (id: number) => void;
  backPage: (id: number) => void;
  addStocksInitialUserMutation: (variables: object) => any;
}

const RenderPageTwoMutation: React.FC<Props> = (props) => {
  const [selected, setSelected] = useState([]);

  function modSelected(passObj: any) {
    let stockArray = [...selected];
    let searchArr = stockArray.find(
      (el: any) => el.stockId === passObj.stockId
    );
    if (searchArr) {
      let searchArrIndex = stockArray.indexOf(searchArr);
      stockArray.splice(searchArrIndex, 1);
      setSelected(stockArray);
    } else {
      stockArray.push(passObj);
      setSelected(stockArray);
    }
    console.log(stockArray);
  }

  function save() {
    props
      .addStocksInitialUserMutation({
        variables: {
          stockList: selected,
          token: sessionStorage.getItem("Token"),
        },
      })
      .catch((err: any) => console.log(err))
      .then((res) => {
        console.log(res);
        props.onNewAccountSet(false);
        console.log(props.newaccount);
      });
  }

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

export const RenderPageTwoRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(RenderPageTwoMutation);

export const RenderPageTwo = compose(
  graphql(addStocksInitialUserMutation, {
    name: "addStocksInitialUserMutation",
  })
)(RenderPageTwoRedux);
