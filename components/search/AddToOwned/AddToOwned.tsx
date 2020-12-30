import React, { useState } from "react";
import { pushStockToUserMutation } from "../../queries/queries";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import styles from "./styles.module.scss";

interface Props {
  stockId: string;
  sector: string;
  color: string;
  pushStockToUserMutation: (variables: object) => any;
}

const AddToOwnedMutation: React.FC<Props> = (props) => {
  const [showAddField, setShowAddField] = useState(false);
  const [addedVal, setAddedVal] = useState("");
  const [positiveReturn, setPositiveReturn] = useState(false);

  function submit() {
    let parsed = parseInt(addedVal);
    let token = sessionStorage.getItem("Token");
    if (parsed && token) {
      props
        .pushStockToUserMutation({
          variables: {
            token: token,
            stockId: props.stockId,
            shares: parsed,
            sector: props.sector,
            color: props.color,
          },
        })
        .catch((err: any) => console.log(err))
        .then((res: any) => {
          setAddedVal("");
          setPositiveReturn(true);
          console.log(res);
        });
    }
  }

  function returnFlair() {
    if (positiveReturn === true) {
      return <p className={styles.positive_return_flair}>Added!</p>;
    } else return null;
  }

  function triggerAddToOwned() {
    if (showAddField === true) {
      return (
        <div>
          <button
            className={styles.button}
            onClick={() => setShowAddField(false)}
          >
            X
          </button>
          <label className={styles.label}>#</label>
          <input
            className={styles.input}
            value={addedVal}
            onChange={(e) => setAddedVal(e.target.value)}
            type="number"
            placeholder="0"
            min={0}
          />
          <button className={styles.button} onClick={() => submit()}>
            Add
          </button>
          {returnFlair()}
        </div>
      );
    } else
      return (
        <button className={styles.button} onClick={() => setShowAddField(true)}>
          +Owned
        </button>
      );
  }

  return <div className={styles.add_to_owned}>{triggerAddToOwned()}</div>;
};

export const AddToOwned = compose(
  graphql(pushStockToUserMutation, { name: "pushStockToUserMutation" })
)(AddToOwnedMutation);
