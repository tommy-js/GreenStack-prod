import React, { useState } from "react";
import { pushStockToUserMutation } from "../../queries/queries";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { mapStateToProps, mapDispatchToProps } from "../../actions/actions";
import { connect } from "react-redux";
import { validateString, validateStocks } from "./index";
import styles from "./styles.module.scss";

type StockItem = {
  stockId: string;
  title: string;
  shares: number;
  sector: string;
  ticker: string;
  color: string;
};

interface Redux {
  stocks: StockItem[];
  onStocksSet: (stocks: StockItem[]) => void;
}

interface Props extends Redux {
  stockId: string;
  title: string;
  ticker: string;
  sector: string;
  color: string;
  pushStockToUserMutation: (variables: object) => any;
}

const OwnedStockSpecRender: React.FC<Props> = (props) => {
  const [inputVal, setInputVal] = useState("");

  function modVal(input: string) {
    let validated = validateString(input);
    setInputVal(validated);
  }

  function pushStock() {
    let token = sessionStorage.getItem("Token");
    console.log("SECTOR_OwnedStockSpecRender: " + props.sector);

    let parsedInputVal = parseInt(inputVal);
    let validateObj = validateStocks(
      props.stocks,
      parsedInputVal,
      props.stockId,
      props.title,
      props.ticker
    );

    props
      .pushStockToUserMutation({
        variables: {
          token: token,
          stockId: props.stockId,
          title: props.title,
          ticker: props.ticker,
          shares: parsedInputVal,
          sector: props.sector,
          color: props.color,
        },
      })
      .catch((err: any) => {
        console.log(err);
      })
      .then((res: any) => {
        console.log(res);
        props.onStocksSet(validateObj);
      });
  }

  return (
    <div className={styles.owned_stock_spec}>
      <input
        className={styles.owned_stock_input}
        type="text"
        placeholder="0"
        value={inputVal}
        onChange={(e) => modVal(e.target.value)}
      />
      <button className={styles.owned_stock_button} onClick={() => pushStock()}>
        Add
      </button>
    </div>
  );
};

const OwnedStockSpecRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(OwnedStockSpecRender);

export const OwnedStockSpec = compose(
  graphql(pushStockToUserMutation, { name: "pushStockToUserMutation" })
)(OwnedStockSpecRedux);
