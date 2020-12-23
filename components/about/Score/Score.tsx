import React, { useState } from "react";
import styles from "./styles.module.scss";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { updateTutorialScoreMutation } from "../../queries/queries.js";
const ecstatic = require("../../../public/very_happy.png");
const happy = require("../../../public/happy.png");
const neutral = require("../../../public/neutral.png");
const unhappy = require("../../../public/unhappy.png");
const mad = require("../../../public/mad.png");

interface Props {
  id: string;
  scores: any;
  onSubmit: () => void;
  updateTutorialScoreMutation: (variables: object) => any;
}

const ScoreMutation: React.FC<Props> = (props) => {
  function select(value: number) {
    if (props.scores.scored === false) {
      let token = sessionStorage.getItem("Token");
      if (token) {
        props
          .updateTutorialScoreMutation({
            variables: {
              token: token,
              score: value,
              id: props.id,
            },
          })
          .catch((err: any) => console.log(err))
          .then((res: any) => {
            props.onSubmit();
          });
      }
    }
  }

  function returnIfNotSubmitted() {
    if (props.scores.scored === false) {
      return (
        <div>
          <h3 className={styles.header}>How Would You Rate This Tutorial?</h3>
          <div className={styles.score}>
            <div className={styles.image_container}>
              <img
                className={styles.image}
                onClick={() => select(1)}
                src={ecstatic}
              />
            </div>
            <div className={styles.image_container}>
              <img
                className={styles.image}
                onClick={() => select(2)}
                src={happy}
              />
            </div>
            <div className={styles.image_container}>
              <img
                className={styles.image}
                onClick={() => select(3)}
                src={neutral}
              />
            </div>
            <div className={styles.image_container}>
              <img
                className={styles.image}
                onClick={() => select(4)}
                src={unhappy}
              />
            </div>
            <div className={styles.image_container}>
              <img
                className={styles.image}
                onClick={() => select(5)}
                src={mad}
              />
            </div>
          </div>
        </div>
      );
    } else return null;
  }

  return <div>{returnIfNotSubmitted()}</div>;
};

export const Score = compose(
  graphql(updateTutorialScoreMutation, { name: "updateTutorialScoreMutation" })
)(ScoreMutation);
